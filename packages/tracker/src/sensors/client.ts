import { getSensorsServerUrl, isSensorsDebugLog } from '../config';

type SensorsSdk = {
  init: (config: Record<string, unknown>) => void;
  track: (event: string, properties?: Record<string, unknown>) => void;
  login: (id: string) => void;
  logout: () => void;
  registerPage: (props: Record<string, unknown>) => void;
};

let sensors: SensorsSdk | null = null;
let initPromise: Promise<SensorsSdk | null> | null = null;

export const isSensorsReady = () => sensors != null;

export const getSensors = () => sensors;

export const ensureSensorsInit = async (): Promise<SensorsSdk | null> => {
  if (typeof window === 'undefined') return null;
  if (sensors) return sensors;

  if (!initPromise) {
    initPromise = (async () => {
      const serverUrl = getSensorsServerUrl();
      if (!serverUrl) {
        console.warn('[tracker] Sensors server URL is not configured');
        return null;
      }

      const mod = await import('sa-sdk-javascript');
      const sdk = (mod.default ?? mod) as SensorsSdk;

      sdk.init({
        server_url: serverUrl,
        is_track_single_page: true,
        use_client_time: true,
        // Align with January's successful integration settings.
        send_type: 'ajax',
        batch_send: false,
        source_channel: ['stag'],
        show_log: isSensorsDebugLog(),
        heatmap: {
          clickmap: 'not_collect',
          scroll_notice_map: 'not_collect',
        },
      });

      sensors = sdk;
      return sdk;
    })().catch((err) => {
      console.warn('[tracker] Failed to init Sensors SDK', err);
      initPromise = null;
      return null;
    });
  }

  return initPromise;
};
