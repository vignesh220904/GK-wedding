import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative min-h-[90vh] md:min-h-screen w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0D0B09] via-[#16120E] to-[#0F0C09] overflow-hidden flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/20 bg-noir-800/40 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Editorial Portrait
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            THE COUPLE
          </h2>

          <p className="font-cormorant italic text-base sm:text-xl text-ivory/80 max-w-lg mx-auto">
            "Two souls, one beautiful story."
          </p>
        </div>

        {/* Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Story Vignette */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="luxury-card p-5 sm:p-7 rounded-2xl border-l-4 border-l-gold-500 space-y-2">
              <span className="font-cinzel text-[10px] tracking-[0.25em] text-gold-400 uppercase block font-semibold">
                The Groom
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory">
                GOKUL M
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed">
                A gentleman of warmth, determination, and quiet grace, embarking on life’s greatest adventure hand in hand with his beloved.
              </p>
            </div>

            <div className="luxury-card p-5 sm:p-7 rounded-2xl border-l-4 border-l-gold-500 space-y-2">
              <span className="font-cinzel text-[10px] tracking-[0.25em] text-gold-400 uppercase block font-semibold">
                The Bride
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-ivory">
                KAVIPRIYA B
              </h3>
              <p className="font-sans text-xs sm:text-sm text-ivory/70 leading-relaxed">
                Radiating elegance, affection, and joyful laughter, bringing boundless color and happiness into their shared future.
              </p>
            </div>
          </div>

          {/* Center Column: GK3.png Inside Large Ornate Arch */}
          <div className="lg:col-span-8 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-md aspect-[2/3] rounded-t-full p-2.5 sm:p-3.5 bg-gradient-to-b from-gold-400/30 via-gold-600/15 to-noir-900 border border-gold-400/35 shadow-2xl">
              <div className="relative w-full h-full rounded-t-full overflow-hidden bg-noir-900">
                <img
                  src="/GK3.png"
                  alt="Gokul M & Kavipriya B Seated Couple Portrait"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-noir-900 via-noir-900/50 to-transparent pointer-events-none" />
              </div>

              <div className="absolute -bottom-3 right-4 sm:right-6 bg-noir-900/90 px-4 py-1.5 rounded-lg border border-gold-400/40 shadow-lg text-left hidden sm:block">
                <p className="font-cinzel text-[9px] tracking-[0.2em] uppercase text-gold-400">
                  Gokul M & Kavipriya B
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
