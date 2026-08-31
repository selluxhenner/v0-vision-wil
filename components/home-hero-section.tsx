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
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  }

  const itemDown = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
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

          <motion.h1
            variants={itemDown}
            className="text-5xl sm:text-6xl md:text-7xl mb-2 font-black uppercase tracking-tight"
          >
            <span className="block text-white">KUNST.</span>
            <span className="block text-white">KAFFEE.</span>
            <span className="block text-cyan-400 neon-glow">COCKTAILS.</span>
            {/* Keyword-rich location context for crawlers; visually hidden so the design stays clean */}
            <span className="sr-only">Vision Kunst Cafébar – Bar, Café & Cocktailbar in Wil SG</span>
          </motion.h1>

          <motion.p
            variants={itemUp}
            className="text-sm md:text-xl text-white/80 font-light tracking-wide"
          >
            Deine Bar, dein Café & deine Cocktailbar mitten in Wil SG.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <motion.div
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 px-5 py-4 border border-white/8 bg-white/[0.03]"
              style={{ willChange: "transform, opacity" }}
            >
              <Wine className="w-8 h-8 text-cyan-400 shrink-0" />
              <div>
                <h3 className="text-s font-bold text-white uppercase tracking-widest leading-none mb-3">
                  Signature Cocktails
                </h3>
                <p className="text-xs text-white/40">Klassiker & Eigenkreationen</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 px-5 py-4 border border-white/8 bg-white/[0.03]"
              style={{ willChange: "transform, opacity" }}
            >
              <Coffee className="w-8 h-8 text-cyan-400 shrink-0" />
              <div>
                <h3 className="text-s font-bold text-white uppercase tracking-widest leading-none mb-3">
                  Barista Kaffee
                </h3>
                <p className="text-xs text-white/40">Premium Bohnen</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 px-5 py-4 border border-white/8 bg-white/[0.03]"
              style={{ willChange: "transform, opacity" }}
            >
              <Palette className="w-8 h-8 text-cyan-400 shrink-0" />
              <div>
                <h3 className="text-s font-bold text-white uppercase tracking-widest leading-none mb-3">
                  Kunst & Vibes
                </h3>
                <p className="text-xs text-white/40">Moderne Atmosphäre</p>
              </div>
            </motion.div>
          </div>

        </motion.div >
      </div >
    </section >
  )
}
