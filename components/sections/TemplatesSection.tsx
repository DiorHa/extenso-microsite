"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Table2, WandSparkles } from "lucide-react";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type WorkspaceKey =
  | "Property Objects"
  | "Tenant Information"
  | "Rental Contracts"
  | "Unit Structures"
  | "Financial Account Mappings";

type WorkspaceConfig = {
  title: string;
  subtitle: string;
  columns: string[];
  rows: string[][];
  statuses: string[];
};

const workspaceData: Record<WorkspaceKey, WorkspaceConfig> = {
  "Property Objects": {
    title: "Property Object Master Template",
    subtitle: "Standardized object records for clean portfolio onboarding in RIMO.",
    columns: ["Property ID", "Address", "Units", "Owner"],
    rows: [
      ["CH-ZH-1104", "Bahnhofstrasse 21, Zurich", "18", "Pensionskasse Nord"],
      ["CH-BE-2409", "Marktgasse 8, Bern", "12", "Helvetia Asset Mgmt"],
      ["CH-BS-3152", "Rheingasse 4, Basel", "26", "Rhein Portfolio AG"],
    ],
    statuses: ["Validated", "Validated", "Mapped"],
  },
  "Tenant Information": {
    title: "Tenant Information Master Template",
    subtitle: "Tenant-level records aligned for multilingual onboarding workflows.",
    columns: ["Tenant ID", "Name", "Lease Start", "Unit"],
    rows: [
      ["TEN-774", "Muller Consulting GmbH", "2024-02-01", "ZH-1104-12"],
      ["TEN-882", "AlpenCare AG", "2023-10-15", "BE-2409-04"],
      ["TEN-917", "Nova Retail SA", "2025-01-01", "BS-3152-07"],
    ],
    statuses: ["Validated", "Validated", "Reviewed"],
  },
  "Rental Contracts": {
    title: "Rental Contract Master Template",
    subtitle: "Contract records standardized for date logic, terms, and billing consistency.",
    columns: ["Contract ID", "Type", "Start Date", "Rent"],
    rows: [
      ["CTR-1023", "Commercial", "2024-02-01", "CHF 5,800"],
      ["CTR-1189", "Residential", "2023-10-15", "CHF 2,150"],
      ["CTR-1212", "Commercial", "2025-01-01", "CHF 7,200"],
    ],
    statuses: ["Validated", "Validated", "Mapped"],
  },
  "Unit Structures": {
    title: "Unit Structure Master Template",
    subtitle: "Building and unit hierarchy prepared for reliable system mapping.",
    columns: ["Unit ID", "Building", "Floor", "Area m2"],
    rows: [
      ["ZH-1104-12", "Bahnhof 21", "3", "148"],
      ["BE-2409-04", "Marktgasse 8", "1", "92"],
      ["BS-3152-07", "Rheingasse 4", "2", "176"],
    ],
    statuses: ["Validated", "Validated", "Validated"],
  },
  "Financial Account Mappings": {
    title: "Financial Mapping Master Template",
    subtitle: "Chart-of-accounts mapping structured for portfolio-specific reporting logic.",
    columns: ["Account Code", "Category", "Cost Center", "Portfolio"],
    rows: [
      ["4001", "Rental Revenue", "CC-ZH-01", "Zurich Core"],
      ["6210", "Facility Costs", "CC-BE-03", "Bern Managed"],
      ["7012", "Admin Expenses", "CC-BS-02", "Basel Mixed"],
    ],
    statuses: ["Mapped", "Validated", "Reviewed"],
  },
};

const templateKeys = Object.keys(workspaceData) as WorkspaceKey[];

