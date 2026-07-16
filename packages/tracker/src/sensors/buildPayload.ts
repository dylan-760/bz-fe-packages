import type { TrakerData } from '../type';
import { splitTrackerRecord } from './mapPayload';

export const buildSensorsTrackPayload = (item: TrakerData) => {
  const { event, properties } = splitTrackerRecord(item);

  return {
    type: item.type || 'track',
    event,
    time: item.time,
    distinct_id: item.distinct_id,
    anonymous_id: item.anonymous_id,
    properties,
  };
};
