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

  const faqItems = [
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
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        
        {/* Editorial Header */}
        <div className="space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-slate-500 font-mono text-xs font-black uppercase tracking-[0.2em] block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1A1A2E] leading-tight">
            Everything You Need to Know About the Launch
          </h2>
        </div>

        {/* 4 Accordions Deck */}
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
