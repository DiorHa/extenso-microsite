"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function TeamSection() {
  const { t } = useLocale();

  return (
    <section id="team" className="section-pad relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 14% 18%, rgba(255,59,0,0.12), transparent 38%), radial-gradient(circle at 85% 76%, rgba(255,255,255,0.05), transparent 42%)" }} />

      <div className="section-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1.25fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }} className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} description={t.team.description} />

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.02] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-spectra-orange shadow-[0_0_14px_rgba(255,59,0,0.7)]" />
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{t.team.tagline}</p>
            </div>
          </motion.div>

          <div className="space-y-5">
            {t.team.capabilities.map((capability, index) => (
              <motion.article key={capability.title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.45, delay: index * 0.1 }} className="group">
                <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-[#171717] to-[#101010] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 14% 18%, rgba(255,255,255,0.14), transparent 44%)" }} />

                  <div className="relative z-10">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-zinc-500">{t.team.capabilityLabel} {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-white">{capability.title}</h3>
                  </div>

                  <p className="relative z-10 mt-4 max-w-2xl text-sm leading-7 text-zinc-400">{capability.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

