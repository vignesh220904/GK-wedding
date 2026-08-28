import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Flame, Flower } from 'lucide-react';

export default function WeddingWorld() {
  const [activeLayer, setActiveLayer] = useState(4); // 1: Architecture, 2: Pillars & Floral, 3: Lamps & Diyas, 4: Complete Mandapam
  const canvasRef = useRef(null);

  // Canvas for warm volumetric ambient light rays & floating petals
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const petals = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6 + 3,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 2,
      color: Math.random() > 0.4 ? 'rgba(255, 182, 193, 0.45)' : 'rgba(255, 180, 0, 0.45)', // Rose / Marigold
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.sin(Math.random()) * 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle warm golden god-rays
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, 'rgba(223, 192, 123, 0.05)');
      grad.addColorStop(0.5, 'rgba(200, 157, 75, 0.02)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update falling petals
      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.y * 0.01) * 0.6;
        p.angle += p.spin;

        if (p.y > canvas.height) {
          p.y = -10;
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

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="wedding-world"
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#0D0B09] via-[#1A130C] to-[#120E0A] overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Volumetric Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-20 space-y-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Sacred Mandapam Realm
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            THE WEDDING WORLD
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-ivory/80 max-w-xl mx-auto">
            Step into the sacred South Indian mandapam — sanctified with marigolds, golden pillars, and holy flames
          </p>
        </div>

        {/* Mandapam Layer Interactive Switcher */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 max-w-xl mx-auto">
          {[
            { id: 1, name: "I. Golden Sanctuary", icon: Layers },
            { id: 2, name: "II. Floral Pillars", icon: Flower },
            { id: 3, name: "III. Lamps & Diyas", icon: Flame },
            { id: 4, name: "IV. Complete Mandapam", icon: Sparkles },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveLayer(item.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-cinzel tracking-wider flex items-center gap-2 transition-all duration-300 ${
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

        {/* 3D Visualized Mandapam Architectural Stage */}
        <div className="relative w-full max-w-5xl h-[480px] sm:h-[550px] md:h-[620px] rounded-3xl overflow-hidden border-2 border-gold-400/40 bg-gradient-to-b from-[#0F0C09] via-[#1E1710] to-[#0A0806] shadow-[0_30px_100px_rgba(0,0,0,0.9)] flex items-center justify-center p-4">
          
          {/* Layer 1: Mandapam Architectural Grand Gopuram / Arch */}
          {activeLayer >= 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-12 pointer-events-none"
            >
              {/* Grand Golden Arch */}
              <div className="w-full max-w-3xl h-full border-2 border-gold-400/40 rounded-t-full relative flex justify-center">
                <div className="absolute inset-3 border border-gold-300/20 rounded-t-full border-dashed" />
                
                {/* Traditional Kalasam Top Finial */}
                <div className="absolute -top-7 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-gold-300 to-gold-600 shadow-[0_0_20px_#FFD166] border border-gold-200 flex items-center justify-center text-noir-900 text-xs font-bold">
                    卐
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Layer 2: Royal Carved Pillars & Floral Garlands */}
          {activeLayer >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex justify-between items-end px-8 sm:px-20 pb-8 pointer-events-none"
            >
              {/* Left Pillar */}
              <div className="w-16 sm:w-24 md:w-28 h-[80%] bg-gradient-to-r from-gold-800 via-gold-600 to-gold-900 rounded-t-xl border-x-2 border-t-2 border-gold-400/60 relative shadow-2xl flex flex-col justify-between p-2">
                <div className="w-full h-8 bg-gold-400/30 rounded border border-gold-300/40" />
                {/* Marigold Garland Wrap */}
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-full h-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full shadow-[0_0_8px_#FFA500]" />
                  ))}
                </div>
                <div className="w-full h-10 bg-gold-500/20 rounded border border-gold-400/40" />
              </div>

              {/* Right Pillar */}
              <div className="w-16 sm:w-24 md:w-28 h-[80%] bg-gradient-to-r from-gold-900 via-gold-600 to-gold-800 rounded-t-xl border-x-2 border-t-2 border-gold-400/60 relative shadow-2xl flex flex-col justify-between p-2">
                <div className="w-full h-8 bg-gold-400/30 rounded border border-gold-300/40" />
                {/* Marigold Garland Wrap */}
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-full h-3 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full shadow-[0_0_8px_#FFA500]" />
                  ))}
                </div>
                <div className="w-full h-10 bg-gold-500/20 rounded border border-gold-400/40" />
              </div>
            </motion.div>
          )}

          {/* Layer 3: Hanging Vilakku Brass Lamps & Diyas */}
          {activeLayer >= 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* Center Hanging Kuthu Vilakku Lamp */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-[1.5px] h-32 md:h-44 bg-gradient-to-b from-gold-500 to-gold-300" />
                <div className="w-12 h-12 rounded-full border-2 border-gold-300 bg-gradient-to-b from-gold-300 to-gold-700 shadow-[0_0_30px_#FFD166] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-amber-100 animate-pulse" />
                </div>
              </div>

              {/* Bottom Diya Array */}
              <div className="absolute bottom-6 inset-x-0 flex justify-center gap-6 sm:gap-12">
                {[1, 2, 3, 4, 5].map((d) => (
                  <div key={d} className="flex flex-col items-center animate-flame">
                    <div className="w-3 h-4 bg-gradient-to-t from-orange-500 to-amber-200 rounded-full shadow-[0_0_15px_#FFA500]" />
                    <div className="w-8 h-3 bg-gold-600 rounded-b-full border border-gold-400" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Layer 4: Stage Atmosphere & Couple Centerpiece */}
          {activeLayer === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative z-20 flex flex-col items-center text-center space-y-4 max-w-lg px-6 py-8 rounded-2xl bg-noir-900/80 backdrop-blur-md border border-gold-400/40 shadow-2xl"
            >
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-400 font-semibold">
                Sanctum of Union
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient">
                JVS SAKTHI MAHAL
              </h3>
              <p className="font-script text-3xl text-gold-200">
                Gokul M & Kavipriya B
              </p>
              <p className="font-cormorant text-base sm:text-lg text-ivory/80 italic">
                Where thousands of blessings converge on the auspicious 6th & 7th of September
              </p>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}
