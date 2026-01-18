"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomeMonthlyDrink() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-900/50 rounded-lg overflow-hidden border border-cyan-500/20">

            {/* Image */}
            <div className="relative h-80 md:h-96">
              <img
                src="/drinks/image (29).JPG"
                alt="Mystery Drink des Monats"
                className="w-full h-full object-cover blur-md scale-110"
              />
              <div className="absolute w-full inset-0 bg-slate-950/60"></div>

              {/* Mystery badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-bold uppercase tracking-wider rounded-full border border-cyan-500/50">
                Mystery Drink
              </div>
            </div>

            {/* Text */}
            <div className="p-8 space-y-4">
              <h2 className="text-4xl font-black text-white uppercase tracking-tight">
                Drink des <span className="text-cyan-400 neon-glow">Monats</span>
              </h2>

              <p className="text-white/70 text-lg">
                Ein geheimer Cocktail, exklusiv für diesen Monat.
                Nur an der Bar erfahrst du, was drin steckt.
              </p>

              <p className="text-white/50 text-sm italic">
                Jeden Monat neu. Limitiert. Nicht auf der Karte.
              </p>

              <div className="pt-4">
                <Link href="/drinks">
                  <Button
                    asChild
                    className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold uppercase tracking-wider"
                  >
                    <span>Jetzt entdecken</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
