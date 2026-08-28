import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, MapPin, Clock, ExternalLink, Sparkles, Download, Check } from 'lucide-react';
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
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#0A0806] via-[#15100C] to-[#0D0B09] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Golden Studio Spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-gold-500/15 via-gold-300/10 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12 text-center">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Sacred Auspicious Invitation
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            WEDDING INVITATION
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-ivory/80 max-w-xl mx-auto">
            Click to unseal and reveal the official invitation card
          </p>
        </div>

        {/* 3D Physical Envelope & Card Experience */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px] sm:min-h-[580px] w-full">
          
          {!isOpen ? (
            /* Closed 3D Luxury Envelope */
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative w-full max-w-[360px] sm:max-w-[460px] aspect-[16/11] rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-[#EFE8DA] p-6 text-noir-900 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border-2 border-gold-400 flex flex-col justify-between items-center transition-all duration-500 group"
            >
              {/* Envelope Flap Fold Triangular Shadow */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#E7DEC9] to-transparent rounded-t-2xl opacity-60 pointer-events-none" />

              {/* Gold Filigree Corner Ornaments */}
              <div className="absolute top-3 left-3 text-gold-600/70 text-xs font-cinzel">✦</div>
              <div className="absolute top-3 right-3 text-gold-600/70 text-xs font-cinzel">✦</div>
              <div className="absolute bottom-3 left-3 text-gold-600/70 text-xs font-cinzel">✦</div>
              <div className="absolute bottom-3 right-3 text-gold-600/70 text-xs font-cinzel">✦</div>

              {/* Envelope Header Monogram */}
              <div className="pt-2 text-center">
                <span className="font-cinzel text-xs tracking-[0.35em] uppercase text-gold-800 font-semibold">
                  Royal Wedding Card
                </span>
              </div>

              {/* Gold Wax Seal / Traditional Emblem */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_10px_25px_rgba(200,157,75,0.6)] border-2 border-[#FFE8A3] flex flex-col items-center justify-center p-2 text-noir-900 group-hover:shadow-[0_0_35px_rgba(255,215,0,0.8)]"
              >
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-widest text-noir-900">
                  G × K
                </span>
                <span className="text-[9px] font-sans tracking-widest uppercase font-semibold text-noir-900/80">
                  Unseal
                </span>
              </motion.div>

              {/* Recipient / Callout */}
              <div className="text-center space-y-1">
                <p className="font-cinzel text-xs tracking-[0.2em] uppercase text-gold-900 font-bold">
                  Gokul M & Kavipriya B
                </p>
                <p className="font-sans text-[11px] tracking-wider text-noir-900/60 uppercase">
                  Tap to Open
                </p>
              </div>
            </motion.div>
          ) : (
            /* Open 3D Card Reveal: GK6.png */
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl flex flex-col items-center"
            >
              <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[2/3] rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] border-2 border-gold-400 bg-noir-900 group cursor-pointer"
                onClick={() => setIsZoomed(true)}
              >
                {/* Genuine GK6.png Invitation Artwork */}
                <img
                  src="/GK6.png"
                  alt="Official Wedding Invitation Card - Gokul M & Kavipriya B"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Overlay hover button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-gold-500 text-noir-900 font-cinzel text-xs tracking-widest font-bold uppercase shadow-lg">
                    Click To View Full Size
                  </span>
                </div>
              </div>

              {/* Envelope Reclose or Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 text-noir-900 text-xs font-cinzel font-bold tracking-widest uppercase hover:brightness-110 shadow-lg shadow-gold-500/20 flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Full Artwork
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-gold-500/30 bg-noir-800/80 text-gold-300 hover:text-white text-xs font-cinzel tracking-widest uppercase"
                >
                  Close Envelope
                </button>
              </div>
            </motion.div>
          )}

        </div>

        {/* Timetable & Venue Summary Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-6 text-left">
          
          {/* Reception Card */}
          <div className="luxury-card p-6 sm:p-8 rounded-2xl space-y-4 hover:border-gold-400/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block">
                Evening Gala
              </span>
              <h3 className="font-cinzel text-xl font-bold text-ivory">
                RECEPTION
              </h3>
            </div>
            <div className="space-y-1 text-sm text-ivory/80 font-sans">
              <p className="font-semibold text-gold-200">06 September</p>
              <p className="flex items-center gap-2 text-ivory/70">
                <Clock className="w-4 h-4 text-gold-400" />
                From 7:00 PM Onwards
              </p>
            </div>
            <button
              onClick={() => downloadIcsFile('reception')}
              className="text-xs font-cinzel tracking-wider text-gold-300 hover:text-gold-100 flex items-center gap-1.5 pt-2"
            >
              <Download className="w-3.5 h-3.5" /> Add Reception to Calendar
            </button>
          </div>

          {/* Wedding Muhurtham Card */}
          <div className="luxury-card p-6 sm:p-8 rounded-2xl space-y-4 border-gold-400/40 bg-gradient-to-b from-[#261E14] to-noir-900 shadow-xl">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300">
              <Calendar className="w-5 h-5 text-gold-300" />
            </div>
            <div>
              <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block">
                Auspicious Muhurtham
              </span>
              <h3 className="font-cinzel text-xl font-bold text-gold-gradient">
                WEDDING
              </h3>
            </div>
            <div className="space-y-1 text-sm text-ivory/80 font-sans">
              <p className="font-semibold text-gold-200">07 September</p>
              <p className="flex items-center gap-2 text-ivory/70">
                <Clock className="w-4 h-4 text-gold-400" />
                6:00 AM – 7:30 AM
              </p>
            </div>
            <button
              onClick={() => downloadIcsFile('wedding')}
              className="text-xs font-cinzel tracking-wider text-gold-300 hover:text-gold-100 flex items-center gap-1.5 pt-2"
            >
              <Download className="w-3.5 h-3.5" /> Add Muhurtham to Calendar
            </button>
          </div>

          {/* Venue Card */}
          <div className="luxury-card p-6 sm:p-8 rounded-2xl space-y-4 hover:border-gold-400/50 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block">
                Sacred Location
              </span>
              <h3 className="font-cinzel text-xl font-bold text-ivory">
                VENUE
              </h3>
            </div>
            <div className="space-y-1 text-sm text-ivory/80 font-sans">
              <p className="font-semibold text-gold-200">JVS SAKTHI MAHAL</p>
              <p className="text-ivory/70">Tindivanam – 604001</p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=JVS+Sakthi+Mahal+Tindivanam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-cinzel tracking-wider text-gold-300 hover:text-gold-100 flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5" /> Google Maps
              </a>
              <button
                onClick={handleCopyVenue}
                className="text-xs font-cinzel tracking-wider text-ivory/60 hover:text-gold-300"
              >
                {copied ? <span className="text-emerald-400 flex items-center gap-1"><Check className="w-3 h-3"/> Copied</span> : "Copy"}
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox for GK6.png */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-auto rounded-2xl border-2 border-gold-400 bg-noir-900 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-noir-900/90 border border-gold-400 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-noir-900 transition-colors"
              >
                ✕
              </button>
              <img
                src="/GK6.png"
                alt="High Resolution Wedding Invitation - Gokul M & Kavipriya B"
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
