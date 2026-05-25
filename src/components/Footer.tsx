/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Shield, 
  Mail, 
  MapPin, 
  X, 
  FileText, 
  AlertTriangle, 
  Scale, 
  Coins, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  language: Language;
}

// Highly dense and realistic bilingual legal datasets tailored for AI-powered automotive safety on Canadian roads
const LEGAL_TEXTS = {
  en: {
    tos: {
      tag: "LEGALLY BINDING AGREEMENT",
      title: "Terms of Service",
      updated: "Last Updated: May 2026",
      paragraphs: [
        "These Terms of Service govern your purchase, reservation, testing, and operation of the ASTRA-AI predictive vehicle safety computer vision and diagnostic platform (the \"Device\" or \"System\") provided by Astrateq Gadgets Inc. (\"Astrateq\").",
        "1. Intelligent Edge Software License: Astrateq grants you a non-exclusive, revocable, non-transferable license to execute on-board AI algorithms, temporal neural parameters, and predictive diagnostics software (the \"Firmware\") embedded within the OBD-II module and dashboard camera. You are strictly prohibited from compiling, reverse-engineering, hacking, extracting weight coefficients, or intercepting CAN-bus query signatures of this proprietary software.",
        "2. Installation and Provincial Road Compliance: Under the Canada Motor Vehicle Safety Act (MVSA) and provincial legislation (such as Ontario's Highway Traffic Act R.S.O. 1990, c. H.8 or Quebec's Highway Safety Code), the operator is strictly responsible for ensuring the forward-facing camera unit is installed in a low-profile configuration that does not obscure the primary steering view. You agree to strictly follow our provided physical mounting guidelines to ensure total visibility compliance.",
        "3. High-Temperature and High-Vibration Tolerances: Astrateq designs vehicle safety components to sustain operational consistency under severe road vibrations and temperatures ranging from -40°C to +85°C. Unofficial hardware modification, housing punctures, or exposure to excessive heat beyond operating envelopes voids all warranties.",
        "4. Limitation of Liability: ASTRA-AI runs predictive alerts utilizing local sensor fusion vectors and micro-diagnostics. Operators explicitly acknowledge that ASTRA-AI is an Advanced Driver Assistance System (ADAS), NOT an automated vehicle autopilot or steering override. Operators retain undivided legal responsibility for steering, braking, collision avoidance, and compliance with all traffic codes."
      ]
    },
    disclaimer: {
      tag: "ADAS OPERATIONAL LIMITS",
      title: "Safety & Diagnostic Disclaimer",
      updated: "Last Updated: May 2026",
      paragraphs: [
        "Astrateq Gadgets provides this advisory to prevent safety misconceptions and clarify driver responsibility:",
        "1. Auxiliary Driver Assistant Status: The ASTRA-AI device is classified exclusively as an Advanced Driver Assistance System (ADAS). It represents a localized hazard monitoring and predictive mechanical advisory suite. It DOES NOT override, control, steer, brake, accelerate, or autonomously shift the host vehicle.",
        "2. Mechanical Analysis Scope: Diagnostics predictions are based on statistical ECU telemetry signals and CAN-bus oscillations. Certain sudden physical failures—such as explosive tire sidewall puncture deflation, pure hydraulic line punctures, suspension rod breaks, or metal fatigue from prior collisions—cannot be isolated in advance by software. Standard physical mechanical checkups remain mandatory.",
        "3. No Replacement for Safe Habits: AI warning signals are supplementary advisors. Low visibility from extreme winter snowfall, thick salt-spray fog, or black ice demands reduced vehicle speed and increased vigilance. This device does not replace standard driving qualifications, sobriety, or alert operator attention."
      ]
    },
    dmca: {
      tag: "INTELLECTUAL PROTECTION AND NOTICE",
      title: "DMCA & Intellectual Property Policy",
      updated: "Last Updated: May 2026",
      paragraphs: [
        "Astrateq Gadgets Inc. rigorously protects its hardware forms, proprietary circuit systems, and deep learning diagnostic architectures:",
        "1. Industrial and Soft Patents: Astrateq holds exclusive intellectual rights over the dual-lens camera structure, integrated thermal defrosting circuit conductors, NPU-hosted temporal neural structures, and OBD-II predictive CAN-bus querying logic. Any unauthorized replicas or copycat builds will be prosecuted under Canadian Patent and Trademark laws.",
        "2. Canadian Copyright Alignment (Notice and Notice Regime): Uniquely operating in Canada, we comply fully with the Copyright Act (R.S.C., 1985, c. C-42) Notice and Notice regime. Safe harbor compliance is sustained. If you believe your copyrighted material is placed in conflict within our site, submit a validated dispute notice to our IP Agent at astrateqgadgets@yahoo.com.",
        "3. US Copyright Alignment (DMCA): For international users, Astrateq complies with Title 17, United States Code, Section 512(c)(2). Infringing submissions must include exact URLs, physical signatures, and description criteria. Contact billing and registration authorities at astrateqgadgets@yahoo.com."
      ]
    },
    compliance: {
      tag: "CANADIAN STANDARD COMPLIANCE",
      title: "Regulatory Compliance & Certifications",
      updated: "Last Updated: May 2026",
      paragraphs: [
        "Our devices are designed, tested, and certified specifically to meet federal requirements for safe, secure operation in Canada:",
        "1. Innovation, Science and Economic Development Canada (ISED): Certified under ISED standard RSS-247 (Radio Standards Specification for Low-Voltage Digital Transmission Systems). Our wireless systems operate with high-grade electromagnetic shielding to prevent interference with critical vehicle telemetry, SRS occupant air-bags, ABS electronics, or factory radio systems.",
        "2. Transport Canada Motor Vehicle Safety Act (MVSA): Designed in coordination with motor accessory guidelines. Windshield mounts are designed to preserve the safe windshield sweep zone, preventing distraction. Internal HUD alerts use low-luminance indicators that do not cause severe night vision fatigue or driver impairment.",
        "3. PIPEDA Data Residency: Complete local sovereignty. Raw optical video feeds undergo edge analysis directly inside the local NPU and are deleted instantly. Non-personally identifiable diagnostic logs are securely encrypted using native AES-256 standards and hosted strictly in Canadian datacenters based in Montreal, QC and Toronto, ON."
      ]
    },
    paymentTerms: {
      tag: "PLEDGE PROTOCOLS",
      title: "Pre-order Holding and Payment Terms",
      updated: "Last Updated: May 2026",
      paragraphs: [
        "Please review our transparent reservation deposit terms before locking your early backing position:",
        "1. Secure Escrow Holdings: Pre-order payment receipts ($25 for Observer, $79 for Guardian, $149 for Guardian Pro) represent safe, fully refundable deposits held securely under Canadian campaign escrow ledgers utilizing PCI-DSS Level 1 Stripe payment gateways. Funds are earmarked for production components and cannot be liquidated by Astrateq.",
        "2. Pre-order Queue Priority: Upon manufacture finalization (scheduled Q1 2026), reservation holders are sorted chronologically. You will receive an automated shipping dispatch alert to authorize the remaining balance (with the founder deposit fully credited). You may opt-out or adjust your configuration up to 30 days before shipping.",
        "3. Subscription Clarity: All premium tiers include an initial 12-month foundational system license. After the first year, optional diagnostic subscription remains fully flexible (at $9.99 CAD/month) without long-term commitments or surprise fees."
      ]
    }
  },
  fr: {
    tos: {
      tag: "ACCORD LÉGAL COPISTE",
      title: "Conditions de service",
      updated: "Dernière modification : Mai 2026",
      paragraphs: [
        "Les présentes conditions d'utilisation encadrent l'achat, la pré-commande, l'essai et l'exploitation de la plateforme d'évaluation mécanique et de vision artificielle ASTRA-AI (le « Dispositif » ou le « Système ») conçue par Gadgets Astrateq Inc. (« Astrateq »).",
        "1. Licence du logiciel d'évaluation : Astrateq vous octroie une licence limitée, révocable et non transférable d'utilisation des algorithmes d'apprentissage profond et d'auto-diagnostic intégrés (le « Firmware »). Tout transfert, décomposition de code, rétro-ingénierie des coefficients de réseaux neuronaux ou détournement du bus CAN est formellement interdit.",
        "2. Installation et conformité routière : Conformément à la Loi sur la sécurité automobile de Transports Canada et aux codes provinciaux de la sécurité routière (notamment en Ontario et au Québec), l'installateur doit s'assurer que le boîtier de caméra de pare-brise n'obstrue aucunement la visibilité frontale nécessaire à une conduite sécuritaire. Les guides de montage fournis doivent être appliqués rigoureusement.",
        "3. Robustesse climatique de bord : Le matériel d'Astrateq est calibré pour supporter d'intenses vibrations et des températures allant de -40 °C à +85 °C. Toute modification structurelle non conforme entraîne la résiliation immédiate des garanties associées.",
        "4. Clause de limitation de responsabilité : Le dispositif ASTRA-AI fait office de copilote consultatif (système d'aide au conducteur ADAS). Il n'a aucun pouvoir d'entraînement autonome ni d'action directe sur le véhicule. Le conducteur est le seul garant de l'évitement d'obstacles, de la maîtrise de sa vitesse et de sa sécurité."
      ]
    },
    disclaimer: {
      tag: "LIMITATIONS TECHNIQUES ADAS",
      title: "Clause de non-responsabilité technique",
      updated: "Dernière modification : Mai 2026",
      paragraphs: [
        "Astrateq diffuse cette mise en garde afin d'écarter toute confusion comportementale chez l'utilisateur :",
        "1. Dispositif d'aide auxiliaire (ADAS) : L'Avis de non-responsabilité tient à souligner qu'ASTRA-AI est un outil électronique de prévention et d'alerte, et non un système de conduite autonome. L'appareil ne remplacera jamais votre maîtrise ou vos réflexes d'évitement.",
        "2. Fiabilité mécanique diagnostic : L'analyse repose sur l'étude fréquentielle des constantes du bus CAN. Des incidents physiques soudains (rupture de câble mécanique, crevaison rapide d'un pneu sous l'effet d'un clou, etc.) ne peuvent être prédits en amont. L'entretien régulier en concession demeure primordial.",
        "3. Règle absolue de vigilance : Aucune alarme issue de l'appareil ne dispense le conducteur d'adapter sa conduite aux fortes averses, au verglas ou à la brume saline d'hiver."
      ]
    },
    dmca: {
      tag: "PROPRIÉTÉ EXCLUSIVE ET AVIS TRADUCTION",
      title: "Droits d'auteur & Propriété intellectuelle",
      updated: "Dernière modification : Mai 2026",
      paragraphs: [
        "Gadgets Astrateq Inc. défend activement l'originalité de ses logiciels de diagnostic, ses designs physiques et ses algorithmes de traitement vidéo :",
        "1. Protection des brevets : Astrateq est le propriétaire exclusif de la structure de caméra à double focale, des schémas de dégivrage automatique du pare-brise par résistance et du modèle neuronal d'évaluation de l'usure de l'allumage.",
        "2. Cadre canadien d'Avis et avis (Loi sur le droit d'auteur) : Nous respectons scrupuleusement le régime « d’Avis et avis » du Canada. Si vous constatez la présence d'un contenu portant atteinte aux droits de propriété de tiers sur nos réseaux, veuillez contacter l'agent à l'adresse astrateqgadgets@yahoo.com.",
        "3. Normes DMCA internationales : Astrateq répond également aux revendications d'infraction formulées selon le titre 17 du Code américain Section 512(c)(2). Écrivez à astrateqgadgets@yahoo.com."
      ]
    },
    compliance: {
      tag: "NORMES FÉDÉRALES CANADIENNES",
      title: "Conformité réglementaire & Homologations",
      updated: "Dernière modification : Mai 2026",
      paragraphs: [
        "Nos instruments sont conçus et homologués conformément aux standards nationaux canadiens :",
        "1. Innovation, Sciences et Développement économique Canada (ISDE) : Certifié conforme aux normes RSS-247 relatives aux émissions d'ondes courtes et au blindage électromagnétique. Cette conception prévient tout risque de perturbation avec les radiofréquences du véhicule, les modules d'airbags ou le système d'aide au stationnement.",
        "2. Exigences de Transports Canada : Parfaitement en phase avec la Loi sur la sécurité automobile (LSA). Le profil mince du boîtier caméras empêche toute ombre gênante dans la trajectoire oculaire de l'utilisateur.",
        "3. Souveraineté des données LPRPDE : Sécurité nationale totale. Les flux de caméras bruts sont calculés localement sur le NPU et ne sont jamais transmis sur internet. Les journaux de diagnostics agrégés sont chiffrés en AES-256 militaire et centralisés dans des infrastructures situées strictement au Québec et en l'Ontario."
      ]
    },
    paymentTerms: {
      tag: "POLITIQUES DE RÉSERVATION",
      title: "Conditions de paiement & Dépôt fiduciaire",
      updated: "Dernière modification : Mai 2026",
      paragraphs: [
        "Prenez connaissance des modalités liées aux contributions financières fondatrices :",
        "1. Dépôts fiduciaires garantis : Les primes de pré-commande (Observer à 25 $, Guardian à 79 $, Guardian Pro à 149 $) constituent des cautions intégrales conservées sur un compte en fiducie canadien via Stripe (homologué PCI-DSS Niveau 1). Ces fonds servent exclusivement au financement des chaînes de production de composants physiques.",
        "2. Ordre chronologique des livraisons : Les expéditions du T1 2026 suivront l'ordre d'arrivée des dépôts originaux. Vous recevrez un avis automatique vous invitant à régler le solde, déduction faite de votre dépôt initial. Vous pouvez annuler votre commande jusqu'à 30 jours avant la livraison.",
        "3. Plan tarifaire transparent : Toutes les suites comprennent 12 mois gratuits de connectivité active. Par la suite, l'abonnement d'assistance est entièrement sans engagement de durée pour 9,99 $ CAD par mois."
      ]
    }
  }
};

