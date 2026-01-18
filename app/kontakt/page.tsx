import { Navigation } from "@/components/navigation"
import { ContactReservation } from "@/components/contact-reservation"

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <div className="pt-20">
        <ContactReservation />
      </div>
    </main>
  )
}
