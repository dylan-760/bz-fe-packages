type ConfigValue<T> = T | (() => T);

export type TrackerOptions = {
  serverUrl?: ConfigValue<string | undefined>;
  debug?: ConfigValue<boolean | undefined>;
};

let options: TrackerOptions = {};

const resolve = <T>(value: ConfigValue<T> | undefined): T | undefined => {
  return typeof value === 'function' ? (value as () => T)() : value;
};

export const setTrackerOptions = (nextOptions: TrackerOptions) => {
  options = { ...options, ...nextOptions };
};

export const getSensorsServerUrl = () => resolve(options.serverUrl) || '';

export const isSensorsDebugLog = () => resolve(options.debug) === true;

/** Dwell time before exposure events are sent (ms) */
export const TRACKER_EXPOSURE_DWELL_MS = 2000;

/** Interval to flush immediate (non-exposure) events in batches (ms) */
export const TRACKER_BATCH_FLUSH_MS = 300;

/** Max events per batch request */
export const TRACKER_BATCH_MAX_SIZE = 20;
