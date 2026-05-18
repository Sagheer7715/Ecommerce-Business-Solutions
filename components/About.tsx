"use client";

import Reveal from "./Reveal";
import { CheckCircle2, TrendingUp, BarChart3 } from "lucide-react";

const expertise = [
  "Amazon Seller Central",
  "Vendor Central",
  "PPC Strategy & Bid Management",
  "Listing SEO & Copywriting",
  "Catalog & Flat File Troubleshooting",
  "Growth Strategy & Brand Management",
];

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-3xl bg-brand-500/15 blur-3xl" />
              <DashboardMockup />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <span className="eyebrow">About</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              A senior-led Amazon agency — built by operators, not account
              managers
            </h2>

            <div className="mt-6 space-y-4 text-white/65">
              <p>
                <span className="text-white">
                  Ecommerce Business Solutions
                </span>{" "}
                is a US-registered Amazon growth agency with 8+ years of
                hands-on eCommerce experience across hundreds of brands. Our
                focus is simple: profitable, defensible growth on Amazon —
                built through the three levers that actually move the needle on
                this platform:
                <span className="text-white"> PPC, SEO, and conversion</span>.
              </p>
              <p>
                We work deep inside Seller Central and Vendor Central —
                managing catalogs, flat files, A+ content, brand stores, and
                everything in between. From PPC restructuring and listing
                optimization to suppressed-listing fixes and case-log handling,
                our team treats your account the way a senior operator would,
                not the way a spreadsheet does.
              </p>
              <p>
                If you&apos;re a brand owner tired of agencies that only run
                ads and ignore the actual fundamentals — listing quality,
                catalog hygiene, account health — this is the kind of
                partnership built for you. Senior operators behind every
                account. No junior hand-offs. No templated playbooks.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {expertise.map((e) => (
                <li key={e} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-brand-400" />
                  <span className="text-white/80">{e}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Book a Free Audit
              </a>
              <a href="#case-studies" className="btn-secondary">
                See Case Studies
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const stats = [
    { value: "8+", label: "Years Experience", sub: "Hands-on" },
    { value: "$560M+", label: "Revenue Managed", sub: "Across brands" },
    { value: "$73M+", label: "PPC Sales", sub: "Sponsored ads" },
    { value: "250+", label: "Brands Assisted", sub: "& growing" },
  ];

  return (
    <div className="card-surface relative aspect-[4/5] overflow-hidden p-4 sm:p-5">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_8%,rgba(249,115,22,0.22),transparent_55%),radial-gradient(circle_at_85%_92%,rgba(245,158,11,0.14),transparent_55%)]" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-amber-500/15 blur-3xl" />

      {/* Frame content */}
      <div className="relative flex h-full flex-col gap-3">
        {/* Window chrome */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
            <span className="h-2 w-2 rounded-full bg-green-500/60" />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/45">
            <span>Amazon Operator</span>
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
            </span>
          </div>
        </div>

        {/* Account header */}
        <div className="flex items-center justify-between rounded-xl border border-white/8 bg-ink-900/70 p-3 backdrop-blur">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-black shadow-glow">
              <BarChart3 className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-brand-300">
                Account Overview
              </div>
              <div className="font-display text-[13px] font-semibold leading-tight">
                Amazon Growth Performance
              </div>
            </div>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-emerald-300">
            LIVE
          </span>
        </div>

        {/* Stat tiles 2x2 */}
        <div className="grid grid-cols-2 gap-2">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/8 bg-ink-900/70 p-2.5 backdrop-blur transition-colors hover:border-brand-500/30"
            >
              <div className="font-display text-lg font-bold leading-none grad-text">
                {s.value}
              </div>
              <div className="mt-1.5 text-[11px] font-medium leading-tight text-white/85">
                {s.label}
              </div>
              <div className="mt-0.5 text-[9px] text-white/40">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart card */}
        <div className="flex flex-1 flex-col rounded-xl border border-white/8 bg-ink-900/70 p-3 backdrop-blur">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                Revenue Growth Trend
              </div>
              <div className="font-display text-xs font-semibold text-white/90">
                Last 12 months
              </div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-md bg-emerald-400/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300 ring-1 ring-emerald-400/20">
              <TrendingUp className="h-3 w-3" />
              +248%
            </div>
          </div>
          <div className="relative flex-1">
            <GrowthChart />
          </div>
        </div>

        {/* Expert badge */}
        <div className="flex items-center justify-between rounded-xl border border-brand-500/25 bg-brand-500/10 px-3 py-2.5 backdrop-blur">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-brand-300" />
            <span className="text-[12px] font-semibold text-white">
              Seller & Vendor Central Expert
            </span>
          </div>
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-brand-300">
            Verified
          </span>
        </div>
      </div>
    </div>
  );
}

function GrowthChart() {
  return (
    <svg
      viewBox="0 0 300 90"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="aboutChartFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="aboutChartLine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      {/* gridlines */}
      {[20, 40, 60].map((y) => (
        <line
          key={y}
          x1="0"
          x2="300"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.05)"
          strokeDasharray="2 4"
        />
      ))}

      {/* fill */}
      <path
        d="M0,78 C25,70 40,72 65,60 C90,48 115,56 145,40 C175,26 200,32 230,20 C260,10 280,12 300,4 L300,90 L0,90 Z"
        fill="url(#aboutChartFill)"
      />

      {/* line */}
      <path
        d="M0,78 C25,70 40,72 65,60 C90,48 115,56 145,40 C175,26 200,32 230,20 C260,10 280,12 300,4"
        fill="none"
        stroke="url(#aboutChartLine)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* end dot with glow */}
      <circle cx="300" cy="4" r="4" fill="#fbbf24" />
      <circle
        cx="300"
        cy="4"
        r="8"
        fill="none"
        stroke="#fbbf24"
        strokeOpacity="0.35"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          values="6;12;6"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.45;0;0.45"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
