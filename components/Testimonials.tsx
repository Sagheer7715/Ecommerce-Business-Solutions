"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Quote, Star, Play, Youtube } from "lucide-react";

// ----- EDITABLE VIDEO TESTIMONIALS -----
// Add more by pushing entries with a YouTube videoId.
const videoTestimonials = [
  {
    videoId: "G-_5D1jeWh8",
    name: "Client Video Testimonial",
    role: "Amazon Brand Owner",
    title: "What it's like working with Ecommerce Business Solutions",
  },
];

// ----- EDITABLE TEXT TESTIMONIALS -----
// Replace names/titles with real (consented) client quotes when available.
const items = [
  {
    quote:
      "Our ACoS dropped within the first month and the listings actually started converting. The communication was the best part — clear, weekly, no fluff.",
    name: "M. Patel",
    role: "Brand Owner, Home & Kitchen",
  },
  {
    quote:
      "We had a backlog of suppressed listings and flat-file errors for almost a year. They cleared it in two weeks and rebuilt our catalog properly.",
    name: "S. Reyes",
    role: "eCommerce Director",
  },
  {
    quote:
      "Hands down the most data-driven PPC management I've worked with. Decisions are explained, not handed down, and our TACoS finally makes sense.",
    name: "J. Lindqvist",
    role: "Founder, Outdoor Brand",
  },
  {
    quote:
      "Re-launched two ASINs and both hit page one within 60 days. The keyword strategy and A+ direction made a real difference on conversion.",
    name: "A. Khan",
    role: "Head of Marketplaces",
  },
  {
    quote:
      "I appreciated the honesty about what could and couldn't be done. No promises of overnight wins — just a clear plan and consistent execution.",
    name: "L. Martin",
    role: "Co-founder, Beauty Brand",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">Testimonials</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              What partners say about working with us
            </h2>
          </div>
        </Reveal>

        {/* Featured video testimonials */}
        {videoTestimonials.length > 0 && (
          <div
            className={`mb-10 grid gap-5 ${
              videoTestimonials.length === 1
                ? "mx-auto max-w-3xl"
                : "md:grid-cols-2"
            }`}
          >
            {videoTestimonials.map((v, i) => (
              <Reveal key={v.videoId} delay={i * 0.08}>
                <VideoCard {...v} />
              </Reveal>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <figure className="card-surface flex h-full flex-col p-6">
                <Quote className="h-6 w-6 text-brand-500/70" />
                <blockquote className="mt-4 text-[15px] leading-relaxed text-white/80">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <figcaption>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-white/45">{t.role}</div>
                  </figcaption>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-3.5 w-3.5 fill-brand-400 text-brand-400"
                      />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  videoId,
  name,
  role,
  title,
}: {
  videoId: string;
  name: string;
  role: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <figure className="card-surface group overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-ink-900">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
            className="group/play absolute inset-0 cursor-pointer"
          >
            <img
              src={thumb}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-black shadow-glow-lg transition-transform duration-300 group-hover/play:scale-110 md:h-20 md:w-20">
                <Play
                  className="ml-1 h-7 w-7 fill-black md:h-8 md:w-8"
                  strokeWidth={2.5}
                />
                <span className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-brand-500/60 blur-xl" />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 md:p-5">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-brand-300">
                <Youtube className="h-3.5 w-3.5" /> Client Testimonial
              </div>
              <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur">
                Watch on YouTube
              </span>
            </div>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between p-5">
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-white/45">{role}</div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              className="h-3.5 w-3.5 fill-brand-400 text-brand-400"
            />
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
