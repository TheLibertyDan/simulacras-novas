import { ImageResponse } from "next/og"

export const alt = "Simulacras Novas — The world's deepest political compass"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Static export at build time — no runtime dependencies.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 30% 20%, #1e293b 0%, #020617 60%, #000 100%)",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle grid pattern overlay via SVG background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(to right, #f43f5e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px), linear-gradient(45deg, #3b82f6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 22,
                height: 22,
                background: "#f43f5e",
                borderRadius: 4,
                display: "flex",
              }}
            />
            <div
              style={{
                width: 22,
                height: 22,
                background: "#22c55e",
                borderRadius: 4,
                display: "flex",
              }}
            />
            <div
              style={{
                width: 22,
                height: 22,
                background: "#3b82f6",
                borderRadius: 4,
                display: "flex",
              }}
            />
            <div
              style={{
                marginLeft: 12,
                color: "#f472b6",
                fontSize: 22,
                fontFamily: "monospace",
                letterSpacing: "0.08em",
                display: "flex",
              }}
            >
              8 AXES · 55 THINKERS
            </div>
          </div>

          <div
            style={{
              fontSize: 132,
              fontWeight: 800,
              color: "white",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            Simulacras Novas
          </div>

          <div
            style={{
              fontSize: 42,
              color: "#f9a8d4",
              marginTop: 28,
              fontWeight: 500,
              letterSpacing: "-0.01em",
              display: "flex",
            }}
          >
            The world's deepest political compass
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#94a3b8",
            fontFamily: "monospace",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ color: "#f43f5e", display: "flex" }}>Truth · Human Nature · Politics</div>
            <div style={{ color: "#a855f7", display: "flex" }}>Us or Everyone · Political Unit</div>
            <div style={{ color: "#06b6d4", display: "flex" }}>Order · Authority · Arc of Time</div>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "white",
              fontWeight: 600,
              letterSpacing: "-0.01em",
              display: "flex",
            }}
          >
            simulacras-novas.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
