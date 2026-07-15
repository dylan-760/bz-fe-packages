import * as Sentry from '@sentry/solid';

export type SentryOptions = {
  dsn?: string;
  tracesSampleRate?: number;
  release?: string;
  environment?: string;
  sampleRate?: number;
  projectId?: string;
  issueListUrl?: string;
};

export type SentryEventLink = {
  eventId?: string;
  url?: string;
  source: 'manual' | 'window.error' | 'unhandledrejection';
  timestamp: number;
};

type ApiErrorTags = {
  apiName: string;
  apiMethod: string;
  errorName: string;
  errorCode: string;
  apiUrl: string;
};

const DEFAULT_SENTRY_ISSUE_LIST_URL = 'https://sentry.bz.private/organizations/bz-fe/issues/';
const DEFAULT_SENTRY_PROJECT_ID = '1';
const DEFAULT_CLIENT_CAPTURE_INTEGRATION_NAMES = new Set(['GlobalHandlers', 'TryCatch', 'BrowserApiErrors']);
const SERVER_SENTRY_ENTRY = '@bz/sentry/server';

let sentryIssueListUrl = DEFAULT_SENTRY_ISSUE_LIST_URL;
let sentryProjectId = DEFAULT_SENTRY_PROJECT_ID;
let windowHandlersRegistered = false;

export function getSentryIssueUrl(eventId?: string) {
  if (!eventId) return;

  const params = new URLSearchParams({
    project: sentryProjectId,
    query: `id:${eventId}`,
    referrer: 'issue-list',
    statsPeriod: '90d',
  });

  return `${sentryIssueListUrl}?${params.toString()}`;
}

function filterDefaultClientCaptureIntegrations(defaultIntegrations: any[]) {
  return defaultIntegrations.filter((integration) => !DEFAULT_CLIENT_CAPTURE_INTEGRATION_NAMES.has(integration?.name));
}

function mergeClientIntegrations(defaultIntegrations: any[], customIntegrations: any[], extraIntegrations?: any) {
  const filteredDefaultIntegrations = filterDefaultClientCaptureIntegrations(defaultIntegrations);
  const resolvedIntegrations =
    typeof extraIntegrations === 'function'
      ? extraIntegrations(filteredDefaultIntegrations)
      : extraIntegrations
        ? [...filteredDefaultIntegrations, ...extraIntegrations]
        : filteredDefaultIntegrations;

  const safeResolvedIntegrations = Array.isArray(resolvedIntegrations)
    ? resolvedIntegrations
    : filteredDefaultIntegrations;

  return [...filterDefaultClientCaptureIntegrations(safeResolvedIntegrations), ...customIntegrations];
}

function importServerSentry() {
  return import(/* @vite-ignore */ SERVER_SENTRY_ENTRY) as Promise<typeof import('./server')>;
}

function normalizeException(input: unknown, fallbackMessage: string) {
  return input === undefined || input === null ? new Error(fallbackMessage) : input;
}

function stringifyTagValue(value: unknown) {
  return value === undefined || value === null ? '' : String(value);
}

function isApiError(error: unknown) {
  if (!error || (typeof error !== 'object' && typeof error !== 'function')) return false;

  const name = (error as { nameAlias?: unknown }).nameAlias;
  return name === 'HttpError' || name === 'ServerError';
}

function getApiErrorTags(error: unknown): ApiErrorTags | undefined {
  if (!isApiError(error)) return;

  const apiError = error as {
    apiName?: unknown;
    apiMethod?: unknown;
    method?: unknown;
    name?: unknown;
    code?: unknown;
    apiUrl?: unknown;
    url?: unknown;
  };

  return {
    apiName: stringifyTagValue(apiError.apiName),
    apiMethod: stringifyTagValue(apiError.apiMethod || apiError.method),
    errorName: stringifyTagValue(apiError.name),
    errorCode: stringifyTagValue(apiError.code),
    apiUrl: stringifyTagValue(apiError.apiUrl || apiError.url),
  };
}

function getClientTags(error: unknown, tags?: Record<string, any>) {
  const apiTags = getApiErrorTags(error);

  return {
    ...(apiTags || {}),
    ...(tags || {}),
  };
}

function recordClientSentryEvent(source: SentryEventLink['source'], eventId?: string) {
  if (typeof window === 'undefined') return;

  const event = {
    eventId,
    url: getSentryIssueUrl(eventId),
    source,
    timestamp: Date.now(),
  };

  if (source === 'manual' && event.url) {
    console.error(`[@bz/sentry] ${source} captured: ${event.url}`);
  } else if (source === 'manual') {
    console.error(`[@bz/sentry] ${source} captured without an event id.`);
  }

  window.dispatchEvent(new CustomEvent('bz:sentry-error-captured', { detail: event }));
}

