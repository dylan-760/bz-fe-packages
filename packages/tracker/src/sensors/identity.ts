import { ensureSensorsInit, getSensors, isSensorsReady } from './client';

/** Bind logged-in user to Sensors (call after login success or on app boot when session exists) */
export const bindSensorsUser = async (userId: string | number) => {
  if (!userId || Number(userId) <= 0) return;
  await ensureSensorsInit();
  getSensors()?.login(String(userId));
};

/** Clear Sensors login state (call on logout) */
export const unbindSensorsUser = () => {
  if (!isSensorsReady()) return;
  getSensors()?.logout();
};
