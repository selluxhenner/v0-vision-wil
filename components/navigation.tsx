"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"


export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()


  const navBarVariants = {
    hidden: { y: -48, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "circOut" },
    },
  }

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    show: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  }

  const mobileLinksContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  }

  const mobileLinkItem = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.22, ease: "easeOut" } },
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/vision", label: "Vision" },
    { href: "/drinks", label: "Drinks & Food" },
    { href: "/kontakt", label: "Kontakt" },
  ]

  return (
    <motion.nav
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled || isMobileMenuOpen
        ? "bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20"
        : "bg-transparent"
      }`}
    >

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl lg:text-2xl font-bold tracking-tight">
            <span className="text-white">VISION</span>
            <span className="text-cyan-400 neon-glow"> | </span>
            <span className="text-white/80 text-base lg:text-lg">STEVEN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${pathname === link.href ? "text-cyan-400 neon-glow" : "text-white/70 hover:text-cyan-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kontakt">
              <Button className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold uppercase tracking-wider neon-border">
                Tisch reservieren
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobileMenu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden bg-slate-950/95 backdrop-blur-sm border-b border-cyan-500/20 py-6 border-t border-cyan-500/20 space-y-4 overflow-hidden"
            >
              <motion.div
                variants={mobileLinksContainer}
                initial="hidden"
                animate="show"
                className="space-y-4"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={mobileLinkItem}>
                    <Link
                      href={link.href}
                      className={`block text-base font-medium transition-colors uppercase tracking-wider ${pathname === link.href ? "text-cyan-400 neon-glow" : "text-white/70 hover:text-cyan-400"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={mobileLinkItem}>
                  <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      asChild
                      className="w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold uppercase tracking-wider neon-border cursor-pointer"
                    >
                      <span>Tisch reservieren</span>
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  )
}
