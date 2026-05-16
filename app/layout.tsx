import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const SITE_URL = "https://ecombusinesssolution.com";
const TITLE =
  "Ecommerce Business Solutions | Amazon PPC, SEO & Account Management Agency";
const DESCRIPTION =
  "Amazon PPC, Seller Central, Vendor Central, listing optimization, catalog troubleshooting, and marketplace growth services for brands looking to scale profitably.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Ecommerce Business Solutions",
  },
  description: DESCRIPTION,
  keywords: [
    "Amazon PPC agency",
    "Amazon account management",
    "Seller Central",
    "Vendor Central",
    "Amazon listing optimization",
    "Amazon SEO",
    "eCommerce growth agency",
    "Sponsored Products",
    "Sponsored Brands",
    "Amazon brand manager",
  ],
  authors: [{ name: "Ecommerce Business Solutions" }],
  creator: "Ecommerce Business Solutions",
  publisher: "Ecommerce Business Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ecommerce Business Solutions",
    title: "Ecommerce Business Solutions | Amazon Growth Partner",
    description:
      "Premium Amazon PPC, SEO and account management services built for profitable scaling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Business Solutions | Amazon Growth Partner",
    description:
      "Premium Amazon PPC, SEO and account management services built for profitable scaling.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Business Services",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ecommerce Business Solutions",
  alternateName: "EBS",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  email: site.email,
  sameAs: [site.facebook],
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Amazon PPC Management",
    "Amazon Account Management",
    "Amazon Listing Optimization",
    "Amazon SEO",
    "A+ Content & Brand Store",
    "Catalog & Flat File Troubleshooting",
    "Product Launch & Market Research",
    "Multi-Marketplace Support",
  ],
  knowsAbout: [
    "Amazon Seller Central",
    "Amazon Vendor Central",
    "Sponsored Products",
    "Sponsored Brands",
    "Sponsored Display",
    "Amazon SEO",
    "eCommerce Growth",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Amazon Growth Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Amazon PPC Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Amazon Full Account Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Listing Optimization & SEO",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
