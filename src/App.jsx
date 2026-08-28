import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import OpeningCinematic from './components/OpeningCinematic';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import StorySection from './components/StorySection';
import Invitation3D from './components/Invitation3D';
import WeddingWorld from './components/WeddingWorld';
import CoupleEntrance from './components/CoupleEntrance';
import WeddingDetails from './components/WeddingDetails';
import FinalHero from './components/FinalHero';
import EndingSection from './components/EndingSection';
import AudioAmbience from './components/AudioAmbience';
import GuestWishesModal from './components/GuestWishesModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [wishesOpen, setWishesOpen] = useState(false);

  const handleOpeningContinue = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-noir-900 text-ivory selection:bg-gold-500 selection:text-noir-900 touch-pan-y">
      {/* Luxury Custom Cursor (Desktop Mouse Only) */}
      <CustomCursor />

      {/* Initial Mandala Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Background Wedding Music with music.mp3 */}
      <AudioAmbience isMuted={isMuted} setIsMuted={setIsMuted} />

      {/* Guest Wishes & Blessings Modal (WhatsApp + Confetti) */}
      <GuestWishesModal isOpen={wishesOpen} onClose={() => setWishesOpen(false)} />

      {/* Navbar with Scroll Progress Bar & Smooth Section Scroll */}
      <Navbar onOpenWishes={() => setWishesOpen(true)} />

      {/* Main Cinematic Film Journey */}
      <main className="relative z-10">
        {/* Section 01: Opening Diya Cinematic */}
        <OpeningCinematic onContinue={handleOpeningContinue} />

        {/* Section 02: 01 HERO (GK1) */}
        <HeroSection />

        {/* Section 03: 02 THE COUPLE (GK3) */}
        <CoupleSection />

        {/* Section 04: 03 THEIR STORY (GK2, GK4, GK5) */}
        <StorySection />

        {/* Section 05: 04 WEDDING INVITATION (GK6 3D Envelope) */}
        <Invitation3D />

        {/* Section 06: 05 THE WEDDING WORLD (South Indian Mandapam) */}
        <WeddingWorld />

        {/* Section 07: 06 FOREVER BEGINS (Couple Entrance GK4) */}
        <CoupleEntrance />

        {/* Section 08: 07 WEDDING DETAILS (Stationery Cards) */}
        <WeddingDetails />

        {/* Section 09: 08 FINAL MASTERPIECE (Grand Sunset Finale & Eternal Diya) */}
        <FinalHero />
        <EndingSection onOpenWishes={() => setWishesOpen(true)} />
      </main>
    </div>
  );
}
