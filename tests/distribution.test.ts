import { describe, expect, it } from "vitest";
import { QUESTIONS } from "@/data/questions";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import { getMatchableChampions } from "@/data/champions/matchable";

describe("matching distribution (10k simulation)", () => {
  it("spreads selections across matchable roster", () => {
    const rng = (seed: number) => {
      let s = seed >>> 0;
      return () => {
        s = (Math.imul(1664525, s) + 1013904223) >>> 0;
        return s / 4294967296;
      };
    };

    const matchable = getMatchableChampions();
    expect(matchable.length).toBeGreaterThanOrEqual(15);

    const counts = new Map<string, number>();
    for (let i = 0; i < 10_000; i++) {
      const r = rng(i + 999);
      const answers = Object.fromEntries(
        QUESTIONS.map((q) => {
          const a = q.answers[Math.floor(r() * q.answers.length)];
          return [q.id, a.id];
        }),
      );
      const m = computeMatch(answers).primary.championId;
      counts.set(m, (counts.get(m) ?? 0) + 1);
    }

    const unique = counts.size;
    const maxShare = Math.max(...counts.values()) / 10_000;
    expect(unique).toBeGreaterThan(Math.min(10, matchable.length * 0.4));
    expect(maxShare).toBeLessThan(0.35);
  }, 60_000);
});
