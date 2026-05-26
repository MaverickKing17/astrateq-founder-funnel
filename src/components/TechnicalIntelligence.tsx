/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Snowflake, Settings, ShieldAlert, BarChart3, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Language } from '../types';
import { translations } from '../data/translations';

const batteryPerformanceData = [
  { temp: '20°C', tempFr: '20°C', astrateq: 100, standard: 100 },
  { temp: '10°C', tempFr: '10°C', astrateq: 100, standard: 98 },
  { temp: '0°C', tempFr: '0°C', astrateq: 99, standard: 92 },
  { temp: '-10°C', tempFr: '-10°C', astrateq: 97, standard: 82 },
  { temp: '-20°C', tempFr: '-20°C', astrateq: 95, standard: 70 },
  { temp: '-30°C', tempFr: '-30°C', astrateq: 92, standard: 55 },
  { temp: '-40°C', tempFr: '-40°C', astrateq: 86, standard: 38 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 p-3 shadow-md rounded-none text-xs font-sans">
        <p className="font-mono font-bold text-slate-800 border-b border-gray-100 pb-1 mb-1.5">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-2 my-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.stroke }} />
            <span className="text-slate-500 font-medium">{entry.name}:</span>
            <span className="font-mono font-bold text-slate-900">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

interface TechnicalIntelligenceProps {
  language: Language;
}

