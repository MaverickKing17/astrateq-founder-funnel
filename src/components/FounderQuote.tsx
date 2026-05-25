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
    <section id="founder-quote" className="relative py-24 md:py-28 bg-radial from-slate-900 via-[#0B0D19] to-[#05060C] overflow-hidden text-center flex flex-col items-center border-y border-neutral-900">
      {/* Premium ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-violet-500/5 to-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-8">
        
        {/* Quote icon accent with bright gradient */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full pointer-events-none" />
          <Quote className="w-12 h-12 text-cyan-400 rotate-180 opacity-90 relative" />
        </div>
        
        {/* Core Quote with Serif Italic Styling & gorgeous soft gradient */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-350 leading-relaxed tracking-tight max-w-3xl">
          "{t.quote}"
        </blockquote>
        
        {/* Divider accent */}
        <div className="h-[2px] w-16 bg-gradient-to-r from-blue-500 via-[#00D4FF] to-cyan-400 animate-pulse" />
        
        {/* Author details */}
        <div className="text-center space-y-1">
          <cite className="not-italic block text-sm font-black text-white tracking-widest uppercase">
            — {t.author}
          </cite>
          <span className="text-xs font-black font-mono text-cyan-400 uppercase tracking-widest block">
            {t.role}
          </span>
        </div>
        
      </div>
    </section>
  );
}
