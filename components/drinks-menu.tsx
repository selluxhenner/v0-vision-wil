"use client"
import { Coffee } from "lucide-react"
import signatureCocktails from "@/lib/signature-cocktails"
import { useState } from "react"

export function DrinksMenu() {
  

  const coffeeMenu = [
    { name: "Espresso", price: "CHF 4.00", description: "" },
    { name: "Kaffee Creme / Diverse Tee", price: "CHF 4.50", description: "" },
    { name: "Heisse Schokolade / Schale", price: "CHF 5.00", description: "" },
    { name: "Espresso Doppio / Cappuccino / Latte Macchiato", price: "CHF 5.50", description: "" },
    { name: "Lutz / Kaffee Fertig", price: "CHF 6.50", description: "Schnapps & Kaffee" },
    { name: "Corretto Grappa", price: "CHF 6.50", description: "Espresso & Grappa - 2 cl" },
    { name: "Carajillo", price: "CHF 7.00", description: "Doppelter Espresso, Brandy & Zucker - 2 cl" },
  ]

  const [openImage, setOpenImage] = useState<string | null>(null)

  return (
    <section id="drinks" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
              Drinks & <span className="text-cyan-400 neon-glow">Coffee</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Von Signature Cocktails bis Premium Barista-Kaffee
            </p>
          </div>

          {/* Signature Cocktails */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Signature Cocktails</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signatureCocktails.map((cocktail, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={cocktail.image || "/placeholder.svg"}
                      alt={cocktail.name}
                      className="w-full h-full object-cover"
                      onClick={() => setOpenImage(cocktail.image_large)}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-white uppercase">{cocktail.name}</h4>
                      <span className="text-cyan-400 font-bold text-lg whitespace-nowrap ml-2">{cocktail.price}</span>
                    </div>
                    <p className="text-white/60 text-sm">{cocktail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coffee Section */}
          <div className="bg-slate-900/50 rounded-lg p-8 border border-cyan-500/20 mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Coffee className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight">Kaffee & Heisse Getränke</h3>
                </div>
                <p className="text-white/70 mb-6">
                  Unsere erfahrenen Baristas servieren dir Premium-Kaffee aus sorgfältig ausgewählten Bohnen. Jede Tasse
                  ist ein Kunstwerk.
                </p>
                <div className="space-y-4">
                  {coffeeMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-white/10 pb-3">
                      <div>
                        <span className="text-white font-medium block">{item.name}</span>
                        <span className="text-white/50 text-sm">{item.description}</span>
                      </div>
                      <span className="text-cyan-400 font-bold whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-lg h-120 w-full overflow-hidden">
                <img src="/images/espresso1.png" alt="Barista Kaffee" className="w-full h-full rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  )
}
