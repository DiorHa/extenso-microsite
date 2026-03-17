"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowDown,
  DatabaseZap,
  FolderOpen,
  Handshake,
  Keyboard,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const workflowPipeline = [
  {
    title: "Portfolio Data Collection",
    description: "Secure intake of portfolio files and implementation context.",
    icon: FolderOpen,
  },
  {
    title: "Structuring & Validation",
    description: "Source fields are normalized and validated for data quality.",
    icon: DatabaseZap,
  },
  {
    title: "Master Data Preparation",
    description: "Template-driven master records are prepared for reliable mapping.",
    icon: Layers3,
  },
  {
    title: "RIMO Data Entry",
    description: "Structured records are entered into the RIMO platform workflow.",
    icon: Keyboard,
  },
  {
    title: "Quality Assurance",
    description: "Cross-checks ensure consistency, completeness, and onboarding readiness.",
    icon: ShieldCheck,
  },
  {
    title: "Client Handover",
    description: "Verified data is handed over for final implementation and go-live steps.",
    icon: Handshake,
  },
];

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });

  return (
    <section id="workflow" ref={sectionRef} className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Execution Workflow"
          title="How the Delivery Model Works"
          description="A repeatable six-step operational workflow keeps implementation quality high while accelerating onboarding throughput."
        />

        <div className="relative mt-14">
          <div className="pointer-events-none absolute left-[27px] top-0 h-full w-[2px] bg-white/10" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-[27px] top-0 w-[2px] bg-spectra-orange"
            initial={{ height: 0 }}
            animate={{ height: inView ? "100%" : 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-6">
            {workflowPipeline.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  className="relative pl-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: index * 0.16 }}
                >
                  <motion.div
                    className="absolute left-[15px] top-5 z-20 rounded-full border border-spectra-orange/50 bg-black p-2"
                    animate={inView ? { scale: [0.95, 1.06, 1] } : { scale: 0.95 }}
                    transition={{ duration: 0.55, delay: index * 0.16 + 0.1 }}
                  >
                    <Icon className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
                  </motion.div>

                  <div className="group rounded-2xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 transition-all duration-200 hover:scale-[1.01] hover:border-spectra-orange/65 hover:shadow-[0_0_0_1px_rgba(255,59,0,0.35),0_18px_45px_rgba(255,59,0,0.2)]">
                    <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Step {String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-spectra-light">{step.description}</p>
                  </div>

                  {index < workflowPipeline.length - 1 ? (
                    <motion.div
                      className="pointer-events-none absolute left-[21px] -bottom-4 z-20"
                      animate={inView ? { y: [0, 4, 0], opacity: [0.5, 1, 0.5] } : { y: 0, opacity: 0.3 }}
                      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: index * 0.14 }}
                    >
                      <ArrowDown className="h-4 w-4 text-spectra-orange" aria-hidden="true" />
                    </motion.div>
                  ) : null}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
