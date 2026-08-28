import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function CoupleEntrance() {
  return (
    <section
      id="entrance"
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#120E0A] via-[#1A140D] to-[#0E0B08] overflow-hidden flex items-center justify-center"
    >
      {/* Background Volumetric Golden Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-gold-600/15 via-rose-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Couple Entrance Visual (GK4.png) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="flex-1 relative flex justify-center w-full max-w-md"
        >
          {/* Ornate Gold Frame with Soft Glow */}
          <div className="relative w-full aspect-[2/3] rounded-3xl p-3 bg-gradient-to-b from-gold-400/40 via-gold-600/20 to-noir-900 border border-gold-400/50 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-noir-900">
              {/* Couple Image GK4.png */}
              <img
                src="/GK4.png"
                alt="Gokul M & Kavipriya B Wedding Entrance"
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
              />

              {/* Bottom Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent pointer-events-none" />

              {/* Foreground Floating Petals */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-rose-400/50 blur-[0.5px] animate-ping" />
              <div className="absolute bottom-12 left-6 w-2.5 h-2.5 rounded-full bg-gold-300/60 blur-[0.5px] animate-pulse" />
            </div>

            {/* Traditional Ribbon Label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-noir-900 border border-gold-400/60 shadow-xl">
              <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-300 whitespace-nowrap">
                Sacred Entrance
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Poetic Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Heart className="w-3.5 h-3.5 fill-gold-400/40" />
            The Grand Walk
          </div>

          <div className="space-y-3">
            <p className="font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase text-gold-400 font-semibold">
              Together
            </p>
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gold-gradient">
              FOREVER BEGINS
            </h2>
          </div>

          <p className="font-cormorant italic text-xl md:text-2xl text-ivory/85 leading-relaxed font-light">
            "As sacred melodies echo and fragrant blossoms descend, two souls step into eternity surrounded by boundless joy and divine grace."
          </p>

          <div className="pt-4 grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
            <div className="p-4 rounded-xl luxury-card text-center space-y-1">
              <span className="font-cinzel text-xs text-gold-400 uppercase tracking-widest block">Groom</span>
              <span className="font-serif text-base font-bold text-ivory">Gokul M</span>
            </div>
            <div className="p-4 rounded-xl luxury-card text-center space-y-1">
              <span className="font-cinzel text-xs text-gold-400 uppercase tracking-widest block">Bride</span>
              <span className="font-serif text-base font-bold text-ivory">Kavipriya B</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
