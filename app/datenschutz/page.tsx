import type { Metadata } from "next"
import type React from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ConsentSettingsLink } from "@/components/consent-settings-link"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der VISION KUNST CAFÉBAR in Wil SG – Informationen zur Bearbeitung von Personendaten gemäss revDSG und DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-white/60">{children}</div>
    </div>
  )
}

const divider = <div className="h-px bg-white/[0.06]" />

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Breadcrumbs name="Datenschutzerklärung" path="/datenschutz" />
      <Navigation />

      <div className="pt-20">
        <section className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 neon-glow mb-3">
              Rechtliches
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-6">
              Datenschutzerklärung
            </h1>
            <p className="text-sm leading-relaxed text-white/50 mb-12">
              Diese Website kommt bewusst ohne Werbe-Tracking, ohne Analyse-Dienste und ohne
              eigene Cookies aus. Nachfolgend wird transparent dargelegt, welche Personendaten
              trotzdem anfallen und zu welchem Zweck sie bearbeitet werden – gemäss dem
              schweizerischen Datenschutzgesetz (revDSG) und, soweit anwendbar, der
              EU-Datenschutz-Grundverordnung (DSGVO).
            </p>

            <div className="space-y-12">
              <Section title="Verantwortliche Stelle">
                <div className="text-white/80">
                  <p className="font-semibold text-white">VISION Kunst Cafébar GmbH</p>
                  <address className="not-italic mt-2 text-white/60">
                    Marktgasse 43<br />
                    9500 Wil SG<br />
                    Schweiz
                  </address>
                  <div className="mt-3 space-y-1">
                    <a
                      href="mailto:Visionwilsg@gmail.com"
                      className="block text-white/60 transition-colors hover:text-cyan-400"
                    >
                      Visionwilsg@gmail.com
                    </a>
                    <a
                      href="tel:+41765421540"
                      className="block text-white/60 transition-colors hover:text-cyan-400"
                    >
                      +41 76 542 15 40
                    </a>
                  </div>
                </div>
              </Section>

              {divider}

              <Section title="Hosting und Server-Logfiles">
                <p>
                  Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
                  91789, USA, gehostet. Beim Aufruf einer Seite werden automatisch technische
                  Zugriffsdaten in Server-Logfiles erfasst: IP-Adresse, Datum und Uhrzeit des
                  Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browsertyp und
                  Betriebssystem sowie die zuvor besuchte Seite.
                </p>
                <p>
                  Diese Daten sind technisch notwendig, um die Website auszuliefern, ihre
                  Stabilität zu gewährleisten und Missbrauch abzuwehren. Sie werden nicht mit
                  anderen Datenquellen zusammengeführt und nicht zur Identifikation einzelner
                  Personen verwendet. Rechtsgrundlage ist das überwiegende berechtigte Interesse
                  am sicheren Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO, Art. 31 revDSG).
                  Vercel handelt als Auftragsverarbeiterin auf Grundlage eines
                  Auftragsverarbeitungsvertrags.
                </p>
              </Section>

              {divider}

              <Section title="Cookies und lokale Speicherung">
                <p>
                  Diese Website setzt keine Werbe-, Analyse- oder Tracking-Cookies. Gespeichert
                  wird ausschliesslich die Entscheidung zum Einwilligungsbanner – lokal im
                  Browser (localStorage), damit die Abfrage nicht bei jedem Seitenaufruf erneut
                  erscheint. Diese Information verlässt das Endgerät nicht und wird weder an uns
                  noch an Dritte übermittelt.
                </p>
              </Section>

              {divider}

              <Section title="Google Maps">
                <p>
                  Zur Darstellung des Standorts wird eine Karte von Google Maps eingebunden.
                  Anbieterin ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin
                  4, Irland; eine Übermittlung an die Google LLC in den USA findet statt.
                </p>
                <p>
                  Die Karte wird{" "}
                  <strong className="font-semibold text-white/80">
                    erst nach ausdrücklicher Einwilligung
                  </strong>{" "}
                  geladen. Solange keine Einwilligung vorliegt, wird keinerlei Verbindung zu
                  Google hergestellt. Mit dem Laden der Karte werden insbesondere die
                  IP-Adresse sowie Angaben zum verwendeten Browser an Google übertragen; Google
                  kann dabei Cookies setzen. Rechtsgrundlage ist die Einwilligung (Art. 6 Abs. 1
                  lit. a DSGVO, Art. 6 revDSG).
                </p>
                <p>
                  Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden:{" "}
                  <ConsentSettingsLink className="text-cyan-400 underline underline-offset-2 transition-colors hover:text-cyan-300" />
                  . Weitere Informationen finden sich in der{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-cyan-400"
                  >
                    Datenschutzerklärung von Google
                  </a>
                  .
                </p>
              </Section>

              {divider}

              <Section title="Reservierung über WhatsApp">
                <p>
                  Das Reservierungsformular auf dieser Website versendet keine Daten an unsere
                  Server. Die Eingaben (Name, Datum, Uhrzeit, Anzahl Personen) werden
                  ausschliesslich im Browser zu einer vorbereiteten WhatsApp-Nachricht
                  zusammengestellt. Erst wenn der Absendebutton bewusst betätigt wird, öffnet
                  sich WhatsApp und die Nachricht wird an uns übermittelt.
                </p>
                <p>
                  Betreiberin des Dienstes ist die WhatsApp Ireland Limited, Merrion Road,
                  Dublin 4, Irland (Meta-Konzern). Auf die Datenbearbeitung durch WhatsApp haben
                  wir keinen Einfluss. Die übermittelten Angaben verwenden wir ausschliesslich
                  zur Bearbeitung der Reservierung. Rechtsgrundlage ist die Durchführung
                  vorvertraglicher Massnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                </p>
                <p>
                  Wer WhatsApp nicht nutzen möchte, kann uns stattdessen per E-Mail oder Telefon
                  kontaktieren.
                </p>
              </Section>

              {divider}

              <Section title="Kontaktaufnahme per E-Mail oder Telefon">
                <p>
                  Bei einer Kontaktaufnahme werden die übermittelten Angaben zur Bearbeitung des
                  Anliegens gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                  (vorvertragliche Massnahmen) beziehungsweise lit. f (berechtigtes Interesse an
                  der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für
                  diesen Zweck nicht mehr erforderlich sind und keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </p>
              </Section>

              {divider}

              <Section title="Schriftarten">
                <p>
                  Die verwendete Schriftart wird lokal vom eigenen Server ausgeliefert. Es
                  besteht keine Verbindung zu Google Fonts oder anderen externen
                  Schriftanbietern; es werden dabei keine Daten an Dritte übertragen.
                </p>
              </Section>

              {divider}

              <Section title="Externe Links">
                <p>
                  Diese Website verlinkt auf externe Angebote, unter anderem Instagram (Meta
                  Platforms Ireland Limited), WhatsApp sowie den Gutschein-Shop von SumUp. Diese
                  Links werden erst durch einen bewussten Klick aufgerufen. Ab diesem Zeitpunkt
                  gelten ausschliesslich die Datenschutzbestimmungen der jeweiligen Anbieter,
                  auf deren Datenbearbeitung wir keinen Einfluss haben.
                </p>
              </Section>

              {divider}

              <Section title="Keine automatisierte Entscheidungsfindung">
                <p>
                  Es findet weder ein Profiling noch eine automatisierte Entscheidungsfindung im
                  Sinne von Art. 22 DSGVO statt. Personendaten werden nicht verkauft und nicht
                  zu Werbezwecken an Dritte weitergegeben.
                </p>
              </Section>

              {divider}

              <Section title="Rechte der betroffenen Personen">
                <p>Betroffene Personen haben insbesondere das Recht auf:</p>
                <ul className="list-disc space-y-1.5 pl-5 marker:text-cyan-400/50">
                  <li>
                    Auskunft über die bearbeiteten Personendaten (Art. 15 DSGVO, Art. 25 revDSG)
                  </li>
                  <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                  <li>Löschung (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Bearbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO, Art. 28 revDSG)</li>
                  <li>Widerspruch gegen die Bearbeitung (Art. 21 DSGVO)</li>
                  <li>
                    Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3
                    DSGVO)
                  </li>
                </ul>
                <p>
                  Zur Ausübung dieser Rechte genügt eine formlose Mitteilung an die oben
                  genannte Kontaktadresse.
                </p>
              </Section>

              {divider}

              <Section title="Beschwerderecht">
                <p>
                  In der Schweiz besteht ein Melderecht beim Eidgenössischen Datenschutz- und
                  Öffentlichkeitsbeauftragten (EDÖB), Feldeggweg 1, 3003 Bern. Personen mit
                  Aufenthalt in der EU können sich zudem an die für ihren Wohnsitz zuständige
                  Datenschutz-Aufsichtsbehörde wenden.
                </p>
              </Section>

              {divider}

              <Section title="Änderungen">
                <p>
                  Diese Datenschutzerklärung wird angepasst, sobald Änderungen an der Website
                  oder an den eingesetzten Diensten dies erforderlich machen. Es gilt jeweils
                  die auf dieser Seite veröffentlichte Fassung.
                </p>
                <p className="text-white/40">Stand: August 2026</p>
              </Section>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
