/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Languages, ArrowRight, Menu, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavigationProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ language, setLanguage, onScrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(id);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled
          ? 'bg-[#06080F]/90 backdrop-blur-md shadow-sm border-b border-white/5'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        {/* Left Area - Brand */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => handleLinkClick('hero')}
          id="nav-brand"
        >
          {/* Custom Astrateq premium typography-backed layout if image fails or for styling */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-blue-500 text-2xl font-black mr-2">▲</span>
              <div className="flex flex-col">
                <span className="text-sm font-black font-sans uppercase tracking-[0.2em] text-white">ASTRATEQ</span>
                <span className="text-[8px] font-bold font-mono uppercase tracking-[0.3em] text-[#00D4FF]">G A D G E T S</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Links (Desktop Only) - matched to mockup */}
        <div className="hidden md:flex items-center space-x-10" id="nav-links-desktop">
          <button
            onClick={() => handleLinkClick('features')}
            className="text-xs font-bold text-slate-300 hover:text-[#00D4FF] uppercase tracking-widest transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => handleLinkClick('how-it-works')}
            className="text-xs font-bold text-slate-300 hover:text-[#00D4FF] uppercase tracking-widest transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleLinkClick('compatibility')}
            className="text-xs font-bold text-slate-300 hover:text-[#00D4FF] uppercase tracking-widest transition-colors cursor-pointer"
          >
            Compatibility
          </button>
          <button
            onClick={() => handleLinkClick('pricing')}
            className="text-xs font-bold text-slate-300 hover:text-[#00D4FF] uppercase tracking-widest transition-colors cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={() => handleLinkClick('faq')}
            className="text-xs font-bold text-slate-300 hover:text-[#00D4FF] uppercase tracking-widest transition-colors cursor-pointer"
          >
            {t.navigation.links.faq}
          </button>
        </div>

        {/* Right CTA Suite */}
        <div className="flex items-center space-x-4" id="nav-actions">
          {/* Language Switcher with premium dark styling */}
          <div className="flex items-center bg-white/5 rounded-none p-0.5 border border-white/10" id="lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-[10px] font-bold rounded-none transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 text-[10px] font-bold rounded-none transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FR
            </button>
          </div>

          {/* Reserve button (Desktop) */}
          <button
            id="nav-cta-btn"
            onClick={() => handleLinkClick('pricing')}
            className="hidden sm:flex items-center space-x-1.5 px-6 py-2.5 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-blue-500 transition-colors shadow-lg shadow-blue-650/10 cursor-pointer"
          >
            <span>Pre-Order Now</span>
            <span className="text-[10px] font-sans font-black ml-1">→</span>
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-none text-white hover:bg-white/10 transition-colors border border-transparent"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (with Framer Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0D16] border-b border-white/10 absolute top-20 left-0 right-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('features')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-blue-500 border-b border-white/5 pb-2 cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => handleLinkClick('how-it-works')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-blue-500 border-b border-white/5 pb-2 cursor-pointer"
              >
                {t.navigation.links.howItWorks}
              </button>
              <button
                onClick={() => handleLinkClick('compatibility')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-blue-500 border-b border-white/5 pb-2 cursor-pointer"
              >
                {t.navigation.links.compatibility}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-blue-500 border-b border-white/5 pb-2 cursor-pointer"
              >
                {t.navigation.links.pricing}
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-300 hover:text-blue-500 border-b border-white/5 pb-2 cursor-pointer"
              >
                {t.navigation.links.faq}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full flex items-center justify-center space-x-1 py-3 px-4 rounded-none text-xs font-bold uppercase tracking-widest text-white bg-blue-600 hover:bg-blue-500 transition-all cursor-pointer shadow-lg shadow-blue-600/10"
              >
                <span>{t.navigation.cta}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
