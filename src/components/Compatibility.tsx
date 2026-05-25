/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Car, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { YEARS, VEHICLE_MAKES } from '../data/compatibility_db';

interface CompatibilityProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function Compatibility({ language, onScrollToSection }: CompatibilityProps) {
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const t = translations[language].compatibility;

  const currentModels = VEHICLE_MAKES.find(m => m.name === selectedMake)?.models || [];

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    setIsChecked(false);
    setShowSuccess(false);
  };

  const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMake(e.target.value);
    setSelectedModel('');
    setIsChecked(false);
    setShowSuccess(false);
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
    setIsChecked(false);
    setShowSuccess(false);
  };

  const handleCheck = () => {
    if (selectedYear && selectedMake && selectedModel) {
      setIsChecked(true);
      setShowSuccess(true);
    }
  };

  return (
    <section id="compatibility" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center border-b border-gray-200">
      {/* Dynamic graphic radial nodes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column content */}
          <div className="lg:col-span-6 space-y-6 text-left" id="compatibility-left">
            <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
              {language === 'en' ? "VEHICLE AUDIT" : "VÉRIFICATION OBD-II"}
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-tight">
              {t.title}
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed">
              {t.subtitle}
            </p>

            {/* Structured highlight box */}
            <div className="p-4.5 bg-slate-50 rounded-none border border-gray-200 flex items-center space-x-3.5 text-sm">
              <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-none flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5 shrink-0" />
              </div>
              <p className="text-slate-650 text-slate-600 font-bold text-xs uppercase tracking-wide leading-relaxed">
                {language === 'en'
                  ? "Meets full Canadian security standards. No diagnostic check compromises vehicle warranty parameters under consumer defense acts."
                  : "Respecte l'ensemble des normes. Notre interfaçage OBD-II passif ne compromet en rien la garantie constructeur."}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
              <span>🛡️</span>
              <span>ISO 26262 ASIL-B Certified Diagnostic System</span>
            </div>
          </div>

          {/* Right Column - Selector Form UI */}
          <div className="lg:col-span-6 bg-slate-50 p-8 rounded-none border border-gray-200 shadow-md w-full" id="compatibility-form">
            <div className="space-y-6 text-left">
              
              {/* Form title */}
              <div className="flex items-center space-x-2.5">
                <Car className="w-5 h-5 text-blue-600" />
                <h3 className="font-sans text-xs font-black uppercase tracking-widest text-slate-900 mt-0.5">
                  {language === 'en' ? "Active Live Compatibility Check" : "Analyseur de Compatibilité en Direct"}
                </h3>
              </div>

              {/* Selector Suite */}
              <div className="space-y-4">
                
                {/* Years Select */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-year" className="text-[10px] font-black text-slate-900 tracking-widest uppercase">
                    {language === 'en' ? "Model Year" : "Année du modèle"}
                  </label>
                  <select
                    id="comp-year"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-xs font-bold uppercase tracking-wider focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none"
                  >
                    <option value="">-- {t.placeholderYear} --</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                {/* Makes Select */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-make" className="text-[10px] font-black text-slate-900 tracking-widest uppercase">
                    {language === 'en' ? "Vehicle Manufacturer" : "Constructeur / Marque"}
                  </label>
                  <select
                    id="comp-make"
                    value={selectedMake}
                    onChange={handleMakeChange}
                    disabled={!selectedYear}
                    className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-xs font-bold uppercase tracking-wider focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none disabled:opacity-55 disabled:bg-gray-100 placeholder:text-slate-300"
                  >
                    <option value="">-- {t.placeholderMake} --</option>
                    {VEHICLE_MAKES.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                  </select>
                </div>

                {/* Models Select */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-model" className="text-[10px] font-black text-slate-900 tracking-widest uppercase">
                    {language === 'en' ? "Vehicle Model" : "Modèle exact"}
                  </label>
                  <select
                    id="comp-model"
                    value={selectedModel}
                    onChange={handleModelChange}
                    disabled={!selectedMake}
                    className="w-full bg-white border border-gray-200 rounded-none px-4 py-3 text-xs font-bold uppercase tracking-wider focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all outline-none disabled:opacity-55 disabled:bg-gray-100 representation-box"
                  >
                    <option value="">-- {t.placeholderModel} --</option>
                    {currentModels.map(mod => <option key={mod} value={mod}>{mod}</option>)}
                  </select>
                </div>

              </div>

              {/* Action Button Trigger */}
              <button
                onClick={handleCheck}
                disabled={!selectedYear || !selectedMake || !selectedModel}
                className="w-full py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-800 transition-all focus:outline-none flex items-center justify-center space-x-1 cursor-pointer shadow-lg shadow-black/10 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>{t.btnCheck}</span>
              </button>

              {/* Collapsed Success States Area */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.95 }}
                    animate={{ opacity: 1, height: 'auto', scale: 1 }}
                    exit={{ opacity: 0, height: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-none flex flex-col space-y-4"
                    id="compatibility-success-panel"
                  >
                    <div className="flex items-start space-x-2.5 text-left">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-black text-emerald-800 uppercase tracking-wider">
                          {t.successMessage}
                        </p>
                        <p className="text-xs font-medium text-emerald-800 leading-snug mt-1.5 opacity-90">
                          {selectedYear} {selectedMake} {selectedModel} {language === 'en'
                            ? "supports full ASTRA-AI integration metrics, including multi-sensor thermodynamic monitoring and full CAN-bus error indexing."
                            : "valide l'ensemble des protocoles ASTRA-AI, y compris la surveillance thermique et l'analyse de signaux multiples."}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full py-3 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-none hover:bg-slate-850 transition-all flex items-center justify-center space-x-1 cursor-pointer shadow-md"
                    >
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
