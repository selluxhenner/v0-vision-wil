import { Gift } from "lucide-react"
import Link from "next/link"

const features = [
  { label: "Flexibel", sub: "Wähle deinen Betrag" },
  { label: "Digital", sub: "Sofort per E-Mail" },
  { label: "Persönlich", sub: "Mit individueller Nachricht" },
]

export function HomeGiftCardBanner() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:px-6 md:py-24"
      style={{ background: "#070c14", position: "relative", overflow: "hidden" }}
    >

      {/* Ambient glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,232,0.04) 0%, transparent 70%)",
      }} />

      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Top rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div style={{ height: 1, width: 40, background: "#00d4e8" }} />
          <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>
            Geschenkkarte
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
        </div>

        {/* Main card */}
        <div
          className="grid grid-cols-1 gap-10 px-6 py-10 sm:px-8 sm:py-12 md:grid-cols-2 md:gap-12 md:px-12 md:py-14"
          style={{
            border: "1px solid rgba(255,255,255,0.07)",
            borderTop: "2px solid #00d4e8",
            background: "#050810",
            alignItems: "center",
          }}
        >

          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Gift style={{ width: 16, height: 16, color: "#00d4e8" }} />
              <span style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00d4e8" }}>
                Für jeden Anlass
              </span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.05,
              color: "#ffffff", margin: "0 0 20px",
            }}>
              Vision<br />
              <span style={{ color: "#00d4e8" }}>Geschenkkarte</span>
            </h2>

            <p style={{
              fontSize: "0.97rem", lineHeight: 1.8,
              color: "rgba(255,255,255,0.5)",
              margin: "0 0 40px",
            }}>
              Das perfekte Geschenk für Cocktail-Liebhaber und Geniesser. Verschenke unvergessliche Momente im Vision Kunst Cafébar.
            </p>

            <Link
              href="https://giftcard.sumup.io/order/G6RCVPK/vision-kunst-cafebar-gmbh"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#00d4e8", color: "#050810",
                fontSize: "0.72rem", fontWeight: 800,
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "15px 28px", textDecoration: "none",
                transition: "background 0.2s ease",
              }}
            >
              <Gift style={{ width: 14, height: 14 }} />
              Jetzt kaufen
            </Link>

            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.2)", marginTop: 16, lineHeight: 1.6 }}>
              Einlösbar für alle Speisen und Getränke im Vision Kunst Cafébar
            </p>
          </div>

          {/* Right — feature cells */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.05)" }}>
            {features.map((f) => (
              <div
                key={f.label}
                style={{
                  background: "#070c14",
                  padding: "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <span style={{
                  fontSize: "0.75rem", fontWeight: 800,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                }}>
                  {f.label}
                </span>
                <span style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.35)",
                  textAlign: "right",
                }}>
                  {f.sub}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}