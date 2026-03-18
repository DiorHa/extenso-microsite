"use client";

import { AlertTriangle, Database, FileStack, Layers, ListChecks, Workflow } from "lucide-react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

const challengeIcons = [FileStack, ListChecks, Database, Layers, Workflow, FileStack] as const;

export default function ChallengeSection() {
  const { t } = useLocale();

  return (
    <section id="challenge" className="section-pad !pt-[120px] !pb-[120px]">
      <div className="section-container">
        <SectionHeading eyebrow={t.challenge.eyebrow} title={t.challenge.title} description={t.challenge.description} />

        <div className="grid-cards mt-16">
          {t.challenge.cards.map((card, index) => {
            const Icon = challengeIcons[index] ?? challengeIcons[0];
            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <Card className="group h-full cursor-default transition-all duration-200 hover:-translate-y-[5px] hover:border-spectra-orange/70 hover:shadow-[0_0_0_1px_rgba(255,59,0,0.35),0_18px_48px_rgba(255,59,0,0.2)]">
                  <Icon className="h-7 w-7 text-spectra-light transition-all duration-200 group-hover:rotate-6 group-hover:scale-110 group-hover:animate-pulse group-hover:text-spectra-orange" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-spectra-light">{card.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-spectra-orange/45 bg-gradient-to-r from-[#1a0b06] via-[#220f08] to-[#160804] px-6 py-6 text-center shadow-[0_0_0_1px_rgba(255,59,0,0.18),0_18px_44px_rgba(255,59,0,0.16)]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-45" style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,59,0,0.2), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08), transparent 46%)" }} />

            <div className="relative z-10 flex flex-col items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-spectra-orange/40 bg-spectra-orange/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-spectra-orange">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                {t.challenge.impactLabel}
              </span>
              <p className="max-w-4xl text-lg font-semibold leading-snug text-white md:text-2xl">{t.challenge.impactText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

