import { ensureSensorsInit } from './sensors/client';
import { enqueueSensorsEvents } from './sensors/eventQueue';
import { isSensorsDebugLog } from './config';
import { EmitEvent, EmitData, TrakerData } from './type';
import type { BasicInfo } from './type';

let contextProvider: () => Record<string, unknown> = () => ({});

export const setTrackerContextProvider = (provider: () => Record<string, unknown>) => {
  contextProvider = provider;
};

export const getTrackerContext = () => contextProvider();

class Tracker {
  private async send(data: TrakerData[]) {
    if (isSensorsDebugLog()) {
      console.log('[tracker] sensors', data);
    }

    try {
      await enqueueSensorsEvents(data);
    } catch (err) {
      console.warn('[tracker] send failed', err);
    }
  }

  emit(data: EmitData[]) {
    if (typeof window !== 'undefined') {
      void ensureSensorsInit();
    }

    const trakerData: TrakerData[] = data.map((item) => ({
      ...getTrackerContext(),
      ...item,
    })) as TrakerData[];

    return this.send(trakerData);
  }
}

const tracker = new Tracker();

export { EmitEvent, type BasicInfo, type EmitData, type TrakerData };
export { getSensorsServerUrl, setTrackerOptions, type TrackerOptions } from './config';
export { initTracker, syncTrackerIdentity, bindSensorsUser, unbindSensorsUser } from './initTracker';
export { getTrackErrorCode } from './getTrackErrorCode';
export { emitTrackEvent } from './emit';
export default tracker;
