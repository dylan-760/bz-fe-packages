// TODO 同样通过扫描 public/frontend/themeimg 目录来自动生成
import { Theme } from '../types';

import { generateAssetUrl } from '../utils';

const walletThemeAssets = {
  Credit: {
    [Theme.bakos]: generateAssetUrl('themeimg/Wallet/CreditBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Wallet/CreditCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Wallet/CreditPlaster.png'),
  },
  responsibleGamblingWallet: {
    [Theme.bakos]: generateAssetUrl('themeimg/Wallet/FaqBakosBlue01.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Wallet/FaqCoolBlack01.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Wallet/FaqPlaster01.png'),
  },
  age18PlusWallet: {
    [Theme.bakos]: generateAssetUrl('themeimg/Wallet/FaqBakosBlue02.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Wallet/FaqCoolBlack02.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Wallet/FaqPlaster02.png'),
  },
  cryptoGamblingFoundationWallet: {
    [Theme.bakos]: generateAssetUrl('themeimg/Wallet/FaqBakosBlue03.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Wallet/FaqCoolBlack03.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Wallet/FaqPlaster03.png'),
  },
  iTechLabsWallet: {
    [Theme.bakos]: generateAssetUrl('themeimg/Wallet/FaqBakosBlue04.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Wallet/FaqCoolBlack04.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Wallet/FaqPlaster04.png'),
  },
};

export default walletThemeAssets;
