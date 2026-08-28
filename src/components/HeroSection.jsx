import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax transforms based on scroll
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);
  const yCouple = useTransform(scrollY, [0, 800], [0, 60]);
  const yFront = useTransform(scrollY, [0, 800], [0, -40]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.2]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#120E0A] via-[#1A140F] to-[#0D0B09] pt-24 pb-16 px-4 md:px-8"
    >
      {/* Background Depth Layer 1: Warm Ivory/Gold Aura & Arch */}
      <motion.div
        style={{ y: yBg, opacity: opacityHero }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <div className="w-[500px] h-[500px] md:w-[850px] md:h-[850px] rounded-full bg-gradient-to-tr from-gold-600/15 via-gold-400/20 to-transparent blur-[120px]" />
        
        {/* Ornate Golden Grand Arch SVG */}
        <div className="absolute top-16 w-[340px] sm:w-[480px] md:w-[650px] h-[750px] md:h-[900px] border-2 border-gold-500/30 rounded-t-full shadow-[0_0_50px_rgba(200,157,75,0.1)] pointer-events-none">
          <div className="absolute inset-2 border border-gold-400/20 rounded-t-full border-dashed" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold-300/80 font-cinzel text-xs tracking-widest px-4 bg-[#1A140F] py-1 border border-gold-500/30 rounded-full">
            శ్రీ 卐 शुभ 卐 శ్రీ
          </div>
        </div>
      </motion.div>

      {/* Background Depth Layer 2: Hanging Traditional Brass Lamps (Deepas) */}
      <motion.div
        style={{
          x: mousePos.x * -0.5,
          y: mousePos.y * -0.5,
        }}
        className="absolute inset-0 pointer-events-none z-10 hidden sm:block"
      >
        {/* Left Hanging Lamp */}
        <div className="absolute left-6 md:left-20 top-0 flex flex-col items-center">
          <div className="w-[1px] h-36 md:h-52 bg-gradient-to-b from-gold-600 to-gold-400" />
          <div className="w-10 h-10 rounded-full border border-gold-400 bg-gradient-to-b from-gold-400 to-gold-700 shadow-[0_0_20px_rgba(212,170,82,0.6)] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-amber-200 animate-pulse" />
          </div>
        </div>

        {/* Right Hanging Lamp */}
        <div className="absolute right-6 md:right-20 top-0 flex flex-col items-center">
          <div className="w-[1px] h-48 md:h-64 bg-gradient-to-b from-gold-600 to-gold-400" />
          <div className="w-10 h-10 rounded-full border border-gold-400 bg-gradient-to-b from-gold-400 to-gold-700 shadow-[0_0_20px_rgba(212,170,82,0.6)] flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-amber-200 animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Main Content & Couple Layer (GK1.png) */}
      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 mt-4">
        
        {/* Left Column: Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-[11px] font-cinzel tracking-[0.25em] uppercase text-gold-300">
              The Royal Wedding Celebration
            </span>
          </div>

          <div className="space-y-3">
            <p className="font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase text-gold-300/80">
              Two Hearts • One Beautiful Journey
            </p>
            
            <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-gold-gradient">
              GOKUL M
            </h1>
            <p className="font-script text-4xl md:text-5xl text-gold-200 lg:-my-2">
              &
            </p>
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] text-gold-gradient">
              KAVIPRIYA B
            </h2>
          </div>

          <p className="font-cormorant italic text-lg md:text-2xl text-ivory/85 max-w-md mx-auto lg:mx-0 font-normal leading-relaxed">
            "With blessings from family and boundless love, two souls step into a sacred covenant of forever."
          </p>

          {/* Quick Date Highlights */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-cinzel tracking-widest text-gold-300">
            <div className="px-3.5 py-2 rounded-lg bg-noir-800/80 border border-gold-500/20">
              <span className="text-ivory/60 block text-[10px] uppercase">Reception</span>
              <span className="font-semibold text-gold-200">06 September</span>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-noir-800/80 border border-gold-500/20">
              <span className="text-ivory/60 block text-[10px] uppercase">Muhurtham</span>
              <span className="font-semibold text-gold-200">07 September</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Couple Portrait (GK1.png) */}
        <motion.div
          style={{
            y: yCouple,
            x: mousePos.x * 0.4,
          }}
          className="flex-1 relative flex justify-center items-center w-full max-w-md lg:max-w-lg"
        >
          {/* Ornate Arch Framing Box */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] aspect-[2/3] rounded-t-full p-2.5 sm:p-3.5 bg-gradient-to-b from-gold-500/30 via-gold-700/10 to-transparent gold-border-glow">
            
            <div className="relative w-full h-full rounded-t-full overflow-hidden bg-noir-900 shadow-2xl">
              {/* Couple Image GK1.png */}
              <img
                src="/GK1.png"
                alt="Gokul M & Kavipriya B Wedding Portrait"
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 hover:scale-105"
                loading="eager"
              />

              {/* Realistic Bottom Vignette Shadow to ground characters */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-noir-900 via-noir-900/60 to-transparent pointer-events-none" />

              {/* Subtle Golden Radial Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-transparent to-gold-300/15 pointer-events-none" />
            </div>

            {/* Corner Decorative Ornaments */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-noir-900 border border-gold-400/50 rounded-full shadow-lg">
              <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-200 whitespace-nowrap">
                Gokul & Kavipriya
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Foreground Depth Floating Particles & Petals */}
      <motion.div style={{ y: yFront }} className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute bottom-16 left-12 w-3 h-3 rounded-full bg-rose-400/30 blur-[1px] animate-float-slow" />
        <div className="absolute top-1/3 right-16 w-4 h-4 rounded-full bg-amber-400/40 blur-[1px] animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-gold-300/40 blur-[0.5px] animate-pulse" />
      </motion.div>

      {/* Scroll to Begin Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] font-cinzel tracking-[0.3em] uppercase text-gold-300/70">
          Scroll To Begin
        </span>
        <div className="w-5 h-8 rounded-full border border-gold-400/40 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-gold-400"
          />
        </div>
      </div>
    </section>
  );
}
