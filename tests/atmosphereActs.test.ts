import { describe, expect, it } from "vitest";
import {
  actForQuizIndex,
  actProgress,
  completedQuestionCount,
} from "@/lib/quiz/atmosphereActs";
import { QUESTIONS } from "@/data/questions";

describe("questionnaire atmosphere acts", () => {
  it("maps four questions per act from index only", () => {
    expect(actForQuizIndex(0)).toBe(1);
    expect(actForQuizIndex(3)).toBe(1);
    expect(actForQuizIndex(4)).toBe(2);
    expect(actForQuizIndex(8)).toBe(3);
    expect(actForQuizIndex(12)).toBe(4);
    expect(actForQuizIndex(16)).toBe(5);
    expect(actForQuizIndex(19)).toBe(5);
  });

  it("does not depend on answers", () => {
    expect(actForQuizIndex(10)).toBe(actForQuizIndex(10));
  });

  it("tracks act progress within chapter", () => {
    expect(actProgress(0)).toBe(0);
    expect(actProgress(3)).toBe(1);
  });

  it("counts only answered questions", () => {
    const ids = QUESTIONS.map((q) => q.id);
    const answers = { [ids[0]]: "a", [ids[1]]: "b" };
    expect(completedQuestionCount(answers, ids)).toBe(2);
  });
});
