"use client"

import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMemo, useEffect, useState } from "react"

const generateTimes = (start = 12, end = 23) => {
  const times = []
  for (let h = start; h <= end; h++) {
    times.push(`${String(h).padStart(2, "0")}:00`)
    times.push(`${String(h).padStart(2, "0")}:30`)
  }
  return times
}



const generateNextDays = (days = 14) => {
  const fmt = new Intl.DateTimeFormat("de-CH", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })

  return Array.from({ length: days }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i)
    const iso = d.toISOString().slice(0, 10) // YYYY-MM-DD (good for backend/state)
    const label = fmt.format(d)              // e.g. "Sa, 10.01.2026"
    return { iso, label }
  })
}


export function ContactReservation() {
  const [date, setDate] = useState("")
  const [people, setPeople] = useState(2)
  const [time, setTime] = useState("")
  const [name, setName] = useState("")

  const isValid =
    date.trim() !== "" &&
    time.trim() !== "" &&
    name.trim() !== "" &&
    people > 0

  useEffect(() => {
    if (!time) setTime("19:00")
  }, [])


  const waHref = useMemo(() => {
    const text = encodeURIComponent(
      `Hallo Steven, \nIch möchte gerne reservieren:\nDatum: ${date || "-"}\nUhrzeit: ${time || "-"}\nPersonen: ${people}\nName: ${name}`
    )
    return `https://wa.me/41765421540?text=${text}`
  }, [date, time, people, name])

  return (
    <section id="kontakt" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
              Kontakt & <span className="text-cyan-400 neon-glow">Reservierung</span>
            </h2>
            <p className="text-white/60 text-lg">Wir freuen uns auf deinen Besuch</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Adresse</h3>
                  <p className="text-white/70">Marktgasse 43</p>
                  <p className="text-white/70">9500 Wil SG, Schweiz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Öffnungszeiten</h3>
                  <p className="text-white/70">Montag - Donnerstag: 15:00 - 23:00</p>
                  <p className="text-white/70">Freitag: 15:00 - 01:00</p>
                  <p className="text-white/70">Samstag: 09:00 - 1:00</p>
                  <p className="text-white/70">Sonntag: 13:00 - 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefon & WhatsApp</h3>
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +41 76 542 15 40
                  </a>
                  <div className="mt-2">
                    <a href={`https://wa.me/41765421540`} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">WhatsApp öffnen</Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a href="mailto:Visionwilsg@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Visionwilsg@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Car className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Parkieren</h3>
                  <p className="text-white/70">Parkplätze vor der Linde</p>
                  <p className="text-white/60 text-sm">Kostenlos ab 19:00 Uhr</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h3 className="text-xl font-bold text-white mb-4">Folge uns</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/vision_wil/"
                    className="p-3 bg-cyan-500/20 rounded-lg hover:bg-cyan-500/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden border border-cyan-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.5!2d9.048423682736383!3d47.466611518766236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzU5LjgiTiA5wrAwMic1NC4zIkU!5e0!3m2!1sde!2sch!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-slate-900/50 rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Tisch reservieren</h3>
                <p className="text-white/70 mb-4">
                  Reserviere deinen Tisch telefonisch oder per WhatsApp. Wir freuen uns auf dich!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Tag</label>
                    <select
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-md bg-slate-950 border border-cyan-500/20 px-3 py-2 text-white"
                    >
                      <option value="">Bitte wählen</option>
                      {generateNextDays().map((d, index) => (
                        <option key={index} value={d.iso}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                  </div>


                  <div>
                    <label className="block text-sm text-white/60 mb-1">Uhrzeit</label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded-md bg-slate-950 border border-cyan-500/20 px-3 py-2 text-white"
                    >
                      <option value="">Bitte wählen</option>
                      {generateTimes(16, 23).map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>



                  <div>
                    <label className="block text-sm text-white/60 mb-1">Personen</label>
                    <select
                      value={people}
                      onChange={(e) => setPeople(Number(e.target.value))}
                      className="w-full rounded-md bg-slate-950 border border-cyan-500/20 px-3 py-2 text-white"
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full rounded-md bg-slate-950 px-3 py-2 text-white border border-cyan-500/20"}
  `}
                    />

                  </div>

                </div>



                <Button
                  asChild
                  disabled={!isValid}
                  className={`w-full font-bold uppercase tracking-wider
                    ${isValid
                      ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                      : "bg-slate-700 text-slate-400 cursor-not-allowed"
                    }`}
                >
                  {isValid ? (
                    <a href={waHref} target="_blank" rel="noopener noreferrer">
                      Jetzt reservieren
                    </a>
                  ) : (
                    <span>Bitte alles ausfuellen</span>
                  )}
                </Button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
