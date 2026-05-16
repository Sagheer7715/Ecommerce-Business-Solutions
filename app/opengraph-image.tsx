import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Ecommerce Business Solutions — Amazon PPC, SEO & Account Management Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 20% 10%, rgba(249,115,22,0.28), transparent 55%), radial-gradient(circle at 85% 95%, rgba(245,158,11,0.18), transparent 55%), #050505",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top bar — brand mark + brand name */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, #fbbf24 0%, #f97316 55%, #ea580c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Ecommerce Business Solutions
          </div>
        </div>

        {/* Center — headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(249,115,22,0.4)",
              background: "rgba(249,115,22,0.12)",
              color: "#fdba74",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Premium Amazon Growth Partner
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
            }}
          >
            Scale your Amazon brand with{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fde68a 0%, #f59e0b 50%, #ea580c 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              data-driven PPC, SEO
            </span>{" "}
            & full account management.
          </div>
        </div>

        {/* Bottom bar — domain + service pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.7)",
              fontWeight: 500,
            }}
          >
            ecombusinesssolution.com
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            {["Amazon PPC", "Listing SEO", "Seller Central", "Vendor Central"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
