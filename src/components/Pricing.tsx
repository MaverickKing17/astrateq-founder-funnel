/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Shield, Award, CreditCard, Lock, Sparkles, X, Heart, HelpCircle, FileText } from 'lucide-react';
import { Language, Tier } from '../types';
import { translations } from '../data/translations';

interface PricingProps {
  language: Language;
  onSetSelectedTier: (tier: Tier) => void;
  onOpenCheckout: (tier: Tier) => void;
}

export default function Pricing({ language, onSetSelectedTier, onOpenCheckout }: PricingProps) {
  const t = translations[language];
  const p = t.pricing;

  const handleCardClick = (tier: Tier) => {
    onSetSelectedTier(tier);
    onOpenCheckout(tier);
  };

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center border-b border-gray-200">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[40rem] premium-gradient pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-12">
        
        {/* Headers */}
        <div className="max-w-3xl mx-auto space-y-4" id="pricing-headers">
          <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
            💼 <span>{p.trustTitle}</span>
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            {p.title}
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-medium">
            {p.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch max-w-6xl mx-auto" id="pricing-cards-grid">
          
          {/* Card 1 - Observer (Early Bird) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-slate-50/60 rounded-none border border-gray-200 hover:border-slate-400 shadow-sm transition-all relative z-10 hover:shadow-md text-left group">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                  {language === 'en' ? 'Tier 01 // ENTRY' : 'Palier 01 // ACCÈS'}
                </span>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  {p.tiers.earlybird.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-medium leading-relaxed">
                  {p.tiers.earlybird.summary}
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline space-x-1 border-t border-b border-gray-200 py-4">
                <span className="text-4xl font-black font-mono text-slate-950">$25</span>
                <span className="text-xs font-bold text-slate-500">CAD</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-2">/ {p.tiers.earlybird.period}</span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3">
                {p.tiers.earlybird.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-600 font-medium">
                    <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('earlybird')}
                className="w-full py-4 bg-white border border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-slate-905 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-none transition-all text-center flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{p.ctaFormat.replace('{tier}', p.tiers.earlybird.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-3">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>Stripe Secured • Fully Refundable</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Guardian (Founding Member) - Scaled 105% & Premium Cyan Focus Ring */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-white rounded-none border-2 border-blue-600 shadow-xl hover:shadow-2xl transition-all relative z-20 lg:-my-3 scale-100 lg:scale-[1.04] text-left group">
            {/* Pulsing Popular Accent Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-[9px] font-mono font-black tracking-widest uppercase rounded-none shadow-md z-30 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-white" />
              <span>{p.tiers.founding.badge}</span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold font-mono tracking-widest text-blue-600 uppercase flex items-center space-x-1">
                  <span>{language === 'en' ? 'Tier 02 // RECOMMENDED' : 'Palier 02 // SÉCURITÉ COMPLÈTE'}</span>
                </span>
                <h3 className="font-sans text-2xl font-black text-slate-905 text-slate-900 uppercase tracking-tight mt-1">
                  {p.tiers.founding.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-medium leading-relaxed">
                  {p.tiers.founding.summary}
                </p>
              </div>

              {/* Price Tag with savings */}
              <div className="flex flex-col border-t border-b border-gray-200 py-4 relative">
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-black font-mono text-slate-950">$85</span>
                  <span className="text-xs font-bold text-slate-500">CAD</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-2">/ {p.tiers.founding.period}</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
                  <span className="px-2 py-0.5 text-[9px] font-bold text-emerald-805 text-emerald-800 bg-emerald-50 rounded-none border border-emerald-250 border-emerald-200">
                    {language === 'en' ? 'SAVE $200' : 'ÉCONOMISEZ 200$'}
                  </span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3">
                {p.tiers.founding.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-700 font-semibold">
                    <Check className="w-4.5 h-4.5 text-blue-605 text-blue-600 mr-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('founding')}
                className="w-full py-4.5 bg-black hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-all text-center flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-black/10"
              >
                <span>{p.ctaFormat.replace('{tier}', p.tiers.founding.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-emerald-705 text-emerald-700 font-extrabold uppercase tracking-widest mt-3">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Recommended • Cancel Instantly</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Guardian Pro (Premium Elite) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-slate-50/60 rounded-none border border-gray-200 hover:border-slate-400 shadow-sm transition-all relative z-10 hover:shadow-md text-left group">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">
                  {language === 'en' ? 'Tier 03 // MAXIMUM ELITE' : 'Palier 03 // PROTECTION MAXIMALE'}
                </span>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  {p.tiers.guardian.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-medium leading-relaxed">
                  {p.tiers.guardian.summary}
                </p>
              </div>

              {/* Price Tag with savings */}
              <div className="flex flex-col border-t border-b border-gray-200 py-4 relative">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-black font-mono text-slate-950">$150</span>
                  <span className="text-xs font-bold text-slate-500">CAD</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-2">/ {p.tiers.guardian.period}</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
                  <span className="px-2 py-0.5 text-[9px] font-bold text-emerald-805 text-emerald-800 bg-emerald-50 rounded-none border border-emerald-250 border-emerald-200">
                    {language === 'en' ? 'SAVE $400' : 'ÉCONOMISEZ 400$'}
                  </span>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3">
                {p.tiers.guardian.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-600 font-medium">
                    <Check className="w-4 h-4 text-blue-600 mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('guardian')}
                className="w-full py-4 bg-white border border-slate-205 border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-slate-905 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-none transition-all text-center flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{p.ctaFormat.replace('{tier}', p.tiers.guardian.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-3">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>Stripe Secured • Fully Refundable</span>
              </div>
            </div>
          </div>

        </div>

        {/* Centered Trust Row Beneath Pricing Cards */}
        <div className="p-6 bg-slate-50 rounded-none border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around text-center gap-4 py-8" id="pricing-trust-row">
          {p.trustList.map((item, id) => (
            <div key={id} className="flex items-center justify-center space-x-2.5 px-6 w-full text-left">
              <Shield className="w-4.5 h-4.5 text-blue-600 shrink-0" />
              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
