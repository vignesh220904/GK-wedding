import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioAmbience({ isMuted, setIsMuted }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize Web Audio API ambient classical soundscape
  const startAmbientMusic = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      if (gainNodeRef.current) {
        gainNodeRef.current.disconnect();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Raag Yaman / Kalyani harmonic drone (Tanpura roots: Sa, Pa, High Sa - 130.81Hz, 196.00Hz, 261.63Hz)
      const baseFreqs = [130.81, 196.00, 261.63, 392.00];
      baseFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), ctx.currentTime);

        // Gentle tremolo
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.value = 0.2 + idx * 0.1;
        lfoGain.gain.value = 0.03;
        lfo.connect(lfoGain.gain);

        oscGain.gain.value = 0.12 / (idx + 1);
        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();
      });

      // Melodic gentle Santoor / Shehnai harp notes generator
      const notes = [261.63, 293.66, 329.63, 369.99, 392.00, 440.00, 493.88, 523.25]; // Sa Re Ga Ma# Pa Dha Ni Sa
      const playChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running' || !gainNodeRef.current) return;
        const note = notes[Math.floor(Math.random() * notes.length)];
        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        
        chimeOsc.type = 'sine';
        chimeOsc.frequency.setValueAtTime(note, ctx.currentTime);
        
        chimeGain.gain.setValueAtTime(0.001, ctx.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.1);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(masterGain);

        chimeOsc.start();
        chimeOsc.stop(ctx.currentTime + 3.6);
      };

      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(playChime, 2200);

      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init error", e);
    }
  };

  const stopAmbientMusic = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
    }
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (isMuted || !isPlaying) {
      setIsMuted(false);
      startAmbientMusic();
    } else {
      setIsMuted(true);
      stopAmbientMusic();
    }
  };

  // Listen to user first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isMuted && !isPlaying) {
        startAmbientMusic();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [isMuted]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleSound}
        className="group relative flex items-center gap-3 px-4 py-2.5 rounded-full bg-noir-800/80 backdrop-blur-md border border-gold-500/30 text-gold-300 hover:text-gold-200 hover:border-gold-400/60 shadow-lg shadow-black/60 transition-all duration-300 hover:scale-105"
        title={isPlaying && !isMuted ? "Mute Ambient Sitar & Drone" : "Play Wedding Ambient Music"}
      >
        <div className="relative flex items-center justify-center w-5 h-5">
          {isPlaying && !isMuted ? (
            <div className="flex items-end gap-[3px] h-3.5">
              <span className="w-[2px] bg-gold-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-full" />
              <span className="w-[2px] bg-gold-300 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s] h-2/3" />
              <span className="w-[2px] bg-gold-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-4/5" />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-gold-400/60" />
          )}
        </div>
        <span className="text-xs uppercase tracking-widest font-cinzel font-medium text-gold-300/90 group-hover:text-gold-200">
          {isPlaying && !isMuted ? "Sound On" : "Music"}
        </span>
      </button>
    </div>
  );
}
