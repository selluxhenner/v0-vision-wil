"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function HomeAbout() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.12 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 600, margin: "0 auto" }}
        >
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              lineHeight: 1.1,
              textTransform: "uppercase",
              color: "#ffffff",
              marginBottom: "20px",
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Deine{" "}
            <span style={{ color: "#00d4e8" }}>Bar in Wil</span>
            {" "}—{" "}
            <br />komm vorbei
          </motion.h2>

          {/* Animated divider — draws in from left */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              show: { scaleX: 1, opacity: 1 },
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: 448,
              maxWidth: "100%",
              height: 2,
              background: "#00d4e8",
              marginBottom: 28,
              transformOrigin: "left center",
            }}
          />

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.65)",
              marginBottom: "1.2em",
              textAlign: "center",
            }}
          >
            Ob entspannter Kaffee am Nachmittag, stilvolle Drinks am Abend oder besondere
            Events – die Vision Kunst Cafébar passt sich dem Moment an und schafft den
            passenden Rahmen für jede Gelegenheit.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "rgba(255,255,255,0.65)",
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            Entdecke die besondere Atmosphäre mitten in Wil und geniesse handgemixte
            Cocktails, ausgewählten Kaffee und ehrliche Gastfreundschaft.
          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}