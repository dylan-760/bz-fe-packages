import { Theme } from '../types';

import { generateAssetUrl } from '../utils';

const beslipimgThemeAssets = {
  betlimitexceededCombo: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/Combo/BetlimitexceededBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/Combo/BetlimitexceededCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/Combo/BetlimitexceededPlaster.png'),
  },
  devprogressCombo: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/Combo/DevProgressBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/Combo/DevProgressCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/Combo/DevProgressPlaster.png'),
  },
  marketisnotavailableCombo: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/Combo/MarketisnotavailableBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/Combo/MarketisnotavailableCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/Combo/MarketisnotavailablePlaster.png'),
  },
  networkerrorFailure: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/Failure/NetworkerrorBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/Failure/NetworkerrorCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/Failure/NetworkerrorPlaster.png'),
  },
  timeoutFailure: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/Failure/TimeoutBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/Failure/TimeoutCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/Failure/TimeoutPlaster.png'),
  },
  bzcomGeneral: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/General/bzcomBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/General/bzcomCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/General/bzcomPlaster.png'),
  },
  emptyGeneral: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/General/EmptyBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/General/EmptyCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/General/EmptyPlaster.png'),
  },
  emptyGeneralBetslip: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/General/BetslipEmptyBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/General/BetslipEmptyCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/General/BetslipEmptyPlaster.png'),
  },
  loadingGeneral: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/General/LoadingBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/General/LoadingCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/General/LoadingPlaster.png'),
  },
  successGeneral: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/General/SuccessBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/General/SuccessCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/General/SuccessPlaster.png'),
  },
  partialsuccessSingle: {
    [Theme.bakos]: generateAssetUrl('themeimg/Beslipimg/Single/PartialsuccessBakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Beslipimg/Single/PartialsuccessCoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Beslipimg/Single/PartialsuccessPlaster.png'),
  },
};

export default beslipimgThemeAssets;
