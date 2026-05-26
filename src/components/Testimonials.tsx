/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from '../types';

interface TestimonialsProps {
  language: Language;
}

export default function Testimonials({ language }: TestimonialsProps) {
  return (
    <section id="alpha-insights" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Layout */}
        <div className="space-y-3 max-w-3xl text-left mb-16">
          <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
            EARLY ALPHA RESEARCH INSIGHTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
            Analyzing over 12,000 kilometres of cold-weather driving diagnostics across Canada.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="alpha-insights-grid">
          
          {/* Left Column: 3 Vertical Logs */}
          <div className="lg:col-span-6 space-y-6" id="alpha-logs-column">
            
            {/* Log 1 */}
            <div className="p-6 bg-slate-50 border border-slate-200 relative text-left" id="alpha-log-1">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#00D4FF]" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-black tracking-widest text-[#1E2538] uppercase">
                  LOG.001 - CALGARY, AB (SUB-ZERO CALIBRATION)
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  FEB 2025
                </span>
              </div>
              <p className="text-xs text-slate-650 font-medium leading-relaxed">
                Successfully verified 100% laser detection accuracy on icy roads during a -32°C blizzard, detecting lane markers through blowing snow.
              </p>
            </div>

            {/* Log 2 */}
            <div className="p-6 bg-slate-50 border border-slate-200 relative text-left" id="alpha-log-2">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#00D4FF]" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-black tracking-widest text-[#1E2538] uppercase">
                  LOG.002 - HUDSON BAY, NU (THERMODYNAMIC SCANNING)
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  MAR 2025
                </span>
              </div>
              <p className="text-xs text-slate-650 font-medium leading-relaxed">
                Tested vehicle temperature registers on OBD-II ports; successfully predicted high starter battery resistance 14 hours before physical failure.
              </p>
            </div>

            {/* Log 3 */}
            <div className="p-6 bg-slate-50 border border-slate-200 relative text-left" id="alpha-log-3">
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#00D4FF]" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-black tracking-widest text-[#1E2538] uppercase">
                  LOG.003 - MONT-TREMBLANT, QC (COLLISION PREDICTION)
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  DEC 2024
                </span>
              </div>
              <p className="text-xs text-slate-650 font-medium leading-relaxed">
                Pre-collision optics calibrated successfully over severe, unlit snowy curves, reducing localized lane warning latency by 35%.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Stats Panel */}
          <div className="lg:col-span-6 bg-[#111827] text-white p-8 border border-slate-800 shadow-xl text-left" id="alpha-stats-panel">
            <div className="space-y-6">
              
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[9px] font-mono font-black tracking-widest text-[#00D4FF] uppercase">
                  LIVE COMPILATION DATA READOUTS
                </span>
              </div>

              {/* Stats entries */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                
                {/* Stat 1 */}
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-mono font-black tracking-tight text-[#00D4FF] block">
                    12,450 km
                  </span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-slate-450 block leading-tight">
                    Total Real-World Distance Tracked
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-mono font-black tracking-tight text-[#00D4FF] block">
                    100%
                  </span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-slate-455 block leading-tight">
                    Passive CAN-bus Compatibility Rate
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-mono font-black tracking-tight text-[#00D4FF] block">
                    110 ms
                  </span>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-slate-460 block leading-tight">
                    Stereo Collision Avoidance Reaction Time
                  </span>
                </div>

              </div>

              {/* Data sovereignty footer note */}
              <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400 font-medium leading-relaxed flex items-start space-x-2.5">
                <span className="text-[#00D4FF]">🍁</span>
                <p>
                  All live telemetry is compiled, stored, and processed securely inside Canada to protect your privacy and ensure compliance with provincial privacy guidelines.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
