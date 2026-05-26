/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Languages, Menu, X, ArrowRight } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center border-b ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-slate-200/50'
          : 'bg-white/50 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        {/* Left Area - Brand logo */}
        <div 
          className="flex items-center space-x-2 cursor-pointer group" 
          onClick={() => handleLinkClick('hero')}
          id="nav-brand"
        >
          <img 
            src="https://i.ibb.co/k2YQcpYM/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
            alt="Astrateq Logo" 
            className="h-9 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Links (Desktop Only) - matched to Section 01 of PDF */}
        <div className="hidden md:flex items-center space-x-8" id="nav-links-desktop">
          <button
            onClick={() => handleLinkClick('features')}
            className="text-xs font-bold text-[#4B5563] hover:text-[#00D4FF] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => handleLinkClick('compatibility')}
            className="text-xs font-bold text-[#4B5563] hover:text-[#00D4FF] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Compatibility
          </button>
          <button
            onClick={() => handleLinkClick('testimonials')}
            className="text-xs font-bold text-[#4B5563] hover:text-[#00D4FF] uppercase tracking-wider transition-colors cursor-pointer"
          >
            Alpha Insights
          </button>
          <button
            onClick={() => handleLinkClick('faq')}
            className="text-xs font-bold text-[#4B5563] hover:text-[#00D4FF] uppercase tracking-wider transition-colors cursor-pointer"
          >
            FAQ
          </button>
          <button
            onClick={() => handleLinkClick('what-is-included')}
            className="text-xs font-bold text-[#4B5563] hover:text-[#00D4FF] uppercase tracking-wider transition-colors cursor-pointer"
          >
            About
          </button>
        </div>

        {/* Right CTA Suite */}
        <div className="flex items-center space-x-4" id="nav-actions">
          {/* Language Switcher */}
          <div className="flex items-center bg-slate-100 rounded-none p-0.5 border border-slate-200" id="lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-[10px] font-bold rounded-none transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#1A1A2E] text-white'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 text-[10px] font-bold rounded-none transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-[#1A1A2E] text-white font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FR
            </button>
          </div>

          {/* Reserve My Spot CTA Button */}
          <button
            id="nav-cta-btn"
            onClick={() => handleLinkClick('pricing')}
            className="hidden sm:flex items-center space-x-1.5 px-5 py-2 bg-[#00D4FF] text-[#1A1A2E] hover:bg-[#00D4FF]/90 text-xs font-extrabold uppercase tracking-wider rounded-none hover:shadow-md transition-all cursor-pointer border border-[#00D4FF]"
          >
            <span>Reserve My Spot</span>
            <span className="text-[10px] font-sans font-black">→</span>
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-none text-[#1A1A2E] hover:bg-slate-100 transition-colors border border-transparent"
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
            className="md:hidden bg-white border-b border-slate-200 absolute top-20 left-0 right-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('features')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#00D4FF] border-b border-slate-100 pb-2 cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => handleLinkClick('compatibility')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#00D4FF] border-b border-slate-100 pb-2 cursor-pointer"
              >
                Compatibility
              </button>
              <button
                onClick={() => handleLinkClick('testimonials')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#00D4FF] border-b border-slate-100 pb-2 cursor-pointer"
              >
                Alpha Insights
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:text-[#00D4FF] border-b border-slate-100 pb-2 cursor-pointer"
              >
                FAQ
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full flex items-center justify-center space-x-1 py-2.5 px-4 rounded-none text-xs font-black uppercase tracking-widest text-[#1A1A2E] bg-[#00D4FF] hover:bg-[#00D4FF]/90 transition-all cursor-pointer shadow-sm"
              >
                <span>Reserve My Spot</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
