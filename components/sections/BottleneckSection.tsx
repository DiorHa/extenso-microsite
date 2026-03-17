"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  FileWarning,
  Hourglass,
  Wrench,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pipelineSteps = [
  {
    step: "Step 01",
    title: "Legacy Client Data",
    description: "Source data arrives in mixed file formats with uneven structure across portfolios.",
    icon: Database,
  },
  {
    step: "Step 02",
    title: "Fragmented Datasets",
    description: "Key property and tenant fields are spread across disconnected exports and sheets.",
    icon: FileWarning,
  },
  {
    step: "Step 03",
    title: "Manual Restructuring",
    description: "Implementation teams spend delivery time remapping and cleaning records before entry.",
    icon: Wrench,
  },
  {
    step: "Step 04",
    title: "Delayed Onboarding",
    description: "Go-live momentum slows because ERP onboarding starts after heavy pre-processing work.",
    icon: Hourglass,
  },
];

export default function BottleneckSection() {
  return (
    <section id="bottleneck" className="section-pad relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.04), transparent 38%), radial-gradient(circle at 84% 74%, rgba(255,59,0,0.08), transparent 44%)",
        }}
      />

      <div className="section-container relative z-10">
        <SectionHeading
          eyebrow="Implementation Drag"
          title="Why Implementations Slow Down"
          description="Implementation partners like eXtenso often spend significant operational effort cleaning, validating, and restructuring data before it can even be entered into the ERP environment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === pipelineSteps.length - 1;

            return (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.14 }}
                className="group relative min-h-[250px] rounded-3xl border border-white/20 bg-gradient-to-b from-[#181515] to-[#111010] p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-spectra-orange/45 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-30"
                  style={{ background: "radial-gradient(circle at 20% 14%, rgba(255,255,255,0.14), transparent 45%)" }}
                />

                {!isLast ? (
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 items-center xl:flex"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.4, delay: index * 0.14 + 0.22 }}
                  >
                    <div className="h-[1px] w-7 bg-white/18" />
                    <ArrowRight className="h-4 w-4 text-spectra-orange/80" />
                  </motion.div>
                ) : null}

                <p className="relative z-10 text-[11px] uppercase tracking-[0.14em] text-zinc-400">{step.step}</p>

                <div className="relative z-10 mt-4 inline-flex rounded-xl border border-white/12 bg-white/[0.02] p-2.5 transition duration-200 group-hover:border-white/25">
                  <Icon className="h-5 w-5 text-zinc-300 transition-all duration-200 group-hover:scale-110 group-hover:rotate-3 group-hover:text-white" />
                </div>

                <h3 className="relative z-10 mt-5 text-xl font-semibold leading-tight text-white">{step.title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-7 text-zinc-400">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
