import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Frame } from 'lucide-react';

export default function PremiumFrame() {
  return (
    <section
      id="frame"
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#0E0B08] via-[#18120C] to-[#0F0B08] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Golden Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold-500/15 via-gold-300/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 space-y-10 text-center">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Royal Gallery Exhibit
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            TIMELESS MASTERPIECE
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-ivory/80 max-w-lg mx-auto">
            A portrait enshrined in golden grace and lifelong vows
          </p>
        </div>

        {/* Ornate Gold Royal Frame Container: GK7.png */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-xl mx-auto w-full p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-[#D4AA52] via-[#8A6726] to-[#3D2C0C] shadow-[0_30px_100px_rgba(0,0,0,0.95)] border-4 border-[#FFE49E]"
        >
          {/* Inner Ornate Filigree Border */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold-300/60 bg-noir-900 shadow-inner group">
            
            {/* Genuine GK7.png Asset */}
            <motion.img
              src="/GK7.png"
              alt="Gokul M & Kavipriya B Framed Wedding Artwork"
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle Vignette & Light Flares */}
            <div className="absolute inset-0 bg-gradient-to-tr from-noir-900/30 via-transparent to-gold-400/20 pointer-events-none" />

            {/* Bottom Plaque Badge */}
            <div className="absolute bottom-4 inset-x-8 bg-noir-900/90 backdrop-blur-md border border-gold-400/50 py-2.5 px-4 rounded-xl shadow-xl flex items-center justify-between">
              <div>
                <p className="font-cinzel text-[11px] font-bold text-gold-gradient tracking-wider text-left">
                  GOKUL M & KAVIPRIYA B
                </p>
                <p className="text-[9px] font-sans uppercase tracking-widest text-gold-300/70 text-left">
                  Forever • September 2026
                </p>
              </div>
              <div className="text-gold-400 font-cinzel text-xs">✦</div>
            </div>
          </div>

          {/* Corner Floral Rosettes */}
          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gold-400 border-2 border-gold-200 shadow-[0_0_15px_#FFD166] flex items-center justify-center text-noir-900 text-xs font-bold">
            ✦
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-400 border-2 border-gold-200 shadow-[0_0_15px_#FFD166] flex items-center justify-center text-noir-900 text-xs font-bold">
            ✦
          </div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gold-400 border-2 border-gold-200 shadow-[0_0_15px_#FFD166] flex items-center justify-center text-noir-900 text-xs font-bold">
            ✦
          </div>
          <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-gold-400 border-2 border-gold-200 shadow-[0_0_15px_#FFD166] flex items-center justify-center text-noir-900 text-xs font-bold">
            ✦
          </div>
        </motion.div>

      </div>
    </section>
  );
}
