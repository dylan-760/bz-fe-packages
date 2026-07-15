import { createContext, useContext, type Accessor, type ParentProps } from 'solid-js';

import themeAssets from './themeimg';
import { Theme } from './types';

export { useS3 } from './utils';
export { Theme } from './types';

type SystemAssetKey = keyof typeof themeAssets;

const SystemAssetsContext = createContext<Accessor<Theme>>();

export function SystemAssetsProvider(props: ParentProps<{ theme: Accessor<Theme> }>) {
  return SystemAssetsContext.Provider({
    value: props.theme,
    get children() {
      return props.children;
    },
  });
}

export const useSystemAssets = () => {
  const theme = useContext(SystemAssetsContext);

  if (!theme) {
    throw new Error('useSystemAssets must be used within a SystemAssetsProvider');
  }

  return [
    new Proxy(
      {},
      {
        get(_, prop) {
          if (typeof prop !== 'string') return undefined;
          const key = prop as SystemAssetKey;
          return themeAssets[key]?.[theme()];
        },
      }
    ) as Record<SystemAssetKey, string>,
    (key: string) => key as SystemAssetKey,
  ] as const;
};
