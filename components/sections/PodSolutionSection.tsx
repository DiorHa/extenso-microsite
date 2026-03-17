"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Database,
  Settings2,
  Users,
} from "lucide-react";
import { podCapabilities } from "@/content/extenso-story";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const podModules = [
  { label: "Data Operations Specialists", icon: Users },
  { label: "RIMO Operators", icon: Settings2 },
  { label: "QA & Validation", icon: CheckCircle2 },
  { label: "AI Template Layer", icon: Bot },
];

function FlowArrow({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="hidden items-center justify-center md:flex"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="relative h-[2px] w-20 bg-white/10">
        <motion.div
          className="absolute left-0 top-0 h-[2px] bg-spectra-orange"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <motion.div
        className="ml-2"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <ArrowRight className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}

export default function PodSolutionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="solution" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Operating Model"
          title="A Dedicated Real Estate Data Operations Pod"
          description="Spectra provides a multilingual operational pod that works alongside eXtenso to prepare, structure, and enter data into RIMO with speed and precision."
        />

        <div className="mt-12">
          <Card className="relative overflow-hidden">
            <div className="hero-orb right-0 top-0 h-44 w-44 bg-spectra-orange/20" />

            <div className="relative z-10 flex flex-col items-stretch gap-5 md:flex-row md:items-center md:justify-between">
              <motion.div
                className="rounded-2xl border border-white/20 bg-black/40 p-5 md:w-[28%]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <Database className="h-7 w-7 text-spectra-orange" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">Client Portfolio Data</h3>
                <p className="mt-2 text-sm text-spectra-light">
                  Incoming files, master records, and source exports from client portfolios.
                </p>
              </motion.div>

              <FlowArrow delay={0.22} />

              <motion.div
                className="relative rounded-2xl border border-spectra-orange/55 bg-gradient-to-br from-[#2a1209] via-[#1f0f0a] to-[#130a07] p-5 shadow-[0_0_0_1px_rgba(255,59,0,0.22),0_16px_42px_rgba(255,59,0,0.2)] md:w-[40%]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.28 }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 16%, rgba(255,59,0,0.35), transparent 42%), radial-gradient(circle at 86% 82%, rgba(255,255,255,0.08), transparent 45%)",
                  }}
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white">Spectra Data Pod</h3>
                  <p className="mt-2 text-sm text-spectra-light">Structured execution layer for preparation, setup, and validation.</p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {podModules.map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="rounded-xl border border-white/15 bg-black/45 px-3 py-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.35, delay: 0.36 + index * 0.08 }}
                      >
                        <motion.div
                          className="inline-flex"
                          animate={
                            reduceMotion
                              ? undefined
                              : {
                                  y: [0, -2, 0],
                                  scale: [1, 1.06, 1],
                                  rotate: [0, -4, 0],
                                }
                          }
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.18,
                          }}
                        >
                          <item.icon className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
                        </motion.div>
                        <p className="mt-2 text-xs font-medium text-white">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <FlowArrow delay={0.55} />

              <motion.div
                className="rounded-2xl border border-white/20 bg-black/40 p-5 md:w-[28%]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.62 }}
              >
                <Settings2 className="h-7 w-7 text-spectra-orange" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">RIMO Platform</h3>
                <p className="mt-2 text-sm text-spectra-light">
                  System-ready object, tenant, and contract data entered for implementation workflows.
                </p>
              </motion.div>
            </div>
          </Card>
        </div>

        <div className="mt-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.14em] text-zinc-500"
          >
            Core capabilities in flow
          </motion.p>

          <div className="relative mt-5">
            <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-[1px] bg-white/12 lg:block" />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {podCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative rounded-2xl border border-spectra-orange/25 bg-gradient-to-br from-[#1b0c06] via-[#140a07] to-[#100807] px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-spectra-orange/55 hover:shadow-[0_14px_30px_rgba(255,59,0,0.18)]"
                >
                  <div className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/14 bg-black/45">
                    <capability.icon className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-white leading-snug">{capability.title}</h4>
                  <p className="mt-2 text-xs leading-6 text-zinc-300">{capability.description}</p>

                  {index < podCapabilities.length - 1 ? (
                    <motion.div
                      className="pointer-events-none absolute -right-2 top-6 hidden lg:block"
                      animate={reduceMotion ? undefined : { x: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 }}
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-spectra-orange/85" aria-hidden="true" />
                    </motion.div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


