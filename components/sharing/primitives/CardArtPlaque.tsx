"use client";

import { artworkStyle } from "@/components/champions/ChampionArtwork";
import type {
  ArtworkDisplayMode,
  ArtworkFrame,
  UserArtTransform,
} from "@/lib/champions/visualTypes";
import { mergeArtworkFrame } from "@/lib/champions/visualTypes";
import type { RegionBox } from "@/lib/sharing/layoutMetrics";

export function CardArtPlaque({
  imageSrc,
  artFrame,
  userTransform,
  artworkMode = "full",
  region,
  rounded = 8,
}: {
  imageSrc: string;
  artFrame: ArtworkFrame;
  userTransform?: UserArtTransform;
  artworkMode?: ArtworkDisplayMode;
  region: RegionBox;
  rounded?: number;
}) {
  const merged = mergeArtworkFrame(artFrame, userTransform, artworkMode);

  return (
    <div
      className="absolute overflow-hidden"
      style={{
        left: region.x,
        top: region.y,
        width: region.w,
        height: region.h,
        borderRadius: rounded,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(17,27,42,0.5), rgba(5,6,8,0.85))",
        }}
      />
      <div className="absolute inset-[5%] flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          crossOrigin="anonymous"
          className="max-h-full max-w-full"
          style={{
            ...artworkStyle(merged, artworkMode),
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
        style={{ borderRadius: rounded }}
      />
    </div>
  );
}
