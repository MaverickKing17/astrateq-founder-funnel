/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, Star, MapPin, Shield, Snowflake, Sparkles, Check, ArrowRight, Activity, Wifi, Compass, Lock } from 'lucide-react';
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
      className="relative pt-32 pb-0 bg-[#06080F] overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Decorative snowy mountain atmosphere & radial glow backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[90rem] h-[45rem] bg-radial from-blue-900/15 via-transparent to-transparent blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content - Exact match of the mockup typography */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left" id="hero-left-content">
            
            {/* Enterprise Safety Label */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-1.5 border border-blue-500/30 bg-blue-950/40 px-3.5 py-1.5 rounded-none text-[#00D4FF] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>AI-POWERED AUTOMOTIVE SAFETY</span>
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.05]">
              {language === 'en' ? (
                <>
                  Drive Safer.<br />
                  Drive <span className="text-blue-550 text-[#007DFA]">Smarter.</span>
                </>
              ) : (
                <>
                  Conduire plus sûr.<br />
                  Conduire plus <span className="text-blue-550 text-[#007DFA]">intelligent.</span>
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
              {language === 'en'
                ? "Al-powered predictive diagnostics and computer vision safety systems that protect what matters most. Built for Canadian roads. Designed for extreme conditions. Your safety, powered by intelligence."
                : "Diagnostics prédictifs propulsés par l'IA et systèmes de sécurité par vision par ordinateur installés localement. Conçu pour l'hiver et les routes canadiennes."
              }
            </p>

            {/* Three Pillar Micro-Features (Elegant Glassmorphic Row) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3" id="hero-feature-pillars">
              <div className="flex items-center space-x-3 p-4 bg-white/[0.03] border border-white/10 rounded-none shadow-2xl backdrop-blur-md">
                <Snowflake className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-black text-white leading-none">-40°C to +85°C</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">All-Weather Certified</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/[0.03] border border-white/10 rounded-none shadow-2xl backdrop-blur-md">
                <Shield className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-black text-white leading-none">PIPEDA Compliant</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">100% Canadian Data</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/[0.03] border border-white/10 rounded-none shadow-2xl backdrop-blur-md">
                <Star className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-left">
                  <p className="text-sm font-black text-white leading-none">94.3% Accuracy</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1.5">AI Prediction Engine</p>
                </div>
              </div>
            </div>

            {/* Pre-Order Conversions CTA Layer */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-actions">
              <button
                onClick={() => onScrollToSection('pricing')}
                className="px-8 py-4.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-blue-500/20"
              >
                <span>Pre-Order Now — From $25 CAD</span>
                <span className="text-[11px] font-bold">→</span>
              </button>
              
              <div
                className="px-6 py-4.5 bg-white/[0.04] border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-none flex items-center justify-center space-x-2 backdrop-blur-sm shadow-xl"
              >
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Fully Refundable</span>
              </div>
            </div>

            {/* Canadian Flag/Culture Marker */}
            <div className="flex items-center space-x-2 pt-4 border-t border-white/10 w-full">
              <span className="text-sm">🍁</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Proudly Canadian • Engineered for Canadian Drivers
              </span>
            </div>

          </div>

          {/* Right Column - High-End Dashcam and App Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[460px]" id="hero-hardware-modeling">
            <div className="relative w-full max-w-lg aspect-[5/4] sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-none scale-100 lg:scale-[1.1]">
              {/* High-end composite hardware image */}
              <img 
                src={astraHeroVisual} 
                alt="Astra smart dual-lens dash camera and connected device dashboard view" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Trust/Certifications Strip - Styled strictly as shown in the white banner */}
      <div className="w-full bg-[#FFFFFF] border-y border-slate-200 py-6 md:py-8 z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center items-center justify-center">
          
          <div className="flex flex-col items-center space-y-1.5 md:border-r md:border-slate-100 last:border-0 px-2">
            <div className="flex items-center text-amber-500 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xs">★</span>
              ))}
            </div>
            <p className="text-[11px] font-black font-sans text-slate-900 tracking-tight leading-none uppercase">
              4.8/5 Rating
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              From 127+ Early Members
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] font-black font-sans text-slate-900 tracking-tight leading-none uppercase">
              Canadian Drivers
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              Trusted by 100+ Families
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <span className="text-base mb-0.5">🍁</span>
            <p className="text-[11px] font-black font-sans text-slate-900 tracking-tight leading-none uppercase">
              Transport Canada
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              Recognized Technology
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1 md:border-r md:border-slate-100 last:border-0 px-2">
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-0.5">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] font-black font-sans text-slate-900 tracking-tight leading-none uppercase">
              ISED Certified
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              High-End Electronics
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center space-y-1 px-2">
            <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-0.5">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <p className="text-[11px] font-black font-sans text-slate-900 tracking-tight leading-none uppercase">
              Secure & Private
            </p>
            <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">
              Always Canadian
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}
