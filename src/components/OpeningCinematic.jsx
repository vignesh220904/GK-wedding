import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function OpeningCinematic({ onContinue }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Skip heavy canvas on mobile for instant 120fps

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = true;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.6 + 0.2,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.4 - 0.1,
    }));

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 192, 123, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden;
        if (isVisible) {
          cancelAnimationFrame(animationFrameId);
          render();
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#070605] via-[#0D0B09] to-[#120E0A] overflow-hidden px-4 sm:px-6 text-center select-none"
    >
      {/* Particle Canvas (Desktop Only) */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 hidden md:block" />

      {/* Atmospheric Ambient Glow (Fast CSS Radial) */}
      <div className="absolute w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(200,157,75,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Traditional Indian Mandala Background Motif */}
      <div className="absolute w-[300px] sm:w-[450px] md:w-[550px] h-[300px] sm:h-[450px] md:h-[550px] pointer-events-none z-0 text-gold-300/15 animate-spin-slow">
        <svg viewBox="0 0 200 200" className="w-full h-full stroke-current fill-none stroke-[0.6]">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 5" />
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="55" strokeDasharray="6 3" />
          <circle cx="100" cy="100" r="35" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
              key={i}
              d="M 100 100 Q 85 50 100 30 Q 115 50 100 100"
              transform={`rotate(${angle} 100 100)`}
            />
          ))}
        </svg>
      </div>

      {/* Center Sacred Diya */}
      <div className="relative z-10 mb-6 sm:mb-8">
        <div className="relative flex flex-col items-center justify-center">
          {/* Flickering Flame */}
          <div className="relative -top-2 animate-flame">
            <svg width="24" height="38" viewBox="0 0 28 42" fill="none">
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
          <svg width="60" height="24" viewBox="0 0 70 28" fill="none">
            <path
              d="M5 6C15 22 55 22 65 6C60 16 45 24 35 24C25 24 10 16 5 6Z"
              fill="#DFC07B"
              stroke="#EBD8A6"
              strokeWidth="0.8"
            />
            <ellipse cx="35" cy="6" rx="30" ry="5" fill="#5A3A11" stroke="#DFC07B" strokeWidth="0.8" />
            <path d="M28 23H42V27H28V23Z" fill="#A98135" />
          </svg>
        </div>
      </div>

      {/* Cinematic Text Reveal */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] uppercase text-gold-300/80 font-medium">
          A Beautiful Beginning
        </p>

        {/* Couple Names */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.1em] text-gold-gradient">
            GOKUL M
          </h1>

          <div className="flex items-center justify-center gap-3 my-1">
            <span className="h-[1px] w-10 sm:w-20 bg-gradient-to-r from-transparent to-gold-400/60" />
            <span className="font-script text-2xl sm:text-3xl text-gold-200">and</span>
            <span className="h-[1px] w-10 sm:w-20 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.1em] text-gold-gradient">
            KAVIPRIYA B
          </h2>
        </div>

        <p className="font-cormorant italic text-base sm:text-xl text-ivory/80 pt-1 tracking-wide font-light max-w-lg mx-auto">
          invite you to celebrate their sacred union of love and togetherness
        </p>
      </div>

      {/* Call to Enter */}
      <div className="relative z-10 mt-10 sm:mt-12">
        <button
          onClick={onContinue}
          className="group relative px-6 sm:px-8 py-3 rounded-full gold-border bg-noir-800/80 hover:bg-gold-500/20 text-gold-200 hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2.5 mx-auto"
        >
          <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
            Begin The Experience
          </span>
          <ChevronDown className="w-4 h-4 text-gold-300 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