export default function TemplatesSection() {
  const [activeTemplate, setActiveTemplate] = useState<WorkspaceKey>("Property Objects");
  const active = workspaceData[activeTemplate];

  return (
    <section id="templates" className="section-pad">
      <div className="section-container">
        <SectionHeading
          eyebrow="Template Layer"
          title="AI-Enabled Master Data Templates"
          description="Spectra helped design structured templates that standardize real estate portfolio onboarding and improve data consistency before system entry."
        />

        <Reveal className="mt-10">
          <Card className="overflow-hidden">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
              <div className="rounded-xl border border-white/15 bg-black/50 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Messy spreadsheets</p>
                <div className="mt-3 space-y-2">
                  <div className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-spectra-light">Obj_11 | Addr. missing |  -  | n/a</div>
                  <div className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-spectra-light">TEN#7 | Muller | 12/02 | Unit-?</div>
                  <div className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-spectra-light">Rent Contract X | ??? | CHF | TBD</div>
                </div>
              </div>

              <div className="flex items-center justify-center text-spectra-orange">
                <ArrowRight className="hidden h-5 w-5 md:block" aria-hidden="true" />
              </div>

              <div className="rounded-xl border border-spectra-orange/45 bg-spectra-orange/[0.08] p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">AI structuring engine</p>
                <div className="mt-4 flex items-center gap-3">
                  <Bot className="h-5 w-5 text-spectra-orange" aria-hidden="true" />
                  <p className="text-sm font-medium text-white">Parsing, mapping, and validation logic</p>
                </div>
                <p className="mt-3 text-xs text-spectra-light">Normalizes fields, resolves gaps, and aligns schema for RIMO-ready onboarding templates.</p>
              </div>

              <div className="flex items-center justify-center text-spectra-orange">
                <ArrowRight className="hidden h-5 w-5 md:block" aria-hidden="true" />
              </div>

              <div className="rounded-xl border border-white/15 bg-black/50 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Standardized master templates</p>
                <div className="mt-3 rounded border border-white/10 bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2 text-spectra-orange">
                    <Table2 className="h-4 w-4" aria-hidden="true" />
                    <p className="text-xs font-medium text-white">System-ready structure</p>
                  </div>
                  <p className="mt-2 text-xs text-spectra-light">Consistent columns, validated values, implementation-ready records.</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <Reveal className="mt-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                background:
                  "radial-gradient(circle at 14% 18%, rgba(255,59,0,0.18), transparent 38%), radial-gradient(circle at 90% 84%, rgba(255,255,255,0.06), transparent 45%)",
              }}
            />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-spectra-light">Master Template Workspace</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{active.title}</h3>
                <p className="mt-1 text-xs text-zinc-400">{active.subtitle}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-spectra-orange/40 bg-spectra-orange/10 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-spectra-orange">
                <WandSparkles className="h-3.5 w-3.5" aria-hidden="true" />
                AI-assisted validation
              </span>
            </div>

            <div className="relative z-10 mt-4 flex flex-wrap gap-2">
              {templateKeys.map(key => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTemplate(key)}
                  aria-pressed={activeTemplate === key}
                  className={[
                    "focus-ring rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.08em] transition",
                    activeTemplate === key
                      ? "border-spectra-orange/50 bg-spectra-orange/15 text-spectra-orange"
                      : "border-white/12 bg-black/35 text-zinc-300 hover:border-white/25 hover:text-white",
                  ].join(" ")}
                >
                  {key}
                </button>
              ))}
            </div>

            <div className="relative z-10 mt-4 overflow-hidden rounded-xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTemplate}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                >
                  <div className="grid grid-cols-10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-400">
                    {active.columns.map((column, index) => (
                      <span key={column} className={index === active.columns.length - 1 ? "col-span-2" : "col-span-2"}>
                        {column}
                      </span>
                    ))}
                    <span className="col-span-2 text-right">Status</span>
                  </div>

                  {active.rows.map((row, rowIndex) => (
                    <div
                      key={`${activeTemplate}-${rowIndex}`}
                      className={`grid grid-cols-10 items-center px-3 py-2 text-xs text-zinc-200 ${
                        rowIndex < active.rows.length - 1 ? "border-b border-white/8" : ""
                      }`}
                    >
                      {row.map((cell, cellIndex) => (
                        <span key={`${activeTemplate}-${rowIndex}-${cellIndex}`} className="col-span-2 truncate pr-2">
                          {cell}
                        </span>
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
