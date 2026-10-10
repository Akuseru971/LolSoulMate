"use client";

import { ShareExportCard } from "./ShareExportCard";
import type { ShareStudioData } from "./ShareStudio";
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { shareContextForFormat } from "@/lib/champions/visualTypes";
import { sanitizeNickname } from "@/lib/champions/nickname";

const PREVIEW_FORMAT = "square" as const;
const PREVIEW_SCALE = 0.22;

export function ResultCardPreview({
  data,
  onOpenStudio,
}: {
  data: ShareStudioData;
  onOpenStudio: () => void;
}) {
  const nick = sanitizeNickname(data.nickname);
  const artFrame = getVisualFrame(data.championId, shareContextForFormat(PREVIEW_FORMAT));
  const { width, height } = { width: 1080, height: 1080 };

  return (
    <div className="mt-8 flex flex-col items-center">
      <div
        className="overflow-hidden rounded-md shadow-[0_24px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10"
        style={{ width: width * PREVIEW_SCALE, height: height * PREVIEW_SCALE }}
      >
        <div
          style={{
            transform: `scale(${PREVIEW_SCALE})`,
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
      <button
        type="button"
        onClick={onOpenStudio}
        className="mt-6 min-h-[44px] border-b border-[var(--sor-border-subtle)] pb-1 font-serif text-[var(--sor-ivory)] transition hover:border-[var(--sor-gold)]/50"
      >
        Create your portrait
      </button>
    </div>
  );
}
