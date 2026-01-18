"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomeFeatures() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div id="events" className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6 items-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
            {/* Text */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg shrink-0">
                <Calendar className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  Nächster Event
                </h3>
                <p className="text-white/80 text-lg mb-1">
                  Fasnacht 2026 – LAS VEGAS, 19. Januar – 17. Februar
                </p>
                <p className="text-white/60">
                  Dekoriert auf zwei Etagen
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative md:h-[400px] rounded-lg flex items-center justify-center">
  <img
    src="/events/poster1.jpeg"
    alt="Naechster Event"
    className="h-full w-auto object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
</div>

          </div>
        </div>


        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Impressionen</h2>
            <p className="text-white/60 text-lg">Erlebe die Vision Atmosphäre</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { src: "/images/bar-neon.png", alt: "Bar mit Neon" },
              { src: "/inside/image1.jpeg", alt: "Lounge Bereich" },
              { src: "/inside/image2.jpeg", alt: "von Aussen" },
              { src: "/images/espresso.png", alt: "Barista Kaffee" },
              { src: "/images/charcuterie.png", alt: "Apéro Platte" },
              { src: "/images/cocktail-poster.png", alt: "Cocktail Art" },
            ].map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg border border-cyan-500/20 group cursor-pointer"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link href="/drinks"><Button
              variant="outline"
              size="lg"
              className="text-cyan-400 hover:text-white cursor-pointer border-cyan-400 hover:bg-cyan-400/10 font-bold uppercase tracking-wider bg-transparent"
            >

              <span>Mehr Drinks ansehen</span>
            </Button>
            </Link>

            <Link href="/vision">
              <Button
                variant="outline"
                size="lg"
                className="text-cyan-400  hover:text-white cursor-pointer border-cyan-400 hover:bg-cyan-400/10 font-bold uppercase tracking-wider bg-transparent"
              >
                <span>Galerie entdecken</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
