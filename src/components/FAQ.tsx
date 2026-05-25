/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronRight, 
  Filter, 
  ShieldCheck, 
  Mail,
  Search,
  X,
  Check,
  ThumbsUp,
  Coins,
  Cpu,
  Lock,
  Tag,
  Snowflake,
  Wrench
} from 'lucide-react';
import { Language, FAQItem } from '../types';
import { translations } from '../data/translations';

interface FAQProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function FAQ({ language, onScrollToSection }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>("refunds");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, 'yes' | 'no'>>({});
  const [animatedCount, setAnimatedCount] = useState<number>(0);

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

  // Category-specific colorful high-authority icons
  const getCategoryIcon = (category: string) => {
    const norm = category.toLowerCase();
    if (norm.includes('deposit') || norm.includes('billing') || norm.includes('paiement') || norm.includes('dépôt')) {
      return <Coins className="w-3.5 h-3.5 text-emerald-600 shrink-0" />;
    }
    if (norm.includes('install') || norm.includes('tech') || norm.includes('génie')) {
      return <Cpu className="w-3.5 h-3.5 text-blue-600 shrink-0" />;
    }
    if (norm.includes('privacy') || norm.includes('legal') || norm.includes('sécurité') || norm.includes('loi') || norm.includes('vie privée')) {
      return <Lock className="w-3.5 h-3.5 text-red-500 shrink-0" />;
    }
    if (norm.includes('price') || norm.includes('plan') || norm.includes('tarif') || norm.includes('abonnement')) {
      return <Tag className="w-3.5 h-3.5 text-pink-500 shrink-0" />;
    }
    if (norm.includes('winter') || norm.includes('snow') || norm.includes('hivern') || norm.includes('neige')) {
      return <Snowflake className="w-3.5 h-3.5 text-sky-500 shrink-0" />;
    }
    if (norm.includes('warranty') || norm.includes('support') || norm.includes('assistance') || norm.includes('garantie')) {
      return <Wrench className="w-3.5 h-3.5 text-amber-550 text-amber-500 shrink-0" />;
    }
    return <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />;
  };

  // Extraction of distinct categories based on complete dataset
  const categories = ["All", ...allFaqs.reduce((acc: string[], cur) => {
    if (!acc.includes(cur.category)) acc.push(cur.category);
    return acc;
  }, [])];

  // Live filter system taking both category selections and user search query input
  const filteredFaqs = allFaqs.filter(faq => {
    // 1. Filter by Category tab selection
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    if (!matchesCategory) return false;

    // 2. Filter by search query text input
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase().trim();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.detail.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query)
    );
  });

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return allFaqs.length;
    return allFaqs.filter(f => f.category === cat).length;
  };

  // Animates the count visually from 0 to target size whenever search results or categories change
  useEffect(() => {
    let startTime: number | null = null;
    const startVal = animatedCount;
    const endVal = filteredFaqs.length;
    const duration = 250; // ms transition speed
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutCubic
      const ease = 1 - Math.pow(1 - percentage, 3);
      const current = Math.round(startVal + ease * (endVal - startVal));
      setAnimatedCount(current);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setAnimatedCount(endVal);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [filteredFaqs.length]);

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative overflow-hidden flex flex-col justify-center items-center font-sans border-b border-gray-200">
      {/* Radiant dynamic circles for polished backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 w-full text-center space-y-10">
        
        {/* Elegant Title headers */}
        <div className="space-y-4" id="faq-headers">
          <span className="inline-flex items-center space-x-1.5 border border-blue-500/20 bg-gradient-to-r from-blue-50 to-indigo-50 px-3.5 py-1.5 rounded-none text-blue-800 font-mono text-[10px] font-bold uppercase tracking-widest">
             💡 {language === 'en' ? "TECHNICAL ADVISORY" : "CENTRE D'ASSISTANCE"}
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            {t.title}
          </h2>
          <p className="text-base text-slate-500 font-semibold font-sans max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* HIGH-PERFORMANCE SEARCH MODULE */}
        <div className="max-w-xl mx-auto space-y-3" id="faq-search-module">
          <div className="relative" id="faq-search-wrapper">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? "Search questions, terms, features..." : "Rechercher une question, un terme..."}
              className="w-full pl-11 pr-10 py-3 bg-white text-slate-900 placeholder:text-slate-450 placeholder:text-slate-400 text-sm border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm transition-all rounded-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                title={language === 'en' ? "Clear search" : "Effacer la recherche"}
              >
                <X className="h-4.5 w-4.5" />
              </button>
            )}
          </div>

          {/* Quick key suggestions for discovery */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-400 font-medium" id="faq-search-suggestions">
            <span>{language === 'en' ? "Suggested searches:" : "Recherches fréquentes :"}</span>
            {['refund', 'obd', 'snow', 'ised', 'insurance', 'warranty'].map((word) => (
              <button
                key={word}
                onClick={() => setSearchQuery(word)}
                className="px-2 py-0.5 rounded-none bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-blue-600 text-[10px] font-bold font-mono transition-colors uppercase border border-slate-200/50 cursor-pointer"
              >
                {word}
              </button>
            ))}
          </div>
        </div>

        {/* Categorization filter buttons with live badge count */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto border-t border-slate-100 pt-6" id="faq-filters">
          <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-bold mr-1.5 uppercase tracking-wide">
            <Filter className="w-3.5 h-3.5" />
            <span>{language === 'en' ? "Filter:" : "Filtrer:"}</span>
          </div>
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenId(null); }}
                className={`px-3.5 py-1.5 rounded-none text-xs font-bold border transition-all cursor-pointer flex items-center space-x-1.5 tracking-tight ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white hover:bg-slate-50 text-slate-500 border-gray-200 shadow-xs'
                }`}
              >
                <span>{language === 'fr' && cat === "All" ? "Tous" : cat}</span>
                <span className={`text-[9.5px] px-1.5 py-0.25 font-bold font-mono ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordions List element with elegant cards layout */}
        <div className="space-y-4 max-w-3xl mx-auto text-left" id="faq-accordion-list">
          
          {/* Animated Search feedback loop count label */}
          {searchQuery.trim() !== "" && (
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between border border-blue-100 bg-blue-50/50 px-4 py-3 rounded-none mb-2"
              id="faq-search-count-label"
            >
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>
                  {language === 'en' 
                    ? `Found ${animatedCount} matching result${animatedCount === 1 ? '' : 's'}`
                    : `${animatedCount} résultat${animatedCount > 1 ? 's' : ''} trouvé${animatedCount > 1 ? 's' : ''}`
                  }
                </span>
                <span className="text-slate-400 font-normal italic">
                  for "{searchQuery}"
                </span>
              </div>
              
              <div className="text-[9px] font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 border border-blue-105 border-blue-100 shadow-xs">
                {language === 'en' ? 'LIVE SYNC' : 'REFLEXION'}
              </div>
            </motion.div>
          )}
          
          {filteredFaqs.map((faq) => {
             const isOpen = openId === faq.id;
             return (
               <div
                 key={faq.id}
                 className={`bg-white p-6 rounded-none border transition-all duration-300 relative ${
                   isOpen
                     ? 'border-blue-500 bg-white/95 shadow-lg shadow-blue-500/5'
                     : 'border-slate-200 hover:border-slate-400 hover:-translate-y-0.5 shadow-xs'
                 }`}
                 id={`faq-accordion-item-${faq.id}`}
               >
                 {/* Left gradient accent strip on active accordion item */}
                 {isOpen && (
                   <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600" />
                 )}
                 
                 {/* Accordion Trigger button header */}
                 <button
                   onClick={() => setOpenId(isOpen ? null : faq.id)}
                   className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group"
                   aria-expanded={isOpen}
                 >
                   <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pr-4">
                     <span className="inline-flex items-center space-x-1.5 text-[9px] font-bold font-mono tracking-widest text-slate-500 bg-slate-100 border border-gray-200 px-2 py-0.5 rounded-none uppercase w-fit">
                       {getCategoryIcon(faq.category)}
                       <span>{faq.category}</span>
                     </span>
                     <h3 className="text-sm sm:text-base font-extrabold text-[#1A1A2E] group-hover:text-blue-600 transition-colors leading-snug">
                       {faq.question}
                     </h3>
                   </div>
                   {/* Chevron rotating indicator */}
                   <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-black shrink-0 transition-transform duration-300 ${
                     isOpen ? 'rotate-90 text-blue-600' : ''
                   }`} />
                 </button>

                 {/* Structured details drawer content */}
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
                         <div className="p-3.5 bg-blue-50/40 rounded-none border border-blue-100/60 text-xs">
                           <span className="text-[9px] font-extrabold font-mono tracking-widest text-blue-700 uppercase block mb-1">
                             🎯 {language === 'en' ? "SHORT DIRECT ANSWER" : "RÉPONSE DIRECTE RAPIDE"}
                           </span>
                           <p className="font-extrabold text-slate-900 leading-normal font-sans">
                             {faq.answer}
                           </p>
                         </div>

                         {/* Extended detailed copy */}
                         <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold font-sans">
                           {faq.detail}
                         </p>

                         {/* High-Fidelity Feedback Rating Widget */}
                         <div className="flex items-center justify-between pt-4 border-t border-dashed border-slate-200 mt-2 text-xs" id={`feedback-row-${faq.id}`}>
                           <span className="text-slate-400 font-bold font-mono text-[10px] uppercase tracking-wide">
                             {language === 'en' ? "Was this answer helpful?" : "Cette réponse vous a-t-elle été utile ?"}
                           </span>
                           <div className="flex items-center space-x-2">
                             {helpfulVotes[faq.id] ? (
                               <span className="text-emerald-600 font-extrabold flex items-center space-x-1.5 animate-fade-in text-[11px]">
                                 <Check className="w-3.5 h-3.5 shrink-0" />
                                 <span>{language === 'en' ? "Thanks for your feedback!" : "Merci pour votre avis !"}</span>
                               </span>
                             ) : (
                               <>
                                 <button
                                   onClick={() => setHelpfulVotes(prev => ({ ...prev, [faq.id]: 'yes' }))}
                                   className="px-2.5 py-1 border border-gray-200 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/20 transition-colors rounded-none font-bold text-[10px] cursor-pointer flex items-center space-x-1"
                                 >
                                   <ThumbsUp className="w-3 h-3 text-slate-400" />
                                   <span>{language === 'en' ? "Yes" : "Oui"}</span>
                                 </button>
                                 <button
                                   onClick={() => setHelpfulVotes(prev => ({ ...prev, [faq.id]: 'no' }))}
                                   className="px-2.5 py-1 border border-gray-200 hover:border-rose-500 hover:text-rose-600 hover:bg-rose-50/20 transition-colors rounded-none font-bold text-[10px] cursor-pointer"
                                 >
                                   {language === 'en' ? "No" : "Non"}
                                 </button>
                               </>
                             )}
                           </div>
                         </div>

                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             );
          })}

          {/* EMPTY SEARCH RESULTS STATE */}
          {filteredFaqs.length === 0 && (
            <div className="py-12 px-6 border border-dashed border-gray-200 bg-white/50 text-center space-y-4 max-w-xl mx-auto" id="faq-empty-state">
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-none mx-auto border border-gray-200/50">
                <HelpCircle className="h-5 w-5 text-slate-400" />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-extrabold text-slate-800">
                  {language === 'en' ? "No questions found matching your search" : "Aucun résultat trouvé pour votre recherche"}
                </h4>
                <p className="text-xs text-slate-500 font-semibold max-w-sm mx-auto leading-relaxed">
                  {language === 'en' 
                    ? `We couldn't find any FAQs for "${searchQuery}". Try adjusting your keywords or email support directly.`
                    : `Aucune réponse ne correspond à « ${searchQuery} ». Essayez d'autres mots-clés ou écrivez-nous.`}
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => setSearchQuery("")}
                  className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition-colors cursor-pointer rounded-none border border-blue-600"
                >
                  {language === 'en' ? "Reset Filters" : "Réinitialiser"}
                </button>
                <a
                  href="mailto:astrateqgadgets@yahoo.com"
                  className="px-4 py-1.5 border border-slate-200 hover:border-slate-300 text-slate-700 bg-white text-xs font-bold transition-colors inline-block text-center rounded-none"
                >
                  {language === 'en' ? "Email Support" : "Contacter l'aide"}
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Support disclaimer advice block with hover indicator leading to contact details */}
        <div className="p-4 bg-slate-50 border border-gray-200 rounded-none max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-3" id="faq-footer-action">
          <div className="text-center sm:text-left flex items-center space-x-2.5 text-xs">
            <Mail className="w-4.5 h-4.5 text-blue-600 shrink-0" />
            <span className="text-slate-500 font-bold font-sans">
              {language === 'en' 
                ? "Still have questions? Our Canadian team is ready to help." 
                : "Questions en suspens ? Notre équipe canadienne est là."}
            </span>
          </div>
          <button
            onClick={() => onScrollToSection('footer')}
            className="text-xs font-extrabold text-blue-600 hover:text-indigo-600 hover:underline cursor-pointer tracking-tight"
          >
            {language === 'en' ? "Contact Support →" : "Contacter l'aide →"}
          </button>
        </div>

      </div>
    </section>
  );
}
