"use client";

import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-pad relative">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/25 bg-gradient-to-br from-ink-800/80 via-ink-900 to-black p-8 md:p-14 lg:p-20">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="grid-bg absolute inset-0 opacity-40" />

            <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <span className="eyebrow">Let&apos;s Grow</span>
                <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                  Ready to grow your Amazon brand{" "}
                  <span className="grad-text">profitably?</span>
                </h2>
                <p className="mt-5 max-w-xl text-white/65">
                  Get a free account audit — we&apos;ll review your PPC,
                  listings, and account health and send back a written plan
                  with the biggest wins.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <a href="#contact" className="btn-primary w-full justify-center lg:w-auto">
                  Book a Free Amazon Audit <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-secondary w-full justify-center lg:w-auto">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
