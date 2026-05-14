# Ecommerce Business Solutions — Agency Website

Premium, conversion-focused agency site for an Amazon / eCommerce growth service. Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Node 18.17+ recommended.

## Project structure

```
app/
  layout.tsx          # fonts, metadata, global wrapper
  page.tsx            # composes all sections
  globals.css         # design tokens, buttons, utilities
components/
  Header.tsx          # sticky nav + mobile menu
  Hero.tsx            # headline, CTAs, dashboard mock
  Metrics.tsx         # featured stat cards
  Services.tsx        # 8 service cards
  WhyChooseUs.tsx     # 6 benefit cards
  Process.tsx         # 5-step process
  CaseStudies.tsx     # results cards (placeholders)
  Industries.tsx      # categories served
  Testimonials.tsx    # placeholder testimonials
  About.tsx           # founder bio
  CTA.tsx             # mid-page conversion block
  FAQ.tsx             # accordion FAQs
  Contact.tsx         # lead-capture form
  Footer.tsx
  Reveal.tsx          # shared scroll-animation wrapper
lib/
  site.ts             # brand name, email, social, nav, CTA labels
tailwind.config.ts    # color palette, animations
```

---

## How to edit content (no code knowledge needed)

### 1. Brand name, email, social links, CTAs
Edit **`lib/site.ts`**. One file controls the brand name, email, Facebook URL, and CTA button labels site-wide.

### 2. Logo
The logo is currently a styled icon + brand text in `components/Header.tsx` and `components/Footer.tsx`.
- To change the **text only**: edit `site.brand` in `lib/site.ts`.
- To swap to an **image logo**: drop a file into `public/logo.svg`, then in `Header.tsx` replace the `<span class="grid h-9 w-9 ...">…</span>` icon with `<img src="/logo.svg" alt="Logo" className="h-9 w-9" />`.

### 3. Metrics (Revenue Managed, PPC Sales, etc.)
Edit the `metrics` array at the top of **`components/Metrics.tsx`**. Replace numbers any time. Marked with a clear `// EDITABLE METRICS` comment.

### 4. Case study numbers
Edit the `cases` array in **`components/CaseStudies.tsx`**.
> The file includes a note reminding you to replace with verified, client-approved figures before publishing.

### 5. Services
Edit the `services` array in **`components/Services.tsx`** to add/remove cards or change icons. Icons come from [lucide-react](https://lucide.dev/icons).

### 6. Testimonials
Edit the `items` array in **`components/Testimonials.tsx`**. Replace placeholder names/roles with real, consented quotes.

### 7. FAQ questions / answers
Edit the `faqs` array in **`components/FAQ.tsx`**.

### 8. About section text
Edit the paragraphs directly in **`components/About.tsx`**. The expertise pill list is the `expertise` array at the top.

### 9. SEO meta title & description
Edit the `metadata` object in **`app/layout.tsx`**.

### 10. Colors & theme
All tokens live in **`tailwind.config.ts`** (look for `colors.brand` and `colors.ink`). Change the orange/gold to any palette and the whole site updates.

---

## Contact form

Currently the form opens the visitor's email client (`mailto:`) with their inquiry pre-filled. This works on every host with zero setup.

**To upgrade to a hosted form** (recommended once you have traffic):
- **Formspree:** create a form at formspree.io, then in `components/Contact.tsx` swap the `onSubmit` handler for a `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: fd })`.
- **Resend / Plunk / Mailgun + Next.js API route:** add `app/api/contact/route.ts` to POST the form to your provider, then have the form `fetch("/api/contact")`.

---

## Deploy

### Vercel (recommended — zero config)
```bash
# from project root
npx vercel
# follow prompts; subsequent deploys: `vercel --prod`
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new).

### Netlify
```bash
npm run build
# Drag the .next folder into netlify.com, OR connect the GitHub repo with:
#   Build command:    npm run build
#   Publish directory: .next
```

---

## Placeholder areas you can replace later

| Where | What to drop in |
|---|---|
| `components/About.tsx` | Real founder photo — replace the gradient placeholder `<div>` with an `<img src="/founder.jpg" />` |
| `components/Hero.tsx` (DashboardMock) | A real screenshot of a Seller Central dashboard if you'd like |
| `public/` | Drop client logos here (`logos/client1.svg`, etc.) and add a logo strip to `Hero.tsx` |
| `components/CaseStudies.tsx` | Verified case study numbers + a screenshot section |
| Add a `Certifications.tsx` | Any Amazon / Helium 10 / Google certifications you hold |

---

## Tech notes

- **Animations:** Framer Motion. Respects `prefers-reduced-motion`.
- **Smooth scroll:** native CSS (`html { scroll-behavior: smooth }`).
- **Fonts:** Inter + Sora via `next/font` (self-hosted, zero layout shift).
- **Icons:** lucide-react (tree-shaken, lightweight).
- **Type safety:** strict TypeScript.
- **Accessibility:** semantic landmarks, focus rings, reduced-motion support, accessible accordion.
- **Performance:** static-rendered single page, no client JS for content sections except the few with `"use client"`.

Built to outshine generic freelancer sites with a clean, premium dark UI.
