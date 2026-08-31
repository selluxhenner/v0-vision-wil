import { JsonLd } from "@/components/json-ld"
import { faqJsonLd } from "@/lib/structured-data"

// Answer-focused FAQ. Each answer is written to directly satisfy a real local
// search query ("beste Bar in Wil?", "Wo Kaffee in Wil?" …) in 1–3 concise
// sentences — the format Google AI Overviews, Perplexity & ChatGPT quote from.
// Rendered with native <details> so every answer sits in the static HTML.
const faqs = [
  {
    question: "Was ist die beste Bar in Wil?",
    answer:
      "Die Vision Kunst Cafébar an der Marktgasse 43 zählt zu den beliebtesten Bars in Wil SG. Sie verbindet eine stilvolle Cocktailbar, ein gemütliches Café und Kunst unter einem Dach – mitten in der Altstadt von Wil.",
  },
  {
    question: "Wo kann man in Wil Cocktails trinken?",
    answer:
      "Cocktails in Wil gibt es in der Vision Kunst Cafébar an der Marktgasse 43. Erfahrene Barkeeper mixen Signature Cocktails und Klassiker wie Espresso Martini oder Mojito – auf Wunsch auch alkoholfrei.",
  },
  {
    question: "Wo gibt es guten Kaffee in Wil?",
    answer:
      "Guten Kaffee in Wil findest du tagsüber in der Vision Kunst Cafébar. Unsere Baristas servieren Espresso, Cappuccino und Latte Macchiato aus sorgfältig ausgewählten Bohnen – das perfekte Kafi mitten in Wil SG.",
  },
  {
    question: "Welche Events finden in Wil statt?",
    answer:
      "In der Vision Kunst Cafébar in Wil finden regelmässig Events statt: Live-Musik, Kunstausstellungen und besondere Abende. Die aktuellen Termine findest du auf unserem Instagram-Kanal @vision_wil.",
  },
  {
    question: "Wann hat die Vision Kunst Cafébar geöffnet?",
    answer:
      "Geöffnet ist Montag bis Donnerstag 15:00–23:00 Uhr, Freitag 15:00–01:00 Uhr, Samstag 09:00–01:00 Uhr und Sonntag 13:00–20:00 Uhr.",
  },
  {
    question: "Wo befindet sich die Vision Kunst Cafébar in Wil?",
    answer:
      "Die Vision Kunst Cafébar liegt an der Marktgasse 43, 9500 Wil SG, mitten in der Altstadt. Parkplätze sind ab 19:00 Uhr kostenlos verfügbar.",
  },
  {
    question: "Kann man bei Vision einen Tisch reservieren?",
    answer:
      "Ja. Du kannst deinen Tisch in der Vision Kunst Cafébar in Wil unkompliziert per WhatsApp unter +41 76 542 15 40 reservieren – wir bestätigen dir die Reservierung direkt.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 bg-slate-900/30">
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.25em] text-white/30">
                Häufige Fragen
              </span>
              <span className="h-px w-10 bg-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              Bar, Café & Cocktails in <span className="text-cyan-400 neon-glow">Wil SG</span>
            </h2>
          </div>

          <div className="divide-y divide-white/8 border-t border-b border-white/8">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-white/90 transition-colors hover:text-cyan-400">
                  <span className="text-base font-semibold md:text-lg">{faq.question}</span>
                  <span className="shrink-0 text-cyan-400 transition-transform duration-200 group-open:rotate-45">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 pr-8 text-sm leading-relaxed text-white/60 md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
