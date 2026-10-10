"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ChampionResultTheme } from "@/data/champions/resultThemes";
import { ChampionChamberSeal } from "./ChampionChamberSeal";

export function SoulConclusion({
  destiny,
  theme,
}: {
  destiny: string;
  theme: ChampionResultTheme;
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative py-8 text-center sm:py-12">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[36rem]"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-40"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${theme.palette.glow}, transparent 70%)`,
          }}
          aria-hidden
        />
        <ChampionChamberSeal theme={theme} size={52} className="mx-auto opacity-80" />
        <p
          className="mt-8 font-serif text-[1.45rem] leading-[1.72] sm:text-[1.65rem]"
          style={{ color: theme.palette.text }}
        >
          {destiny}
        </p>
      </motion.div>
    </section>
  );
}
