import { describe, expect, it } from "vitest";
import { validateNarrativeContent } from "@/lib/narrative/validateContent";
import { QUESTIONS } from "@/data/questions";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import { composeNarrative } from "@/lib/narrative/composeNarrative";
import { fingerprintMatchInput, type QuizAnswerSelection } from "@/lib/matching/engine";

describe("narrative content validation", () => {
  it("has no validation errors for complete champion packs", () => {
    const issues = validateNarrativeContent();
    const errors = issues.filter((i) => i.level === "error");
    expect(errors).toEqual([]);
  });
});

describe("modular narrative engine", () => {
  it("produces stable narratives for identical answers", () => {
    const answers = Object.fromEntries(
      QUESTIONS.map((q, i) => [q.id, q.answers[i % q.answers.length].id]),
    );
    const match = computeMatch(answers);
    const payload = QUESTIONS.map((q) => ({
      questionId: q.id,
      answerId: answers[q.id],
    }));
    const a = composeNarrative({ match, answers: payload });
    const b = composeNarrative({ match, answers: payload });
    expect(a.meta.seed).toBe(b.meta.seed);
    expect(a.narrative.reveal.championName).toBe(b.narrative.reveal.championName);
    expect(a.meta.selectedFragmentIds).toEqual(b.meta.selectedFragmentIds);
  });

  it("varies fragment selection for different answer sets with same champion", () => {
    const base = Object.fromEntries(QUESTIONS.map((q) => [q.id, q.answers[0].id]));
    const alt = Object.fromEntries(
      QUESTIONS.map((q) => [q.id, q.answers[q.answers.length - 1].id]),
    );
    const m1 = computeMatch(base);
    const m2 = computeMatch(alt);
    if (m1.primary.championId !== m2.primary.championId) return;
    const p1 = QUESTIONS.map((q) => ({ questionId: q.id, answerId: base[q.id] }));
    const p2 = QUESTIONS.map((q) => ({ questionId: q.id, answerId: alt[q.id] }));
    const n1 = composeNarrative({ match: m1, answers: p1 });
    const n2 = composeNarrative({ match: m2, answers: p2 });
    expect(n1.meta.selectedFragmentIds).not.toEqual(n2.meta.selectedFragmentIds);
  });
});

describe("simulated traffic (zero API)", () => {
  it("generates 120 diverse profiles without network", () => {
    const champions = new Set<string>();
    const narrativeHashes = new Set<string>();
    const rng = (seed: number) => {
      let s = seed >>> 0;
      return () => {
        s = (Math.imul(1664525, s) + 1013904223) >>> 0;
        return s / 4294967296;
      };
    };
    for (let i = 0; i < 120; i++) {
      const r = rng(i + 500);
      const answers: Record<string, string> = {};
      const selections: QuizAnswerSelection[] = QUESTIONS.map((q) => {
        const a = q.answers[Math.floor(r() * q.answers.length)];
        answers[q.id] = a.id;
        return { questionId: q.id, answerId: a.id, weights: a.weights };
      });
      const match = computeMatch(answers);
      champions.add(match.primary.championId);
      const payload = QUESTIONS.map((q) => ({
        questionId: q.id,
        answerId: answers[q.id],
      }));
      const { narrative, meta } = composeNarrative({ match, answers: payload });
      expect(narrative.parallels.length).toBeGreaterThanOrEqual(1);
      narrativeHashes.add(meta.selectedFragmentIds.join(","));
      expect(fingerprintMatchInput({ answers: selections })).toContain("q01");
    }
    expect(champions.size).toBeGreaterThan(3);
    expect(narrativeHashes.size).toBeGreaterThan(15);
  });
});
