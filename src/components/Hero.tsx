/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Cpu, Clock, PlayCircle, ShieldCheck, Star } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
// @ts-ignore
import astraHeroVisual from '../assets/images/standard_kit_1779820522208.png';

interface HeroProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ language, onScrollToSection }: HeroProps) {
  const t = translations[language];

  return (
    <header
      id="hero"
      className="relative pt-32 pb-0 bg-white overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Light elegant radial glow backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90rem] h-[45rem] bg-radial from-blue-100/40 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content - Exact match of the mockup typography */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left" id="hero-left-content">
            
            {/* Enterprise Safety Label */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                {t.hero.batch}
              </span>
            </div>

            {/* Primary Headline in DM Serif Display */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1A1A2E] leading-[1.1]">
              {language === 'en' ? "Quiet protection for the drivers you love most." : "Une protection silencieuse pour les conducteurs que vous aimez le plus."}
            </h1>

            {/* Supporting Copy with bold elements */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-sans font-normal">
              {language === 'en' ? (
                <>
                  Know something is wrong before the roadside emergency happens. ASTRA-AI combines <strong className="font-black text-[#1A1A2E]">predictive diagnostics</strong> and computer vision safety alerts to help prevent breakdowns, collisions, and winter emergencies before they occur.
                </>
              ) : (
                <>
                  Sachez qu'un problème survient avant l'urgence routière. ASTRA-AI combine <strong className="font-black text-[#1A1A2E]">diagnostics prédictifs</strong> et alertes de sécurité par vision par ordinateur pour prévenir pannes, collisions et urgences hivernales.
                </>
              )}
            </p>

            {/* Three Operational Signals */}
            <div className="flex flex-col space-y-3 pt-2" id="hero-operational-signals">
              <div className="flex items-center space-x-3 text-sm text-[#4B5563]">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-600" />
                </div>
                <span className="font-semibold text-slate-700">
                  {language === 'en' ? "Tested across Canadian winter conditions" : "Testé dans les conditions hivernales canadiennes"}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#4B5563]">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <Cpu className="w-4 h-4 text-slate-600" />
                </div>
                <span className="font-semibold text-slate-700">
                  {language === 'en' ? "Built for 2008+ Canadian vehicles" : "Conçu pour les véhicules canadiens de 2008 et plus"}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-[#4B5563]">
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
                  <Clock className="w-4 h-4 text-[#00D4FF]" />
                </div>
                <span className="font-semibold text-slate-700">
                  {language === 'en' ? "247 Founding Reservations Remaining" : "247 réservations fondatrices restantes"}
                </span>
              </div>
            </div>

            {/* Pre-Order Conversions CTA Layer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-actions">
              <button
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-4 bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#1A1A2E] text-xs font-black uppercase tracking-widest rounded-none transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-sm border border-[#00D4FF]"
              >
                <span>{language === 'en' ? "Lock In My Founding Price" : "Bloquer mon prix de fondateur"}</span>
                <span className="text-[11px] font-bold">→</span>
              </button>
              
              <button
                onClick={() => onScrollToSection('how-it-works')}
                className="px-6 py-4 bg-transparent border border-slate-250 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-widest rounded-none flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <PlayCircle className="w-4 h-4 text-[#00D4FF]" />
                <span>{language === 'en' ? "See How It Works" : "Voir le fonctionnement"}</span>
              </button>
            </div>

            {/* Trust Microcopy */}
            <p className="text-[11px] text-slate-400 font-bold" id="hero-trust-microcopy">
              {t.hero.trustMicrocopy}
            </p>

          </div>

          {/* Right Column - Beautiful Premium Hardware Render */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative" id="hero-hardware-modeling">
            <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-none scale-100 lg:scale-[1.1] flex items-center justify-center">
              <img 
                src={astraHeroVisual} 
                alt="Astra smart dual-lens dash camera and connected device dashboard view" 
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Certifications row - premium white banner layout */}
      <div className="w-full bg-[#FFFFFF] border-y border-slate-100 py-6 md:py-8 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center items-center justify-center">
          
          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <div className="flex items-center text-amber-500 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xs">★</span>
              ))}
            </div>
            <p className="text-[11px] font-black text-slate-900 tracking-tight leading-none uppercase">
              {language === 'en' ? "4.8/5 Rating" : "Note de 4.8/5"}
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              {language === 'en' ? "From 127+ Early Members" : "Par plus de 127 membres"}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] font-black text-slate-900 tracking-tight leading-none uppercase">
              {language === 'en' ? "Canadian Drivers" : "Conducteurs canadiens"}
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              {language === 'en' ? "Trusted by Canadian Families" : "Approuvé par les familles d'ici"}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <span className="text-xs">🍁</span>
            <p className="text-[11px] font-black text-slate-900 tracking-tight leading-none uppercase">
              {language === 'en' ? "Transport Canada" : "Transports Canada"}
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              {language === 'en' ? "Recognized Technology" : "Technologie reconnue"}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] font-black text-slate-900 tracking-tight leading-none uppercase">
              {language === 'en' ? "ISED Certified" : "Certifié ISDE"}
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              {language === 'en' ? "High-End Electronics" : "Équipement haut de gamme"}
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center space-y-1 px-2">
            <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] font-black text-slate-900 tracking-tight leading-none uppercase">
              {language === 'en' ? "Secure & Private" : "Sécurisé & Privé"}
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              {language === 'en' ? "Always Canadian" : "Hébergé au Canada"}
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}
