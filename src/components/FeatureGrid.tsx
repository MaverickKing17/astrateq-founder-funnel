/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, Smartphone, Snowflake, Eye, Settings, HelpCircle, X, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FeatureGridProps {
  language: Language;
}

export default function FeatureGrid({ language }: FeatureGridProps) {
  const [activeDeepDiveId, setActiveDeepDiveId] = useState<string | null>(null);
  const t = translations[language].features;

  const icons: Record<string, React.ReactNode> = {
    "failure-detection": <Cpu className="w-5 h-5" />,
    "driver-coaching": <Eye className="w-5 h-5" />,
    "family-dashboard": <Smartphone className="w-5 h-5" />,
    "winter-optimized": <Snowflake className="w-5 h-5" />,
    "canadian-data": <ShieldCheck className="w-5 h-5" />,
    "ten-minute-setup": <Settings className="w-5 h-5" />
  };

  const activeItem = t.items.find(item => item.id === activeDeepDiveId);

  return (
    <section id="features" className="py-24 md:py-32 bg-white relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Title Headers */}
        <div className="max-w-3xl mx-auto space-y-4" id="features-headers">
          <span className="px-3.5 py-1.5 text-xs font-bold font-mono text-white bg-[#1A1A2E] rounded-full uppercase tracking-wider">
            {language === 'en' ? 'ENGINEERING ECOSYSTEM' : 'CŒUR DE NOTRE INGÉNIERIE'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A2E]">
            {t.titleText} <span className="italic text-[#00D4FF]">{t.titleItalic}</span>
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* 3x2 Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto" id="features-3x2-grid">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-[#F8F9FA] p-6 rounded-3xl border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all text-left group"
              id={`feature-card-${item.id}`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#1A1A2E] group-hover:text-[#00D4FF] group-hover:bg-[#1A1A2E] shadow-sm transition-all">
                  {icons[item.id] || <Cpu className="w-5 h-5" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#1A1A2E] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>
              </div>

              {/* Read More button triggers modal layout overlay for citations check */}
              <div className="pt-6 mt-6 border-t border-gray-150/10 flex items-center justify-between text-xs font-bold text-gray-500 hover:text-[#00D4FF] cursor-pointer"
                onClick={() => setActiveDeepDiveId(item.id)}
              >
                <span>{language === 'en' ? "Open Technical Review" : "Lire l'analyse technique"}</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Expandable Side Panel Overlay (Slide Tray) */}
        <AnimatePresence>
          {activeDeepDiveId && activeItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-end" id="features-overlay-backdrop">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveDeepDiveId(null)}
                className="absolute inset-0 bg-black"
              />

              {/* Content Card Side Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="absolute top-0 bottom-0 right-0 w-full max-w-xl bg-white shadow-2xl flex flex-col justify-between p-8 z-10 border-l border-gray-100"
                id="features-deepdive-drawer"
              >
                <div className="space-y-6 overflow-y-auto pr-2 max-h-[80vh]">
                  {/* Header Row */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-lg bg-[#1A1A2E] text-[#00D4FF] flex items-center justify-center">
                        {icons[activeItem.id] || <Cpu className="w-4 h-4" />}
                      </div>
                      <span className="text-xs font-bold font-mono tracking-wider uppercase text-gray-400">
                        {language === 'en' ? 'TECHNOLOGY RECON' : 'SPÉCIFICATIONS TECHNIQUES'}
                      </span>
                    </div>
                    {/* Close button */}
                    <button
                      onClick={() => setActiveDeepDiveId(null)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-[#1A1A2E] transition-colors cursor-pointer"
                      aria-label="Close drawer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 text-left">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1A1A2E] leading-tight">
                      {activeItem.title}
                    </h3>
                    <p className="text-sm font-bold text-[#00D4FF] bg-cyan-50/50 border border-cyan-100/50 rounded-xl px-4 py-2">
                      💡 {activeItem.shortDescription}
                    </p>
                    
                    {/* 300 words technical statement block */}
                    <div className="text-xs text-[#4B5563] leading-relaxed space-y-4 font-normal mt-4 border-t border-gray-50 pt-4" id="crawler-extraction-block">
                      {activeItem.textBlock.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and certification signals */}
                <div className="border-t border-gray-100 pt-6 mt-6 text-left space-y-4">
                  <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-medium">
                    <span>🛡️</span>
                    <span>Verified under PIPEDA and ISO 26262 requirements. Secure Edge Inference.</span>
                  </div>
                  <button
                    onClick={() => setActiveDeepDiveId(null)}
                    className="w-full py-4.5 bg-[#1A1A2E] hover:bg-[#00D4FF] text-white hover:text-[#1A1A2E] font-bold text-xs rounded-full transition-all cursor-pointer"
                  >
                    {language === 'en' ? 'Close Review' : 'Fermer la fiche'}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
