import type { NarrativeFragment } from "@/data/narratives/types";
import { NARRATIVE_PACKS } from "@/data/narratives/packs/all";

const BANNED_PATTERNS: RegExp[] = [
  /[\u2014\u2013]/,
  /\bSome souls\b/i,
  /\bYour answers suggest\b/i,
  /\bNot .+, but .+\b/i,
  /\bsame currents that shape\b/i,
  /\bborrowed drama\b/i,
  /\blegend keeps its pulse\b/i,
  /\bjourney is still being written\b/i,
  /\bRuneterra does not ask\b/i,
  /\bnot as borrowed trauma\b/i,
  /\brecognizable rhythm of choice\b/i,
];

const ABSTRACT_OVERUSE = [
  "soul",
  "destiny",
  "echo",
  "journey",
  "legend",
  "shadow",
  "balance",
  "resonance",
  "burden",
  "fate",
  "power",
];

export interface EditorialIssue {
  level: "error" | "warn";
  championId?: string;
  fragmentId?: string;
  message: string;
}

function creativeText(fragment: NarrativeFragment): string {
  if (fragment.type === "lore_parallel") {
    return [
      fragment.userInterpretation,
      fragment.canonicalFact,
      fragment.parallelExplanation,
    ].join(" ");
  }
  return fragment.text;
}

function normalizeForSimilarity(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenJaccard(a: string, b: string): number {
  const ta = new Set(normalizeForSimilarity(a).split(" ").filter(Boolean));
  const tb = new Set(normalizeForSimilarity(b).split(" ").filter(Boolean));
  if (ta.size === 0 || tb.size === 0) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter += 1;
  return inter / (ta.size + tb.size - inter);
}

export function lintFragment(
  fragment: NarrativeFragment,
  championId: string,
): EditorialIssue[] {
  const issues: EditorialIssue[] = [];
  const text = creativeText(fragment);

  for (const re of BANNED_PATTERNS) {
    if (re.test(text)) {
      issues.push({
        level: "error",
        championId,
        fragmentId: fragment.id,
        message: `Banned editorial pattern: ${re.source}`,
      });
    }
  }

  const lower = text.toLowerCase();
  let abstractHits = 0;
  for (const word of ABSTRACT_OVERUSE) {
    const matches = lower.match(new RegExp(`\\b${word}\\b`, "g"));
    if (matches) abstractHits += matches.length;
  }
  if (abstractHits >= 6) {
    issues.push({
      level: "warn",
      championId,
      fragmentId: fragment.id,
      message: `Heavy abstract vocabulary (${abstractHits} hits)`,
    });
  }

  return issues;
}

export function lintAllNarrativeEditorial(): EditorialIssue[] {
  const issues: EditorialIssue[] = [];
  const introsByChamp: { championId: string; text: string; id: string }[] = [];
  const conclusionsByChamp: { championId: string; text: string; id: string }[] = [];

  for (const pack of NARRATIVE_PACKS) {
    for (const f of pack.fragments) {
      issues.push(...lintFragment(f, pack.championId));
      if (f.type === "introduction") {
        introsByChamp.push({ championId: pack.championId, text: f.text, id: f.id });
      }
      if (f.type === "conclusion") {
        conclusionsByChamp.push({ championId: pack.championId, text: f.text, id: f.id });
      }
    }
  }

  for (let i = 0; i < introsByChamp.length; i++) {
    for (let j = i + 1; j < introsByChamp.length; j++) {
      const sim = tokenJaccard(introsByChamp[i].text, introsByChamp[j].text);
      if (sim >= 0.72) {
        issues.push({
          level: "error",
          championId: introsByChamp[j].championId,
          fragmentId: introsByChamp[j].id,
          message: `Introduction too similar to ${introsByChamp[i].championId} (${Math.round(sim * 100)}% token overlap)`,
        });
      }
    }
  }

  for (let i = 0; i < conclusionsByChamp.length; i++) {
    for (let j = i + 1; j < conclusionsByChamp.length; j++) {
      const sim = tokenJaccard(conclusionsByChamp[i].text, conclusionsByChamp[j].text);
      if (sim >= 0.68) {
        issues.push({
          level: "error",
          championId: conclusionsByChamp[j].championId,
          fragmentId: conclusionsByChamp[j].id,
          message: `Conclusion too similar to ${conclusionsByChamp[i].championId} (${Math.round(sim * 100)}% token overlap)`,
        });
      }
    }
  }

  return issues;
}
