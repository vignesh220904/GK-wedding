import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Sparkles, Download, Check, Copy } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendar';

export default function WeddingDetails() {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText("JVS Sakthi Mahal, Tindivanam – 604001, Tamil Nadu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="details"
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#0A0806] via-[#16110B] to-[#0E0B08] overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Celebration Itinerary
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            WEDDING DETAILS
          </h2>

          <p className="font-cormorant italic text-lg md:text-xl text-ivory/80 max-w-xl mx-auto">
            We eagerly anticipate welcoming you and your family to bless the auspicious union
          </p>
        </div>

        {/* Luxury Stationery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Reception */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-card p-8 rounded-3xl border border-gold-400/30 flex flex-col justify-between space-y-6 hover:border-gold-400/60 transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block font-semibold">
                  Evening Celebration
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-ivory mt-1">
                  RECEPTION
                </h3>
              </div>
              <div className="space-y-2 pt-2 border-t border-gold-500/15">
                <div className="flex items-center gap-3 text-sm text-ivory/90 font-medium">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Sunday, 06 September 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/80">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>From 7:00 PM Onwards</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-gold-500/15">
              <a
                href={getGoogleCalendarUrl('reception')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/30 text-gold-200 text-xs font-cinzel tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Add to Google Calendar
              </a>
              <button
                onClick={() => downloadIcsFile('reception')}
                className="w-full py-2 px-4 text-ivory/60 hover:text-gold-300 text-[11px] font-cinzel tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3 h-3" />
                Download Apple/Outlook (.ics)
              </button>
            </div>
          </motion.div>

          {/* Card 2: Wedding Muhurtham (Hero Highlight) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="luxury-card p-8 rounded-3xl border-2 border-gold-400 bg-gradient-to-b from-[#241B12] via-[#1C150E] to-[#120E0A] flex flex-col justify-between space-y-6 shadow-[0_15px_40px_rgba(200,157,75,0.15)] relative group"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full text-noir-900 font-cinzel text-[10px] font-bold tracking-widest uppercase shadow-lg">
              Main Ceremony
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block font-semibold">
                  Auspicious Muhurtham
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-gold-gradient mt-1">
                  WEDDING
                </h3>
              </div>
              <div className="space-y-2 pt-2 border-t border-gold-500/20">
                <div className="flex items-center gap-3 text-sm text-gold-200 font-semibold">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <span>Monday, 07 September 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-ivory/90">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>6:00 AM – 7:30 AM</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-gold-500/20">
              <a
                href={getGoogleCalendarUrl('wedding')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 hover:brightness-110 text-noir-900 text-xs font-cinzel tracking-wider font-bold uppercase flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                Add to Google Calendar
              </a>
              <button
                onClick={() => downloadIcsFile('wedding')}
                className="w-full py-2 px-4 text-gold-300 hover:text-gold-100 text-[11px] font-cinzel tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
              >
                <Download className="w-3 h-3" />
                Download Apple/Outlook (.ics)
              </button>
            </div>
          </motion.div>

          {/* Card 3: Venue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="luxury-card p-8 rounded-3xl border border-gold-400/30 flex flex-col justify-between space-y-6 hover:border-gold-400/60 transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-300 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-cinzel tracking-[0.25em] uppercase text-gold-400 block font-semibold">
                  Sacred Mahal
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-ivory mt-1">
                  VENUE
                </h3>
              </div>
              <div className="space-y-1 pt-2 border-t border-gold-500/15">
                <p className="font-serif text-lg font-bold text-gold-200">
                  JVS SAKTHI MAHAL
                </p>
                <p className="text-sm text-ivory/70">
                  Tindivanam – 604001, Tamil Nadu
                </p>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-gold-500/15">
              <a
                href="https://maps.google.com/?q=JVS+Sakthi+Mahal+Tindivanam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gold-500/15 hover:bg-gold-500/25 border border-gold-400/30 text-gold-200 text-xs font-cinzel tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Navigate via Google Maps
              </a>
              <button
                onClick={copyAddress}
                className="w-full py-2 px-4 text-ivory/60 hover:text-gold-300 text-[11px] font-cinzel tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Address Copied to Clipboard
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy Full Address
                  </span>
                )}
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
