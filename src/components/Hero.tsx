/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Star, MapPin, Shield, Snowflake, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

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
                className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-800 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-black/10"
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

          {/* Right Column - Premium Hardware Interactive Modeling */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[500px]" id="hero-hardware-modeling">
            
            {/* Background absolute graphic elements */}
            <div className="absolute inset-0 bg-white border border-gray-200 overflow-hidden shadow-xl flex flex-col justify-between p-6 z-0" />

            <div className="relative z-10 w-full h-full flex flex-col space-y-6 items-center select-none py-4">
              
              {/* Simulated Smart Phone Interface */}
              <div className="w-[280px] bg-white rounded-[24px] border-[6px] border-slate-900 shadow-2xl overflow-hidden relative transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-[1.02]">
                {/* Speaker pill top */}
                <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 flex justify-center items-center rounded-b-xl z-20">
                  <div className="w-10 h-1 bg-slate-700 rounded-full" />
                </div>

                <div className="pt-6 pb-4 px-4 space-y-4">
                  {/* Status header */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>ASTRA-AI v1.4</span>
                    </span>
                    <span>100% SECURE ({language === 'en' ? 'EN' : 'FR'})</span>
                  </div>

                  {/* Radial Vehicle Health */}
                  <div className="bg-slate-50 rounded-none p-3.5 border border-gray-200 flex flex-col items-center space-y-2.5 text-center relative overflow-hidden group">
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
                      {language === 'en' ? "Vehicle Health Score" : "Indice d'état de santé"}
                    </p>
                    
                    {/* Ring score chart */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#E2E8F0" strokeWidth="6" fill="transparent" />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#2563EB"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray="251"
                          strokeDashoffset="5"
                          strokeLinecap="square"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-xl font-black text-slate-900">98%</span>
                        <span className="text-[8px] font-bold text-emerald-600 tracking-widest uppercase">
                          {language === 'en' ? "Excellent" : "Optimal"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Battery predictive health card */}
                  <div className="p-3.5 bg-amber-50 rounded-none border border-amber-200/70 relative overflow-hidden flex flex-col text-left">
                    <div className="flex items-center justify-between text-[9px] font-black text-amber-900 mb-1 tracking-wider uppercase">
                      <span className="flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                        <span>{language === 'en' ? "PREDICTIVE ANOMALY" : "ANOMALIE PRÉDICTIVE"}</span>
                      </span>
                      <span className="text-amber-700 font-mono">14 {language === 'en' ? 'Days' : 'Jours'}</span>
                    </div>
                    <p className="text-xs font-bold text-amber-900 leading-tight">
                      {language === 'en' ? "Cold-Start Battery Wear Detected" : "Usure de batterie au démarrage froid"}
                    </p>
                    <p className="text-[9px] text-amber-705 text-amber-805 text-amber-700 font-medium leading-normal mt-1">
                      {language === 'en' ? "Alternator waveforms show cell stress. Replace battery before freezing depths." : "Tension faible par grand froid détectée. Prevenir la décharge."}
                    </p>
                  </div>

                  {/* Road Safety Card */}
                  <div className="p-3.5 bg-blue-900 text-white rounded-none border border-blue-800 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[8.5px] text-blue-300 font-bold uppercase tracking-widest">
                        {language === 'en' ? "Road Intelligence" : "Sécurité de Route"}
                      </p>
                      <p className="text-xs font-black leading-none mt-1 uppercase tracking-wide">
                        {language === 'en' ? "Black Ice Warning" : "Alerte de Verglas"}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 text-[8px] bg-blue-500 text-white rounded-none font-mono font-bold tracking-wider">
                      {language === 'en' ? "ACTIVE" : "ACTIF"}
                    </span>
                  </div>

                </div>
              </div>

              {/* High-End Vector Simulated Camera Hardware Unit */}
              <div className="absolute bottom-8 right-4 w-[210px] bg-slate-950 text-white rounded-none p-4.5 shadow-2xl border border-slate-800 transform rotate-3 hover:translate-x-3 hover:scale-105 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-blue-400 font-bold">
                    <span>ASTRA DUAL-OBSERVER</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  </div>
                  
                  {/* Outer lens graphic circle */}
                  <div className="h-16 w-full rounded-none bg-black flex items-center justify-center relative overflow-hidden border border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center relative">
                      <div className="w-6 h-6 rounded-full bg-neutral-950 border-2 border-blue-500/80 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      </div>
                    </div>
                    {/* Laser guidance status light */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                  </div>

                  {/* Metadata display board */}
                  <div className="p-2.5 bg-neutral-950 rounded-none border border-slate-850 border-slate-900 space-y-1 text-left">
                    <div className="flex justify-between text-[8px] font-mono text-gray-500 font-bold">
                      <span>{language === 'en' ? "LENS TEMP" : "TEMP OPTIQUE"}</span>
                      <span className="text-blue-400">+12°C ({language === 'en' ? "HEATER ON" : "ACTIF"})</span>
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-gray-500 font-bold">
                      <span>{language === 'en' ? "COMPUTATION" : "CHARGE NPU"}</span>
                      <span className="text-emerald-500">22% EDGE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Smart OBD-II Dongle physical representation mock */}
              <div className="absolute top-12 left-2 w-[110px] bg-slate-950 text-white rounded-none p-3 shadow-xl border border-slate-800 transform -rotate-12 hover:rotate-0 transition-all duration-300">
                <div className="space-y-1.5 text-center font-mono">
                  <p className="text-[8px] tracking-widest text-slate-500 font-bold">OBD-II SECURE</p>
                  <div className="h-1 py-1 flex items-center justify-center space-x-1">
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                    <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                    <span className="w-1 h-1 bg-amber-500 rounded-full" />
                  </div>
                  <div className="pt-1.5 border-t border-slate-900">
                    <p className="text-[7.5px] text-emerald-400 font-bold">CANBUS SYNCED</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
