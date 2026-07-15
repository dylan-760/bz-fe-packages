# @bz/sport-icons

Shared SolidJS sports icon component for BZ web applications.

```tsx
import { SportIcon } from '@bz/sport-icons';

<SportIcon sportId="sr:sport:1" type="solid" class="size-5" />;
```

Icons are resolved from `/frontend/sportsSprite` by default. Set `assetBaseUrl` when the consumer serves these assets from another location.
