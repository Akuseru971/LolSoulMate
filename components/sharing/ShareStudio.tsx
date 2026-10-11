"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { X, Download, Share2, Link2, RotateCcw } from "lucide-react";
import { ShareExportCard, type ShareExportCardProps } from "./ShareExportCard";
import {
  type ShareFormatId,
  type ShareTemplateId,
} from "@/lib/sharing/formats";
import { getShareFormat } from "@/lib/sharing/formats";
import { buildShareUrl, createSharePayload } from "@/lib/sharing/payload";
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
import { getVisualFrame } from "@/data/champions/visualProfiles";
import { shareContextForFormat } from "@/lib/champions/visualTypes";
import type { ArtworkDisplayMode, UserArtTransform } from "@/lib/champions/visualTypes";
import { DEFAULT_USER_TRANSFORM } from "@/lib/champions/visualTypes";
import { sanitizeNickname } from "@/lib/champions/nickname";

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
  nickname?: string;
}

function transformKey(template: ShareTemplateId, format: ShareFormatId) {
  return `${template}:${format}`;
}

export function ShareStudio({
  open,
  onClose,
  data,
  triggerRef,
}: {
  open: boolean;
  onClose: () => void;
  data: ShareStudioData;
  triggerRef?: React.RefObject<HTMLElement | null>;
}) {
  const exportRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dragRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const nicknameBase = sanitizeNickname(data.nickname);

  const template: ShareTemplateId = "cinematic";
  const format: ShareFormatId = "story";
  const [artworkMode, setArtworkMode] = useState<ArtworkDisplayMode>("full");
  const [imageSrc, setImageSrc] = useState(data.imageUrl);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [showNickname, setShowNickname] = useState(!!nicknameBase);
  const [displayNickname, setDisplayNickname] = useState(nicknameBase ?? "");
  const [transforms, setTransforms] = useState<Record<string, UserArtTransform>>({});
  const labelId = useId();

  const userKey = transformKey(template, format);
  const userTransform = transforms[userKey] ?? DEFAULT_USER_TRANSFORM;

  const artFrame = getVisualFrame(data.championId, shareContextForFormat(format));

  useEffect(() => {
    if (!open) return;
    trackEvent("share_studio_opened", { championId: data.championId });
    let cancelled = false;
    resolveImageSrcForExport(data.imageUrl).then((src) => {
      if (!cancelled) setImageSrc(src);
    });
    const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [open, data.championId, data.imageUrl]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const trigger = triggerRef?.current;
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open, onClose, triggerRef]);

  const cardProps: ShareExportCardProps = {
    template,
    format,
    championName: data.championName,
    championTitle: data.championTitle,
    region: data.region,
    imageSrc,
    artFrame,
    userTransform,
    compatibility: data.compatibility,
    traits: data.traits,
    quote: data.quote,
    showNickname: showNickname && !!sanitizeNickname(displayNickname),
    displayNickname: sanitizeNickname(displayNickname),
    artworkMode,
  };

  const { width, height } = getShareFormat(format);
  const previewScale = Math.min(1, 320 / width, 560 / height);
  const cropEnabled = artworkMode === "artisticCrop";

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
    const imgWait = await waitForImages(node);
    if (!imgWait.ok) {
      throw new Error(`images:${imgWait.failed.join(",")}`);
    }
    const { toPng } = await import("html-to-image");
    const dataUrl = await toPng(node, exportCaptureOptions(width, height));
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    if (blob.size < 800) throw new Error("blank");
    return blob;
  }

  async function downloadPortrait() {
    setBusy(true);
    setError(null);
    trackEvent("share_png_attempt", { template, format });
    try {
      const blob = await capturePng();
      if (!blob) throw new Error("empty");
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `soul-of-runeterra-${data.championName.toLowerCase().replace(/\s+/g, "-")}-${format}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
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
        if (blob) {
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
      setError("Clipboard blocked. Copy the link from your browser if needed.");
      trackEvent("share_link_copy_failed");
    }
  }

  function updateTransform(partial: Partial<UserArtTransform>) {
    setTransforms((prev) => ({
      ...prev,
      [userKey]: { ...userTransform, ...partial },
    }));
  }

  function resetTransform() {
    setTransforms((prev) => {
      const next = { ...prev };
      delete next[userKey];
      return next;
    });
  }

  function onPointerDown(e: React.PointerEvent) {
    if (!cropEnabled || e.button !== 0) return;
    dragRef.current = { x: e.clientX, y: e.clientY, active: true };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragRef.current.active) return;
    const dx = (e.clientX - dragRef.current.x) / 120;
    const dy = (e.clientY - dragRef.current.y) / 120;
    dragRef.current = { x: e.clientX, y: e.clientY, active: true };
    updateTransform({
      panX: Math.max(-1, Math.min(1, userTransform.panX + dx)),
      panY: Math.max(-1, Math.min(1, userTransform.panY + dy)),
    });
  }

  function onPointerUp(e: React.PointerEvent) {
    dragRef.current.active = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/85 sm:items-center"
      role="presentation"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelId}
        className="flex max-h-[96dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-[#0a0e14] pb-[env(safe-area-inset-bottom)] sm:max-w-6xl sm:rounded-2xl lg:flex-row lg:max-h-[92dvh]"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 lg:absolute lg:left-0 lg:right-0 lg:top-0 lg:z-10 lg:bg-[#0a0e14]/95">
          <h2 id={labelId} className="font-serif text-lg text-amber-100">
            Portrait studio
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="min-h-[44px] min-w-[44px] rounded-full p-2 text-white/60 hover:bg-white/5"
            aria-label="Close portrait studio"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-4 py-4 lg:flex-row lg:gap-6 lg:px-6 lg:pb-6 lg:pt-16">
          <div className="lg:min-w-0 lg:flex-1">
            <div
              className={`relative mx-auto overflow-hidden rounded-lg border border-white/10 bg-black/50 py-3 ${cropEnabled ? "touch-none" : ""}`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <div
                style={{ width: width * previewScale, height: height * previewScale, margin: "0 auto" }}
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
              {cropEnabled && (
                <p className="pointer-events-none absolute bottom-2 left-0 right-0 text-center text-[10px] text-white/35">
                  Drag to reposition · adjust zoom below
                </p>
              )}
            </div>
            <p className="mt-2 text-center text-xs text-white/45">
              Export {width}×{height}px
            </p>
          </div>

          <div className="mt-4 min-w-0 lg:mt-0 lg:w-[min(100%,22rem)] lg:shrink-0 lg:overflow-y-auto">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-white/40">Artwork</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setArtworkMode("full");
                  resetTransform();
                }}
                className={`min-h-[44px] rounded-full px-4 py-2 text-sm ${
                  artworkMode === "full"
                    ? "bg-amber-500/20 text-amber-100 ring-1 ring-amber-500/40"
                    : "border border-white/15 text-white/70"
                }`}
              >
                Full artwork
              </button>
              <button
                type="button"
                onClick={() => setArtworkMode("artisticCrop")}
                className={`min-h-[44px] rounded-full px-4 py-2 text-sm ${
                  artworkMode === "artisticCrop"
                    ? "bg-amber-500/20 text-amber-100 ring-1 ring-amber-500/40"
                    : "border border-white/15 text-white/70"
                }`}
              >
                Artistic crop
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label className="flex items-center gap-2 text-sm text-white/70">
              <input
                type="checkbox"
                checked={showNickname}
                onChange={(e) => setShowNickname(e.target.checked)}
                disabled={!nicknameBase}
              />
              Show nickname on portrait
            </label>
            {showNickname && (
              <input
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-sm text-white"
                value={displayNickname}
                maxLength={40}
                onChange={(e) => setDisplayNickname(e.target.value)}
                placeholder="Display name"
                aria-label="Display nickname on portrait"
              />
            )}
            <button
              type="button"
              className="text-xs text-amber-200/70 underline"
              onClick={() => setDisplayNickname(nicknameBase ?? "")}
            >
              Reset to questionnaire name
            </button>
          </div>

          {cropEnabled && (
            <>
              <div className="mt-4">
                <label className="text-xs text-white/50">Zoom</label>
                <input
                  type="range"
                  min={0.85}
                  max={1.35}
                  step={0.01}
                  value={userTransform.zoom}
                  className="mt-1 w-full"
                  onChange={(e) => updateTransform({ zoom: Number(e.target.value) })}
                  aria-label="Artwork zoom"
                />
              </div>

              <button
                type="button"
                onClick={resetTransform}
                className="mt-2 inline-flex min-h-[44px] items-center gap-1 text-xs text-white/50"
              >
                <RotateCcw className="h-3 w-3" /> Reset framing
              </button>
            </>
          )}

          <p className="mt-5 text-center text-xs uppercase tracking-widest text-amber-100/70">Your Story · 1080 × 1920</p>

          {error && (
            <p className="mt-4 text-sm text-amber-200/90" role="alert">
              {error}
            </p>
          )}

          {busy && (
            <p className="mt-2 text-center text-xs text-white/45" aria-live="polite">
              Preparing portrait…
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
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 overflow-hidden"
        style={{ transform: "translateX(-200vw)" }}
      >
        <div ref={exportRef}>
          <ShareExportCard {...cardProps} />
        </div>
      </div>
    </div>
  );
}
