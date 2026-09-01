"use client"

import { useSyncExternalStore } from "react"

/**
 * Einwilligung für externe Dienste (aktuell ausschliesslich Google Maps).
 * Die Website selbst setzt keine Cookies und lädt keine Tracker – erst nach
 * einer ausdrücklichen Zustimmung werden Daten an Dritte übertragen.
 */
export type ConsentDecision = "granted" | "denied"

const STORAGE_KEY = "vision-consent-v1"
const CHANGE_EVENT = "vision-consent-change"

let cached: ConsentDecision | null = null
let hydrated = false

function readStorage(): ConsentDecision | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw === "granted" || raw === "denied" ? raw : null
  } catch {
    // Private-Mode o. ä. – Entscheidung gilt dann nur für die Sitzung.
    return null
  }
}

function getSnapshot(): ConsentDecision | null {
  if (!hydrated) {
    cached = readStorage()
    hydrated = true
  }
  return cached
}

function subscribe(onStoreChange: () => void) {
  const handler = () => {
    cached = readStorage()
    hydrated = true
    onStoreChange()
  }
  window.addEventListener(CHANGE_EVENT, handler)
  window.addEventListener("storage", handler)
  return () => {
    window.removeEventListener(CHANGE_EVENT, handler)
    window.removeEventListener("storage", handler)
  }
}

function publish(decision: ConsentDecision | null) {
  cached = decision
  hydrated = true
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

export function setConsent(decision: ConsentDecision) {
  try {
    window.localStorage.setItem(STORAGE_KEY, decision)
  } catch {
    // ignorieren – In-Memory-Fallback greift
  }
  publish(decision)
}

/** Widerruf: Banner erscheint erneut, Karte wird wieder blockiert. */
export function resetConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignorieren
  }
  publish(null)
}

/** `null` = noch nicht entschieden (auch beim Server-Rendering). */
export function useConsent(): ConsentDecision | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null)
}
