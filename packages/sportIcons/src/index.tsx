import { createComponent, createMemo, mergeProps, splitProps, type JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { SportIdMap, SportTypeMap, type SportType } from './sports';

export type SportIconType = 'default' | 'solid';

export interface SportIconProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  assetBaseUrl?: string;
  type?: SportIconType;
  sportId?: string;
}

const DEFAULT_ASSET_BASE_URL = '/frontend';
const preloadedSportIconUrls = new Set<string>();

const toSportIconName = (sportType: SportType): string => sportType.split('_').map(toTitleCase).join('');

const toTitleCase = (input: string): string => {
  if (/^\d+X\d+$/.test(input)) {
    return input;
  }

  return `${input.charAt(0)}${input.slice(1).toLowerCase()}`;
};

export const getSportTypeById = (sportId?: string): SportType | undefined => {
  const sport = Object.entries(SportIdMap).find(([, id]) => id === sportId);
  return sport ? (SportTypeMap[sport[0] as keyof typeof SportTypeMap] as SportType) : undefined;
};

export const getSportIconUrl = (
  sportId?: string,
  type: SportIconType = 'default',
  assetBaseUrl: string = DEFAULT_ASSET_BASE_URL
): string => {
  const sportType = getSportTypeById(sportId || SportIdMap.SOCCER) || SportTypeMap.SOCCER;
  const suffix = type === 'solid' ? 'colorful' : 'default';
  const baseUrl = assetBaseUrl.replace(/\/$/, '');

  return `${baseUrl}/sportsSprite/${toSportIconName(sportType)}-${suffix}.svg`;
};

export const preloadSportIcons = (
  sportIds: Array<string | undefined>,
  types: SportIconType[] = ['solid'],
  assetBaseUrl?: string
) => {
  if (typeof document === 'undefined') {
    return;
  }

  const urls = new Set(sportIds.flatMap((sportId) => types.map((type) => getSportIconUrl(sportId, type, assetBaseUrl))));

  urls.forEach((url) => {
    if (preloadedSportIconUrls.has(url)) {
      return;
    }

    preloadedSportIconUrls.add(url);

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.dataset.sportIconPreload = 'true';
    document.head.appendChild(link);
  });
};

export const SportIcon = (props: SportIconProps) => {
  const [split, rest] = splitProps(props, ['assetBaseUrl', 'sportId', 'type', 'style']);
  const iconUrl = createMemo(() => getSportIconUrl(split.sportId, split.type, split.assetBaseUrl));

  const baseStyle = createMemo<JSX.CSSProperties>(() => {
    const icon = `url("${iconUrl()}")`;

    if (split.type === 'solid') {
      return {
        display: 'inline-block',
        'background-image': icon,
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-size': 'contain',
      };
    }

    return {
      display: 'inline-block',
      'background-color': 'currentColor',
      'mask-image': icon,
      'mask-position': 'center',
      'mask-repeat': 'no-repeat',
      'mask-size': 'contain',
      '-webkit-mask-image': icon,
      '-webkit-mask-position': 'center',
      '-webkit-mask-repeat': 'no-repeat',
      '-webkit-mask-size': 'contain',
    };
  });

  const style = createMemo(() => {
    if (typeof split.style === 'string') {
      return `${Object.entries(baseStyle())
        .map(([key, value]) => `${key}:${value}`)
        .join(';')};${split.style}`;
    }

    return { ...baseStyle(), ...split.style };
  });

  return createComponent(Dynamic, mergeProps(rest, { component: 'span', get style() { return style(); } }));
};

export { SportIdMap, SportTypeMap };
export type { SportType };
