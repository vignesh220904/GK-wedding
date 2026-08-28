import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function FinalHero() {
  return (
    <section
      id="final-hero"
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#0F0B08] via-[#1A120B] to-[#080605] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Golden Sunset Lighting & Volumetric Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-amber-600/20 via-gold-500/15 to-transparent rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Editorial Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-400/40 bg-noir-800/80 text-gold-300 text-xs font-cinzel tracking-[0.35em] uppercase shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            The Grand Finale
          </div>
        </motion.div>

        {/* Wedding Film Poster Composition: GK5.png in Monumental Golden Arch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-md md:max-w-lg mx-auto w-full aspect-[2/3] rounded-t-full p-3 sm:p-4 bg-gradient-to-b from-gold-300 via-gold-500 to-noir-900 border-2 border-gold-400 shadow-[0_35px_100px_rgba(0,0,0,0.95)]"
        >
          {/* Inner Image Container */}
          <div className="relative w-full h-full rounded-t-full overflow-hidden bg-noir-900">
            {/* Couple Image GK5.png */}
            <img
              src="/GK5.png"
              alt="Gokul M & Kavipriya B Final Showcase Portrait"
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-1000 hover:scale-105"
            />

            {/* Bottom Gradient Fade */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-noir-900 via-noir-900/60 to-transparent pointer-events-none" />

            {/* Subtle Golden Lens Flare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-amber-300/15 pointer-events-none" />
          </div>

          {/* Grand Names Overlay inside Poster Bottom */}
          <div className="absolute -bottom-8 inset-x-4 sm:inset-x-8 bg-noir-900/95 backdrop-blur-xl border border-gold-400/60 py-4 px-6 rounded-2xl shadow-2xl space-y-1">
            <h1 className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.15em] text-gold-gradient">
              GOKUL M & KAVIPRIYA B
            </h1>
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-300/80 font-medium">
              Two Souls • One Beautiful Forever
            </p>
          </div>
        </motion.div>

        {/* Cinematic Subtitles & Dates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="pt-10 space-y-4"
        >
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent to-gold-400" />
            <span className="font-cinzel text-sm sm:text-base tracking-[0.3em] font-semibold text-gold-200">
              06 • 07 SEPTEMBER 2026
            </span>
            <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent to-gold-400" />
          </div>

          <p className="font-cormorant italic text-xl md:text-2xl text-ivory/80 max-w-xl mx-auto">
            "Joined by love, bound by destiny, blessed by all."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
