"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Table2, WandSparkles } from "lucide-react";
import { useMemo, useState } from "react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "@/components/providers/LocaleProvider";

export default function TemplatesSection() {
  const { t } = useLocale();
  const templates = t.templates.workspace.templates;
  const [activeTemplate, setActiveTemplate] = useState<string>(templates[0]?.id ?? "property");

  const active = useMemo(
    () => templates.find(item => item.id === activeTemplate) ?? templates[0],
    [activeTemplate, templates],
  );

  if (!active) return null;

  return (
    <section id="templates" className="section-pad">
      <div className="section-container">
        <SectionHeading eyebrow={t.templates.eyebrow} title={t.templates.title} description={t.templates.description} />

        <Reveal className="mt-10">
          <Card className="overflow-hidden">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-xl border border-white/15 bg-black/50 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">{t.templates.flow.messy}</p>
                <div className="mt-3 space-y-2">
                  {t.templates.flow.lines.map(line => (
                    <div key={line} className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-spectra-light">{line}</div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center text-spectra-orange"><ArrowRight className="hidden h-5 w-5 md:block" aria-hidden="true" /></div>

              <div className="rounded-xl border border-spectra-orange/45 bg-spectra-orange/[0.08] p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">{t.templates.flow.engine}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Bot className="h-5 w-5 text-spectra-orange" aria-hidden="true" />
                  <p className="text-sm font-medium text-white">{t.templates.flow.engineTitle}</p>
                </div>
                <p className="mt-3 text-xs text-spectra-light">{t.templates.flow.engineDescription}</p>
              </div>

              <div className="flex items-center justify-center text-spectra-orange"><ArrowRight className="hidden h-5 w-5 md:block" aria-hidden="true" /></div>

              <div className="rounded-xl border border-white/15 bg-black/50 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">{t.templates.flow.output}</p>
                <div className="mt-3 rounded border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2 text-spectra-orange">
                    <Table2 className="h-4 w-4" aria-hidden="true" />
                    <p className="text-xs font-medium text-white">{t.templates.flow.outputTitle}</p>
                  </div>
                  <p className="mt-2 text-xs text-spectra-light">{t.templates.flow.outputDescription}</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-35" style={{ background: "radial-gradient(circle at 14% 18%, rgba(255,59,0,0.18), transparent 38%), radial-gradient(circle at 90% 84%, rgba(255,255,255,0.06), transparent 45%)" }} />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">{t.templates.workspace.eyebrow}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{active.title}</h3>
                <p className="mt-1 text-xs text-zinc-400">{active.subtitle}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-spectra-orange/40 bg-spectra-orange/10 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-spectra-orange">
                <WandSparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {t.templates.workspace.badge}
              </span>
            </div>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {templates.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTemplate(item.id)}
                  aria-pressed={activeTemplate === item.id}
                  className={[
                    "focus-ring rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.08em] transition",
                    activeTemplate === item.id
                      ? "border-spectra-orange/50 bg-spectra-orange/15 text-spectra-orange"
                      : "border-white/12 bg-black/35 text-zinc-300 hover:border-white/25 hover:text-white",
                  ].join(" ")}
                >
                  {item.tab}
                </button>
              ))}
            </div>

            <div className="relative z-10 mt-4 overflow-hidden rounded-xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={active.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                  <div className="grid grid-cols-10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-400">
                    {active.columns.map(column => (
                      <span key={column} className="col-span-2">{column}</span>
                    ))}
                    <span className="col-span-2 text-right">{t.templates.workspace.statusColumn}</span>
                  </div>

                  {active.rows.map((row, rowIndex) => (
                    <div key={`${active.id}-${rowIndex}`} className={`grid grid-cols-10 items-center px-3 py-2 text-xs text-zinc-200 ${rowIndex < active.rows.length - 1 ? "border-b border-white/8" : ""}`}>
                      {row.map((cell, cellIndex) => (
                        <span key={`${active.id}-${rowIndex}-${cellIndex}`} className="col-span-2 truncate pr-2">{cell}</span>
                      ))}
                      <span className="col-span-2 text-right">
                        <span className="rounded-full border border-spectra-orange/35 bg-spectra-orange/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-spectra-orange">
                          {active.statuses[rowIndex]}
                        </span>
                      </span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

