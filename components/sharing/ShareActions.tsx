"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { Download, Link2, RefreshCw, Share2 } from "lucide-react";
import { ShareCard, type ShareCardProps } from "./ShareCard";
import { siteConfig } from "@/lib/config";

export function ShareActions({
  card,
  onRestart,
  shareUrl,
}: {
  card: ShareCardProps;
  shareUrl: string | null;
  onRestart: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  async function downloadPng() {
    if (!ref.current) return;
    setBusy(true);
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
    } finally {
      setBusy(false);
    }
  }

  async function nativeShare() {
    if (!ref.current) return;
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
        url: shareUrl ?? siteConfig.siteUrl,
        files: [file],
      });
    } catch {
      /* user cancelled */
    } finally {
      setBusy(false);
    }
  }

  async function copyLink() {
    const url = shareUrl ?? siteConfig.siteUrl;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      <div className="fixed -left-[9999px] top-0 opacity-0" aria-hidden>
        <ShareCard ref={ref} {...card} />
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={downloadPng}
          className="inline-flex items-center gap-2 rounded-full bg-amber-500/90 px-4 py-2.5 text-sm font-medium text-black"
        >
          <Download className="h-4 w-4" /> Download PNG
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={nativeShare}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85"
        >
          <Share2 className="h-4 w-4" /> Share
        </button>
        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85"
        >
          <Link2 className="h-4 w-4" /> {copied ? "Copied!" : "Copy link"}
        </button>
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm text-white/85"
        >
          <RefreshCw className="h-4 w-4" /> Restart
        </button>
      </div>
    </div>
  );
}
