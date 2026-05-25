/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Star, Compass, Truck, Target } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface OwnershipTimelineProps {
  language: Language;
}

export default function OwnershipTimeline({ language }: OwnershipTimelineProps) {
  const t = translations[language].timeline;

  const milestoneItems = [
    {
      id: "today",
      icon: <Target className="w-5 h-5 text-green-500" />,
      date: t.stages.today.date,
      title: t.stages.today.title,
      desc: t.stages.today.desc,
      isActive: true,
    },
    {
      id: "q3_2025",
      icon: <Compass className="w-5 h-5 text-gray-400" />,
      date: t.stages.q3_2025.date,
      title: t.stages.q3_2025.title,
      desc: t.stages.q3_2025.desc,
      isActive: false,
    },
    {
      id: "q4_2025",
      icon: <Flame className="w-5 h-5 text-gray-400" />,
      date: t.stages.q4_2025.date,
      title: t.stages.q4_2025.title,
      desc: t.stages.q4_2025.desc,
      isActive: false,
    },
    {
      id: "q1_2026",
      icon: <Truck className="w-5 h-5 text-gray-400" />,
      date: t.stages.q1_2026.date,
      title: t.stages.q1_2026.title,
      desc: t.stages.q1_2026.desc,
      isActive: false,
    }
  ];

  return (
    <section id="ownership-schedule" className="py-24 md:py-32 bg-[#F8F9FA] relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto space-y-4" id="timeline-headers">
          <span className="px-3.5 py-1.5 text-xs font-bold font-mono text-[#00D4FF] bg-[#1A1A2E] rounded-full uppercase tracking-wider">
            {language === 'en' ? "CAMPAIGN ROADMAP" : "JALONS DE PRODUCTION"}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A2E]">
            {t.title}
          </h2>
          <p className="text-base text-gray-500">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-stretch max-w-6xl mx-auto" id="milestones-dashboard">
          {/* Wire frame line connector */}
          <div className="hidden md:block absolute top-[2.5rem] inset-x-12 h-0.5 bg-gray-200 z-0" />

          {milestoneItems.map((ms, idx) => (
            <div
              key={ms.id}
              className={`flex flex-col bg-white p-6 rounded-3xl border transition-all text-left relative z-10 h-full ${
                ms.isActive
                  ? 'border-green-400 shadow-md ring-2 ring-green-100/30'
                  : 'border-transparent shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                {/* Milestone active circle node */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                  ms.isActive
                    ? 'bg-green-150 border-green-500 outline-none text-green-600'
                    : 'bg-gray-50 border-gray-150 text-gray-400'
                }`}>
                  {ms.icon}
                </div>
                {/* Current node marker and slot number */}
                <span className="font-mono text-xs font-black text-gray-300">
                  0{idx + 1}
                </span>
              </div>

              {/* Date Header */}
              <span className={`text-[10px] font-extrabold font-mono tracking-widest ${
                ms.isActive ? 'text-green-600' : 'text-gray-400'
              }`}>
                {ms.date}
              </span>

              {/* Details and content */}
              <h3 className="text-base font-bold text-[#1A1A2E] mt-1.5 leading-snug">
                {ms.title}
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed mt-2 font-normal">
                {ms.desc}
              </p>

              {/* Active current marker ribbon */}
              {ms.isActive && (
                <div className="absolute -top-3 right-6 bg-green-500 text-white text-[8px] font-mono font-black tracking-widest uppercase px-2 py-0.5 rounded shadow-sm">
                  {language === 'en' ? 'ACTIVE PHASE' : 'ACTIF'}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
