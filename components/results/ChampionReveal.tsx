"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { en } from "@/lib/i18n/en";
import type { ChampionProfile } from "@/data/champions/types";
import { ChampionArtwork } from "@/components/champions/ChampionArtwork";
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { revealLeadLabel, possessiveStory } from "@/lib/champions/nickname";

const PHASE_SILENCE = 0;
const PHASE_AWAKEN = 1;
const PHASE_NAME = 2;
const PHASE_CONNECTION = 3;
const PHASE_PORTRAIT = 4;

const TIMINGS = [400, 900, 1500, 2200, 3000];

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
  const [animPhase, setAnimPhase] = useState(PHASE_SILENCE);
  const phase = reduce || revealComplete ? PHASE_PORTRAIT : animPhase;
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
    if (phase >= PHASE_PORTRAIT && !completedRef.current) {
      completedRef.current = true;
      onRevealComplete();
    }
  }, [phase, onRevealComplete]);

  function skipAll() {
    timersRef.current.forEach(clearTimeout);
    setAnimPhase(PHASE_PORTRAIT);
    onSkip();
  }

  const done = revealComplete || phase >= PHASE_PORTRAIT;
  const show = (min: number) => done || phase >= min;

  return (
    <header className="relative -mx-4 mb-10 sm:mx-0">
      <div className="relative min-h-[min(82dvh,680px)] w-full overflow-hidden sm:min-h-[560px] sm:rounded-sm">
        <div className="absolute inset-0 bg-[#030508]" />

        {show(PHASE_SILENCE) && !done && phase === PHASE_SILENCE && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 flex items-center justify-center px-8 text-center font-serif text-lg text-white/55"
          >
            Every choice leaves a mark.
          </motion.p>
        )}

        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: show(PHASE_AWAKEN) ? 1 : 0,
            scale: show(PHASE_AWAKEN) && !reduce ? 1.04 : 1,
          }}
          transition={{ duration: done ? 0 : 1.1, ease: "easeOut" }}
        >
          <ChampionArtwork
            src={champion.imageUrl}
            frame={frame}
            alt={champion.name}
            className="h-full min-h-[min(82dvh,680px)] sm:min-h-[560px]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/50 to-[#050608]/30" />

        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 sm:px-6">
          {show(PHASE_CONNECTION) && (
            <motion.p
              initial={done ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] uppercase tracking-[0.28em] text-amber-200/75"
            >
              {revealLeadLabel(nickname)}
            </motion.p>
          )}

          {show(PHASE_NAME) && (
            <motion.h2
              initial={done ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-2 font-serif text-[2.65rem] leading-[0.95] text-white sm:text-5xl"
            >
              {champion.name}
            </motion.h2>
          )}

          {show(PHASE_PORTRAIT) && (
            <>
              <motion.p
                initial={done ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-sm text-white/55"
              >
                {champion.region} · {champion.title}
              </motion.p>
              <motion.p
                initial={done ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-xs uppercase tracking-widest text-white/35"
              >
                {possessiveStory(nickname)}
              </motion.p>
              <motion.p
                initial={done ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5 max-w-md font-serif text-lg leading-relaxed text-amber-50/95"
              >
                {oneLiner}
              </motion.p>
              <motion.p
                initial={done ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-3 text-sm text-white/40"
              >
                {en.results.compatibilityLabel}{" "}
                <span className="font-serif text-amber-200/90">{compatibility}%</span>
              </motion.p>
              <motion.div
                initial={done ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <button
                  type="button"
                  onClick={onReadStory}
                  className="min-h-[44px] border-b border-amber-400/45 pb-1 text-left font-serif text-amber-100"
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

        {!done && (
          <button
            type="button"
            onClick={skipAll}
            className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-30 min-h-[44px] rounded-full px-3 text-xs text-white/45 underline"
          >
            Skip
          </button>
        )}
      </div>
    </header>
  );
}
