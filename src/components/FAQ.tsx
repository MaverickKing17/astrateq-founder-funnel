/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, Sparkles, Filter, ShieldCheck, Mail } from 'lucide-react';
import { Language, FAQItem } from '../types';
import { translations } from '../data/translations';

interface FAQProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function FAQ({ language, onScrollToSection }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("refunds");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const t = translations[language].faqs;

  // Under PDF 2 Section 3.3 requirements (10-15 detailed FAQs minimum),
  // we add 4 extra high-authority FAQs directly to our mapping array
  const extraFaqs: Record<'en' | 'fr', FAQItem[]> = {
    en: [
      {
        id: "snowstorms",
        category: "Winter Safety",
        question: "Can the camera function during heavy snowstorms?",
        answer: "Yes. The camera operates specialized active heating matrices that keep the glass clear of frost, snow, and condensation.",
        detail: "Our custom computer vision system has been trained specifically on Canadian snowstorms. It adjusts exposure to neutralize high-contrast white reflection (snow glare), maintaining optimal visual protection down to -40°C even when lane markers are partially buried."
      },
      {
        id: "offline-work",
        category: "Installation & Tech",
        question: "Does the ASTRA-AI require cell signal or internet connectivity to protect my drive?",
        answer: "No. All core predictive safety models and computer vision loops run 100% locally on the device's edge processor.",
        detail: "Unlike basic cameras that stream everything to remote clouds (collapsing in valleys or areas without cell coverage), ASTRA-AI processes all waveforms and optical feeds right on-board inside your cabin. Cellular sync is only used for background weather data and syncing safety tokens."
      },
      {
        id: "ised-compliance",
        category: "Privacy & Legal",
        question: "Is Astrateq compliant with ISED Wireless Certification?",
        answer: "Yes. All on-board BLE and Wi-Fi modules have passed Innovation, Science and Economic Development Canada (ISED) RSS-247 compliance checks.",
        detail: "Our hardware operates and communicates securely without emitting harmful electromagnetic interference that could disrupt your vehicle's ECU, GPS systems, or standard safety sensors. Safe and certified."
      },
      {
        id: "insurance-discount",
        category: "Pricing & Plans",
        question: "Will installing ASTRA-AI lower my Canadian automotive insurance premium?",
        answer: "While we do not sell your records, many Canadian insurance providers provide discount rebates for certified OBD-II diagnostics.",
        detail: "Because we respect your privacy, we never send records automatically to insurers. However, we provide a printable, certified 'Monthly Vehicle Safety Integrity Report' in the app. Backers can share this with brokers (like Intact, Aviva, or TD Insurance) to secure custom discounts."
      }
    ],
    fr: [
      {
        id: "snowstorms",
        category: "Sécurité Hivernale",
        question: "La caméra peut-elle fonctionner pendant les tempêtes de neige extrêmes ?",
        answer: "Oui. L'appareil est muni de résistances chauffantes infrarouges actives qui éliminent automatiquement le givre, le gel, et l'humidité.",
        detail: "Nos modèles d'analyse visuelle ont été spécialement entraînés sur des vidéos de tempêtes au Canada. Ils ajustent la luminosité pour neutraliser la réverbération de la neige et identifier les obstacles même lorsque les lignes au sol sont recouvertes de poudreuse."
      },
      {
        id: "offline-work",
        category: "Installation & Tech",
        question: "Le boîtier ASTRA-AI a-t-il besoin d'une connexion internet pour fonctionner ?",
        answer: "Non. L'ensemble des calculs neuronaux se fait à 100% en local par le processeur embarqué dans l'habitacle.",
        detail: "Contrairement aux systèmes qui diffusent au cloud, ASTRA-AI traite la télémétrie OBD2 et les images de route directement à bord. En cas de traversée de zone blanche ou de tunnel, votre protection s'active instantanément sans aucune interruption de service."
      },
      {
        id: "ised-compliance",
        category: "Vie Privée & Sécurité",
        question: "Les modules Astrateq sont-ils conformes à la certification sans fil ISDE ?",
        answer: "Oui. Toutes nos puces BLE et Wi-Fi respectent les directives ISDE (Innovation, Sciences et Développement économique Canada) sous les normes strictes RSS-247.",
        detail: "Le boîtier fonctionne de manière sécurisée sans émettre aucune interférence électromagnétique indésirable sur les réseaux de calcul de votre voiture ou votre radio de bord. Sûr, stable, et conforme."
      },
      {
        id: "insurance-discount",
        category: "Abonnement & Service",
        question: "L'installation d'ASTRA-AI permet-elle de réduire la prime d'assurance ?",
        answer: "Plusieurs assureurs canadiens accordent des remises pour l'utilisation de diagnostics de sécurité active.",
        detail: "Comme nous garantissons votre anonymat informatique, nous ne partageons jamais vos relevés. Cependant, vous pouvez télécharger un rapport certifié mensuel d'intégrité mécanique à présenter à votre courtier (comme Desjardins, Belair, ou Intact) pour réclamer une baisse tarifaire."
      }
    ]
  };

  // Merge lists to get exactly 12 rich FAQs (8 standard + 4 extra)
  const allFaqs = [...t.list, ...extraFaqs[language]];

  const categories = ["All", ...allFaqs.reduce((acc: string[], cur) => {
    if (!acc.includes(cur.category)) acc.push(cur.category);
    return acc;
  }, [])];

  const filteredFaqs = activeCategory === "All" 
    ? allFaqs 
    : allFaqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 md:py-32 bg-white relative overflow-hidden flex flex-col justify-center items-center font-sans border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-12">
        
        {/* Title headers */}
        <div className="space-y-4" id="faq-headers">
          <span className="inline-flex items-center space-x-1 border border-blue-200 bg-blue-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
            {language === 'en' ? "TECHNICAL ADVISORY" : "CENTRE D'ASSISTANCE"}
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            {t.title}
          </h2>
          <p className="text-base text-slate-500 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Categorization filter buttons for SEO semantic clustering */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto" id="faq-filters">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold mr-2 uppercase tracking-wide">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === 'en' ? "Filter:" : "Filtrer:"}</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenId(null); }}
              className={`px-4 py-1.5 rounded-none text-xs font-bold border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-white hover:bg-slate-50 text-slate-500 border-gray-200 shadow-xs'
              }`}
            >
              {language === 'fr' && cat === "All" ? "Tous" : cat}
            </button>
          ))}
        </div>

        {/* Accordions List element */}
        <div className="space-y-4 max-w-3xl mx-auto text-left" id="faq-accordion-list">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-slate-50 p-6 rounded-none border transition-all duration-300 relative ${
                  isOpen
                    ? 'border-blue-600 bg-white shadow-md'
                    : 'border-gray-200 hover:border-slate-400'
                }`}
                id={`faq-accordion-item-${faq.id}`}
              >
                {/* Accordion Trigger button header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="text-[9px] font-bold font-mono tracking-widest text-slate-500 bg-slate-100 border border-gray-200 px-2 py-0.5 rounded-none uppercase">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-[#1A1A2E] group-hover:text-blue-600 transition-colors leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  {/* Chevron rotating indicator */}
                  <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-[#1A1A2E] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-90 text-blue-600' : ''
                  }`} />
                </button>

                {/* Extended structured details drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      {/* Inner block */}
                      <div className="pt-5 mt-4 border-t border-gray-200 space-y-4" id="faq-answer-block-aeo">
                        
                        {/* AEO Short Direct Answer Block */}
                        <div className="p-3.5 bg-blue-50/50 rounded-none border border-blue-100 text-xs">
                          <span className="text-[9px] font-extrabold font-mono tracking-widest text-blue-700 uppercase block mb-1">
                            🎯 {language === 'en' ? "SHORT DIRECT ANSWER" : "RÉPONSE DIRECTE RAPIDE"}
                          </span>
                          <p className="font-extrabold text-slate-900 leading-normal font-sans">
                            {faq.answer}
                          </p>
                        </div>

                        {/* Extended detailed copy */}
                        <p className="text-xs text-slate-600 leading-relaxed font-semibold font-sans">
                          {faq.detail}
                        </p>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support disclaimer and link */}
        <div className="p-4 bg-slate-50 border border-gray-200 rounded-none max-w-lg mx-auto flex items-center justify-between" id="faq-footer-action">
          <div className="text-left flex items-center space-x-2.5 text-xs">
            <Mail className="w-4.5 h-4.5 text-blue-600" />
            <span className="text-slate-500 font-medium">
              {language === 'en' ? "Need personalized engineering specs?" : "Besoin de spécifications sur mesure ?"}
            </span>
          </div>
          <button
            onClick={() => onScrollToSection('footer')}
            className="text-xs font-extrabold text-slate-950 hover:text-blue-600 hover:underline cursor-pointer"
          >
            {language === 'en' ? "Contact Support →" : "Contacter l'aide →"}
          </button>
        </div>

      </div>
    </section>
  );
}
