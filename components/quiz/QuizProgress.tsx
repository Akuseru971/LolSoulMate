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
      <div className="mb-2 flex justify-between text-xs uppercase tracking-widest text-amber-200/70">
        <span>
          Question {current + 1} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-300 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
