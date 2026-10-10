import { QUESTIONS } from "@/data/questions";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import { composeNarrative } from "@/lib/narrative/composeNarrative";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import type { StoredProgress } from "./storage";
import { isQuizComplete } from "./storage";
import type { ZodiacSign } from "@/lib/zodiac";
import { CONTENT_VERSION } from "@/lib/config/versions";

export interface RestoredResult {
  match: MatchResult;
  narrative: NarrativeResponse;
}

export function buildAnswersPayload(answers: Record<string, string>) {
  return QUESTIONS.map((q) => ({
    questionId: q.id,
    answerId: answers[q.id]!,
  }));
}

export function restoreResultFromProgress(
  snapshot: StoredProgress,
  zodiac?: ZodiacSign | null,
): RestoredResult | null {
  if (!isQuizComplete(snapshot.answers)) return null;

  const match = computeMatch(snapshot.answers, zodiac ?? snapshot.zodiac);
  const answersPayload = buildAnswersPayload(snapshot.answers);

  const { narrative } = composeNarrative({
    match,
    answers: answersPayload,
    nickname: snapshot.nickname,
    contentVersion: snapshot.contentVersion ?? CONTENT_VERSION,
  });

  return { match, narrative };
}
