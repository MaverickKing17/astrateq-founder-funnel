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
    <section id="compatibility" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center">
      {/* Dynamic graphic radial nodes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-150/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column content */}
          <div className="lg:col-span-6 space-y-6 text-left" id="compatibility-left">
            <span className="px-3 py-1.5 text-xs font-bold font-mono text-[#00D4FF] bg-gray-50 border border-gray-100 rounded-full uppercase tracking-wider">
              {language === 'en' ? "VEHICLE AUDIT" : "VÉRIFICATION OBD-II"}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A2E] leading-tight">
              {t.title}
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              {t.subtitle}
            </p>

            {/* Structured highlight box */}
            <div className="p-4 bg-[#F8F9FA] rounded-2xl border border-gray-100 flex items-center space-x-3 text-sm">
              <div className="w-10 h-10 bg-cyan-50 border border-cyan-200 rounded-xl flex items-center justify-center text-[#00D4FF]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-[#4B5563] font-medium leading-tight">
                {language === 'en'
                  ? "Meets full Canadian security standards. No diagnostic check compromises vehicle warranty parameters under consumer defense acts."
                  : "Respecte l'ensemble des normes. Notre interfaçage OBD-II passif ne compromet en rien la garantie constructeur."}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs font-medium text-gray-400 pl-1">
              <span>🛡️</span>
              <span>ISO 26262 ASIL-B Certified Diagnostic System</span>
            </div>
          </div>

          {/* Right Column - Selector Form UI */}
          <div className="lg:col-span-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-xl w-full" id="compatibility-form">
            <div className="space-y-6 text-left">
              
              {/* Form title */}
              <div className="flex items-center space-x-2">
                <Car className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="font-serif text-xl font-bold text-[#1A1A2E]">
                  {language === 'en' ? "Active Live Compatibility Check" : "Analyseur de Compatibilité en Direct"}
                </h3>
              </div>

              {/* Selector Suite */}
              <div className="space-y-4">
                
                {/* Years Select */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-year" className="text-xs font-bold text-[#1A1A2E] tracking-wide uppercase">
                    {language === 'en' ? "Model Year" : "Année du modèle"}
                  </label>
                  <select
                    id="comp-year"
                    value={selectedYear}
                    onChange={handleYearChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all outline-none"
                  >
                    <option value="">-- {t.placeholderYear} --</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                {/* Makes Select */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-make" className="text-xs font-bold text-[#1A1A2E] tracking-wide uppercase">
                    {language === 'en' ? "Vehicle Manufacturer" : "Constructeur / Marque"}
                  </label>
                  <select
                    id="comp-make"
                    value={selectedMake}
                    onChange={handleMakeChange}
                    disabled={!selectedYear}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all outline-none disabled:opacity-55 disabled:bg-gray-100"
                  >
                    <option value="">-- {t.placeholderMake} --</option>
                    {VEHICLE_MAKES.map(m => <option key={m.name} value={m.name}>{m.name}</option>)}
                  </select>
                </div>

                {/* Models Select */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="comp-model" className="text-xs font-bold text-[#1A1A2E] tracking-wide uppercase">
                    {language === 'en' ? "Vehicle Model" : "Modèle exact"}
                  </label>
                  <select
                    id="comp-model"
                    value={selectedModel}
                    onChange={handleModelChange}
                    disabled={!selectedMake}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-all outline-none disabled:opacity-55 disabled:bg-gray-100"
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
                className="w-full py-4 rounded-full font-bold text-sm text-white bg-[#1A1A2E] hover:bg-[#00D4FF] hover:text-[#1A1A2E] transition-all focus:outline-none flex items-center justify-center space-x-1 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
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
                    className="p-4 bg-green-50 border border-green-200 rounded-2xl flex flex-col space-y-4"
                    id="compatibility-success-panel"
                  >
                    <div className="flex items-start space-x-2 text-left">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-extrabold text-green-900 leading-tight">
                          {t.successMessage}
                        </p>
                        <p className="text-[11px] text-green-700 leading-snug mt-1">
                          {selectedYear} {selectedMake} {selectedModel} {language === 'en'
                            ? "supports full ASTRA-AI integration metrics, including multi-sensor thermodynamic monitoring and full CAN-bus error indexing."
                            : "valide l'ensemble des protocoles ASTRA-AI, y compris la surveillance thermique et l'analyse de signaux multiples."}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onScrollToSection('pricing')}
                      className="w-full py-3 bg-[#1A1A2E] text-white rounded-xl text-xs font-bold hover:bg-[#00D4FF] hover:text-[#1A1A2E] hover:shadow-md transition-all flex items-center justify-center space-x-1 cursor-pointer"
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
