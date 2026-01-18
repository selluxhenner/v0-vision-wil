export function VisionAbout() {
  return (
    <section id="vision" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Vision</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Kunst, Kaffee, Cocktails - Unsere Story</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/images/bar-neon.png" alt="Vision Bar" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-black text-white uppercase tracking-tight">
                Mehr als nur <span className="text-cyan-400 neon-glow">eine Bar</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed">
                VISION KUNST CAFÉBAR ist dein urbaner Rückzugsort in Wil. Wir vereinen Premium-Cocktails, exzellenten
                Barista-Kaffee und eine einzigartige Industrial-Art-Atmosphäre.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Ob am Morgen für deinen perfekten Espresso oder am Abend für kreative Drinks - bei uns findest du die
                richtige Stimmung für jeden Moment.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">17+</div>
                  <div className="text-sm text-white/60 uppercase">Cocktails</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">4</div>
                  <div className="text-sm text-white/60 uppercase">Bartender</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">1</div>
                  <div className="text-sm text-white/60 uppercase">Vision</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-lg p-8 md:p-12 border border-cyan-500/20">
            <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-12 text-center">
              Unser <span className="text-cyan-400 neon-glow">Team</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Steven */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                  <span className="text-4xl font-black text-cyan-400">S</span>
                </div>
                <h4 className="text-2xl font-black text-white uppercase">Steven</h4>
                <p className="text-cyan-400 font-medium">Head Bartender</p>
                <p className="text-white/60">
                  Lieblingsgetränk: <span className="text-white">Overkill / Espresso Martini</span>
                </p>
                <p className="text-white/60 text-sm">Anwesend: Montag, Dienstag, Freitag, Samstag</p>
              </div> 
              
              {/* Steven */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                  <span className="text-4xl font-black text-cyan-400">S</span>
                </div>
                <h4 className="text-2xl font-black text-white uppercase">Seraina</h4>
                <p className="text-cyan-400 font-medium">Bartender</p>
                <p className="text-white/60">
                  Lieblingsgetränk: <span className="text-white">Kiwi Sour ~ erfrischend süss</span>
                </p>
                <p className="text-white/60 text-sm">Anwesend: Donnerstag</p>
              </div>
              
              {/* Steven */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                  <span className="text-4xl font-black text-cyan-400">C</span>
                </div>
                <h4 className="text-2xl font-black text-white uppercase">Cyril</h4>
                <p className="text-cyan-400 font-medium">Bartender</p>
                <p className="text-white/60">
                  Lieblingsgetränk: <span className="text-white"></span>
                </p>
                <p className="text-white/60 text-sm">Anwesend: Sonntag</p>
              </div>
              
              {/* Steven */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/50 flex items-center justify-center">
                  <span className="text-4xl font-black text-cyan-400">M</span>
                </div>
                <h4 className="text-2xl font-black text-white uppercase">Mirjam</h4>
                <p className="text-cyan-400 font-medium">Bartender</p>
                <p className="text-white/60">
                  Lieblingsgetränk: <span className="text-white"></span>
                </p>
                <p className="text-white/60 text-sm">Anwesend: Mitwoch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
