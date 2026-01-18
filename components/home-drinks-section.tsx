"use client"
import signatureCocktails from "@/lib/signature-cocktails"

const carouselDrinks = signatureCocktails.filter((c) =>
    [
        "Blue Vision",
        "Caipirinha",
        "Gin Basil",
        "Watermelon Sugar",
        "Whisky Sour",
        "Cuba Libre",
        "Espresso Martini",
    ].includes(c.name)
)


export function HomeDrinksSection() {
    return (
        <section className="md:py-20 bg-slate-950">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="md:shrink-0 w-[140px] snap-start" />
                {carouselDrinks.map((cocktail, index) => (
                    <div key={index} className="min-w-[280px] md:min-w-[340px] snap-start">
                        <div className="bg-slate-900/50 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                            <div className="relative h-48 w-full overflow-hidden">
                                <img
                                    src={cocktail.image || "/placeholder.svg"}
                                    alt={cocktail.name}
                                    className="w-full h-full object-cover"
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
                    </div>
                ))}
            </div>
        </section >
    )
}
