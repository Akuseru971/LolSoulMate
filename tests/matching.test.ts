import { describe, expect, it } from "vitest";
import { getMatchableChampions } from "@/data/champions/matchable";

const CHAMPIONS = getMatchableChampions();
import { QUESTIONS } from "@/data/questions";
import {
  fingerprintMatchInput,
  matchChampions,
  type QuizAnswerSelection,
} from "@/lib/matching/engine";
import { normalizeUserVector, addWeighted } from "@/lib/matching/normalize";
import { PERSONALITY_DIMENSIONS, emptyVector } from "@/lib/matching/dimensions";

function allFirstAnswers(): QuizAnswerSelection[] {
  return QUESTIONS.map((q) => ({
    questionId: q.id,
    answerId: q.answers[0].id,
    weights: q.answers[0].weights,
  }));
}

function allLastAnswers(): QuizAnswerSelection[] {
  return QUESTIONS.map((q) => {
    const a = q.answers[q.answers.length - 1];
    return { questionId: q.id, answerId: a.id, weights: a.weights };
  });
}

describe("matching engine", () => {
  it("normalizes user vectors to 0-1 range", () => {
    const raw = emptyVector();
    addWeighted(raw, { ambition: 2, empathy: 1 });
    const norm = normalizeUserVector(raw);
    const mag = Math.sqrt(
      PERSONALITY_DIMENSIONS.reduce((s, d) => s + norm[d] * norm[d], 0),
    );
    expect(mag).toBeCloseTo(1, 5);
    expect(norm.ambition).toBeCloseTo(2 / Math.sqrt(5), 5);
    expect(norm.empathy).toBeCloseTo(1 / Math.sqrt(5), 5);
  });

  it("produces stable results for identical inputs", () => {
    const answers = allFirstAnswers();
    const a = matchChampions(CHAMPIONS, { answers });
    const b = matchChampions(CHAMPIONS, { answers });
    expect(a.primary.championId).toBe(b.primary.championId);
    expect(a.primary.compatibility).toBe(b.primary.compatibility);
    expect(fingerprintMatchInput({ answers })).toBe(fingerprintMatchInput({ answers }));
  });

  it("breaks ties deterministically by champion id", () => {
    const result = matchChampions(CHAMPIONS, { answers: allFirstAnswers() });
    expect(result.primary.championId).toBeTruthy();
    expect(result.alternatives).toHaveLength(3);
  });

  it("different answer patterns can yield different primaries", () => {
    const first = matchChampions(CHAMPIONS, { answers: allFirstAnswers() }).primary
      .championId;
    const last = matchChampions(CHAMPIONS, { answers: allLastAnswers() }).primary
      .championId;
    expect(first).not.toBe(last);
  });

  it("distributes matches across champions (smoke)", () => {
    const counts = new Map<string, number>();
    const rng = (seed: number) => {
      let s = seed >>> 0;
      return () => {
        s = (Math.imul(1664525, s) + 1013904223) >>> 0;
        return s / 4294967296;
      };
    };
    for (let i = 0; i < 500; i++) {
      const r = rng(i + 42);
      const answers = QUESTIONS.map((q) => {
        const a = q.answers[Math.floor(r() * q.answers.length)];
        return { questionId: q.id, answerId: a.id, weights: a.weights };
      });
      const m = matchChampions(CHAMPIONS, { answers }).primary.championId;
      counts.set(m, (counts.get(m) ?? 0) + 1);
    }
    expect(counts.size).toBeGreaterThan(8);
  });
});
