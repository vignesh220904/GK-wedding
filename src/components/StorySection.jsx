import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, ChevronLeft, Heart, Stars } from 'lucide-react';

const CHAPTERS = [
  {
    id: 1,
    tag: "CHAPTER 01",
    title: "A PROMISE",
    subtitle: "Where destinies align and hearts make a quiet, sacred vow.",
    image: "/GK2.png",
    story: "In every glance, a thousand unspoken dreams found their purpose. A promise made not just for today, but for every tomorrow that awaits.",
    location: "First Chapter",
  },
  {
    id: 2,
    tag: "CHAPTER 02",
    title: "A JOURNEY",
    subtitle: "Stepping through time, hand in hand, with laughter and faith.",
    image: "/GK4.png",
    story: "Through shared horizons and gentle conversations, two paths seamlessly intertwined into a harmonious journey of unconditional companionship.",
    location: "Shared Horizons",
  },
  {
    id: 3,
    tag: "CHAPTER 03",
    title: "A LIFETIME",
    subtitle: "Rooted in tradition, blossoming into an eternal celebration.",
    image: "/GK5.png",
    story: "Surrounded by the warmth of family, sacred rituals, and divine grace, their devotion grows deeper with every passing sunrise.",
    location: "Sacred Bond",
  },
  {
    id: 4,
    tag: "CHAPTER 04",
    title: "FOREVER",
    subtitle: "Gokul M & Kavipriya B — Two Souls, One Beautiful Forever.",
    image: "/GK1.png",
    story: "Today begins the endless symphony of love, honored under holy mantras, scented blossoms, and the blessings of everyone they cherish.",
    location: "The Wedding Day",
  },
];

export default function StorySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeChapter = CHAPTERS[activeIdx];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % CHAPTERS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + CHAPTERS.length) % CHAPTERS.length);
  };

  return (
    <section
      id="story"
      className="relative min-h-screen w-full py-28 px-4 md:px-12 bg-gradient-to-b from-[#0F0C09] via-[#140F0B] to-[#0A0806] overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-burgundy/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase"
          >
            <Stars className="w-3.5 h-3.5" />
            Cinematic Chronicle
          </motion.div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            THEIR STORY
          </h2>
          <p className="font-cormorant italic text-lg md:text-xl text-ivory/75 max-w-xl mx-auto">
            A romantic odyssey in four timeless movements
          </p>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-2xl mx-auto">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs font-cinzel tracking-widest uppercase transition-all duration-300 ${
                activeIdx === idx
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-noir-900 font-bold shadow-lg shadow-gold-500/20 scale-105'
                  : 'bg-noir-800/80 text-gold-300/70 border border-gold-500/20 hover:border-gold-400/50 hover:text-gold-200'
              }`}
            >
              {ch.tag}
            </button>
          ))}
        </div>

        {/* Cinematic Chapter Canvas Card */}
        <div className="relative luxury-card rounded-3xl overflow-hidden p-6 sm:p-10 border border-gold-400/30 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Visual Frame */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold-400/40 shadow-2xl group">
                  <motion.img
                    src={activeChapter.image}
                    alt={`${activeChapter.title} - Gokul M & Kavipriya B`}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-1000 group-hover:scale-105"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent pointer-events-none" />
                  
                  {/* Subtle Gold Foil Corner */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-noir-900/80 backdrop-blur-md rounded-full border border-gold-400/50 text-[10px] font-cinzel tracking-widest text-gold-300 uppercase">
                    {activeChapter.tag}
                  </div>
                </div>
              </div>

              {/* Story Narrative */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="space-y-2">
                  <span className="text-xs font-cinzel tracking-[0.3em] text-gold-400 uppercase font-semibold">
                    {activeChapter.location}
                  </span>
                  <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide">
                    {activeChapter.title}
                  </h3>
                  <p className="font-script text-2xl md:text-3xl text-gold-200">
                    {activeChapter.subtitle}
                  </p>
                </div>

                <div className="w-16 h-[1px] bg-gold-400/50 mx-auto lg:mx-0" />

                <p className="font-sans text-base md:text-lg text-ivory/80 leading-relaxed font-light">
                  {activeChapter.story}
                </p>

                {/* Couple Names Affirmation */}
                <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs font-cinzel text-gold-300/80 tracking-widest uppercase">
                  <span>Gokul M</span>
                  <span>•</span>
                  <span>Kavipriya B</span>
                </div>

                {/* Interactive Navigation Controls */}
                <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full border border-gold-400/40 bg-noir-800/80 text-gold-300 hover:bg-gold-500/20 hover:text-white transition-all shadow-md"
                    aria-label="Previous Chapter"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-cinzel tracking-widest text-gold-300/70">
                    0{activeIdx + 1} / 0{CHAPTERS.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full border border-gold-400/40 bg-noir-800/80 text-gold-300 hover:bg-gold-500/20 hover:text-white transition-all shadow-md"
                    aria-label="Next Chapter"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