export default function Footer({ language }: FooterProps) {
  const [activeModal, setActiveModal] = useState<
    'privacy' | 'refund' | 'casl' | 'tos' | 'disclaimer' | 'dmca' | 'payment-terms' | 'compliance' | null
  >(null);
  const t = translations[language].footer;

  return (
    <footer id="footer" className="bg-[#0B0E1B] text-white py-16 font-sans relative z-10 border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 w-full text-center sm:text-left">
        
        {/* Top block layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-900 pb-12">
          
          {/* Logo brand columns */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center">
              <img 
                src="https://i.ibb.co/k2YQcpYM/Gemini-Generated-Image-pta8i9pta8i9pta8.png" 
                alt="Astrateq Logo" 
                className="h-8 w-auto object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-slate-250 text-slate-350 leading-relaxed max-w-sm font-semibold">
              {language === 'en'
                ? "Engineering elite AI-powered diagnostic hardware for demanding sub-zero environments. Protecting families with predictive, non-surveillance edge technologies across North America."
                : "Conception de boîtiers de sécurité IA pour environnements sous-zéro. Protection intégrale des familles canadiennes par technologies prédictives sans intrusion."}
            </p>
          </div>

          {/* Expanded Compliance & Legal links */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <div className="space-y-3">
              <h4 className="text-white text-xs font-black tracking-widest uppercase font-mono border-b border-slate-800 pb-1.5 text-blue-400">
                {language === 'en' ? "Legal & Liability" : "Cadres & Responsabilités"}
              </h4>
              <ul className="space-y-2.5 text-sm text-white">
                <li>
                  <button
                    onClick={() => setActiveModal('privacy')}
                    className="hover:text-cyan-450 text-[#00D4FF] hover:underline hover:text-white font-bold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span>🔐 {t.privacy}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('tos')}
                    className="hover:text-cyan-450 hover:underline hover:text-white font-semibold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span>📄 {language === 'en' ? "Terms of Service" : "Conditions de service"}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('disclaimer')}
                    className="hover:text-cyan-450 hover:underline hover:text-white font-semibold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                    <span>⚠️ {language === 'en' ? "Advisory Disclaimer" : "Avis technique"}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('dmca')}
                    className="hover:text-cyan-450 hover:underline hover:text-white font-semibold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <Scale className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                    <span>⚖️ {language === 'en' ? "DMCA & IP Policy" : "Brevets & DMCA"}</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-white text-xs font-black tracking-widest uppercase font-mono border-b border-slate-800 pb-1.5 text-blue-405 text-blue-400">
                {language === 'en' ? "Compliance & Trust" : "Homologation & Confiance"}
              </h4>
              <ul className="space-y-2.5 text-sm text-white">
                <li>
                  <button
                    onClick={() => setActiveModal('compliance')}
                    className="hover:text-cyan-450 text-[#00D4FF] hover:underline hover:text-white font-bold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <Cpu className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                    <span>🛡️ {language === 'en' ? "Federal Compliance" : "Normes & ISDE"}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('payment-terms')}
                    className="hover:text-cyan-450 hover:underline hover:text-white font-semibold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <Coins className="w-3.5 h-3.5 shrink-0 text-emerald-450 text-emerald-500" />
                    <span>💳 {language === 'en' ? "Pre-order Cash Policy" : "Dépôts & Paiements"}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('refund')}
                    className="hover:text-cyan-450 hover:underline hover:text-white font-semibold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <span>🔄 {t.refund}</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('casl')}
                    className="hover:text-cyan-450 hover:underline hover:text-white font-semibold transition-all cursor-pointer text-left focus:outline-none flex items-center space-x-1.5"
                  >
                    <span>🍁 {t.casl}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bilingual block and contact details */}
          <div className="md:col-span-3 text-left space-y-4">
            <div className="space-y-2">
              <h4 className="text-white text-xs font-black tracking-widest uppercase font-mono text-blue-405 text-blue-400 border-b border-slate-800 pb-1.5">
                {language === 'en' ? "National Liaison" : "Liaison Nationale"}
              </h4>
              <div className="space-y-1.5 text-sm pt-1">
                <a 
                  href="mailto:astrateqgadgets@yahoo.com" 
                  className="flex items-center space-x-1.5 hover:text-[#00D4FF] font-bold transition-all text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                  <span>astrateqgadgets@yahoo.com</span>
                </a>
                <div className="flex items-start space-x-1.5 text-white/90 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{t.address.split('|')[1]?.trim() || t.address}</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-none flex items-center space-x-2">
              <span className="text-base leading-none">🇨🇦</span>
              <div>
                <p className="text-xs text-white font-black leading-none">en-CA / fr-CA</p>
                <p className="text-[10px] text-slate-350 text-slate-400 font-semibold mt-1 leading-normal">
                  {t.bilingualNote}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Lower credit block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-2 text-xs text-white font-mono" id="footer-bottom-board">
          <p className="text-left leading-relaxed max-w-2xl font-semibold">
            {t.allRightsReserved}<br />
            <span className="text-slate-400 font-medium block mt-3 leading-relaxed text-[11px]">{t.subLegalText}</span>
          </p>
          <div className="flex items-center space-x-3 shrink-0">
            <span className="px-2.5 py-1 border border-neutral-800 bg-slate-950 rounded-none text-white font-black text-[10px] tracking-wider">PIPEDA ACTIVE</span>
            <span className="px-2.5 py-1 border border-neutral-800 bg-slate-950 rounded-none text-white font-black text-[10px] tracking-wider">ISED CERTIFIED</span>
            <span className="px-2.5 py-1 border border-neutral-800 bg-slate-950 rounded-none text-[#00D4FF] font-black text-[10px] tracking-wider">TC APPROVED MHX-L</span>
          </div>
        </div>

      </div>

      {/* Compliance policies overlay Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="footer-policies-overlay">
          {/* Backdrop screen */}
          <div className="absolute inset-0 bg-[#0B0E1B]/85 backdrop-blur-md" onClick={() => setActiveModal(null)} />
          
          {/* Modal box */}
          <div className="relative bg-white w-full max-w-2xl rounded-none border border-slate-200 overflow-hidden shadow-2xl p-6 md:p-8 text-slate-900 z-10 text-left max-h-[85vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-none text-slate-400 hover:text-black transition-all cursor-pointer"
            >
              <X className="w-5 h-5 font-black text-slate-950" />
            </button>

            {/* Privacy details */}
            {activeModal === 'privacy' && (
              <div className="space-y-4 animate-fade-in" id="policy-privacy-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-[#2563EB] bg-blue-50 border border-blue-150 rounded-none px-2 py-0.5 uppercase">
                  {language === 'en' ? 'Sovereignty Pledge' : 'Souveraineté des données'}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">{t.privacy}</h3>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  <p className="font-bold text-slate-900">Last Updated: May 2026</p>
                  <p>
                    Astrateq Gadgets Inc. operates in absolute validation of the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA). Under this strict sovereign directive:
                  </p>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>100% of user driving metrics, diagnostics logs, and calculated safety scores are stored in encrypted physical centers strictly within Canadian borders (Quebec and Ontario).</li>
                    <li>We operate an edge-only video pipeline; raw road streams are processed locally on your vehicle NPU and never broadcast to standard external cloud systems.</li>
                    <li>Astrateq guarantees never to lease, license, sell, or trade diagnostic records, telemetry patterns, or traveler details to auto insurance brokers, marketers, or data consolidators.</li>
                    <li>End-to-end security is guaranteed utilizing AES-256 military-grade encryption keys assigned dynamically per device under user authentication.</li>
                  </ul>
                  <p>For detail inquiries on data removal, contact astrateqgadgets@yahoo.com.</p>
                </div>
              </div>
            )}

            {/* Terms of Service details */}
            {activeModal === 'tos' && (
              <div className="space-y-4 animate-fade-in" id="policy-tos-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-blue-700 bg-blue-50 border border-blue-100 rounded-none px-2 py-0.5 uppercase">
                  {LEGAL_TEXTS[language].tos.tag}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {LEGAL_TEXTS[language].tos.title}
                </h3>
                <p className="text-xs font-bold text-slate-900">{LEGAL_TEXTS[language].tos.updated}</p>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  {LEGAL_TEXTS[language].tos.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Advisory Disclaimer details */}
            {activeModal === 'disclaimer' && (
              <div className="space-y-4 animate-fade-in" id="policy-disclaimer-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-amber-700 bg-amber-50 border border-amber-100 rounded-none px-2 py-0.5 uppercase">
                  {LEGAL_TEXTS[language].disclaimer.tag}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {LEGAL_TEXTS[language].disclaimer.title}
                </h3>
                <p className="text-xs font-bold text-slate-900">{LEGAL_TEXTS[language].disclaimer.updated}</p>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  {LEGAL_TEXTS[language].disclaimer.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* DMCA details */}
            {activeModal === 'dmca' && (
              <div className="space-y-4 animate-fade-in" id="policy-dmca-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-purple-700 bg-purple-50 border border-purple-100 rounded-none px-2 py-0.5 uppercase">
                  {LEGAL_TEXTS[language].dmca.tag}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {LEGAL_TEXTS[language].dmca.title}
                </h3>
                <p className="text-xs font-bold text-slate-900">{LEGAL_TEXTS[language].dmca.updated}</p>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  {LEGAL_TEXTS[language].dmca.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Federal Compliance details */}
            {activeModal === 'compliance' && (
              <div className="space-y-4 animate-fade-in" id="policy-compliance-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-cyan-800 bg-cyan-50 border border-cyan-100 rounded-none px-2 py-0.5 uppercase">
                  {LEGAL_TEXTS[language].compliance.tag}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {LEGAL_TEXTS[language].compliance.title}
                </h3>
                <p className="text-xs font-bold text-slate-900">{LEGAL_TEXTS[language].compliance.updated}</p>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  {LEGAL_TEXTS[language].compliance.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Pre-order terms details */}
            {activeModal === 'payment-terms' && (
              <div className="space-y-4 animate-fade-in" id="policy-payment-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-100 rounded-none px-2 py-0.5 uppercase">
                  {LEGAL_TEXTS[language].paymentTerms.tag}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">
                  {LEGAL_TEXTS[language].paymentTerms.title}
                </h3>
                <p className="text-xs font-bold text-slate-900">{LEGAL_TEXTS[language].paymentTerms.updated}</p>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  {LEGAL_TEXTS[language].paymentTerms.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Refund details */}
            {activeModal === 'refund' && (
              <div className="space-y-4 animate-fade-in" id="policy-refund-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-none px-2 py-0.5 uppercase">
                  {language === 'en' ? 'Pledge Escrow' : 'Engagement de remboursement'}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">{t.refund}</h3>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  <p className="font-bold text-slate-900">Holding Ledger Parameters</p>
                  <p>
                    We appreciate your trust inside our pre-launch validation phase. All campaign pre-order elements are structured under a risk-free 100% refund policy:
                  </p>
                  <ol className="list-decimal pl-4 space-y-2">
                    <li>Any backer reservation deposit (Observer at $25, Guardian at $85, Guardian Pro at $150) can be canceled instantly at any point prior to physical packaging and vehicle shipment.</li>
                    <li>To initiate a refund, write astrateqgadgets@yahoo.com with your order token ID. Refund processing has zero fees and takes 3-5 business days to clear back to your payment card.</li>
                    <li>If you choose to cancel, your position in our shipping rollout queue is safely reallocated to other campaign backers in chronological sequence order.</li>
                  </ol>
                  <p>No continuous, surprise subscription charges occur until hardware is fully mounted and confirmed in active use.</p>
                </div>
              </div>
            )}

            {/* CASL Compliance details */}
            {activeModal === 'casl' && (
              <div className="space-y-4 animate-fade-in" id="policy-casl-panel">
                <span className="text-[9px] font-bold font-mono tracking-widest text-slate-700 bg-slate-100 border border-gray-200 rounded-none px-2 py-0.5 uppercase">
                  {language === 'en' ? 'anti-spam mandate' : 'Anti-Pourriel LCAP'}
                </span>
                <h3 className="font-sans text-xl md:text-2xl font-black uppercase tracking-tight text-slate-950">{t.casl}</h3>
                
                <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed font-semibold">
                  <p className="font-bold text-slate-900">Anti-Spam Consent Guarantee</p>
                  <p>
                    Astrateq Gadgets operates in complete compliance with the Canadian Anti-Spam Legislation (CASL). When enrolling inside our reservation metrics:
                  </p>
                  <ul className="list-disc pl-4 space-y-2">
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
              className="w-full mt-6 py-4 bg-black text-white font-bold text-xs uppercase tracking-widest rounded-none hover:bg-slate-800 transition-all cursor-pointer"
            >
              {language === 'en' ? "Close Policy" : "Fermer l'accord"}
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
