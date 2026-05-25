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
    <section id="pricing" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center">
      {/* Background glow node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[40rem] premium-gradient pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-12">
        
        {/* Headers */}
        <div className="max-w-3xl mx-auto space-y-4" id="pricing-headers">
          <span className="px-3 py-1 text-xs font-extrabold font-mono uppercase tracking-widest text-[#00D4FF] bg-cyan-50 rounded-full">
            💼 {p.trustTitle}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A2E]">
            {p.title}
          </h2>
          <p className="text-base md:text-lg text-[#4B5563]">
            {p.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-stretch max-w-6xl mx-auto" id="pricing-cards-grid">
          
          {/* Card 1 - Observer (Early Bird) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-gray-50/60 rounded-3xl border border-gray-100 hover:border-gray-200 shadow-sm transition-all relative z-10 hover:shadow-md text-left group">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold font-mono tracking-widest text-gray-400 uppercase">
                  {language === 'en' ? 'Tier 01 // ENTRY' : 'Palier 01 // ACCÈS'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E] mt-1">
                  {p.tiers.earlybird.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2 min-h-[32px]">
                  {p.tiers.earlybird.summary}
                </p>
              </div>

              {/* Price Tag */}
              <div className="flex items-baseline space-x-1 border-t border-b border-gray-100 py-4">
                <span className="text-4xl font-extrabold font-mono text-[#1A1A2E]">$25</span>
                <span className="text-sm font-bold text-gray-500">CAD</span>
                <span className="text-xs text-gray-400 font-medium ml-2">/ {p.tiers.earlybird.period}</span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3">
                {p.tiers.earlybird.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-600 line-clamp-3">
                    <Check className="w-4 h-4 text-[#00D4FF] mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('earlybird')}
                className="w-full py-4 rounded-full font-bold text-xs text-[#1A1A2E] bg-white border border-gray-200 hover:border-[#00D4FF] hover:bg-[#00D4FF]/5 transition-all text-center flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{p.ctaFormat.replace('{tier}', p.tiers.earlybird.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-gray-400 font-medium mt-3">
                <Lock className="w-3 h-3 text-gray-300" />
                <span>Stripe Secured • Fully Refundable</span>
              </div>
            </div>
          </div>

          {/* Card 2 - Guardian (Founding Member) - Scaled 105% & Premium Cyan Focus Ring */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-white rounded-3xl border-2 border-[#00D4FF] shadow-xl hover:shadow-2xl transition-all relative z-20 lg:-my-3 scale-100 lg:scale-[1.04] text-left group">
            {/* Pulsing Popular Accent Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#00D4FF] text-[#1A1A2E] text-[10px] font-mono font-black tracking-widest uppercase rounded-full shadow-md z-30 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>{p.tiers.founding.badge}</span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold font-mono tracking-widest text-[#00D4FF] uppercase flex items-center space-x-1">
                  <span>{language === 'en' ? 'Tier 02 // VISUAL FIRST' : 'Palier 02 // SÉCURITÉ COMPLÈTE'}</span>
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1A1A2E] mt-1">
                  {p.tiers.founding.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2 min-h-[32px]">
                  {p.tiers.founding.summary}
                </p>
              </div>

              {/* Price Tag with savings */}
              <div className="flex flex-col border-t border-b border-gray-100 py-4 relative">
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-black font-mono text-[#1A1A2E]">$85</span>
                  <span className="text-sm font-bold text-gray-500">CAD</span>
                  <span className="text-xs text-gray-400 font-medium ml-2">/ {p.tiers.founding.period}</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
                  <span className="px-2 py-0.5 text-[9px] font-bold text-green-700 bg-green-50 rounded border border-green-200">
                    {language === 'en' ? 'SAVE $200' : 'ÉCONOMISEZ 200$'}
                  </span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3">
                {p.tiers.founding.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-700 font-medium">
                    <Check className="w-4.5 h-4.5 text-[#00D4FF] mr-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('founding')}
                className="w-full py-4.5 rounded-full font-black text-xs text-white bg-[#1A1A2E] hover:bg-[#00D4FF] hover:text-[#1A1A2E] hover:scale-[1.02] transform hover:shadow-lg transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>{p.ctaFormat.replace('{tier}', p.tiers.founding.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-gray-500 font-extrabold mt-3">
                <Shield className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-700">Recommended • Cancel Pre-orders Instantly</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Guardian Pro (Premium Elite) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-gray-50/60 rounded-3xl border border-gray-100 hover:border-gray-200 shadow-sm transition-all relative z-10 hover:shadow-md text-left group">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold font-mono tracking-widest text-[#1A1A2E] uppercase">
                  {language === 'en' ? 'Tier 03 // MAXIMUM ELITE' : 'Palier 03 // PROTECTION MAXIMALE'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1A1A2E] mt-1">
                  {p.tiers.guardian.name}
                </h3>
                <p className="text-xs text-gray-500 mt-2 min-h-[32px]">
                  {p.tiers.guardian.summary}
                </p>
              </div>

              {/* Price Tag with savings */}
              <div className="flex flex-col border-t border-b border-gray-100 py-4 relative">
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold font-mono text-[#1A1A2E]">$150</span>
                  <span className="text-sm font-bold text-gray-500">CAD</span>
                  <span className="text-xs text-gray-400 font-medium ml-2">/ {p.tiers.guardian.period}</span>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
                  <span className="px-2 py-0.5 text-[9px] font-bold text-green-700 bg-green-50 rounded border border-green-200">
                    {language === 'en' ? 'SAVE $400' : 'ÉCONOMISEZ 400$'}
                  </span>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3">
                {p.tiers.guardian.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-gray-600 line-clamp-3">
                    <Check className="w-4 h-4 text-[#00D4FF] mr-2 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('guardian')}
                className="w-full py-4 rounded-full font-bold text-xs text-white bg-[#1a1A2E]/80 hover:bg-[#00D4FF] hover:text-[#1A1A2E] transition-all text-center flex items-center justify-center space-x-1 cursor-pointer"
              >
                <span>{p.ctaFormat.replace('{tier}', p.tiers.guardian.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-gray-400 font-medium mt-3">
                <Lock className="w-3 h-3 text-gray-300" />
                <span>Stripe Secured • Fully Refundable</span>
              </div>
            </div>
          </div>

        </div>

        {/* Centered Trust Row Beneath Pricing Cards */}
        <div className="p-6 bg-[#F8F9FA] rounded-2xl border border-gray-100 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around text-center gap-4 py-8" id="pricing-trust-row">
          {p.trustList.map((item, id) => (
            <div key={id} className="flex items-center justify-center space-x-2 px-6 w-full text-left">
              <Shield className="w-5 h-5 text-[#00D4FF]" />
              <span className="text-xs font-bold text-[#1A1A2E]">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
