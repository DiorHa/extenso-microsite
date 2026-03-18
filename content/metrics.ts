export type Metric = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
};

export const impactMetrics: Metric[] = [
  {
    label: "Objects Onboarded",
    value: 500,
    suffix: "+",
    description: "Real estate objects structured and prepared for RIMO onboarding workflows.",
  },
  {
    label: "Data Entry Time",
    value: 11,
    suffix: " min",
    description: "Average entry cycle per object ranges from 8 to 13 minutes.",
  },
  {
    label: "AI Templates",
    value: 5,
    suffix: "+",
    description: "AI-enabled master data templates designed for consistency and speed.",
  },
  {
    label: "Cost Reduction",
    value: 40,
    suffix: "%",
    description: "Compared to equivalent Switzerland-based operational delivery models.",
  },
];
