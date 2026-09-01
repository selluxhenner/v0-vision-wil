"use client"

import { resetConsent } from "@/lib/consent"
import { cn } from "@/lib/utils"

/** Widerruf der Einwilligung – im Footer und in der Datenschutzerklärung verlinkt. */
export function ConsentSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" onClick={resetConsent} className={cn("cursor-pointer", className)}>
      Cookie-Einstellungen
    </button>
  )
}
