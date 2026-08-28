import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FinalHero() {
  return (
    <section
      id="final-hero"
      className="relative min-h-[90vh] md:min-h-screen w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0F0B08] via-[#1A120B] to-[#080605] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-8 sm:space-y-10">
        
        {/* Top Badge */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-noir-800/80 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            The Grand Finale
          </div>
        </div>

        {/* Wedding Film Poster Composition: GK5.png */}
        <div className="relative max-w-[280px] sm:max-w-[360px] md:max-w-[420px] mx-auto w-full aspect-[2/3] rounded-t-full p-2.5 sm:p-3 bg-gradient-to-b from-gold-300 via-gold-500 to-noir-900 border border-gold-400 shadow-2xl">
          <div className="relative w-full h-full rounded-t-full overflow-hidden bg-noir-900">
            <img
              src="/GK5.png"
              alt="Gokul M & Kavipriya B Final Showcase Portrait"
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir-900 via-noir-900/60 to-transparent pointer-events-none" />
          </div>

          <div className="absolute -bottom-6 inset-x-2 sm:inset-x-6 bg-noir-900/95 border border-gold-400/60 py-3 px-4 rounded-xl shadow-xl space-y-0.5">
            <h1 className="font-cinzel text-base sm:text-xl font-bold tracking-[0.12em] text-gold-gradient">
              GOKUL M & KAVIPRIYA B
            </h1>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold-300/80 font-medium">
              Two Souls • One Beautiful Forever
            </p>
          </div>
        </div>

        {/* Subtitles & Dates */}
        <div className="pt-8 space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.25em] font-semibold text-gold-200">
              06 • 07 SEPTEMBER 2026
            </span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <p className="font-cormorant italic text-lg sm:text-xl text-ivory/80 max-w-lg mx-auto">
            "Joined by love, bound by destiny, blessed by all."
          </p>
        </div>

      </div>
    </section>
  );
}
