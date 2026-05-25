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
    <section id="founder-quote" className="relative py-20 md:py-24 bg-slate-900 overflow-hidden text-center flex flex-col items-center border-y border-slate-850">
      {/* Background glowing particles or vector lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-6">
        
        {/* Quote icon accent */}
        <Quote className="w-10 h-10 text-blue-500 rotate-180 opacity-70" />
        
        {/* Core Quote with Serif Italic Styling */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed tracking-tight max-w-3xl">
          "{t.quote}"
        </blockquote>
        
        {/* Divider accent */}
        <div className="h-[2px] w-12 bg-blue-500" />
        
        {/* Author details */}
        <div className="text-center">
          <cite className="not-italic block text-sm font-black text-white tracking-widest uppercase">
            — {t.author}
          </cite>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1.5 block">
            {t.role}
          </span>
        </div>
        
      </div>
    </section>
  );
}
