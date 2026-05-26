/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Tier } from '../types';
// @ts-ignore
import obsProductImg from '../assets/images/obs_product_visual_1779736732490.png';
// @ts-ignore
import guardProductImg from '../assets/images/guard_product_visual_1779736750699.png';
// @ts-ignore
import guardProProductImg from '../assets/images/guard_pro_product_visual_1779736768950.png';

interface PricingProps {
  language: Language;
  onSetSelectedTier: (tier: Tier) => void;
  onOpenCheckout: (tier: Tier) => void;
}

export default function Pricing({ language, onSetSelectedTier, onOpenCheckout }: PricingProps) {
  const handleCardClick = (tier: Tier) => {
    onSetSelectedTier(tier);
    onOpenCheckout(tier);
  };

  return (
    <section id="pricing" className="py-24 bg-[#F9FAFB] relative overflow-hidden flex flex-col justify-center items-center border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header Layout conforming exactly to Section 04 instructions */}
        <div className="flex flex-col md:flex-row md:items-start justify-between border-b border-slate-200 pb-8 mb-16 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
              THE GUARDIAN FOUNDER’S BUNDLE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
              Three ways to lock in your founding price before Batch 01 closes to the public.
            </h2>
          </div>
          
          {/* Free shipping banner */}
          <div className="inline-flex items-center space-x-2 bg-slate-105 border border-slate-200 px-4 py-2.5 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-none h-fit">
            <span>🍁</span>
            <span>FREE Shipping Across Canada</span>
          </div>
        </div>

        {/* 3 Columns Card Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto w-full" id="pricing-cards-grid">
          
          {/* Card 1: Early Bird */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border border-slate-200 shadow-sm relative text-left rounded-none">
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-bold text-[#1A1A2E] uppercase tracking-wider">
                  Early Bird
                </h3>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block mt-1">
                  SECURE YOUR PLACE
                </span>
                <p className="text-xs text-slate-500 mt-3 font-semibold leading-relaxed">
                  Secure your place in the manufacturing queue and receive full mechanical diagnostic tracking.
                </p>
              </div>

              {/* Price Tag Details */}
              <div className="flex items-baseline space-x-1 py-4 border-y border-slate-100">
                <span className="text-xs font-bold text-slate-400">$</span>
                <span className="text-5xl font-mono font-black text-[#1A1A2E] tracking-tight">25</span>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase ml-1">CAD</span>
                <span className="text-[9px] font-mono ml-auto uppercase tracking-wider font-extrabold bg-slate-50 text-slate-500 px-2.5 py-1 border border-slate-200">
                  REFUNDABLE DEPOSIT
                </span>
              </div>

              {/* Product Thumbnail */}
              <div className="h-28 w-full bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                <img 
                  src={obsProductImg} 
                  alt="Astra OBD-II diagnostic smart dongle" 
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow hover:scale-95 transition-transform" 
                />
              </div>

              {/* List features */}
              <ul className="space-y-3 pt-2 text-xs font-semibold text-slate-600">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Predictive OBD diagnostics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Canadian safety data sovereignty</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Bilingual support center access</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('earlybird')}
                className="w-full py-4 bg-[#1E2538] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-none transition-colors text-center cursor-pointer shadow"
              >
                Reserve — Early Bird →
              </button>
            </div>
          </div>

          {/* Card 2: Founding Member (Ultimate Cyan Prominence & Glow) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border-2 border-[#00D4FF] shadow-xl relative text-left rounded-none scale-100 lg:scale-[1.04]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#00D4FF] text-[#1A1A2E] text-[9px] font-mono font-black tracking-widest uppercase border border-[#00D4FF] shadow">
              MOST POPULAR
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-xl font-bold text-[#1A1A2E] uppercase tracking-wider">
                    Founding Member
                  </h3>
                  <span className="px-2 py-0.5 bg-cyan-50 border border-cyan-200 text-cyan-700 text-[9px] font-bold tracking-wider uppercase">
                    SAVE $200
                  </span>
                </div>
                <span className="text-[10px] font-mono font-black text-cyan-600 uppercase tracking-widest block mt-1">
                  INTELLIGENT DEFAULT
                </span>
                <p className="text-xs text-slate-500 mt-3 font-semibold leading-relaxed">
                  Our core hardware bundle. Contains the dual-lens AI safety camera and complete predictive mechanics.
                </p>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline space-x-1 py-4 border-y border-slate-100">
                <span className="text-xs font-bold text-slate-400">$</span>
                <span className="text-5xl font-mono font-black text-[#1A1A2E] tracking-tight">85</span>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase ml-1">CAD</span>
                <span className="text-[9px] font-mono ml-auto uppercase tracking-wider font-extrabold bg-[#00D4FF]/10 text-cyan-800 px-2.5 py-1 border border-[#00D4FF]/20">
                  SHIPS FIRST BATCH
                </span>
              </div>

              {/* Product Thumbnail */}
              <div className="h-28 w-full bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                <img 
                  src={guardProductImg} 
                  alt="Astra Connected Dashcam Camera & OBD-II Kit bundle representation" 
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow hover:scale-102 transition-transform" 
                />
              </div>

              {/* List features */}
              <ul className="space-y-3 pt-2 text-xs font-semibold text-slate-600">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Everything in Early Bird</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>1080p Dual-Lens AI Camera</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Lane & collision alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">✓</span>
                  <span>Saves $200 on Retail Release</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('founding')}
                className="w-full py-4.5 bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#1A1A2E] text-xs font-black uppercase tracking-widest rounded-none transition-colors text-center cursor-pointer shadow-lg"
              >
                Reserve — Founding Member →
              </button>
            </div>
          </div>

          {/* Card 3: Guardian */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border border-slate-200 shadow-sm relative text-left rounded-none">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-xl font-bold text-[#1A1A2E] uppercase tracking-wider">
                    Guardian
                  </h3>
                  <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-[9px] font-bold tracking-wider uppercase">
                    SAVE $400
                  </span>
                </div>
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest block mt-1">
                  ELITE SAFETY PACKAGE
                </span>
                <p className="text-xs text-slate-500 mt-3 font-semibold leading-relaxed">
                  Ultimate protective setup featuring military-spec 4K optics and complete internal cabin tracking.
                </p>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline space-x-1 py-4 border-y border-slate-100">
                <span className="text-xs font-bold text-slate-400">$</span>
                <span className="text-5xl font-mono font-black text-[#1A1A2E] tracking-tight">150</span>
                <span className="text-xs font-mono font-bold text-slate-400 uppercase ml-1">CAD</span>
                <span className="text-[9px] font-mono ml-auto uppercase tracking-wider font-extrabold bg-slate-50 text-slate-500 px-2.5 py-1 border border-slate-200">
                  LIFETIME ACCESS
                </span>
              </div>

              {/* Product Thumbnail */}
              <div className="h-28 w-full bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                <img 
                  src={guardProProductImg} 
                  alt="Astra Ultimate 4K Dashcam hardware and OBD-II connector" 
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow hover:scale-102 transition-transform" 
                />
              </div>

              {/* List features */}
              <ul className="space-y-3 pt-2 text-xs font-semibold text-slate-600">
                <li className="flex items-start">
                  <span className="text-slate-900 mr-2">✓</span>
                  <span>Everything in Founding Member</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-900 mr-2">✓</span>
                  <span>4K Ultra-HD camera optics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-900 mr-2">✓</span>
                  <span>Drowsiness & driver cabin tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-slate-900 mr-2">✓</span>
                  <span>Saves $400 on retail pricing</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('guardian')}
                className="w-full py-4 bg-[#1E2538] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-none transition-colors text-center cursor-pointer shadow"
              >
                Reserve — Guardian →
              </button>
            </div>
          </div>

        </div>

        {/* Secure Stripe payment footer */}
        <div className="flex items-center justify-center pt-8 border-t border-slate-200 mt-16" id="pricing-stripe-trust">
          <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider flex flex-wrap items-center justify-center gap-2">
            <span>Stripe Secured</span>
            <span className="text-slate-350">|</span>
            <span>100% Fully Refundable</span>
            <span className="text-slate-350">|</span>
            <span>Canadian Support Team</span>
            <span className="text-slate-350">|</span>
            <span>No charge until production</span>
          </p>
        </div>

      </div>
    </section>
  );
}
