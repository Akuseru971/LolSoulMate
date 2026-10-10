import { ireliaPack } from "./irelia";
import { jhinPack } from "./jhin";
import { kindredPack } from "./kindred";
import { viegoPack } from "./viego";
import { swainPack } from "./swain";
import { braumPack } from "./braum";
import { yasuoPack } from "./yasuo";
import { luxPack } from "./lux";
import { garenPack } from "./garen";
import { akaliPack } from "./akali";
import { threshPack } from "./thresh";
import { karmaPack } from "./karma";
import { rivenPack } from "./riven";
import { ekkoPack } from "./ekko";
import { sennaPack } from "./senna";
import { dianaPack } from "./diana";
import { leonaPack } from "./leona";
import { morganaPack } from "./morgana";
import { nasusPack } from "./nasus";
import { azirPack } from "./azir";
import { missfortunePack } from "./missfortune";
import { pykePack } from "./pyke";
import { yonePack } from "./yone";
import { zedPack } from "./zed";
import { settPack } from "./sett";

import type { ChampionNarrativePack } from "../types";

export const CHAMPION_NARRATIVE_PACKS: ChampionNarrativePack[] = [
  ireliaPack,
  jhinPack,
  kindredPack,
  viegoPack,
  swainPack,
  braumPack,
  yasuoPack,
  luxPack,
  garenPack,
  akaliPack,
  threshPack,
  karmaPack,
  rivenPack,
  ekkoPack,
  sennaPack,
  dianaPack,
  leonaPack,
  morganaPack,
  nasusPack,
  azirPack,
  missfortunePack,
  pykePack,
  yonePack,
  zedPack,
  settPack,
];

export const NARRATIVE_COMPLETE_IDS = new Set<string>([
  "irelia",
  "jhin",
  "kindred",
  "viego",
  "swain",
  "braum",
  "yasuo",
  "lux",
  "garen",
  "akali",
  "thresh",
  "karma",
  "riven",
  "ekko",
  "senna",
  "diana",
  "leona",
  "morgana",
  "nasus",
  "azir",
  "missfortune",
  "pyke",
  "yone",
  "zed",
  "sett",
]);
