/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'en' | 'fr';

export type Tier = 'earlybird' | 'founding' | 'guardian';

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  detail: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  shortDescription: string;
  textBlock: string; // Extensive technical details (200-300 words) for search crawlers (AEO)
}

export interface ResearchStudy {
  title: string;
  methodology: string;
  findings: string[];
  metrics: { label: string; value: string }[];
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  metrics: string;
}

export interface TranslationDictionary {
  meta: {
    title: string;
    description: string;
  };
  navigation: {
    logo: string;
    links: {
      howItWorks: string;
      compatibility: string;
      pricing: string;
      faq: string;
    };
    cta: string;
  };
  hero: {
    batch: string;
    badge: string;
    headline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustMicrocopy: string;
    metrics: {
      spots: string;
      spotsText: string;
      shipping: string;
      shippingText: string;
      families: string;
      familiesText: string;
    };
  };
  features: {
    titleText: string;
    titleItalic: string;
    description: string;
    items: FeatureItem[];
  };
  founderQuote: {
    quote: string;
    author: string;
    role: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    trustTitle: string;
    trustList: string[];
    tiers: {
      earlybird: {
        name: string;
        price: string;
        period: string;
        summary: string;
        features: string[];
        badge?: string;
      };
      founding: {
        name: string;
        price: string;
        period: string;
        summary: string;
        features: string[];
        badge?: string;
      };
      guardian: {
        name: string;
        price: string;
        period: string;
        summary: string;
        features: string[];
        badge?: string;
      };
    };
    ctaFormat: string;
  };
  howItWorks: {
    title: string;
    steps: {
      step01: {
        title: string;
        description: string;
        detail: string;
      };
      step02: {
        title: string;
        description: string;
        detail: string;
      };
      step03: {
        title: string;
        description: string;
        detail: string;
      };
    };
  };
  compatibility: {
    title: string;
    subtitle: string;
    placeholderYear: string;
    placeholderMake: string;
    placeholderModel: string;
    btnCheck: string;
    successMessage: string;
    secondaryCta: string;
  };
  whatIsIncluded: {
    title: string;
    subtitle: string;
    items: string[];
  };
  timeline: {
    title: string;
    subtitle: string;
    stages: {
      today: { date: string; title: string; desc: string };
      q3_2025: { date: string; title: string; desc: string };
      q4_2025: { date: string; title: string; desc: string };
      q1_2026: { date: string; title: string; desc: string };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    list: Testimonial[];
  };
  aeoAuthSections: {
    winterDrivingId: string;
    winterDrivingTitle: string;
    winterDrivingText: string;
    safetyWorksTitle: string;
    safetyWorksText: string;
    complianceTitle: string;
    complianceText: string;
    researchTitle: string;
    studies: ResearchStudy[];
  };
  faqs: {
    title: string;
    subtitle: string;
    disclosure: string;
    list: FAQItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    description: string;
    btnReserve: string;
  };
  footer: {
    privacy: string;
    refund: string;
    contact: string;
    casl: string;
    address: string;
    bilingualNote: string;
    allRightsReserved: string;
    subLegalText: string;
  };
}
