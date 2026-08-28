import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, Send, MessageCircle, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const WHATSAPP_NUMBER = "919499912508";

const DEFAULT_BLESSINGS = [
  {
    name: "Anand & Divya",
    message: "Wishing Gokul and Kavipriya a lifetime of abundant happiness, peace, and eternal love! Congratulations!",
    date: "Just now",
  },
  {
    name: "Suresh Kumar & Family",
    message: "May the divine grace always shower upon both of you. Extremely happy to celebrate your sacred union!",
    date: "1 hour ago",
  },
  {
    name: "Pooja & Karthik",
    message: "Two wonderful souls coming together! Wishing you both endless laughter and adventures ahead!",
    date: "3 hours ago",
  },
];

export default function GuestWishesModal({ isOpen, onClose }) {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('gk_wedding_wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(DEFAULT_BLESSINGS);
      }
    } else {
      setWishes(DEFAULT_BLESSINGS);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const trimmedName = name.trim();
    const trimmedMsg = message.trim();

    const newWish = {
      name: trimmedName,
      message: trimmedMsg,
      date: 'Just now',
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('gk_wedding_wishes', JSON.stringify(updated));
    setSubmitted(true);

    // Trigger luxury golden confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#DFC07B', '#C89D4B', '#FFF6DD', '#25D366', '#E71D36'],
    });

    // Prepare WhatsApp Message Link
    const formattedText = encodeURIComponent(
      `💐 *Sacred Wedding Blessings for Gokul M & Kavipriya B* 💐\n\n` +
      `👤 *From:* ${trimmedName}\n\n` +
      `💌 *Blessings:* ${trimmedMsg}\n\n` +
      `✨ Forever Begins • 06 & 07 September 2026 ✨`
    );
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${formattedText}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    setName('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden luxury-card rounded-3xl border-2 border-gold-400 p-6 sm:p-8 flex flex-col shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-noir-900 border border-gold-500/30 text-gold-300 hover:text-white hover:border-gold-400 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center space-y-2 mb-6 pr-8">
            <div className="inline-flex items-center gap-1.5 text-gold-400 text-xs font-cinzel tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Sacred Guestbook
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient">
              BLESS GOKUL & KAVIPRIYA
            </h3>
            <p className="font-cormorant italic text-sm text-ivory/70">
              Your heartfelt words and blessings will be sent directly to WhatsApp (9499912508)
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto space-y-6 flex-1 pr-1 custom-scrollbar">
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 bg-noir-900/60 p-4 sm:p-5 rounded-2xl border border-gold-500/20">
              <div>
                <label className="block text-[11px] font-cinzel tracking-wider text-gold-300 uppercase mb-1">
                  Your Name / Family
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand & Divya"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-noir-800 border border-gold-500/30 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-[11px] font-cinzel tracking-wider text-gold-300 uppercase mb-1">
                  Your Wishes & Blessings
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Write your prayers and warm wishes for Gokul and Kavipriya..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-noir-800 border border-gold-500/30 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold-400 text-sm resize-none"
                />
              </div>

              {/* WhatsApp Redirect Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] via-emerald-500 to-[#128C7E] hover:brightness-110 text-white font-cinzel text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                Send Blessing to WhatsApp
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-xs text-emerald-400 font-medium pt-1 flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 fill-emerald-400" />
                  Blessing recorded and opened in WhatsApp (+91 9499912508)!
                </motion.p>
              )}
            </form>

            {/* List of Wishes */}
            <div className="space-y-3">
              <span className="font-cinzel text-xs tracking-wider text-gold-400 uppercase block">
                Recent Blessings ({wishes.length})
              </span>
              <div className="space-y-3">
                {wishes.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-noir-900/40 border border-gold-500/15 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-cinzel text-sm font-semibold text-gold-200">
                        {w.name}
                      </h4>
                      <span className="text-[10px] text-ivory/40 font-sans">
                        {w.date}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-ivory/80 leading-relaxed">
                      "{w.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
