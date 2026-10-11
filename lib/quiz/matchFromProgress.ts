import { progressiveMatch } from "@/lib/quiz/progressiveMatch";
import { QUESTIONS } from "@/data/questions";
import type { QuizAnswerSelection } from "@/lib/matching/engine";
import type { ZodiacSign } from "@/lib/zodiac";

export function buildAnswerSelections(
  answers: Record<string, string>,
): QuizAnswerSelection[] {
  return QUESTIONS.map((q) => {
    const answerId = answers[q.id];
    const answer = q.answers.find((a) => a.id === answerId) ?? q.answers[0];
    return {
      questionId: q.id,
      answerId: answer.id,
      weights: answer.weights,
    };
  });
}

export function computeMatch(
  answers: Record<string, string>,
  zodiac?: ZodiacSign | null,
) {
  const selections = buildAnswerSelections(answers);
  return progressiveMatch(answers, zodiac, 20).result;
}
