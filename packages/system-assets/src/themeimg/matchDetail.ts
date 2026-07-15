// TODO 同样通过扫描 public/frontend/themeimg 目录来自动生成
import { Theme } from '../types';

import { generateAssetUrl } from '../utils';

import { SportIdMap } from '../sports';

const matchDetailThemeAssets = {
  ['matchdetail_' + SportIdMap.SOCCER]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/001Soccer/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/001Soccer/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/001Soccer/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.BASKETBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/002Basketball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/002Basketball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/002Basketball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.BASEBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/003Baseball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/003Baseball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/003Baseball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ICE_HOCKEY]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/004Icehockey/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/004Icehockey/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/004Icehockey/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.TENNIS]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/005Tennis/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/005Tennis/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/005Tennis/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.HANDBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/006Handball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/006Handball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/006Handball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.FLOORBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/007Floorball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/007Floorball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/007Floorball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.BOXING]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/010Boxing/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/010Boxing/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/010Boxing/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.RUGBY]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/012Rugby/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/012Rugby/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/012Rugby/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.AUSSIE_RULES]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/013Aussierules/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/013Aussierules/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/013Aussierules/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.BANDY]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/015Bandy/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/015Bandy/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/015Bandy/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.AMERICAN_FOOTBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/016AmericanFootball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/016AmericanFootball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/016AmericanFootball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.SNOOKER]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/019Snooker/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/019Snooker/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/019Snooker/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.TABLE_TENNIS]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/020TableTennis/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/020TableTennis/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/020TableTennis/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.CRICKET]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/021Cricket/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/021Cricket/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/021Cricket/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.DARTS]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/022Darts/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/022Darts/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/022Darts/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.VOLLEYBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/023Volleyball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/023Volleyball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/023Volleyball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.FIELD_HOCKEY]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/024Fieldhockey/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/024Fieldhockey/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/024Fieldhockey/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.WATERPOLO]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/026Waterpolo/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/026Waterpolo/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/026Waterpolo/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.CURLING]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/028Curling/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/028Curling/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/028Curling/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.FUTSAL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/029Futsal/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/029Futsal/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/029Futsal/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.BADMINTON]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/031Bad-minton/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/031Bad-minton/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/031Bad-minton/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.CHESS]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/033Chess/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/033Chess/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/033Chess/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.SQUASH]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/037Squash/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/037Squash/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/037Squash/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_COUNTER_STRIKE]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/109EsportCounterStrike/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/109EsportCounterStrike/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/109EsportCounterStrike/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_LEAGUE_OF_LEGENDS]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/110EsportLeagueOfLegends/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/110EsportLeagueOfLegends/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/110EsportLeagueOfLegends/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_DOTA]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/111EsportDota/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/111EsportDota/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/111EsportDota/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.MMA]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/117Mma/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/117Mma/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/117Mma/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_CALL_OF_DUTY]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/118EsportCallOfDuty/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/118EsportCallOfDuty/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/118EsportCallOfDuty/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_RAINBOW_SIX]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/125EsportRainbowSix/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/125EsportRainbowSix/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/125EsportRainbowSix/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_KING_OF_GLORY]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/134ESportKingofGlory/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/134ESportKingofGlory/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/134ESportKingofGlory/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.GAELIC_FOOTBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/135Gaelicfootball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/135Gaelicfootball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/135Gaelicfootball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.GAELIC_HURLING]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/136Gaelichurling/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/136Gaelichurling/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/136Gaelichurling/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESOCCER]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/137ESoccer/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/137ESoccer/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/137ESoccer/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.KABADDI]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/138Kabaddi/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/138Kabaddi/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/138Kabaddi/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.EBASKETBALL]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/153EBasketball/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/153EBasketball/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/153EBasketball/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ESPORT_ARENA_OF_VALOR]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/158EsportArenaOfValor/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/158EsportArenaOfValor/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/158EsportArenaOfValor/Plaster.png'),
  },
  ['matchdetail_' + SportIdMap.ECRICKET]: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/197ECricket/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/197ECricket/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/197ECricket/Plaster.png'),
  },
  ['matchdetail_general']: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/General/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/General/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/General/Plaster.png'),
  },
  ['scoreboard_timing']: {
    [Theme.cool]: generateAssetUrl('themeimg/MatchDetail/ScoreBoardTiming/CoolBlack.png'),
    [Theme.bakos]: generateAssetUrl('themeimg/MatchDetail/ScoreBoardTiming/BakosBlue.png'),
    [Theme.plaster]: generateAssetUrl('themeimg/MatchDetail/ScoreBoardTiming/Plaster.png'),
  },
};

export default matchDetailThemeAssets;
