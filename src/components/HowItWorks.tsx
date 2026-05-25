/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Factory, Hammer, ArrowRight, MousePointer, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HowItWorksProps {
  language: Language;
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const t = translations[language].howItWorks;

  const steps = [
    {
      id: 0,
      icon: <MousePointer className="w-6 h-6" />,
      label: t.steps.step01.title,
      desc: t.steps.step01.description,
      detail: t.steps.step01.detail,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      icon: <Factory className="w-6 h-6" />,
      label: t.steps.step02.title,
      desc: t.steps.step02.description,
      detail: t.steps.step02.detail,
      color: "from-cyan-500 to-[#00D4FF]"
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-6 h-6" />,
      label: t.steps.step03.title,
      desc: t.steps.step03.description,
      detail: t.steps.step03.detail,
      color: "from-[#00D4FF] to-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gradient-to-b from-slate-50 via-blue-50/15 to-slate-100/80 relative flex flex-col justify-center items-center overflow-hidden border-b border-gray-200">
      
      {/* Decorative background visual elements */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto space-y-4" id="how-it-works-headers">
          <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-500/25">
             ⭐ {language === 'en' ? 'SIMPLE TIMELINE' : 'PROCESSUS SANS FAILLE'}
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            {t.title}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium leading-relaxed">
            {language === 'en' 
              ? "We believe in extreme transparency. Here is exactly what happens from the split-second you lock your slot to securing your driving safety."
              : "Nous croyons en une transparence absolue. Voici les étapes de votre réservation jusqu'au calibrage de votre boîtier."}
          </p>
        </div>

        {/* Process Connector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto items-stretch" id="how-it-works-steps">
          {/* Timeline Connector Wire Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.5rem] inset-x-12 h-1 bg-gray-200/65 z-0" />
          
          {steps.map((st) => {
            const isSelected = activeStep === st.id;
            return (
              <div
                key={st.id}
                onClick={() => setActiveStep(st.id)}
                className={`flex flex-col bg-white rounded-none p-7 border-2 transition-all duration-300 relative z-10 cursor-pointer text-left h-full shadow-sm hover:shadow-md ${
                  isSelected
                    ? 'border-blue-500 shadow-lg shadow-blue-500/5 scale-102'
                    : 'border-transparent hover:border-blue-500/20'
                }`}
                id={`how-works-step-${st.id}`}
              >
                {/* Colored top gradient bar on active card */}
                {isSelected && (
                  <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${st.color}`} />
                )}

                {/* Step indicator node */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-none flex items-center justify-center text-white bg-gradient-to-r ${st.color} transform transition-transform duration-300 ${
                    isSelected ? 'scale-110 shadow-lg shadow-blue-500/20' : 'opacity-85'
                  }`}>
                    {st.icon}
                  </div>
                  <span className={`font-mono text-xs font-black tracking-widest ${
                    isSelected ? 'text-blue-500' : 'text-gray-300'
                  }`}>
                    0{st.id + 1}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-950 uppercase tracking-tight leading-snug">
                  {st.label}
                </h3>
                <p className={`text-[10px] font-black mt-1 uppercase tracking-widest ${
                  isSelected ? 'text-blue-600' : 'text-slate-400'
                }`}>
                  {st.desc}
                </p>

                {/* Collapsible detail panel that expands when active */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex-grow">
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-semibold">
                    {st.detail}
                  </p>
                </div>

                {/* Selection state marker with beautiful badge */}
                {isSelected && (
                  <div className={`absolute -bottom-2.5 right-6 bg-gradient-to-r ${st.color} text-white px-2.5 py-1 rounded-none text-[9px] font-mono font-black uppercase tracking-widest shadow-md`}>
                    {language === 'en' ? 'Active Focus' : 'Focus Actuel'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Badge beneath steps */}
        <div className="inline-flex items-center space-x-3 bg-white px-5 py-3.5 rounded-none border border-emerald-520 border-emerald-110 border-emerald-100 text-left max-w-xl shadow-md shadow-emerald-500/5 hover:-translate-y-0.5 transition-transform duration-300" id="process-trust-badge">
          <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <ShieldCheck className="w-5 h-5 shrink-0" />
          </div>
          <p className="text-xs font-semibold text-emerald-800 leading-relaxed">
            {language === 'en' 
              ? "All reservation payments remain in securely escrowed hold. No cash release occurs until manufacturing completion."
              : "Tous vos fonds restent sécurisés de manière sécurisée. Aucun retrait n'a lieu avant le début de fabrication."}
          </p>
        </div>

      </div>
    </section>
  );
}
