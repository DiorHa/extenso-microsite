"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function CTASection() {
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();

  return (
    <section id="cta" className="section-pad pb-24">
      <div className="section-container">
        <Reveal>
          <Card className="relative overflow-hidden border-spectra-orange/30">
            <div className="hero-orb right-[-6%] top-[-20%] h-56 w-56 bg-spectra-orange/25" />
            <div className="hero-orb left-[-4%] bottom-[-28%] h-56 w-56 bg-spectra-red/20" />

            {reduceMotion ? (
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,59,0,0.45) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            ) : (
              <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,59,0,0.45) 1px, transparent 0)", backgroundSize: "28px 28px" }} animate={{ backgroundPosition: ["0px 0px", "80px 50px", "0px 0px"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            )}

            <div className="relative z-10">
              <SectionHeading title={t.cta.title} description={t.cta.description} />

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white">
                <ShieldCheck className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
                {t.cta.trust}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="https://www.spectra.support/contact" className="transition-transform duration-300 hover:scale-[1.03]">{t.cta.primary}</Button>
                <Button href="#workflow" variant="secondary" className="transition-transform duration-300 hover:scale-[1.03]">{t.cta.secondary}</Button>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

