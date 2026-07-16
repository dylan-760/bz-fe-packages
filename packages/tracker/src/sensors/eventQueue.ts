import { EmitEvent } from '../type';
import type { TrakerData } from '../type';
import {
  TRACKER_BATCH_FLUSH_MS,
  TRACKER_BATCH_MAX_SIZE,
  TRACKER_EXPOSURE_DWELL_MS,
  isSensorsDebugLog,
} from '../config';
import { sendSensorsBatch } from './transport';

const PAGE_DWELL_EVENTS = new Set<string>([
  EmitEvent.BZ_PAGE_VIEW,
  EmitEvent.LOGIN_WINDOW_EXPOSE,
  EmitEvent.REGISTER_WINDOW_EXPOSE,
  EmitEvent.DEPOSIT_WINDOW_EXPOSE,
  EmitEvent.WITHDRAW_WINDOW_EXPOSE,
]);

const isExposureEvent = (event: string) =>
  PAGE_DWELL_EVENTS.has(event) || /_exposed$/.test(event) || event === EmitEvent.BZ_MATCH_EXPOSE;

const getDwellSlotKey = (event: string, properties: Record<string, unknown>) => {
  if (PAGE_DWELL_EVENTS.has(event)) return '__page_dwell__';

  if (event === EmitEvent.MATCH_EXPOSED || event === EmitEvent.BZ_MATCH_EXPOSE) {
    return `match:${properties.match_id ?? ''}`;
  }

  if (event === EmitEvent.SELECTION_EXPOSED) {
    return `selection:${properties.match_id}:${properties.market_id}:${properties.outcome_id}`;
  }

  if (event === EmitEvent.TEMPLATE_EXPOSED) {
    return `template:${properties.template_id ?? properties.match_id ?? ''}`;
  }

  return `event:${event}`;
};

let immediateQueue: TrakerData[] = [];
let retryQueue: TrakerData[] = [];
const delayedSlots = new Map<string, TrakerData>();

let dwellTimer: ReturnType<typeof setTimeout> | undefined;
let batchTimer: ReturnType<typeof setTimeout> | undefined;
let flushing = false;
let lifecycleBound = false;

const scheduleBatchFlush = () => {
  if (batchTimer) return;

  batchTimer = setTimeout(() => {
    batchTimer = undefined;
    void flushImmediateQueue();
  }, TRACKER_BATCH_FLUSH_MS);
};

const flushDelayedExposures = () => {
  if (!delayedSlots.size) return;

  immediateQueue.push(...delayedSlots.values());
  delayedSlots.clear();
  scheduleBatchFlush();
};

const scheduleDwellFlush = () => {
  if (dwellTimer) clearTimeout(dwellTimer);

  dwellTimer = setTimeout(() => {
    dwellTimer = undefined;
    flushDelayedExposures();
  }, TRACKER_EXPOSURE_DWELL_MS);
};

const bindLifecycleFlush = () => {
  if (lifecycleBound || typeof window === 'undefined') return;
  lifecycleBound = true;

  const flushAll = () => {
    flushDelayedExposures();
    void flushImmediateQueue(true);
  };

  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushAll();
  });
  window.addEventListener('pagehide', flushAll);
};

const flushImmediateQueue = async (forceAll = false) => {
  if (flushing) return;

  const pending = [...retryQueue, ...immediateQueue];
  retryQueue = [];
  immediateQueue = [];

  if (!pending.length) return;

  flushing = true;
  let failedBatch: TrakerData[] = [];
  try {
    while (pending.length) {
      const size = forceAll ? pending.length : Math.min(pending.length, TRACKER_BATCH_MAX_SIZE);
      const batch = pending.splice(0, size);
      failedBatch = batch;
      await sendSensorsBatch(batch);
      failedBatch = [];
    }
  } catch (err) {
    console.warn('[tracker] batch send failed, will retry', err);
    retryQueue.unshift(...failedBatch, ...pending);
  } finally {
    flushing = false;
    if (immediateQueue.length || retryQueue.length) scheduleBatchFlush();
  }
};

export const enqueueSensorsEvents = (data: TrakerData[]) => {
  if (typeof window === 'undefined') return Promise.resolve();

  bindLifecycleFlush();

  for (const item of data) {
    if (!item.event) continue;

    if (isExposureEvent(item.event)) {
      delayedSlots.set(getDwellSlotKey(item.event, item.properties), item);
      scheduleDwellFlush();
      continue;
    }

    immediateQueue.push(item);
  }

  if (isSensorsDebugLog() && data.length) {
    console.log('[tracker] queued', data);
  }

  scheduleBatchFlush();
  return Promise.resolve();
};

export const flushTrackerQueue = () => {
  flushDelayedExposures();
  return flushImmediateQueue(true);
};
