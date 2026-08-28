import React from 'react';
import { Heart } from 'lucide-react';

export default function EndingSection({ onOpenWishes }) {
  return (
    <footer className="relative min-h-[75vh] md:min-h-[85vh] w-full py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#080605] via-[#050403] to-[#000000] overflow-hidden flex flex-col items-center justify-between text-center select-none">
      
      <div className="relative z-10 my-auto space-y-6 sm:space-y-8 max-w-2xl mx-auto">
        
        {/* Solitary Eternal Diya */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative -top-1 animate-flame">
            <svg width="22" height="34" viewBox="0 0 24 38" fill="none">
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

          <svg width="54" height="20" viewBox="0 0 60 24" fill="none">
            <path
              d="M5 5C13 19 47 19 55 5C50 14 38 20 30 20C22 20 10 14 5 5Z"
              fill="#DFC07B"
              stroke="#EBD8A6"
              strokeWidth="0.8"
            />
            <ellipse cx="30" cy="5" rx="25" ry="4" fill="#644A18" stroke="#DFC07B" strokeWidth="0.8" />
            <path d="M24 19H36V23H24V19Z" fill="#A98135" />
          </svg>
        </div>

        {/* Poetic Message */}
        <div className="space-y-2 sm:space-y-3">
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.35em] uppercase text-gold-300/80 font-semibold">
            With Love,
          </p>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-gold-gradient">
            WE BEGIN FOREVER
          </h2>
          <div className="font-script text-3xl sm:text-4xl text-gold-200 pt-1">
            Gokul M & Kavipriya B
          </div>
        </div>

        {/* Guest Blessings Action */}
        <div className="pt-2">
          <button
            onClick={onOpenWishes}
            className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-noir-900 font-cinzel text-xs tracking-widest font-bold uppercase shadow-lg inline-flex items-center gap-2 active:scale-95 transition-transform"
          >
            <Heart className="w-4 h-4 fill-noir-900 text-noir-900" />
            Leave Your Blessings & Wishes
          </button>
        </div>

        {/* Monogram */}
        <div className="pt-4">
          <span className="font-cinzel text-xl tracking-[0.3em] text-gold-400/90 font-bold">
            G × K
          </span>
        </div>

      </div>

      {/* Copyright */}
      <div className="relative z-10 pt-8 border-t border-gold-500/10 w-full max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans text-ivory/50 tracking-wider">
        <p>© 2026 FOREVER — Gokul M & Kavipriya B Wedding Story</p>
        <p className="font-cinzel text-gold-400/70 pt-1 sm:pt-0">
          JVS Sakthi Mahal • Tindivanam – 604001
        </p>
      </div>

    </footer>
  );
}
