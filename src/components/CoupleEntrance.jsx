import React from 'react';
import { Heart } from 'lucide-react';

export default function CoupleEntrance() {
  return (
    <section
      id="entrance"
      className="relative min-h-[85vh] md:min-h-screen w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#120E0A] via-[#1A140D] to-[#0E0B08] overflow-hidden flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Left Column: Couple Entrance Visual (GK4.png) */}
        <div className="flex-1 relative flex justify-center w-full max-w-[280px] sm:max-w-[340px] md:max-w-md">
          <div className="relative w-full aspect-[2/3] rounded-3xl p-2.5 bg-gradient-to-b from-gold-400/35 via-gold-600/15 to-noir-900 border border-gold-400/40 shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-noir-900">
              <img
                src="/GK4.png"
                alt="Gokul M & Kavipriya B Wedding Entrance"
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-noir-900 border border-gold-400/50 shadow-md">
              <span className="font-cinzel text-[9px] tracking-[0.25em] uppercase text-gold-300 whitespace-nowrap">
                Sacred Entrance
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Poetic Narrative */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Heart className="w-3.5 h-3.5 fill-gold-400/40" />
            The Grand Walk
          </div>

          <div className="space-y-1 sm:space-y-2">
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-400 font-semibold">
              Together
            </p>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gold-gradient">
              FOREVER BEGINS
            </h2>
          </div>

          <p className="font-cormorant italic text-base sm:text-xl text-ivory/85 leading-relaxed font-light">
            "As sacred melodies echo and fragrant blossoms descend, two souls step into eternity surrounded by boundless joy and divine grace."
          </p>

          <div className="pt-2 grid grid-cols-2 gap-3 max-w-xs mx-auto lg:mx-0">
            <div className="p-3 rounded-xl luxury-card text-center space-y-0.5">
              <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-widest block">Groom</span>
              <span className="font-serif text-sm font-bold text-ivory">Gokul M</span>
            </div>
            <div className="p-3 rounded-xl luxury-card text-center space-y-0.5">
              <span className="font-cinzel text-[10px] text-gold-400 uppercase tracking-widest block">Bride</span>
              <span className="font-serif text-sm font-bold text-ivory">Kavipriya B</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
