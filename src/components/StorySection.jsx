import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stars, ChevronRight, ChevronLeft } from 'lucide-react';

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
      className="relative min-h-[90vh] md:min-h-screen w-full py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#0F0C09] via-[#140F0B] to-[#0A0806] overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Title */}
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-noir-800/60 text-gold-300 text-xs font-cinzel tracking-[0.3em] uppercase">
            <Stars className="w-3.5 h-3.5" />
            Cinematic Chronicle
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-gold-gradient">
            THEIR STORY
          </h2>
          <p className="font-cormorant italic text-base sm:text-lg text-ivory/75 max-w-lg mx-auto">
            A romantic odyssey in four timeless movements
          </p>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-3 max-w-xl mx-auto">
          {CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-cinzel tracking-wider uppercase transition-all duration-200 ${
                activeIdx === idx
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-noir-900 font-bold shadow-md scale-105'
                  : 'bg-noir-800/80 text-gold-300/70 border border-gold-500/20 hover:text-gold-200'
              }`}
            >
              {ch.tag}
            </button>
          ))}
        </div>

        {/* Cinematic Chapter Canvas Card */}
        <div className="relative luxury-card rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 md:p-10 border border-gold-400/30 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center"
            >
              {/* Visual Frame */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-gold-400/40 shadow-xl">
                  <img
                    src={activeChapter.image}
                    alt={`${activeChapter.title} - Gokul M & Kavipriya B`}
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-noir-900 via-noir-900/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Story Narrative */}
              <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="space-y-1 sm:space-y-2">
                  <span className="text-[10px] sm:text-xs font-cinzel tracking-[0.25em] text-gold-400 uppercase font-semibold">
                    {activeChapter.location}
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient tracking-wide">
                    {activeChapter.title}
                  </h3>
                  <p className="font-script text-xl sm:text-2xl text-gold-200">
                    {activeChapter.subtitle}
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-gold-400/40 mx-auto lg:mx-0" />

                <p className="font-sans text-sm sm:text-base text-ivory/80 leading-relaxed font-light">
                  {activeChapter.story}
                </p>

                {/* Controls */}
                <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full border border-gold-400/40 bg-noir-800 text-gold-300 hover:bg-gold-500/20 transition-colors"
                    aria-label="Previous Chapter"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-cinzel tracking-widest text-gold-300/70">
                    0{activeIdx + 1} / 0{CHAPTERS.length}
                  </span>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full border border-gold-400/40 bg-noir-800 text-gold-300 hover:bg-gold-500/20 transition-colors"
                    aria-label="Next Chapter"
                  >
                    <ChevronRight className="w-4 h-4" />
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
