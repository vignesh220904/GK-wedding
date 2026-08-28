import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, Compass } from 'lucide-react';

export default function CoupleSection() {
  return (
    <section
      id="couple"
      className="relative min-h-screen w-full py-28 px-6 md:px-12 bg-gradient-to-b from-[#0D0B09] via-[#16120E] to-[#0F0C09] overflow-hidden flex items-center"
    >
      {/* Background Fairy Lights & Light Rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-[120px]" />
        
        {/* Soft Fairy Lights Array */}
        {[
          { top: '15%', left: '10%', delay: '0s' },
          { top: '25%', left: '85%', delay: '1s' },
          { top: '70%', left: '15%', delay: '2s' },
          { top: '60%', left: '80%', delay: '1.5s' },
          { top: '40%', left: '50%', delay: '0.5s' },
        ].map((pos, idx) => (
          <div
            key={idx}
            style={{ top: pos.top, left: pos.left, animationDelay: pos.delay }}
            className="absolute w-2 h-2 rounded-full bg-amber-200 shadow-[0_0_12px_#FFD166] animate-pulse"
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold-500/20 bg-noir-800/40 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Editorial Portrait
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient"
          >
            THE COUPLE
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-cormorant italic text-xl md:text-2xl text-ivory/80 max-w-xl mx-auto"
          >
            "Two souls, one beautiful story."
          </motion.p>
        </div>

        {/* Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Vignette */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="lg:col-span-4 space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="luxury-card p-6 md:p-8 rounded-2xl border-l-4 border-l-gold-500 space-y-4">
              <span className="font-cinzel text-xs tracking-[0.25em] text-gold-400 uppercase block">
                The Groom
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-ivory">
                GOKUL M
              </h3>
              <p className="font-sans text-sm text-ivory/70 leading-relaxed">
                A gentleman of warmth, determination, and quiet grace, embarking on life’s greatest adventure hand in hand with his beloved.
              </p>
            </div>

            <div className="luxury-card p-6 md:p-8 rounded-2xl border-r-4 border-r-gold-500 lg:border-r-0 lg:border-l-4 lg:border-l-gold-500 space-y-4">
              <span className="font-cinzel text-xs tracking-[0.25em] text-gold-400 uppercase block">
                The Bride
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-ivory">
                KAVIPRIYA B
              </h3>
              <p className="font-sans text-sm text-ivory/70 leading-relaxed">
                Radiating elegance, affection, and joyful laughter, bringing boundless color and happiness into their shared future.
              </p>
            </div>
          </motion.div>

          {/* Center Column: GK3.png Inside Large Ornate Arch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.2 }}
            className="lg:col-span-8 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg aspect-[2/3] rounded-t-full p-3 sm:p-4 bg-gradient-to-b from-gold-400/40 via-gold-600/20 to-noir-900 border border-gold-400/40 shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
              
              {/* Outer Decorative Ring */}
              <div className="relative w-full h-full rounded-t-full overflow-hidden bg-noir-900">
                {/* GK3.png Image */}
                <motion.img
                  src="/GK3.png"
                  alt="Gokul M & Kavipriya B Seated Couple Portrait"
                  className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.01]"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Soft Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noir-900 via-noir-900/50 to-transparent pointer-events-none" />

                {/* Light Ray Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold-200/10 to-gold-400/15 pointer-events-none" />
              </div>

              {/* Editorial Caption Badge */}
              <div className="absolute -bottom-4 right-8 bg-noir-900/90 backdrop-blur-md px-6 py-3 rounded-xl border border-gold-400/40 shadow-xl text-left hidden sm:block">
                <p className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold-400">
                  Editorial Exclusive
                </p>
                <p className="font-serif text-sm text-ivory font-semibold">
                  Gokul M & Kavipriya B
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
