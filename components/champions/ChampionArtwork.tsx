"use client";

import { useMemo, useState } from "react";
import type {
  ArtworkDisplayMode,
  ArtworkFrame,
  UserArtTransform,
} from "@/lib/champions/visualTypes";
import { DEFAULT_USER_TRANSFORM, mergeArtworkFrame } from "@/lib/champions/visualTypes";

export interface ChampionArtworkProps {
  src: string;
  mode?: ArtworkDisplayMode;
  frame?: ArtworkFrame;
  userTransform?: UserArtTransform;
  className?: string;
  /** CSS aspect-ratio value, default 16/9 */
  aspectRatio?: string;
  alt?: string;
  /** Edge vignette for readability (avoid on export cards) */
  vignette?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function artworkStyle(
  merged: ArtworkFrame & UserArtTransform,
  mode: ArtworkDisplayMode,
): React.CSSProperties {
  if (mode === "full") {
    return {
      objectFit: "contain",
      objectPosition: "center",
      width: "100%",
      height: "100%",
    };
  }
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
  mode = "full",
  frame = { focalX: 50, focalY: 50, scale: 1 },
  userTransform = DEFAULT_USER_TRANSFORM,
  className = "",
  aspectRatio = "16 / 9",
  alt = "",
  vignette = false,
  onLoad,
  onError,
}: ChampionArtworkProps) {
  const [failed, setFailed] = useState(false);
  const merged = useMemo(
    () => mergeArtworkFrame(frame, userTransform, mode),
    [frame, userTransform, mode],
  );

  const imgStyle = artworkStyle(merged, mode);

  return (
    <div
      className={`relative overflow-hidden bg-[var(--sor-bg-midnight,#111b2a)] ${className}`}
      style={{ aspectRatio }}
    >
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(113,140,139,0.12), transparent 60%)",
        }}
      />
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          crossOrigin="anonymous"
          draggable={false}
          className="relative z-[1] mx-auto max-h-full max-w-full object-contain"
          style={imgStyle}
          onLoad={() => onLoad?.()}
          onError={() => {
            setFailed(true);
            onError?.();
          }}
        />
      ) : (
        <div className="absolute inset-0 z-[1] flex items-center justify-center text-xs text-white/40">
          Artwork unavailable
        </div>
      )}
      {vignette && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[var(--sor-bg-primary,#050608)]/80 via-transparent to-transparent"
          aria-hidden
        />
      )}
    </div>
  );
}
