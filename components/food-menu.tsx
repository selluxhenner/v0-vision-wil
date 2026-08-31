"use client"
import { UtensilsCrossed, Croissant } from "lucide-react"
import { useState } from "react"

export function FoodMenu() {
  const foodItems = [
    {
      name: "Falafel",
      price: "CHF 16.50",
      description: "Vegan, 200 gramm",
      category: "Vegan",
      image: "/food/falafel - Copy.JPG",
      image_large: "/food/falafel.JPG",
    },
    {
      name: "Blumenkohl",
      price: "CHF 16.50",
      description: "Vegi, 200 gramm",
      category: "Vegetarisch",
      image: "/food/blumenkohl - Copy.JPG",
      image_large: "/food/blumenkohl.JPG",
    },
    {
      name: "Crevetten",
      price: "CHF 15.00",
      description: "6 Stück",
      category: "Meeresfrüchte",
      image: "/food/crevetten - Copy.JPG",
      image_large: "/food/crevetten.JPG",
    },
    {
      name: "Chicken Nuggets",
      price: "CHF 16.50",
      description: "200 gramm",
      category: "Geflügel",
      image: "/food/chicken-nuggets - Copy.JPG",
      image_large: "/food/chicken-nuggets.JPG",
    },
    {
      name: "Chicken Wings",
      price: "CHF 14.50",
      description: "6 Stück",
      category: "Geflügel",
      image: "/food/chicken-wings - Copy.JPG",
      image_large: "/food/chicken-wings.JPG",
    }/*,
    {
      name: "Pommes",
      price: "CHF 7.50",
      description: "150 gramm",
      category: "Beilage",
      image: "/food/.JPG",
    },
    {
      name: "Portion Naccos",
      price: "CHF 7.00",
      description: "mit Dip",
      category: "Snack",
      image: "/food/naccos.JPG",
    },*/
  ]

  const desserts = [
    {
      name: "Schokokuchen",
      price: "CHF 8.50",
      description: "Flüssiger Kern mit Rahm",
      //image: "/public/food/food-menu.png",
    },
    {
      name: "Schokokuchen mit Glace",
      price: "CHF 12.50",
      description: "Flüssiger Kern mit Rahm & Vanilleglace",
      //image: "/public/food/food-menu.png",
    },
  ]

  const [openImage, setOpenImage] = useState<string | null>(null)


  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
              Food <span className="text-cyan-400 neon-glow">Menu</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Perfekte Begleiter zu deinen Drinks</p>
            <p className="text-white/40 text-sm mt-2">Alle Preise in CHF inkl. MwSt.</p>
            <p className="text-cyan-400 text-sm mt-1">ZUSATZ POMMES: 5 CHF</p>
          </div>

          {/* Food Items */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Vision's Menu</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  {item.image && (
                    <div className="relative h-68 w-full overflow-hidden">
                      <img
                        src={item.image}// || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onClick={() => setOpenImage(item.image_large)}
                      />
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>*/}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white uppercase">{item.name}</h4>
                      <span className="text-cyan-400 font-bold text-lg whitespace-nowrap ml-2">{item.price}</span>
                    </div>
                    <p className="text-cyan-400/70 text-xs uppercase mb-2">{item.category}</p>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Croissant className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">Desserts</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {desserts.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                >
                  {item.image && (
                    <div className="relative h-64">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onClick={() => setOpenImage(item.image)}
                      />
                      {/*<div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>*/}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-2xl font-bold text-white uppercase">{item.name}</h4>
                      <span className="text-cyan-400 font-bold text-xl whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Image */}
          <div className="rounded-lg overflow-hidden border flex gap-6 border-cyan-500/20">
            <div className="rounded-lg overflow-hidden border flex gap-6 border-cyan-500/20">
              <img
                src="/karten/v3-Drinks1.png"
                alt="Complete Drinks 1"
                className="w-[32%] h-auto object-contain cursor-pointer"
                onClick={() => setOpenImage("/karten/v3-Drinks1_.png")}
              />
              <img
                src="/karten/v3-Drinks 2.png"
                alt="Complete Drinks 2"
                className="w-[32%] h-auto object-contain cursor-pointer"
                onClick={() => setOpenImage("/karten/v3-Drinks 2_.png")}
              />
              <img
                src="/karten/v3-Food Menu.png"
                alt="Complete Food Menu"
                className="w-[32%] h-auto object-contain cursor-pointer"
                onClick={() => setOpenImage("/karten/v3-Food Menu_.png")}
              />
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
