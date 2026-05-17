"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  Mail,
  Facebook,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { site } from "@/lib/site";

const revenueOptions = [
  "Pre-launch",
  "Under $10K / month",
  "$10K–$50K / month",
  "$50K–$250K / month",
  "$250K–$1M / month",
  "$1M+ / month",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // Form posts via mailto so the site works out of the box on Vercel/Netlify.
  // To use Formspree/Resend later: swap the onSubmit and `action` accordingly.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const email = fd.get("email");
    const brand = fd.get("brand");
    const revenue = fd.get("revenue");
    const challenge = fd.get("challenge");
    const message = fd.get("message");

    const subject = encodeURIComponent(`Audit request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nBrand/Store: ${brand}\nMonthly Amazon Revenue: ${revenue}\nMain Challenge: ${challenge}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Contact</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Let&apos;s talk about your <span className="grad-text">growth plan</span>
            </h2>
            <p className="mt-5 text-white/65">
              Fill out the form and you&apos;ll get a written response within
              one business day with next steps, a quick audit, and what we
              think the highest-leverage moves are for your account.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="card-surface flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/45">
                    Email
                  </div>
                  <div className="text-sm font-medium">{site.email}</div>
                </div>
              </a>

              <a
                href={`tel:${site.phone}`}
                className="card-surface flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/45">
                    Phone / WhatsApp
                  </div>
                  <div className="text-sm font-medium">{site.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex items-center gap-4 p-4 transition-all hover:-translate-y-0.5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                  <Facebook className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/45">
                    Facebook
                  </div>
                  <div className="text-sm font-medium">
                    @AmazonVirtualsolutions
                  </div>
                </div>
              </a>

              <div className="card-surface flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-black shadow-glow">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/45">
                    US Office
                  </div>
                  <div className="text-sm font-medium">
                    {site.address.display}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="card-surface space-y-4 p-6 md:p-8"
            >
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field label="Your Name" name="name" placeholder="Jane Doe" required />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="jane@brand.com"
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Field
                  label="Brand / Store Name"
                  name="brand"
                  placeholder="Your brand on Amazon"
                />
                <Select
                  label="Monthly Amazon Revenue"
                  name="revenue"
                  options={revenueOptions}
                />
              </div>

              <Field
                label="Main Challenge"
                name="challenge"
                placeholder="e.g. high ACoS, listing not ranking, suppressed listings, scaling PPC profitably"
              />

              <Textarea
                label="Message"
                name="message"
                placeholder="Tell us a bit about your goals and where you'd like help..."
              />

              <button type="submit" className="btn-primary w-full sm:w-auto">
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Email opened — send to finish
                  </>
                ) : (
                  <>
                    Send Inquiry <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-white/35">
                By submitting, you agree to be contacted about your inquiry. We
                never share your data with third parties.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest text-white/55">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/8 bg-ink-900/80 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-500/60 focus:bg-ink-900"
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest text-white/55">
        {label}
      </span>
      <textarea
        name={name}
        rows={5}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-white/8 bg-ink-900/80 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-brand-500/60 focus:bg-ink-900"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-widest text-white/55">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-white/8 bg-ink-900/80 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-500/60 focus:bg-ink-900"
      >
        <option value="" disabled className="bg-ink-900">
          Select range
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink-900">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
