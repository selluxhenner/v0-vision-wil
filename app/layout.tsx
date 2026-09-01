import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { ScrollToTop } from "@/components/scroll-to-top"
import { JsonLd } from "@/components/json-ld"
import { ConsentBanner } from "@/components/consent-banner"
import { siteGraph, SITE_URL } from "@/lib/structured-data"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

const siteUrl = SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bar, Café & Cocktailbar in Wil SG | VISION KUNST CAFÉBAR",
    template: "%s | VISION KUNST CAFÉBAR Wil",
  },
  description:
    "Vision Kunst Cafébar in Wil SG: Bar, Café & Cocktailbar an der Marktgasse 43. Barista-Kaffee am Tag, Signature Cocktails am Abend, Kunst & Events. Dein Treffpunkt in Wil.",
  keywords: [
    "Bar Wil",
    "Café Wil",
    "Kaffee Wil",
    "Kafi Wil",
    "Kunst Café Wil",
    "Kunst Kaffee Wil",
    "Events Wil",
    "Cocktail Bar Wil",
    "Cocktailbar Wil",
    "Cafébar Wil",
    "Coffee Shop Wil",
    "Bar Wil SG",
    "Wil Ostschweiz Bar",
    "Marktgasse Wil",
    "VISION Wil",
  ],
  authors: [{ name: "VISION KUNST CAFÉBAR" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: siteUrl,
    siteName: "VISION KUNST CAFÉBAR",
    title: "VISION KUNST CAFÉBAR | Wil",
    description:
      "Kunst, Kaffee & Cocktails in der Marktgasse 43, Wil SG. Signature Cocktails, Kaffeespezialitäten und eine einzigartige Atmosphäre.",
    images: [
      {
        url: "/images/exterior.png",
        width: 1200,
        height: 630,
        alt: "VISION KUNST CAFÉBAR Wil – Aussenansicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VISION KUNST CAFÉBAR | Wil",
    description:
      "Kunst, Kaffee & Cocktails in der Marktgasse 43, Wil SG. Signature Cocktails, Kaffeespezialitäten und eine einzigartige Atmosphäre.",
    images: ["/images/exterior.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <JsonLd data={siteGraph} />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <ConsentBanner />
      </body>
    </html>
  )
}
