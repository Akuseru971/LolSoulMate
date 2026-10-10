"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { en } from "@/lib/i18n/en";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";
import { GlassPanel } from "@/components/layout/GlassPanel";

export function AnalyzingStage({ onSkipAnimation }: { onSkipAnimation?: () => void }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % en.loading.messages.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="text-center">
        <h2 className="font-serif text-3xl text-white">{en.loading.title}</h2>
        <motion.p
          key={msgIndex}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-white/65"
        >
          {en.loading.messages[msgIndex]}
        </motion.p>
        {onSkipAnimation && (
          <button
            type="button"
            onClick={onSkipAnimation}
            className="mt-4 text-sm text-amber-200/80 underline-offset-2 hover:underline"
          >
            Skip animation
          </button>
        )}
      </div>

      <GlassPanel className="mt-10 space-y-6 p-6">
        <h3 className="font-serif text-xl text-amber-100/90">While your legend forms</h3>
        <p className="text-sm leading-relaxed text-white/70">
          Runeterra is a world of overlapping destinies—Demacia&apos;s oaths, Ionia&apos;s
          balance, the Shadow Isles&apos; grief. Your answers are compared against
          canonical champion personalities from official Universe lore, not gameplay
          roles. Your result is computed locally in your browser—no AI API calls.
        </p>
        <AdSenseUnit className="mt-4" />
      </GlassPanel>
    </section>
  );
}
