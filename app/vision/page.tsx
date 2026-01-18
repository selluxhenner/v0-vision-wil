import { Navigation } from "@/components/navigation"
import { VisionAbout } from "@/components/vision-about"
import { VisionGallery } from "@/components/vision-gallery"

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <div className="pt-20">
        <VisionAbout />
        <VisionGallery />
      </div>
    </main>
  )
}
