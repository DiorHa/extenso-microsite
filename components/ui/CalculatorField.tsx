"use client";

import { cn } from "@/lib/utils";

type CalculatorFieldProps = {
  id: string;
  label: string;
  value: number;
  min?: number;
  step?: number;
  onChange: (value: number) => void;
  suffix?: string;
};

export default function CalculatorField({
  id,
  label,
  value,
  min = 0,
  step = 1,
  onChange,
  suffix,
}: CalculatorFieldProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 block text-sm font-medium text-spectra-light">{label}</span>
      <div className="relative">
        <input
          id={id}
          type="number"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={e => onChange(Number(e.target.value))}
          className={cn(
            "focus-ring w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 pr-14 text-base text-white placeholder:text-spectra-light",
          )}
        />
        {suffix ? (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-spectra-light">{suffix}</span>
        ) : null}
      </div>
    </label>
  );
}

