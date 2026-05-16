import { ImageResponse } from "next/og";

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
          padding: "72px",
          background: "#050505",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Atmospheric orange glow — top-left */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)",
            display: "flex",
          }}
        />
        {/* Atmospheric orange glow — bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -160,
            width: 640,
            height: 640,
            background:
              "radial-gradient(circle, rgba(245,158,11,0.22) 0%, rgba(245,158,11,0) 70%)",
            display: "flex",
          }}
        />

        {/* Top bar — brand mark + brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background:
                "linear-gradient(135deg, #fbbf24 0%, #f97316 55%, #ea580c 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="44"
              height="44"
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
              display: "flex",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            Ecommerce Business Solutions
          </div>
        </div>

        {/* Center — headline block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 999,
              border: "1px solid rgba(249,115,22,0.4)",
              background: "rgba(249,115,22,0.12)",
              color: "#fdba74",
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 2.5,
              textTransform: "uppercase",
            }}
          >
            Premium Amazon Growth Partner
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.8,
              maxWidth: 1020,
              color: "white",
            }}
          >
            Scale your Amazon brand with data-driven PPC, SEO & full account
            management.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#fdba74",
              fontWeight: 600,
            }}
          >
            Profit-focused growth for serious eCommerce brands.
          </div>
        </div>

        {/* Bottom bar — domain + service pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(255,255,255,0.75)",
              fontWeight: 500,
            }}
          >
            ecombusinesssolution.com
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["Amazon PPC", "Listing SEO", "Seller Central", "Vendor Central"].map(
              (label) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    padding: "10px 18px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.88)",
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
