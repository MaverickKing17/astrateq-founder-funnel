/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Cpu, Hammer, Package, Shield, Settings, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
// @ts-ignore
import astraProductsImg from '../assets/images/suite_kit_v2_1779820734677.png';

interface WhatIsIncludedProps {
  language: Language;
}

export default function WhatIsIncluded({ language }: WhatIsIncludedProps) {
  const t = translations[language].whatIsIncluded;

  return (
    <section id="what-was-included" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center border-b border-gray-200">
      {/* Dynamic ambient graphic backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[30rem] premium-gradient pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Beautiful Technical blueprint schematic diagram */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[440px] bg-neutral-950 border border-neutral-800 rounded-none p-8 overflow-hidden shadow-2xl" id="hardware-blueprint-container">
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />
            
            {/* Holographic light node */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />

            <div className="relative z-10 w-full space-y-6 text-center select-none">
              
              {/* Header */}
              <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-blue-400 border-b border-neutral-800 pb-3 font-semibold">
                <span className="flex items-center space-x-1.5">
                  <Package className="w-4 h-4 fill-current shrink-0" />
                  <span>{language === 'en' ? "ASTRA SUITE HARDWARE" : "ÉQUIPEMENT PHYSIQUE ASTRA"}</span>
                </span>
                <span>VERIFIED v1.3</span>
              </div>

              {/* Real Photography */}
              <div className="relative overflow-hidden w-full h-[280px] border border-neutral-800 bg-neutral-900 flex items-center justify-center group mb-4">
                <img 
                  src={astraProductsImg} 
                  alt="Astra dual-lens dash camera and companion OBD-II diagnostic plug" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-left">
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-blue-400 bg-neutral-950/90 px-2 py-0.5 border border-blue-500/20">
                    REAL PRODUCT PHOTOGRAPHY
                  </span>
                </div>
              </div>

              {/* Legal or shipping metadata line */}
              <div className="pt-4 border-t border-neutral-800 text-left">
                <p className="text-[9px] font-mono text-neutral-500 leading-relaxed font-medium">
                  {language === 'en' 
                    ? "Spec: Outer shell is high-impact polycarbonate. Operating humidity 95% RH. Mounting footprint fits standard GM, Ford, RAM and imported windshield geometries."
                    : "Spécifications de boîtier : Polycarbonate à haute résistance mécanique. Humidité supportée 95% RH. Support adaptable."}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column checklist metadata */}
          <div className="lg:col-span-6 space-y-6 text-left" id="included-right">
            <span className="inline-flex items-center space-x-1.5 border border-blue-250 bg-gradient-to-r from-blue-50 to-indigo-50 px-3.5 py-1.5 rounded-none text-blue-804 text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest border-blue-500/25">
               🍁 {language === 'en' ? "UNBOXING INVENTORY" : "DANS LE COFFRET"}
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
              {t.title}
            </h2>
            <p className="text-base text-slate-500 font-semibold">
              {t.subtitle}
            </p>

            {/* Checklist of included hardware/software with premium energetic borders */}
            <ul className="space-y-3 pt-2" id="included-checklist-ul">
              {t.items.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start text-xs sm:text-sm text-slate-700 font-semibold hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-transparent duration-300 p-2 -mx-2 transition-all rounded-none" 
                  id={`included-item-${idx}`}
                >
                  <div className="w-5.5 h-5.5 rounded-none bg-emerald-50 border border-emerald-250 flex items-center justify-center mr-3 mt-0.5 shrink-0 text-emerald-600 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Extra assurance stamp */}
            <div className="pt-4 border-t border-gray-200 flex items-center space-x-2.5 text-[10px] font-mono font-black uppercase tracking-widest text-[#00D4FF] bg-slate-950 p-3 px-4 border-l-2 border-l-blue-500 max-w-sm">
              <span className="animate-bounce">🛡️</span>
              <span className="text-white font-extrabold">2-Year Full Premium Hardware Replacement Warranty Included</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
