import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Unsere Vision",
  description:
    "Erfahre mehr über die Geschichte und Vision hinter der VISION KUNST CAFÉBAR in Wil SG – ein Ort, wo Kunst, Kultur und genussvolle Momente zusammenkommen.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Unsere Vision | VISION Wil",
    description:
      "Ein Ort, wo Kunst, Kultur und genussvolle Momente zusammenkommen – lerne die VISION KUNST CAFÉBAR in Wil kennen.",
    images: [{ url: "/images/interior-seating.png", width: 1200, height: 630, alt: "VISION Innenraum" }],
  },
}
import { VisionAbout } from "@/components/vision-about"
import { VisionGallery } from "@/components/vision-gallery"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function about() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Breadcrumbs name="Über uns" path="/about" />
      <Navigation />
      <div className="pt-20">
        <VisionAbout />
        <VisionGallery />
      </div>
      <Footer />
    </main>
  )
}
