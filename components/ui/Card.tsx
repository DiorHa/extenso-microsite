"use client";

import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm transition duration-300 hover:border-white/20",
        className,
      )}
    >
      {children}
    </article>
  );
}

