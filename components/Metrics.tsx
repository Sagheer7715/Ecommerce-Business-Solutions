"use client";

import Reveal from "./Reveal";
import { DollarSign, BarChart3, Calendar, ShieldCheck } from "lucide-react";

// ----- EDITABLE METRICS -----
// Replace these numbers with verified figures any time.
const metrics = [
  {
    icon: DollarSign,
    value: "$560M+",
    label: "Revenue Managed",
    sub: "Across multiple brands & marketplaces",
  },
  {
    icon: BarChart3,
    value: "$73M+",
    label: "PPC Sales Managed",
    sub: "Sponsored Products, Brands & Display",
  },
  {
    icon: Calendar,
    value: "8+ Years",
    label: "eCommerce Experience",
    sub: "Hands-on Seller & Vendor Central",
  },
  {
    icon: ShieldCheck,
    value: "Expert",
    label: "Seller & Vendor Central",
    sub: "Catalog, PPC, ops & growth",
  },
];

export default function Metrics() {
  return (
    <section className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">By the Numbers</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Trusted results from years of <span className="grad-text">hands-on</span> Amazon work
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <div className="card-surface group h-full p-6 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                    <m.icon className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-brand-500/50 to-transparent" />
                </div>
                <div className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">
                  {m.value}
                </div>
                <div className="mt-1 text-sm font-medium text-white/85">
                  {m.label}
                </div>
                <div className="mt-1 text-xs text-white/45">{m.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
