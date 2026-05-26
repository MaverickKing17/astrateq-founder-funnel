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

// @ts-ignore
import featuresEngineImg from '../assets/images/features_engine_1779737109085.png';
// @ts-ignore
import featuresCollisionImg from '../assets/images/features_collision_1779737128415.png';
// @ts-ignore
import featuresDriverImg from '../assets/images/features_driver_1779737148030.png';
// @ts-ignore
import featuresWinterImg from '../assets/images/features_winter_1779737164881.png';
// @ts-ignore
import featuresAlertsImg from '../assets/images/features_alerts_1779737182441.png';

interface FeatureGridProps {
  language: Language;
}

export default function FeatureGrid({ language }: FeatureGridProps) {
  const [activeDeepDiveId, setActiveDeepDiveId] = useState<string | null>(null);
  const t = translations[language].features;

  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollWidth > clientWidth) {
        setScrollProgress(scrollLeft / (scrollWidth - clientWidth));
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 345; // Match card width + space gaps
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Aligning exactly with the mockup's 5 cards
  const mockupCards = [
    {
      id: "failure-detection",
      title: language === 'en' ? "Predictive Diagnostics" : "Diagnostics Prédictifs",
      desc: language === 'en' 
        ? "AI analyzes 100+ vehicle sensors to predict issues days or weeks before failure."
        : "L'IA analyse plus de 100 capteurs pour prédire les pannes des jours avant l'incident.",
      icon: <Cpu className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />,
      tag: "OBD-II TELEMETRY",
      image: featuresEngineImg,
      glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.22)]",
      glowBg: "bg-blue-50/40 group-hover:bg-blue-100/60",
      hoverBorder: "hover:border-blue-500/70",
      accentText: "group-hover:text-blue-600",
      iconBgHover: "group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white",
      details: t.items.find(item => item.id === "failure-detection")?.textBlock || ""
    },
    {
      id: "collision-prevention",
      title: language === 'en' ? "Collision Prevention" : "Évitement d'Impact",
      desc: language === 'en'
        ? "Advanced computer vision detects risks and helps you avoid accidents."
        : "La vision par ordinateur modélise les trajectoires et prévient les collisions.",
      icon: <Compass className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" />,
      tag: "NPU VISION",
      image: featuresCollisionImg,
      glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.22)]",
      glowBg: "bg-cyan-50/40 group-hover:bg-cyan-100/60",
      hoverBorder: "hover:border-cyan-500/70",
      accentText: "group-hover:text-cyan-600",
      iconBgHover: "group-hover:bg-cyan-600 group-hover:border-cyan-600 group-hover:text-white",
      details: t.items.find(item => item.id === "driver-coaching")?.textBlock || ""
    },
    {
      id: "driver-monitoring",
      title: language === 'en' ? "Driver Monitoring" : "Vigilance Conducteur",
      desc: language === 'en'
        ? "AI monitors attention & fatigue to keep you alert and your family safe."
        : "L'IA analyse le regard et les signaux de somnolence pour préserver la sécurité.",
      icon: <Eye className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors" />,
      tag: "CABIN AI",
      image: featuresDriverImg,
      glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.22)]",
      glowBg: "bg-emerald-50/40 group-hover:bg-emerald-100/60",
      hoverBorder: "hover:border-emerald-500/70",
      accentText: "group-hover:text-emerald-600",
      iconBgHover: "group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white",
      details: translations[language].features.items[1]?.textBlock || ""
    },
    {
      id: "winter-optimized",
      title: language === 'en' ? "Winter Optimized" : "Optimisé pour l'Hiver",
      desc: language === 'en'
        ? "Built and tested for extreme Canadian winters down to -40°C."
        : "Équipé de lentilles chauffantes infrarouges, optimisé pour la neige et le sel.",
      icon: <Snowflake className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />,
      tag: "SUB-ZERO BUILD",
      image: featuresWinterImg,
      glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.22)]",
      glowBg: "bg-indigo-50/40 group-hover:bg-indigo-100/60",
      hoverBorder: "hover:border-indigo-500/70",
      accentText: "group-hover:text-indigo-600",
      iconBgHover: "group-hover:bg-indigo-600 group-hover:border-indigo-600 group-hover:text-white",
      details: t.items.find(item => item.id === "winter-optimized")?.textBlock || ""
    },
    {
      id: "real-time-alerts",
      title: language === 'en' ? "Real-Time Alerts" : "Alertes Instantanées",
      desc: language === 'en'
        ? "Instant notifications for hazards, maintenance, and road conditions."
        : "Des alertes visuelles et haptiques immédiates en cas de danger critique.",
      icon: <Smartphone className="w-5 h-5 text-amber-600 group-hover:text-white transition-colors" />,
      tag: "SECURE TELEMETRY",
      image: featuresAlertsImg,
      glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.22)]",
      glowBg: "bg-amber-50/40 group-hover:bg-amber-100/60",
      hoverBorder: "hover:border-amber-500/70",
      accentText: "group-hover:text-amber-600",
      iconBgHover: "group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white",
      details: t.items.find(item => item.id === "family-dashboard")?.textBlock || ""
    }
  ];

  const activeItem = mockupCards.find(item => item.id === activeDeepDiveId);

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden flex flex-col justify-center items-center border-b border-slate-200">
      {/* Soft blue glowing backdrop in feature background */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-[60rem] h-[30rem] bg-blue-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Sticky/Standard Frame - Matching Mockup layout */}
          <div className="lg:col-span-4 flex flex-col space-y-6 text-left animate-fade-in" id="features-left-column">
            <span className="text-blue-600 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] w-fit">
              COMPLETE AI SAFETY ECOSYSTEM
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
              Proactive Protection.<br />Powered by AI.
            </h2>
            <p className="text-sm text-slate-600 font-semibold leading-relaxed max-w-sm">
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
                className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group"
              >
                <span>Explore All Features</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Polished grid on desktop (lg:) and touch-scroll on mobile */}
          <div className="lg:col-span-8 w-full min-w-0" id="features-right-column">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-6 space-x-5 lg:space-x-0 overflow-x-auto lg:overflow-x-visible pb-8 pt-1 scrollbar-none snap-x snap-mandatory relative scroll-smooth"
            >
              {mockupCards.map((card) => {
                return (
                  <div 
                    key={card.id} 
                    className="snap-start shrink-0 w-[290px] sm:w-[325px] lg:w-full h-[460px] relative overflow-hidden rounded-none border border-slate-200 bg-white hover:border-blue-500/70 transition-all duration-300 shadow-md flex flex-col justify-between p-6 cursor-pointer group"
                    onClick={() => setActiveDeepDiveId(card.id)}
                  >
                    {/* Dynamic glowing theme effect inside */}
                    <div className={`absolute top-0 right-0 w-28 h-28 rounded-full blur-2xl transition-all ${card.glowBg}`} />

                    {/* Content structure */}
                    <div className="space-y-3.5 relative z-10">
                      {/* Top row with icon & tag */}
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono font-bold tracking-widest uppercase text-slate-500 block">
                          // {card.tag}
                        </span>
                        <div className={`w-9 h-9 rounded-none bg-slate-50 border border-slate-250 flex items-center justify-center transition-all shadow-sm ${card.iconBgHover}`}>
                          {card.icon}
                        </div>
                      </div>

                      <div className="space-y-1.5 leading-snug">
                        <h3 className="text-sm font-extrabold text-slate-900 leading-snug uppercase tracking-wider">
                          {card.title}
                        </h3>
                      </div>

                      {/* Dynamic colorful feature visual illustration */}
                      <div className="w-full h-32 relative overflow-hidden bg-slate-50 border border-slate-200 rounded-none shadow-inner z-10">
                        <img 
                          src={card.image} 
                          alt={card.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-sans line-clamp-3">
                        {card.desc}
                      </p>
                    </div>

                    {/* Footer cue */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-[#4B5563] group-hover:text-blue-600 transition-colors relative z-10">
                      <span>Full Specifications</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Interactive Scroll Progress HUD - Visible only where sliding happens */}
            <div className="mt-4 flex lg:hidden items-center justify-between px-1">
              {/* Left Arrow */}
              <button 
                onClick={() => scroll('left')}
                className="p-2 text-slate-405 hover:text-blue-650 hover:bg-slate-100 rounded-none border border-slate-200 transition-all cursor-pointer bg-white"
                aria-label="Scroll left"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>

              {/* Slider Track with Dynamic visual scroll alignment */}
              <div className="flex-1 mx-4 h-1 bg-slate-200 relative rounded-none overflow-hidden block">
                <div 
                  className="absolute top-0 bottom-0 bg-blue-600 transition-all duration-150 rounded-none"
                  style={{ 
                    width: '30%', 
                    left: `${scrollProgress * 70}%` 
                  }}
                />
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => scroll('right')}
                className="p-2 text-slate-405 hover:text-blue-650 hover:bg-slate-100 rounded-none border border-slate-200 transition-all cursor-pointer bg-white"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
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
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Content Card Side Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 bottom-0 right-0 w-full max-w-xl bg-white text-slate-900 shadow-2xl flex flex-col justify-between p-8 z-10 border-l border-slate-200 rounded-none font-sans"
              id="features-deepdive-drawer"
            >
              <div className="space-y-6 overflow-y-auto pr-2 max-h-[80vh] scrollbar-thin scrollbar-thumb-slate-200">
                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 bg-blue-50 text-blue-650 flex items-center justify-center border border-blue-200 leading-none shadow-sm">
                      {activeItem.icon}
                    </div>
                    <span className="text-[10px] font-extrabold font-mono tracking-widest uppercase text-blue-650">
                      TECHNOLOGY SPECIFICATION
                    </span>
                  </div>
                  {/* Close button */}
                  <button
                    onClick={() => setActiveDeepDiveId(null)}
                    className="p-1.5 hover:bg-slate-100 rounded-none text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 text-left">
                  <h3 className="font-sans text-2xl md:text-3xl font-black uppercase text-slate-900 leading-tight tracking-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-[11px] font-extrabold text-blue-700 bg-blue-50 border border-blue-100 rounded-none px-4 py-3 leading-relaxed">
                    💡 {activeItem.desc}
                  </p>
                  
                  {/* Detailed Specs Block */}
                  <div className="text-xs text-slate-600 leading-relaxed space-y-4 font-normal mt-4 border-t border-slate-100 pt-4">
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
              <div className="border-t border-slate-100 pt-6 mt-6 text-left space-y-4">
                <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest font-mono">
                  <span>🛡️ SECURITY PROTOCOL</span>
                  <span>•</span>
                  <span>100% PIPEDA SAFE / ISO 26262 COMPLIANT</span>
                </div>
                <button
                  onClick={() => setActiveDeepDiveId(null)}
                  className="w-full py-4 bg-blue-650 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all cursor-pointer shadow-lg shadow-blue-600/10"
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
