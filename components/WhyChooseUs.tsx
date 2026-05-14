"use client";

import Reveal from "./Reveal";
import {
  LineChart,
  Wallet,
  Hand,
  MessagesSquare,
  Layers,
  Infinity as InfinityIcon,
} from "lucide-react";

const reasons = [
  {
    icon: LineChart,
    title: "Data-driven, not guesswork",
    desc: "Every decision is backed by search-term reports, conversion data, and competitor benchmarks — never gut feel.",
  },
  {
    icon: Wallet,
    title: "Profit-focused PPC",
    desc: "We optimize for TACoS, contribution margin and lifetime value — not vanity ROAS that ignores brand health.",
  },
  {
    icon: Hand,
    title: "Hands-on Seller Central",
    desc: "Catalog operations, flat files, case logs, account health — we live inside the platform, not outside it.",
  },
  {
    icon: MessagesSquare,
    title: "Clear reporting & comms",
    desc: "Weekly KPI rollups and async updates so you always know what changed, why, and what's next.",
  },
  {
    icon: Layers,
    title: "SEO + PPC + CRO together",
    desc: "Organic rank, paid efficiency, and listing conversion are treated as one system — because Amazon ranks them that way.",
  },
  {
    icon: InfinityIcon,
    title: "Long-term growth approach",
    desc: "We build defensible market share, not short-term spikes that crash when budget is paused.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <span className="eyebrow">Why Work With Us</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              An <span className="grad-text">unfair advantage</span> for your Amazon channel
            </h2>
            <p className="mt-5 text-white/60">
              We combine senior PPC strategy, deep catalog ops, and conversion
              copywriting into a single growth engine. No agency hand-offs, no
              junior account managers, no fluff.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              Book a Free Audit
            </a>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <div className="card-surface h-full p-5">
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold">
                        {r.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
