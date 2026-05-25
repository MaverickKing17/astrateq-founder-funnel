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
    <section id="how-it-works" className="py-24 md:py-32 bg-[#F8F9FA] relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto space-y-4" id="how-it-works-headers">
          <span className="text-xs font-extrabold font-mono text-[#00D4FF] bg-[#1A1A2E] px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            {language === 'en' ? 'SIMPLE TIMELINE' : 'PROCESSUS SANS FAILLE'}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A2E]">
            {t.title}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            {language === 'en' 
              ? "We believe in extreme transparency. Here is exactly what happens from the split-second you lock your slot to securing your driving safety."
              : "Nous croyons en une transparence absolue. Voici les étapes de votre réservation jusqu'au calibrage de votre boîtier."}
          </p>
        </div>

        {/* Process Connector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto items-stretch" id="how-it-works-steps">
          {/* Timeline Connector Wire Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[2.5rem] inset-x-12 h-0.5 bg-gray-200 z-0" />
          
          {steps.map((st) => {
            const isSelected = activeStep === st.id;
            return (
              <div
                key={st.id}
                onClick={() => setActiveStep(st.id)}
                className={`flex flex-col bg-white rounded-3xl p-6 border-2 transition-all relative z-10 cursor-pointer text-left h-full ${
                  isSelected
                    ? 'border-[#00D4FF] shadow-lg scale-102'
                    : 'border-transparent shadow-sm hover:border-gray-200'
                }`}
                id={`how-works-step-${st.id}`}
              >
                {/* Step indicator node */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white bg-[#1A1A2E] transform transition-transform ${
                    isSelected ? 'scale-110 shadow-lg' : 'opacity-80'
                  }`}>
                    {st.icon}
                  </div>
                  <span className="font-mono text-xs font-black text-gray-300">
                    0{st.id + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1A1A2E] leading-snug">
                  {st.label}
                </h3>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">
                  {st.desc}
                </p>

                {/* Collapsible detail panel that expands when active */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex-grow">
                  <p className="text-xs text-[#4B5563] leading-relaxed font-sans">
                    {st.detail}
                  </p>
                </div>

                {/* Selection state marker */}
                {isSelected && (
                  <div className="absolute -bottom-2 right-6 bg-[#00D4FF] text-[#1A1A2E] px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider shadow-sm">
                    {language === 'en' ? 'Active Focus' : 'Focus Actuel'}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Badge beneath steps */}
        <div className="inline-flex items-center space-x-2 bg-green-50 p-3.5 rounded-full border border-green-200/50 text-left max-w-lg shadow-sm" id="process-trust-badge">
          <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
          <p className="text-xs font-bold text-green-900 leading-tight">
            {language === 'en' 
              ? "All reservation payments remain in escrow. No cash release occurs until manufacturing completion."
              : "Tous vos fonds restent sécurisés. Aucun retrait n'a lieu avant le début de fabrication."}
          </p>
        </div>

      </div>
    </section>
  );
}