export default function TechnicalIntelligence({ language }: TechnicalIntelligenceProps) {
  const [activeTab, setActiveTab] = useState<'winter' | 'ai' | 'compliance' | 'studies'>('winter');
  const [selectedTempIndex, setSelectedTempIndex] = useState<number>(6); // Default to '-40°C' (index 6, show critical state to emphasize ASTRA resilience)
  const t = translations[language].aeoAuthSections;

  const selectedBatteryPoint = batteryPerformanceData[selectedTempIndex] || batteryPerformanceData[6];
  const standardValue = selectedBatteryPoint.standard;

  let readinessStatus: 'Optimal' | 'Degraded' | 'Critical' = 'Optimal';
  let readinessLabelEn = 'Optimal';
  let readinessLabelFr = 'Optimal';
  let badgeColor = 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
  let dotColor = 'bg-emerald-500';

  if (standardValue >= 90) {
    readinessStatus = 'Optimal';
    readinessLabelEn = 'Optimal';
    readinessLabelFr = 'Optimale';
    badgeColor = 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
    dotColor = 'bg-emerald-500';
  } else if (standardValue >= 60) {
    readinessStatus = 'Degraded';
    readinessLabelEn = 'Degraded';
    readinessLabelFr = 'Dégradée';
    badgeColor = 'bg-amber-500/10 text-amber-700 border-amber-500/20';
    dotColor = 'bg-amber-500';
  } else {
    readinessStatus = 'Critical';
    readinessLabelEn = 'Critical';
    readinessLabelFr = 'Critique';
    badgeColor = 'bg-rose-500/10 text-rose-700 border-rose-500/20';
    dotColor = 'bg-rose-500';
  }

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

                {/* Winter Performance Metric Section with Recharts Line Chart */}
                <div className="mt-8 border-t border-gray-200/80 pt-6 space-y-4 relative" id="winter-performance-metrics">
                  
                  {/* Dynamic 'Winter Readiness' status badge in top-right of the metrics container */}
                  <div className="md:absolute md:top-6 md:right-0 flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-none shadow-xs z-10" id="winter-readiness-badge">
                    <span className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest">
                      {language === 'en' ? "Winter Readiness:" : "Préparation Hivernale:"}
                    </span>
                    <span className={`inline-flex items-center space-x-1.5 px-2 py-0.5 border text-[10px] font-mono font-black tracking-wider uppercase ${badgeColor}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                      <span>{language === 'en' ? readinessLabelEn : readinessLabelFr}</span>
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:pr-64 border-b border-gray-100 pb-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                        {language === 'en' ? "Winter Performance: Cold-Weather Battery Degradation" : "Performances hivernales : Dégradation de batterie par grand froid"}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium mt-1">
                        {language === 'en'
                          ? "Comparative testing of ASTRA-AI extreme-tolerance standby supercapacitor cell versus standard dashboard cells at arctic operating limits."
                          : "Essais comparatifs de notre supercondensateur de secours à tolérance extrême contre les cellules ordinaires par grand froid hiberne."}
                      </p>
                    </div>
                    <span className="self-start sm:self-center px-2 py-0.5 border border-blue-200 bg-blue-50 text-blue-800 font-mono text-[9px] font-bold uppercase tracking-wider shrink-0 h-fit">
                      {language === 'en' ? "Lab certified -40°C" : "Certifié en labo -40°C"}
                    </span>
                  </div>

                  {/* Simulated temperature selector to allow explicit triggers of different values */}
                  <div className="flex flex-wrap items-center gap-2 bg-slate-50 p-2.5 border border-slate-200" id="winter-temp-simulator">
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mr-1">
                      {language === 'en' ? "Simulate Temp (or hover graph):" : "Simuler temp (ou survoler le graphe) :"}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {batteryPerformanceData.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTempIndex(idx)}
                          className={`px-2.5 py-1 text-[9px] font-mono font-bold transition-all cursor-pointer border ${
                            selectedTempIndex === idx
                              ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                              : "bg-white hover:bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          {language === 'en' ? item.temp : item.tempFr}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-none border border-gray-200 relative h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={batteryPerformanceData}
                        margin={{ top: 15, right: 15, left: -20, bottom: 5 }}
                        onMouseMove={(state) => {
                          if (state && state.activeTooltipIndex !== undefined && state.activeTooltipIndex !== null) {
                            setSelectedTempIndex(state.activeTooltipIndex);
                          }
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                        <XAxis
                          dataKey={language === 'en' ? 'temp' : 'tempFr'}
                          stroke="#94a3b8"
                          fontSize={10}
                          fontFamily="monospace"
                          tickLine={false}
                        />
                        <YAxis
                          stroke="#94a3b8"
                          fontSize={10}
                          fontFamily="monospace"
                          domain={[0, 100]}
                          tickLine={false}
                          tickFormatter={(val) => `${val}%`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                          verticalAlign="top"
                          height={36}
                          iconType="circle"
                          iconSize={8}
                          wrapperStyle={{
                            fontSize: '9px',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                            fontWeight: '600',
                            paddingBottom: '10px'
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="astrateq"
                          name={language === 'en' ? "ASTRA Solid-State Supercapacitor" : "Supercondensateur ASTRA"}
                          stroke="#2563eb"
                          strokeWidth={2.5}
                          dot={{ r: 4, strokeWidth: 1, fill: '#fff' }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="standard"
                          name={language === 'en' ? "Standard Li-Ion Battery" : "Batterie Li-Ion Standard"}
                          stroke="#94a3b8"
                          strokeWidth={2}
                          strokeDasharray="4 4"
                          dot={{ r: 3 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="text-[10px] text-slate-500 leading-relaxed bg-slate-100/50 p-3 border border-gray-200 font-mono">
                    <strong className="text-slate-800">{language === 'en' ? "ENGINEERING OBSERVED RESULT:" : "RESULTAT D'OBSERVATION D'INGÉNIERIE :"}</strong>{' '}
                    {language === 'en'
                      ? "Standard consumer electrochemical cells collapse below -15°C, resulting in system reboot loops and telemetry dropouts. The ASTRA system implements dedicated thermal isolation and hyper-stable supercapacitors to safely sustain continuous safety processing down to cold-cranking limits."
                      : "Les batteries grand public s'effondrent sous -15°C, causant des redémarrages intempestifs et des pertes de télémétrie. Le système ASTRA intègre une isolation thermique active de pointe et des supercondensateurs de haute stabilité."}
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
