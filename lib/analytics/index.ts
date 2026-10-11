export type AnalyticsEvent =
  | "landing_view"
  | "quiz_started"
  | "personal_step_completed"
  | "question_answered"
  | "quiz_checkpoint_revealed"
  | "quiz_completed"
  | "quiz_abandoned"
  | "result_view"
  | "result_view_restored"
  | "result_revealed"
  | "narrative_read_started"
  | "share_studio_opened"
  | "share_template_selected"
  | "share_format_selected"
  | "share_png_attempt"
  | "share_png_success"
  | "share_png_failed"
  | "native_share_attempt"
  | "native_share_success"
  | "native_share_failed"
  | "native_share_canceled"
  | "share_link_copied"
  | "share_link_copy_failed"
  | "share_clicked"
  | "share_image_download"
  | "shared_result_opened"
  | "shared_result_quiz_start"
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

export function useTrackEvent() {
  return { trackEvent };
}
