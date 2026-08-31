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

  // Full-screen overlay variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  }

  // Background image Ken Burns effect
  const bgImageVariants = {
    hidden: { scale: 1.08, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const mobileLinksContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  }

  const mobileLinkItem = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  }

  const indexLabelVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 0.6, transition: { duration: 0.3, ease: "easeOut" } },
  }

  const underlineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.5, ease: "circOut", delay: 0.3 } },
  }

  const footerVariants = {
    hidden: { y: 16, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
    },
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/about", label: "Über uns" },
    { href: "/drinks", label: "Drinks & Food" },
    { href: "/contact", label: "Kontakt" },
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
          <Link href="/" className="text-2xl lg:text-2xl font-bold tracking-tight z-50">
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
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${pathname === link.href
                    ? "text-cyan-400 neon-glow"
                    : "text-white/70 hover:text-cyan-400"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold uppercase tracking-wider neon-border">
                Tisch reservieren
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            className="md:hidden text-cyan-400 hover:text-cyan-300 transition-colors z-50 relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute"
                >
                  <X size={28} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute"
                >
                  <Menu size={28} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Tagline - shown when menu open */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="md:hidden text-[0.95rem] text-white/40 uppercase tracking-[0.3em] -mt-2 pb-4 z-50 relative"
            >
              Kunst. Kaffee. Cocktails.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobileMenu"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="md:hidden h-screen fixed inset-0 z-40 flex flex-col"
          >
            {/* Background image with Ken Burns effect */}
            <motion.div
              variants={bgImageVariants}
              initial="hidden"
              animate="show"
              className="absolute inset-0 -z-10 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/bar-ambience.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-950/85 to-black/95" />
              <div className="absolute inset-0 backdrop-blur-md" />
            </motion.div>

            {/* Content */}
            <div className="relative flex flex-col h-full px-6 pt-28 pb-10 overflow-y-auto">
              {/* Nav Links */}
              <motion.div
                variants={mobileLinksContainer}
                initial="hidden"
                animate="show"
                className="flex-1 flex flex-col justify-center"
              >
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      variants={mobileLinkItem}
                      className="border-b border-white/[0.06] last:border-b-0"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-baseline gap-4 py-5"
                      >
                        <motion.span
                          variants={indexLabelVariants}
                          className="font-mono text-2xl text-cyan-300 tabular-nums"
                        >
                          0{index + 1}
                        </motion.span>

                        <span className="flex flex-col gap-1">
                          <motion.span
                            whileTap={{ scale: 0.97 }}
                            className={`block font-semibold tracking-tight transition-colors duration-300 ${isActive
                                ? "text-[#F5E6C8]"
                                : "text-white/85 group-hover:text-white"
                              }`}
                            style={{ fontSize: "clamp(1.75rem, 8vw, 2.5rem)" }}
                          >
                            {link.label}
                          </motion.span>

                          {isActive && (
                            <motion.span
                              variants={underlineVariants}
                              initial="hidden"
                              animate="show"
                              className="h-px w-10 bg-cyan-400 origin-left"
                            />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Footer: CTA + Social */}
              <motion.div
                variants={footerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-6 pt-6 border-t border-white/[0.08]"
              >
                {/* Premium CTA */}
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="relative overflow-hidden w-full text-center py-4 rounded-sm border border-cyan-300/60 text-cyan-400 uppercase tracking-[0.2em] text-sm font-bold transition-colors duration-500 active:bg-gradient-to-r active:from-[#D4AF7A] active:to-[#F5E6C8] active:text-slate-950 active:border-transparent"
                  >
                    Tisch reservieren
                  </motion.div>
                </Link>

                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4">
                  <motion.a
                    href="https://www.instagram.com/vision_wil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="VISION auf Instagram"
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-white/60 transition-colors duration-300 active:border-cyan-400 active:text-cyan-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/41765421540"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="VISION via WhatsApp kontaktieren"
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-white/60 transition-colors duration-300 active:border-cyan-400 active:text-cyan-400"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}