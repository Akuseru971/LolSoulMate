import { describe, expect, it } from "vitest";
import { QUESTIONS } from "@/data/questions";
import { computeMatch } from "@/lib/quiz/matchFromProgress";

describe("quiz journey data", () => {
  it("has 20 unique questions with 4-6 answers each", () => {
    expect(QUESTIONS).toHaveLength(20);
    const ids = new Set(QUESTIONS.map((q) => q.id));
    expect(ids.size).toBe(20);
    for (const q of QUESTIONS) {
      expect(q.answers.length).toBeGreaterThanOrEqual(4);
      expect(q.answers.length).toBeLessThanOrEqual(6);
    }
  });

  it("completes matching when all answers provided", () => {
    const answers = Object.fromEntries(
      QUESTIONS.map((q) => [q.id, q.answers[0].id]),
    );
    const result = computeMatch(answers);
    expect(result.primary.compatibility).toBeGreaterThan(0);
    expect(result.primary.champion).toBeDefined();
  });
});
