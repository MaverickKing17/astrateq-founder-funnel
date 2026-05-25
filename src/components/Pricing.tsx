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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 85,
      damping: 16,
    },
  },
};

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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Headers */}
        <div className="max-w-3xl mx-auto space-y-5" id="pricing-headers">
          <span className="inline-flex items-center space-x-1.5 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
            💼 <span>{p.trustTitle}</span>
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-none">
            {p.title}
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto">
            {p.subtitle}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto w-full" 
          id="pricing-cards-grid"
        >
          
          {/* Card 1 - Observer (Early Bird) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-slate-50 border border-gray-200 hover:border-slate-400 hover:bg-white shadow-sm transition-all duration-300 relative z-10 hover:shadow-lg text-left group rounded-none"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">
                  {language === 'en' ? 'Tier 01 // ENTRY' : 'Palier 01 // ACCÈS'}
                </span>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  {p.tiers.earlybird.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-semibold leading-relaxed">
                  {p.tiers.earlybird.summary}
                </p>
              </div>

              {/* Technical Price Tag */}
              <div className="flex items-baseline justify-between border-t border-b border-gray-200/85 py-4.5">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs font-bold text-slate-400 font-sans">$</span>
                  <span className="text-5xl font-black font-mono text-slate-950 tracking-tighter">25</span>
                  <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest ml-1">CAD</span>
                </div>
                <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 border border-gray-200 px-2 py-0.5 uppercase tracking-widest rounded-none">
                  {p.tiers.earlybird.period}
                </span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3.5 pt-1">
                {p.tiers.earlybird.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-600 font-semibold group/feat hover:text-slate-900 transition-colors">
                    <span className="w-5 h-5 border border-blue-200 bg-blue-50/50 flex items-center justify-center mr-2.5 shrink-0 mt-0.5 group-hover/feat:bg-blue-100/80 transition-colors">
                      <Check className="w-3.5 h-3.5 text-blue-700" />
                    </span>
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('earlybird')}
                className="w-full py-4 bg-white border border-slate-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 text-slate-900 text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>{p.ctaFormat.replace('{tier}', p.tiers.earlybird.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-3.5">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>Stripe Secured • Fully Refundable</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Guardian (Founding Member) - Scaled & Royal Blue Focus Ring */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border-2 border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-20 lg:-my-3 scale-100 lg:scale-[1.03] text-left group rounded-none"
          >
            {/* Highly Polished Popular Accent Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-blue-605 bg-blue-600 text-white text-[9px] font-mono font-black tracking-widest uppercase rounded-none shadow-md z-30 flex items-center space-x-1.5 border border-blue-500">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-white" />
              <span>{p.tiers.founding.badge}</span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black font-mono tracking-widest text-blue-600 uppercase flex items-center space-x-1">
                  <span>{language === 'en' ? 'Tier 02 // RECOMMENDED' : 'Palier 02 // SÉCURITÉ COMPLÈTE'}</span>
                </span>
                <h3 className="font-sans text-2xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  {p.tiers.founding.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-semibold leading-relaxed">
                  {p.tiers.founding.summary}
                </p>
              </div>

              {/* Technical Price Tag with Savings block */}
              <div className="flex items-baseline justify-between border-t border-b border-gray-200 py-4.5 relative">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs font-bold text-blue-600 font-sans">$</span>
                  <span className="text-5xl font-black font-mono text-slate-950 tracking-tighter">85</span>
                  <span className="text-[10px] font-black font-mono text-blue-600 uppercase tracking-widest ml-1">CAD</span>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 border border-gray-200 px-2 py-0.5 uppercase tracking-widest rounded-none">
                    {p.tiers.founding.period}
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 text-[8px] font-mono font-black text-emerald-700 bg-emerald-50 rounded-none border border-emerald-200 uppercase tracking-widest">
                    {language === 'en' ? 'SAVE $200' : 'ÉCONOMISEZ 200$'}
                  </span>
                </div>
              </div>

              {/* Features Checklist */}
              <ul className="space-y-3.5 pt-1">
                {p.tiers.founding.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-705 text-slate-700 font-semibold group/feat hover:text-slate-900 transition-colors">
                    <span className="w-5 h-5 border border-blue-300 bg-blue-50 flex items-center justify-center mr-2.5 shrink-0 mt-0.5 group-hover/feat:bg-blue-200/60 transition-colors">
                      <Check className="w-3.5 h-3.5 text-blue-800" />
                    </span>
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('founding')}
                className="w-full py-4.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-blue-600/10"
              >
                <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
                <span>{p.ctaFormat.replace('{tier}', p.tiers.founding.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest mt-3.5">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Recommended • Cancel Instantly</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Guardian Pro (Premium Elite) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-slate-50 border border-gray-200 hover:border-slate-400 hover:bg-white shadow-sm transition-all duration-300 relative z-10 hover:shadow-lg text-left group rounded-none"
          >
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">
                  {language === 'en' ? 'Tier 03 // MAXIMUM ELITE' : 'Palier 03 // PROTECTION MAXIMALE'}
                </span>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight mt-1">
                  {p.tiers.guardian.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-semibold leading-relaxed">
                  {p.tiers.guardian.summary}
                </p>
              </div>

              {/* Technical Price Tag with Savings */}
              <div className="flex items-baseline justify-between border-t border-b border-gray-200 py-4.5 relative">
                <div className="flex items-baseline space-x-1">
                  <span className="text-xs font-bold text-slate-400 font-sans">$</span>
                  <span className="text-5xl font-black font-mono text-slate-950 tracking-tighter">150</span>
                  <span className="text-[10px] font-black font-mono text-slate-400 uppercase tracking-widest ml-1">CAD</span>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className="text-[9px] font-mono font-bold text-slate-500 bg-slate-100 border border-gray-200 px-2 py-0.5 uppercase tracking-widest rounded-none">
                    {p.tiers.guardian.period}
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 text-[8px] font-mono font-black text-emerald-700 bg-emerald-50 rounded-none border border-emerald-200 uppercase tracking-widest">
                    {language === 'en' ? 'SAVE $400' : 'ÉCONOMISEZ 400$'}
                  </span>
                </div>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3.5 pt-1">
                {p.tiers.guardian.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start text-xs text-slate-600 font-semibold group/feat hover:text-slate-900 transition-colors">
                    <span className="w-5 h-5 border border-blue-200 bg-blue-50/50 flex items-center justify-center mr-2.5 shrink-0 mt-0.5 group-hover/feat:bg-blue-100/80 transition-colors">
                      <Check className="w-3.5 h-3.5 text-blue-700" />
                    </span>
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('guardian')}
                className="w-full py-4 bg-white border border-slate-300 hover:bg-slate-950 hover:text-white hover:border-slate-950 text-slate-900 text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <Award className="w-3.5 h-3.5" />
                <span>{p.ctaFormat.replace('{tier}', p.tiers.guardian.name)}</span>
              </button>
              <div className="flex items-center justify-center space-x-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-3.5">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>Stripe Secured • Fully Refundable</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Centered Trust Row Beneath Pricing Cards */}
        <div className="p-6 bg-slate-50 border border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/80 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-around text-center gap-4 py-8 rounded-none" id="pricing-trust-row">
          {p.trustList.map((item, id) => {
            // Contextual, real-looking, premium icon allocations for each bullet
            const getTrustIcon = (index: number) => {
              switch (index) {
                case 0:
                  return <Lock className="w-4.5 h-4.5 text-blue-600 shrink-0" />;
                case 1:
                  return <Shield className="w-4.5 h-4.5 text-blue-600 shrink-0" />;
                case 2:
                  return <CreditCard className="w-4.5 h-4.5 text-blue-600 shrink-0" />;
                default:
                  return <HelpCircle className="w-4.5 h-4.5 text-blue-600 shrink-0" />;
              }
            };
            return (
              <div key={id} className="flex items-center justify-start sm:justify-center space-x-3 px-6 w-full text-left py-2 sm:py-0">
                {getTrustIcon(id)}
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-snug">{item}</span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
