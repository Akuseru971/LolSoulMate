"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { en } from "@/lib/i18n/en";
import type { ChampionProfile } from "@/data/champions/types";
import { ChampionArtwork } from "@/components/champions/ChampionArtwork";
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { getResultTheme } from "@/data/champions/resultThemes";
import { soulRevealLabel } from "@/lib/champions/nickname";
import { ConstellationComplete } from "@/components/quiz/ConstellationProgress";
import { ChampionChamberSeal } from "./ChampionChamberSeal";

const PHASE_CONSTELLATION = 0;
const PHASE_SEAL = 1;
const PHASE_AWAKEN = 2;
const PHASE_NAME = 3;
const PHASE_CONNECTION = 4;

const TIMINGS = [600, 1300, 2000, 2700, 3400];

export function ChampionReveal({
  champion,
  compatibility,
  oneLiner,
  nickname,
  revealComplete,
  onRevealComplete,
  onSkip,
  onReadStory,
  onOpenStudio,
  isDesktop,
}: {
  champion: ChampionProfile;
  compatibility: number;
  oneLiner: string;
  nickname?: string;
  revealComplete: boolean;
  onRevealComplete: () => void;
  onSkip: () => void;
  onReadStory: () => void;
  onOpenStudio: () => void;
  isDesktop: boolean;
}) {
  const reduce = useReducedMotion();
  const [animPhase, setAnimPhase] = useState(PHASE_CONSTELLATION);
  const phase = reduce || revealComplete ? PHASE_CONNECTION : animPhase;
  const completedRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const theme = getResultTheme(champion.id);

  const frame = getVisualFrame(
    champion.id,
    isDesktop ? "revealDesktop" : "revealMobile",
  );

  useEffect(() => {
    if (reduce || revealComplete) return;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = TIMINGS.map((ms, idx) =>
      setTimeout(() => setAnimPhase(idx + 1), ms),
    );
    return () => timersRef.current.forEach(clearTimeout);
  }, [reduce, revealComplete, champion.id]);

  useEffect(() => {
    if (phase >= PHASE_CONNECTION && !completedRef.current) {
      completedRef.current = true;
      onRevealComplete();
    }
  }, [phase, onRevealComplete]);

  function skipAll() {
    timersRef.current.forEach(clearTimeout);
    setAnimPhase(PHASE_CONNECTION);
    onSkip();
  }

  const done = revealComplete || phase >= PHASE_CONNECTION;
  const show = (min: number) => done || phase >= min;

  const showHero = show(PHASE_AWAKEN) || done;

  return (
    <header className="relative mb-6 w-full overflow-hidden pb-8 sm:mb-12">
      {!done && (
        <button
          type="button"
          onClick={skipAll}
          className="absolute right-0 top-0 z-30 min-h-[44px] rounded-full px-3 text-xs text-white/45 underline"
        >
          Skip
        </button>
      )}

      {show(PHASE_CONSTELLATION) && !done && phase === PHASE_CONSTELLATION && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-h-[32vh] flex-col items-center justify-center px-6 py-10"
        >
          <ConstellationComplete />
        </motion.div>
      )}

      {show(PHASE_SEAL) && !done && phase === PHASE_SEAL && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-h-[28vh] flex-col items-center justify-center py-8"
        >
          <ChampionChamberSeal theme={theme} size={64} className="opacity-90" />
        </motion.div>
      )}

      {showHero && (
        <div className="relative mx-auto max-w-6xl">
          <div
            className="pointer-events-none absolute -inset-x-4 -top-8 bottom-0 opacity-70 sm:-inset-x-8"
            style={{
              background: `radial-gradient(ellipse 80% 55% at ${theme.lighting.positionX}% ${theme.lighting.positionY}%, ${theme.palette.glow}, transparent 65%)`,
            }}
            aria-hidden
          />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={false}
              animate={{ opacity: show(PHASE_AWAKEN) ? 1 : 0 }}
              transition={{ duration: done ? 0 : 1.05, ease: "easeOut" }}
              className="relative w-full max-w-[1100px] overflow-visible"
            >
              {!reduce && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 rounded-full"
                  style={{ background: `radial-gradient(ellipse at center, ${theme.palette.glow}, transparent 68%)` }}
                  animate={{ opacity: [0.25, 0.65, 0.25], scale: [0.96, 1.08, 0.96] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <ChampionArtwork
                src={champion.imageUrl}
                mode="full"
                frame={frame}
                alt={champion.name}
                className="w-full rounded-sm shadow-[0_40px_120px_rgba(0,0,0,0.55)] ring-1 ring-white/10"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[var(--sor-bg-primary,#050608)] via-[var(--sor-bg-primary,#050608)]/60 to-transparent lg:hidden"
                aria-hidden
              />
            </motion.div>

            <div
              className="relative z-10 mx-auto -mt-3 w-full max-w-3xl px-4 pb-6 pt-8 text-center sm:-mt-6 sm:px-8 sm:pt-12"
            >
              {show(PHASE_NAME) && (
                <>
                  <motion.p
                    initial={done ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[11px] tracking-[0.32em]"
                    style={{ color: theme.palette.accent }}
                  >
                    {soulRevealLabel(nickname)}
                  </motion.p>
                  <motion.h1
                    initial={done ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="type-cinematic-title mt-4 text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05]"
                    style={{ color: theme.palette.text }}
                  >
                    {champion.name}
                  </motion.h1>
                  <motion.p
                    initial={done ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs uppercase tracking-[0.22em] text-white/50"
                  >
                    {champion.title}
                  </motion.p>
                  <motion.p
                    initial={done ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-1 text-sm text-white/42"
                  >
                    {champion.region}
                  </motion.p>
                </>
              )}

              {show(PHASE_CONNECTION) && (
                <>
                  <motion.p
                    initial={done ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mx-auto mt-7 max-w-2xl font-serif text-xl leading-relaxed sm:text-2xl"
                    style={{ color: theme.palette.text }}
                  >
                    {oneLiner}
                  </motion.p>
                  <motion.p
                    initial={done ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 text-xs text-white/38"
                  >
                    {en.results.compatibilityLabel}{" "}
                    <span className="font-serif tabular-nums" style={{ color: theme.palette.accent }}>
                      {compatibility}%
                    </span>
                  </motion.p>
                  <motion.div
                    initial={done ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10"
                  >
                    <button
                      type="button"
                      onClick={onReadStory}
                      className="min-h-[44px] border-b pb-1 text-center font-serif transition"
                      style={{
                        borderColor: `${theme.palette.accent}66`,
                        color: theme.palette.text,
                      }}
                    >
                      Uncover your story
                    </button>
                    <button
                      type="button"
                      onClick={onOpenStudio}
                      className="min-h-[44px] text-sm text-white/50 underline-offset-2 hover:text-white/75 hover:underline"
                    >
                      Create your portrait
                    </button>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
