// TODO 同样通过扫描 public/frontend/themeimg 目录来自动生成
import { Theme } from '../types';

import { generateAssetUrl } from '../utils';

const downloadAppThemeAssets = {
  AppStoreImg: {
    [Theme.bakos]: generateAssetUrl('themeimg/DownloadApp/appstore_dark.svg'),
    [Theme.cool]: generateAssetUrl('themeimg/DownloadApp/appstore_dark.svg'),
    [Theme.plaster]: generateAssetUrl('themeimg/DownloadApp/appstore_light.svg'),
  },
  GooglePlayImg: {
    [Theme.bakos]: generateAssetUrl('themeimg/DownloadApp/googleplay_dark.svg'),
    [Theme.cool]: generateAssetUrl('themeimg/DownloadApp/googleplay_dark.svg'),
    [Theme.plaster]: generateAssetUrl('themeimg/DownloadApp/googleplay_light.svg'),
  },
};

export default downloadAppThemeAssets;
