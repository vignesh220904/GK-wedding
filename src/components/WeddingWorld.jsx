import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Flame, Flower } from 'lucide-react';

export default function WeddingWorld() {
  const [activeLayer, setActiveLayer] = useState(4);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Optimized Canvas with IntersectionObserver & Visibility API
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let isVisible = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Detect mobile for reduced particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 12 : 25;

    const petals = Array.from({ length: particleCount }, () => ({
      x: Math.random() * (canvas.width || 400),
      y: Math.random() * (canvas.height || 400),
      size: Math.random() * 4 + 2,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 1.5,
      color: Math.random() > 0.4 ? 'rgba(255, 182, 193, 0.4)' : 'rgba(255, 180, 0, 0.4)',
      speedY: Math.random() * 0.6 + 0.3,
    }));

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update falling petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.015) * 0.4;
        p.angle += p.spin;

        if (p.y > canvas.height) {
          p.y = -8;
          p.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.angle * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    // IntersectionObserver to pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting && !document.hidden;
        if (isVisible) {
          cancelAnimationFrame(animId);
          render();
        } else {
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    const handleVisibility = () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animId);
      } else {
        isVisible = true;
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="wedding-world"
      ref={containerRef}
      className="relative min-h-[90vh] md:min-h-screen w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0D0B09] via-[#1A130C] to-[#120E0A] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Volumetric Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto w-full relative z-20 space-y-8 md:space-y-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Sacred Mandapam Realm
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            THE WEDDING WORLD
          </h2>

          <p className="font-cormorant italic text-base sm:text-xl text-ivory/80 max-w-xl mx-auto">
            Step into the sacred South Indian mandapam — sanctified with marigolds, golden pillars, and holy flames
          </p>
        </div>

        {/* Mandapam Layer Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-xl mx-auto">
          {[
            { id: 1, name: "I. Sanctuary", icon: Layers },
            { id: 2, name: "II. Pillars", icon: Flower },
            { id: 3, name: "III. Lamps", icon: Flame },
            { id: 4, name: "IV. Mandapam", icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveLayer(item.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-1.5 transition-all duration-300 ${
                  activeLayer === item.id
                    ? 'bg-gold-500 text-noir-900 font-bold shadow-lg shadow-gold-500/25 scale-105'
                    : 'bg-noir-800/80 text-gold-300/80 border border-gold-500/20 hover:border-gold-400/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Mandapam Stage */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[500px] md:h-[560px] rounded-3xl overflow-hidden border border-gold-400/30 bg-gradient-to-b from-[#0F0C09] via-[#1E1710] to-[#0A0806] shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex items-center justify-center p-4">
          
          {/* Layer 1: Mandapam Arch */}
          {activeLayer >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-10 pointer-events-none"
            >
              <div className="w-full max-w-2xl h-full border border-gold-400/35 rounded-t-full relative flex justify-center">
                <div className="absolute inset-2 border border-gold-300/15 rounded-t-full border-dashed" />
                <div className="absolute -top-6 flex flex-col items-center">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-b from-gold-300 to-gold-600 shadow-[0_0_15px_#FFD166] border border-gold-200 flex items-center justify-center text-noir-900 text-xs font-bold">
                    卐
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Layer 2: Pillars */}
          {activeLayer >= 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex justify-between items-end px-6 sm:px-16 pb-6 pointer-events-none"
            >
              {/* Left Pillar */}
              <div className="w-12 sm:w-20 md:w-24 h-[75%] bg-gradient-to-r from-gold-800 via-gold-600 to-gold-900 rounded-t-lg border-x border-t border-gold-400/50 relative shadow-xl flex flex-col justify-between p-1.5">
                <div className="w-full h-6 bg-gold-400/25 rounded" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-full h-2.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full shadow-[0_0_6px_#FFA500]" />
                  ))}
                </div>
                <div className="w-full h-8 bg-gold-500/15 rounded" />
              </div>

              {/* Right Pillar */}
              <div className="w-12 sm:w-20 md:w-24 h-[75%] bg-gradient-to-r from-gold-900 via-gold-600 to-gold-800 rounded-t-lg border-x border-t border-gold-400/50 relative shadow-xl flex flex-col justify-between p-1.5">
                <div className="w-full h-6 bg-gold-400/25 rounded" />
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-full h-2.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full shadow-[0_0_6px_#FFA500]" />
                  ))}
                </div>
                <div className="w-full h-8 bg-gold-500/15 rounded" />
              </div>
            </motion.div>
          )}

          {/* Layer 3: Lamps & Diyas */}
          {activeLayer >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1px] h-28 md:h-36 bg-gradient-to-b from-gold-500 to-gold-300" />
                <div className="w-10 h-10 rounded-full border border-gold-300 bg-gradient-to-b from-gold-300 to-gold-700 shadow-[0_0_25px_#FFD166] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-amber-100 animate-pulse" />
                </div>
              </div>

              <div className="absolute bottom-5 inset-x-0 flex justify-center gap-4 sm:gap-8">
                {[1, 2, 3, 4, 5].map((d) => (
                  <div key={d} className="flex flex-col items-center animate-flame">
                    <div className="w-2.5 h-3.5 bg-gradient-to-t from-orange-500 to-amber-200 rounded-full shadow-[0_0_12px_#FFA500]" />
                    <div className="w-6 h-2.5 bg-gold-600 rounded-b-full border border-gold-400/70" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Layer 4: Stage Centerpiece */}
          {activeLayer === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative z-20 flex flex-col items-center text-center space-y-3 max-w-md px-5 py-6 sm:py-8 rounded-2xl bg-noir-900/85 backdrop-blur-md border border-gold-400/40 shadow-2xl"
            >
              <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-gold-400 font-semibold">
                Sanctum of Union
              </span>
              <h3 className="font-cinzel text-xl sm:text-3xl font-bold text-gold-gradient">
                JVS SAKTHI MAHAL
              </h3>
              <p className="font-script text-2xl sm:text-3xl text-gold-200">
                Gokul M & Kavipriya B
              </p>
              <p className="font-cormorant text-sm sm:text-base text-ivory/80 italic">
                Where thousands of blessings converge on the 6th & 7th of September
              </p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
