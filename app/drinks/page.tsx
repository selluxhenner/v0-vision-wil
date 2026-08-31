import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Drinks & Food",
  description:
    "Entdecke unsere Signature Cocktails, handgefertigten Kaffeespezialitäten und saisonalen Speisen. Die Getränkekarte der VISION KUNST CAFÉBAR in Wil SG.",
  alternates: { canonical: "/drinks" },
  openGraph: {
    title: "Drinks & Food | VISION Wil",
    description:
      "Signature Cocktails, Kaffeespezialitäten und saisonale Snacks – entdecke die Getränkekarte der VISION KUNST CAFÉBAR in Wil.",
    images: [{ url: "/images/cocktail-poster.png", width: 1200, height: 630, alt: "VISION Cocktailkarte" }],
  },
}
import { DrinksMenu } from "@/components/drinks-menu"
import { FoodMenu } from "@/components/food-menu"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function DrinksPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Breadcrumbs name="Drinks & Food" path="/drinks" />
      <Navigation />
      <div className="pt-20">
        <DrinksMenu />
        <FoodMenu />
      </div>
      <Footer />
    </main>
  )
}
