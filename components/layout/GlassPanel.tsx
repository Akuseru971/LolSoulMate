import { cn } from "@/lib/cn";

export function GlassPanel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
