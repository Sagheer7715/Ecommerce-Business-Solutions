"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Do you manage Amazon PPC only, or full accounts?",
    a: "Both. Many clients start with PPC and expand into full Seller Central or Vendor Central management — catalog ops, listing SEO, A+ content, account health, and growth strategy.",
  },
  {
    q: "Can you work with both Seller Central and Vendor Central?",
    a: "Yes. We have hands-on experience in both — including flat-file uploads, variation setup, case logs, chargebacks, and vendor-specific PPC structures.",
  },
  {
    q: "Do you help with listing optimization?",
    a: "Absolutely. Listing optimization is one of the highest-leverage activities on Amazon. We cover keyword research, titles, bullets, descriptions, backend search terms, and conversion-focused content improvements.",
  },
  {
    q: "Can you fix suppressed listings and catalog issues?",
    a: "Yes — suppressed listings, stranded inventory, parent-child variation problems, category miscategorization, missing attributes, and bulk catalog cleanups are all part of the workflow.",
  },
  {
    q: "Do you work with Shopify-to-Amazon product migration?",
    a: "We do. We can help you take an existing Shopify catalog onto Amazon properly — variation structure, content adaptation, image guidelines, and a launch plan.",
  },
  {
    q: "How soon can we see PPC improvements?",
    a: "Most accounts see measurable improvements within the first 30–60 days after restructuring campaigns and tightening targeting. Long-term gains compound from listing quality, SEO, and brand-building over 3–6 months.",
  },
  {
    q: "Do you guarantee sales or ranking?",
    a: "No reputable Amazon partner can honestly guarantee specific sales or rank — results depend on product, market, listing quality, budget, and competition. What we guarantee is a clear strategy, transparent execution, and honest reporting.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad relative">
      <div className="container-px mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Frequently asked <span className="grad-text">questions</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={`card-surface overflow-hidden transition-all ${
                    isOpen ? "border-brand-500/30 shadow-glow" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-[15px] font-semibold md:text-base">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-brand-400 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-5 pb-5 text-sm leading-relaxed text-white/65 md:px-6 md:pb-6">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
