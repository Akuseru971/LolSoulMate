"use client";

import { useMemo, useState } from "react";
import type { ArtworkFrame, UserArtTransform } from "@/lib/champions/visualTypes";
import { DEFAULT_USER_TRANSFORM, mergeArtworkFrame } from "@/lib/champions/visualTypes";

export interface ChampionArtworkProps {
  src: string;
  frame: ArtworkFrame;
  userTransform?: UserArtTransform;
  className?: string;
  aspectRatio?: string;
  alt?: string;
  priority?: boolean;
  /** Subtle Ken Burns style motion when true */
  animate?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function artworkStyle(
  merged: ArtworkFrame & UserArtTransform,
): React.CSSProperties {
  const panX = merged.panX * 12;
  const panY = merged.panY * 12;
  return {
    objectFit: "cover",
    objectPosition: `${merged.focalX}% ${merged.focalY}%`,
    transform: `scale(${merged.scale}) translate(${panX}%, ${panY}%)`,
    transformOrigin: `${merged.focalX}% ${merged.focalY}%`,
    width: "100%",
    height: "100%",
  };
}

export function ChampionArtwork({
  src,
  frame,
  userTransform = DEFAULT_USER_TRANSFORM,
  className = "",
  aspectRatio,
  alt = "",
  animate = false,
  onLoad,
  onError,
}: ChampionArtworkProps) {
  const [failed, setFailed] = useState(false);
  const merged = useMemo(
    () => mergeArtworkFrame(frame, userTransform),
    [frame, userTransform],
  );

  const imgStyle = artworkStyle(merged);

  return (
    <div
      className={`relative overflow-hidden bg-[#070b10] ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          crossOrigin="anonymous"
          draggable={false}
          className={`absolute inset-0 h-full w-full ${animate ? "motion-safe:animate-[artwork-drift_18s_ease-in-out_infinite_alternate]" : ""}`}
          style={imgStyle}
          onLoad={() => onLoad?.()}
          onError={() => {
            setFailed(true);
            onError?.();
          }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-[#1a2233] to-[#050608] text-xs text-white/40">
          Artwork unavailable
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050608]/90 via-transparent to-[#050608]/20"
        aria-hidden
      />
    </div>
  );
}
