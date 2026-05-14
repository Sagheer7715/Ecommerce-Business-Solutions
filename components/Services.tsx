"use client";

import Reveal from "./Reveal";
import {
  LayoutDashboard,
  Target,
  Search,
  Sparkles,
  FileSpreadsheet,
  Rocket,
  ShieldCheck,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Amazon Full Account Management",
    desc: "Complete day-to-day Seller Central and Vendor Central management, performance monitoring, catalog support, and growth planning.",
  },
  {
    icon: Target,
    title: "Amazon PPC Management",
    desc: "Sponsored Products, Sponsored Brands, Sponsored Display, campaign restructuring, bid optimization, search term analysis, and ACoS/ROAS improvement.",
  },
  {
    icon: Search,
    title: "Listing Optimization & SEO",
    desc: "Keyword research, SEO titles, bullet points, descriptions, backend search terms, and conversion-focused content improvements.",
  },
  {
    icon: Sparkles,
    title: "A+ Content & Brand Store Guidance",
    desc: "Premium content direction, brand store structure, visual strategy, and conversion-focused recommendations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Flat File & Catalog Troubleshooting",
    desc: "Bulk uploads, variation setup, listing errors, suppressed listings, parent-child issues, category fixes, and catalog case handling.",
  },
  {
    icon: Rocket,
    title: "Product Launch & Market Research",
    desc: "Competitor analysis, keyword opportunity research, pricing review, launch strategy, and product positioning.",
  },
  {
    icon: ShieldCheck,
    title: "Reimbursements & Account Health",
    desc: "Support with reimbursement opportunities, Amazon case logs, delivery issues, account health notices, and operational troubleshooting.",
  },
  {
    icon: Globe,
    title: "Multi-Marketplace Support",
    desc: "Amazon, Shopify, Etsy, eBay, TikTok Shop, Walmart, and other eCommerce platform support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">What We Do</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Full-stack Amazon services for{" "}
                <span className="grad-text">profitable scaling</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/60 md:text-base">
              From PPC and listing SEO to catalog operations and brand strategy
              — every service is designed to compound into long-term growth.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <a
                href="#contact"
                className="card-surface group block h-full overflow-hidden p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/20 bg-brand-500/10 text-brand-400 transition-colors group-hover:bg-brand-500 group-hover:text-black">
                    <s.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-400" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug md:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                  {s.desc}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
