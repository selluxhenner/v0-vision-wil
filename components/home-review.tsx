"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const GOOGLE_MAPS_URL =
    "https://www.google.com/maps/place/Vision+Kunst+Caf%C3%A9bar/@47.4665094,9.0458687,622m/data=!3m2!1e3!4b1!4m6!3m5!1s0x479aeb732339e233:0x3f2c85816d090551!8m2!3d47.4665094!4d9.0484436!16s%2Fg%2F11ybyjkm7p?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"

const reviews = [
    {
        name: "Reto Huser",
        badge: "Local Guide",
        time: "Vor einem Jahr",
        short: "Gemütliches Café & Bar in der wunderschönen Altstadt.",
        text: "Gemütliches Café & Bar in der wunderschönen Altstadt. Café vom Chef super fein. Auch am Abend auf ein Bier oder Drink sehr zu empfehlen. Zudem Leute jeden Alters anzutreffen, einfach Top.",
        scores: null,
    },
    {
        name: "Rebecca R.",
        badge: null,
        time: "Vor einem Jahr",
        short: "Ein Ort zum Wohlfühlen – die Vision Bar.",
        text: "Schon beim Betreten wird man herzlich empfangen und fühlt sich sofort willkommen. Die Gastfreundschaft ist einfach wunderbar. Der Prosecco ist herrlich und die Drinks können sich sehen lassen – mit viel Sorgfalt und Stil serviert. Geschmackvoll, charmant und ein bisschen besonders.",
        scores: { food: 5, service: 5, atmo: 5 },
    },
    {
        name: "Salziger Noahh",
        badge: null,
        time: "Vor 10 Monaten",
        short: "Super Bedienung und absolut geile Drinks.",
        text: "Super Bedienung und absolut geile Drinks – sehr zu empfehlen! Vor allem der Espresso Martini ist ein absolutes Highlight.",
        scores: { food: 5, service: 5, atmo: 5 },
    },
    {
        name: "Jonas Guscht",
        badge: null,
        time: "Vor einem Jahr",
        short: "Erster Eindruck war super – freundliches Team!",
        text: "Heute zum ersten Mal offen – erster Eindruck war super! Freundliches, junges und sehr nettes Team. Komme gerne wieder!",
        scores: { food: 5, service: 5, atmo: 5 },
    },
    {
        name: "Lypro Hosli",
        badge: null,
        time: "Vor 10 Monaten",
        short: "Ein gelungener Abend in der Vision Bar.",
        text: "Das Ambiente ist stilvoll, aber entspannt – genau die richtige Mischung für einen tollen Abend mit Freunden. Die Mojitos waren frisch und perfekt abgestimmt. Die Fleischplatte war reichlich und die Bruschetta herrlich knusprig.",
        scores: { food: 5, service: 5, atmo: 5 },
    },
]

