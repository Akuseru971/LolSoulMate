import { EchoMark } from "./EchoMark";

export function ChapterSeparator({ className = "" }: { className?: string }) {
  return (
    <div
      className={`my-12 flex items-center gap-4 ${className}`}
      aria-hidden
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--sor-border-subtle)] to-transparent" />
      <EchoMark className="text-[var(--sor-gold)] opacity-50" size={20} />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--sor-border-subtle)] to-transparent" />
    </div>
  );
}
