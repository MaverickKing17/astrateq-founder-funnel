/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cpu, Smartphone, Snowflake, Eye, Settings, HelpCircle, X, ChevronRight, Activity, Zap, Compass, AlertTriangle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FeatureGridProps {
  language: Language;
}

export default function FeatureGrid({ language }: FeatureGridProps) {
  const [activeDeepDiveId, setActiveDeepDiveId] = useState<string | null>(null);
  const [swipedCardId, setSwipedCardId] = useState<string | null>(null);
  const t = translations[language].features;

  // Aligning exactly with the mockup's 5 cards
  const mockupCards = [
    {
      id: "failure-detection",
      title: language === 'en' ? "Predictive Diagnostics" : "Diagnostics Prédictifs",
      desc: language === 'en' 
        ? "AI analyzes 100+ vehicle sensors to predict issues days or weeks before failure."
        : "L'IA analyse plus de 100 capteurs pour prédire les pannes des jours avant l'incident.",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      tag: "OBD-II TELEMETRY",
      details: t.items.find(item => item.id === "failure-detection")?.textBlock || ""
    },
    {
      id: "collision-prevention",
      title: language === 'en' ? "Collision Prevention" : "Évitement d'Impact",
      desc: language === 'en'
        ? "Advanced computer vision detects risks and helps you avoid accidents."
        : "La vision par ordinateur modélise les trajectoires et prévient les collisions.",
      icon: <Compass className="w-5 h-5 text-blue-400" />,
      tag: "NPU VISION",
      details: t.items.find(item => item.id === "driver-coaching")?.textBlock || ""
    },
    {
      id: "driver-monitoring",
      title: language === 'en' ? "Driver Monitoring" : "Vigilance Conducteur",
      desc: language === 'en'
        ? "AI monitors attention & fatigue to keep you alert and your family safe."
        : "L'IA analyse le regard et les signaux de somnolence pour préserver la sécurité.",
      icon: <Eye className="w-5 h-5 text-blue-400" />,
      tag: "CABIN AI",
      details: translations[language].features.items[1]?.textBlock || ""
    },
    {
      id: "winter-optimized",
      title: language === 'en' ? "Winter Optimized" : "Optimisé pour l'Hiver",
      desc: language === 'en'
        ? "Built and tested for extreme Canadian winters down to -40°C."
        : "Équipé de lentilles chauffantes infrarouges, optimisé pour la neige et le sel.",
      icon: <Snowflake className="w-5 h-5 text-blue-400" />,
      tag: "SUB-ZERO BUILD",
      details: t.items.find(item => item.id === "winter-optimized")?.textBlock || ""
    },
    {
      id: "real-time-alerts",
      title: language === 'en' ? "Real-Time Alerts" : "Alertes Instantanées",
      desc: language === 'en'
        ? "Instant notifications for hazards, maintenance, and road conditions."
        : "Des alertes visuelles et haptiques immédiates en cas de danger critique.",
      icon: <Smartphone className="w-5 h-5 text-blue-400" />,
      tag: "SECURE TELEMETRY",
      details: t.items.find(item => item.id === "family-dashboard")?.textBlock || ""
    }
  ];

  const activeItem = mockupCards.find(item => item.id === activeDeepDiveId);

  return (
    <section id="features" className="py-24 md:py-32 bg-[#05070F] relative overflow-hidden flex flex-col justify-center items-center border-b border-white/5">
      {/* Soft blue glowing backdrop in feature background */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[60rem] h-[30rem] bg-blue-900/10 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky/Standard Frame - Matching Mockup layout */}
          <div className="lg:col-span-4 flex flex-col space-y-6 text-left" id="features-left-column">
            <span className="text-blue-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] w-fit">
              COMPLETE AI SAFETY ECOSYSTEM
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
              Proactive Protection.<br />Powered by AI.
            </h2>
            <p className="text-sm text-slate-350 font-medium leading-relaxed max-w-sm">
              Astrateq combines advanced AI diagnostics with computer vision to prevent problems before they happen.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => {
                  const targetElement = document.getElementById('what-was-included');
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Explore All Features</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Horizontal Sliding Container - Beautiful Glassmorphic cards */}
          <div className="lg:col-span-8 w-full" id="features-right-column">
            <div className="flex space-x-5 overflow-x-auto pb-8 pt-1 scrollbar-thin scrollbar-thumb-white/15 scrollbar-track-transparent snap-x snap-mandatory">
              
              {mockupCards.map((card) => {
                const isSwiped = swipedCardId === card.id;
                return (
                  <div 
                    key={card.id} 
                    className="snap-start shrink-0 w-[280px] sm:w-[310px] h-[360px] relative overflow-hidden rounded-none border border-white/10 bg-[#0E111C]/85 backdrop-blur-md hover:border-blue-500/50 hover:bg-[#121626]/90 transition-all duration-300 shadow-xl flex flex-col justify-between p-6 cursor-pointer group"
                    onClick={() => setActiveDeepDiveId(card.id)}
                  >
                    {/* Glowing effect inside */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-all" />

                    {/* Top Content */}
                    <div className="space-y-4">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-none bg-white/[0.04] border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                        {card.icon}
                      </div>

                      <div className="space-y-2">
                        <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-slate-400 block">
                          // {card.tag}
                        </span>
                        <h3 className="text-base font-extrabold text-white leading-snug uppercase tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-350 leading-relaxed font-sans line-clamp-4">
                          {card.desc}
                        </p>
                      </div>
                    </div>

                    {/* Footer cue */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#00D4FF] transition-colors">
                      <span>Full Specifications</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Deepdive Specifications Sidebar Drawer */}
      <AnimatePresence>
        {activeDeepDiveId && activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-end" id="features-overlay-backdrop">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDeepDiveId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />

            {/* Content Card Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 bottom-0 right-0 w-full max-w-xl bg-[#090C16] text-white shadow-2xl flex flex-col justify-between p-8 z-10 border-l border-white/10 rounded-none font-sans"
              id="features-deepdive-drawer"
            >
              <div className="space-y-6 overflow-y-auto pr-2 max-h-[80vh] scrollbar-thin scrollbar-thumb-white/10">
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 bg-blue-950/80 text-blue-400 flex items-center justify-center border border-blue-900 leading-none shadow-sm">
                      {activeItem.icon}
                    </div>
                    <span className="text-[10px] font-extrabold font-mono tracking-widest uppercase text-blue-400">
                      TECHNOLOGY SPECIFICATION
                    </span>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setActiveDeepDiveId(null)}
                    className="p-1.5 hover:bg-white/5 rounded-none text-slate-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-left">
                  <h3 className="font-sans text-2xl md:text-3xl font-black uppercase text-white leading-tight tracking-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-[11px] font-extrabold text-blue-400 bg-blue-950/65 border border-blue-900 rounded-none px-4 py-3 leading-relaxed">
                    💡 {activeItem.desc}
                  </p>
                  
                  {/* Detailed Specs Block */}
                  <div className="text-xs text-slate-350 leading-relaxed space-y-4 font-normal mt-4 border-t border-white/5 pt-4">
                    {activeItem.details ? (
                      activeItem.details.split('\n\n').map((para, i) => (
                        <p key={i}>{para}</p>
                      ))
                    ) : (
                      <p>Full active mechanical interfaces utilize real-time neural mapping patterns for sub-zero collision preventions and telemetry analysis.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer and certification signals */}
              <div className="border-t border-white/5 pt-6 mt-6 text-left space-y-4">
                <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">
                  <span>🛡️ SECURITY PROTOCOL</span>
                  <span>•</span>
                  <span>100% PIPEDA SAFE / ISO 26262 COMPLIANT</span>
                </div>
                <button
                  onClick={() => setActiveDeepDiveId(null)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all cursor-pointer shadow-lg shadow-blue-600/10"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