function Stars() {
    return (
        <div style={{ display: "flex", gap: 3 }}>
            {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00d4e8">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    )
}

export function ReviewSlider() {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(1)

    const go = useCallback((idx: number) => {
        setDirection(idx > current ? 1 : -1)
        setCurrent(idx)
    }, [current])

    const next = useCallback(() => {
        setDirection(1)
        setCurrent((p) => (p + 1) % reviews.length)
    }, [])

    const prev = useCallback(() => {
        setDirection(-1)
        setCurrent((p) => (p - 1 + reviews.length) % reviews.length)
    }, [])

    useEffect(() => {
        const t = setInterval(next, 3500)
        return () => clearInterval(t)
    }, [next])

    const r = reviews[current]

    const variants = {
        enter: (d: number) => ({ opacity: 0, x: d * 48, filter: "blur(6px)" }),
        center: { opacity: 1, x: 0, filter: "blur(0px)" },
        exit: (d: number) => ({ opacity: 0, x: d * -48, filter: "blur(6px)" }),
    }

    return (
        <section
            style={{ background: "#050810", padding: "96px 24px", position: "relative", overflow: "hidden" }}
        >
            {/* Ambient glow */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0,212,232,0.05) 0%, transparent 70%)",
            }} />

            {/* Decorative large quote mark */}
            <div style={{
                position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)",
                fontSize: "18rem", lineHeight: 1, color: "rgba(0,212,232,0.03)",
                fontFamily: "Georgia, serif", userSelect: "none", pointerEvents: "none",
                fontWeight: 900,
            }}>
                "
            </div>

            <div style={{flexDirection: "column", alignItems: "center",
    display: "flex", margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
                    <div>
                        <p style={{
                            fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase",
                            color: "rgba(255,255,255,0.2)", fontWeight: 700, marginBottom: 10,
                        }}>
                            Google Bewertungen · Vision Kunst Cafébar
                        </p>
                        <h2 style={{
                            fontSize: "clamp(1.7rem, 4vw, 2.6rem)", fontWeight: 900,
                            textTransform: "uppercase", letterSpacing: "-0.02em",
                            color: "#ffffff", margin: 0, lineHeight: 1.05,
                        }}>
                            Was Gäste über uns <span style={{ color: "#00d4e8" }}>sagen</span>
                        </h2>
                    </div>

                    {/* 5.0 badge */}
                    <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex", alignItems: "center", gap: 12,
                            padding: "14px 20px",
                            background: "rgba(0,212,232,0.05)",
                            border: "1px solid rgba(0,212,232,0.2)",
                            textDecoration: "none",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,212,232,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,212,232,0.05)")}
                    >
                        <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#fff", lineHeight: 1 }}>5.0</span>
                        <div>
                            <Stars />
                            <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 5 }}>
                                Auf Google ansehen
                            </div>
                        </div>
                    </a>
                </div>

                {/* Slide area */}
                <div style={{ position: "relative", minHeight: 260, maxWidth: 700 }}>
                    <AnimatePresence custom={direction} mode="wait">
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Card */}
                            <div style={{
                                borderLeft: "2px solid #00d4e8",
                                paddingLeft: 36,
                                paddingRight: 8,
                            }}>
                                {/* Stars + meta */}
                                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                                    <Stars />
                                    {r.scores && (
                                        <div style={{ display: "flex", gap: 12 }}>
                                            {[["Food", r.scores.food], ["Service", r.scores.service], ["Atmosphäre", r.scores.atmo]].map(([label, val]) => (
                                                <span key={label as string} style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
                                                    {label} <span style={{ color: "#00d4e8" }}>{val}/5</span>
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Quote */}
                                <blockquote style={{
                                    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                                    lineHeight: 1.75,
                                    color: "rgba(255,255,255,0.8)",
                                    fontStyle: "italic",
                                    margin: "0 0 28px",
                                    fontFamily: "Georgia, serif",
                                }}>
                                    "{r.text}"
                                </blockquote>

                                {/* Author */}
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <div style={{
                                        width: 38, height: 38, borderRadius: "50%",
                                        background: "rgba(0,212,232,0.1)",
                                        border: "1px solid rgba(0,212,232,0.3)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "0.85rem", fontWeight: 800, color: "#00d4e8",
                                    }}>
                                        {r.name[0]}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fff", letterSpacing: "0.03em" }}>
                                            {r.name}
                                            {r.badge && (
                                                <span style={{ marginLeft: 8, fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#00d4e8", fontWeight: 600 }}>
                                                    · {r.badge}
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{r.time}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div style={{ display: "flex", gap: "12px", alignItems: "center", justifyContent: "space-between", marginTop: 48 }}>
                    {/* Prev / Next */}
                    <div style={{ display: "flex", gap: 8 }}>

                        <button
                            key={"←"}
                            onClick={prev}
                            style={{
                                width: 44, height: 44,
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "1rem", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#00d4e8"
                                e.currentTarget.style.color = "#00d4e8"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                                e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                            }}
                        >
                            {"←"}
                        </button>

                    </div>
                    {/* Dot + index */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => go(i)}
                                style={{
                                    width: i === current ? 32 : 6,
                                    height: 2,
                                    background: i === current ? "#00d4e8" : "rgba(255,255,255,0.15)",
                                    border: "none", padding: 0, cursor: "pointer",
                                    transition: "all 0.35s ease",
                                }}
                                aria-label={`Review ${i + 1}`}
                            />
                        ))}
                        <span style={{ marginLeft: 8, fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>
                            {String(current + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
                        </span>
                    </div>

                    {/* Prev / Next */}
                    <div style={{ display: "flex", gap: 8 }}>
                        <button
                            key={"→"}
                            onClick={next}
                            style={{
                                width: 44, height: 44,
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.5)",
                                fontSize: "1rem", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                transition: "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#00d4e8"
                                e.currentTarget.style.color = "#00d4e8"
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                                e.currentTarget.style.color = "rgba(255,255,255,0.5)"
                            }}
                        >
                            {"→"}
                        </button>
                    </div>
                </div>
                {/* Thumb strip
        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          {reviews.map((rev, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              style={{
                flex: 1,
                background: "transparent",
                border: `1px solid ${i === current ? "rgba(0,212,232,0.35)" : "rgba(255,255,255,0.06)"}`,
                borderTop: `2px solid ${i === current ? "#00d4e8" : "transparent"}`,
                padding: "12px 10px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ fontSize: "0.68rem", fontWeight: 700, color: i === current ? "#fff" : "rgba(255,255,255,0.3)", marginBottom: 4, letterSpacing: "0.03em" }}>
                {rev.name}
              </div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.2)", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {rev.short}
              </div>
            </button>
          ))}
        </div> */}

            </div>
        </section>
    )
}