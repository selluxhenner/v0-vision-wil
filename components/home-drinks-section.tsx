"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import signatureCocktails from "@/lib/signature-cocktails"

const carouselDrinks = signatureCocktails.filter((c) =>
  ["Blue Vision", "Caipirinha", "Gin Basil", "Watermelon Sugar", "Whisky Sour", "Cuba Libre", "Espresso Martini"].includes(c.name)
)

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export function HomeDrinksSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" })
  }

  return (
    <section style={{ background: "#050810", padding: "96px 0" }}>

      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.1 }}
        style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}
      >
        <div>
          <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
            <div style={{ height: 1, width: 40, background: "#00d4e8" }} />
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>
              Signature Cocktails
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900, textTransform: "uppercase",
              letterSpacing: "-0.02em", color: "#fff",
              margin: 0, lineHeight: 1.05,
            }}
          >
            Unsere <span style={{ color: "#00d4e8" }}>Drinks</span>
          </motion.h2>
        </div>

        {/* Arrow controls */}
        <motion.div variants={fadeUp} style={{ display: "flex", gap: 8 }}>
          {(["left", "right"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              style={{
                width: 44, height: 44,
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.4)",
                cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00d4e8"; e.currentTarget.style.color = "#00d4e8" }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)" }}
            >
              {dir === "left"
                ? <ArrowLeft style={{ width: 16, height: 16 }} />
                : <ArrowRight style={{ width: 16, height: 16 }} />}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Scrollable track — cards stagger in */}
      <motion.div
        ref={scrollRef}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
        style={{
          display: "flex",
          gap: 4,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(24px, calc((100vw - 1100px) / 2))",
          paddingRight: "max(24px, calc((100vw - 1100px) / 2))",
          paddingBottom: 4,
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {carouselDrinks.map((cocktail, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 32, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              minWidth: 300,
              maxWidth: 300,
              scrollSnapAlign: "start",
              flexShrink: 0,
              background: "#070c14",
              border: "1px solid rgba(255,255,255,0.06)",
              borderTop: "2px solid transparent",
              overflow: "hidden",
              cursor: "default",
              willChange: "transform",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderTopColor = "#00d4e8"
              ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,232,0.2)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent"
              ;(e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", height: 200, overflow: "hidden", background: "#0a0f1a" }}>
              <motion.img
                src={cocktail.image || "/placeholder.svg"}
                alt={cocktail.name}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(7,12,20,0.85) 0%, transparent 55%)",
              }} />
              <div style={{
                position: "absolute", top: 16, right: 16,
                fontSize: "0.6rem", fontWeight: 700,
                letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)",
              }}>
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: "20px 22px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, gap: 8 }}>
                <h4 style={{
                  fontSize: "0.85rem", fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.06em",
                  color: "#ffffff", margin: 0, lineHeight: 1.2,
                }}>
                  {cocktail.name}
                </h4>
                <span style={{
                  fontSize: "0.9rem", fontWeight: 700,
                  color: "#00d4e8", whiteSpace: "nowrap", flexShrink: 0,
                }}>
                  {cocktail.price}
                </span>
              </div>
              <p style={{
                fontSize: "0.8rem", lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
                margin: 0,
              }}>
                {cocktail.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}