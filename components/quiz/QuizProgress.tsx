import { PathMark } from "@/components/ornaments/PathMark";

export function QuizProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-widest text-[var(--sor-gold)]/75">
        <span className="inline-flex items-center gap-2">
          <PathMark size={16} className="text-[var(--sor-mist)]/80" />
          Question {current + 1} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[var(--sor-gold)]/70 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
