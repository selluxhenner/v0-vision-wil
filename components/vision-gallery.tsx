export function VisionGallery() {
  const galleryImages = [
    { src: "/images/bar-neon.png", alt: "Bar Atmosphäre" },
    { src: "/drinks/image (32).JPG", alt: "Bar" },
    { src: "/drinks/image (28).JPG", alt: "Bar" },
    { src: "/images/espresso.png", alt: "Barista Kaffee" },
    { src: "/drinks/image (33).JPG", alt: "Bar" },
    { src: "/images/charcuterie.png", alt: "Apéro" },
    { src: "/inside/image1.jpeg", alt: "Interior Image 1" },
    { src: "/inside/image2.jpeg", alt: "Interior Image 2" },
    { src: "/inside/image (36).JPG", alt: "Interior Image 3" },
    { src: "/inside/image (37).JPG", alt: "Interior Image 4" },
    { src: "/inside/image (38).JPG", alt: "Interior Image 5" },
    { src: "/inside/image (39).JPG", alt: "Interior Image 5" },
    { src: "/images/cocktail-poster.png", alt: "Cocktail Art" },
    { src: "/images/exterior.png", alt: "Aussenansicht" },
  ]

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">Galerie</h2>
            <p className="text-white/60 text-lg">Entdecke unsere Welt</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg border border-cyan-500/20 group cursor-pointer"
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
