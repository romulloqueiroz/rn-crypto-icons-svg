import {
  UST,
  DollarPac,
  OneInch,
  TwoGive,
  aave,
  abt,
  act,
  actn,
  ada,
  add,
  adx,
  ae,
  aeon,
  agi,
  agrs,
  aion,
  albt,
  algo,
  amb,
  amp,
  ampl,
  ant,
  apex,
  appc,
  ardr,
  arg,
  ark,
  arn,
  arnx,
  ary,
  ast,
  atm,
  atom,
  aud,
  audr,
  auto,
  aywa,
  bab,
  bal,
  band,
  bcbc,
  bch,
  bcio,
  bcn,
  bco,
  bcpt,
  bdl,
  beam,
  bela,
  bix,
  blcn,
  blk,
  block,
  blz,
  bnb,
  bnt,
  bnty,
  booty,
  bos,
  bpt,
  bq,
  brd,
  bsd,
  bsv,
  btc,
  btcd,
  btch,
  btcp,
  btcz,
  btdx,
  btg,
  btm,
  bts,
  btt,
  btx,
  burst,
  bze,
  call,
  cc,
  cdn,
  cdt,
  cenz,
  chat,
  chips,
  clam,
  cloak,
  cmm,
  cmt,
  cnd,
} from './assets/index';

export const assets = {
  'UST': UST,
  '$pac': DollarPac,
  '1inch': OneInch,
  '2give': TwoGive,
  'aave': aave,
  'abt': abt,
  'act': act,
  'actn': actn,
  'ada': ada,
  'add': add,
  'adx': adx,
  'ae': ae,
  'aeon': aeon,
  'agi': agi,
  'agrs': agrs,
  'aion': aion,
  'albt': albt,
  'algo': algo,
  'amb': amb,
  'amp': amp,
  'ampl': ampl,
  'ant': ant,
  'apex': apex,
  'appc': appc,
  'ardr': ardr,
  'arg': arg,
  'ark': ark,
  'arn': arn,
  'arnx': arnx,
  'ary': ary,
  'ast': ast,
  'atm': atm,
  'atom': atom,
  'aud': aud,
  'audr': audr,
  'auto': auto,
  'aywa': aywa,
  'bab': bab,
  'bal': bal,
  'band': band,
  'bcbc': bcbc,
  'bch': bch,
  'bcio': bcio,
  'bcn': bcn,
  'bco': bco,
  'bcpt': bcpt,
  'bdl': bdl,
  'beam': beam,
  'bela': bela,
  'bix': bix,
  'blcn': blcn,
  'blk': blk,
  'block': block,
  'blz': blz,
  'bnb': bnb,
  'bnt': bnt,
  'bnty': bnty,
  'booty': booty,
  'bos': bos,
  'bpt': bpt,
  'bq': bq,
  'brd': brd,
  'bsd': bsd,
  'bsv': bsv,
  'btc': btc,
  'btcd': btcd,
  'btch': btch,
  'btcp': btcp,
  'btcz': btcz,
  'btdx': btdx,
  'btg': btg,
  'btm': btm,
  'bts': bts,
  'btt': btt,
  'btx': btx,
  'burst': burst,
  'bze': bze,
  'call': call,
  'cc': cc,
  'cdn': cdn,
  'cdt': cdt,
  'cenz': cenz,
  'chat': chat,
  'chips': chips,
  'clam': clam,
  'cloak': cloak,
  'cmm': cmm,
  'cmt': cmt,
  'cnd': cnd,
} as const;

interface GradientStop {
  offset: number | null;
  color: string;
}

interface Gradient {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  stops: GradientStop[];
}

interface Asset {
  path: string;
  fill?: string;
  opacity?: number;
  gradient?: Gradient;
}

type AssetKey = keyof typeof assets;

export type { Asset, AssetKey };
