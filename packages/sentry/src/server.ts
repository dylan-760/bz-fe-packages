import { AsyncLocalStorage } from 'node:async_hooks';

import type { SentryOptions } from '.';

let serverModule: typeof import('@sentry/node') | null = null;
let serverInitPromise: Promise<typeof import('@sentry/node')> | null = null;
let serverSetupPromise: Promise<void> | null = null;
let processHandlersRegistered = false;
let serverInitialized = false;
const SERVER_CAPTURED_FLAG = Symbol.for('@bz/sentry/serverCaptured');
const serverTagsStorage = new AsyncLocalStorage<Record<string, string>>();

function isCloudflareRuntime() {
  return (
    (typeof process !== 'undefined' && (process.env.CF_PAGES === '1' || process.env.CF_WORKER === '1')) ||
    'WebSocketPair' in globalThis
  );
}

async function loadServerSdk() {
  if (serverModule) return serverModule;
  if (!serverInitPromise) {
    serverInitPromise = import('@sentry/node').then((mod) => {
      serverModule = mod;
      return mod;
    });
  }
  return serverInitPromise;
}

export type SentryServerOptions = SentryOptions & {
  /**
   * Whether to register global unhandled exception handlers (unhandledRejection and uncaughtException).
   */
  registerProcessHandlers?: boolean;
};

function normalizeTags(tags: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(tags).map(([key, value]) => [key, value === undefined || value === null ? '' : String(value)])
  );
}

function getServerTags() {
  return serverTagsStorage.getStore() || {};
}

export function runWithServerSentryTags<T>(runner: () => T) {
  return serverTagsStorage.run({}, runner);
}

export function setServerTags(tags: Record<string, string>) {
  const store = serverTagsStorage.getStore();
  if (!store) return;

  Object.assign(store, normalizeTags(tags));
}

export async function initSentryServer(opts: SentryServerOptions = {}) {
  if (typeof window !== 'undefined') {
    console.warn('[@bz/sentry] initSentryServer should only be called in a server environment.');
    return;
  }

  if (!opts.dsn) {
    console.warn('[@bz/sentry] Sentry DSN not provided for server initialization.');
    return;
  }

  if (serverInitialized) {
    return;
  }

  if (serverSetupPromise) {
    return serverSetupPromise;
  }

  serverSetupPromise = (async () => {
    const Sentry = await loadServerSdk();
    const initOptions: Parameters<typeof Sentry.init>[0] = {
      dsn: opts.dsn,
      release: opts.release,
      environment: opts.environment,
      tracesSampleRate: opts.tracesSampleRate ?? 0,
      sampleRate: opts.sampleRate ?? 1,
    };

    if (isCloudflareRuntime()) {
      initOptions.defaultIntegrations = false;
      initOptions.autoSessionTracking = false;
    }

    Sentry.init(initOptions);

    serverInitialized = true;

    if (opts.registerProcessHandlers !== false && !processHandlersRegistered) {
      process.on('unhandledRejection', (reason) => {
        void captureServerException(reason);
      });
      process.on('uncaughtException', (error) => {
        void captureServerException(error);
      });
      processHandlersRegistered = true;
    }
  })().catch((error) => {
    serverSetupPromise = null;
    console.error('[@bz/sentry] Failed to initialize Sentry on the server.', error);
  });

  return serverSetupPromise;
}

export function markServerExceptionCaptured(err: any) {
  if (!err || (typeof err !== 'object' && typeof err !== 'function')) return;

  try {
    Object.defineProperty(err, SERVER_CAPTURED_FLAG, {
      configurable: true,
      value: true,
    });
  } catch (error) {
    // Ignore non-extensible objects.
  }
}

export function isServerExceptionCaptured(err: any) {
  return Boolean(err && (typeof err === 'object' || typeof err === 'function') && err[SERVER_CAPTURED_FLAG]);
}

function normalizeError(err: any) {
  if (err instanceof Error) return err;
  if (typeof err === 'string') return new Error(err);

  try {
    return new Error(JSON.stringify(err));
  } catch {
    return new Error(String(err));
  }
}

export async function captureServerException(
  err: any,
  context?: Record<string, any>,
  tags?: Record<string, string>,
  options?: { force?: boolean; flush?: boolean; flushTimeout?: number }
) {
  try {
    if (!options?.force && isServerExceptionCaptured(err)) {
      return;
    }

    if (serverSetupPromise) {
      await serverSetupPromise;
    }

    if (!serverInitialized) {
      return;
    }

    markServerExceptionCaptured(err);

    const Sentry = await loadServerSdk();
    const error = normalizeError(err);
    const eventId = Sentry.captureException(error, {
      extra: context,
      tags: {
        side: 'server',
        ...getServerTags(),
        ...tags,
      },
    });

    if (options?.flush) {
      const flushed = await Sentry.flush(options.flushTimeout ?? 2000);
      if (!flushed) {
        return;
      }
    }

    return eventId;
  } catch (error) {
    console.error('[@bz/sentry] Failed to capture server exception.', error);
  }
}

export async function captureServerMessage(
  message: string,
  level: 'info' | 'warning' | 'error' = 'info',
  context?: Record<string, any>
) {
  try {
    if (serverSetupPromise) {
      await serverSetupPromise;
    }

    if (!serverInitialized) {
      return;
    }

    const Sentry = await loadServerSdk();
    return Sentry.captureMessage(message, { level, extra: context, tags: { side: 'server', ...getServerTags() } });
  } catch (error) {
    console.error('[@bz/sentry] Failed to capture server message.', error);
  }
}
