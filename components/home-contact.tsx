import { MapPin, Phone, Clock, Navigation2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HomeContact() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
              Besuche <span className="text-cyan-400 neon-glow">uns</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Wir freuen uns auf deinen Besuch in der Vision Kunst Cafébar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-900/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase mb-2">Adresse</h3>
                    <p className="text-white/70">Marktgasse 43</p>
                    <p className="text-white/70">9500 Wil SG</p>
                    <p className="text-white/70">Schweiz</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase mb-2">Kontakt</h3>
                    <p className="text-white/70">
                      Telefon:{" "}
                      <a
                        href="https://wa.me/41765421540"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        +41 76 542 15 40
                      </a>
                    </p>
                    <p className="text-white/70">Email: Visionwilsg@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase mb-2">Öffnungszeiten</h3>
                    <div className="space-y-2 text-white/70">
                      <div className="flex justify-between gap-20">
                        <span>Montag - Donnerstag:</span>
                        <span className="text-cyan-400 font-medium">  15:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between gap-20">
                        <span>Freitag:</span>
                        <span className="text-cyan-400 font-medium">  15:00 - 01:00</span>
                      </div>
                      <div className="flex justify-between gap-20">
                        <span>Samstag:</span>
                        <span className="text-cyan-400 font-medium">  09:00 - 01:00</span>
                      </div>
                      <div className="flex justify-between gap-20">
                        <span>Sonntag:</span>
                        <span className="text-cyan-400 font-medium">  13:00 - 20:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Navigation2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase mb-2">Parkmöglichkeiten</h3>
                    <p className="text-white/70 mb-3">
                      Vor der Linde ab 19:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/kontakt">
                <Button className="w-full cursor-pointer bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold uppercase tracking-wider neon-border text-lg py-6">
                  Tisch reservieren
                </Button>
              </Link>
            </div>

            {/* Map */}
            <div className="bg-slate-900/50 rounded-lg overflow-hidden border border-cyan-500/20 h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.5!2d9.048423682736383!3d47.466611518766236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzU5LjgiTiA5wrAwMic1NC4zIkU!5e0!3m2!1sde!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
