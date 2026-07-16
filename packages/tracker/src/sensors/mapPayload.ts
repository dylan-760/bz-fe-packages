import type { BasicInfo } from '../type';
import type { TrakerData } from '../type';

const SENSORS_RESERVED_PROPERTY_KEYS = new Set(['distinct_id', 'time', 'event', 'properties', 'anonymous_id', 'type']);

/** Context fields merged into every Sensors event (excluding `type` and nested `properties`) */
export const mapBasicInfoToProperties = (basic: BasicInfo) => {
  const { type: _type, deviceId, ...rest } = basic;
  const properties: Record<string, unknown> = {
    ...rest,
    device_id: deviceId,
  };
  return Object.fromEntries(Object.entries(properties).filter(([key]) => !SENSORS_RESERVED_PROPERTY_KEYS.has(key)));
};

const stripReservedFromProperties = (properties: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(properties).filter(([key]) => !SENSORS_RESERVED_PROPERTY_KEYS.has(key)));

export const splitTrackerRecord = (item: TrakerData) => {
  const { event, properties, type, ...basicFields } = item;

  return {
    event,
    properties: stripReservedFromProperties({
      ...mapBasicInfoToProperties({ type, ...basicFields } as BasicInfo),
      ...properties,
    }),
  };
};
