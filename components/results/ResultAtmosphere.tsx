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
    type === "stars" ? 12 : type === "petals" ? 10 : type === "embers" ? 10 : 6;

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const dur = (9 + (i % 8) * 1.8) / Math.max(0.55, speed);
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
                opacity: [0.08 * intensity, 0.75 * intensity, 0.08 * intensity],
                y: [8, -20 - (i % 4) * 9, 8],
                x: [0, (i % 3 - 1) * 13, 0],
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
              animate={{ y: [-20, 110], x: [-25, 45, -25], rotate: [-25, 65], opacity: [0, 0.6, 0] }}
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
              animate={{ y: [15, -95], x: [0, (i % 4 - 2) * 18], opacity: [0, 0.7, 0] }}
              transition={{ duration: dur, repeat: Infinity, delay: i * 0.25 }}
            />
          );
        }
        return (
          <motion.div
            key={i}
            className="absolute h-12 w-[130%] -left-[15%] bg-gradient-to-r from-transparent via-[var(--chamber-accent)]/10 to-transparent blur-lg"
            style={{ top: `${(i * 14) % 85}%`, opacity: 0.25 * intensity }}
            animate={{ x: ["-9%", "9%", "-9%"], y: [0, (i%2 ? 22 : -22), 0], opacity: [0.2, 0.48, 0.2] }}
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
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-[background] duration-[1.2s]"
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
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-[20%] -top-[22%] h-[90vh] w-[90vw] rounded-full opacity-30"
            style={{ background: `radial-gradient(circle, ${palette.glow}, transparent 67%)` }}
            animate={{ x: ["-5%", "18%", "-5%"], y: ["-9%", "12%", "-9%"], scale: [0.95, 1.16, 0.95] }}
            transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-[30%] -right-[25%] h-[95vh] w-[95vw] rounded-full opacity-30"
            style={{ background: `radial-gradient(circle, ${palette.glow}, transparent 68%)` }}
            animate={{ x: ["8%", "-16%", "8%"], y: ["10%", "-12%", "10%"], scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
          />
          {[0].map((i) => (
            <motion.div
              key={i}
              className="absolute left-[-25%] h-28 w-[150%] rotate-[-8deg] bg-gradient-to-r from-transparent via-white/[0.045] to-transparent blur-2xl"
              style={{ top: `${20 + i * 30}%` }}
              animate={{ x: ["-14%", "14%", "-14%"], y: [0, i % 2 ? -45 : 45, 0] }}
              transition={{ duration: 19 + i * 6, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </>
      )}
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
