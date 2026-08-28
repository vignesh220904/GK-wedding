import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink, Sparkles, Download, Check } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export default function Invitation3D() {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyVenue = () => {
    navigator.clipboard.writeText("JVS Sakthi Mahal, Tindivanam - 604001, Tamil Nadu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="invitation"
      className="relative min-h-[90vh] md:min-h-screen w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0A0806] via-[#15100C] to-[#0D0B09] overflow-hidden flex flex-col justify-center items-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Sacred Auspicious Invitation
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            WEDDING INVITATION
          </h2>

          <p className="font-cormorant italic text-base sm:text-lg text-ivory/80 max-w-lg mx-auto">
            Tap below to unseal and reveal the official invitation card
          </p>
        </div>

        {/* Physical Envelope & Card Experience */}
        <div className="relative flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px] w-full">
          
          {!isOpen ? (
            /* Closed Luxury Envelope */
            <div
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative w-full max-w-[320px] sm:max-w-[420px] aspect-[16/11] rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#EFE8DA] p-5 text-noir-900 shadow-2xl border-2 border-gold-400 flex flex-col justify-between items-center transition-transform duration-200 active:scale-95 sm:hover:scale-105 group"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-2.5 left-2.5 text-gold-600 text-xs font-cinzel">✦</div>
              <div className="absolute top-2.5 right-2.5 text-gold-600 text-xs font-cinzel">✦</div>
              <div className="absolute bottom-2.5 left-2.5 text-gold-600 text-xs font-cinzel">✦</div>
              <div className="absolute bottom-2.5 right-2.5 text-gold-600 text-xs font-cinzel">✦</div>

              {/* Header */}
              <div className="pt-1 text-center">
                <span className="font-cinzel text-[11px] tracking-[0.3em] uppercase text-gold-800 font-semibold">
                  Royal Wedding Card
                </span>
              </div>

              {/* Gold Wax Seal */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-lg border border-[#FFE8A3] flex flex-col items-center justify-center p-1 text-noir-900">
                <span className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-noir-900">
                  G × K
                </span>
                <span className="text-[8px] font-sans tracking-widest uppercase font-semibold text-noir-900/80">
                  Tap to Open
                </span>
              </div>

              {/* Couple Names */}
              <div className="text-center space-y-0.5">
                <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold-900 font-bold">
                  Gokul M & Kavipriya B
                </p>
              </div>
            </div>
          ) : (
            /* Open Card Reveal: GK6.png */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-lg flex flex-col items-center"
            >
              <div
                className="relative w-full max-w-[280px] sm:max-w-[360px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400 bg-noir-900 cursor-pointer"
                onClick={() => setIsZoomed(true)}
              >
                <img
                  src="/GK6.png"
                  alt="Official Wedding Invitation Card - Gokul M & Kavipriya B"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-noir-900 text-xs font-cinzel font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Full Artwork
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-full border border-gold-500/30 bg-noir-800/80 text-gold-300 text-xs font-cinzel tracking-wider uppercase"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Timetable & Venue Summary Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto pt-4 text-left">
          
          {/* Reception Card */}
          <div className="luxury-card p-5 sm:p-6 rounded-2xl space-y-3">
            <div>
              <span className="text-[9px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block font-semibold">
                Evening Gala
              </span>
              <h3 className="font-cinzel text-lg font-bold text-ivory">
                RECEPTION
              </h3>
            </div>
            <div className="space-y-1 text-xs text-ivory/80 font-sans">
              <p className="font-semibold text-gold-200">06 September 2026</p>
              <p className="flex items-center gap-1.5 text-ivory/70">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                From 7:00 PM Onwards
              </p>
            </div>
            <button
              onClick={() => downloadIcsFile('reception')}
              className="text-[11px] font-cinzel tracking-wider text-gold-300 hover:text-gold-100 flex items-center gap-1 pt-1"
            >
              <Download className="w-3 h-3" /> Add to Calendar
            </button>
          </div>

          {/* Wedding Muhurtham Card */}
          <div className="luxury-card p-5 sm:p-6 rounded-2xl space-y-3 border-gold-400/50 bg-gradient-to-b from-[#221A11] to-noir-900">
            <div>
              <span className="text-[9px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block font-semibold">
                Auspicious Muhurtham
              </span>
              <h3 className="font-cinzel text-lg font-bold text-gold-gradient">
                WEDDING
              </h3>
            </div>
            <div className="space-y-1 text-xs text-ivory/80 font-sans">
              <p className="font-semibold text-gold-200">07 September 2026</p>
              <p className="flex items-center gap-1.5 text-ivory/70">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                6:00 AM – 7:30 AM
              </p>
            </div>
            <button
              onClick={() => downloadIcsFile('wedding')}
              className="text-[11px] font-cinzel tracking-wider text-gold-300 hover:text-gold-100 flex items-center gap-1 pt-1 font-semibold"
            >
              <Download className="w-3 h-3" /> Add to Calendar
            </button>
          </div>

          {/* Venue Card */}
          <div className="luxury-card p-5 sm:p-6 rounded-2xl space-y-3 sm:col-span-2 md:col-span-1">
            <div>
              <span className="text-[9px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block font-semibold">
                Sacred Location
              </span>
              <h3 className="font-cinzel text-lg font-bold text-ivory">
                VENUE
              </h3>
            </div>
            <div className="space-y-0.5 text-xs text-ivory/80 font-sans">
              <p className="font-semibold text-gold-200">JVS SAKTHI MAHAL</p>
              <p className="text-ivory/70">Tindivanam – 604001</p>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://maps.google.com/?q=JVS+Sakthi+Mahal+Tindivanam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-cinzel tracking-wider text-gold-300 hover:text-gold-100 flex items-center gap-1"
              >
                <MapPin className="w-3 h-3" /> Google Maps
              </a>
              <button
                onClick={handleCopyVenue}
                className="text-[11px] font-cinzel tracking-wider text-ivory/60 hover:text-gold-300"
              >
                {copied ? <span className="text-emerald-400">Copied</span> : "Copy"}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox for GK6.png */}
      <AnimatePresence>
        {isZoomed && (
          <div
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <div
              className="relative max-w-xl w-full max-h-[85vh] overflow-auto rounded-2xl border border-gold-400 bg-noir-900 p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-noir-900 border border-gold-400 text-gold-300 flex items-center justify-center"
              >
                ✕
              </button>
              <img
                src="/GK6.png"
                alt="High Resolution Wedding Invitation - Gokul M & Kavipriya B"
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
