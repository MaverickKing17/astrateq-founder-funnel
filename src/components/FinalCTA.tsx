/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CreditCard, ShieldCheck } from 'lucide-react';
import { Language, Tier } from '../types';

interface FinalCTAProps {
  language: Language;
  onSelectTierAndCheckout: (tier: Tier) => void;
}

export default function FinalCTA({ language, onSelectTierAndCheckout }: FinalCTAProps) {
  const [selectedSelector, setSelectedSelector] = useState<Tier>('founding');

  const selectorItems = [
    {
      id: 'earlybird' as Tier,
      price: '$25 CAD',
      name: 'Early Bird',
      period: 'Refundable Deposit'
    },
    {
      id: 'founding' as Tier,
      price: '$85 CAD',
      name: 'Founding Member',
      period: 'First Production Batch'
    },
    {
      id: 'guardian' as Tier,
      price: '$150 CAD',
      name: 'Guardian Pro Tier',
      period: 'Priority Lifetime Access'
    }
  ];

  const handleCheckoutClick = () => {
    onSelectTierAndCheckout(selectedSelector);
  };

  return (
    <section id="final-conversion" className="py-20 bg-slate-50 border-b border-slate-200 relative flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Slogan */}
          <div className="lg:col-span-6 space-y-6 text-left" id="final-cta-left">
            <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
              FINAL CALL FOR BATCH 01
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
              Lock in your founding price before General Batch 01 closes to the public.
            </h2>
            <p className="text-sm sm:text-base text-slate-505 text-slate-500 font-semibold leading-relaxed max-w-lg">
              Secure your predictive diagnostic system today. Backed by our 100% refundable reservation guarantee. No charges are finalized until manufacturing completes.
            </p>

            {/* Quick Micro-Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 pt-6 font-mono text-[10px] text-slate-500">
              <div className="space-y-1">
                <p className="font-black text-[#1A1A2E]">🍁 100% CANADIAN</p>
                <p className="text-[10px] font-sans font-medium">Sovereign local operations.</p>
              </div>
              <div className="space-y-1">
                <p className="font-black text-[#1A1A2E]">💳 SECURE DEPOSIT</p>
                <p className="text-[10px] font-sans font-medium">Held in secure trust portals.</p>
              </div>
              <div className="space-y-1">
                <p className="font-black text-[#1A1A2E]">🔒 ZERO RISK</p>
                <p className="text-[10px] font-sans font-medium">Cancel with a single click.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Checkout Tier Drawer */}
          <div className="lg:col-span-6 bg-white p-8 border border-slate-200 shadow-xl relative w-full" id="final-cta-card">
            
            <div className="space-y-6 text-left">
              <div className="space-y-1">
                <h3 className="font-sans text-xs font-black text-[#1A1A2E] uppercase tracking-widest block text-slate-500">
                  SECURE RESERVATION PORTAL
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  Select your desired reservation level from our limited release options below:
                </p>
              </div>

              {/* Tiers selectors */}
              <div className="space-y-2.5">
                {selectorItems.map((sel) => {
                  const isChecked = selectedSelector === sel.id;
                  return (
                    <div
                      key={sel.id}
                      onClick={() => setSelectedSelector(sel.id)}
                      className={`p-4 border transition-all flex items-center justify-between cursor-pointer ${
                        isChecked
                          ? 'border-[#00D4FF] bg-slate-50 shadow-sm scale-[1.01]'
                          : 'border-slate-200 bg-white hover:border-slate-350'
                      }`}
                      id={`final-cta-selector-${sel.id}`}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Selector circular button */}
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isChecked ? 'border-cyan-500 bg-cyan-100' : 'border-slate-300'
                        }`}>
                          {isChecked && <div className="w-2 h-2 bg-cyan-600 rounded-full" />}
                        </div>
                        <div>
                          <p className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest leading-none">
                            {sel.name}
                          </p>
                          <p className="text-xs font-bold text-[#1A1A2E] mt-1.5 leading-none">
                            {sel.period}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-black font-mono text-[#1E2538]">{sel.price}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Submit CTA */}
              <button
                onClick={handleCheckoutClick}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-555 hover:bg-emerald-500 text-white font-black rounded-none text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                id="final-cta-submit-btn"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Reserve My Founding Spot →</span>
              </button>

              {/* Security info */}
              <div className="flex items-center justify-center space-x-1.5 text-[9.5px] text-slate-500 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Stripe Secured • Escrow Guard • Refundable at any time</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
