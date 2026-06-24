"use client";

import Reveal from "./Reveal";

export default function PromoVideo() {
  return (
    <section id="promo" className="section-pad relative">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="eyebrow">See It In Action</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Watch how we help brands{" "}
              <span className="grad-text">scale on Amazon</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/60 md:text-base">
              A quick look at how our PPC, SEO and full account management come
              together to drive profitable growth.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-800/60 shadow-glow-lg">
            <video
              className="aspect-video w-full bg-black"
              controls
              preload="metadata"
              playsInline
              poster="/ebs-promo-poster.jpg"
            >
              <source src="/ebs-promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
