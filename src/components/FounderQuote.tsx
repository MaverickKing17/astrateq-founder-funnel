/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FounderQuoteProps {
  language: Language;
}

export default function FounderQuote({ language }: FounderQuoteProps) {
  const t = translations[language].founderQuote;

  return (
    <section id="founder-quote" className="relative py-20 bg-[#111827] overflow-hidden text-center flex flex-col items-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-6">
        
        {/* Quote symbol */}
        <Quote className="w-10 h-10 text-[#00D4FF] opacity-90 rotate-180" />
        
        {/* Editorial Serif Quote */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed tracking-tight max-w-3xl">
          "My mother’s battery died during a deep freeze in Ontario while she was driving home alone at night. The car never warned her. ASTRA-AI was built so families could know something is wrong before the roadside emergency happens. It’s about protecting the people we love, quietly."
        </blockquote>
        
        {/* Author Label block */}
        <div className="text-center pt-2">
          <cite className="not-italic block text-sm font-bold text-[#FFFFFF] uppercase tracking-widest">
            — Damian
          </cite>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mt-1">
            Founder, Astrateq Gadgets
          </span>
        </div>
        
      </div>
    </section>
  );
}
