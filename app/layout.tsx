import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

export const metadata: Metadata = {
  title:
    "Ecommerce Business Solutions | Amazon PPC, SEO & Account Management Agency",
  description:
    "Amazon PPC, Seller Central, Vendor Central, listing optimization, catalog troubleshooting, and marketplace growth services for brands looking to scale profitably.",
  keywords: [
    "Amazon PPC agency",
    "Amazon account management",
    "Seller Central",
    "Vendor Central",
    "Amazon listing optimization",
    "Amazon SEO",
    "eCommerce growth agency",
  ],
  openGraph: {
    title: "Ecommerce Business Solutions | Amazon Growth Partner",
    description:
      "Premium Amazon PPC, SEO and account management services built for profitable scaling.",
    type: "website",
  },
  metadataBase: new URL("https://ecommercebusinesssolutions.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-ink-950 font-sans text-white antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
