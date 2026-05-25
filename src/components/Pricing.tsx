/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Shield, Award, CreditCard, Lock, Sparkles, X, Heart, HelpCircle, FileText, Package } from 'lucide-react';
import { Language, Tier } from '../types';
import { translations } from '../data/translations';
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
    <section id="pricing" className="py-24 md:py-32 bg-[#F4F7FB] relative overflow-hidden flex flex-col justify-center items-center border-b border-gray-250">
      
      {/* Subtle radial ambient floor shading */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[40rem] bg-indigo-500/5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Headers Line matching mockup exactly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-10 mb-16 gap-6 text-left">
          <div className="space-y-4">
            <span className="text-blue-600 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              FOUNDING BATCH PRE-ORDER
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-900 leading-none">
              Be Part of the Founding 1,000
            </h2>
            <p className="text-sm sm:text-base text-slate-550 text-slate-500 font-medium max-w-xl">
              Limited founding batch pricing. Fully refundable. Shipping Summer 2026.
            </p>
          </div>
          
          {/* FREE Shipping across Canada badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 text-blue-700 rounded-none text-xs font-bold uppercase tracking-wider h-fit w-fit">
            <span>🇨🇦</span>
            <span>FREE Shipping Across Canada</span>
          </div>
        </div>

        {/* Pricing Cards Grid - Exactly matching the vertical 3-way tier architecture in mockup */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-stretch max-w-6xl mx-auto w-full" 
          id="pricing-cards-grid"
        >
          
          {/* Card 1 - Observer */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10 text-left rounded-none"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight">
                  Observer
                </h3>
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">
                  Essential Safety
                </span>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-semibold leading-relaxed">
                  Entry level predictive diagnostics and basic cloud alert notifications.
                </p>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline space-x-1 py-4.5 border-y border-gray-100">
                <span className="text-xs font-bold text-slate-400">$</span>
                <span className="text-5xl font-black font-mono text-slate-950 tracking-tighter">25</span>
                <span className="text-xs font-black font-mono text-slate-400 uppercase ml-1">CAD</span>
                <span className="text-[9px] font-mono text-slate-400 ml-auto uppercase tracking-widest font-extrabold bg-slate-50 px-2.5 py-1 border border-gray-200">
                  Fully Refundable
                </span>
              </div>

              {/* Product Representation Thumbnail */}
              <div className="h-28 w-full bg-slate-50 border border-gray-150 flex items-center justify-center relative overflow-hidden p-2 group">
                <img 
                  src={obsProductImg} 
                  alt="OBD-II Smart Dongle" 
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow-md group-hover:scale-95 transition-transform" 
                />
                <span className="absolute bottom-1 right-2 text-[7px] font-mono font-bold text-slate-400">
                  OBD ADAPTER INCLUDED
                </span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3 pt-1">
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>AI Predictive Diagnostics</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Basic Health Monitoring</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span>Mobile App Access</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('earlybird')}
                className="w-full py-4 bg-[#1E2538] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <span>Pre-Order Observer</span>
              </button>
            </div>
          </motion.div>

          {/* Card 2 - Guardian (Recommended / Popular) */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border-2 border-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 relative z-20 scale-100 lg:scale-[1.03] text-left rounded-none"
          >
            {/* Action Accent Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 bg-blue-600 text-white text-[9px] font-mono font-black tracking-widest uppercase rounded-none shadow-md z-30 flex items-center space-x-1 border border-blue-500">
              <span>MOST POPULAR</span>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight">
                  Guardian
                </h3>
                <span className="text-[10px] font-black font-mono tracking-widest text-blue-600 uppercase">
                  Complete Protection
                </span>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-semibold leading-relaxed">
                  Complete predictive safety with real-time feedback and dual-lens video protection.
                </p>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline space-x-1 py-4.5 border-y border-gray-100">
                <span className="text-xs font-bold text-slate-400">$</span>
                <span className="text-5xl font-black font-mono text-slate-950 tracking-tighter">79</span>
                <span className="text-xs font-black font-mono text-slate-400 uppercase ml-1">CAD</span>
                <span className="text-[9px] font-mono text-slate-400 ml-auto uppercase tracking-widest font-extrabold bg-slate-50 px-2.5 py-1 border border-gray-200">
                  Fully Refundable
                </span>
              </div>

              {/* Product Picture */}
              <div className="h-28 w-full bg-slate-50 border border-gray-150 flex items-center justify-center relative overflow-hidden p-2 group">
                <img 
                  src={guardProductImg} 
                  alt="Astra Suite Connected Dashcam and OBD setup" 
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow-md group-hover:scale-102 transition-transform" 
                />
                <span className="absolute bottom-1 right-2 text-[7px] font-mono font-bold text-slate-400">
                  CAMERA & ADAPTER BUNDLE
                </span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3 pt-1">
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Everything in Observer</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>1080p AI Dash Camera</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Collision Prevention Alerts</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Driver Monitoring</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('founding')}
                className="w-full py-4.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
              >
                <span>Pre-Order Guardian</span>
              </button>
            </div>
          </motion.div>

          {/* Card 3 - Guardian Pro */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
            className="lg:col-span-4 flex flex-col justify-between p-8 bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10 text-left rounded-none"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-sans text-xl font-black text-slate-900 uppercase tracking-tight">
                  Guardian Pro
                </h3>
                <span className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">
                  Maximum Safety
                </span>
                <p className="text-xs text-slate-500 mt-2 min-h-[32px] font-semibold leading-relaxed">
                  Maximum safety with military-spec 4K optics and complete dashboard reporting features.
                </p>
              </div>

              {/* Price Details */}
              <div className="flex items-baseline space-x-1 py-4.5 border-y border-gray-100">
                <span className="text-xs font-bold text-slate-400">$</span>
                <span className="text-5xl font-black font-mono text-slate-950 tracking-tighter">149</span>
                <span className="text-xs font-black font-mono text-slate-400 uppercase ml-1">CAD</span>
                <span className="text-[9px] font-mono text-slate-400 ml-auto uppercase tracking-widest font-extrabold bg-slate-50 px-2.5 py-1 border border-gray-200">
                  Fully Refundable
                </span>
              </div>

              {/* Product Picture */}
              <div className="h-28 w-full bg-slate-50 border border-gray-150 flex items-center justify-center relative overflow-hidden p-2 group">
                <img 
                  src={guardProProductImg} 
                  alt="Astra Suite Connected Dashcam and Connected app" 
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow-md group-hover:scale-103 transition-transform" 
                />
                <span className="absolute bottom-1 right-2 text-[7px] font-mono font-bold text-slate-400">
                  4K ULTIMATE PRO HARDWARE
                </span>
              </div>

              {/* Features checklist */}
              <ul className="space-y-3 pt-1">
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-950 mr-2">✓</span>
                  <span>Everything in Guardian</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-950 mr-2">✓</span>
                  <span>4K Ultra HD Recording</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-950 mr-2">✓</span>
                  <span>Parking Mode + GPS Tracking</span>
                </li>
                <li className="flex items-start text-xs text-slate-600 font-semibold">
                  <span className="text-blue-950 mr-2">✓</span>
                  <span>Fleet & Family Dashboard</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleCardClick('guardian')}
                className="w-full py-4 bg-[#1E2538] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-none transition-all duration-300 text-center flex items-center justify-center space-x-2 cursor-pointer shadow-md"
              >
                <span>Pre-Order Guardian Pro</span>
              </button>
            </div>
          </motion.div>

        </motion.div>

        {/* Footer info row matching precisely to mockup text */}
        <div className="flex items-center justify-center pt-8 border-t border-slate-200 mt-12">
          <p className="inline-flex items-center space-x-2 text-xs sm:text-sm text-slate-550 text-slate-600 font-semibold">
            <span className="text-blue-600">🛡️</span>
            <span>All plans include Canadian support, PIPEDA compliance, and 2-year warranty.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
