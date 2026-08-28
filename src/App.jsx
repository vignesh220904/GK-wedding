import React, { useState, useEffect } from 'react';
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
import ImmersiveTransition from './components/ImmersiveTransition';
import WeddingDetails from './components/WeddingDetails';
import PremiumFrame from './components/PremiumFrame';
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
    <div className="relative min-h-screen bg-noir-900 text-ivory overflow-x-hidden selection:bg-gold-500 selection:text-noir-900">
      {/* Luxury Custom Cursor */}
      <CustomCursor />

      {/* Initial Mandala Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Ambient Audio Synth Player */}
      <AudioAmbience isMuted={isMuted} setIsMuted={setIsMuted} />

      {/* Interactive Guest Wishes Modal */}
      <GuestWishesModal isOpen={wishesOpen} onClose={() => setWishesOpen(false)} />

      {/* Master Navbar */}
      <Navbar onOpenWishes={() => setWishesOpen(true)} />

      {/* Main Flow of Cinematic Sections */}
      <main className="relative z-10">
        {/* Section 01: Cinematic Opening */}
        <OpeningCinematic onContinue={handleOpeningContinue} />

        {/* Section 02: Hero (GK1) */}
        <HeroSection />

        {/* Section 03: The Couple Editorial (GK3) */}
        <CoupleSection />

        {/* Section 04: Their Story Chapters (GK2, GK4, GK5) */}
        <StorySection />

        {/* Section 05: 3D Physical Invitation Reveal (GK6) */}
        <Invitation3D />

        {/* Section 06: South Indian Mandapam Wedding World */}
        <WeddingWorld />

        {/* Section 07: Couple Entrance (GK4/GK1) */}
        <CoupleEntrance />

        {/* Section 08: Immersive Transition */}
        <ImmersiveTransition />

        {/* Section 09: Wedding Details (Stationery Cards) */}
        <WeddingDetails />

        {/* Section 10: Premium Frame Exhibit (GK7) */}
        <PremiumFrame />

        {/* Section 11: Final Grand Hero Showcase (GK5) */}
        <FinalHero />

        {/* Section 12: Cinematic Ending & Eternal Diya */}
        <EndingSection onOpenWishes={() => setWishesOpen(true)} />
      </main>
    </div>
  );
}
