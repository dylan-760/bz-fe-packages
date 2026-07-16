import tracker from '.';

const normalizeTrackValue = (value: unknown): unknown => {
  if (value === undefined || value === null) return '';
  return value;
};

const normalizeTrackProperties = (properties: Record<string, unknown>) => {
  return Object.fromEntries(Object.entries(properties).map(([key, value]) => [key, normalizeTrackValue(value)]));
};

export const emitTrackEvent = (event: string, properties: Record<string, unknown> = {}) => {
  return tracker.emit([
    {
      event,
      properties: normalizeTrackProperties(properties),
    },
  ]);
};
