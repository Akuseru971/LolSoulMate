"use client";

import { useMemo } from "react";
import { QUESTIONS } from "@/data/questions";
import { constellationChapterMarkers } from "@/lib/quiz/atmosphereActs";
import { ACT_LABELS, actForQuizIndex } from "@/lib/quiz/atmosphereActs";

/** 20 star positions along a gentle arc (viewBox 0 0 320 56). */
const STAR_POINTS = Array.from({ length: 20 }, (_, i) => {
  const t = i / 19;
  const x = 16 + t * 288;
  const y = 38 - Math.sin(t * Math.PI) * 22 - (i % 3) * 1.5;
  return { x, y };
});

export function ConstellationProgress({
  currentIndex,
  answers,
}: {
  currentIndex: number;
  answers: Record<string, string>;
}) {
  const act = actForQuizIndex(currentIndex);
  const chapterMarks = constellationChapterMarkers();

  const lines = useMemo(() => {
    const segments: { x1: number; y1: number; x2: number; y2: number; lit: boolean }[] = [];
    for (let i = 0; i < STAR_POINTS.length - 1; i++) {
      const qId = QUESTIONS[i].id;
      const lit = Boolean(answers[qId] && answers[QUESTIONS[i + 1].id]);
      if (!lit) continue;
      const a = STAR_POINTS[i];
      const b = STAR_POINTS[i + 1];
      segments.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, lit: true });
    }
    return segments;
  }, [answers]);

  const answeredCount = QUESTIONS.filter((q) => answers[q.id]).length;

  return (
    <div className="mx-auto mb-4 w-full max-w-[720px]" role="group" aria-label="Questionnaire progress">
      <div className="mb-2 flex items-end justify-between gap-2">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--sor-mist)]/90">
            {ACT_LABELS[act]}
          </p>
          <p className="text-xs text-white/55">
            Question {currentIndex + 1} of {QUESTIONS.length}
          </p>
        </div>
        <p className="text-xs tabular-nums text-[var(--sor-gold)]/80" aria-live="polite">
          {answeredCount} illuminated
        </p>
      </div>

      <svg
        viewBox="0 0 320 56"
        className="mx-auto block h-auto max-h-14 w-full max-w-[680px] overflow-visible"
        aria-hidden={false}
        role="img"
        aria-label={`${answeredCount} of ${QUESTIONS.length} questions answered. Currently on question ${currentIndex + 1}.`}
      >
        {lines.map((seg, idx) => (
          <line
            key={idx}
            x1={seg.x1}
            y1={seg.y1}
            x2={seg.x2}
            y2={seg.y2}
            stroke="var(--sor-gold)"
            strokeWidth="0.75"
            opacity="0.55"
          />
        ))}
        {STAR_POINTS.map((pt, i) => {
          const qId = QUESTIONS[i].id;
          const answered = Boolean(answers[qId]);
          const isCurrent = i === currentIndex;
          const isChapter = chapterMarks.includes(i);
          let r = isChapter ? 2.8 : 2.2;
          if (isCurrent) r = 3.4;
          const fill = answered
            ? "var(--sor-gold)"
            : isCurrent
              ? "var(--sor-ivory)"
              : "rgba(113,140,139,0.35)";
          const opacity = answered ? 0.95 : isCurrent ? 0.85 : 0.45;
          return (
            <circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r={r}
              fill={fill}
              opacity={opacity}
              className={isCurrent ? "drop-shadow-[0_0_6px_rgba(197,164,109,0.5)]" : undefined}
            />
          );
        })}
      </svg>
    </div>
  );
}

/** Full constellation for reveal bridge (all 20 connected). */
export function ConstellationComplete({ className = "" }: { className?: string }) {
  const segments = STAR_POINTS.slice(0, -1).map((a, i) => {
    const b = STAR_POINTS[i + 1];
    return { x1: a.x, y1: a.y, x2: b.x, y2: b.y };
  });

  return (
    <svg
      viewBox="0 0 320 56"
      className={`mx-auto block h-20 w-full max-w-xl ${className}`}
      aria-hidden
    >
      {segments.map((seg, idx) => (
        <line
          key={idx}
          x1={seg.x1}
          y1={seg.y1}
          x2={seg.x2}
          y2={seg.y2}
          stroke="var(--sor-gold)"
          strokeWidth="0.9"
          opacity="0.65"
        />
      ))}
      {STAR_POINTS.map((pt, i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r={2.4} fill="var(--sor-gold)" opacity={0.85 + (i % 3) * 0.05} />
      ))}
    </svg>
  );
}
