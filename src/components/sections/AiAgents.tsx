import type { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Agent = {
  title: string;
  lines: string[];
  icon: ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "h-[26px] w-[26px]",
};

const agents: Agent[] = [
  {
    title: "Intake agent",
    lines: [
      "Monitors all lead sources - email, ads, web forms, etc.",
      "Extracts all information automatically.",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    title: "Automatic follow up agent",
    lines: [
      "Calls, texts, and emails patients - quickly and diligently.",
      "Follows your office SOP - tailored to your practice.",
    ],
    icon: (
      <svg {...iconProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
  },
  {
    title: "PMS monitoring agent",
    lines: [
      "Connects to your practice management software.",
      "Tracks the full patient journey.",
    ],
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
  },
  {
    title: "Patient behavior predictor agent",
    lines: [
      "Predicts treatment and consult likelihood with two custom AI models.",
      "Staff prioritizes high probability work versus long shot patients.",
    ],
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    ),
  },
];

function Sparkles() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mr-[0.22em] inline-block h-[0.95em] w-[0.95em] align-[-0.1em] fill-teal"
    >
      <path d="M10 5 Q10 14 19 14 Q10 14 10 23 Q10 14 1 14 Q10 14 10 5 Z" />
      <path d="M19 1 Q19 5 23 5 Q19 5 19 9 Q19 5 15 5 Q19 5 19 1 Z" />
    </svg>
  );
}

export default function AiAgents() {
  return (
    <section id="agents" className="bg-surface-dark py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <h2 className="mb-11 text-center text-3xl font-bold tracking-tight text-text-heading md:text-4xl">
            <span className="whitespace-nowrap text-teal">
              <Sparkles />
              AI agents
            </span>{" "}
            do the work for you.
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.title} delay={i * 0.1} className="h-full">
              <article className="flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-white px-6 py-7 text-center shadow-[0_8px_24px_rgba(11,22,40,0.06)]">
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#E3F5F1] text-teal">
                  {agent.icon}
                </span>
                <h3 className="text-[22px] font-bold leading-tight text-brand-blue">
                  {agent.title}
                </h3>
                <div className="flex flex-col gap-1.5">
                  {agent.lines.map((line) => (
                    <p
                      key={line}
                      className="text-[13px] leading-snug text-gray-500"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
