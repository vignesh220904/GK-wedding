import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function EndingSection({ onOpenWishes }) {
  return (
    <footer className="relative min-h-[90vh] w-full py-24 px-6 bg-gradient-to-b from-[#080605] via-[#050403] to-[#000000] overflow-hidden flex flex-col items-center justify-between text-center select-none">
      
      {/* Background Soft Stardust */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gold-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 my-auto space-y-10 max-w-3xl mx-auto">
        
        {/* Solitary Eternal Diya */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Flame Glow */}
          <div className="absolute -top-10 w-24 h-24 rounded-full bg-[#FFB703]/30 blur-2xl pointer-events-none" />

          {/* Flickering Flame */}
          <div className="relative -top-2 animate-flame">
            <svg width="24" height="38" viewBox="0 0 24 38" fill="none">
              <path
                d="M12 0C12 0 21 14 21 24C21 31 17 36 12 36C7 36 3 31 3 24C3 14 12 0 12 0Z"
                fill="url(#endFlameOuter)"
              />
              <path
                d="M12 11C12 11 17 19 17 25C17 29 14.5 32 12 32C9.5 32 7 29 7 25C7 19 12 11 12 11Z"
                fill="url(#endFlameCore)"
              />
              <defs>
                <linearGradient id="endFlameOuter" x1="12" y1="0" x2="12" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD166" />
                  <stop offset="0.6" stopColor="#FF9F1C" />
                  <stop offset="1" stopColor="#E71D36" />
                </linearGradient>
                <linearGradient id="endFlameCore" x1="12" y1="11" x2="12" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="0.5" stopColor="#FFE49E" />
                  <stop offset="1" stopColor="#FFB703" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Brass Lamp Base */}
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
            <path
              d="M5 5C13 19 47 19 55 5C50 14 38 20 30 20C22 20 10 14 5 5Z"
              fill="#DFC07B"
              stroke="#EBD8A6"
              strokeWidth="0.8"
            />
            <ellipse cx="30" cy="5" rx="25" ry="4" fill="#644A18" stroke="#DFC07B" strokeWidth="0.8" />
            <path d="M24 19H36V23H24V19Z" fill="#A98135" />
          </svg>
        </motion.div>

        {/* Poetic Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="space-y-4"
        >
          <p className="font-cinzel text-xs sm:text-sm tracking-[0.4em] uppercase text-gold-300/80 font-semibold">
            With Love,
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            WE BEGIN FOREVER
          </h2>
          <div className="font-script text-4xl sm:text-5xl text-gold-200 pt-2">
            Gokul M & Kavipriya B
          </div>
        </motion.div>

        {/* Guest Blessings Interactive Trigger */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-4"
        >
          <button
            onClick={onOpenWishes}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-noir-900 font-cinzel text-xs tracking-widest font-bold uppercase hover:brightness-110 shadow-lg shadow-gold-500/20 inline-flex items-center gap-2 transition-all hover:scale-105"
          >
            <Heart className="w-4 h-4 fill-noir-900 text-noir-900" />
            Leave Your Blessings & Wishes
          </button>
        </motion.div>

        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="pt-8"
        >
          <span className="font-cinzel text-2xl tracking-[0.3em] text-gold-400/90 font-bold">
            G × K
          </span>
        </motion.div>

      </div>

      {/* Subtle Copyright & Dedication */}
      <div className="relative z-10 pt-12 border-t border-gold-500/10 w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-ivory/50 tracking-wider">
        <p>© 2026 FOREVER — Gokul M & Kavipriya B Wedding Story</p>
        <p className="font-cinzel text-gold-400/70 pt-2 sm:pt-0">
          JVS Sakthi Mahal • Tindivanam – 604001
        </p>
      </div>

    </footer>
  );
}
