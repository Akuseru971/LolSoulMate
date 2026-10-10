/** Narrative questionnaire chapters — driven by question index only, never by answers. */

export type RuneterraAct = 1 | 2 | 3 | 4 | 5;

export const ACT_LABELS: Record<RuneterraAct, string> = {
  1: "Origins",
  2: "Conviction",
  3: "Ambition",
  4: "The Shadow",
  5: "Destiny",
};

/** Question index 0–19 → act 1–5 (four questions per act). */
export function actForQuizIndex(quizIndex: number): RuneterraAct {
  const clamped = Math.max(0, Math.min(19, quizIndex));
  return (Math.floor(clamped / 4) + 1) as RuneterraAct;
}

/** Progress within act 0–1 for subtle intensity (e.g. Targon expansion). */
export function actProgress(quizIndex: number): number {
  const within = quizIndex % 4;
  return within / 3;
}

export function constellationChapterMarkers(): number[] {
  return [0, 4, 8, 12, 16];
}

/** Completed = question has an answer; current unanswered does not count as completed. */
export function completedQuestionCount(
  answers: Record<string, string>,
  questionIds: string[],
): number {
  return questionIds.filter((id) => Boolean(answers[id])).length;
}

export function isQuestionAnswered(answers: Record<string, string>, questionId: string): boolean {
  return Boolean(answers[questionId]);
}
