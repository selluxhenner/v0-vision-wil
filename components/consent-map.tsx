"use client"

import { MapPin } from "lucide-react"
import { setConsent, useConsent } from "@/lib/consent"

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.5!2d9.048423682736383!3d47.466611518766236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDI3JzU5LjgiTiA5wrAwMic1NC4zIkU!5e0!3m2!1sde!2sch!4v1234567890"

type ConsentMapProps = {
  /** CSS-Filter des eingebetteten Kartenbilds. */
  filter?: string
}

/**
 * Google Maps wird erst nach ausdrücklicher Einwilligung geladen.
 * Vorher fliesst keine einzige Anfrage an Google.
 * Erwartet ein Elternelement mit `position: relative` und `overflow: hidden`.
 */
export function ConsentMap({ filter = "grayscale(0.3) contrast(1.05)" }: ConsentMapProps) {
  const decision = useConsent()

  if (decision === "granted") {
    return (
      <iframe
        title="Standort der VISION KUNST CAFÉBAR auf Google Maps"
        src={MAP_SRC}
        className="absolute inset-0 block h-full w-full"
        style={{ border: 0, filter }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    )
  }

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-6 text-center"
      style={{ background: "#0a0f1a" }}
    >
      <div className="flex flex-col items-center gap-2">
        <MapPin className="h-5 w-5 text-cyan-400" aria-hidden="true" />
        <p className="text-sm text-white/70">Marktgasse 43 · 9500 Wil SG</p>
      </div>

      <button
        type="button"
        onClick={() => setConsent("granted")}
        className="border border-cyan-500/40 bg-cyan-500/10 cursor-pointer px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-cyan-300 transition-colors hover:bg-cyan-500/20 hover:text-cyan-200"
      >
        Karte laden
      </button>

      <p className="max-w-xs text-xs leading-relaxed text-white/35">
        Beim Laden werden Daten an Google übertragen. Details in der{" "}
        <a
          href="/datenschutz"
          className="underline underline-offset-2 transition-colors hover:text-cyan-400"
        >
          Datenschutzerklärung
        </a>
        .
      </p>
    </div>
  )
}
