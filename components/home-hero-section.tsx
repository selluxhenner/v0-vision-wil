"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, Coffee, Wine, Palette } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  }

  const itemUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  }

  const itemDown = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  }

  const floaty = {
    animate: {
      y: [0, -6, 0],
      transition: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/exterior.png"
          alt="Vision Kunst Cafébar Exterior"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-40 sm:pt-24 md:pt-36 px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >

          <motion.h2
            variants={itemDown}
            className="text-5xl sm:text-6xl md:text-7xl mb-2 font-black uppercase tracking-tight"
          >
            <span className="block text-white">KUNST.</span>
            <span className="block text-white">KAFFEE.</span>
            <span className="block text-cyan-400 neon-glow">COCKTAILS.</span>
          </motion.h2>

          <motion.p
            variants={itemUp}
            className="text-sm md:text-xl text-white/80 font-light tracking-wide"
          >
            Mehr als nur eine Bar.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12">
            <motion.div
              variants={itemUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/drinks">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-cyan-400 cursor-pointer border-cyan-400 hover:bg-cyan-400/10 hover:text-white font-bold uppercase tracking-wider min-w-[180px] bg-transparent"
                >
                  Zur Getränkekarte
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-cyan-500 cursor-pointer text-slate-950 hover:bg-cyan-400 font-bold uppercase tracking-wider neon-border min-w-[180px]"
                onClick={() => document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })}
              >
                Events
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.div
              variants={itemUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 neon-pulse-hover"
              style={{ willChange: "transform, opacity" }}
            >

              <Wine className="w-10 h-10 text-cyan-400" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Signature Cocktails
              </h3>
              <p className="text-sm text-white/60">Klassiker & Eigenkreationen</p>
            </motion.div>
            <motion.div
              variants={itemUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 neon-pulse-hover"
              style={{ willChange: "transform, opacity" }}
            >

              <Coffee className="w-10 h-10 text-cyan-400" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Barista Kaffee
              </h3>
              <p className="text-sm text-white/60">Premium Bohnen</p>
            </motion.div>
            <motion.div
              variants={itemUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-3 p-4 rounded-lg bg-slate-900/50 border border-cyan-500/20 neon-pulse-hover"
              style={{ willChange: "transform, opacity" }}
            >

              <Palette className="w-10 h-10 text-cyan-400" />
              <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                Kunst & Vibes
              </h3>
              <p className="text-sm text-white/60">Moderne Atmosphäre</p>
            </motion.div>
          </div>

        </motion.div >
      </div >
    </section >
  )
}
