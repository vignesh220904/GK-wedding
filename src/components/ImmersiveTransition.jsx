import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Diamond, Heart } from 'lucide-react';

export default function ImmersiveTransition() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#0E0B08] via-[#15100B] to-[#0A0806] overflow-hidden text-center flex flex-col items-center justify-center">
      {/* Golden Stardust Vortex */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gold-500/10 via-rose-500/10 to-gold-400/15 blur-[100px] animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-16 h-16 rounded-full border border-gold-400/50 bg-gradient-to-br from-gold-400/20 to-transparent mx-auto flex items-center justify-center text-gold-300 shadow-[0_0_30px_rgba(200,157,75,0.3)]"
        >
          <Sparkles className="w-8 h-8 animate-spin-slow" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
        >
          <span className="font-cinzel text-xs tracking-[0.4em] uppercase text-gold-400 font-semibold block">
            A Symphony of Devotion
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide">
            WHERE LOVE MEETS TRADITION
          </h2>
          <p className="font-cormorant italic text-lg sm:text-2xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            "From the sacred glow of the mangalasutra to the rhythm of celebratory drums, every golden moment is etched into eternity."
          </p>
        </motion.div>

        {/* Decorative Golden Line Divider */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
          <span className="font-cinzel text-xs text-gold-400">✦ ✦ ✦</span>
          <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-gold-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
