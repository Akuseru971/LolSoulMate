"use client";

import { useMemo } from "react";
import { getMatchableChampions } from "@/data/champions/matchable";
import { composeNarrative } from "@/lib/narrative/composeNarrative";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import { QUESTIONS } from "@/data/questions";
import { ResultsStage } from "@/components/results/ResultsStage";

const SPOTLIGHT = ["kindred", "jhin", "viego", "irelia", "braum"] as const;

/** Deterministic synthetic answers — not real user data. */
function syntheticAnswers(seed: number): Record<string, string> {
  return Object.fromEntries(
    QUESTIONS.map((q, i) => [q.id, q.answers[(i + seed) % q.answers.length].id]),
  );
}

export function ResultChamberGallery() {
  const entries = useMemo(() => {
    const champs = getMatchableChampions().filter((c) =>
      (SPOTLIGHT as readonly string[]).includes(c.id),
    );
    return champs.map((c, idx) => {
      const answerMap = syntheticAnswers(idx + 3);
      const answers = Object.entries(answerMap).map(([questionId, answerId]) => ({
        questionId,
        answerId,
      }));
      const match = computeMatch(answerMap);
      const forcedMatch: typeof match = {
        ...match,
        primary: {
          ...match.primary,
          champion: c,
          championId: c.id,
          compatibility: 84 + idx,
        },
      };
      const { narrative } = composeNarrative({
        match: forcedMatch,
        answers,
        nickname: "Traveler",
      });
      return { id: c.id, match: forcedMatch, narrative };
    });
  }, []);

  return (
    <div className="space-y-32 pb-32">
      <div className="px-4 py-8 text-center text-white/60">
        <h1 className="font-serif text-2xl text-amber-100">Soul Chamber gallery (dev)</h1>
        <p className="mt-2 text-xs">Synthetic fixtures · {SPOTLIGHT.join(", ")}</p>
      </div>
      {entries.map(({ id, match, narrative }) => (
        <div key={id} data-testid={`chamber-${id}`} className="border-t border-white/10">
          <ResultsStage
            match={match}
            narrative={narrative}
            nickname="Traveler"
            onRestart={() => {}}
          />
        </div>
      ))}
    </div>
  );
}
