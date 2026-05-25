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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Area - Brand */}
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => handleLinkClick('hero')}
          id="nav-brand"
        >
          <div className="w-8 h-8 rounded-lg bg-[#1A1A2E] flex items-center justify-center text-[#00D4FF]">
            <Shield className="w-5 h-5 fill-current" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-[#1A1A2E]">
            {t.navigation.logo}
          </span>
        </div>

        {/* Center Links (Desktop Only) */}
        <div className="hidden md:flex items-center space-x-8" id="nav-links-desktop">
          <button
            onClick={() => handleLinkClick('how-it-works')}
            className="text-sm font-medium text-gray-600 hover:text-[#00D4FF] hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            {t.navigation.links.howItWorks}
          </button>
          <button
            onClick={() => handleLinkClick('compatibility')}
            className="text-sm font-medium text-gray-600 hover:text-[#00D4FF] hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            {t.navigation.links.compatibility}
          </button>
          <button
            onClick={() => handleLinkClick('pricing')}
            className="text-sm font-medium text-gray-600 hover:text-[#00D4FF] hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            {t.navigation.links.pricing}
          </button>
          <button
            onClick={() => handleLinkClick('faq')}
            className="text-sm font-medium text-gray-600 hover:text-[#00D4FF] hover:underline underline-offset-4 transition-colors cursor-pointer"
          >
            {t.navigation.links.faq}
          </button>
        </div>

        {/* Right CTA Suite */}
        <div className="flex items-center space-x-4" id="nav-actions">
          {/* Language Switcher */}
          <div className="flex items-center bg-gray-100 rounded-full p-0.5 border border-gray-200" id="lang-switcher">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-white text-[#1A1A2E] shadow-sm'
                  : 'text-gray-500 hover:text-[#1A1A2E]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                language === 'fr'
                  ? 'bg-white text-[#1A1A2E] shadow-sm'
                  : 'text-gray-500 hover:text-[#1A1A2E]'
              }`}
            >
              FR
            </button>
          </div>

          {/* Reserve button (Desktop) */}
          <button
            id="nav-cta-btn"
            onClick={() => handleLinkClick('pricing')}
            className="hidden sm:flex items-center space-x-1 px-5 py-2 rounded-full text-xs font-bold text-white bg-[#1A1A2E] hover:bg-[#00D4FF] hover:text-[#1A1A2E] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t.navigation.cta}</span>
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#1A1A2E] hover:bg-gray-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              <button
                onClick={() => handleLinkClick('how-it-works')}
                className="w-full text-left py-2 text-base font-semibold text-gray-700 hover:text-[#00D4FF] border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.howItWorks}
              </button>
              <button
                onClick={() => handleLinkClick('compatibility')}
                className="w-full text-left py-2 text-base font-semibold text-gray-700 hover:text-[#00D4FF] border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.compatibility}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full text-left py-2 text-base font-semibold text-gray-700 hover:text-[#00D4FF] border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.pricing}
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="w-full text-left py-2 text-base font-semibold text-gray-700 hover:text-[#00D4FF] border-b border-gray-50 pb-2 cursor-pointer"
              >
                {t.navigation.links.faq}
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full flex items-center justify-center space-x-1 py-3 px-4 rounded-full text-sm font-bold text-white bg-[#1A1A2E] hover:bg-[#00D4FF] hover:text-[#1A1A2E] transition-all cursor-pointer"
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
