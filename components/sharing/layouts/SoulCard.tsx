"use client";

import { siteConfig } from "@/lib/config";
import { soulPortraitLabel } from "@/lib/champions/nickname";
import { getCardLayout } from "@/lib/sharing/layoutMetrics";
import type { ShareExportCardProps } from "../ShareExportCard";
import { CardArtPlaque } from "../primitives/CardArtPlaque";
import { CardCanvas, fitNameSize } from "../primitives/CardChrome";
import { SoulSeal } from "@/components/ornaments/SoulSeal";

export function SoulCard(props: ShareExportCardProps) {
  const { format, championName, traits, compatibility, quote, showNickname, displayNickname } =
    props;
  const layout = getCardLayout("soul", format);
  const { width: W, height: H, pad, art, footer, type } = layout;
  const nick = showNickname ? displayNickname : undefined;
  const landscape = W >= H;

  return (
    <CardCanvas
      width={W}
      height={H}
      background="radial-gradient(ellipse 90% 70% at 25% 0%, rgba(197,164,109,0.14), transparent 50%), #070b12"
    >
      <div
        className="absolute inset-[3%] rounded-sm border border-[var(--sor-gold)]/18"
        aria-hidden
      />
      <div
        className="absolute left-0 right-0 top-0 h-[18%] opacity-30"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(197,164,109,0.06) 24px, rgba(197,164,109,0.06) 25px)",
        }}
      />
      <CardArtPlaque {...props} region={art} rounded={landscape ? 4 : 8} />

      <div
        className="absolute flex flex-col"
        style={{
          left: landscape ? footer.x : pad,
          top: landscape ? footer.y : art.y + art.h + pad,
          width: landscape ? footer.w : W - pad * 2,
          height: landscape ? footer.h : footer.h,
        }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: landscape ? 12 : 8 }}>
          <SoulSeal size={Math.round(type.chapter * 2.2)} className="text-[var(--sor-gold)]/75" />
          <p
            className="uppercase tracking-[0.32em] text-[var(--sor-mist)]"
            style={{ fontSize: type.chapter }}
          >
            The Soul
          </p>
        </div>
        {nick && (
          <p className="font-serif text-[var(--sor-ivory)]" style={{ fontSize: type.nick }}>
            {soulPortraitLabel(nick)}
          </p>
        )}
        <h2
          className="font-serif text-[var(--sor-ivory)]"
          style={{ fontSize: fitNameSize(championName, type.name), marginTop: nick ? 6 : 0 }}
        >
          {championName}
        </h2>
        <p
          className="font-serif text-[var(--sor-gold)]"
          style={{ fontSize: type.title, marginTop: 4 }}
        >
          {compatibility}% alignment
        </p>
        <ul
          className="text-[var(--sor-ivory)]/82"
          style={{ fontSize: type.trait, marginTop: landscape ? 14 : 10, lineHeight: 1.5 }}
        >
          {traits.slice(0, 3).map((t) => (
            <li key={t} className="flex gap-2">
              <span className="text-[var(--sor-gold)]/70">◆</span>
              {t}
            </li>
          ))}
        </ul>
        {!landscape && (
          <p
            className="font-serif italic text-white/72"
            style={{ fontSize: type.quote, marginTop: 12 }}
          >
            {quote}
          </p>
        )}
        {landscape && (
          <p
            className="mt-auto font-serif italic text-white/72"
            style={{ fontSize: type.quote, maxWidth: "95%" }}
          >
            {quote}
          </p>
        )}
        <p className="mt-auto text-white/35" style={{ fontSize: type.brand, marginTop: 8 }}>
          {siteConfig.creatorName}
        </p>
      </div>
    </CardCanvas>
  );
}
