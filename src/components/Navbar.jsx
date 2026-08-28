import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar({ onOpenWishes }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      if (scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      const topOffset = 60;
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
      {/* Top Gold Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-noir-900/40 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-amber-200"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-noir-900/90 backdrop-blur-md border-b border-gold-500/15 py-3 shadow-xl'
            : 'bg-gradient-to-b from-noir-900/80 via-noir-900/20 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-bold tracking-[0.25em] text-gold-gradient">
              FOREVER
            </span>
            <span className="text-[10px] uppercase font-sans tracking-widest text-gold-300/60 hidden sm:inline-block border-l border-gold-500/30 pl-2.5">
              Gokul & Kavipriya
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
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
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenWishes}
              className="relative px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gold-400/40 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 hover:text-gold-200 text-xs font-cinzel tracking-wider flex items-center gap-1.5 shadow-md"
            >
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
              <span className="hidden sm:inline">Send Blessings</span>
              <span className="sm:hidden">Blessings</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gold-300 hover:text-gold-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-noir-900/98 backdrop-blur-xl flex flex-col justify-center items-center px-6 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 p-2 text-gold-300"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-6 text-center w-full max-w-xs">
            <div className="font-script text-4xl text-gold-300 mb-4">
              Gokul & Kavipriya
            </div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block text-base font-cinzel tracking-[0.2em] text-ivory/90 hover:text-gold-300 py-2 border-b border-gold-500/10"
                >
                  {link.name}
                </a>
              </div>
            ))}
            <div className="pt-4">
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
