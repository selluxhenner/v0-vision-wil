import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/home-hero-section"
import { HomeMonthlyDrink } from "@/components/home-monthly-drink"
import { HomeDrinksSection } from "@/components/home-drinks-section"
import { HomeFeatures } from "@/components/home-features"
import { HomeContact } from "@/components/home-contact"
import { HomeGiftCardBanner } from "@/components/home-gift-card-banner"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <HomeMonthlyDrink />
      <HomeDrinksSection />
      <HomeFeatures />
      <HomeGiftCardBanner />
      <HomeContact />
    </main>
  )
}
