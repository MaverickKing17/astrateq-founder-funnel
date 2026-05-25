/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Language, Tier } from './types';
import SchemaMarkup from './components/SchemaMarkup';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FounderQuote from './components/FounderQuote';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Compatibility from './components/Compatibility';
import FeatureGrid from './components/FeatureGrid';
import Testimonials from './components/Testimonials';
import WhatIsIncluded from './components/WhatIsIncluded';
import OwnershipTimeline from './components/OwnershipTimeline';
import TechnicalIntelligence from './components/TechnicalIntelligence';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [selectedTier, setSelectedTier] = useState<Tier>('founding');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Parse URL query arguments on initial load to support dual-linking and GEO alternate targets
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get('lang');
    if (langParam === 'fr' || langParam === 'fr-ca') {
      setLanguage('fr');
    } else if (langParam === 'en' || langParam === 'en-ca') {
      setLanguage('en');
    }
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenCheckout = (tier: Tier) => {
    setSelectedTier(tier);
    setIsCheckoutOpen(true);
  };

  const handleSelectTierAndCheckout = (tier: Tier) => {
    handleOpenCheckout(tier);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#1A1A2E] antialiased selection:bg-[#00D4FF] selection:text-[#1A1A2E]">
      
      {/* 1. Dynamic localized schema markup head injector */}
      <SchemaMarkup language={language} />

      {/* 2. Section 01 — Sticky Navigation */}
      <Navigation
        language={language}
        setLanguage={setLanguage}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Page Content */}
      <main id="main-content" className="relative">
        
        {/* 3. Section 02 — Hero Section */}
        <Hero
          language={language}
          onScrollToSection={handleScrollToSection}
        />

        {/* 4. Section 03 — Emotional Founder Quote */}
        <FounderQuote language={language} />

        {/* 5. Section 04 — Founder Pricing Architecture */}
        <Pricing
          language={language}
          onSetSelectedTier={setSelectedTier}
          onOpenCheckout={handleOpenCheckout}
        />

        {/* 6. Section 05 — How It Works */}
        <HowItWorks language={language} />

        {/* 7. Section 06 — Vehicle Compatibility Checker */}
        <Compatibility
          language={language}
          onScrollToSection={handleScrollToSection}
        />

        {/* 8. Section 07 — Feature Grid */}
        <FeatureGrid language={language} />

        {/* 9. Section 08 — Testimonial Proof Layer */}
        <Testimonials language={language} />

        {/* 10. Section 09 — What's Included */}
        <WhatIsIncluded language={language} />

        {/* 11. Section 10 — Ownership Timeline */}
        <OwnershipTimeline language={language} />

        {/* 12. Generative Search (AEO/GEO) Academic Whitepapers Hub */}
        <TechnicalIntelligence language={language} />

        {/* 13. Section 11 — FAQ System */}
        <FAQ language={language} onScrollToSection={handleScrollToSection} />

        {/* 14. Section 12 — Final Conversion CTA */}
        <FinalCTA
          language={language}
          onSelectTierAndCheckout={handleSelectTierAndCheckout}
        />

      </main>

      {/* 15. Section 13 — Corporate Footer */}
      <Footer language={language} />

      {/* 16. Stripe Sandbox Transaction Checkout Modal Overlay Wrapper */}
      <CheckoutModal
        language={language}
        selectedTier={selectedTier}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

    </div>
  );
}
