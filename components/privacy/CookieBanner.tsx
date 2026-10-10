"use client";

import { useConsent } from "./ConsentContext";

export function CookieBanner() {
  const { consent, acceptAll, rejectOptional } = useConsent();

  if (consent) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0e16]/95 p-4 backdrop-blur-md"
      role="dialog"
      aria-label="Cookie preferences"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/75">
          We use necessary local storage for quiz progress. Optional analytics and
          ads load only with your consent. See our privacy section in the footer.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={rejectOptional}
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-full bg-amber-500/90 px-4 py-2 text-sm font-medium text-black"
          >
            Accept optional
          </button>
        </div>
      </div>
    </div>
  );
}
