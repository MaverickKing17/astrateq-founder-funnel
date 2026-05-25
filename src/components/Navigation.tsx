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
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
        {/* Left Area - Brand */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => handleLinkClick('hero')}
          id="nav-brand"
        >
          <img 
            src="https://i.ibb.co/k2YQcpYM/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
            alt="Astrateq Logo" 
            className="h-10 md:h-12 w-auto object-contain shrink-0 hover:opacity-90 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Center Links (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-10" id="nav-links-desktop">
          <button
            onClick={() => handleLinkClick('how-it-works')}
            className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer"
          >
            {t.navigation.links.howItWorks}
          </button>
          <button
            onClick={() => handleLinkClick('compatibility')}
            className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer"
          >
            {t.navigation.links.compatibility}
          </button>
          <button
            onClick={() => handleLinkClick('pricing')}
            className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer"
          >
            {t.navigation.links.pricing}
          </button>
          <button
            onClick={() => handleLinkClick('faq')}
            className="text-xs font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wider transition-colors cursor-pointer"
          >
            {t.navigation.links.faq}
          </button>
        </div>

        {/* Right CTA Suite */}
        <div className="flex items-center space-x-4" id="nav-actions">
          {/* Language Switcher */}
          <div className="flex items-center bg-gray-50 rounded-none p-0.5 border border-gray-200" id="lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-[10px] font-bold rounded-none transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 text-[10px] font-bold rounded-none transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              FR
            </button>
          </div>

          {/* Reserve button (Desktop) */}
          <button
            id="nav-cta-btn"
            onClick={() => handleLinkClick('pricing')}
            className="hidden sm:flex items-center space-x-1.5 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-800 transition-colors shadow-lg shadow-black/10 cursor-pointer"
          >
            <span>{t.navigation.cta}</span>
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-none text-slate-900 hover:bg-gray-100 transition-colors border border-transparent"
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
            className="md:hidden bg-white border-b border-gray-200 absolute top-20 left-0 right-0 z-40"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('how-it-works')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-600 hover:text-blue-600 border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.howItWorks}
              </button>
              <button
                onClick={() => handleLinkClick('compatibility')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-600 hover:text-blue-600 border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.compatibility}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-600 hover:text-blue-600 border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.pricing}
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="w-full text-left py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-600 hover:text-blue-600 border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.faq}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full flex items-center justify-center space-x-1 py-3 px-4 rounded-none text-xs font-bold uppercase tracking-widest text-white bg-black hover:bg-slate-800 transition-all cursor-pointer shadow-lg shadow-black/10"
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
