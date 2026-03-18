import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Database,
  FileStack,
  Languages,
  Landmark,
  Layers,
  ListChecks,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

export type StoryMetric = {
  label: string;
  value?: string;
  numberValue?: number;
  suffix?: string;
  prefix?: string;
  note: string;
};

export type ChallengeCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type WorkflowStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Capability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ValuePoint = {
  title: string;
  description: string;
};

export const heroContent = {
  eyebrow: "Spectra x eXtenso AG",
  title: "Scaling Real Estate Data Operations for Swiss Property Portfolios",
  subtitle:
    "How Spectra helps eXtenso accelerate RIMO implementations through a dedicated real estate data operations pod.",
  microcopy:
    "Structured onboarding, multilingual operational support, and AI-enabled templates for faster, cleaner ERP implementation workflows.",
};

export const challengeCards: ChallengeCard[] = [
  {
    title: "Fragmented Source Files",
    description:
      "Property and tenant data is spread across disconnected Excel and CSV exports.",
    icon: FileStack,
  },
  {
    title: "Inconsistent Naming",
    description:
      "Naming standards differ by object and unit, making portfolio normalization slow.",
    icon: ListChecks,
  },
  {
    title: "Missing Required Metadata",
    description:
      "Critical onboarding fields for ERP setup are frequently incomplete or absent.",
    icon: Database,
  },
  {
    title: "Portfolio Structure Mismatch",
    description:
      "Data models vary between portfolios and require manual restructuring.",
    icon: Layers,
  },
  {
    title: "Manual Setup Overload",
    description:
      "Implementation teams lose execution time to repetitive data preparation tasks.",
    icon: Workflow,
  },
];

export const bottleneckFlow = [
  "Legacy client data",
  "Fragmented datasets",
  "Manual restructuring",
  "Delayed onboarding",
];

export const podCapabilities: Capability[] = [
  {
    title: "Data Preparation",
    description: "Data is cleaned, normalized, and validated before RIMO entry.",
    icon: Database,
  },
  {
    title: "RIMO Object Setup",
    description: "Property objects are configured with consistent master structures.",
    icon: Building2,
  },
  {
    title: "Tenant & Contract Entry",
    description: "Tenant records and contract relationships are entered with precision.",
    icon: Users,
  },
  {
    title: "Account Hierarchy Support",
    description: "Financial account mappings align with portfolio-specific logic.",
    icon: Landmark,
  },
  {
    title: "Data Verification",
    description: "Final quality checks reduce onboarding friction during go-live.",
    icon: ShieldCheck,
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    title: "Portfolio Data Collection",
    description: "Secure intake of portfolio files and source context.",
    icon: FileStack,
  },
  {
    title: "Structuring & Validation",
    description: "Normalization and quality checks across source datasets.",
    icon: ListChecks,
  },
  {
    title: "Master Data Preparation",
    description: "Template-driven preparation for reliable system mapping.",
    icon: Layers,
  },
  {
    title: "RIMO Object Creation",
    description: "Objects are configured and staged in the target environment.",
    icon: Building2,
  },
  {
    title: "Tenant & Contract Setup",
    description: "Tenancy and contract data is entered with relationship integrity.",
    icon: Users,
  },
  {
    title: "Final Verification",
    description: "Structured final checks before implementation handoff.",
    icon: ShieldCheck,
  },
];

export const templateTypes = [
  "Property objects",
  "Tenant information",
  "Rental contracts",
  "Unit structures",
  "Financial account mappings",
];

export const teamCapabilities: Capability[] = [
  {
    title: "German-Speaking Operations Specialists",
    description:
      "Execution teams communicate clearly with Swiss real estate stakeholders while maintaining cross-functional alignment across client and implementation layers.",
    icon: Languages,
  },
  {
    title: "Finance & Accounting Backgrounds",
    description:
      "Strong handling of account structures, financial context, and data rigor.",
    icon: Landmark,
  },
  {
    title: "Digitalization Delivery Experience",
    description:
      "Practical exposure to Swiss real estate onboarding and system migration workflows.",
    icon: Workflow,
  },
];

export const strategicValuePoints: ValuePoint[] = [
  {
    title: "Faster Onboarding",
    description: "Implementation cycles move faster with operational preparation offloaded.",
  },
  {
    title: "Better Data Consistency",
    description: "Template-led standards improve reliability before system entry.",
  },
  {
    title: "Scalable Operations",
    description: "Pod capacity scales with portfolio demand and implementation volume.",
  },
  {
    title: "Lower Friction",
    description: "Implementation partners focus on delivery rather than raw data cleanup.",
  },
  {
    title: "Cost-Efficient Model",
    description: "Nearshore execution delivers around 40% savings versus local equivalents.",
  },
];

export const ctaContent = {
  heading: "Scale Your Next Portfolio Implementation",
  subtext:
    "Bring structure, speed, and operational capacity to real estate ERP onboarding.",
  primary: { label: "Book a Discovery Call", href: "https://www.spectra.support/contact" },
  secondary: { label: "Download the Use Case", href: "#" },
  tertiary: { label: "Talk to Spectra", href: "#" },
};

export const trustMetrics: StoryMetric[] = [
  {
    label: "Portfolio Objects",
    numberValue: 500,
    suffix: "+",
    note: "Supported in structured onboarding workflows",
  },
  {
    label: "Average Entry Time",
    numberValue: 11,
    suffix: " min",
    note: "Per object (typically 8-13 minutes in operational delivery)",
  },
  {
    label: "Template Layer",
    numberValue: 5,
    suffix: "+",
    note: "AI-enabled master data templates in active use",
  },
];
