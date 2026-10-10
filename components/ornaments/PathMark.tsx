/** Branching-path motif for questionnaire progress and chapter transitions. */
export function PathMark({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M16 4 V12 M16 12 L10 18 M16 12 L22 18 M10 18 V26 M22 18 V26"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.65"
      />
      <circle cx="16" cy="4" r="1.5" fill="currentColor" opacity="0.5" />
      <circle cx="10" cy="26" r="1.25" fill="currentColor" opacity="0.35" />
      <circle cx="22" cy="26" r="1.25" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
