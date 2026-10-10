export function SoulSeal({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="0.75" opacity="0.45" />
      <circle cx="32" cy="32" r="18" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
      <path
        d="M32 14 L38 28 L32 24 L26 28 Z M32 50 L26 36 L32 40 L38 36 Z"
        stroke="currentColor"
        strokeWidth="0.85"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}
