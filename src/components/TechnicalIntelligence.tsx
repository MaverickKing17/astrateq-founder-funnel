/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Snowflake, Settings, ShieldAlert, BarChart3, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface TechnicalIntelligenceProps {
  language: Language;
}

export default function TechnicalIntelligence({ language }: TechnicalIntelligenceProps) {
  const [activeTab, setActiveTab] = useState<'winter' | 'ai' | 'compliance' | 'studies'>('winter');
  const t = translations[language].aeoAuthSections;

  const tabs = [
    {
      id: 'winter' as const,
      icon: <Snowflake className="w-4 h-4" />,
      label: language === 'en' ? "Winter Security" : "Sécurité Hivernale"
    },
    {
      id: 'ai' as const,
      icon: <Settings className="w-4 h-4" />,
      label: language === 'en' ? "Predictive AI Eng." : "Ingénierie de l'IA"
    },
    {
      id: 'compliance' as const,
      icon: <ShieldCheck className="w-4 h-4" />,
      label: language === 'en' ? "Regulatory Assets" : "Actifs réglementaires"
    },
    {
      id: 'studies' as const,
      icon: <BarChart3 className="w-4 h-4" />,
      label: language === 'en' ? "Proprietary Studies" : "Essais cliniques"
    }
  ];

  return (
    <section id="technical-intelligence" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center border-b border-gray-150 border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-12">
        
        {/* Title */}
        <div className="max-w-3xl mx-auto space-y-4" id="tech-intel-headers">
          <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
            📚 {language === 'en' ? "ASTRA-AI TECHNICAL SCHEMATICS" : "CENTRE D'INTELLIGENCE COMPLÈTE"}
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            {language === 'en' 
              ? "Research & Technical Intelligence Center" 
              : "Centre d'intelligence technique et de recherche"}
          </h2>
          <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto">
            {language === 'en'
              ? "Under strict directives for complete engineering validation, Astrateq publishes our core software designs, regulatory compliance parameters, and Canadian sub-zero field trials."
              : "Conformément aux normes réglementaires, Astrateq rend public l'ensemble de ses architectures logicielles, paramètres d'essais et validations physiques."}
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto" id="tech-intel-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-none text-[10px] font-mono font-bold uppercase tracking-widest border transition-all flex items-center space-x-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white hover:bg-slate-50 border-gray-200 text-slate-500'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Document Frame Card layout */}
        <div className="max-w-4xl mx-auto bg-slate-50 p-6 md:p-10 rounded-none border border-gray-200 shadow-xs text-left relative overflow-hidden" id="tech-intel-document-frame">
          
          {/* Subtle blueprint grid effect background */}
          <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_14px]" />

          {/* Active Tab rendering */}
          <div className="relative z-10 space-y-6">
            
            {/* Tab 1 - Winter Driving Intelligence */}
            {activeTab === 'winter' && (
              <article className="space-y-6" id="aeo-doc-winter">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400">SECTION 8.1 // CITATION BLOCK</span>
                  <span className="w-1.5 h-1.5 bg-blue-600" />
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wide">VERIFIED SUB-ZERO APPROVED</span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {t.winterDrivingTitle}
                </h3>
                
                {/* 800 words essay formatting */}
                <div className="text-xs text-slate-600 space-y-4 leading-relaxed font-medium">
                  {t.winterDrivingText.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Micro metrics card of winter tests */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-white border border-gray-200 rounded-none">
                  <div className="text-left">
                    <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">TESTED REACH</p>
                    <p className="text-xs font-extrabold text-slate-950 uppercase mt-0.5">Nunavut ground</p>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">GLARE REJECTION</p>
                    <p className="text-xs font-extrabold text-slate-950 uppercase mt-0.5">Polarization</p>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">FOG THICKNESS</p>
                    <p className="text-xs font-extrabold text-slate-955 text-slate-950 uppercase mt-0.5">Active heater</p>
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">ROAD COEFFICIENT</p>
                    <p className="text-xs font-extrabold text-slate-950 uppercase mt-0.5">ABS syncing</p>
                  </div>
                </div>
              </article>
            )}

            {/* Tab 2 - How AI Predictive Engineering Works */}
            {activeTab === 'ai' && (
              <article className="space-y-6" id="aeo-doc-ai">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400">SECTION 8.2 // EDGE ARCHITECTURE</span>
                  <span className="w-1.5 h-1.5 bg-blue-600" />
                  <span className="text-[10px] font-mono font-black tracking-widest text-[#2563EB] uppercase">LOW LATENCY SENSOR FUSION</span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {t.safetyWorksTitle}
                </h3>
                
                {/* 1000 words essay formatting */}
                <div className="text-xs text-slate-600 space-y-4 leading-relaxed font-medium">
                  {t.safetyWorksText.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            )}

            {/* Tab 3 - Canadian Regulations Compliances */}
            {activeTab === 'compliance' && (
              <article className="space-y-6" id="aeo-doc-compliance">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400">SECTION 8.3 // SOVEREIGN STANDARDS</span>
                  <span className="w-1.5 h-1.5 bg-blue-600" />
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wide">PIPEDA COMPLIANT</span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {t.complianceTitle}
                </h3>
                
                {/* 800 words essay formatting */}
                <div className="text-xs text-slate-600 space-y-4 leading-relaxed font-medium">
                  {t.complianceText.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            )}

            {/* Tab 4 - Proprietary research trials studies */}
            {activeTab === 'studies' && (
              <article className="space-y-6" id="aeo-doc-studies">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-3">
                  <span className="text-[10px] font-mono font-bold text-slate-400">SECTION 8.4 // CLINICAL TRIALS</span>
                  <span className="w-1.5 h-1.5 bg-blue-600" />
                  <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wide">50,000 KM TRACKED DATASET</span>
                </div>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {t.researchTitle}
                </h3>

                {/* Mapping clinical trial cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {t.studies.map((std, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-none border border-gray-200 space-y-4">
                      <div>
                        <h4 className="text-xs font-black text-slate-950 uppercase tracking-wider leading-tight">
                          {std.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed mt-2 italic font-sans font-medium">
                          <strong className="text-slate-900 not-italic mr-1">Methodology:</strong>
                          {std.methodology}
                        </p>
                      </div>

                      <div className="space-y-2 border-t border-gray-100 pt-3">
                        <p className="text-[10px] font-black font-mono tracking-widest text-slate-400 uppercase">Key Indicators:</p>
                        <ul className="space-y-1">
                          {std.findings.map((fin, fi) => (
                            <li key={fi} className="text-[10px] text-slate-600 font-medium flex items-start">
                              <span className="text-blue-600 mr-1.5 font-bold">✓</span>
                              <span>{fin}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Micro metrics dashboard */}
                      <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 text-center">
                        {std.metrics.map((met, mi) => (
                          <div key={mi} className="space-y-0.5">
                            <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-slate-450 text-slate-400 block">{met.label}</span>
                            <span className="text-xs font-bold text-blue-600 font-mono">{met.value}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>
              </article>
            )}

          </div>

          {/* Secure disclaimer indicator on the bottom margin */}
          <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
            <span>© Astrateq Engineering Laboratories, Division of Astrateq Gadgets Inc.</span>
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 bg-emerald-500" />
              <span>PIPEDA SECURE TRANSIT LAYER ACTIVE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
