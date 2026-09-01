"use client"

import { AnimatePresence, motion } from "framer-motion"
import { setConsent, useConsent } from "@/lib/consent"

/**
 * Einwilligungsbanner. Erscheint nur, solange keine Entscheidung vorliegt.
 * Ablehnen ist genauso einfach wie Zustimmen (Art. 7 DSGVO).
 */
export function ConsentBanner() {
  const decision = useConsent()

  return (
    <AnimatePresence>
      {decision === null && (
        <motion.div
          role="region"
          aria-label="Datenschutz-Einstellungen"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-4 z-[60] mx-auto w-[calc(100%-2rem)] max-w-4xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/60 backdrop-blur-md lg:bottom-6 lg:w-1/2"
        >
          <div className="flex flex-col gap-5 p-5 lg:p-6">
            <div>
              <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-cyan-400 neon-glow">
                Datenschutz
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                Diese Website kommt ohne Tracking und ohne eigene Cookies aus. Nur für die
                Anfahrtskarte binden wir Google Maps ein – dabei werden Daten an Google
                übertragen. Mehr dazu in der{" "}
                <a
                  href="/datenschutz"
                  className="text-white/80 underline underline-offset-2 transition-colors hover:text-cyan-400"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setConsent("denied")}
                className="cursor-pointer border border-white/15 px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/60 transition-colors hover:border-white/30 hover:text-white"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => setConsent("granted")}
                className="cursor-pointer border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-cyan-300 transition-colors hover:bg-cyan-500/20 hover:text-cyan-200"
              >
                Google Maps erlauben
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
