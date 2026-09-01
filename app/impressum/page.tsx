import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der VISION KUNST CAFÉBAR in Wil SG – Angaben gemäss schweizerischem Recht.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Breadcrumbs name="Impressum" path="/impressum" />
      <Navigation />

      <div className="pt-20">
        <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 neon-glow mb-3">
              Rechtliches
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-12">
              Impressum
            </h1>

            <div className="space-y-12">
              {/* Inhaber */}
              <div>
                <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
                  Inhaber
                </h2>
                <div className="text-white/80 leading-relaxed">
                  <p className="text-lg font-semibold text-white">Steven Morf</p>
                  <p>VISION Kunst Cafébar GmbH</p>
                  <address className="not-italic mt-2 text-white/60">
                    Marktgasse 43<br />
                    9500 Wil SG<br />
                    Schweiz
                  </address>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Betreiber der Website */}
              <div>
                <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
                  Betreiber der Website
                </h2>
                <div className="text-white/80 leading-relaxed">
                  <p className="text-lg font-semibold text-white">Kevin Schmid</p>
                  <p>ServiWeb</p>
                  <div className="mt-2 space-y-1">
                    <a
                      href="https://serviweb.ch"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white/60 transition-colors hover:text-cyan-400"
                    >
                      serviweb.ch
                    </a>
                    <a
                      href="mailto:kev.schmid2006@gmail.com"
                      className="block text-white/60 transition-colors hover:text-cyan-400"
                    >
                      kev.schmid2006@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Kontakt */}
              <div>
                <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
                  Kontakt
                </h2>
                <div className="text-white/80 leading-relaxed space-y-1">
                  <a
                    href="https://wa.me/41765421540"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/60 transition-colors hover:text-cyan-400"
                  >
                    +41 76 542 15 40
                  </a>
                  <a
                    href="mailto:Visionwilsg@gmail.com"
                    className="block text-white/60 transition-colors hover:text-cyan-400"
                  >
                    Visionwilsg@gmail.com
                  </a>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              {/* Haftungsausschluss */}
              <div>
                <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
                  Haftungsausschluss
                </h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
                  Inhalte wird jedoch keine Gewähr übernommen. Für Inhalte externer
                  Links sind ausschliesslich deren Betreiber verantwortlich.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
