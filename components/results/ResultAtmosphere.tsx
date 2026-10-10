"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  getResultTheme,
  sceneAtmosphereScale,
  type ResultScrollScene,
} from "@/data/champions/resultThemes";
import type { AtmosphereParticleType } from "@/data/champions/resultThemes";

function Particles({
  type,
  intensity,
  speed,
  reduce,
}: {
  type: AtmosphereParticleType;
  intensity: number;
  speed: number;
  reduce: boolean;
}) {
  if (reduce || intensity < 0.08) return null;
  const count =
    type === "stars" ? 18 : type === "petals" ? 10 : type === "embers" ? 12 : 8;

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = (5 + (i % 4)) / speed;
        if (type === "stars") {
          return (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: i % 5 === 0 ? 2 : 1,
                height: i % 5 === 0 ? 2 : 1,
                left: `${left}%`,
                top: `${top * 0.55}%`,
                opacity: 0.15 * intensity,
              }}
              animate={{
                opacity: [0.1 * intensity, 0.55 * intensity, 0.1 * intensity],
              }}
              transition={{ duration: dur, repeat: Infinity, delay: i * 0.15 }}
            />
          );
        }
        if (type === "petals") {
          return (
            <motion.span
              key={i}
              className="absolute h-2 w-1 rounded-full bg-[var(--chamber-accent)]/30"
              style={{ left: `${left}%`, top: `${top * 0.7}%` }}
              animate={{ y: [0, 28, 0], rotate: [0, 12, 0], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: dur * 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          );
        }
        if (type === "embers") {
          return (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-orange-400/40"
              style={{ left: `${left}%`, bottom: `${(i % 6) * 12}%` }}
              animate={{ y: [0, -30, 0], opacity: [0.15, 0.55, 0.15] }}
              transition={{ duration: dur, repeat: Infinity, delay: i * 0.25 }}
            />
          );
        }
        return (
          <motion.div
            key={i}
            className="absolute h-12 w-[130%] -left-[15%] bg-gradient-to-r from-transparent via-[var(--chamber-accent)]/10 to-transparent blur-lg"
            style={{ top: `${(i * 14) % 85}%`, opacity: 0.25 * intensity }}
            animate={{ x: ["-4%", "4%", "-4%"] }}
            transition={{ duration: dur * 2.5, repeat: Infinity }}
          />
        );
      })}
    </>
  );
}

export function ResultAtmosphere({
  championId,
  scene,
}: {
  championId: string;
  scene: ResultScrollScene;
}) {
  const reduce = useReducedMotion() ?? false;
  const theme = getResultTheme(championId);
  const scale = sceneAtmosphereScale(scene);
  const intensity = theme.atmosphere.intensity * scale;
  const { palette, lighting, atmosphere } = theme;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden transition-[background] duration-[1.2s]"
      style={
        {
          "--chamber-accent": palette.accent,
          background: palette.background,
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: reduce ? 1 : 0.85 + scale * 0.15 }}
        transition={{ duration: 1.1 }}
        style={{
          background: `radial-gradient(ellipse 90% 60% at ${lighting.positionX}% ${lighting.positionY}%, ${palette.glow}, transparent 58%), linear-gradient(180deg, ${palette.secondary} 0%, ${palette.background} 55%, #030508 100%)`,
        }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: lighting.opacity * scale }}
      />
      <Particles
        type={atmosphere.type}
        intensity={intensity}
        speed={atmosphere.speed}
        reduce={reduce}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            scene === "inner"
              ? "linear-gradient(180deg, rgba(0,0,0,0.35), transparent 40%, rgba(0,0,0,0.25))"
              : "linear-gradient(180deg, rgba(0,0,0,0.2), transparent 35%, rgba(0,0,0,0.45))",
        }}
      />
    </div>
  );
}
