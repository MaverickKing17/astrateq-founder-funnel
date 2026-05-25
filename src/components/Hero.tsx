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
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Abstract radial ambient glow backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70rem] h-[35rem] premium-gradient pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left" id="hero-left-content">
            
            {/* Batch & Capability Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold font-mono tracking-wider text-green-600 bg-green-50 border border-green-200 rounded-full animate-pulse-slow">
                ⚡ {t.hero.batch}
              </span>
              <span className="px-3 py-1 text-xs font-bold font-mono tracking-wider text-[#1A1A2E] bg-cyan-50 border border-cyan-200 rounded-full flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
                <span>{t.hero.badge}</span>
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A2E] leading-none">
              {language === 'en' ? (
                <>
                  Drive Safer.<br />
                  Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-blue-600">Smarter.</span>
                </>
              ) : (
                <>
                  Conduire plus sûr.<br />
                  Conduire plus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-blue-600">intelligent.</span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>

            {/* Three Pillar Micro-Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2" id="hero-feature-pillars">
              <div className="flex items-center space-x-2 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                <Snowflake className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#1A1A2E] leading-none">-40°C to +85°C</p>
                  <p className="text-[10px] text-gray-500 font-medium">All-Weather Active</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                <Shield className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#1A1A2E] leading-none">PIPEDA Compliant</p>
                  <p className="text-[10px] text-gray-500 font-medium">100% Canadian Data</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 border border-gray-100 rounded-xl">
                <Star className="w-5 h-5 text-[#00D4FF] shrink-0" />
                <div className="text-left">
                  <p className="text-xs font-extrabold text-[#1A1A2E] leading-none">94.3% Accuracy</p>
                  <p className="text-[10px] text-gray-500 font-medium">Auto-Diagnostics</p>
                </div>
              </div>
            </div>

            {/* Dynamic Scarcity & Progress Tracker */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-3" id="scarcity-meter">
              <div className="flex flex-wrap items-center justify-between text-xs font-bold text-[#1A1A2E]">
                <div className="flex items-center space-x-1">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>{t.hero.metrics.spots} {t.hero.metrics.spotsText}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-500 font-medium">
                  <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-[#00D4FF]" /> {t.hero.metrics.shippingText}</span>
                  <span className="flex items-center"><Star className="w-3.5 h-3.5 mr-1 text-amber-500 fill-current" /> {t.hero.metrics.familiesText}</span>
                </div>
              </div>
              {/* Sleek animated bar representing limited slots */}
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '98.8%' }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-blue-600 to-[#00D4FF] rounded-full"
                />
              </div>
            </div>

            {/* CTA Layer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1" id="hero-actions">
              <button
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#1A1A2E] hover:bg-[#00D4FF] hover:text-[#1A1A2E] shadow-xl hover:shadow-[#00D4FF]/20 hover:scale-[1.02] transform transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
              </button>
              
              <button
                onClick={() => onScrollToSection('features')}
                className="px-8 py-4 rounded-full font-bold text-sm text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Refund Trust Microcopy */}
            <p className="text-xs text-gray-400 text-left pl-2">
              🔒 {t.hero.trustMicrocopy}
            </p>

            {/* Canadian Flag/Culture Marker */}
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-100">
              <span className="text-sm">🍁</span>
              <span className="text-xs font-bold text-[#4B5563] uppercase tracking-wider">
                {language === 'en' ? "Proudly Canadian • Engineered for Canadian driving conditions" : "Fierté Canadienne • Conçu pour l'hiver canadien"}
              </span>
            </div>

          </div>

          {/* Right Column - Premium Hardware Interactive Modeling */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[500px]" id="hero-hardware-modeling">
            
            {/* Background absolute graphic elements */}
            <div className="absolute inset-0 bg-[#F8F9FA] rounded-3xl border border-gray-100 overflow-hidden shadow-2xl flex flex-col justify-between p-6 z-0" />

            <div className="relative z-10 w-full h-full flex flex-col space-y-6 items-center select-none py-4">
              
              {/* Simulated Smart Phone Interface */}
              <div className="w-[280px] bg-white rounded-[32px] border-[6px] border-[#1A1A2E] shadow-xl overflow-hidden relative transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                {/* Speaker pill top */}
                <div className="absolute top-0 inset-x-0 h-4 bg-[#1A1A2E] flex justify-center items-center rounded-b-xl z-20">
                  <div className="w-10 h-1 bg-gray-600 rounded-full" />
                </div>

                <div className="pt-6 pb-4 px-4 space-y-4">
                  {/* Status header */}
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-400">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span>ASTRA-AI v1.4</span>
                    </span>
                    <span>100% SECURE ({language === 'en' ? 'EN' : 'FR'})</span>
                  </div>

                  {/* Radial Vehicle Health */}
                  <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-col items-center space-y-2 text-center relative overflow-hidden group">
                    <p className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
                      {language === 'en' ? "Vehicle Health Score" : "Indice d'état de santé"}
                    </p>
                    
                    {/* Ring score chart */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="48" cy="48" r="40" stroke="#E5E7EB" strokeWidth="6" fill="transparent" />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="#00D4FF"
                          strokeWidth="8"
                          fill="transparent"
                          strokeDasharray="251"
                          strokeDashoffset="5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-xl font-black text-[#1A1A2E]">98%</span>
                        <span className="text-[9px] font-bold text-green-600 tracking-wide uppercase">
                          {language === 'en' ? "Excellent" : "Optimal"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Battery predictive health card */}
                  <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200/60 relative overflow-hidden flex flex-col text-left">
                    <div className="flex items-center justify-between text-[10px] font-extrabold text-[#1A1A2E] mb-1">
                      <span className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                        <span>{language === 'en' ? "PREDICTIVE ANOMALY" : "ANOMALIE PRÉDICTIVE"}</span>
                      </span>
                      <span className="text-amber-700 font-mono">14 {language === 'en' ? 'Days' : 'Jours'}</span>
                    </div>
                    <p className="text-xs font-bold text-amber-900 leading-tight">
                      {language === 'en' ? "Cold-Start Battery Wear Detected" : "Usure de batterie au démarrage froid"}
                    </p>
                    <p className="text-[9px] text-amber-700 font-medium leading-normal mt-0.5">
                      {language === 'en' ? "Alternator waveforms show cell stress. Replace battery before freezing depths." : "Tension faible par grand froid détectée. Prevenir la décharge."}
                    </p>
                  </div>

                  {/* Road Safety Card */}
                  <div className="p-3 bg-blue-900 text-white rounded-2xl border border-blue-800 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[9px] text-blue-300 font-bold uppercase tracking-wider">
                        {language === 'en' ? "Road Intelligence" : "Sécurité de Route"}
                      </p>
                      <p className="text-xs font-extrabold leading-none mt-0.5">
                        {language === 'en' ? "Black Ice Warning" : "Alerte de Verglas"}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 text-[8px] bg-[#00D4FF] text-[#1A1A2E] rounded font-mono font-bold">
                      {language === 'en' ? "ACTIVE" : "ACTIF"}
                    </span>
                  </div>

                </div>
              </div>

              {/* High-End Vector Simulated Camera Hardware Unit */}
              <div className="absolute bottom-8 right-4 w-[210px] bg-[#1Asss] bg-slate-900 text-white rounded-2xl p-4 shadow-2xl border border-slate-700 transform rotate-3 hover:translate-x-3 hover:scale-105 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-[#00D4FF]">
                    <span>ASTRA DUAL-OBSERVER</span>
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  </div>
                  
                  {/* Outer lens graphic circle */}
                  <div className="h-16 w-full rounded-lg bg-black flex items-center justify-center relative overflow-hidden border border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-700 flex items-center justify-center relative">
                      <div className="w-6 h-6 rounded-full bg-neutral-950 border-2 border-cyan-500/80 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                      </div>
                    </div>
                    {/* Laser guidance status light */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#00D4FF] rounded-full animate-ping" />
                  </div>

                  {/* Metadata display board */}
                  <div className="p-2 bg-[#0B0E1B] rounded border border-slate-800 space-y-1 text-left">
                    <div className="flex justify-between text-[8px] font-mono text-gray-400">
                      <span>{language === 'en' ? "LENS TEMP" : "TEMP OPTIQUE"}</span>
                      <span className="text-[#00D4FF]">+12°C ({language === 'en' ? "HEATER ON" : "ACTIF"})</span>
                    </div>
                    <div className="flex justify-between text-[8px] font-mono text-gray-400">
                      <span>{language === 'en' ? "COMPUTATION" : "CHARGE NPU"}</span>
                      <span className="text-green-500">22% EDGE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Smaller Smart OBD-II Dongle physical representation mock */}
              <div className="absolute top-12 left-2 w-[110px] bg-neutral-950 text-white rounded-xl p-2.5 shadow-xl border border-neutral-800 transform -rotate-12 hover:rotate-0 transition-all duration-300">
                <div className="space-y-1 text-center font-mono">
                  <p className="text-[8px] tracking-wider text-gray-400">OBD-II SECURE</p>
                  <div className="h-1 py-1 flex items-center justify-center space-x-1">
                    <span className="w-1 h-1 bg-[#00D4FF] rounded-full animate-ping" />
                    <span className="w-1 h-1 bg-green-500 rounded-full" />
                    <span className="w-1 h-1 bg-yellow-500 rounded-full" />
                  </div>
                  <div className="pt-1.5 border-t border-neutral-800">
                    <p className="text-[7px] text-green-400">CANBUS SYNCED</p>
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
