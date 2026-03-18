"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Layers3, ShieldCheck, TrendingUp } from "lucide-react";
import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";
import LogoCloud from "@/components/ui/LogoCloud";
import StatBadge from "@/components/ui/StatBadge";
import { trackEvent } from "@/lib/analytics";
import { useLocale } from "@/components/providers/LocaleProvider";

function useFinePointer() {
  return useSyncExternalStore(
    callback => {
      if (typeof window === "undefined") return () => {};
      const media = window.matchMedia("(pointer: fine)");
      media.addEventListener("change", callback);
      return () => media.removeEventListener("change", callback);
    },
    () => (typeof window !== "undefined" ? window.matchMedia("(pointer: fine)").matches : false),
    () => false,
  );
}

const heroSignalIcons = [TrendingUp, Layers3, CheckCircle2] as const;

export default function HeroSection() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const hasFinePointer = useFinePointer();
  const canUsePointerGlow = !reduceMotion && hasFinePointer;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (!canUsePointerGlow || !sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    setPointer({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      active: true,
    });
  }, [canUsePointerGlow]);

  const handlePointerLeave = useCallback(() => {
    setPointer(prev => ({ ...prev, active: false }));
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden section-pad pt-24 md:pt-28"
    >
      <div aria-hidden="true" className="hero-depth-gradient" />
      <div aria-hidden="true" className="hero-noise-overlay" />

      {reduceMotion ? (
        <div aria-hidden="true" className="hero-particle-grid" />
      ) : (
        <motion.div
          aria-hidden="true"
          className="hero-particle-grid"
          animate={{ backgroundPosition: ["0px 0px", "120px 80px", "0px 0px"] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        />
      )}

      {reduceMotion ? null : (
        <>
          <motion.div aria-hidden="true" className="hero-float-shape left-[6%] top-[12%] h-32 w-32 bg-spectra-orange/10" animate={{ y: [0, -22, 0], x: [0, 8, 0] }} transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div aria-hidden="true" className="hero-float-shape right-[18%] top-[8%] h-24 w-24 bg-spectra-red/10" animate={{ y: [0, 16, 0], x: [0, -10, 0] }} transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div aria-hidden="true" className="hero-float-shape left-[40%] bottom-[8%] h-20 w-20 bg-white/5" animate={{ y: [0, -12, 0], x: [0, 6, 0] }} transition={{ duration: 58, repeat: Infinity, ease: "easeInOut" }} />
        </>
      )}

      {canUsePointerGlow ? (
        <motion.div
          aria-hidden="true"
          className="cursor-glow"
          animate={{ x: pointer.x - 180, y: pointer.y - 180, opacity: pointer.active ? 0.35 : 0 }}
          transition={{ type: "spring", stiffness: 130, damping: 24, mass: 0.5 }}
        />
      ) : null}

      <div className="hero-orb left-[4%] top-20 h-52 w-52 bg-spectra-orange/30" />
      <div className="hero-orb right-[5%] top-52 h-60 w-60 bg-spectra-red/25" />

      <motion.img
        src="/brand/symbol_orange.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-140px] top-[-80px] hidden w-[760px] opacity-[0.08] blur-[4px] lg:block"
        animate={reduceMotion ? undefined : { y: [0, -22, 0], rotate: [0, -1.2, 0] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-xs uppercase tracking-[0.18em] text-spectra-orange">
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          {t.hero.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.14 }} className="mt-6 max-w-5xl text-xl leading-relaxed text-spectra-light">
          {t.hero.subtitle}
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.18 }} className="mt-4 max-w-5xl text-sm leading-relaxed text-zinc-300 md:text-base">
          {t.hero.support}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.22 }} className="mt-6 grid max-w-5xl gap-3 md:grid-cols-3">
          {t.hero.signals.map((signal, index) => {
            const Icon = heroSignalIcons[index] ?? heroSignalIcons[0];
            return (
              <motion.div key={signal.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.25 + index * 0.08 }} className="group rounded-xl border border-white/12 bg-white/[0.02] px-4 py-3 transition-all duration-200 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                <div className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 text-spectra-orange transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-white">{signal.title}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-400">{signal.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }} className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white">
          <ShieldCheck className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
          {t.hero.trustLine}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.36 }} className="mt-10 flex flex-wrap gap-4">
          <Button href="#challenge" onClick={() => trackEvent("hero_cta_explore")}>{t.hero.exploreCta}</Button>
          <Button href="#workflow" variant="secondary">{t.hero.workflowCta}</Button>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {t.hero.metrics.map(metric => (
            <StatBadge
              key={metric.label}
              label={metric.label}
              numberValue={metric.numberValue}
              suffix={metric.suffix}
              note={metric.note}
            />
          ))}
        </div>

        <LogoCloud className="mt-10" />
      </div>
    </section>
  );
}

