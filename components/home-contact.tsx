"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function HomeContact() {
  return (
    <section
      className="px-4 py-16 sm:px-6 md:px-6 md:py-24"
      style={{ background: "#070c14" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
          style={{ marginBottom: 48 }}
        >
          <motion.div variants={fadeUp} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
            <div style={{ height: 1, width: 40, background: "#00d4e8" }} />
            <span style={{ fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", fontWeight: 700 }}>
              Besuche uns
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
            Wil SG · <span style={{ color: "#00d4e8" }}>Marktgasse 43</span>
          </motion.h2>
        </motion.div>

        {/* Main grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 gap-px md:grid-cols-2"
          style={{
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {/* Text cell */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="px-6 py-9 sm:px-8 sm:py-10 md:px-11 md:py-12"
            style={{
              background: "#070c14",
              borderTop: "2px solid #00d4e8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p style={{
              fontSize: "0.97rem",
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.55)",
              margin: "0 0 40px",
            }}>
              Mitten in der Altstadt von Wil, an der Marktgasse 43, findest du die Vision Kunst
              Cafébar – eine der vielseitigsten Lokalitäten der Region. Mit Herz verbinden wir
              erstklassige Getränkekultur mit Kunst, Musik und echter Gastfreundschaft.
            </p>

            <div style={{ width: 40, height: 1, background: "rgba(0,212,232,0.3)", marginBottom: 32 }} />

            <p style={{
              fontSize: "0.75rem", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              margin: "0 0 4px",
            }}>
              Adresse
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
              Marktgasse 43 · 9500 Wil SG
            </p>
          </motion.div>

          {/* Map cell */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.98 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="min-h-[280px] md:min-h-[360px]"
            style={{
              background: "#0a0f1a",
              borderTop: "2px solid transparent",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.5!2d9.048423682736383!3d47.466611518766236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzU5LjgiTiA5wrAwMic1NC4zIkU!5e0!3m2!1sde!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0, display: "block",
                position: "absolute", inset: 0,
                filter: "grayscale(0.25) contrast(1.05)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}