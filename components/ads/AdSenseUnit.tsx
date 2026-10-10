"use client";

import { useEffect, useRef } from "react";
import { adsenseConfig } from "@/lib/config";
import { useConsent } from "@/components/privacy/ConsentContext";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

export function AdSenseUnit({ className }: { className?: string }) {
  const { adsAllowed } = useConsent();
  const { publisherId, adSlot } = adsenseConfig();
  const pushed = useRef(false);

  useEffect(() => {
    if (!adsAllowed || !publisherId || !adSlot || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* ignore ad blockers */
    }
  }, [adsAllowed, publisherId, adSlot]);

  if (!publisherId || !adSlot) {
    return (
      <div
        className={`flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-white/15 bg-black/20 px-4 text-center text-sm text-white/50 ${className ?? ""}`}
        role="complementary"
        aria-label="Advertisement placeholder"
      >
        Advertisement space (configure{" "}
        <code className="mx-1 text-amber-200/80">NEXT_PUBLIC_ADSENSE_*</code>{" "}
        after AdSense approval)
      </div>
    );
  }

  if (!adsAllowed) {
    return (
      <div
        className={`min-h-[120px] rounded-xl border border-white/10 bg-black/20 px-4 py-6 text-sm text-white/60 ${className ?? ""}`}
      >
        Ads are disabled until you allow marketing cookies in preferences.
      </div>
    );
  }

  return (
    <div className={className} role="complementary" aria-label="Advertisement">
      <p className="mb-2 text-[10px] uppercase tracking-widest text-white/40">
        Advertisement
      </p>
      <ins
        className="adsbygoogle block min-h-[120px] w-full"
        style={{ display: "block" }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
