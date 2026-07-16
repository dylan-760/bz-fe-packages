import { getTrackerContext } from '.';
import { ensureSensorsInit, getSensors } from './sensors/client';
import { bindSensorsUser, unbindSensorsUser } from './sensors/identity';

/** Initialize Sensors SDK (call once on app startup). */
export const initTracker = async (userId?: number) => {
  if (typeof window === 'undefined') return;

  await ensureSensorsInit();

  const basic = getTrackerContext();
  getSensors()?.registerPage({
    platform: String(basic.platform ?? ''),
    device_type: String(basic.device_type ?? ''),
    lang: String(basic.lang ?? ''),
    theme: String(basic.theme ?? ''),
  });

  if (userId && userId > 0) {
    await bindSensorsUser(userId);
  }
};

/** Sync Sensors login/logout with the user ID provided by the host application. */
export const syncTrackerIdentity = (userId?: number) => {
  if (typeof window === 'undefined') return;

  if (userId && userId > 0) {
    void bindSensorsUser(userId);
  } else {
    unbindSensorsUser();
  }
};

export { bindSensorsUser, unbindSensorsUser } from './sensors/identity';
