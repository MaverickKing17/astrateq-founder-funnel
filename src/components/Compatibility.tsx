/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { Language } from '../types';
// @ts-ignore
import carImage from '../assets/images/modern_car_profile_1779735350578.png';

interface CompatibilityProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

const YEARS = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008'];
const MAKES = ['BMW', 'Mercedes-Benz', 'Audi', 'Lexus', 'Tesla', 'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Subaru', 'Mazda', 'Hyundai', 'Jeep', 'Ram'];
const MODELS_BY_MAKE: Record<string, string[]> = {
  'BMW': ['X5', 'X3', '3 Series', '5 Series', 'i4'],
  'Mercedes-Benz': ['GLE', 'GLC', 'C-Class', 'E-Class', 'EQS'],
  'Audi': ['Q5', 'Q7', 'A4', 'A6', 'e-tron'],
  'Lexus': ['RX', 'NX', 'ES', 'IS', 'GX'],
  'Tesla': ['Model Y', 'Model 3', 'Model X', 'Model S'],
  'Toyota': ['RAV4', 'Highlander', 'Camry', 'Corolla', 'Sienna', 'Tacoma'],
  'Honda': ['CR-V', 'Civic', 'Accord', 'Pilot', 'Odyssey'],
  'Ford': ['F-150', 'Escape', 'Explorer', 'Mustang Mach-E', 'Edge'],
  'Chevrolet': ['Silverado', 'Equinox', 'Tahoe', 'Bolt', 'Traverse'],
  'Subaru': ['Outback', 'Forester', 'Crosstrek', 'Impreza'],
  'Mazda': ['CX-5', 'CX-30', 'CX-9', 'Mazda3'],
  'Hyundai': ['Tucson', 'Santa Fe', 'Elantra', 'Ioniq 5', 'Palisade'],
  'Jeep': ['Grand Cherokee', 'Wrangler', 'Cherokee', 'Compass'],
  'Ram': ['1500', '2500']
};

export default function Compatibility({ language, onScrollToSection }: CompatibilityProps) {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleMakeChange = (value: string) => {
    setMake(value);
    setModel('');
    setIsChecked(false);
  };

  const handleCheck = () => {
    if (year && make && model) {
      setIsChecked(true);
    }
  };

  return (
    <section id="compatibility" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Luxury Configurator Form */}
          <div className="lg:col-span-5 space-y-6 text-left" id="compatibility-configurator">
            <div className="space-y-3">
              <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
                VEHICLE COMPATIBILITY CHECK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
                Enter your vehicle details to check instant sensor compatibility.
              </h2>
            </div>

            {/* Selector dropdown container */}
            <div className="bg-white p-6 border border-slate-200 shadow-sm space-y-4">
              
              {/* Year Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="comp-year" className="text-[10px] font-mono font-black tracking-widest text-slate-500 uppercase block">
                  Model Year
                </label>
                <select
                  id="comp-year"
                  value={year}
                  onChange={(e) => { setYear(e.target.value); setIsChecked(false); }}
                  className="w-full h-11 border border-slate-250 bg-slate-50 px-3 text-xs font-bold uppercase tracking-wider text-slate-800 outline-none focus:border-[#00D4FF] focus:bg-white rounded-none cursor-pointer"
                >
                  <option value="">-- Choose Year --</option>
                  {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>

              {/* Make Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="comp-make" className="text-[10px] font-mono font-black tracking-widest text-slate-500 uppercase block">
                  Vehicle Make
                </label>
                <select
                  id="comp-make"
                  value={make}
                  onChange={(e) => handleMakeChange(e.target.value)}
                  disabled={!year}
                  className="w-full h-11 border border-slate-250 bg-slate-50 px-3 text-xs font-bold uppercase tracking-wider text-slate-800 outline-none focus:border-[#00D4FF] focus:bg-white rounded-none cursor-pointer disabled:opacity-40"
                >
                  <option value="">-- Choose Make --</option>
                  {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>

              {/* Model Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="comp-model" className="text-[10px] font-mono font-black tracking-widest text-slate-500 uppercase block">
                  Vehicle Model
                </label>
                <select
                  id="comp-model"
                  value={model}
                  onChange={(e) => { setModel(e.target.value); setIsChecked(false); }}
                  disabled={!make}
                  className="w-full h-11 border border-slate-250 bg-slate-50 px-3 text-xs font-bold uppercase tracking-wider text-slate-800 outline-none focus:border-[#00D4FF] focus:bg-white rounded-none cursor-pointer disabled:opacity-40"
                >
                  <option value="">-- Choose Model --</option>
                  {make && MODELS_BY_MAKE[make]?.map(mod => <option key={mod} value={mod}>{mod}</option>)}
                </select>
              </div>

              {/* Check Button */}
              <button
                onClick={handleCheck}
                disabled={!year || !make || !model}
                className="w-full h-12 bg-[#1E2538] hover:bg-slate-905 text-white text-xs font-black uppercase tracking-widest rounded-none shadow transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Instant Compatibility Scan
              </button>
            </div>

            {/* Quick trust bullet */}
            <div className="p-4 bg-white border border-slate-200 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-[11px] font-bold text-slate-500 uppercase leading-normal">
                Fits standard OBD-II ports built in Canada from 2008 onward. Fully compliant under SAE transponder requirements.
              </p>
            </div>

          </div>

          {/* Right Column: Visual SUV + Success Result Panels */}
          <div className="lg:col-span-7 flex flex-col justify-center items-stretch space-y-6" id="compatibility-display">
            
            {/* Real Highway Car Profile container */}
            <div className="bg-[#FFFFFF] border border-slate-200 p-3 aspect-[16/10] w-full flex items-center justify-center relative overflow-hidden shadow-sm">
              <img 
                src={carImage} 
                className="w-full h-full object-cover rounded-none"
                alt="White luxury highway SUV scenario" 
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-[8px] font-mono tracking-widest text-white px-2.5 py-1 uppercase font-black">
                VEHICLE COMPLIANCE SYSTEM
              </div>
            </div>

            {/* Compliance success state block */}
            {isChecked && (
              <div className="p-6 bg-emerald-50 border border-emerald-500/30 space-y-4 text-left shadow-sm transition-all" id="compatibility-result-box">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-none border border-emerald-500/25 bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Check className="w-4 h-4 text-emerald-700 stroke-[3]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-emerald-800 uppercase tracking-widest">
                      COMPATIBILITY VERIFIED
                    </h4>
                    <p className="text-sm font-semibold text-slate-700 leading-snug">
                      Your {year} {make} {model} is fully compatible with ASTRA-AI. All 40Hz thermal registers are fully supported.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onScrollToSection('pricing')}
                  className="w-full h-11 bg-emerald-600 text-white text-xs font-black uppercase tracking-widest rounded-none hover:bg-emerald-505 transition-colors flex items-center justify-center space-x-1 shadow-sm cursor-pointer"
                >
                  <span>Reserve for This Vehicle →</span>
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
