/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, ShieldAlert, Mail, MapPin, X, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const [activeModal, setActiveModal] = useState<'privacy' | 'refund' | 'casl' | null>(null);
  const t = translations[language].footer;

  return (
    <footer id="footer" className="bg-[#0B0E1B] text-gray-400 py-16 font-sans relative z-10 border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 w-full text-center sm:text-left">
        
        {/* Top block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-900 pb-12">
          
          {/* Logo brand columns */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-md bg-[#00D4FF] flex items-center justify-center text-[#1A1A2E]">
                <Shield className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-white uppercase">
                {translations[language].navigation.logo}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
              {language === 'en'
                ? "Engineering elite AI-powered diagnostic hardware for demanding sub-zero environments. Protecting families with predictive, non-surveillance edge technologies across North America."
                : "Conception de boîtiers de sécurité IA pour environnements sous-zéro. Protection intégrale des familles canadiennes par technologies prédictives sans intrusion."}
            </p>
          </div>

          {/* Links structure columns */}
          <div className="md:col-span-4 flex flex-col sm:flex-row gap-8 text-left">
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold tracking-wider uppercase font-mono">
                {language === 'en' ? "Compliance Framework" : "Cadre Réglementaire"}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    🔐 {t.privacy}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('refund')}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    🔄 {t.refund}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('casl')}
                    className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    🍁 {t.casl}
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold tracking-wider uppercase font-mono">
                {language === 'en' ? "Support Channels" : "Canaux de Support"}
              </h4>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-center space-x-1.5 hover:text-white transition-all cursor-pointer">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>support@astrateq.ca</span>
                </li>
                <li className="flex items-center space-x-1.5 hover:text-white transition-all cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span className="truncate max-w-[180px]">{t.address.split('|')[1]?.trim() || t.address}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bilingual block */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="text-white text-xs font-bold tracking-wider uppercase font-mono">
              Language / Bilinguisme
            </h4>
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-2xl flex items-center space-x-2">
              <span className="text-base">🇨🇦</span>
              <div>
                <p className="text-[10px] text-white font-bold leading-none">en-CA / fr-CA</p>
                <p className="text-[9px] text-gray-500 mt-0.5">{t.bilingualNote}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower credit block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 text-[10px] text-gray-500 font-mono" id="footer-bottom-board">
          <p className="text-left leading-normal max-w-xl">
            {t.allRightsReserved}<br />
            <span className="text-gray-600 block mt-1.5">{t.subLegalText}</span>
          </p>
          <div className="flex items-center space-x-3 shrink-0">
            <span className="px-2 py-0.5 border border-slate-800 rounded text-gray-600">PIPEDA ACTIVE</span>
            <span className="px-2 py-0.5 border border-slate-800 rounded text-gray-600">ISED CERTIFIED</span>
          </div>
        </div>

      </div>

      {/* Compliance policies overlay Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="footer-policies-overlay">
          {/* Backdrop screen */}
          <div className="absolute inset-0 bg-[#0B0E1B]/80 backdrop-blur-sm" onClick={() => setActiveModal(null)} />
          
          {/* Modal box */}
          <div className="relative bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 text-[#1A1A2E] z-10 text-left max-h-[85vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-xl text-gray-400 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Privacy details */}
            {activeModal === 'privacy' && (
              <div className="space-y-4" id="policy-privacy-panel">
                <span className="text-[10px] font-mono font-black text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded uppercase">
                  {language === 'en' ? 'Sovereignty Pledge' : 'Souveraineté des données'}
                </span>
                <h3 className="font-serif text-2xl font-bold">{t.privacy}</h3>
                
                <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
                  <p className="font-bold">Last Updated: May 2026</p>
                  <p>
                    Astrateq Gadgets Inc. operates in absolute validation of the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA). Under this strict sovereign directive:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>100% of user driving metrics, diagnostics logs, and calculated safety scores are stored in encrypted physical centers strictly within Canadian borders (Quebec and Ontario).</li>
                    <li>We operate an edge-only video pipeline; raw road streams are processed locally on your vehicle NPU and never broadcast to standard external cloud systems.</li>
                    <li>Astrateq guarantees never to lease, license, sell, or trade diagnostic records, telemetry patterns, or traveler details to auto insurance brokers, marketers, or data consolidators.</li>
                    <li>End-to-end security is guaranteed utilizing AES-256 military-grade encryption keys assigned dynamically per device under user authentication.</li>
                  </ul>
                  <p>For detail inquiries on data removal, contact privacy@astrateq.ca.</p>
                </div>
              </div>
            )}

            {/* Refund details */}
            {activeModal === 'refund' && (
              <div className="space-y-4" id="policy-refund-panel">
                <span className="text-[10px] font-mono font-black text-green-700 bg-green-50 px-2 py-0.5 rounded uppercase">
                  {language === 'en' ? 'Pledge Escrow' : 'Engagement de remboursement'}
                </span>
                <h3 className="font-serif text-2xl font-bold">{t.refund}</h3>
                
                <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
                  <p className="font-bold">Holding Ledger Parameters</p>
                  <p>
                    We appreciate your trust inside our pre-launch validation phase. All campaign pre-order elements are structured under a risk-free 100% refund policy:
                  </p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Any backer reservation deposit (Observer at $25, Guardian at $85, Guardian Pro at $150) can be canceled instantly at any point prior to physical packaging and vehicle shipment.</li>
                    <li>To initiate a refund, write support@astrateq.ca with your order token ID. Refund processing has zero fees and takes 3-5 business days to clear back to your payment card.</li>
                    <li>If you choose to cancel, your position in our shipping rollout queue is safely reallocated to other campaign backers in chronological sequence order.</li>
                  </ol>
                  <p>No continuous, surprise subscription charges occur until hardware is fully mounted and confirmed in active use.</p>
                </div>
              </div>
            )}

            {/* CASL Compliance details */}
            {activeModal === 'casl' && (
              <div className="space-y-4" id="policy-casl-panel">
                <span className="text-[10px] font-mono font-black text-[#1A1A2E] bg-gray-100 px-2 py-0.5 rounded uppercase">
                  {language === 'en' ? 'anti-spam mandate' : 'Anti-Pourriel LCAP'}
                </span>
                <h3 className="font-serif text-2xl font-bold">{t.casl}</h3>
                
                <div className="text-xs text-gray-600 space-y-3 leading-relaxed">
                  <p className="font-bold">Anti-Spam Consent Guarantee</p>
                  <p>
                    Astrateq Gadgets operates in complete compliance with the Canadian Anti-Spam Legislation (CASL). When enrolling inside our reservation metrics:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Your email is utilized exclusively to send pre-order payment receipts, shipping updates, manufacturing updates, and beta application authorization tokens.</li>
                    <li>We strictly do not send unrequested promotional solicitations or third-party advertisements.</li>
                    <li>Every email contains an immediate, single-click "Unsubscribe" mechanism to safely remove your credentials from general updates.</li>
                  </ul>
                  <p>Helpdesk based in Toronto, ON, Canada.</p>
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-6 py-4 bg-[#1A1A2E] text-white font-bold text-xs rounded-full hover:bg-[#00D4FF] hover:text-[#1A1A2E] transition-all cursor-pointer"
            >
              {language === 'en' ? "Close Policy" : "Fermer l'accord"}
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
