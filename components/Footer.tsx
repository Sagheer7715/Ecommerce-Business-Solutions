"use client";

import { BarChart3, Facebook, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

const services = [
  "Amazon Account Management",
  "Amazon PPC",
  "Listing SEO",
  "A+ Content & Brand Store",
  "Catalog Troubleshooting",
  "Multi-Marketplace",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                <BarChart3 className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-base font-semibold">
                {site.brand}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-white/55">
              Amazon PPC & Marketplace Growth Partner. Helping brands scale
              profitably across Seller Central, Vendor Central, and beyond.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-brand-500/40 hover:bg-brand-500/10 hover:text-brand-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Quick Links
            </div>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Services
            </div>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 transition-colors hover:text-brand-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all hover:text-brand-300"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="hover:text-brand-300"
                >
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-white/60">{site.address.display}</li>
              <li>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-300"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </div>
          <div>Amazon PPC, SEO & Account Management Agency</div>
        </div>
      </div>
    </footer>
  );
}
