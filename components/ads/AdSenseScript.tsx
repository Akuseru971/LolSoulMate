"use client";

import Script from "next/script";
import { adsenseConfig } from "@/lib/config";
import { useConsent } from "@/components/privacy/ConsentContext";

export function AdSenseScript() {
  const { adsAllowed } = useConsent();
  const { publisherId } = adsenseConfig();

  if (!adsAllowed || !publisherId) return null;

  return (
    <Script
      id="adsense-script"
      async
      strategy="afterInteractive"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      crossOrigin="anonymous"
    />
  );
}
