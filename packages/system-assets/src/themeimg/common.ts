// TODO 同样通过扫描 public/frontend/themeimg 目录来自动生成
import { Theme } from '../types';

import { generateAssetUrl } from '../utils';

const commonThemeAssets = {
  favouritesemptyEmptyimg: {
    [Theme.bakos]: generateAssetUrl('themeimg/Common/Emptyimg/FavouritesEmptyBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Common/Emptyimg/FavouritesEmptyCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Common/Emptyimg/FavouritesEmptyPlaster.png'),
  },
  generalemptyEmptyimg: {
    [Theme.bakos]: generateAssetUrl('themeimg/Common/Emptyimg/GeneralEmptyBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Common/Emptyimg/GeneralEmptyCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Common/Emptyimg/GeneralEmptyPlaster.png'),
  },
  mybetsemptyEmptyimg: {
    [Theme.bakos]: generateAssetUrl('themeimg/Common/Emptyimg/MyBetsEmptyBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Common/Emptyimg/MyBetsEmptyCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Common/Emptyimg/MyBetsEmptyPlaster.png'),
  },
  successimgGeneralStatusimg: {
    [Theme.bakos]: generateAssetUrl('themeimg/Common/GeneralStatusimg/SuccessimgBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Common/GeneralStatusimg/SuccessimgCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Common/GeneralStatusimg/SuccessimgPlaster.png'),
  },
  emptyEmptyimg: {
    [Theme.bakos]: generateAssetUrl('themeimg/Common/Emptyimg/EmptyBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Common/Emptyimg/EmptyCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Common/Emptyimg/EmptyPlaster.png'),
  },
};

export default commonThemeAssets;
