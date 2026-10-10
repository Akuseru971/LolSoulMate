"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  ads: boolean;
};

const STORAGE = "soul-consent-v1";

const ConsentContext = createContext<{
  consent: ConsentState | null;
  adsAllowed: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  setAds: (v: boolean) => void;
} | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        queueMicrotask(() => setConsent(JSON.parse(raw) as ConsentState));
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((next: ConsentState) => {
    setConsent(next);
    localStorage.setItem(STORAGE, JSON.stringify(next));
  }, []);

  const value = useMemo(
    () => ({
      consent,
      adsAllowed: Boolean(consent?.ads),
      acceptAll: () => persist({ necessary: true, analytics: true, ads: true }),
      rejectOptional: () =>
        persist({ necessary: true, analytics: false, ads: false }),
      setAds: (v: boolean) =>
        persist({
          necessary: true,
          analytics: consent?.analytics ?? false,
          ads: v,
        }),
    }),
    [consent, persist],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
