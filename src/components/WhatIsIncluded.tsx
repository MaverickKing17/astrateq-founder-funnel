/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Cpu, Hammer, Package, Shield, Settings, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

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
                  <span>{language === 'en' ? "ASTRA SUITE SCHEMATIC" : "PLAN DE CONCEPTION TECHNIQUE"}</span>
                </span>
                <span>VERIFIED v1.3</span>
              </div>

              {/* Graphic assembly line */}
              <div className="relative min-h-[220px] flex items-center justify-center w-full">
                {/* Visual components representation */}
                <div className="relative flex space-x-6 items-center">
                  
                  {/* Dashcam element blueprint circle */}
                  <div className="border border-blue-500/25 bg-neutral-900 p-4 rounded-none flex flex-col items-center relative group shadow-lg shadow-blue-500/5">
                    <div className="w-20 h-20 rounded-full border border-dashed border-blue-500/40 flex items-center justify-center relative animate-spin-slow">
                      <div className="w-14 h-14 rounded-full border border-blue-500/60 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-blue-950 flex items-center justify-center">
                          <div className="w-3 h-3 bg-blue-450 bg-blue-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                    {/* Dimension lines */}
                    <div className="absolute -bottom-6 text-[8px] font-mono text-blue-450 text-blue-400 font-bold uppercase tracking-wider">
                      78mm Ø LENS UNIT
                    </div>
                  </div>

                  {/* Dongle element representation */}
                  <div className="border border-blue-500/25 bg-neutral-905 bg-neutral-900 p-4 rounded-none flex flex-col items-center relative shadow-lg">
                    <div className="w-12 h-16 border-2 border-blue-500/35 rounded-none flex flex-col justify-between p-2">
                      <span className="text-[6px] font-mono text-blue-400 font-black">OBD2</span>
                      <div className="h-5 w-full bg-blue-950 border border-blue-500/25 rounded-none flex items-center justify-center">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div className="flex justify-between">
                        <span className="w-1 h-1 bg-emerald-400 rounded-full" />
                        <span className="w-1 h-1 bg-blue-400 rounded-full" />
                      </div>
                    </div>
                    <div className="absolute -bottom-6 text-[8px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                      45mm × 32mm PLUG
                    </div>
                  </div>

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
            <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
              {language === 'en' ? "UNBOXING INVENTORY" : "DANS LE COFFRET"}
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
              {t.title}
            </h2>
            <p className="text-base text-slate-500 font-medium">
              {t.subtitle}
            </p>

            {/* Checklist of included hardware/software */}
            <ul className="space-y-4 pt-2" id="included-checklist-ul">
              {t.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-650 text-slate-600 font-semibold" id={`included-item-${idx}`}>
                  <div className="w-5 h-5 rounded-none bg-emerald-50 border border-emerald-250 border-emerald-200 flex items-center justify-center mr-3 mt-0.5 shrink-0 text-emerald-600">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Extra assurance stamp */}
            <div className="pt-4 border-t border-gray-200 flex items-center space-x-2.5 text-[10px] font-mono font-black uppercase tracking-widest text-slate-500">
              <span>🛡️</span>
              <span>2-Year Full Hardware Replacement Warranty Included</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
