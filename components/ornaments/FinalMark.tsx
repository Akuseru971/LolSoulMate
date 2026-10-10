export function FinalMark({ className = "", size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      <path d="M20 4 L24 16 L20 12 L16 16 Z M20 36 L16 24 L20 28 L24 24 Z" stroke="currentColor" strokeWidth="0.7" />
      <line x1="20" y1="12" x2="20" y2="28" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}
