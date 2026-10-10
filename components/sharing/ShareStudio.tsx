"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, Download, Share2, Link2 } from "lucide-react";
import { ShareExportCard, type ShareExportCardProps } from "./ShareExportCard";
import {
  SHARE_FORMATS,
  SHARE_TEMPLATE_LABELS,
  type ShareFormatId,
  type ShareTemplateId,
} from "@/lib/sharing/formats";
import { getShareFormat } from "@/lib/sharing/formats";
import {
  buildShareUrl,
  createSharePayload,
} from "@/lib/sharing/payload";
import type { PersonalityDimension } from "@/lib/matching/dimensions";
import { siteConfig } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import { en } from "@/lib/i18n/en";
import {
  exportCaptureOptions,
  waitForFonts,
  waitForImages,
} from "@/lib/sharing/exportImage";
import { resolveImageSrcForExport } from "@/lib/sharing/resolveImageSrc";

export interface ShareStudioData {
  championId: string;
  championName: string;
  championTitle: string;
  region: string;
  imageUrl: string;
  compatibility: number;
  traits: string[];
  quote: string;
  traitDimensions: PersonalityDimension[];
}

export function ShareStudio({
  open,
  onClose,
  data,
}: {
  open: boolean;
  onClose: () => void;
  data: ShareStudioData;
}) {
  const exportRef = useRef<HTMLDivElement>(null);
  const [template, setTemplate] = useState<ShareTemplateId>("cinematic");
  const [format, setFormat] = useState<ShareFormatId>("story");
  const [imageSrc, setImageSrc] = useState(data.imageUrl);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    trackEvent("share_studio_opened", { championId: data.championId });
    let cancelled = false;
    resolveImageSrcForExport(data.imageUrl).then((src) => {
      if (!cancelled) setImageSrc(src);
    });
    return () => {
      cancelled = true;
    };
  }, [open, data.championId, data.imageUrl]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const cardProps: ShareExportCardProps = {
    template,
    format,
    championName: data.championName,
    championTitle: data.championTitle,
    region: data.region,
    imageSrc,
    compatibility: data.compatibility,
    traits: data.traits,
    quote: data.quote,
  };

  const { width, height } = getShareFormat(format);
  const previewScale = Math.min(1, 320 / width, 480 / height);

  const buildUrl = useCallback((): string | null => {
    try {
      const payload = createSharePayload({
        championId: data.championId,
        compatibility: data.compatibility,
        traitDimensions: data.traitDimensions,
        shareQuote: data.quote,
      });
      return buildShareUrl(payload, siteConfig.siteUrl);
    } catch {
      return null;
    }
  }, [data]);

  async function capturePng(): Promise<Blob | null> {
    const node = exportRef.current;
    if (!node) return null;
    await waitForFonts();
    await waitForImages(node);
    const { toPng } = await import("html-to-image");
    const dataUrl = await toPng(node, exportCaptureOptions(width, height));
    const res = await fetch(dataUrl);
    return res.blob();
  }

  async function downloadPortrait() {
    setBusy(true);
    setError(null);
    trackEvent("share_png_attempt", { template, format });
    try {
      const blob = await capturePng();
      if (!blob || blob.size < 500) {
        throw new Error("empty");
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `soul-of-runeterra-${data.championName.toLowerCase().replace(/\s+/g, "-")}-${format}.png`;
      a.click();
      URL.revokeObjectURL(url);
      trackEvent("share_png_success", { template, format });
    } catch {
      setError("We could not save the portrait. Try again or copy your link instead.");
      trackEvent("share_png_failed", { template, format });
    } finally {
      setBusy(false);
    }
  }

  async function nativeShare() {
    const url = buildUrl();
    if (!url) {
      setError("We could not create a share link.");
      return;
    }
    trackEvent("native_share_attempt");
    setBusy(true);
    setError(null);
    try {
      let file: File | undefined;
      const canShareFn =
        typeof navigator !== "undefined" && typeof navigator.canShare === "function"
          ? navigator.canShare.bind(navigator)
          : null;
      if (canShareFn) {
        const blob = await capturePng();
        if (blob && blob.size > 500) {
          file = new File([blob], "soul-of-runeterra.png", { type: "image/png" });
        }
      }
      if (file && canShareFn?.({ files: [file], url, title: "Soul of Runeterra" })) {
        await navigator.share({
          title: `My Soul of Runeterra: ${data.championName}`,
          text: data.quote,
          url,
          files: [file],
        });
        trackEvent("native_share_success");
        return;
      }
      if (navigator.share) {
        await navigator.share({
          title: `My Soul of Runeterra: ${data.championName}`,
          text: data.quote,
          url,
        });
        trackEvent("native_share_success", { mode: "url" });
        return;
      }
      await copyLink();
    } catch (e) {
      if (e instanceof Error && e.name === "AbortError") {
        trackEvent("native_share_canceled");
        return;
      }
      setError("Sharing is unavailable here. Save the portrait or copy the link.");
      trackEvent("native_share_failed");
    } finally {
      setBusy(false);
    }
  }

  async function copyLink() {
    const url = buildUrl();
    if (!url) {
      setError("We could not create a share link.");
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackEvent("share_link_copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Clipboard blocked. Long-press the link field on your device if shown.");
      trackEvent("share_link_copy_failed");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-studio-title"
    >
      <div className="flex max-h-[96dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#0a0e14] sm:rounded-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h2 id="share-studio-title" className="font-serif text-lg text-amber-100">
            Share studio
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] rounded-full p-2 text-white/60 hover:bg-white/5"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-4 py-4">
          <div className="flex justify-center overflow-hidden rounded-lg border border-white/10 bg-black/40 py-3">
            <div
              style={{
                width: width * previewScale,
                height: height * previewScale,
              }}
            >
              <div
                style={{
                  transform: `scale(${previewScale})`,
                  transformOrigin: "top left",
                  width,
                  height,
                }}
              >
                <ShareExportCard {...cardProps} />
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-white/45">
            Preview matches export ({width}×{height})
          </p>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-white/40">Template</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {(Object.keys(SHARE_TEMPLATE_LABELS) as ShareTemplateId[]).map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setTemplate(id);
                    trackEvent("share_template_selected", { template: id });
                  }}
                  className={`min-h-[44px] rounded-full px-4 py-2 text-sm ${
                    template === id
                      ? "bg-amber-500/20 text-amber-100 ring-1 ring-amber-500/40"
                      : "border border-white/15 text-white/70"
                  }`}
                >
                  {SHARE_TEMPLATE_LABELS[id]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-widest text-white/40">Format</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {SHARE_FORMATS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => {
                    setFormat(f.id);
                    trackEvent("share_format_selected", { format: f.id });
                  }}
                  className={`min-h-[44px] rounded-full px-4 py-2 text-sm ${
                    format === f.id
                      ? "bg-amber-500/20 text-amber-100 ring-1 ring-amber-500/40"
                      : "border border-white/15 text-white/70"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm text-amber-200/90" role="alert">
              {error}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-2 pb-2">
            <button
              type="button"
              disabled={busy}
              onClick={downloadPortrait}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-amber-500/35 bg-amber-500/10 py-3 text-sm text-amber-100"
            >
              <Download className="h-4 w-4" /> {en.results.shareDownload}
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={nativeShare}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-sm text-white/85"
            >
              <Share2 className="h-4 w-4" /> {en.results.shareNative}
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/20 py-3 text-sm text-white/85"
            >
              <Link2 className="h-4 w-4" /> {copied ? "Copied!" : en.results.shareCopy}
            </button>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 -z-10 overflow-hidden"
        style={{ transform: "translateX(-200vw)" }}
      >
        <div ref={exportRef}>
          <ShareExportCard {...cardProps} />
        </div>
      </div>
    </div>
  );
}
