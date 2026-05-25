/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, Sparkles, Heart, CreditCard, CheckCircle2 } from 'lucide-react';
import { Language, Tier } from '../types';
import { translations } from '../data/translations';

interface FinalCTAProps {
  language: Language;
  onSelectTierAndCheckout: (tier: Tier) => void;
}

export default function FinalCTA({ language, onSelectTierAndCheckout }: FinalCTAProps) {
  const [selectedSelector, setSelectedSelector] = useState<Tier>('founding');
  const t = translations[language];
  const fc = t.finalCta;

  const selectorItems = [
    {
      id: 'earlybird' as Tier,
      price: '$25 CAD',
      name: t.pricing.tiers.earlybird.name,
      period: t.pricing.tiers.earlybird.period
    },
    {
      id: 'founding' as Tier,
      price: '$85 CAD',
      name: t.pricing.tiers.founding.name,
      period: t.pricing.tiers.founding.period,
      highlight: true
    },
    {
      id: 'guardian' as Tier,
      price: '$150 CAD',
      name: t.pricing.tiers.guardian.name,
      period: t.pricing.tiers.guardian.period
    }
  ];

  const handleCheckoutClick = () => {
    onSelectTierAndCheckout(selectedSelector);
  };

  return (
    <section id="final-conversion" className="py-24 bg-slate-900 text-white overflow-hidden relative flex flex-col justify-center items-center border-t border-slate-800">
      {/* Background radial overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[35rem] bg-blue-900/10 rounded-full blur-3xl pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column -Slogan Pitch */}
          <div className="lg:col-span-6 space-y-6 text-left" id="final-cta-left">
            <span className="inline-flex items-center space-x-1-5 border border-blue-800 bg-blue-950/50 px-3.5 py-1.5 rounded-none text-blue-400 font-mono text-[10px] font-bold uppercase tracking-widest mb-2">
              🍁 {language === 'en' ? "CANADIAN HERITAGE TRUST" : "CONFIANCE DU NORD"}
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight">
              {fc.title}
            </h2>
            <p className="text-base text-slate-300 font-medium leading-relaxed max-w-lg">
              {fc.description}
            </p>

            {/* Micro-Signals checklists */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-800 pt-6">
              <div className="space-y-1 text-left">
                <p className="text-xs font-black font-mono tracking-widest text-blue-400">100% CANADIAN</p>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Owned & Operated locally.</p>
              </div>
              <div className="space-y-1 text-left">
                <p className="text-xs font-black font-mono tracking-widest text-blue-400">ESCROW HOLD</p>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Fully refundable pre-orders.</p>
              </div>
              <div className="space-y-1 text-left">
                <p className="text-xs font-black font-mono tracking-widest text-blue-400">SECURE PIPEDA</p>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Canadian residenced data nodes.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Selector checkout card */}
          <div className="lg:col-span-6 bg-[#0B0F19] p-8 rounded-none border border-slate-800 shadow-2xl relative w-full" id="final-cta-card">
            
            {/* Ambient accent node */}
            <div className="absolute top-2 right-4 text-xs font-mono font-bold text-slate-500 tracking-wider flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span>DEDICATED SECURE</span>
            </div>

            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <h3 className="font-sans text-sm font-extrabold text-white uppercase tracking-tight">
                  {fc.subtitle}
                </h3>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  {language === 'en' ? "Select your desired pre-order level below and click to lock security for your family." : "Faites votre choix de couverture et sécurisez l'accès ci-dessous."}
                </p>
              </div>

              {/* Grid Selector items */}
              <div className="space-y-2.5">
                {selectorItems.map((sel) => {
                  const isChecked = selectedSelector === sel.id;
                  return (
                    <div
                      key={sel.id}
                      onClick={() => setSelectedSelector(sel.id)}
                      className={`p-4 rounded-none border-2 transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-blue-500 bg-slate-850 bg-slate-800/50 shadow-md scale-101'
                          : 'border-slate-800 bg-transparent hover:border-slate-700'
                      }`}
                      id={`final-cta-selector-${sel.id}`}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Radio box */}
                        <div className={`w-5 h-5 rounded-none border-2 flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-blue-500 bg-blue-500/10' : 'border-slate-705 border-slate-700 bg-transparent'
                        }`}>
                          {isChecked && <div className="w-2.5 h-2.5 bg-blue-500 rounded-none" />}
                        </div>
                        <div>
                          <p className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">
                            {sel.name} Suite
                          </p>
                          <p className="text-xs font-bold text-white mt-1.5 leading-none">
                            {language === 'en' ? "Founding Reservation Deposit" : "Dépôt de Fondateur de sécurité"}
                          </p>
                        </div>
                      </div>

                      {/* Price header */}
                      <div className="text-right flex flex-col items-end">
                        <span className="text-sm font-black font-mono text-white">{sel.price}</span>
                        <span className="text-[8px] font-bold text-slate-500 uppercase tracking-tight font-mono">{sel.period}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Secure Booking CTA action button */}
              <button
                onClick={handleCheckoutClick}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-none text-xs uppercase tracking-widest transition-all focus:outline-none flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-black/20"
                id="final-cta-submit-btn"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>{fc.btnReserve}</span>
              </button>

              {/* Secured badge indicator */}
              <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400 font-bold">
                <Shield className="w-3.5 h-3.5 text-blue-500" />
                <span>Stripe Secured • End-to-End Encrypted Sandbox • 🔒 fully refundable</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
