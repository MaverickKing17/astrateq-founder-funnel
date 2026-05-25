/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Loader2, 
  Activity, 
  Zap,
  Check
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { YEARS, VEHICLE_MAKES } from '../data/compatibility_db';
// @ts-ignore
import carImage from '../assets/images/modern_car_profile_1779735350578.png';

interface CompatibilityProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function Compatibility({ language, onScrollToSection }: CompatibilityProps) {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  
  // Interactive Custom HUD & Simulation States
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanStep, setScanStep] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const t = translations[language].compatibility;
  const currentModels = VEHICLE_MAKES.find(m => m.name === selectedMake)?.models || [];

  // Popular Canadians vehicle check quick presets
  const popularPresets = [
    { name: 'Toyota RAV4', year: '2022', make: 'Toyota', model: 'RAV4' },
    { name: 'Honda Civic', year: '2020', make: 'Honda', model: 'Civic' },
    { name: 'Ford F-150', year: '2019', make: 'Ford', model: 'F-150' },
    { name: 'Tesla Model Y', year: '2023', make: 'Tesla', model: 'Model Y' },
  ];

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    setShowSuccess(false);
  };

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value);
    setSelectedModel('');
    setShowSuccess(false);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
    setShowSuccess(false);
  };

  // Triggers simulated step-by-step telemetry check
  const triggerCompatibilityCheck = () => {
    setIsScanning(true);
    setScanStep(0);
    setShowSuccess(false);
  };

  const handleCheck = () => {
    if (selectedYear && selectedMake && selectedModel) {
      triggerCompatibilityCheck();
    }
  };

  // Preset quick triggers
  const handlePresetClick = (preset: typeof popularPresets[0]) => {
    setSelectedYear(preset.year);
    setSelectedMake(preset.make);
    setSelectedModel(preset.model);
    setIsScanning(true);
    setScanStep(0);
    setShowSuccess(false);
  };

  // Interval timer for step indicators
  useEffect(() => {
    if (!isScanning) return;

    const timer1 = setTimeout(() => setScanStep(1), 400);
    const timer2 = setTimeout(() => setScanStep(2), 850);
    const timer3 = setTimeout(() => setScanStep(3), 1300);
    const timer4 = setTimeout(() => {
      setIsScanning(false);
      setShowSuccess(true);
    }, 1650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isScanning]);

  // Specific dynamic metrics derived based on selected brands
  const getSimulatedBrandSpec = (make: string) => {
    switch (make) {
      case 'Toyota':
        return {
          protocol: 'ISO 15765-4 (CAN-6)',
          lensCal: '119.5° calibrated',
          freq: '42 Hz stream',
          desc: language === 'en' ? 'Direct fuel injector mapping & tire telemetry calibration aligned.' : 'Cartographie directe injecteurs et calibration télémétrie pneus alignées.'
        };
      case 'Honda':
        return {
          protocol: 'ISO 14230-4 (KWP2000)',
          lensCal: '120.0° auto-calibrated',
          freq: '45 Hz stream',
          desc: language === 'en' ? 'Optimized CAN-bus payload monitoring for VTEC diagnostic registers.' : 'Surveillance de charge utile CAN-bus optimisée pour les registres de diagnostic.'
        };
      case 'Ford':
        return {
          protocol: 'SAE J1939 (Heavy CAN)',
          lensCal: '118.2° calibrated',
          freq: '40 Hz stream',
          desc: language === 'en' ? 'High current battery management registers index mapping successfully.' : 'Cartographie des registres de batterie à forte intensité indexée avec succès.'
        };
      case 'Tesla':
        return {
          protocol: 'Proprietary Tesla Gateway',
          lensCal: '122.4° full aperture',
          freq: '50 Hz stream',
          desc: language === 'en' ? 'Seamless integration with dashboard high-voltage safety interlocks.' : 'Intégration transparente avec les circuits de verrouillage haute tension.'
        };
      default:
        return {
          protocol: 'ISO 15765-4 (CAN-bus)',
          lensCal: '120° Dynamic Auto',
          freq: '40 Hz stream',
          desc: language === 'en' ? 'Complete telemetry link verified across generic OBD PID tables.' : 'Liaison de télémétrie complète vérifiée sur les tables OBD PID génériques.'
        };
    }
  };

  const currentBrandSpec = getSimulatedBrandSpec(selectedMake);

  // Hotspots definitions
  const hotspots = [
    {
      id: 'lens',
      title: language === 'en' ? 'Dual Active Lenses' : 'Optiques assistées',
      coords: { x: 260, y: 48 },
      desc: language === 'en' 
        ? 'Mounted behind rearview mirror. High-definition stereo optics tracking lane layout, safety vectors, and Canadian road margins.'
        : 'Alignées sur le rétroviseur. Double capteur HD mesurant trajectoires, marges de sécurité et conditions de gel.'
    },
    {
      id: 'obd',
      title: language === 'en' ? 'OBD-II Diagnostic Core' : 'Noyau OBD-II',
      coords: { x: 140, y: 78 },
      desc: language === 'en'
        ? 'Plugs below driver steering column. Continuous CANbus polling of engine temps, oil index, dynamic PIDs and sensor telemetry.'
        : 'Raccordé sous le volant. Interrogation passive en temps réel: régimes, températures de boîte, alertes d\'usure.'
    },
    {
      id: 'edge',
      title: language === 'en' ? 'AI Edge Processor' : 'Processeur Edge IA',
      coords: { x: 195, y: 75 },
      desc: language === 'en'
        ? 'Proprietary automotive processor. Models local computer vision safety layers and predictive diagnostics with zero latency.'
        : 'Co-processeur Astrateq. Héberge localement les réseaux de neurones pour la sécurité active sans aucune latence.'
    }
  ];

  return (
    <section id="compatibility" className="py-24 md:py-32 bg-gradient-to-b from-[#F3F7FA] via-white to-white relative overflow-hidden flex flex-col justify-center items-center border-b border-gray-200">
      {/* Background Graphic Blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Vehicle Simulation HUD */}
          <div className="lg:col-span-6 space-y-6 text-left" id="compatibility-left">
            <span className="inline-flex items-center space-x-1.5 border border-blue-250 bg-gradient-to-r from-blue-50 to-indigo-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest border-blue-500/20">
               🚗 {language === 'en' ? "VEHICLE AUDIT WORKBENCH" : "CONSOLE DE CONFORMITÉ CAN-BUS"}
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
              {t.title}
            </h2>
            <p className="text-base text-slate-600 font-semibold leading-relaxed">
              {t.subtitle}
            </p>

            {/* HIGH-TECH INTERACTIVE VEHICLE HUD WITH PHOTOREALISTIC VEHICLE DETAIL */}
            <div className="border border-[#1E2538] rounded-none p-5 relative overflow-hidden bg-[#0A0D16] shadow-2xl shadow-neutral-950">
              <div className="absolute top-2 right-2 flex items-center space-x-1.5 text-[8px] font-extrabold font-mono text-slate-400 uppercase tracking-widest bg-[#131926] border border-neutral-800 px-2.5 py-1 z-20">
                <span className={`w-1.5 h-1.5 rounded-full ${isScanning ? 'bg-amber-500 ' : 'bg-blue-500 '}animate-pulse`} />
                <span>{isScanning ? 'READING DATA' : 'SYS STABLE'}</span>
              </div>

              {/* Realistic Car Canvas wrapper */}
              <div className="relative py-4 aspect-[420/160] w-full rounded-none overflow-hidden my-1 bg-[#06080F]">
                {/* Photorealistic car image layer */}
                <img 
                  src={carImage} 
                  alt="Astrateq OBD-II Diagnostic Vehicle" 
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                  referrerPolicy="no-referrer"
                />
                
                {/* Techy high-contrast overlay to dim background slightly for HUD legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080F]/80 via-transparent to-[#06080F]/45 pointer-events-none" />

                <svg viewBox="0 0 420 160" className="absolute inset-0 w-full h-full z-15" id="vector-car-outline">
                  {/* Grid background markers for precision engineering feeling */}
                  <g className="stroke-white/10 stroke-[0.5]" strokeDasharray="3,3">
                    <line x1="0" y1="40" x2="420" y2="40" />
                    <line x1="0" y1="80" x2="420" y2="80" />
                    <line x1="0" y1="120" x2="420" y2="120" />
                    <line x1="100" y1="0" x2="100" y2="160" />
                    <line x1="200" y1="0" x2="200" y2="160" />
                    <line x1="300" y1="0" x2="300" y2="160" />
                  </g>

                  {/* Dynamic laser scanning line during isScanning with neon effect */}
                  {isScanning && (
                    <motion.line 
                      x1="45" y1="0" x2="45" y2="160"
                      className="stroke-blue-400 stroke-[2.5]"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.85))' }}
                      animate={{ x: [45, 375, 45] }}
                      transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                    />
                  )}

                  {/* Interactive Hotspots points on SVG */}
                  {hotspots.map((hs) => {
                    const isActive = activeHotspot === hs.id;
                    const isSuccessState = showSuccess && !isScanning;
                    return (
                      <g key={hs.id} className="cursor-pointer group" onClick={() => setActiveHotspot(isActive ? null : hs.id)}>
                        {/* Dynamic pulsing glow circles */}
                        <circle 
                          cx={hs.coords.x} 
                          cy={hs.coords.y} 
                          r={isActive ? 15 : 10} 
                          className={`fill-none stroke-[2] transition-all duration-300 ${
                            isSuccessState ? 'stroke-emerald-400' : 'stroke-blue-400'
                          } ${isActive ? 'animate-ping' : 'animate-pulse'}`}
                        />
                        <circle 
                          cx={hs.coords.x} 
                          cy={hs.coords.y} 
                          r={isActive ? 6 : 4} 
                          className={`transition-all duration-300 ${
                            isSuccessState ? 'fill-emerald-400' : 'fill-blue-500 hover:fill-blue-400'
                          }`}
                          style={{ filter: isSuccessState ? 'drop-shadow(0 0 4px #10b981)' : 'drop-shadow(0 0 4px #3b82f6)' }}
                        />
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Dynamic explanations box for vector hotspots styled for dark theme */}
              <div className="bg-[#131926] border border-neutral-800 px-4 py-3 min-h-[75px] text-xs leading-relaxed relative flex flex-col justify-center rounded-none mt-2.5">
                {activeHotspot ? (
                  <div>
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                      <span className="font-extrabold text-white tracking-tight uppercase text-[10px] font-mono">
                        {hotspots.find(h => h.id === activeHotspot)?.title}
                      </span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      {hotspots.find(h => h.id === activeHotspot)?.desc}
                    </p>
                  </div>
                ) : (
                  <div className="text-center text-slate-400 py-2">
                    <p className="font-bold text-[9px] uppercase tracking-widest font-mono text-blue-400 animate-pulse mb-1">
                      💡 {language === 'en' ? "INTERACTIVE REALISTIC HUD" : "HUD RÉALISTE ET INTERACTIF"}
                    </p>
                    <p className="text-[10px] text-slate-350 font-semibold">
                      {language === 'en' 
                        ? 'Tap any glowing feedback node over the premium vehicle body to inspect hardware calibration points.'
                        : 'Touchez n’importe quel point de contrôle lumineux sur la silhouette du véhicule pour inspecter la calibration.'
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Structured warranty statement box */}
            <div className="p-5 bg-white rounded-none border border-gray-200 flex items-center space-x-4 text-sm relative shadow-md shadow-gray-100/50">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
              <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-none flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5 shrink-0" />
              </div>
              <p className="text-slate-600 font-bold text-xs uppercase tracking-wide leading-relaxed">
                {language === 'en'
                  ? "Meets full Canadian motor security standard compliance limits. Passive link respects all active vehicle warranty guidelines."
                  : "Conforme aux exigences règlementaires canadiennes d'OBD. Notre couplage passif préserve l'intégralité de la garantie d'origine."}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Selector & Scanners */}
          <div className="lg:col-span-6 bg-[#0B0E17] p-8 rounded-none border border-neutral-800 shadow-2xl relative w-full overflow-hidden" id="compatibility-form">
            {/* Blue cyber light source */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 text-left relative z-10">
              
              {/* Form title */}
              <div className="flex items-center space-x-2.5 pb-3 border-b border-neutral-800 col-span-12">
                <Car className="w-5 h-5 text-blue-400" />
                <h3 className="font-sans text-xs font-black uppercase tracking-widest text-white mt-0.5">
                  {language === 'en' ? "Active Live Compatibility Check" : "Analyseur de Compatibilité en Direct"}
                </h3>
              </div>

              {/* POPULAR CANADIAN VEHICLES QUICK PRESETS */}
              <div className="space-y-2">
                <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                  ⚡ {language === 'en' ? "POPULAR CANADIAN PRESETS (TAP TO INSTANT SCAN)" : "RÉGLAGES RAPIDES CANADIENS (VÉRIFICATION EN 1 CLIC)"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {popularPresets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => handlePresetClick(preset)}
                      className="px-3 py-2 bg-[#131926] hover:bg-blue-600/25 text-[10px] font-bold text-slate-350 border border-neutral-800 hover:border-blue-500 transition-all text-left truncate flex items-center justify-between group rounded-none"
                    >
                      <span className="group-hover:text-white">{preset.name}</span>
                      <span className="text-[8px] font-mono font-normal opacity-50 bg-[#0B0E17] px-1 py-0.5 leading-none rounded-none">
                        {preset.year}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector suite layout */}
              <div className="space-y-4 pt-1">
                
                {/* Model Years */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-year" className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                    {language === 'en' ? "Model Year" : "Année du modèle"}
                  </label>
                  <select
                    id="comp-year"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-full bg-[#131926] text-white border border-neutral-800 rounded-none px-4 py-3 text-xs font-bold uppercase tracking-wider focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  >
                    <option value="" className="text-slate-900 bg-white">-- {t.placeholderYear} --</option>
                    {YEARS.map(y => <option key={y} value={y} className="text-slate-900 bg-white">{y}</option>)}
                  </select>
                </div>

                {/* Make selector */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-make" className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                    {language === 'en' ? "Vehicle Manufacturer" : "Constructeur / Marque"}
                  </label>
                  <select
                    id="comp-make"
                    value={selectedMake}
                    onChange={handleMakeChange}
                    disabled={!selectedYear}
                    className="w-full bg-[#131926] text-white border border-neutral-800 rounded-none px-4 py-3 text-xs font-bold uppercase tracking-wider focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none disabled:opacity-30 disabled:bg-[#0E121E]"
                  >
                    <option value="" className="text-slate-900 bg-white">-- {t.placeholderMake} --</option>
                    {VEHICLE_MAKES.map(m => <option key={m.name} value={m.name} className="text-slate-900 bg-white">{m.name}</option>)}
                  </select>
                </div>

                {/* Model selector */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-model" className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                    {language === 'en' ? "Vehicle Model" : "Modèle exact"}
                  </label>
                  <select
                    id="comp-model"
                    value={selectedModel}
                    onChange={handleModelChange}
                    disabled={!selectedMake}
                    className="w-full bg-[#131926] text-white border border-neutral-800 rounded-none px-4 py-3 text-xs font-bold uppercase tracking-wider focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none disabled:opacity-30 disabled:bg-[#0E121E]"
                  >
                    <option value="" className="text-slate-900 bg-white">-- {t.placeholderModel} --</option>
                    {currentModels.map(mod => <option key={mod} value={mod} className="text-slate-900 bg-white">{mod}</option>)}
                  </select>
                </div>

              </div>

              {/* Scan Action Button */}
              <button
                onClick={handleCheck}
                disabled={isScanning || !selectedYear || !selectedMake || !selectedModel}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-widest rounded-none transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-blue-500/10 disabled:opacity-30 disabled:bg-neutral-800 disabled:from-neutral-800 disabled:to-neutral-800 disabled:cursor-not-allowed"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin text-white" />
                    <span>{language === 'en' ? 'Scanning ECM Ports...' : 'Analyse du port OBD-II...'}</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4" />
                    <span>{t.btnCheck}</span>
                  </>
                )}
              </button>

              {/* INTERACTIVE SCANNING TELEMETRY FEED TERMINAL */}
              <AnimatePresence>
                {isScanning && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    id="scanning-terminal-hud"
                    className="p-4 bg-slate-950/95 border border-blue-900 font-mono text-[10px] space-y-1 text-blue-400 select-none text-left rounded-none overflow-hidden"
                  >
                    <p className="text-slate-500 flex items-center justify-between">
                      <span>SESSION ADAPTER-ASTRATEQ#CAN-v4.1</span>
                      <span className="animate-pulse">● FEEDING SCAN</span>
                    </p>
                    <div className="space-y-1.5 pt-1.5">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-indigo-400">[0.00s]</span>
                        <span>LINK: Handshaking with {selectedMake || "vehicle"} transponder...</span>
                        {scanStep >= 0 && <span className="text-emerald-400 font-bold">OK</span>}
                      </div>
                      
                      {scanStep >= 1 && (
                        <div className="flex items-center space-x-1.5">
                          <span className="text-indigo-400">[0.45s]</span>
                          <span>OBD2: Probing PID tables & testing response limits...</span>
                          {scanStep >= 1 && <span className="text-emerald-400 font-black">✓ REGISTERED</span>}
                        </div>
                      )}
                      
                      {scanStep >= 2 && (
                        <div className="flex items-center space-x-1.5">
                          <span className="text-indigo-400">[1.00s]</span>
                          <span>AI: Testing lens dual calibration offsets...</span>
                          {scanStep >= 2 && <span className="text-[#00D4FF] font-black">1.13 TFLOPS</span>}
                        </div>
                      )}

                      {scanStep >= 3 && (
                        <div className="flex items-center space-x-1.5 font-bold text-emerald-400">
                          <span className="text-indigo-400">[1.45s]</span>
                          <span>SYS: Calibration locked! Vehicle is entirely compliant.</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* COMPATIBILITY RESULTS BLOCK (FLEXIBLE & SPECIFIC IN DETAIL) */}
              <AnimatePresence>
                {showSuccess && !isScanning && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="p-5 bg-gradient-to-b from-emerald-950/60 to-emerald-950/90 border border-emerald-500/30 text-left space-y-4 rounded-none h-auto"
                    id="compatibility-success-panel"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-none border border-emerald-500/20 bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0">
                        <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                          {t.successMessage}
                        </p>
                        <p className="text-xs font-semibold text-emerald-200/90 leading-snug">
                          {selectedYear} {selectedMake} {selectedModel} 
                          {language === 'en'
                            ? " completely supports the ASTRA-AI integration paradigm. Full CAN-bus thermodynamic scanning and 40Hz computer vision tracking fully active."
                            : " prend intégralement en charge le protocole ASTRA-AI. Diagnostics passifs CAN-bus et traitement de vision stéréo actifs à 100%."}
                        </p>
                      </div>
                    </div>

                    {/* Highly engaging simulated vehicle-specific stats readouts */}
                    <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-emerald-800/40 font-mono text-[9px] text-emerald-300">
                      <div className="space-y-0.5">
                        <span className="text-emerald-500/70 uppercase text-[8px] tracking-wider block">PROTOCOL</span>
                        <span className="font-extrabold text-white">{currentBrandSpec.protocol}</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-emerald-500/70 uppercase text-[8px] tracking-wider block">CAMERA WIDTH</span>
                        <span className="font-extrabold text-white">{currentBrandSpec.lensCal}</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-emerald-500/70 uppercase text-[8px] tracking-wider block">POLLING ADAPTER</span>
                        <span className="font-extrabold text-white">{currentBrandSpec.freq}</span>
                      </div>
                    </div>

                    <p className="text-[10px] text-slate-400 italic font-semibold leading-normal pb-1">
                      ℹ/ {currentBrandSpec.desc}
                    </p>

                    <button
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full py-3 bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-none hover:bg-emerald-500 transition-all flex items-center justify-center space-x-1.5 cursor-pointer shadow-md"
                    >
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      <span>{t.secondaryCta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