function captureClientWindowException(
  source: 'window.error' | 'unhandledrejection',
  error: unknown,
  context?: Record<string, any>
) {
  const eventId = Sentry.captureException(normalizeException(error, `Captured ${source}`), {
    extra: context,
    tags: {
      side: 'client',
      errorSource: source,
      ...(getApiErrorTags(error) || {}),
    },
  });

  recordClientSentryEvent(source, eventId);
}

export function initSentry(opts: SentryOptions = {}) {
  if (!opts.dsn) {
    console.warn('[@bz/sentry] Sentry DSN not provided');
    return;
  }

  sentryIssueListUrl = opts.issueListUrl || DEFAULT_SENTRY_ISSUE_LIST_URL;
  sentryProjectId = opts.projectId || DEFAULT_SENTRY_PROJECT_ID;

  // BrowserTracing is optional. Require dynamically so the package scaffold
  // does not force installing @sentry/tracing during initial setup.
  const integrations: any[] = [Sentry.replayIntegration()];
  if (opts.tracesSampleRate && opts.tracesSampleRate > 0) {
    try {
      const { BrowserTracing } = require('@sentry/tracing');
      integrations.push(new BrowserTracing());
    } catch {
      console.warn('[@bz/sentry] @sentry/tracing not installed; skipping tracing integration.');
    }
  }

  const restOptions = (opts as any).rest || {};

  Sentry.init({
    dsn: opts.dsn,
    tracesSampleRate: opts.tracesSampleRate ?? 0,
    sampleRate: opts.sampleRate ?? 1,
    release: opts.release,
    environment: opts.environment,
    sendDefaultPii: true,
    // Session Replay
    replaysSessionSampleRate: 0.01,
    replaysOnErrorSampleRate: 1.0,
    // Allow passing other configurations
    ...restOptions,
    integrations: (defaultIntegrations: any[]) =>
      mergeClientIntegrations(defaultIntegrations, integrations, restOptions.integrations),
  });

  // Global handlers
  if (windowHandlersRegistered) return;
  windowHandlersRegistered = true;

  window.addEventListener('error', (e: ErrorEvent) => {
    captureClientWindowException('window.error', e.error || e.message, {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
    });
  });

  window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
    captureClientWindowException('unhandledrejection', e.reason);
  });
}

export function captureException(err: any, context?: Record<string, any>, tags?: Record<string, any>) {
  if (typeof window === 'undefined') {
    void captureExceptionAsync(err, context, tags);
    return;
  }

  const eventId = Sentry.captureException(err, { extra: context, tags: getClientTags(err, tags) });
  recordClientSentryEvent('manual', eventId);

  return eventId;
}

export async function captureExceptionAsync(
  err: any,
  context?: Record<string, any>,
  tags?: Record<string, any>,
  options?: { force?: boolean; flush?: boolean; flushTimeout?: number }
) {
  if (typeof window === 'undefined') {
    return importServerSentry()
      .then(({ captureServerException }) => captureServerException(err, context, tags, options))
      .catch((error) => {
        console.error('[@bz/sentry] Failed to capture server exception.', error);
      });
  }

  const eventId = Sentry.captureException(err, { extra: context, tags: getClientTags(err, tags) });

  if (options?.flush) {
    const flushed = await Sentry.flush(options.flushTimeout ?? 2000).catch(() => false);
    if (!flushed) {
      return;
    }
  }

  recordClientSentryEvent('manual', eventId);

  return eventId;
}

export function captureMessage(
  msg: string,
  level: 'info' | 'warning' | 'error' = 'info',
  context?: Record<string, any>
) {
  if (typeof window === 'undefined') {
    importServerSentry()
      .then(({ captureServerMessage }) => {
        void captureServerMessage(msg, level, context);
      })
      .catch((error) => {
        console.error('[@bz/sentry] Failed to capture server message.', error);
      });
    return;
  }

  Sentry.captureMessage(msg, { level, extra: context });
}

export function setUser(userId: string | null, emailOrPhone?: string) {
  if (typeof window === 'undefined') {
    return;
  }

  if (userId === null) {
    Sentry.setUser(null);
    return;
  }

  Sentry.setUser({ id: userId, username: emailOrPhone });
}

export function setTags(tags: Record<string, string>) {
  if (typeof window === 'undefined') {
    void setTagsAsync(tags);
    return;
  }

  Sentry.setTags(tags);
}

export async function setTagsAsync(tags: Record<string, string>) {
  if (typeof window === 'undefined') {
    return importServerSentry()
      .then(({ setServerTags }) => setServerTags(tags))
      .catch((error) => {
        console.error('[@bz/sentry] Failed to set server tags.', error);
      });
  }

  Sentry.setTags(tags);
}
