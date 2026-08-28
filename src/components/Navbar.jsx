import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles, Calendar } from 'lucide-react';

export default function Navbar({ onOpenWishes }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'STORY', href: '#story' },
    { name: 'COUPLE', href: '#couple' },
    { name: 'INVITATION', href: '#invitation' },
    { name: 'WEDDING WORLD', href: '#wedding-world' },
    { name: 'DETAILS', href: '#details' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-noir-900/85 backdrop-blur-md border-b border-gold-500/15 py-3.5 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-noir-900/80 via-noir-900/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.25em] text-gold-gradient transition-all duration-300 group-hover:tracking-[0.3em]">
              FOREVER
            </span>
            <span className="text-[10px] uppercase font-sans tracking-widest text-gold-300/60 hidden sm:inline-block border-l border-gold-500/30 pl-2.5">
              Gokul & Kavipriya
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-xs font-cinzel tracking-[0.2em] text-ivory/80 hover:text-gold-300 transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-gold-300 to-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenWishes}
              className="relative px-4 py-2 rounded-full border border-gold-400/40 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 text-xs font-cinzel tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_rgba(200,157,75,0.1)]"
            >
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
              <span className="hidden sm:inline">Send Blessings</span>
              <span className="sm:hidden">Wishes</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gold-300 hover:text-gold-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-noir-900/95 backdrop-blur-xl flex flex-col justify-center items-center px-6 transition-all duration-300 md:hidden">
          <div className="space-y-6 text-center">
            <div className="font-script text-4xl text-gold-300 mb-6">
              Gokul & Kavipriya
            </div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-lg font-cinzel tracking-[0.25em] text-ivory/90 hover:text-gold-300 py-2 transition-colors"
                >
                  {link.name}
                </a>
              </div>
            ))}
            <div className="pt-8">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWishes();
                }}
                className="w-full px-6 py-3 rounded-full border border-gold-400 bg-gold-500/15 text-gold-200 font-cinzel text-xs tracking-widest uppercase flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-gold-400/40 text-gold-400" />
                Bless The Couple
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
