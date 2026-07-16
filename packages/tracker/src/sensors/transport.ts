import type { TrakerData } from '../type';
import { getSensorsServerUrl, isSensorsDebugLog } from '../config';
import { buildSensorsTrackPayload } from './buildPayload';
import { encodeSensorsTrackBody } from './encodeTrackData';

/** Batch POST to Sensors collector (app-controlled; SDK batch_send disabled). */
export const sendSensorsBatch = async (data: TrakerData[]) => {
  if (!data.length) return;

  const serverUrl = getSensorsServerUrl();
  if (!serverUrl) {
    throw new Error('[tracker] Sensors server URL is not configured');
  }

  const payloads = data.map(buildSensorsTrackPayload).filter((item) => item.event);

  if (!payloads.length) return;

  if (isSensorsDebugLog()) {
    console.log('[tracker] sensors batch', payloads);
  }

  const body = encodeSensorsTrackBody(payloads);

  const response = await fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
    keepalive: payloads.length === 1,
  });

  if (!response.ok) {
    throw new Error(`[tracker] Sensors batch failed: ${response.status}`);
  }
};

/** @deprecated Use enqueueSensorsEvents + sendSensorsBatch */
export const sendSensorsEvents = async (data: TrakerData[]) => {
  await sendSensorsBatch(data);
};
