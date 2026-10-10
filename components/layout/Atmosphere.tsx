"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Atmosphere() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a2744_0%,_#0b0f18_45%,_#050608_100%)]" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_80%,_#c9a22733_0%,_transparent_45%)]" />
      {!reduce &&
        Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-amber-200/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
    </div>
  );
}
