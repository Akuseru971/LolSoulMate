"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LandingStage } from "@/components/stages/LandingStage";
import {
  PersonalStage,
  resolveZodiac,
  type PersonalFormState,
} from "@/components/stages/PersonalStage";
import { QuizStage } from "@/components/quiz/QuizStage";
import { AnalyzingStage } from "@/components/stages/AnalyzingStage";
import { ResultsStage } from "@/components/results/ResultsStage";
import { RecoveryStage } from "@/components/stages/RecoveryStage";
import { QUESTIONS } from "@/data/questions";
import {
  clearProgress,
  defaultProgress,
  loadProgress,
  saveProgress,
  isQuizComplete,
  type JourneyStage,
  type StoredProgress,
} from "@/lib/quiz/storage";
import { restoreResultFromProgress } from "@/lib/quiz/restoreResult";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { trackEvent } from "@/lib/analytics";
import { CONTENT_VERSION } from "@/lib/config/versions";

const emptyForm: PersonalFormState = {
  nickname: "",
  birthMonth: "",
  birthDay: "",
  zodiac: "",
  personalityKeywords: "",
};

type BootState = "hydrating" | "ready" | "recovery";

export function SoulJourney() {
  const [bootState, setBootState] = useState<BootState>("hydrating");
  const [recoveryReason, setRecoveryReason] = useState<
    "corrupt" | "incompatible" | "incomplete"
  >("corrupt");
  const [progress, setProgress] = useState<StoredProgress>(() => defaultProgress());
  const [form, setForm] = useState<PersonalFormState>(emptyForm);
  const [match, setMatch] = useState<MatchResult | null>(null);
  const [narrative, setNarrative] = useState<NarrativeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const analysisLock = useRef(false);
  const hydrated = useRef(false);

  const persist = useCallback((next: StoredProgress) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const applyRestoredResult = useCallback(
    (snapshot: StoredProgress, zodiac?: ReturnType<typeof resolveZodiac>) => {
      const restored = restoreResultFromProgress(
        snapshot,
        zodiac ?? snapshot.zodiac,
      );
      if (!restored) return false;
      setMatch(restored.match);
      setNarrative(restored.narrative);
      return true;
    },
    [],
  );

  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    queueMicrotask(() => {
      const { data, error: loadError } = loadProgress();
      if (loadError) {
        setRecoveryReason(loadError);
        setBootState("recovery");
        return;
      }
      if (!data) {
        setBootState("ready");
        trackEvent("landing_view");
        return;
      }

      setProgress(data);
      setForm({
        nickname: data.nickname ?? "",
        birthMonth: data.birthMonth?.toString() ?? "",
        birthDay: data.birthDay?.toString() ?? "",
        zodiac: data.zodiac ?? "",
        personalityKeywords: data.personalityKeywords ?? "",
      });

      const z = data.zodiac ?? resolveZodiac({
        nickname: data.nickname ?? "",
        birthMonth: data.birthMonth?.toString() ?? "",
        birthDay: data.birthDay?.toString() ?? "",
        zodiac: data.zodiac ?? "",
        personalityKeywords: data.personalityKeywords ?? "",
      });

      if (
        (data.stage === "results" || data.stage === "analyzing") &&
        isQuizComplete(data.answers)
      ) {
        const ok = applyRestoredResult(data, z);
        if (!ok) {
          setRecoveryReason("incomplete");
          setBootState("recovery");
          return;
        }
        analysisLock.current = true;
        setProgress({ ...data, stage: "results" });
        saveProgress({ ...data, stage: "results" });
        trackEvent("result_view_restored");
      }

      setBootState("ready");
    });
  }, [applyRestoredResult]);

  const runAnalysis = useCallback(
    (snapshot: StoredProgress) => {
      if (analysisLock.current) return;
      analysisLock.current = true;

      const z =
        resolveZodiac(form) ??
        snapshot.zodiac ??
        undefined;

      try {
        const restored = restoreResultFromProgress(snapshot, z);
        if (!restored) throw new Error("Incomplete answers");
        setMatch(restored.match);
        setNarrative(restored.narrative);
        persist({
          ...snapshot,
          stage: "results",
          contentVersion: CONTENT_VERSION,
          resultChampionId: restored.match.primary.championId,
          zodiac: z ?? snapshot.zodiac,
        });
        trackEvent("quiz_completed");
        trackEvent("result_view");
      } catch (e) {
        setError(
          e instanceof Error ? e.message : "Unable to compose narrative locally.",
        );
        analysisLock.current = false;
      }
    },
    [form, persist],
  );

  function hardReset() {
    analysisLock.current = false;
    clearProgress();
    setProgress(defaultProgress());
    setForm(emptyForm);
    setMatch(null);
    setNarrative(null);
    setError(null);
    setBootState("ready");
    trackEvent("restart");
  }

  function restart() {
    hardReset();
  }

  function startAnalyzing(snapshot: StoredProgress) {
    const analyzing = { ...snapshot, stage: "analyzing" as JourneyStage };
    persist(analyzing);
    runAnalysis(analyzing);
  }

  if (bootState === "hydrating") {
    return (
      <div className="flex min-h-[40vh] items-center justify-center text-white/60">
        Restoring your place in the story…
      </div>
    );
  }

  if (bootState === "recovery") {
    return <RecoveryStage reason={recoveryReason} onReset={hardReset} />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={progress.stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {progress.stage === "landing" && (
          <LandingStage
            onStart={() => {
              trackEvent("quiz_started");
              persist({ ...progress, stage: "personal" });
            }}
          />
        )}

        {progress.stage === "personal" && (
          <PersonalStage
            form={form}
            onChange={setForm}
            onContinue={() => {
              const next: StoredProgress = {
                ...progress,
                stage: "quiz",
                nickname: form.nickname || undefined,
                birthMonth: form.birthMonth ? Number(form.birthMonth) : undefined,
                birthDay: form.birthDay ? Number(form.birthDay) : undefined,
                zodiac: resolveZodiac(form),
                personalityKeywords: form.personalityKeywords || undefined,
              };
              trackEvent("personal_step_completed");
              persist(next);
            }}
            onSkip={() => persist({ ...progress, stage: "quiz" })}
          />
        )}

        {progress.stage === "quiz" && (
          <QuizStage
            index={progress.quizIndex}
            answers={progress.answers}
            onSelect={(questionId, answerId) => {
              persist({
                ...progress,
                answers: { ...progress.answers, [questionId]: answerId },
              });
              trackEvent("question_answered", { questionId });
            }}
            onBack={() => {
              if (progress.quizIndex === 0) {
                persist({ ...progress, stage: "personal" });
                return;
              }
              persist({ ...progress, quizIndex: progress.quizIndex - 1 });
            }}
            onNext={() => {
              const q = QUESTIONS[progress.quizIndex];
              if (!progress.answers[q.id]) {
                setError("Please choose an answer to continue.");
                return;
              }
              setError(null);
              if (progress.quizIndex >= QUESTIONS.length - 1) {
                startAnalyzing(progress);
                return;
              }
              persist({ ...progress, quizIndex: progress.quizIndex + 1 });
            }}
          />
        )}

        {error && (
          <p className="text-center text-sm text-red-300/90" role="alert">
            {error}
          </p>
        )}

        {progress.stage === "analyzing" && (
          <AnalyzingStage
            onSkipAnimation={() => {
              if (match && narrative) {
                persist({ ...progress, stage: "results" });
              }
            }}
          />
        )}

        {progress.stage === "results" && match && narrative && (
          <ResultsStage
            match={match}
            narrative={narrative}
            nickname={progress.nickname ?? form.nickname}
            onRestart={restart}
          />
        )}

        {progress.stage === "results" && (!match || !narrative) && (
          <RecoveryStage reason="incomplete" onReset={hardReset} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
