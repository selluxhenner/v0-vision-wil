import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Kontakt & Reservierung",
  description:
    "Tisch reservieren oder Kontakt aufnehmen – VISION KUNST CAFÉBAR, Marktgasse 43, 9500 Wil SG. Tel: +41 76 542 15 40. Öffnungszeiten und Anfahrt.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt & Reservierung | VISION Wil",
    description:
      "Reserviere deinen Tisch oder nimm Kontakt auf. VISION KUNST CAFÉBAR, Marktgasse 43, 9500 Wil SG – Tel: +41 76 542 15 40.",
  },
}
import { ContactReservation } from "@/components/contact-reservation"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Breadcrumbs name="Kontakt & Reservierung" path="/contact" />
      <Navigation />
      <div className="pt-20">
        <ContactReservation />
      </div>
      <Footer />
    </main>
  )
}
