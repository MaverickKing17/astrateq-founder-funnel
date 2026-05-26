/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Language } from '../types';

interface FAQProps {
  language: Language;
  onScrollToSection: (sectionId: string) => void;
}

export default function FAQ({ language, onScrollToSection }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = language === 'en' ? [
    {
      question: "What is included in my reservation?",
      answer: "Your reservation secures your placement in the manufacturing queue of Batch 01. When production completes, you will receive the Astra-AI smart OBD-II hardware device, the high-definition active dual-lens camera system, and lifetime mechanical software updates."
    },
    {
      question: "Is my deposit fully refundable?",
      answer: "Yes, 100%. Your deposit is held securely through Stripe and is fully refundable at any moment with a simple, hassle-free 1-click cancel layout directly within your reservation portal."
    },
    {
      question: "When will my Astra-AI shipment arrive?",
      answer: "Batch 01 estimated shipping dates are currently being finalized. Priority tracking and customized shipping notifications will be issued to founding members first as production batches are completed."
    },
    {
      question: "How does the local AI processing protect my data?",
      answer: "Unlike typical cameras, Astra-AI features zero cloud-dependent video feeds. All machine learning computations, lane mappings, and OBD-II diagnostics run fully locally on our custom on-board edge processor, ensuring your privacy is entirely local and protected."
    },
    {
      question: "How does ASTRA-AI connect to older or modern vehicles?",
      answer: "The hardware interfaces directly with your vehicle's standard OBD-II diagnostic port (mandatory on all passenger vehicles sold in Canada since 1998). It derives power directly from this interface and performs passive telemetry reads, meaning it requires zero professional installation, wire splicing, or specialist mechanical tools."
    },
    {
      question: "How does the winterized optical system handle extreme Canadian weather?",
      answer: "The exterior dual-lens camera housing integrates active low-draw thermodynamic induction coils that clear frost, snowfall, and frozen condensation from the lenses in under 55 seconds. Furthermore, our neural models are localized specifically for whiteout and high-reflection snow glare, ensuring lane-tracking and forward distance monitoring operate reliably down to -40°C."
    },
    {
      question: "Does the predictive diagnostics feature require a monthly subscription fee?",
      answer: "No. All core predictive safety alerts, local thermal assessments, crash detection indices, and real-time haptic collision warning computations run entirely on-device and are available at no ongoing monthly charge. You purchase the hardware and receive lifetime firmware improvements free of cost."
    }
  ] : [
    {
      question: "Qu'est-ce qui est inclus dans ma réservation ?",
      answer: "Votre réservation garantit votre place dans la file d'attente de fabrication de la série 01. Une fois la production terminée, vous recevrez l'appareil de diagnostic OBD-II intelligent Astra-AI, la caméra haute définition à double objectif actif et les mises à jour logicielles de sécurité à vie."
    },
    {
      question: "Mon dépôt de garantie est-il entièrement remboursable ?",
      answer: "Oui, à 100 %. Votre dépôt est conservé en toute sécurité par Stripe et est entièrement remboursable à tout moment d'un simple clic directement depuis votre espace de réservation personnalisé."
    },
    {
      question: "Quand mon envoi Astra-AI arrivera-t-il ?",
      answer: "Les dates d'expédition estimées pour la série 01 sont en cours de finalisation. Le suivi prioritaire et les notifications personnalisées seront envoyés d'abord aux membres fondateurs à mesure du déploiement des lots de production."
    },
    {
      question: "Comment le traitement IA local protège-t-il mes données ?",
      answer: "Contrairement aux caméras grand public, Astra-AI ne dépend d'aucun flux vidéo basé sur le cloud. Tous les calculs d'apprentissage automatique, de cartographie des voies et de diagnostic OBD-II s'exécutent entièrement en local sur notre processeur embarqué, protégeant ainsi totalement votre vie privée."
    },
    {
      question: "Comment ASTRA-AI se connecte-t-il aux véhicules anciens ou récents ?",
      answer: "Le matériel se connecte directement au port de diagnostic OBD-II standard de votre voiture (obligatoire sur tous les véhicules vendus au Canada depuis 1998). Il s'alimente directement par cette interface pour lire passivement la télémétrie, ce qui évite toute modification de câbles ou l'aide d'un mécanicien professionnel."
    },
    {
      question: "Comment le système optique hivernisé gère-t-il les conditions climatiques extrêmes ?",
      answer: "Le boîtier de la caméra intègre des bobines d'induction thermodynamique actives à basse consommation qui dissipent le givre, la neige et la condensation congelée des objectifs en moins de 55 secondes. Nos modèles neuronaux sont de plus adaptés spécifiquement pour le reflet intense de la neige et la faible visibilité jusqu'à -40°C."
    },
    {
      question: "Le service de diagnostic prédictif nécessite-t-il un abonnement mensuel ?",
      answer: "Non. Toutes les alertes de sécurité prédictives de base, les examens thermiques locaux, les indices de détection de choc et les calculs d'aide à la conduite s'exécutent pleinement sur l'appareil sans frais d'abonnement mensuel récurrent. Vous achetez le matériel et profitez des améliorations logicielles gratuites à vie."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        {/* Editorial Header */}
        <div className="space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
            {language === 'en' ? "FREQUENTLY ASKED QUESTIONS" : "QUESTIONS FRÉQUEMMENT POSÉES"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
            {language === 'en' ? "Everything You Need to Know About the Launch" : "Tout ce que vous devez savoir sur le lancement"}
          </h2>
        </div>

        {/* Accordions Deck */}
        <div className="space-y-4 max-w-3xl mx-auto text-left" id="faq-deck">
          {faqItems.map((item, id) => {
            const isOpen = openIndex === id;
            return (
              <div 
                key={id} 
                className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden"
                id={`faq-item-${id}`}
              >
                <button
                  onClick={() => toggleAccordion(id)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer transition-colors hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-sm sm:text-base font-bold text-[#1A1A2E] pr-4">
                    {item.question}
                  </span>
                  
                  {/* Clean +/- Style Indicator */}
                  <span className="font-mono text-lg font-bold text-[#1A1A2E] select-none shrink-0 w-6 text-center">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-550 border-t border-slate-100 animate-fade-in">
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
