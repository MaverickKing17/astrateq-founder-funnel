/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Cpu, Hammer, ArrowRight, Smartphone, Activity, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HowItWorksProps {
  language: Language;
}

export default function HowItWorks({ language }: HowItWorksProps) {
  const t = translations[language].howItWorks;

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#05070F] text-white relative flex flex-col justify-center items-center overflow-hidden border-b border-white/5">
      
      {/* Dynamic ambient vector glows in background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[60rem] h-[30rem] bg-blue-900/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        {/* Header - Left Aligned to match mockup style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-10 mb-16 gap-6 text-left" id="how-it-works-headers">
          <div className="space-y-4">
            <span className="text-blue-400 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
              HOW ASTRATEQ WORKS
            </span>
            <h2 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tighter text-white leading-none">
              Intelligence Behind Every Mile
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl">
              Astrateq uses advanced AI models and real-time data to understand your vehicle and environment—so you can drive with confidence.
            </p>
          </div>
          
          <div className="pt-2 shrink-0">
            <button
              onClick={() => {
                const targetElement = document.getElementById('technical-intelligence');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#00D4FF] hover:text-white transition-colors cursor-pointer group"
            >
              <span>Learn More About Our Technology</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3 Steps Columns with Arrow connectors - Styled strictly as shown in the layout image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative items-stretch max-w-6xl mx-auto w-full text-left" id="how-it-works-steps">
          
          {/* Step 1: Collect Data */}
          <div className="flex flex-col space-y-5" id="how-works-step-1">
            {/* Vector Illustration block for Collect Data */}
            <div className="aspect-[16/9] w-full bg-[#0A0D16] border border-white/5 flex items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              {/* Connected cars canvas representation */}
              <svg viewBox="0 0 160 90" className="w-[120px] h-auto text-blue-500/80">
                <rect x="10" y="25" width="40" height="24" rx="3" className="fill-none stroke-blue-500/30 stroke-1" />
                <rect x="70" y="45" width="40" height="24" rx="3" className="fill-none stroke-blue-400/90 stroke-1.5" />
                <circle cx="90" cy="45" r="4" className="fill-emerald-400 animate-ping" />
                <circle cx="90" cy="45" r="2" className="fill-emerald-400" />
                {/* Connection links */}
                <path d="M45 35 Q60 30 70 47" className="fill-none stroke-blue-400 stroke-[0.75] stroke-dasharray-[3,3]" strokeDasharray="2,2" />
                <path d="M90 20 L90 35" className="stroke-blue-500/40 stroke-0.5" />
                <circle cx="90" cy="18" r="6" className="fill-none stroke-blue-400/20" />
                <circle cx="90" cy="18" r="1.5" className="fill-[#00D4FF]" />
              </svg>
              <span className="absolute bottom-2 right-3 text-[7.5px] font-mono tracking-widest text-slate-500 uppercase font-black">
                DEVICE TELEMETRY STREAM
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[#00D4FF] tracking-tight uppercase font-mono">
                1. Collect Data
              </h3>
              <p className="text-sm font-semibold text-white">
                Seamless Edge Gathering
              </p>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Securely gathers raw telemetry from your vehicle's ECU engine control and high-definition optical camera streams.
              </p>
            </div>
          </div>

          {/* Step 2: AI Analysis */}
          <div className="flex flex-col space-y-5" id="how-works-step-2">
            {/* Vector Illustration block for AI Analysis */}
            <div className="aspect-[16/9] w-full bg-[#0A0D16] border border-white/5 flex items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial from-[#00D4FF]/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              {/* Holographic CPU central unit representation */}
              <div className="relative flex items-center justify-center">
                <Cpu className="w-12 h-12 text-[#00D4FF]/30 stroke-[1]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] font-mono font-black text-white bg-blue-600/90 px-2 py-1 tracking-widest border border-blue-400">
                    AI
                  </span>
                </div>
              </div>
              <span className="absolute bottom-2 right-3 text-[7.5px] font-mono tracking-widest text-slate-500 uppercase font-black">
                NPU LOCAL COMPUTING
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[#00D4FF] tracking-tight uppercase font-mono">
                2. AI Analysis
              </h3>
              <p className="text-sm font-semibold text-white">
                Real-Time Local Interpretation
              </p>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Integrated edge neural processors map complex patterns and temporal trends instantly without sending data to servers.
              </p>
            </div>
          </div>

          {/* Step 3: Predict & Protect */}
          <div className="flex flex-col space-y-5" id="how-works-step-3">
            {/* Vector Illustration block for Predict & Protect */}
            <div className="aspect-[16/9] w-full bg-[#0A0D16] border border-white/5 flex items-center justify-center p-4 relative overflow-hidden group">
              <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              {/* Smartphone mockup outline */}
              <div className="relative flex flex-col items-center bg-[#07090F] border border-white/10 w-16 h-28 rounded-md p-1.5 shadow-xl">
                <div className="w-8 h-1 bg-white/20 rounded-full mb-1" />
                <div className="w-full bg-blue-950/70 border border-blue-900/40 rounded-sm p-1 flex flex-col justify-center space-y-0.5">
                  <span className="text-[5.5px] font-mono font-extrabold text-blue-400 uppercase leading-none">ALERT!</span>
                  <div className="w-full h-1.5 bg-blue-500/20 rounded-[1px]" />
                </div>
              </div>
              <span className="absolute bottom-2 right-3 text-[7.5px] font-mono tracking-widest text-slate-500 uppercase font-black">
                SECURE ESCALATION LAYER
              </span>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[#00D4FF] tracking-tight uppercase font-mono">
                3. Predict & Protect
              </h3>
              <p className="text-sm font-semibold text-white">
                Proactive Hazard Notifications
              </p>
              <p className="text-xs text-slate-300 font-medium leading-relaxed">
                Instantly predicts vehicle mechanical failure trends, monitors road status, and triggers warnings before incidents arise.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
