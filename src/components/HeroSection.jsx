import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Subtle GPU-accelerated transforms (No jitter, no layout shifts)
  const yBg = useTransform(scrollY, [0, 700], [0, 100]);
  const yCouple = useTransform(scrollY, [0, 700], [0, 35]);
  const opacityHero = useTransform(scrollY, [0, 500], [1, 0.35]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#120E0A] via-[#1A140F] to-[#0D0B09] pt-20 md:pt-24 pb-12 px-4 sm:px-6 md:px-12"
    >
      {/* Background Depth Layer: Warm Gold Ambient Aura */}
      <motion.div
        style={{ y: yBg, opacity: opacityHero }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="w-[320px] sm:w-[500px] md:w-[750px] h-[320px] sm:h-[500px] md:h-[750px] rounded-full bg-gradient-to-tr from-gold-600/15 via-gold-400/20 to-transparent blur-[100px]" />
        
        {/* Ornate Golden Arch Contour */}
        <div className="absolute top-12 sm:top-16 w-[300px] sm:w-[420px] md:w-[580px] h-[600px] sm:h-[720px] md:h-[820px] border border-gold-500/25 rounded-t-full pointer-events-none">
          <div className="absolute inset-2 border border-gold-400/15 rounded-t-full border-dashed" />
        </div>
      </motion.div>

      {/* Main Content & Couple Layer (GK1.png) */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 my-auto">
        
        {/* Left Column: Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[10px] sm:text-[11px] font-cinzel tracking-[0.25em] uppercase text-gold-300">
              The Royal Wedding Celebration
            </span>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.35em] uppercase text-gold-300/80">
              Two Hearts • One Beautiful Journey
            </p>
            
            <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gold-gradient">
              GOKUL M
            </h1>
            <p className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-200 lg:-my-2">
              &
            </p>
            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gold-gradient">
              KAVIPRIYA B
            </h2>
          </div>

          <p className="font-cormorant italic text-base sm:text-xl md:text-2xl text-ivory/85 max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
            "With blessings from family and boundless love, two souls step into a sacred covenant of forever."
          </p>

          {/* Quick Date Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-cinzel tracking-widest text-gold-300">
            <div className="px-3.5 py-2 rounded-xl bg-noir-800/80 border border-gold-500/20">
              <span className="text-ivory/60 block text-[9px] uppercase tracking-wider">Reception</span>
              <span className="font-semibold text-gold-200">06 September</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-noir-800/80 border border-gold-500/20">
              <span className="text-ivory/60 block text-[9px] uppercase tracking-wider">Muhurtham</span>
              <span className="font-semibold text-gold-200">07 September</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Couple Portrait (GK1.png) */}
        <motion.div
          style={{ y: yCouple }}
          className="flex-1 relative flex justify-center items-center w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]"
        >
          {/* Ornate Arch Framing Box */}
          <div className="relative w-full aspect-[2/3] rounded-t-full p-2.5 sm:p-3 bg-gradient-to-b from-gold-500/30 via-gold-700/10 to-transparent gold-border-glow">
            
            <div className="relative w-full h-full rounded-t-full overflow-hidden bg-noir-900 shadow-2xl">
              {/* Couple Image GK1.png */}
              <img
                src="/GK1.png"
                alt="Gokul M & Kavipriya B Wedding Portrait"
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                loading="eager"
                fetchPriority="high"
              />

              {/* Bottom Vignette Shadow to ground characters */}
              <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-noir-900 via-noir-900/60 to-transparent pointer-events-none" />

              {/* Subtle Golden Radial Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-gold-300/10 pointer-events-none" />
            </div>

            {/* Corner Decorative Ornaments */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-1 bg-noir-900 border border-gold-400/50 rounded-full shadow-lg">
              <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-gold-200 whitespace-nowrap">
                Gokul & Kavipriya
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Begin Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none">
        <span className="text-[9px] font-cinzel tracking-[0.3em] uppercase text-gold-300/60">
          Scroll To Begin
        </span>
        <div className="w-4 h-7 rounded-full border border-gold-400/30 flex justify-center p-0.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-gold-400"
          />
        </div>
      </div>
    </section>
  );
}
