/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MapPin, Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TestimonialsProps {
  language: Language;
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language].testimonials;

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-[#F3F6F8] via-slate-50 to-[#EBF0F3] relative overflow-hidden flex flex-col justify-center items-center">
      {/* Dynamic ambient graphic ring */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-400/5 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto space-y-4" id="testimonials-headers">
          <span className="px-3.5 py-1.5 text-xs font-bold font-mono text-blue-800 bg-[#E0E8F6] border border-blue-200 rounded-none uppercase tracking-widest inline-block">
             💬 {language === 'en' ? "BETA TEST RECORDS" : "ESSAIS CONCLUANTS"}
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-[#1A1A2E]">
            {t.title}
          </h2>
          <p className="text-base text-slate-500 font-medium font-sans">
            {t.subtitle}
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto" id="testimonials-grid">
          {t.list.map((item, id) => {
            const borderColors = [
              "from-blue-500 to-indigo-600",
              "from-indigo-600 to-purple-600",
              "from-purple-500 to-cyan-500"
            ];
            const currentGradient = borderColors[id % borderColors.length];

            return (
              <div
                key={id}
                className="flex flex-col justify-between bg-white p-8 rounded-none border border-gray-200 relative z-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden"
                id={`testimonial-card-${id}`}
              >
                {/* Lateral colorful side ribbon */}
                <div className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b ${currentGradient}`} />

                <div className="space-y-6">
                  
                  {/* Testimonial header with Stars & Quote icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-0.5" id={`stars-container-${id}`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-100 shrink-0" />
                  </div>

                  {/* Quote body */}
                  <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed italic relative font-sans font-medium">
                    "{item.quote}"
                  </p>

                </div>

                {/* Author Footer */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#1A1A2E]">
                      {item.name}
                    </h4>
                    <span className="text-[9px] font-black font-mono uppercase tracking-widest text-blue-600 block mt-1">
                      {item.metrics}
                    </span>
                  </div>
                  {/* Location indicator */}
                  <div className="flex items-center space-x-1.5 text-slate-500 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="text-[10px] uppercase font-mono tracking-wider">{item.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
