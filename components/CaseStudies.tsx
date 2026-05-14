"use client";

import Reveal from "./Reveal";
import { ArrowDownRight, ArrowUpRight, Target, TrendingUp } from "lucide-react";

// ============================================================
// EDITABLE CASE STUDIES — placeholders
// IMPORTANT: Replace these numbers with VERIFIED client-specific
// results before publishing. Add a short, honest brief per card.
// ============================================================
const cases = [
  {
    tag: "Home & Kitchen",
    title: "PPC ACoS reduced from 18% to 12.23%",
    body: "Restructured campaign architecture, harvested negatives, and rebuilt bid strategy around profitable search terms.",
    stats: [
      { label: "ACoS", from: "18%", to: "12.23%", down: true },
      { label: "ROAS", from: "4.2x", to: "6.8x", down: false },
    ],
  },
  {
    tag: "Electronics",
    title: "Revenue scaled from $23.7M to $148M",
    body: "Full-funnel launch playbook combining listing SEO, A+ content overhaul, and Sponsored Brands video campaigns.",
    stats: [
      { label: "Revenue", from: "$23.7M", to: "$148M", down: false },
      { label: "Org. Rank", from: "Pg. 4", to: "Top 5", down: false },
    ],
  },
  {
    tag: "Beauty",
    title: "Organic ranking lift via PPC + SEO",
    body: "Coordinated keyword targeting between paid and organic to push priority terms onto page one within 90 days.",
    stats: [
      { label: "Top-3 KWs", from: "4", to: "27", down: false },
      { label: "Sessions", from: "—", to: "+62%", down: false },
    ],
  },
  {
    tag: "Pet Supplies",
    title: "Wasted ad spend cut with negative strategy",
    body: "Search-term mining and a tiered negative-keyword framework cut irrelevant clicks while protecting brand terms.",
    stats: [
      { label: "Wasted spend", from: "31%", to: "9%", down: true },
      { label: "CVR", from: "8.1%", to: "13.4%", down: false },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Results</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Real <span className="grad-text">growth stories</span> from real Amazon accounts
              </h2>
              <p className="mt-4 text-white/60">
                A few representative outcomes from PPC, SEO, and full-account
                engagements. Numbers vary by category, budget, and listing quality.
              </p>
            </div>
            <a href="#contact" className="btn-secondary">
              Request Detailed Case Studies
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={(i % 2) * 0.08}>
              <article className="card-surface group h-full overflow-hidden p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-brand-500/25 bg-brand-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-brand-300">
                    {c.tag}
                  </span>
                  <Target className="h-4 w-4 text-white/30" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold leading-snug md:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                  {c.body}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {c.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-white/5 bg-ink-900/80 p-3"
                    >
                      <div className="text-[10px] uppercase tracking-wider text-white/45">
                        {s.label}
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xs text-white/40 line-through">
                          {s.from}
                        </span>
                        <span className="font-display text-lg font-semibold">
                          {s.to}
                        </span>
                      </div>
                      <div
                        className={`mt-1 inline-flex items-center gap-1 text-[11px] ${
                          s.down ? "text-emerald-400" : "text-emerald-400"
                        }`}
                      >
                        {s.down ? (
                          <ArrowDownRight className="h-3 w-3" />
                        ) : (
                          <ArrowUpRight className="h-3 w-3" />
                        )}
                        Improvement
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/35">
          {/* NOTE: Replace with verified, client-approved results before going live. */}
          * Figures shown represent past engagements. Results depend on product,
          market, listing quality, and budget.
        </p>
      </div>
    </section>
  );
}
