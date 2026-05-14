"use client";

import Reveal from "./Reveal";
import {
  Home,
  Cpu,
  Sparkles,
  HeartPulse,
  Dumbbell,
  Hammer,
  ShoppingBasket,
  Dog,
} from "lucide-react";

const industries = [
  { icon: Home, label: "Home & Kitchen" },
  { icon: Cpu, label: "Electronics" },
  { icon: Sparkles, label: "Beauty & Personal Care" },
  { icon: HeartPulse, label: "Health & Household" },
  { icon: Dumbbell, label: "Sports & Outdoors" },
  { icon: Hammer, label: "Tools & Home Improvement" },
  { icon: ShoppingBasket, label: "Grocery" },
  { icon: Dog, label: "Pet Supplies" },
];

export default function Industries() {
  return (
    <section className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="eyebrow">Categories We Serve</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Experience across <span className="grad-text">high-velocity</span> Amazon categories
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {industries.map((i, idx) => (
            <Reveal key={i.label} delay={(idx % 4) * 0.05}>
              <div className="card-surface group flex h-full items-center gap-3 p-4 transition-all hover:-translate-y-0.5 hover:shadow-glow">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500 group-hover:text-black group-hover:ring-brand-500">
                  <i.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-white/85">
                  {i.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
