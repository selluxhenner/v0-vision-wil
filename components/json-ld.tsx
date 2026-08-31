// Renders a schema.org JSON-LD block. Server component — the markup ships in the
// initial HTML so search crawlers and AI answer engines can read it without JS.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
