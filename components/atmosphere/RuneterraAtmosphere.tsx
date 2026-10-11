"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useAtmosphereSnapshot } from "@/lib/journey/AtmosphereContext";
import type { RuneterraAct } from "@/lib/quiz/atmosphereActs";

const TRANSITION = { duration: 1.25, ease: [0.4, 0, 0.2, 1] as const };

function ActLayer({
  act,
  active,
  progress,
  reduce,
}: {
  act: RuneterraAct;
  active: boolean;
  progress: number;
  reduce: boolean;
}) {
  const opacity = active ? 1 : 0;

  if (act === 1) {
    return (
      <motion.div
        className="absolute inset-0"
        animate={{ opacity }}
        transition={TRANSITION}
        style={{ willChange: "opacity" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a22] via-[#121828] to-[#050608]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(45,120,110,0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(90,60,120,0.12),transparent_45%)]" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[38%] opacity-30"
          style={{
            background:
              "linear-gradient(to top, rgba(10,30,28,0.9), transparent), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 80' preserveAspectRatio='none'%3E%3Cpath fill='%23081214' d='M0 80 L0 45 Q50 55 100 40 T200 50 T300 35 T400 48 L400 80 Z'/%3E%3C/svg%3E\") bottom/cover no-repeat",
          }}
        />
        {!reduce &&
          Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-2 w-1.5 rounded-full bg-teal-200/25"
              style={{ left: `${12 + i * 11}%`, top: `${20 + (i % 3) * 18}%` }}
              animate={{ y: [0, 18, 0], opacity: [0.15, 0.45, 0.15], rotate: [0, 8, 0] }}
              transition={{ duration: 9 + i, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
      </motion.div>
    );
  }

  if (act === 2) {
    return (
      <motion.div className="absolute inset-0" animate={{ opacity }} transition={TRANSITION}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#141820] via-[#0c1018] to-[#050608]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(230,221,206,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(197,164,109,0.1),transparent_40%)]" />
        <div
          className="absolute top-[8%] left-[10%] right-[10%] h-[28%] border border-[#c5a46d]/10 opacity-40"
          style={{ clipPath: "polygon(0 100%, 8% 0, 92% 0, 100% 100%)" }}
        />
        <div
          className="absolute top-0 left-1/2 h-[55%] w-px -translate-x-1/2 bg-gradient-to-b from-[#e6ddce]/15 to-transparent"
          aria-hidden
        />
      </motion.div>
    );
  }

  if (act === 3) {
    return (
      <motion.div className="absolute inset-0" animate={{ opacity }} transition={TRANSITION}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0c10] via-[#120a0c] to-[#050608]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_100%,rgba(120,40,35,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(180,90,50,0.12),transparent_40%)]" />
        <div
          className="absolute bottom-[18%] right-[8%] h-[22%] w-[35%] border border-[#8b4513]/20 opacity-35"
          style={{ clipPath: "polygon(0 100%, 15% 20%, 85% 10%, 100% 100%)" }}
        />
        {!reduce &&
          Array.from({ length: 10 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-orange-400/35"
              style={{ left: `${8 + i * 9}%`, bottom: `${15 + (i % 4) * 8}%` }}
              animate={{ y: [0, -24, 0], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 5 + (i % 3), repeat: Infinity, delay: i * 0.35 }}
            />
          ))}
      </motion.div>
    );
  }

  if (act === 4) {
    return (
      <motion.div className="absolute inset-0" animate={{ opacity }} transition={TRANSITION}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1218] via-[#060810] to-[#030508]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_80%,rgba(60,100,85,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(40,60,90,0.2),transparent_45%)]" />
        {!reduce &&
          Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-16 w-[120%] -left-[10%] bg-gradient-to-r from-transparent via-[#718c8b]/08 to-transparent blur-md"
              style={{ top: `${20 + i * 14}%` }}
              animate={{ x: ["-5%", "5%", "-5%"], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 14 + i * 2, repeat: Infinity }}
            />
          ))}
      </motion.div>
    );
  }

  const expand = 0.85 + progress * 0.15;
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ opacity }}
      transition={TRANSITION}
      style={{ transform: reduce ? undefined : `scale(${expand})`, transformOrigin: "50% 40%" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a1e] via-[#080612] to-[#030508]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_15%,rgba(120,90,200,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(230,221,206,0.06),transparent_35%)]" />
      {!reduce &&
        Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: i % 7 === 0 ? 2 : 1,
              height: i % 7 === 0 ? 2 : 1,
              left: `${(i * 23) % 100}%`,
              top: `${(i * 17) % 55}%`,
              opacity: 0.25 + (i % 5) * 0.08,
            }}
            animate={{ opacity: [0.2, 0.75, 0.2] }}
            transition={{ duration: 3 + (i % 6), repeat: Infinity, delay: i * 0.12 }}
          />
        ))}
      <svg className="absolute inset-0 h-full w-full opacity-[0.12]" aria-hidden>
        <path
          d="M 80 120 L 200 80 L 320 140"
          fill="none"
          stroke="#c5a46d"
          strokeWidth="0.5"
        />
        <path d="M 120 200 L 280 160" fill="none" stroke="#718c8b" strokeWidth="0.4" />
      </svg>
    </motion.div>
  );
}

export function RuneterraAtmosphere() {
  const reduce = useReducedMotion() ?? false;
  const { stage, act, actProgress } = useAtmosphereSnapshot();

  const showQuizActs = stage === "quiz" || stage === "analyzing";
  const activeAct = showQuizActs ? act : stage === "results" ? 5 : 1;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050608]">
      <div className="absolute inset-0 bg-[#050608]" />
      {([1, 2, 3, 4, 5] as RuneterraAct[]).map((a) => (
        <ActLayer
          key={a}
          act={a}
          active={activeAct === a}
          progress={a === 5 ? actProgress : 0}
          reduce={reduce}
        />
      ))}
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-[35%] top-[-25%] h-[95vh] w-[95vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(168,139,202,0.09), transparent 65%)" }}
            animate={{ x: ["-5%", "22%", "-5%"], y: ["0%", "22%", "0%"], scale: [0.92, 1.15, 0.92] }}
            transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-[40%] bottom-[-30%] h-[105vh] w-[110vw] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(197,164,109,0.085), transparent 66%)" }}
            animate={{ x: ["8%", "-18%", "8%"], y: ["6%", "-14%", "6%"], scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
          />
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute -left-[20%] h-[18vh] w-[140%] rotate-[-11deg] bg-gradient-to-r from-transparent via-white/[0.028] to-transparent blur-2xl"
              style={{ top: `${12 + i * 31}%` }}
              animate={{ x: ["-10%", "12%", "-10%"], y: [0, i % 2 ? -38 : 38, 0] }}
              transition={{ duration: 21 + i * 8, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
    </div>
  );
}
