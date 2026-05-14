"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Search,
  Store,
} from "lucide-react";
import { site } from "@/lib/site";

const badges = [
  { icon: Target, label: "Amazon PPC Management" },
  { icon: Store, label: "Seller Central & Vendor Central" },
  { icon: Search, label: "Listing SEO & Conversion" },
  { icon: TrendingUp, label: "Marketplace Growth Strategy" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 md:pt-36 lg:pt-44"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-radial-glow" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="eyebrow">
            <Sparkles className="h-3 w-3" /> Premium Amazon Growth Partner
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Scale Your Amazon Brand With{" "}
            <span className="grad-text">Data-Driven PPC</span>, SEO &{" "}
            <span className="grad-text">Full Account Management</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65 md:text-lg">
            We help Amazon sellers improve visibility, reduce wasted ad spend,
            optimize listings, and grow profitably across Seller Central and
            Vendor Central.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              {site.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">
              {site.secondaryCta}
            </a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:grid-cols-4"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="card-surface group flex items-center gap-3 p-4 transition-all hover:-translate-y-0.5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20">
                <b.icon className="h-4 w-4" />
              </span>
              <span className="text-[13px] font-medium text-white/85">
                {b.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Mock dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative mx-auto mt-16 max-w-5xl md:mt-20"
        >
          <div className="absolute -inset-x-10 -inset-y-6 -z-10 rounded-[2rem] bg-brand-500/10 blur-3xl" />
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="card-surface relative overflow-hidden p-4 md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[11px] text-white/40">
          Amazon Performance Dashboard
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { k: "Revenue (30d)", v: "$1.24M", d: "+18.4%", up: true },
          { k: "ACoS", v: "12.23%", d: "-5.8 pts", up: true },
          { k: "ROAS", v: "8.16x", d: "+1.4x", up: true },
          { k: "CTR", v: "0.94%", d: "+0.21%", up: true },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-xl border border-white/5 bg-ink-900/80 p-3"
          >
            <div className="text-[11px] uppercase tracking-wider text-white/45">
              {s.k}
            </div>
            <div className="mt-1 font-display text-xl font-semibold">
              {s.v}
            </div>
            <div
              className={`mt-1 inline-flex items-center gap-1 text-[11px] ${
                s.up ? "text-emerald-400" : "text-red-400"
              }`}
            >
              <TrendingUp className="h-3 w-3" /> {s.d}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="rounded-xl border border-white/5 bg-ink-900/80 p-4 md:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium text-white/70">
              Sponsored Products — Daily Sales
            </span>
            <span className="text-[10px] text-white/40">Last 30 days</span>
          </div>
          <ChartSvg />
        </div>
        <div className="rounded-xl border border-white/5 bg-ink-900/80 p-4">
          <span className="text-xs font-medium text-white/70">
            Top Keywords
          </span>
          <ul className="mt-3 space-y-2.5 text-[12px]">
            {[
              ["wireless earbuds", "#3"],
              ["stainless steel bottle", "#1"],
              ["yoga mat thick", "#2"],
              ["pet grooming kit", "#5"],
            ].map(([kw, rank]) => (
              <li
                key={kw}
                className="flex items-center justify-between text-white/75"
              >
                <span className="truncate">{kw}</span>
                <span className="rounded-md bg-brand-500/15 px-1.5 py-0.5 text-[10px] font-semibold text-brand-300">
                  {rank}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ChartSvg() {
  return (
    <svg viewBox="0 0 600 140" className="h-28 w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,110 C40,90 60,95 100,80 C150,60 180,75 220,60 C270,40 300,50 340,35 C390,18 420,30 460,22 C500,14 540,18 600,8 L600,140 L0,140 Z"
        fill="url(#g)"
      />
      <path
        d="M0,110 C40,90 60,95 100,80 C150,60 180,75 220,60 C270,40 300,50 340,35 C390,18 420,30 460,22 C500,14 540,18 600,8"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
      />
    </svg>
  );
}
