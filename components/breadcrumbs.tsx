import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/structured-data"

// Emits BreadcrumbList structured data for a subpage. JSON-LD only — keeps the
// visual design untouched while giving Google the breadcrumb trail it shows in
// results. "Startseite" is always position 1.
export function Breadcrumbs({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={breadcrumbJsonLd([
        { name: "Startseite", path: "/" },
        { name, path },
      ])}
    />
  )
}
