"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

type StatBadgeProps = {
  label: string;
  value?: string;
  numberValue?: number;
  suffix?: string;
  prefix?: string;
  note?: string;
  className?: string;
};

export default function StatBadge({ label, value, numberValue, suffix, prefix, note, className }: StatBadgeProps) {
  return (
    <div className={cn("rounded-xl border border-white/10 bg-white/[0.03] p-4", className)}>
      <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">
        {typeof numberValue === "number" ? (
          <AnimatedCounter value={numberValue} suffix={suffix} prefix={prefix} />
        ) : (
          value
        )}
      </p>
      {note ? <p className="mt-1 text-xs text-spectra-light">{note}</p> : null}
    </div>
  );
}
