/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, ClipboardCheck, ArrowRight, Zap } from 'lucide-react';
import { Language } from '../types';

interface HowItWorksProps {
  language: Language;
}

export default function HowItWorks({ language }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-slate-200 relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center">
        
        {/* Header Block matching the mockup style */}
        <div className="space-y-3 max-w-2xl mx-auto mb-16 text-center">
          <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
            HOW IT WORKS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
            The Only Risk-Free Way to Own ASTRA-AI
          </h2>
        </div>

        {/* Horizontal Timeline Block */}
        <div className="relative max-w-5xl mx-auto" id="how-it-works-timeline">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-dashed border-t-2 border-dashed border-slate-200 hidden md:block z-0" />

          {/* 3 Step flex row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4" id="step1">
              <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 text-cyan-600 border border-[#00D4FF]/30 flex items-center justify-center font-mono text-base font-black shadow-sm relative z-10 bg-white">
                01
              </div>
              <div className="space-y-2">
                <h3 className="font-sans text-lg font-bold text-[#1A1A2E]">
                  60-Second Reservation Process
                </h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto font-medium leading-relaxed">
                  Choose your tier and secure your spot in our limited Founding Batch list today.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4" id="step2">
              <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 text-cyan-600 border border-[#00D4FF]/30 flex items-center justify-center font-mono text-base font-black shadow-sm relative z-10 bg-white">
                02
              </div>
              <div className="space-y-2">
                <h3 className="font-sans text-lg font-bold text-[#1A1A2E]">
                  Canadian Manufacturing & Validation Phase
                </h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto font-medium leading-relaxed">
                  We build, test, and validate every system for severe winter operations in Canada.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4" id="step3">
              <div className="w-16 h-16 rounded-full bg-[#00D4FF]/10 text-cyan-600 border border-[#00D4FF]/30 flex items-center justify-center font-mono text-base font-black shadow-sm relative z-10 bg-white">
                03
              </div>
              <div className="space-y-2">
                <h3 className="font-sans text-lg font-bold text-[#1A1A2E]">
                  10-Minute Plug-and-Play Installation
                </h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto font-medium leading-relaxed">
                  Install in minutes and connect to the app with absolutely no tools required.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
