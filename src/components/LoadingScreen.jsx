import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }) {
  const [stage, setStage] = useState(1); // 1: Mandala Drawing, 2: G x K, 3: FOREVER, 4: Complete

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(2), 1100);
    const timer2 = setTimeout(() => setStage(3), 2100);
    const timer3 = setTimeout(() => {
      setStage(4);
      setTimeout(onFinish, 600);
    }, 3100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {stage <= 3 && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-noir-900 overflow-hidden"
        >
          {/* Subtle Background Radial Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />

          {/* Animated Gold Mandala */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full animate-[spin_40s_linear_infinite]"
            >
              {/* Outer decorative ring */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#DFC07B"
                strokeWidth="1.2"
                strokeDasharray="4 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* Middle Petal Ring */}
              <motion.circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#C89D4B"
                strokeWidth="1.5"
                strokeDasharray="8 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.8 }}
                transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
              />

              {/* Traditional 8-point Mandala Flower Paths */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.path
                  key={i}
                  d="M 100 100 Q 80 40 100 20 Q 120 40 100 100"
                  fill="none"
                  stroke="#EBD8A6"
                  strokeWidth="1"
                  transform={`rotate(${angle} 100 100)`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 1.6, delay: 0.1 * i * 0.15, ease: "easeInOut" }}
                />
              ))}

              {/* Center Core Circle */}
              <motion.circle
                cx="100"
                cy="100"
                r="30"
                fill="none"
                stroke="#DFC07B"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4 }}
              />
            </svg>

            {/* Monogram inside mandala */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                {stage >= 2 && (
                  <motion.div
                    key="monogram"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                  >
                    <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] text-gold-gradient">
                      G × K
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Project Title Reveal */}
          <div className="mt-8 text-center h-12 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {stage >= 3 && (
                <motion.div
                  key="title"
                  initial={{ opacity: 0, y: 10, letterSpacing: '0.2em' }}
                  animate={{ opacity: 1, y: 0, letterSpacing: '0.4em' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-1"
                >
                  <p className="font-cinzel text-sm md:text-base font-semibold text-gold-200">
                    FOREVER
                  </p>
                  <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-gold-300/60">
                    A Wedding Story
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
