"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const base =
    "focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

  const styles = {
    primary:
      "bg-spectra-orange text-black hover:-translate-y-0.5 hover:bg-[#ff5424] hover:shadow-glow",
    secondary:
      "border border-white/25 bg-white/5 text-white hover:border-spectra-orange hover:text-spectra-orange",
    ghost: "text-spectra-light hover:text-white",
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)} onClick={onClick}>
      {children}
    </Link>
  );
}

