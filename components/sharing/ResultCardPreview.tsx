"use client";

import { ShareExportCard } from "./ShareExportCard";
import type { ShareStudioData } from "./ShareStudio";
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { shareContextForFormat } from "@/lib/champions/visualTypes";
import { sanitizeNickname } from "@/lib/champions/nickname";

const PREVIEW_FORMAT = "cinematic" as const;

export function ResultCardPreview({
  data,
  onOpenStudio,
}: {
  data: ShareStudioData;
  onOpenStudio: () => void;
}) {
  const nick = sanitizeNickname(data.nickname);
  const artFrame = getVisualFrame(data.championId, shareContextForFormat(PREVIEW_FORMAT));
  const width = 1920;
  const height = 1080;
  const previewScale = Math.min(1, 640 / width);

  return (
    <div className="mt-10 w-full">
      <div
        className="mx-auto overflow-hidden rounded-sm shadow-[0_32px_100px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
        style={{ width: width * previewScale, maxWidth: "100%" }}
      >
        <div style={{ height: height * previewScale, overflow: "hidden" }}>
          <div
            style={{
              transform: `scale(${previewScale})`,
              transformOrigin: "top left",
              width,
              height,
            }}
          >
            <ShareExportCard
              template="cinematic"
              format={PREVIEW_FORMAT}
              championName={data.championName}
              championTitle={data.championTitle}
              region={data.region}
              imageSrc={data.imageUrl}
              artFrame={artFrame}
              artworkMode="full"
              compatibility={data.compatibility}
              traits={data.traits}
              quote={data.quote}
              showNickname={!!nick}
              displayNickname={nick}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onOpenStudio}
          className="min-h-[44px] border-b border-[var(--sor-border-subtle)] pb-1 font-serif text-[var(--sor-ivory)] transition hover:border-[var(--sor-gold)]/50"
        >
          Create your portrait
        </button>
      </div>
    </div>
  );
}
