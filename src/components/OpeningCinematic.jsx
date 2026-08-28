import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

export default function OpeningCinematic({ onContinue }) {
  const canvasRef = useRef(null);

  // Golden particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.7 + 0.2,
      dx: (Math.random() - 0.5) * 0.4,
      dy: -Math.random() * 0.6 - 0.2,
      pulse: Math.random() * 0.02 + 0.01,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.005;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 192, 123, ${Math.max(0.1, Math.min(0.9, p.alpha))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#DFC07B';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#070605] via-[#0D0B09] to-[#120E0A] overflow-hidden px-6 text-center select-none">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Atmospheric Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gold-500/10 blur-[140px] pointer-events-none" />

      {/* Traditional Indian Mandala Background Motif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 0.18, scale: 1, rotate: 360 }}
        transition={{
          opacity: { duration: 2.5, ease: "easeOut" },
          scale: { duration: 3, ease: "easeOut" },
          rotate: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
        className="absolute w-[360px] h-[360px] md:w-[600px] md:h-[600px] pointer-events-none z-0 text-gold-300"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-[0.6]">
          <circle cx="100" cy="100" r="95" strokeDasharray="3 5" />
          <circle cx="100" cy="100" r="85" />
          <circle cx="100" cy="100" r="65" strokeDasharray="6 3" />
          <circle cx="100" cy="100" r="45" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
            <path
              key={i}
              d="M 100 100 Q 85 45 100 25 Q 115 45 100 100"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Center Sacred Diya */}
      <div className="relative z-10 mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Flame Glow Radial */}
          <div className="absolute -top-12 w-24 h-24 rounded-full bg-gradient-to-t from-[#FFBE0B]/40 to-transparent blur-xl pointer-events-none" />

          {/* Flickering Flame */}
          <div className="relative -top-2 animate-flame">
            <svg width="28" height="42" viewBox="0 0 28 42" fill="none">
              <path
                d="M14 0C14 0 24 15 24 26C24 33.732 19.5228 40 14 40C8.47715 40 4 33.732 4 26C4 15 14 0 14 0Z"
                fill="url(#flameOuter)"
              />
              <path
                d="M14 12C14 12 19.5 20.5 19.5 27C19.5 31.4183 17.0376 35 14 35C10.9624 35 8.5 31.4183 8.5 27C8.5 20.5 14 12 14 12Z"
                fill="url(#flameCore)"
              />
              <defs>
                <linearGradient id="flameOuter" x1="14" y1="0" x2="14" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD166" />
                  <stop offset="0.5" stopColor="#FF9F1C" />
                  <stop offset="1" stopColor="#E71D36" />
                </linearGradient>
                <linearGradient id="flameCore" x1="14" y1="12" x2="14" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFFFFF" />
                  <stop offset="0.4" stopColor="#FFE49E" />
                  <stop offset="1" stopColor="#FFB703" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Traditional Brass Diya Lamp Base */}
          <svg width="70" height="28" viewBox="0 0 70 28" fill="none">
            <path
              d="M5 6C15 22 55 22 65 6C60 16 45 24 35 24C25 24 10 16 5 6Z"
              fill="url(#brassGold)"
              stroke="#EBD8A6"
              strokeWidth="0.8"
            />
            <ellipse cx="35" cy="6" rx="30" ry="5" fill="#5A3A11" stroke="#DFC07B" strokeWidth="0.8" />
            <path d="M28 23H42V27H28V23Z" fill="url(#brassGold)" />
            <defs>
              <linearGradient id="brassGold" x1="5" y1="6" x2="65" y2="28" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5ECD3" />
                <stop offset="0.3" stopColor="#DFC07B" />
                <stop offset="0.7" stopColor="#C89D4B" />
                <stop offset="1" stopColor="#644A18" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Cinematic Text Reveal */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase text-gold-300/80 font-medium"
        >
          A Beautiful Beginning
        </motion.p>

        {/* Couple Names Calligraphy & Serif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3"
        >
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.12em] text-gold-gradient drop-shadow-2xl">
            GOKUL M
          </h1>

          <div className="flex items-center justify-center gap-4 my-2">
            <span className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold-400/60" />
            <span className="font-script text-3xl md:text-4xl text-gold-200">and</span>
            <span className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.12em] text-gold-gradient drop-shadow-2xl">
            KAVIPRIYA B
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2 }}
          className="font-cormorant italic text-lg md:text-2xl text-ivory/80 pt-2 tracking-wide font-light"
        >
          invite you to celebrate their sacred union of love and togetherness
        </motion.p>
      </div>

      {/* Call to Enter / Scroll down */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 2.5 }}
        className="relative z-10 mt-14"
      >
        <button
          onClick={onContinue}
          className="group relative px-8 py-3.5 rounded-full gold-border bg-noir-800/60 hover:bg-gold-500/20 text-gold-200 hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(200,157,75,0.15)] flex items-center gap-3"
        >
          <span className="font-cinzel text-xs tracking-[0.3em] uppercase font-semibold">
            Begin The Experience
          </span>
          <ChevronDown className="w-4 h-4 text-gold-300 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
