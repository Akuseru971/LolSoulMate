import { describe, expect, it } from "vitest";
import { QUESTIONS } from "@/data/questions";
import { restoreResultFromProgress, buildAnswersPayload } from "@/lib/quiz/restoreResult";
import { defaultProgress, isQuizComplete } from "@/lib/quiz/storage";
import { fingerprintMatchInput } from "@/lib/matching/engine";
import { buildAnswerSelections } from "@/lib/quiz/matchFromProgress";

describe("result restoration", () => {
  it("recomputes identical match from stored answers", () => {
    const answers = Object.fromEntries(
      QUESTIONS.map((q, i) => [q.id, q.answers[i % q.answers.length].id]),
    );
    expect(isQuizComplete(answers)).toBe(true);

    const snapshot = {
      ...defaultProgress(),
      stage: "results" as const,
      answers,
      quizIndex: 19,
    };

    const a = restoreResultFromProgress(snapshot);
    const b = restoreResultFromProgress(snapshot);
    expect(a?.match.primary.championId).toBe(b?.match.primary.championId);
    expect(a?.match.primary.compatibility).toBe(b?.match.primary.compatibility);
    expect(a?.narrative.reveal.championName).toBe(b?.narrative.reveal.championName);

    const selections = buildAnswerSelections(answers);
    const fp = fingerprintMatchInput({ answers: selections });
    expect(fp).toContain("q01");
  });

  it("builds answers payload with all questions", () => {
    const answers = Object.fromEntries(QUESTIONS.map((q) => [q.id, q.answers[0].id]));
    const payload = buildAnswersPayload(answers);
    expect(payload).toHaveLength(20);
  });
});
