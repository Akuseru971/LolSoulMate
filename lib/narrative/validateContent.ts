import { QUESTIONS } from "@/data/questions";
import { PERSONALITY_DIMENSIONS } from "@/lib/matching/dimensions";
import { CHAMPIONS, getChampionById } from "@/data/champions";
import { LORE_EVENTS } from "@/data/narratives/loreEvents";
import {
  NARRATIVE_COMPLETE_IDS,
  NARRATIVE_PACKS,
} from "@/data/narratives/packs/all";
import type { NarrativeFragment } from "@/data/narratives/types";

const MIN_COUNTS: Record<NarrativeFragment["type"], number> = {
  introduction: 5,
  personality_parallel: 10,
  strength: 5,
  weakness: 5,
  lore_comparison: 5,
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

    const counts = {} as Record<NarrativeFragment["type"], number>;
    for (const f of pack.fragments) {
      counts[f.type] = (counts[f.type] ?? 0) + 1;
      if (f.championId !== pack.championId) {
        issues.push({ level: "error", message: `Fragment ${f.id} champion mismatch` });
      }
      if (f.text.includes("{{") || f.text.includes("}}")) {
        issues.push({ level: "error", message: `Unresolved placeholder in ${f.id}` });
      }
      f.relatedQuestionIds?.forEach((q) => {
        if (!questionIds.has(q)) {
          issues.push({ level: "error", message: `${f.id} references missing question ${q}` });
        }
      });
      if (f.minTraitScores) {
        for (const trait of Object.keys(f.minTraitScores)) {
          if (!PERSONALITY_DIMENSIONS.includes(trait as (typeof PERSONALITY_DIMENSIONS)[number])) {
            issues.push({ level: "error", message: `${f.id} invalid trait ${trait}` });
          }
        }
      }
      if (f.loreEventId && !LORE_EVENTS[f.loreEventId]) {
        issues.push({ level: "error", message: `${f.id} invalid loreEventId ${f.loreEventId}` });
      }
    }

    for (const [type, min] of Object.entries(MIN_COUNTS) as [NarrativeFragment["type"], number][]) {
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

  const vectorOnly = CHAMPIONS.filter((c) => c.coverage === "vector-only").length;
  const pending = CHAMPIONS.filter((c) => c.coverage === "pending-verification").length;
  issues.push({
    level: "warn",
    message: `Roster: ${NARRATIVE_COMPLETE_IDS.size} narrative-complete, ${vectorOnly} vector-only, ${pending} pending-verification, ${CHAMPIONS.length} total profiles`,
  });

  return issues;
}
