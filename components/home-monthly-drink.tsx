"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HomeMonthlyDrink() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:px-6 md:py-24"
      style={{ background: "#070c14" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{
            background: "rgba(255,255,255,0.05)",
          }}
        >

          {/* Image cell */}
          <div
            className="min-h-[260px] md:min-h-[420px]"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <img
              src="/drinks/image (29).JPG"
              alt="Mystery Drink des Monats"
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                filter: "blur(10px) brightness(0.45)",
                transform: "scale(1.1)",
                display: "block",
              }}
            />
            {/* Gradient overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(7,12,20,0.2), rgba(7,12,20,0.7))",
            }} />

            {/* Mystery badge */}
            <div style={{
              position: "absolute", top: 28, left: 28,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#00d4e8",
                boxShadow: "0 0 8px #00d4e8",
              }} />
              <span style={{
                fontSize: "0.62rem", fontWeight: 700,
                letterSpacing: "0.25em", textTransform: "uppercase",
                color: "#00d4e8",
              }}>
                Mystery Drink
              </span>
            </div>

            {/* Large blurred question mark */}
            <div
              className="text-[6rem] md:text-[9rem]"
              style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: 900,
                color: "rgba(0,212,232,0.08)",
                userSelect: "none", pointerEvents: "none",
                fontFamily: "Georgia, serif",
              }}
            >
              ?
            </div>
          </div>

          {/* Text cell */}
          <div
            className="px-6 py-9 sm:px-8 sm:py-10 md:px-11 md:py-12"
            style={{
              background: "#070c14",
              borderTop: "2px solid #00d4e8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 0,
            }}
          >

            <p style={{
              fontSize: "0.62rem", fontWeight: 700,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)", marginBottom: 16,
            }}>
              Jeden Monat neu
            </p>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.02em", lineHeight: 1.05,
              color: "#ffffff", margin: "0 0 24px",
            }}>
              Drink des{" "}
              <span style={{ color: "#00d4e8" }}>Monats</span>
            </h2>

            <p style={{
              fontSize: "1rem", lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              margin: "0 0 12px",
            }}>
              Ein geheimer Cocktail, exklusiv für diesen Monat.
              Nur an der Bar erfahrst du, was drin steckt.
            </p>

            <p style={{
              fontSize: "0.82rem", fontStyle: "italic",
              color: "rgba(255,255,255,0.25)",
              margin: "0 0 40px",
            }}>
              Limitiert. Nicht auf der Karte.
            </p>

            {/* Divider */}
            <div style={{ width: 40, height: 1, background: "rgba(0,212,232,0.3)", marginBottom: 32 }} />

            <Link
              href="/drinks"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#00d4e8", color: "#050810",
                fontSize: "0.72rem", fontWeight: 800,
                letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "15px 28px", textDecoration: "none",
                width: "fit-content",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#33ddf0")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00d4e8")}
            >
              Jetzt entdecken
              <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  )
}