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
    <section id="testimonials" className="py-24 md:py-32 bg-[#F8F9FA] relative overflow-hidden flex flex-col justify-center items-center">
      {/* Dynamic ambient graphic ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-100/20 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-16">
        
        {/* Header Block */}
        <div className="max-w-2xl mx-auto space-y-4" id="testimonials-headers">
          <span className="px-3.5 py-1.5 text-xs font-bold font-mono text-[#00D4FF] bg-[#1A1A2E] rounded-full uppercase tracking-wider">
            {language === 'en' ? "BETA TEST RECORDS" : "ESSAIS CONCLUANTS"}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A2E]">
            {t.title}
          </h2>
          <p className="text-base text-gray-500">
            {t.subtitle}
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto" id="testimonials-grid">
          {t.list.map((item, id) => (
            <div
              key={id}
              className="flex flex-col justify-between bg-white p-8 rounded-3xl border border-gray-150/40 relative z-10 shadow-sm hover:shadow-lg transition-all text-left"
              id={`testimonial-card-${id}`}
            >
              <div className="space-y-6">
                
                {/* 5-star header */}
                <div className="flex items-center space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 text-amber-500 fill-current" />
                  ))}
                </div>

                {/* Quote body */}
                <p className="text-sm text-[#4B5563] leading-relaxed italic relative">
                  "{item.quote}"
                </p>

              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1A1A2E]">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-bold font-mono uppercase text-[#00D4FF]">
                    {item.metrics}
                  </span>
                </div>
                {/* Location indicator */}
                <div className="flex items-center space-x-1 text-xs text-gray-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
