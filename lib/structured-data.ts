// Central source of truth for the business's NAP, hours and schema.org nodes.
// Imported by app/layout.tsx (site-wide) and by page-level schema helpers so the
// data stays consistent across every JSON-LD block.

export const SITE_URL = "https://vision-wil.ch"
export const BUSINESS_ID = `${SITE_URL}/#business`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const INSTAGRAM_URL = "https://www.instagram.com/vision_wil/"
export const WHATSAPP_URL = "https://wa.me/41765421540"
export const PHONE = "+41765421540"
export const EMAIL = "Visionwilsg@gmail.com"
export const MAPS_URL = "https://maps.google.com/?q=Vision+Kunst+Caf%C3%A9bar+Marktgasse+43+9500+Wil"

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "15:00",
    closes: "23:00",
  },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "15:00", closes: "01:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "01:00" },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "13:00", closes: "20:00" },
]

// LocalBusiness typed as both a bar and a coffee shop — this is what tells Google
// and AI answer engines that VISION is a valid result for "bar in Wil" *and*
// "café/coffee shop in Wil".
export const businessNode = {
  "@type": ["BarOrPub", "CafeOrCoffeeShop"],
  "@id": BUSINESS_ID,
  name: "VISION KUNST CAFÉBAR",
  alternateName: ["Vision Wil", "Vision Kunst Cafébar Wil"],
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  description:
    "Vision Kunst Cafébar in Wil SG – Bar, Café und Cocktailbar in einem. Tagsüber Barista-Kaffee, abends Signature Cocktails, dazu Kunst, Events und Live-Musik mitten in der Altstadt von Wil.",
  slogan: "Kunst. Kaffee. Cocktails.",
  image: [`${SITE_URL}/images/exterior.png`, `${SITE_URL}/images/bar-neon.png`, `${SITE_URL}/images/interior-seating.png`],
  logo: `${SITE_URL}/icon.svg`,
  priceRange: "$$",
  currenciesAccepted: "CHF",
  paymentAccepted: "Bargeld, Kreditkarte, TWINT",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Marktgasse 43",
    addressLocality: "Wil",
    postalCode: "9500",
    addressRegion: "SG",
    addressCountry: "CH",
  },
  geo: { "@type": "GeoCoordinates", latitude: 47.4619, longitude: 9.0459 },
  hasMap: MAPS_URL,
  openingHoursSpecification,
  servesCuisine: ["Cocktails", "Kaffee", "Snacks", "Apéro"],
  hasMenu: `${SITE_URL}/drinks`,
  areaServed: [
    { "@type": "City", name: "Wil" },
    { "@type": "AdministrativeArea", name: "Wil SG" },
    { "@type": "AdministrativeArea", name: "Ostschweiz" },
  ],
  knowsLanguage: ["de-CH"],
  sameAs: [INSTAGRAM_URL],
}

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "VISION KUNST CAFÉBAR",
  inLanguage: "de-CH",
  publisher: { "@id": BUSINESS_ID },
}

// Site-wide graph injected once in the root layout.
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [businessNode, websiteNode],
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }
}
