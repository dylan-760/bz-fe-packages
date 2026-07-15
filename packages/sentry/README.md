# @bz/sentry

```ts
import { initSentry } from '@bz/sentry';

initSentry({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  tracesSampleRate: 0.1,
  release: import.meta.env.VITE_APP_VERSION,
  environment: process.env.NODE_ENV,
});
```
