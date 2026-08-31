export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Startseite", href: "/" },
    { label: "Über uns", href: "/about" },
    { label: "Drinks & Food", href: "/drinks" },
    { label: "Kontakt", href: "/contact" },
  ];

  const hours = [
    { day: "Mo – Do", time: "15:00 – 23:00" },
    { day: "Fr", time: "15:00 – 01:00" },
    { day: "Sa", time: "09:00 – 12:30 & 15:30 – 01:00" },
    { day: "So", time: "13:00 – 20:00" },
  ];

  return (
    <footer style={{ background: "#050810", color: "rgba(255,255,255,0.45)", fontFamily: "inherit" }}>

      {/* Top border line — cyan flash */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #00d4e8 40%, #00d4e8 60%, transparent)" }} />

      {/* Main content */}
      <div
        className="grid grid-cols-1 gap-10 px-4 pt-12 pb-10 sm:px-6 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12 md:px-6 md:pt-16 md:pb-12"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Brand column */}
        <div>
          <div
            style={{
              fontWeight: 900,
              fontSize: "1.25rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#ffffff",
              marginBottom: "6px",
            }}
          >
            VISION <span style={{ color: "#00d4e8" }}>|</span> STEVEN
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
              marginBottom: "24px",
            }}
          >
            Kunst · Kaffee · Cocktails
          </div>
          <address style={{ fontStyle: "normal", fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(255,255,255,0.4)" }}>
            Marktgasse 43<br />
            9500 Wil SG<br />
            Schweiz
          </address>
          <div style={{ marginTop: "16px", fontSize: "0.88rem", lineHeight: 2 }}>
            <a className="text-white/40 hover:text-[#00d4e8] transition-colors duration-200"
              href="https://wa.me/41765421540"
              style={{ display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              >
              +41 76 542 15 40
            </a>
            <a className="text-white/40 hover:text-[#00d4e8] transition-colors duration-200"
              href="mailto:Visionwilsg@gmail.com"
              style={{ display: "block", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              >
              Visionwilsg@gmail.com
            </a>
          </div>
        </div>

        {/* Nav column */}
        <div>
          <div
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Navigation
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {links.map((l) => (
              <a className="text-white/40 hover:text-[#ffffff] transition-colors duration-200"
                key={l.label}
                href={l.href}
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  width: "fit-content",
                }}
                >
                {l.label}
              </a>
            ))}
            <a className="text-white/40 hover:text-[#00d4e8] transition-colors duration-200"
              href="/contact"
              style={{
                marginTop: "8px",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#00d4e8",
                textDecoration: "none",
                width: "fit-content",
                borderBottom: "1px solid rgba(0,212,232,0.3)",
                paddingBottom: "2px",
                transition: "border-color 0.2s",
              }} >
              Tisch reservieren →
            </a>
          </nav>
        </div>

        {/* Hours column */}
        <div>
          <div
            style={{
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              marginBottom: "20px",
              fontWeight: 700,
            }}
          >
            Öffnungszeiten
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {hours.map((h) => (
              <div key={h.day} style={{ display: "flex", justifyContent: "space-between", gap: "16px", fontSize: "0.85rem" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>{h.day}</span>
                <span style={{ color: "rgba(255,255,255,0.6)", textAlign: "right" }}>{h.time}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.6,
            }}
          >
            Parkplätze verfügbar<br />
            <span style={{ fontSize: "0.75rem" }}>Vor der Linde ab 19:00 Uhr</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "20px 24px",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)" }}>
          © {currentYear} Vision Kunst Cafébar GmbH · Wil SG
          <a
            className="hover:text-[#00d4e8] transition-colors duration-200"
            href="/impressum"
            style={{ marginLeft: "12px", color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
          >
            Impressum
          </a>
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.12)",
          }}
        >
          Bar Wil · Cocktail Bar · Event Lokal · Café Bar
        </span>
      </div>

    </footer>
  );
}