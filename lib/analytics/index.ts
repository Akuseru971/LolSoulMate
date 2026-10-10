export type AnalyticsEvent =
  | "landing_view"
  | "quiz_started"
  | "personal_step_completed"
  | "question_answered"
  | "quiz_completed"
  | "quiz_abandoned"
  | "result_view"
  | "result_view_restored"
  | "share_clicked"
  | "share_image_download"
  | "restart"
  | "kofi_clicked";

type Payload = Record<string, string | number | boolean | undefined>;

/** Privacy-conscious analytics — no answers, no birth dates. Disabled until configured + consented. */
export function trackEvent(event: AnalyticsEvent, payload?: Payload): void {
  if (typeof window === "undefined") return;
  const enabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true";
  if (!enabled) return;

  const body = {
    event,
    ts: Date.now(),
    ...payload,
  };

  window.dispatchEvent(new CustomEvent("soul-analytics", { detail: body }));

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", body);
  }
}

/** Hook wrapper for components that need consent-gated analytics later. */
export function useTrackEvent() {
  return { trackEvent };
}
