import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on true mouse pointer desktop
    const isDesktop = window.matchMedia('(pointer: fine)').matches && window.innerWidth >= 1024;
    if (!isDesktop) return;

    setEnabled(true);

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', updateMouse, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Golden Ring */}
      <motion.div
        className="absolute rounded-full border border-gold-400/60 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 350,
          mass: 0.3,
        }}
      />
      {/* Center Golden Dot */}
      <motion.div
        className="absolute rounded-full bg-gold-400 pointer-events-none"
        animate={{
          x: mousePosition.x - 2.5,
          y: mousePosition.y - 2.5,
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 500,
        }}
        style={{ width: 5, height: 5 }}
      />
    </div>
  );
}
