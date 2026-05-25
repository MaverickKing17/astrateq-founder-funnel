/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Star, MapPin, Shield, Snowflake, Sparkles, Check, ArrowRight, Activity, Wifi, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
// @ts-ignore
import astraHeroVisual from '../assets/images/astra_hero_visual_1779732726824.png';

interface HeroProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ language, onScrollToSection }: HeroProps) {
  const t = translations[language];

  return (
    <header
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-slate-50 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Abstract radial ambient glow backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70rem] h-[35rem] premium-gradient pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left" id="hero-left-content">
            
            {/* Batch & Capability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-1 border border-emerald-200 bg-emerald-50 px-3 py-1 rounded-none text-emerald-800 font-mono text-[10px] font-bold uppercase tracking-widest animate-pulse-slow">
                ⚡ <span>{t.hero.batch}</span>
              </span>
              <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3 py-1 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-blue-600" />
                <span>{t.hero.badge}</span>
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 leading-none">
              {language === 'en' ? (
                <>
                  Drive Safer.<br />
                  Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-650 from-blue-600 to-indigo-750 to-indigo-600">Smarter.</span>
                </>
              ) : (
                <>
                  Conduire plus sûr.<br />
                  Conduire plus <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">intelligent.</span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-medium">
              {t.hero.description}
            </p>

            {/* Three Pillar Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2" id="hero-feature-pillars">
              <div className="flex items-center space-x-2.5 p-3.5 bg-white border border-gray-200 rounded-none shadow-xs">
                <Snowflake className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-black text-slate-950 leading-none">-40°C to +85°C</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-1">All-Weather Active</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 p-3.5 bg-white border border-gray-200 rounded-none shadow-xs">
                <Shield className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-black text-slate-950 leading-none">PIPEDA Compliant</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-1">100% Canadian Data</p>
                </div>
              </div>
              <div className="flex items-center space-x-2.5 p-3.5 bg-white border border-gray-200 rounded-none shadow-xs">
                <Star className="w-5 h-5 text-blue-600 shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-black text-slate-950 leading-none">94.3% Accuracy</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-1">Auto-Diagnostics</p>
                </div>
              </div>
            </div>

            {/* Dynamic Scarcity & Progress Tracker */}
            <div className="p-5 bg-white border border-gray-200 rounded-none shadow-sm space-y-3.5 animate-none" id="scarcity-meter">
              <div className="flex flex-wrap items-center justify-between text-xs font-bold text-slate-900">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="uppercase tracking-wider font-extrabold text-[11px]">{t.hero.metrics.spots} {t.hero.metrics.spotsText}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-500 font-bold text-[10px] uppercase tracking-wider">
                  <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-blue-600" /> {t.hero.metrics.shippingText}</span>
                  <span className="flex items-center"><Star className="w-3.5 h-3.5 mr-1 text-amber-500 fill-current" /> {t.hero.metrics.familiesText}</span>
                </div>
              </div>
              {/* Sleek animated bar representing limited slots */}
              <div className="h-1.5 w-full bg-gray-100 rounded-none overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '98.8%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-blue-600 rounded-none"
                />
              </div>
            </div>

            {/* CTA Layer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1" id="hero-actions">
              <button
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-blue-500 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-blue-600/10"
              >
                <span>{t.hero.ctaPrimary}</span>
              </button>
              
              <button
                onClick={() => onScrollToSection('features')}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-250 border-slate-350 border-gray-200 hover:border-slate-800 text-xs font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Refund Trust Microcopy */}
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left pl-1">
              🔑 {t.hero.trustMicrocopy}
            </p>

            {/* Canadian Flag/Culture Marker */}
            <div className="flex items-center space-x-2 pt-3 border-t border-gray-200">
              <span className="text-sm">🍁</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                {language === 'en' ? "Proudly Canadian • Engineered for Canadian driving conditions" : "Fierté Canadienne • Conçu pour l'hiver canadien"}
              </span>
            </div>

          </div>

          {/* Right Column - Premium Hardware Presentation with High-Fidelity HUD overlay */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[500px]" id="hero-hardware-modeling">
            
            {/* Core aesthetic container: photography with crisp borders/shadows */}
            <div className="relative w-full max-w-md h-[480px] bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden group">
              
              {/* Product Photography */}
              <img 
                src={astraHeroVisual} 
                alt="Astra dynamic smart driver assistant camera mounted on windshield" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-104"
              />
              
              {/* Soft dark corner vignetting & blueprint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-neutral-950/40 pointer-events-none" />

              {/* Status Header overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[8px] font-mono font-bold tracking-widest text-white/95">
                <span className="flex items-center space-x-1.5 bg-neutral-950/90 px-2 py-1 border border-neutral-800 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ASTRA v1.4 LIVE</span>
                </span>
                <span className="bg-neutral-950/90 px-2 py-1 border border-neutral-800 backdrop-blur-md">
                  SUB-ZERO OPTICAL HEAT: ON
                </span>
              </div>

              {/* Central crosshair representing computer vision calibration overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <div className="w-8 h-8 border border-blue-500/50 rounded-full flex items-center justify-center">
                  <div className="w-1 bg-blue-500 rounded-full" />
                </div>
                <div className="absolute w-20 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                <div className="absolute h-20 w-px bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />
              </div>

              {/* Real-time telemetry glassmorphism overlay card at the bottom */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-neutral-950/90 border border-white/10 backdrop-blur-lg flex flex-col space-y-3 shadow-lg text-left">
                
                {/* Active telemetry markers */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <div>
                      <p className="text-[9px] font-mono font-black text-white uppercase tracking-wider">
                        {language === 'en' ? "VEHICLE CANBUS STATUS" : "STATUT LIAISON CANBUS"}
                      </p>
                      <p className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-widest">
                        {language === 'en' ? "CALIBRATED & SECURE" : "CONFIGURÉ & SÉCURISÉ"}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-white/5 border border-white/10 px-2 py-0.5">
                    <Wifi className="w-3 h-3 text-white" />
                    <span className="text-[7.5px] font-mono text-white/95">ASTRA-LINK</span>
                  </div>
                </div>

                {/* Driving conditions intelligence */}
                <div className="grid grid-cols-2 gap-2 text-[8px] font-mono">
                  <div className="flex flex-col justify-center space-y-0.5 bg-white/5 px-2.5 py-1.5 border border-white/5">
                    <span className="text-white/40">{language === 'en' ? "ROAD LENS TEMP" : "TEMPÉRATURE OPTIQUE"}</span>
                    <span className="font-extrabold text-blue-400">+12.4°C [HEATER ACTIVE]</span>
                  </div>
                  <div className="flex flex-col justify-center space-y-0.5 bg-white/5 px-2.5 py-1.5 border border-white/5">
                    <span className="text-white/40">{language === 'en' ? "NPU RECOGNITION" : "RECONNAISSANCE NPU"}</span>
                    <span className="font-extrabold text-emerald-400">99.2% ACCURACY</span>
                  </div>
                </div>

                <p className="text-[9.5px] text-white/70 font-sans tracking-wide leading-relaxed">
                  {language === 'en' 
                    ? "Continuous local edge processing protects battery & maps critical road wear in real-time." 
                    : "L'analyse locale continue préserve la batterie et cartographie l'usure de la route en temps réel."}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
