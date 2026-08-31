import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  // Homepage keeps its own absolute title (no template suffix) so it leads with keywords.
  title: {
    absolute: "Bar, Café & Cocktailbar in Wil SG | VISION KUNST CAFÉBAR",
  },
  description:
    "VISION Kunst Cafébar in Wil SG – Bar, Café und Cocktailbar an der Marktgasse 43. Barista-Kaffee, Signature Cocktails, Kunst & Events mitten in der Altstadt von Wil.",
  alternates: { canonical: "/" },
}
import { HeroSection } from "@/components/home-hero-section"
import { HomeMonthlyDrink } from "@/components/home-monthly-drink"
import { HomeDrinksSection } from "@/components/home-drinks-section"
import { HomeEvents } from "@/components/home-events"
import { HomeContact } from "@/components/home-contact"
import { HomeAbout } from "@/components/home-about"
import { HomeAbout2 } from "@/components/home-about2"
import { HomeGiftCardBanner } from "@/components/home-gift-card-banner"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { ReviewSlider } from "@/components/home-review"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <HomeAbout />
      <HomeMonthlyDrink />
      <HomeDrinksSection />
      <HomeEvents /> 
      <HomeAbout2 />
      <HomeGiftCardBanner />
      <HomeContact />
      <ReviewSlider />
      <Faq />
      <Footer />
    </main>
  )
}
