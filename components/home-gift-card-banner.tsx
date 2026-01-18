import { Gift, Sparkles } from "lucide-react"
import Link from "next/link"

export function HomeGiftCardBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-950/80 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/30 p-12 shadow-2xl">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="relative">
                  <Gift className="w-12 h-12 text-cyan-400" />
                  <Sparkles className="w-26 h-16 text-cyan-400 absolute -top-2 -right-2 animate-pulse" />
                </div>
              </div>

              {/* Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
                  Vision <span className="text-cyan-400 neon-glow">Geschenkkarte</span>
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  Das perfekte Geschenk für Cocktail-Liebhaber und Geniesser. Verschenke unvergessliche Momente im
                  Vision Kunst Cafébar.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg mb-2">Flexibel</div>
                  <div className="text-white/60 text-sm">Wähle deinen Betrag</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg mb-2">Digital</div>
                  <div className="text-white/60 text-sm">Sofort per E-Mail</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg mb-2">Persönlich</div>
                  <div className="text-white/60 text-sm">Mit individueller Nachricht</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link
                  href="https://giftcard.sumup.io/order/G6RCVPK/vision-kunst-cafebar-gmbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex hover:text-white items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-950 font-black text-lg uppercase rounded-lg transition-all shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
                >
                  <Gift className="w-6 h-6" />
                  Geschenkkarte kaufen
                </Link>
              </div>

              <p className="text-white/50 text-sm pt-4">
                Einlösbar für alle Speisen und Getränke im Vision Kunst Cafébar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
