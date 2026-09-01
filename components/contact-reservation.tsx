"use client"

import { Phone, Mail, Instagram, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConsentMap } from "@/components/consent-map"
import { useMemo, useEffect, useState } from "react"

const generateTimes = (start = 15, end = 23) => {
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
    return { iso: d.toISOString().slice(0, 10), label: fmt.format(d) }
  })
}

const selectClass =
  "w-full bg-slate-950 border border-white/10 px-3 py-2.5 text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"

export function ContactReservation() {
  const [date, setDate] = useState("")
  const [people, setPeople] = useState(2)
  const [time, setTime] = useState("19:00")
  const [name, setName] = useState("")

  const isValid = date.trim() !== "" && time.trim() !== "" && name.trim() !== ""

  const waHref = useMemo(() => {
    const text = encodeURIComponent(
      `Hallo Steven,\nIch möchte gerne reservieren:\nDatum: ${date || "-"}\nUhrzeit: ${time || "-"}\nPersonen: ${people}\nName: ${name}`
    )
    return `https://wa.me/41765421540?text=${text}`
  }, [date, time, people, name])

  return (
    <section id="kontakt" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
              Kontakt & <span className="text-cyan-400 neon-glow">Reservierung</span>
            </h1>
            <p className="text-white/60 text-lg">Vision Kunst Cafébar · Marktgasse 43 · 9500 Wil SG</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Left — Reservation (dominant) */}
            <div>
              <div
                style={{ borderTop: "2px solid #00d4e8" }}
                className="bg-slate-900/60 border border-white/8 p-8"
              >
                <h3
                  className="font-black text-white uppercase tracking-tight mb-1"
                  style={{ fontSize: "1.6rem" }}
                >
                  Tisch reservieren
                </h3>
                <p className="text-white/40 text-sm mb-8">
                  Fülle das Formular aus – wir bestätigen per WhatsApp.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-widest mb-1.5">Tag</label>
                      <select value={date} onChange={(e) => setDate(e.target.value)} className={selectClass}>
                        <option value="">Bitte wählen</option>
                        {generateNextDays().map((d) => (
                          <option key={d.iso} value={d.iso}>{d.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-widest mb-1.5">Uhrzeit</label>
                      <select value={time} onChange={(e) => setTime(e.target.value)} className={selectClass}>
                        {generateTimes(15, 23).map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-widest mb-1.5">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dein Name"
                        className={`${selectClass} placeholder:text-white/20`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-widest mb-1.5">Personen</label>
                      <select value={people} onChange={(e) => setPeople(Number(e.target.value))} className={selectClass}>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Person" : "Personen"}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Button
                    asChild
                    disabled={!isValid}
                    className={`w-full mt-2 py-6 font-black uppercase tracking-widest text-sm transition-all
                      ${isValid
                        ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                        : "bg-white/5 text-white/25 cursor-not-allowed pointer-events-none"
                      }`}
                  >
                    {isValid ? (
                      <a href={waHref} target="_blank" rel="noopener noreferrer">
                        Jetzt via WhatsApp reservieren →
                      </a>
                    ) : (
                      <span>Bitte alles ausfüllen</span>
                    )}
                  </Button>
                </div>
              </div>

              {/* Contact links */}
              <div className="mt-6 grid grid-cols-3 divide-x divide-white/8 border border-white/8">
                <a
                  href="https://wa.me/41765421540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 py-4 text-white/35 hover:text-white hover:bg-white/[0.03] transition-all"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs tracking-wide">Anrufen</span>
                </a>
                <a
                  href="mailto:Visionwilsg@gmail.com"
                  className="flex flex-col items-center gap-1.5 py-4 text-white/35 hover:text-white hover:bg-white/[0.03] transition-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs tracking-wide">E-Mail</span>
                </a>
                <a
                  href="https://www.instagram.com/vision_wil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1.5 py-4 text-white/35 hover:text-white hover:bg-white/[0.03] transition-all"
                >
                  <Instagram className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs tracking-wide">Instagram</span>
                </a>
              </div>
            </div>

            {/* Right — Map */}
            <div className="flex flex-col gap-4">
              <div className="relative flex-1 min-h-[420px] overflow-hidden border border-white/8">
                {/* Subtle cyan corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, left: 0,
                    width: 40, height: 2,
                    background: "#00d4e8",
                    zIndex: 10,
                  }}
                />
                <ConsentMap filter="grayscale(0.3) contrast(1.05)" />
              </div>

              {/* Address strip */}
              <div className="flex items-center gap-3 px-4 py-3 border border-white/8 bg-white/[0.02]">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-sm text-white/50">
                  Marktgasse 43 · 9500 Wil SG ·{" "}
                  <span className="text-white/30">Parkplätze ab 19:00 Uhr kostenlos</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}