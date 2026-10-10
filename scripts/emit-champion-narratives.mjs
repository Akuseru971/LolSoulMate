#!/usr/bin/env node
/**
 * One-off emitter for hand-authored champion packs (not the template generator).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../data/narratives/champions");
const dataPath = path.join(__dirname, "hand-narrative-champions.json");

const INTRO_META = [
  { dims: ["loyalty", "discipline"], keys: ["q01:d", "q05:a"] },
  { dims: ["protectiveInstinct", "idealism"], keys: ["q02:a", "q06:c"] },
  { dims: ["capacityForSacrifice", "independence"], keys: ["q08:a", "q03:b"] },
  { dims: ["discipline", "desireForFreedom"], keys: ["q04:b", "q15:a"] },
  { dims: ["idealism", "pragmatism"], keys: ["q14:a", "q11:a"] },
];

const PARALLEL_META = [
  { dims: ["protectiveInstinct", "idealism", "pragmatism"], keys: ["q01:a", "q04:e"], min: { protectiveInstinct: 52 } },
  { dims: ["capacityForSacrifice", "independence", "ambition"], keys: ["q03:c", "q08:b"], min: { capacityForSacrifice: 50 } },
  { dims: ["discipline", "desireForFreedom", "emotionalSensitivity"], keys: ["q06:d", "q12:d"], min: { discipline: 52 } },
  { dims: ["idealism", "pragmatism", "courage"], keys: ["q04:a", "q19:a"], min: { idealism: 51 } },
  { dims: ["independence", "ambition", "resilience"], keys: ["q01:e", "q07:d"], min: { resilience: 52 } },
  { dims: ["loyalty", "empathy", "socialConnection"], keys: ["q05:c", "q16:b"], min: { empathy: 50 } },
  { dims: ["relationshipWithDestiny", "discipline", "relationshipWithAuthority"], keys: ["q18:a", "q10:a"], min: { relationshipWithDestiny: 52 } },
  { dims: ["moralFlexibility", "pragmatism", "desireForPower"], keys: ["q03:d", "q11:d"], min: { pragmatism: 52 } },
  { dims: ["emotionalSensitivity", "needForRecognition", "courage"], keys: ["q02:c", "q17:c"], min: { emotionalSensitivity: 50 } },
  { dims: ["impulsivity", "courage", "desireForFreedom"], keys: ["q13:d", "q15:d"], min: { courage: 50 } },
];

const STRENGTH_META = [
  { dims: ["resilience", "discipline"], keys: ["q01:d", "q07:a"] },
  { dims: ["empathy", "protectiveInstinct"], keys: ["q08:a", "q13:e"] },
  { dims: ["idealism", "courage"], keys: ["q20:c", "q04:a"] },
  { dims: ["pragmatism", "relationshipWithAuthority"], keys: ["q11:d", "q10:b"] },
  { dims: ["independence", "desireForFreedom"], keys: ["q15:a", "q06:e"] },
];

const WEAKNESS_META = [
  { dims: ["emotionalSensitivity", "loyalty"], keys: ["q09:c", "q07:a"] },
  { dims: ["impulsivity", "moralFlexibility"], keys: ["q13:b", "q05:d"] },
  { dims: ["needForRecognition", "ambition"], keys: ["q06:b", "q02:c"] },
  { dims: ["relationshipWithDestiny", "idealism"], keys: ["q18:e", "q19:e"] },
  { dims: ["desireForPower", "pragmatism"], keys: ["q03:d", "q11:b"] },
];

const CONCLUSION_META = [
  { dims: ["loyalty", "protectiveInstinct"], keys: ["q20:a", "q17:a"] },
  { dims: ["relationshipWithDestiny", "idealism"], keys: ["q18:a", "q20:d"] },
  { dims: ["independence", "resilience"], keys: ["q15:a", "q01:b"] },
  { dims: ["empathy", "socialConnection"], keys: ["q12:e", "q16:e"] },
  { dims: ["discipline", "courage"], keys: ["q10:a", "q13:c"] },
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function buildFragments(champion) {
  const { id, loreEventIds, intros, parallels, strengths, weaknesses, conclusions } = champion;
  const frags = [];

  intros.forEach((text, i) => {
    const m = INTRO_META[i];
    frags.push({
      id: `${id}-intro-${i}`,
      championId: id,
      type: "introduction",
      text,
      relatedDimensions: m.dims,
      relevantAnswerKeys: m.keys,
      tags: [`intro-${i}`],
    });
  });

  parallels.forEach((p, i) => {
    const m = PARALLEL_META[i];
    frags.push({
      id: `${id}-parallel-${i}`,
      championId: id,
      type: "lore_parallel",
      relatedDimensions: m.dims,
      relevantAnswerKeys: m.keys,
      ...(m.min ? { minTraitScores: m.min } : {}),
      ...(p.loreEventId ? { loreEventId: p.loreEventId } : {}),
      ...(p.loreEventId === undefined && loreEventIds[0] ? { loreEventId: loreEventIds[0] } : {}),
      userInterpretation: p.userInterpretation,
      canonicalFact: p.canonicalFact,
      parallelExplanation: p.parallelExplanation,
      tags: [`parallel-${i}`, ...(p.tag ? [p.tag] : [])],
    });
  });

  strengths.forEach((text, i) => {
    const m = STRENGTH_META[i];
    frags.push({
      id: `${id}-strength-${i}`,
      championId: id,
      type: "strength",
      text,
      relatedDimensions: m.dims,
      relevantAnswerKeys: m.keys,
      tags: [`strength-${i}`],
    });
  });

  weaknesses.forEach((text, i) => {
    const m = WEAKNESS_META[i];
    frags.push({
      id: `${id}-weakness-${i}`,
      championId: id,
      type: "weakness",
      text,
      relatedDimensions: m.dims,
      relevantAnswerKeys: m.keys,
      tags: [`weakness-${i}`],
    });
  });

  conclusions.forEach((text, i) => {
    const m = CONCLUSION_META[i];
    frags.push({
      id: `${id}-conclusion-${i}`,
      championId: id,
      type: "conclusion",
      text,
      relatedDimensions: m.dims,
      relevantAnswerKeys: m.keys,
      tags: [`conclusion-${i}`],
    });
  });

  return frags;
}

function fragmentToTs(obj, indent) {
  const pad = "  ".repeat(indent);
  const lines = [`${pad}{`];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (typeof v === "string") {
      lines.push(`${pad}  ${k}: "${esc(v)}",`);
    } else if (Array.isArray(v)) {
      if (v.length === 0) lines.push(`${pad}  ${k}: [],`);
      else if (typeof v[0] === "string") {
        lines.push(`${pad}  ${k}: [`);
        v.forEach((s) => lines.push(`${pad}    "${esc(s)}",`));
        lines.push(`${pad}  ],`);
      }
    } else if (typeof v === "object") {
      lines.push(`${pad}  ${k}: {`);
      for (const [k2, v2] of Object.entries(v)) {
        lines.push(`${pad}    ${k2}: ${v2},`);
      }
      lines.push(`${pad}  },`);
    }
  }
  lines.push(`${pad}},`);
  return lines.join("\n");
}

function writeChampionFile(champion) {
  const exportName = `${champion.id}Pack`;
  const fragments = buildFragments(champion);
  const body = fragments.map((f) => fragmentToTs(f, 2)).join("\n");
  const loreIds = champion.loreEventIds.map((e) => `"${e}"`).join(", ");

  const content = `import type { ChampionNarrativePack } from "../types";

export const ${exportName}: ChampionNarrativePack = {
  championId: "${champion.id}",
  loreEventIds: [${loreIds}],
  fragments: [
${body}
  ],
};
`;

  fs.writeFileSync(path.join(outDir, `${champion.id}.ts`), content, "utf8");
}

const champions = JSON.parse(fs.readFileSync(dataPath, "utf8"));
fs.mkdirSync(outDir, { recursive: true });
for (const c of champions) {
  writeChampionFile(c);
}

const ids = champions.map((c) => c.id);
const indexContent = `${ids
  .map((id) => `import { ${id}Pack } from "./${id}";`)
  .join("\n")}

import type { ChampionNarrativePack } from "../types";

export const CHAMPION_NARRATIVE_PACKS: ChampionNarrativePack[] = [
${ids.map((id) => `  ${id}Pack,`).join("\n")}
];

export const NARRATIVE_COMPLETE_IDS = new Set<string>([
${ids.map((id) => `  "${id}",`).join("\n")}
]);
`;

fs.writeFileSync(path.join(outDir, "index.ts"), indexContent, "utf8");
console.log(`Wrote ${champions.length} champion packs to ${outDir}`);
