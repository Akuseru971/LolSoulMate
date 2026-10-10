export function EchoMark({ className = "", size = 24 }: { className?: string; size?: number }) {
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
        d="M8 16 C8 10 12 6 16 6 C20 6 24 10 24 16 C24 22 20 26 16 26"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <path
        d="M12 16 C12 12 14 10 16 10 C18 10 20 12 20 16 C20 20 18 22 16 22"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.55"
      />
    </svg>
  );
}
