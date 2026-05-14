"use client";

import Reveal from "./Reveal";
import { SearchCheck, ScanSearch, Map, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: SearchCheck,
    title: "Account & PPC Audit",
    desc: "Deep dive into account health, listing quality, search-term reports, campaign structure, and missed opportunities.",
  },
  {
    icon: ScanSearch,
    title: "Market & Competitor Review",
    desc: "Keyword landscape, top competitor positioning, pricing benchmarks, and category-level demand signals.",
  },
  {
    icon: Map,
    title: "Strategy Roadmap",
    desc: "A 30/60/90-day plan with prioritized actions, expected impact, and clear KPIs you can hold us to.",
  },
  {
    icon: Wrench,
    title: "Implementation & Optimization",
    desc: "Campaign restructuring, listing rewrites, A+ direction, catalog fixes, bid management, negative harvesting.",
  },
  {
    icon: TrendingUp,
    title: "Reporting, Scaling & Iteration",
    desc: "Weekly KPI reports, monthly strategy reviews, and continuous testing to compound profitable growth.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              A clear, <span className="grad-text">5-step process</span> built for compounding growth
            </h2>
          </div>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
          {/* connector line on lg+ */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card-surface relative h-full p-5">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                    <s.icon className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <span className="font-display text-xl font-bold text-white/15">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
