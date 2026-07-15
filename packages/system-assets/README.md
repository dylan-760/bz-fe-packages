# @bz/system-assets

Themed asset manifest for BZ web applications. Assets are resolved from
`/frontend/themeimg` and remain hosted by the consuming application or CDN.

```tsx
import { SystemAssetsProvider, Theme, useSystemAssets } from '@bz/system-assets';

<SystemAssetsProvider theme={() => Theme.bakos}>
  <App />
</SystemAssetsProvider>;

const [assets] = useSystemAssets();
const url = assets.generalemptyEmptyimg;
```
