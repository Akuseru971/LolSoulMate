"use client";

import { siteConfig } from "@/lib/config";
import { legendPortraitLabel } from "@/lib/champions/nickname";
import { getCardLayout } from "@/lib/sharing/layoutMetrics";
import type { ShareExportCardProps } from "../ShareExportCard";
import { CardArtPlaque } from "../primitives/CardArtPlaque";
import { CardCanvas, fitNameSize } from "../primitives/CardChrome";
import { FinalMark } from "@/components/ornaments/FinalMark";

export function LegendCard(props: ShareExportCardProps) {
  const {
    format,
    championName,
    championTitle,
    region,
    quote,
    compatibility,
    showNickname,
    displayNickname,
  } = props;
  const layout = getCardLayout("legend", format);
  const { width: W, height: H, pad, art, footer, type } = layout;
  const nick = showNickname ? displayNickname : undefined;
  const landscape = W >= H;

  return (
    <CardCanvas width={W} height={H} background="#06080d">
      <div className="absolute inset-[2.2%] border border-[var(--sor-gold)]/15" />
      <p
        className="absolute uppercase tracking-[0.34em] text-[var(--sor-gold)]/80"
        style={{ left: pad, top: pad, fontSize: type.chapter }}
      >
        {landscape ? "Runeterra · Chapter" : "A page from Runeterra"}
      </p>
      <CardArtPlaque {...props} region={art} rounded={4} />
      <div
        className="absolute flex flex-col"
        style={{ left: footer.x, top: footer.y, width: footer.w, height: footer.h }}
      >
        {nick && (
          <p className="text-[var(--sor-gold)]/78" style={{ fontSize: type.meta }}>
            {legendPortraitLabel(nick)}
          </p>
        )}
        <h2
          className="font-serif text-white"
          style={{ fontSize: fitNameSize(championName, type.name), marginTop: nick ? 6 : 0 }}
        >
          {championName}
        </h2>
        <p className="text-white/48" style={{ fontSize: type.title, marginTop: 4 }}>
          {region} · {championTitle}
        </p>
        <div className="my-3 flex items-center gap-3">
          <div className="h-px flex-1 bg-[var(--sor-border-subtle)]" />
          <FinalMark size={Math.round(type.chapter * 2)} className="text-[var(--sor-gold)]/55" />
          <div className="h-px flex-1 bg-[var(--sor-border-subtle)]" />
        </div>
        <p
          className="font-serif leading-relaxed text-[var(--sor-ivory)]/92"
          style={{ fontSize: type.quote, flex: 1 }}
        >
          {quote}
        </p>
        <p className="text-white/42" style={{ fontSize: type.meta, marginTop: 8 }}>
          {compatibility}% · {siteConfig.creatorName}
        </p>
      </div>
    </CardCanvas>
  );
}
