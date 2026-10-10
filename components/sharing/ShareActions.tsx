"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Link2, RefreshCw, Share2 } from "lucide-react";
import { ShareCard, type ShareCardProps } from "./ShareCard";
import { siteConfig } from "@/lib/config";
import {
  buildShareUrl,
  createSharePayload,
} from "@/lib/sharing/payload";
import type { PersonalityDimension } from "@/lib/matching/dimensions";
import { trackEvent } from "@/lib/analytics";
import { en } from "@/lib/i18n/en";

export function ShareActions({
  card,
  championId,
  traitDimensions,
  shareQuote,
  onRestart,
}: {
  card: ShareCardProps;
  championId: string;
  traitDimensions: PersonalityDimension[];
  shareQuote: string;
  onRestart: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareError, setShareError] = useState<string | null>(null);

  function buildUrl(): string | null {
    try {
      const payload = createSharePayload({
        championId,
        compatibility: card.compatibility,
        traitDimensions,
        shareQuote,
      });
      return buildShareUrl(payload, siteConfig.siteUrl);
    } catch {
      return null;
    }
  }

  async function downloadPng() {
    if (!ref.current) return;
    setBusy(true);
    setShareError(null);
    try {
      const dataUrl = await toPng(ref.current, {
        cacheBust: true,
        pixelRatio: 1,
        width: 1080,
        height: 1920,
      });
      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = `soul-of-runeterra-${card.championName.toLowerCase().replace(/\s+/g, "-")}.png`;
      a.click();
      trackEvent("share_image_download");
    } catch {
      setShareError("Could not export image. Try again or use Copy link.");
    } finally {
      setBusy(false);
    }
  }

  async function nativeShare() {
    const url = buildUrl();
    if (!url) {
      setShareError("Could not create share link.");
      return;
    }
    trackEvent("share_clicked");
    if (!ref.current) {
      await copyLink();
      return;
    }
    if (!navigator.share) {
      await copyLink();
      return;
    }
    setBusy(true);
    try {
      const dataUrl = await toPng(ref.current, { width: 1080, height: 1920 });
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      const file = new File([blob], "soul-of-runeterra.png", { type: "image/png" });
      await navigator.share({
        title: "My Soul of Runeterra",
        text: `I matched with ${card.championName}!`,
        url,
        files: [file],
      });
    } catch {
      /* user cancelled */
    } finally {
      setBusy(false);
    }
  }

  async function copyLink() {
    const url = buildUrl();
    if (!url) {
      setShareError("Could not create share link.");
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackEvent("share_clicked");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setShareError("Clipboard unavailable. Copy manually from the address bar after sharing.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="fixed -left-[9999px] top-0 opacity-0" aria-hidden>
        <ShareCard ref={ref} {...card} />
      </div>

      {shareError && (
        <p className="text-sm text-amber-200/90" role="alert">
          {shareError}
        </p>
      )}

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={downloadPng}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-amber-500/90 px-4 py-2.5 text-sm font-medium text-black"
        >
          <Download className="h-4 w-4" /> {en.results.shareDownload}
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={nativeShare}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85"
        >
          <Share2 className="h-4 w-4" /> {en.results.shareNative}
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85"
        >
          <Link2 className="h-4 w-4" /> {copied ? "Copied!" : en.results.shareCopy}
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85"
        >
          <RefreshCw className="h-4 w-4" /> Restart
        </button>
      </div>
    </div>
  );
}
