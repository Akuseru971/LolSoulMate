"use client";

import { getMatchableChampions } from "@/data/champions/matchable";
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { ShareExportCard } from "@/components/sharing/ShareExportCard";
import { SHARE_FORMATS, SHARE_TEMPLATE_LABELS } from "@/lib/sharing/formats";
import type { ShareFormatId, ShareTemplateId } from "@/lib/sharing/formats";
import { shareContextForFormat } from "@/lib/champions/visualTypes";

const SCALE = 0.12;
const SPOTLIGHT = ["kindred", "jhin", "irelia", "viego", "braum"];

export function ShareGalleryDev() {
  const champs = getMatchableChampions().filter((c) => SPOTLIGHT.includes(c.id));
  const templates = Object.keys(SHARE_TEMPLATE_LABELS) as ShareTemplateId[];

  return (
    <div className="px-2 py-8 text-white">
      <h1 className="px-2 font-serif text-2xl text-amber-100">Share card gallery (dev)</h1>
      <p className="px-2 text-xs text-white/45">
        Spotlight: {SPOTLIGHT.join(", ")} · {templates.length} templates × {SHARE_FORMATS.length}{" "}
        formats (V7 layouts)
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        {champs.map((c) =>
          templates.flatMap((template) =>
            SHARE_FORMATS.map((format) => {
              const ctx = shareContextForFormat(format.id);
              return (
                <div
                  key={`${c.id}-${template}-${format.id}`}
                  className="overflow-hidden rounded border border-white/10"
                  data-testid={`card-${c.id}-${template}-${format.id}`}
                >
                  <p className="bg-black/60 px-2 py-1 text-[10px] text-white/50">
                    {c.name} · {template} · {format.id}
                  </p>
                  <div
                    style={{
                      width: format.width * SCALE,
                      height: format.height * SCALE,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        transform: `scale(${SCALE})`,
                        transformOrigin: "top left",
                        width: format.width,
                        height: format.height,
                      }}
                    >
                      <ShareExportCard
                        template={template}
                        format={format.id as ShareFormatId}
                        championName={c.name}
                        championTitle={c.title}
                        region={c.region}
                        imageSrc={c.imageUrl}
                        artFrame={getVisualFrame(c.id, ctx)}
                        artworkMode="full"
                        compatibility={88}
                        traits={["Loyalty", "Courage", "Idealism"]}
                        quote="Every choice leaves a mark upon the path you walk."
                        showNickname
                        displayNickname="Traveler"
                      />
                    </div>
                  </div>
                </div>
              );
            }),
          ),
        )}
      </div>
    </div>
  );
}
