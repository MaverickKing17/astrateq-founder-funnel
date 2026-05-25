/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Cpu, Hammer, ArrowRight, Smartphone, Activity, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

// @ts-ignore
import collectDataImage from '../assets/images/collect_data_visual_1779736249997.png';
// @ts-ignore
import aiAnalysisImage from '../assets/images/ai_analysis_visual_1779736269274.png';
// @ts-ignore
import predictProtectImage from '../assets/images/predict_protect_visual_1779736289054.png';

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
            {/* Premium Enterprise image block for Collect Data */}
            <div className="aspect-[16/9] w-full bg-[#0A0D16] border border-white/10 relative overflow-hidden group rounded-sm shadow-2xl">
              <img 
                src={collectDataImage} 
                alt="Astrateq real-time sensory data stream telemetry acquisition" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent opacity-60" />
              <div className="absolute top-2.5 left-2.5 bg-[#090C16]/95 border border-[#1E2538] px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#00D4FF] uppercase font-black">
                SENSOR ENGAGEMENT
              </div>
              <span className="absolute bottom-2.5 right-3 text-[7.5px] font-mono tracking-widest text-slate-400 uppercase font-black">
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
            {/* Premium Enterprise image block for AI Analysis */}
            <div className="aspect-[16/9] w-full bg-[#0A0D16] border border-white/10 relative overflow-hidden group rounded-sm shadow-2xl">
              <img 
                src={aiAnalysisImage} 
                alt="Neural processor chip edge active machine learning model" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent opacity-60" />
              <div className="absolute top-2.5 left-2.5 bg-[#090C16]/95 border border-[#1E2538] px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#00D4FF] uppercase font-black">
                LOCAL ANALYTICS
              </div>
              <span className="absolute bottom-2.5 right-3 text-[7.5px] font-mono tracking-widest text-slate-400 uppercase font-black">
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
            {/* Premium Enterprise image block for Predict & Protect */}
            <div className="aspect-[16/9] w-full bg-[#0A0D16] border border-white/10 relative overflow-hidden group rounded-sm shadow-2xl">
              <img 
                src={predictProtectImage} 
                alt="Predictive vehicle diagnostics alerts head-up visualization interface" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent opacity-60" />
              <div className="absolute top-2.5 left-2.5 bg-[#090C16]/95 border border-[#1E2538] px-2.5 py-1 text-[8px] font-mono tracking-widest text-[#00D4FF] uppercase font-black">
                ESC PROTOCOL ACTIVE
              </div>
              <span className="absolute bottom-2.5 right-3 text-[7.5px] font-mono tracking-widest text-slate-400 uppercase font-black">
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
