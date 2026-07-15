// TODO 同样通过扫描 public/frontend/themeimg 目录来自动生成
import { Theme } from '../types';

import { generateAssetUrl } from '../utils';

import { SportIdMap } from '../sports';

const outrightThemeAssets = {
  ['outright_' + SportIdMap.SOCCER]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/001-Soccer/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/001-Soccer/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/001-Soccer/Plaster.png'),
  },
  ['outright_' + SportIdMap.BASKETBALL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/002-Basketball/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/002-Basketball/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/002-Basketball/Plaster.png'),
  },
  ['outright_' + SportIdMap.BASEBALL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/003-Baseball/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/003-Baseball/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/003-Baseball/Plaster.png'),
  },
  ['outright_' + SportIdMap.ICE_HOCKEY]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/004-IceHockey/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/004-IceHockey/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/004-IceHockey/Plaster.png'),
  },
  ['outright_' + SportIdMap.TENNIS]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/005-Tennis/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/005-Tennis/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/005-Tennis/Plaster.png'),
  },
  ['outright_' + SportIdMap.HANDBALL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/006-Handball/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/006-Handball/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/006-Handball/Plaster.png'),
  },
  ['outright_' + SportIdMap.GOLF]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/009-Golf/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/009-Golf/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/009-Golf/Plaster.png'),
  },
  ['outright_' + SportIdMap.RUGBY]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/012-Rugby/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/012-Rugby/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/012-Rugby/Plaster.png'),
  },
  ['outright_' + SportIdMap.AUSSIE_RULES]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/013-AussieRules/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/013-AussieRules/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/013-AussieRules/Plaster.png'),
  },
  ['outright_' + SportIdMap.BANDY]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/015-Bandy/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/015-Bandy/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/015-Bandy/Plaster.png'),
  },
  ['outright_' + SportIdMap.AMERICAN_FOOTBALL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/016-AmericanFootball/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/016-AmericanFootball/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/016-AmericanFootball/Plaster.png'),
  },
  ['outright_' + SportIdMap.CYCLING]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/017-Cycling/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/017-Cycling/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/017-Cycling/Plaster.png'),
  },
  ['outright_' + SportIdMap.SPECIALS]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/018-Specials/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/018-Specials/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/018-Specials/Plaster.png'),
  },
  ['outright_' + SportIdMap.CRICKET]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/021-Cricket/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/021-Cricket/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/021-Cricket/Plaster.png'),
  },
  ['outright_' + SportIdMap.DARTS]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/022-Darts/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/022-Darts/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/022-Darts/Plaster.png'),
  },
  ['outright_' + SportIdMap.VOLLEYBALL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/023-Volleyball/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/023-Volleyball/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/023-Volleyball/Plaster.png'),
  },
  ['outright_' + SportIdMap.WATERPOLO]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/026-Waterpolo/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/026-Waterpolo/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/026-Waterpolo/Plaster.png'),
  },
  ['outright_' + SportIdMap.CURLING]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/028-Curling/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/028-Curling/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/028-Curling/Plaster.png'),
  },
  ['outright_' + SportIdMap.FUTSAL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/029-Futsal/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/029-Futsal/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/029-Futsal/Plaster.png'),
  },
  ['outright_' + SportIdMap.OLYMPICS]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/030-Olympics/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/030-Olympics/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/030-Olympics/Plaster.png'),
  },
  ['outright_' + SportIdMap.LACROSSE]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/039-Lacrosse/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/039-Lacrosse/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/039-Lacrosse/Plaster.png'),
  },
  ['outright_' + SportIdMap.FORMULA_1]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/040-Formula/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/040-Formula/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/040-Formula/Plaster.png'),
  },
  ['outright_' + SportIdMap.ALPINE_SKIING]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/043-AlpineSkiing/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/043-AlpineSkiing/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/043-AlpineSkiing/Plaster.png'),
  },
  ['outright_' + SportIdMap.BIATHLON]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/044-Biathlon/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/044-Biathlon/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/044-Biathlon/Plaster.png'),
  },
  ['outright_' + SportIdMap.CROSS_COUNTRY]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/046-Cross-Country/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/046-Cross-Country/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/046-Cross-Country/Plaster.png'),
  },
  ['outright_' + SportIdMap.SKI_JUMPING]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/048-SkiJumping/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/048-SkiJumping/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/048-SkiJumping/Plaster.png'),
  },
  ['outright_' + SportIdMap.ESPORT_COUNTER_STRIKE]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/109-ESportCounter-Strike/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/109-ESportCounter-Strike/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/109-ESportCounter-Strike/Plaster.png'),
  },
  ['outright_' + SportIdMap.ESPORT_DOTA]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/111-ESportDota/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/111-ESportDota/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/111-ESportDota/Plaster.png'),
  },
  ['outright_' + SportIdMap.ESPORT_CALL_OF_DUTY]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/118-ESportCallofDuty/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/118-ESportCallofDuty/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/118-ESportCallofDuty/Plaster.png'),
  },
  ['outright_' + SportIdMap.SPEEDWAY]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/131-Speedway/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/131-Speedway/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/131-Speedway/Plaster.png'),
  },
  ['outright_' + SportIdMap.GAELIC_FOOTBALL]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/135-GaelicFootball/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/135-GaelicFootball/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/135-GaelicFootball/Plaster.png'),
  },
  ['outright_' + SportIdMap.GAELIC_HURLING]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/136-GaelicHurling/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/136-GaelicHurling/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/136-GaelicHurling/Plaster.png'),
  },
  ['outright_' + SportIdMap.STOCK_CAR_RACING]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/191-StockCarRacing/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/191-StockCarRacing/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/191-StockCarRacing/Plaster.png'),
  },
  ['outright_' + SportIdMap.ESPORT_VALORANT]: {
    [Theme.bakos]: generateAssetUrl('themeimg/Outright/194-ESportValorant/BakosBlue.png'),
    [Theme.cool]: generateAssetUrl('themeimg/Outright/194-ESportValorant/CoolBlack.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/Outright/194-ESportValorant/Plaster.png'),
  },
};

export default outrightThemeAssets;
