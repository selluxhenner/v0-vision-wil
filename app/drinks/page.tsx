import { Navigation } from "@/components/navigation"
import { DrinksMenu } from "@/components/drinks-menu"
import { FoodMenu } from "@/components/food-menu"

export default function DrinksPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <div className="pt-20">
        <DrinksMenu />
        <FoodMenu />
      </div>
    </main>
  )
}
