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
    <section id="founder-quote" className="relative py-20 md:py-24 bg-[#1A1A2E] overflow-hidden text-center flex flex-col items-center">
      {/* Background glowing particles or vector lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-6">
        
        {/* Quote icon accent */}
        <Quote className="w-10 h-10 text-[#00D4FF] rotate-180 opacity-60" />
        
        {/* Core Quote with Serif Italic Styling */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed tracking-tight max-w-3xl">
          "{t.quote}"
        </blockquote>
        
        {/* Divider accent */}
        <div className="h-0.5 w-12 bg-gradient-to-r from-[#00D4FF] to-blue-600 rounded-full" />
        
        {/* Author details */}
        <div className="text-center">
          <cite className="not-italic block text-base font-bold text-white tracking-wide uppercase">
            — {t.author}
          </cite>
          <span className="text-xs font-medium text-gray-400 tracking-wider">
            {t.role}
          </span>
        </div>
        
      </div>
    </section>
  );
}
