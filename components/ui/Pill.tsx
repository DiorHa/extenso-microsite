import { cn } from "@/lib/utils";

type PillProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-spectra-orange/40 bg-spectra-orange/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-spectra-orange",
        className,
      )}
    >
      {children}
    </span>
  );
}
