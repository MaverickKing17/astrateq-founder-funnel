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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

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
    <section id="features" className="py-24 md:py-32 bg-white relative flex flex-col justify-center items-center overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Title Headers */}
        <div className="max-w-3xl mx-auto space-y-4" id="features-headers">
          <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
            {language === 'en' ? 'ENGINEERING ECOSYSTEM' : 'CŒUR DE NOTRE INGÉNIERIE'}
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            {t.titleText} <span className="text-blue-600 block sm:inline">{t.titleItalic}</span>
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* 3x2 Grid Structure */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto"
          id="features-3x2-grid"
        >
          {t.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col justify-between bg-slate-50 p-6 rounded-none border border-gray-200 hover:border-slate-400 hover:bg-white hover:shadow-md transition-all text-left group"
              id={`feature-card-${item.id}`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-none bg-white border border-gray-200 flex items-center justify-center text-slate-950 group-hover:text-white group-hover:bg-blue-600 shadow-xs transition-all">
                  {icons[item.id] || <Cpu className="w-5 h-5" />}
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-sm font-extrabold text-[#1A1A2E] leading-snug uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed font-sans line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>
              </div>

              {/* Read More button triggers modal layout overlay for citations check */}
              <div className="pt-6 mt-6 border-t border-gray-200 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-[#1A1A2E]/50 group-hover:text-blue-600 cursor-pointer"
                onClick={() => setActiveDeepDiveId(item.id)}
              >
                <span>{language === 'en' ? "Open Technical Review" : "Lire l'analyse technique"}</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
                className="absolute top-0 bottom-0 right-0 w-full max-w-xl bg-white shadow-2xl flex flex-col justify-between p-8 z-10 border-l border-gray-200 rounded-none"
                id="features-deepdive-drawer"
              >
                <div className="space-y-6 overflow-y-auto pr-2 max-h-[80vh]">
                  {/* Header Row */}
                  <div className="flex items-center justify-between border-b border-gray-150 border-gray-200 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-none bg-black text-blue-400 flex items-center justify-center">
                        {icons[activeItem.id] || <Cpu className="w-4 h-4" />}
                      </div>
                      <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-slate-400">
                        {language === 'en' ? 'TECHNOLOGY RECON' : 'SPÉCIFICATIONS TECHNIQUES'}
                      </span>
                    </div>
                    {/* Close button */}
                    <button
                      onClick={() => setActiveDeepDiveId(null)}
                      className="p-1.5 hover:bg-slate-100 rounded-none text-slate-400 hover:text-[#1A1A2E] transition-colors cursor-pointer"
                      aria-label="Close drawer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 text-left">
                    <h3 className="font-sans text-2xl md:text-3xl font-black uppercase text-slate-950 leading-tight">
                      {activeItem.title}
                    </h3>
                    <p className="text-[11px] font-bold text-blue-800 bg-blue-50 border border-blue-150 border-blue-105 rounded-none px-4 py-3">
                      💡 {activeItem.shortDescription}
                    </p>
                    
                    {/* 300 words technical statement block */}
                    <div className="text-xs text-slate-600 leading-relaxed space-y-4 font-medium mt-4 border-t border-gray-100 pt-4" id="crawler-extraction-block">
                      {activeItem.textBlock.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer and certification signals */}
                <div className="border-t border-gray-200 pt-6 mt-6 text-left space-y-4">
                  <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    <span>🛡️</span>
                    <span>Verified under PIPEDA and ISO 26262 requirements. Secure Edge Inference.</span>
                  </div>
                  <button
                    onClick={() => setActiveDeepDiveId(null)}
                    className="w-full py-4.5 bg-black hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all cursor-pointer shadow-lg shadow-black/10"
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
