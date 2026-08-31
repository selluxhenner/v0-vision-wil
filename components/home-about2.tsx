"use client"

import { motion } from "framer-motion"

const tags = ["Bar Wil", "Café Bar Wil", "Cocktail Bar Wil", "Event Lokal Wil", "Bar Wil SG", "Kunst Café Wil"]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function HomeAbout2() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "start",
          }}
        >

          {/* Left column */}
          <div>
            {/* Pull quote — border draws in, then text fades */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -16 },
                show: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
              style={{
                borderLeft: "3px solid #00d4e8",
                paddingLeft: "24px",
                marginBottom: "32px",
              }}
            >
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "#ffffff",
                  fontStyle: "italic",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Ein Ort, an dem Genuss und Kreativität miteinander verschmelzen – mitten in der
                Altstadt von Wil SG.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ fontSize: "0.97rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)" }}
            >
              <p style={{ marginBottom: "1.2em" }}>
                Mitten in der Altstadt von Wil, an der Marktgasse 43, verbindet die Vision Kunst Cafébar
                kreatives Ambiente mit echter Gastfreundschaft. Statt nur ein Ort zum Trinken zu sein,
                entsteht hier ein Erlebnis, bei dem sich Kunst, Genuss und Geselligkeit ganz natürlich
                treffen.
              </p>
              <p style={{ marginBottom: 0 }}>
                Regelmässig finden bei uns Live-Konzerte, Kunstausstellungen und besondere Abende statt.
                Ob für einen entspannten Kaffee, ein Glas Wein oder gute Musik – die Atmosphäre lädt
                dazu ein, länger zu bleiben.
              </p>
            </motion.div>
          </div>

          {/* Right column */}
          <div>
            <motion.div
              variants={fadeUp}
              style={{ fontSize: "0.97rem", lineHeight: 1.9, color: "rgba(255,255,255,0.55)" }}
            >
              <p style={{ marginBottom: "1.2em" }}>
                Am Abend wird die Vision zur stilvollen Cocktailbar mit kreativen Eigenkreationen und
                beliebten Klassikern. Vom Espresso Martini bis zum frischen Mojito – jedes Getränk wird
                mit viel Liebe zum Detail zubereitet, auch in alkoholfreien Varianten.
              </p>
              <p style={{ marginBottom: "1.2em" }}>
                Tagsüber steht hochwertiger Barista-Kaffee aus ausgewählten Bohnen im Mittelpunkt und
                bietet den perfekten Ausgleich zur lebendigen Abendstimmung. So entsteht ein Ort, der
                sich dem Moment anpasst – ruhig am Nachmittag, lebendig in der Nacht.
              </p>
              <p style={{ marginBottom: "1.6em" }}>
                Komm vorbei und erlebe selbst die besondere Atmosphäre mitten in Wil.
              </p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}