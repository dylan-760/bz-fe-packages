# @bz/tracker

浏览器埋点核心包。业务方负责提供上下文与身份，并调用事件发送 API。

```ts
import tracker, { initTracker, setTrackerContextProvider, setTrackerOptions, syncTrackerIdentity } from '@bz/tracker';

setTrackerContextProvider(() => ({
  deviceId: 'device-id',
  distinct_id: 'user-id',
  lang: 'en-US',
}));

setTrackerOptions({
  serverUrl: () => 'https://collector.example.com/track',
  debug: () => false,
});

await initTracker(userId);
syncTrackerIdentity(userId);

void tracker.emit([{ event: 'example_event', properties: {} }]);
```
