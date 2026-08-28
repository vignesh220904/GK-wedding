import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioAmbience({ isMuted, setIsMuted }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const targetVolume = 0.14; // Soft, elegant luxury volume

  // Fade volume helper
  const fadeVolume = (from, to, duration = 1200, callback) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const steps = 24;
    const stepTime = duration / steps;
    const volumeStep = (to - from) / steps;
    let currentStep = 0;

    audio.volume = Math.max(0, Math.min(1, from));

    fadeIntervalRef.current = setInterval(() => {
      currentStep++;
      const newVol = from + volumeStep * currentStep;
      audio.volume = Math.max(0, Math.min(1, newVol));

      if (currentStep >= steps) {
        clearInterval(fadeIntervalRef.current);
        audio.volume = Math.max(0, Math.min(1, to));
        if (callback) callback();
      }
    }, stepTime);
  };

  const playMusic = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    
    // Resume audio context/playback smoothly
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setIsMuted(false);
          fadeVolume(audio.volume, targetVolume, 1400);
        })
        .catch((err) => {
          // Autoplay blocked by browser policy until user interaction
          setIsPlaying(false);
        });
    }
  };

  const pauseMusic = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    fadeVolume(audio.volume, 0, 1000, () => {
      audio.pause();
      setIsPlaying(false);
      setIsMuted(true);
    });
  };

  const toggleSound = () => {
    if (isPlaying && !isMuted) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  useEffect(() => {
    // Attempt auto-start or attach interaction listener
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0;
      
      const tryAutoPlay = () => {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            fadeVolume(0, targetVolume, 2000);
          })
          .catch(() => {
            // Wait for first touch/click/scroll
            const handleUserInteract = () => {
              playMusic();
              ['click', 'touchstart', 'scroll', 'keydown'].forEach((evt) =>
                window.removeEventListener(evt, handleUserInteract)
              );
            };

            ['click', 'touchstart', 'scroll', 'keydown'].forEach((evt) =>
              window.addEventListener(evt, handleUserInteract, { once: true, passive: true })
            );
          });
      };

      tryAutoPlay();
    }

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  return (
    <>
      {/* Hidden Audio Element with music.mp3 */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        className="hidden"
      />

      {/* Floating Minimal Luxury Sound Control */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleSound}
          className={`group relative flex items-center gap-2.5 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 shadow-xl ${
            isPlaying && !isMuted
              ? 'bg-noir-900/90 border-gold-400/60 text-gold-200 shadow-gold-500/10 scale-105'
              : 'bg-noir-900/70 border-gold-500/30 text-gold-300/70 hover:text-gold-200 hover:border-gold-400/50'
          }`}
          title={isPlaying && !isMuted ? "Mute Wedding Music (music.mp3)" : "Play Wedding Music (music.mp3)"}
          aria-label={isPlaying && !isMuted ? "Sound On" : "Sound Off"}
        >
          {/* Animated Waveform Equalizer */}
          <div className="relative flex items-center justify-center w-4 h-4">
            {isPlaying && !isMuted ? (
              <div className="flex items-end gap-[2.5px] h-3.5">
                <span className="w-[2px] bg-gold-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-full" />
                <span className="w-[2px] bg-gold-300 rounded-full animate-[pulse_1.0s_ease-in-out_infinite_0.2s] h-3/5" />
                <span className="w-[2px] bg-gold-400 rounded-full animate-[pulse_0.85s_ease-in-out_infinite_0.4s] h-4/5" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-gold-400/60" />
            )}
          </div>

          <span className="text-[11px] font-cinzel tracking-[0.2em] uppercase font-medium">
            {isPlaying && !isMuted ? "SOUND ON" : "SOUND OFF"}
          </span>
        </button>
      </div>
    </>
  );
}
