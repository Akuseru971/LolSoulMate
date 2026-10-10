"use client";

import { useEffect } from "react";
import { useSetAtmosphereSnapshot } from "@/lib/journey/AtmosphereContext";
import { actForQuizIndex, actProgress } from "@/lib/quiz/atmosphereActs";
import type { StoredProgress } from "@/lib/quiz/storage";

export function AtmosphereSync({ progress }: { progress: StoredProgress }) {
  const setSnapshot = useSetAtmosphereSnapshot();

  useEffect(() => {
    setSnapshot({
      stage: progress.stage,
      quizIndex: progress.quizIndex,
      act: actForQuizIndex(progress.stage === "quiz" ? progress.quizIndex : 19),
      actProgress:
        progress.stage === "quiz" ? actProgress(progress.quizIndex) : progress.stage === "analyzing" ? 1 : 0,
    });
  }, [progress.stage, progress.quizIndex, setSnapshot]);

  return null;
}
