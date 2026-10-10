"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { en } from "@/lib/i18n/en";
import type { ChampionProfile } from "@/data/champions/types";
import { ChampionArtwork } from "@/components/champions/ChampionArtwork";
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { revealLeadLabel, possessiveStory } from "@/lib/champions/nickname";
import { SoulSeal } from "@/components/ornaments/SoulSeal";
import { ConstellationComplete } from "@/components/quiz/ConstellationProgress";

const PHASE_CONSTELLATION = 0;
const PHASE_SILENCE = 1;
const PHASE_AWAKEN = 2;
const PHASE_NAME = 3;
const PHASE_CONNECTION = 4;

const TIMINGS = [550, 1200, 1900, 2600, 3300];

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

  return (
    <header className="relative mb-12 w-full">
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
          exit={{ opacity: 0 }}
          className="flex min-h-[36vh] flex-col items-center justify-center px-6 py-12 text-center"
        >
          <ConstellationComplete />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-6"
          >
            <SoulSeal size={48} className="text-[var(--sor-gold)]/75" />
          </motion.div>
        </motion.div>
      )}

      {show(PHASE_SILENCE) && !done && phase === PHASE_SILENCE && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex min-h-[32vh] flex-col items-center justify-center px-6 py-12 text-center"
        >
          <SoulSeal size={52} className="mb-5 text-[var(--sor-gold)]/70" />
          <p className="font-serif text-lg text-white/55">Every choice leaves a mark.</p>
        </motion.div>
      )}

      {(show(PHASE_AWAKEN) || done) && (
        <div
          className={
            isDesktop
              ? "lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10"
              : "flex flex-col"
          }
        >
          <motion.div
            initial={false}
            animate={{ opacity: show(PHASE_AWAKEN) ? 1 : 0 }}
            transition={{ duration: done ? 0 : 1, ease: "easeOut" }}
            className="relative w-full max-w-5xl lg:max-w-none"
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-lg opacity-50 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(113,140,139,0.15), transparent 70%)",
              }}
              aria-hidden
            />
            <ChampionArtwork
              src={champion.imageUrl}
              mode="full"
              frame={frame}
              alt={champion.name}
              className="relative w-full rounded-sm ring-1 ring-white/5"
            />
          </motion.div>

          <div className="mt-6 px-1 lg:mt-0 lg:px-0 lg:pt-4">
            {show(PHASE_NAME) && (
              <>
                <motion.p
                  initial={done ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="type-chapter"
                >
                  {revealLeadLabel(nickname)}
                </motion.p>
                <motion.h2
                  initial={done ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="type-cinematic-title mt-3 text-[2.35rem] text-white sm:text-5xl"
                >
                  {champion.name}
                </motion.h2>
                <motion.p
                  initial={done ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50"
                >
                  {champion.title}
                </motion.p>
                <motion.p
                  initial={done ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-1 text-xs text-white/40"
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
                  className="mt-4 text-xs uppercase tracking-widest text-white/35"
                >
                  {possessiveStory(nickname)}
                </motion.p>
                <motion.p
                  initial={done ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-5 font-serif text-lg leading-relaxed text-[var(--sor-ivory)]/92"
                >
                  {oneLiner}
                </motion.p>
                <motion.p
                  initial={done ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-sm text-white/40"
                >
                  {en.results.compatibilityLabel}{" "}
                  <span className="font-serif text-[var(--sor-gold)]/90">{compatibility}%</span>
                </motion.p>
                <motion.div
                  initial={done ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <button
                    type="button"
                    onClick={onReadStory}
                    className="min-h-[44px] border-b border-[var(--sor-border-subtle)] pb-1 text-left font-serif text-[var(--sor-ivory)] transition hover:border-[var(--sor-gold)]/50"
                  >
                    Read your story
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
      )}
    </header>
  );
}
