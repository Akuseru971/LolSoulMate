import { QUESTIONS } from "@/data/questions";
import { PERSONALITY_DIMENSIONS } from "@/lib/matching/dimensions";
import { CHAMPIONS, getChampionById } from "@/data/champions";
import { LORE_EVENTS } from "@/data/narratives/loreEvents";
import {
  NARRATIVE_COMPLETE_IDS,
  NARRATIVE_PACKS,
} from "@/data/narratives/packs/all";
import type { NarrativeFragment } from "@/data/narratives/types";

const MIN_COUNTS: Record<string, number> = {
  introduction: 5,
  lore_parallel: 10,
  strength: 5,
  weakness: 5,
  conclusion: 5,
};

export interface ValidationIssue {
  level: "error" | "warn";
  message: string;
}

export function validateNarrativeContent(): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const questionIds = new Set(QUESTIONS.map((q) => q.id));

  for (const pack of NARRATIVE_PACKS) {
    const champion = getChampionById(pack.championId);
    if (!champion) {
      issues.push({ level: "error", message: `Unknown champion pack: ${pack.championId}` });
      continue;
    }
    if (champion.coverage !== "narrative-complete") {
      issues.push({
        level: "warn",
        message: `${pack.championId} has pack but coverage is not narrative-complete`,
      });
    }

    const counts: Record<string, number> = {};
    for (const f of pack.fragments) {
      counts[f.type] = (counts[f.type] ?? 0) + 1;
      if (f.championId !== pack.championId) {
        issues.push({ level: "error", message: `Fragment ${f.id} champion mismatch` });
      }

      if (f.type === "lore_parallel") {
        if (!f.userInterpretation || !f.canonicalFact || !f.parallelExplanation) {
          issues.push({ level: "error", message: `${f.id} missing parallel fields` });
        }
        if (f.userInterpretation === f.canonicalFact || f.canonicalFact === f.parallelExplanation) {
          issues.push({ level: "error", message: `${f.id} duplicate parallel text` });
        }
        for (const key of f.relevantAnswerKeys) {
          const [qid, aid] = key.split(":");
          if (!questionIds.has(qid)) {
            issues.push({ level: "error", message: `${f.id} invalid answer key ${key}` });
          } else {
            const q = QUESTIONS.find((x) => x.id === qid);
            if (q && !q.answers.some((a) => a.id === aid)) {
              issues.push({ level: "error", message: `${f.id} invalid answer id in ${key}` });
            }
          }
        }
        for (const dim of f.relatedDimensions) {
          if (!PERSONALITY_DIMENSIONS.includes(dim)) {
            issues.push({ level: "error", message: `${f.id} invalid dimension ${dim}` });
          }
        }
      } else {
        const tf = f as Extract<NarrativeFragment, { text: string }>;
        if (!tf.text || tf.text.includes("{{")) {
          issues.push({ level: "error", message: `Invalid text in ${f.id}` });
        }
      }

      if ("minTraitScores" in f && f.minTraitScores) {
        for (const trait of Object.keys(f.minTraitScores)) {
          if (!PERSONALITY_DIMENSIONS.includes(trait as (typeof PERSONALITY_DIMENSIONS)[number])) {
            issues.push({ level: "error", message: `${f.id} invalid trait ${trait}` });
          }
        }
      }
      if ("loreEventId" in f && f.loreEventId && !LORE_EVENTS[f.loreEventId]) {
        issues.push({ level: "error", message: `${f.id} invalid loreEventId` });
      }
    }

    for (const [type, min] of Object.entries(MIN_COUNTS)) {
      if ((counts[type] ?? 0) < min) {
        issues.push({
          level: "error",
          message: `${pack.championId} has ${counts[type] ?? 0}/${min} ${type} fragments`,
        });
      }
    }
  }

  for (const id of NARRATIVE_COMPLETE_IDS) {
    if (!getChampionById(id)) {
      issues.push({ level: "error", message: `Complete id missing champion profile: ${id}` });
    }
  }

  const complete = CHAMPIONS.filter((c) => c.coverage === "narrative-complete").length;
  const vectorOnly = CHAMPIONS.filter((c) => c.coverage === "vector-only").length;
  issues.push({
    level: "warn",
    message: `Roster: ${complete} narrative-complete, ${vectorOnly} vector-only, ${CHAMPIONS.length} total`,
  });

  return issues;
}

export function getCoverageDashboard() {
  const complete = CHAMPIONS.filter((c) => c.coverage === "narrative-complete");
  const incomplete = CHAMPIONS.filter((c) => c.coverage !== "narrative-complete");
  const validation = validateNarrativeContent();
  return {
    total: CHAMPIONS.length,
    complete: complete.length,
    incomplete: incomplete.length,
    coveragePercent: Math.round((complete.length / CHAMPIONS.length) * 100),
    errors: validation.filter((v) => v.level === "error").length,
    warnings: validation.filter((v) => v.level === "warn").length,
    incompleteIds: incomplete.map((c) => c.id),
  };
}
