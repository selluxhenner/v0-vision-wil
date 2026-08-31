"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Variants } from "framer-motion";


// Toggle this to true and fill in event details when you have an upcoming event
const CURRENT_EVENT: {
  active: boolean
  title: string
  date: string
  description: string
  imageSrc: string
} = {
  active: false,
  title: "",
  date: "",
  description: "",
  imageSrc: "",
}

const eventImage = CURRENT_EVENT.active ? CURRENT_EVENT.imageSrc : "events/wm-live2.jpg"
const eventTitle = CURRENT_EVENT.active ? CURRENT_EVENT.title : "WM Live bei Vision"
const eventSubtext = CURRENT_EVENT.active 
  ? CURRENT_EVENT.description
  : "Alle Spiele live auf 2 Bildschirmen. Schweizer Tor = Freibier. Schweizer Sieg = Freibier für alle. Dazu unser WM-Special: Stange Bier + Wurst für nur CHF 9.–"
  
const images = [
  { src: "/images/bar-neon.png", alt: "Bar mit Neon" },
  { src: "/inside/image1.jpeg", alt: "Lounge Bereich" },
  { src: "/inside/image2.jpeg", alt: "Von Aussen" },
  { src: "/images/cocktail-poster.png", alt: "Cocktail Art" },
  { src: "/images/espresso.png", alt: "Barista Kaffee" },
  { src: "/images/charcuterie.png", alt: "Apéro Platte" },
]

const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export function HomeEvents() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#050810" }}>
      <div className="px-4 sm:px-6" style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* ── Events block ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          style={{ marginBottom: 96 }}
        >
          {/* Section label */}
          <motion.div variants={itemUp} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
            <div style={{ height: 1, width: 40, background: "#00d4e8" }} />
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>
              Events
            </span>
          </motion.div>

          {CURRENT_EVENT.active ? (
            /* ── Active event card ── */
            <motion.div
              variants={itemUp}
              className="grid grid-cols-1 md:grid-cols-2"
              style={{
                border: "1px solid rgba(0,212,232,0.2)",
                borderTop: "2px solid #00d4e8",
                overflow: "hidden",
              }}
            >
              <div
                className="px-6 py-9 sm:px-8 sm:py-10 md:px-10 md:py-12"
                style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <Calendar style={{ width: 14, height: 14, color: "#00d4e8" }} />
                  <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00d4e8", fontWeight: 700 }}>
                    {CURRENT_EVENT.date}
                  </span>
                </div>
                <h3 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, textTransform: "uppercase", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 16 }}>
                  {CURRENT_EVENT.title}
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
                  {CURRENT_EVENT.description}
                </p>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#00d4e8", color: "#050810",
                  fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "14px 28px", textDecoration: "none", width: "fit-content",
                  transition: "background 0.2s",
                }}>
                  Tisch reservieren <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
              </div>
              <div
                className="min-h-[240px] md:min-h-[360px]"
                style={{ position: "relative", background: "#0a0f1a" }}
              >
                <img src={CURRENT_EVENT.imageSrc} alt={CURRENT_EVENT.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,8,16,0.4), transparent)" }} />
              </div>
            </motion.div>
          ) : (
            /* ── No current event — teaser ── */
            <motion.div variants={itemUp}>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-px"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                {/* Main teaser cell */}
                <div
                  className="px-6 py-9 sm:px-8 sm:py-10 md:col-span-2 md:px-10 md:py-12"
                  style={{
                    background: "#070c14",
                    borderTop: "2px solid rgba(0,212,232,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: 220,
                  }}
                >
                  <div>
                    <h3 style={{
                      fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      color: "rgba(255, 255, 255)",
                      lineHeight: 1.05,
                      marginBottom: 16,
                    }}>
                      {eventImage ? eventTitle : "Demnächst"}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.7, maxWidth: 420 }}>
                      {eventImage
                        ? eventSubtext
                        : "Wir planen regelmässig besondere Abende – Live-Musik, Kunstausstellungen und mehr. Folge uns auf Instagram, um nichts zu verpassen."}
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/vision_wil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      marginTop: 28,
                      display: "inline-flex", alignItems: "center", gap: 8,
                      fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "#00d4e8", textDecoration: "none",
                      borderBottom: "1px solid rgba(0,212,232,0.3)", paddingBottom: 2,
                      width: "fit-content",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00d4e8")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,232,0.3)")}
                  >
                    @vision_wil auf Instagram →
                  </a>
                </div>
                {/* Calendar placeholder cell */}
                {eventImage ? (
                  <div style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 160,
                  }}>
                    <img
                      src={eventImage}
                      alt="Event"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ) : (
                  <div style={{
                    background: "#070c14",
                    borderTop: "2px solid transparent",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 32,
                    gap: 12,
                    minHeight: 160,
                  }}>
                    <Calendar style={{ width: 28, height: 28, color: "rgba(0,212,232,0.2)" }} />
                    <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.15)", textAlign: "center", lineHeight: 1.6 }}>
                      Demnächst<br />bekannt
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* ── Gallery / Impressionen ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {/* Section header */}
          <motion.div variants={itemUp} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
                <div style={{ height: 1, width: 40, background: "#00d4e8" }} />
                <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>
                  Galerie
                </span>
              </div>
              <h2 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 900, textTransform: "uppercase",
                letterSpacing: "-0.02em", color: "#fff", margin: 0, lineHeight: 1.05,
              }}>
                Impressionen
              </h2>
            </div>
            <Link href="/about" style={{
              fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
              textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: 2, transition: "color 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00d4e8"; e.currentTarget.style.borderColor = "rgba(0,212,232,0.4)" }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)" }}
            >
              Galerie entdecken →
            </Link>
          </motion.div>

          {/* Image grid — asymmetric on desktop, simple 2-col on mobile */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-1 md:grid-cols-[2fr_1fr_1fr]"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemUp}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={
                  index === 0
                    ? "col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[2/1]"
                    : index === 3
                      ? "col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[2/1]"
                      : "aspect-square"
                }
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#0a0f1a",
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(5,8,16,0.7) 0%, transparent 60%)",
                  transition: "opacity 0.3s",
                }} />
                {/* Alt text label on hover */}
                <div style={{
                  position: "absolute", bottom: 12, left: 14,
                  fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)", fontWeight: 600,
                }}>
                  {image.alt}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA row */}
          <motion.div
            variants={itemUp}
            className="flex flex-col gap-3 md:flex-row mt-5"
          >
            <Link href="/drinks" style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "18px 24px",
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none", transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,212,232,0.04)"; e.currentTarget.style.borderColor = "rgba(0,212,232,0.2)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                Getränkekarte ansehen
              </span>
              <ArrowRight style={{ width: 14, height: 14, color: "#00d4e8" }} />
            </Link>
            <Link href="/about" style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "18px 24px",
              background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
              textDecoration: "none", transition: "background 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,212,232,0.04)"; e.currentTarget.style.borderColor = "rgba(0,212,232,0.2)" }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)" }}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
                Galerie entdecken
              </span>
              <ArrowRight style={{ width: 14, height: 14, color: "#00d4e8" }} />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}