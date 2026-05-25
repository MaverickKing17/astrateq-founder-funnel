/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SchemaMarkupProps {
  language: Language;
}

export default function SchemaMarkup({ language }: SchemaMarkupProps) {
  useEffect(() => {
    const t = translations[language];
    
    // 1. Organization Schema
    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Astrateq Gadgets Inc.",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "addressCountry": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-800-AST-GADT",
        "contactType": "Customer Support",
        "availableLanguage": ["English", "French"],
        "areaServed": "CA"
      },
      "founder": {
        "@type": "Person",
        "name": "Damian"
      },
      "knowsAbout": [
        "AI Automotive Safety",
        "Predictive OBD-II Diagnostics",
        "Winter Driving Intelligence",
        "Computer Vision Driving Safety Systems"
      ]
    };

    // 2. Product & Offer Schema
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "ASTRA-AI Predictive Vehicle Safety System",
      "image": [
        `${window.location.origin}/images/product-dongle.png`,
        `${window.location.origin}/images/product-dashcam.png`
      ],
      "description": t.hero.description,
      "brand": {
        "@type": "Brand",
        "name": "Astrateq Gadgets"
      },
      "category": "Automotive Electronics > Vehicle Safety Systems",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "38",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "CAD",
        "lowPrice": "25.00",
        "highPrice": "149.00",
        "offerCount": "3",
        "priceValuation": "Deposit",
        "offers": [
          {
            "@type": "Offer",
            "name": t.pricing.tiers.earlybird.name,
            "price": "25.00",
            "priceCurrency": "CAD",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/PreOrder",
            "url": `${window.location.origin}#pricing`
          },
          {
            "@type": "Offer",
            "name": t.pricing.tiers.founding.name,
            "price": "79.00",
            "priceCurrency": "CAD",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/PreOrder",
            "url": `${window.location.origin}#pricing`
          },
          {
            "@type": "Offer",
            "name": t.pricing.tiers.guardian.name,
            "price": "149.00",
            "priceCurrency": "CAD",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/PreOrder",
            "url": `${window.location.origin}#pricing`
          }
        ]
      }
    };

    // 3. FAQPage Schema
    const faqSchemaCount = t.faqs.list.length;
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": t.faqs.list.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${faq.answer} ${faq.detail}`
        }
      }))
    };

    // 4. Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Astrateq Gadgets",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ASTRA-AI",
          "item": `${window.location.origin}/#hero`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Reservation",
          "item": `${window.location.origin}/#pricing`
        }
      ]
    };

    // Inject tags
    const injectJsonLd = (id: string, schemaObj: object) => {
      let scriptTag = document.getElementById(id) as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = id;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaObj, null, 2);
    };

    injectJsonLd('schema-org-org', orgSchema);
    injectJsonLd('schema-org-product', productSchema);
    injectJsonLd('schema-org-faq', faqSchema);
    injectJsonLd('schema-org-breadcrumb', breadcrumbSchema);

    // Dynamic alternate hreflang tags for Canada multilingual crawl consistency
    let hrefEn = document.querySelector('link[hreflang="en-ca"]') as HTMLLinkElement | null;
    if (!hrefEn) {
      hrefEn = document.createElement('link');
      hrefEn.rel = 'alternate';
      hrefEn.hreflang = 'en-ca';
      document.head.appendChild(hrefEn);
    }
    hrefEn.href = `${window.location.origin}/?lang=en`;

    let hrefFr = document.querySelector('link[hreflang="fr-ca"]') as HTMLLinkElement | null;
    if (!hrefFr) {
      hrefFr = document.createElement('link');
      hrefFr.rel = 'alternate';
      hrefFr.hreflang = 'fr-ca';
      document.head.appendChild(hrefFr);
    }
    hrefFr.href = `${window.location.origin}/?lang=fr`;

    return () => {
      // Clean up tags when unmounting
      document.getElementById('schema-org-org')?.remove();
      document.getElementById('schema-org-product')?.remove();
      document.getElementById('schema-org-faq')?.remove();
      document.getElementById('schema-org-breadcrumb')?.remove();
    };
  }, [language]);

  return null;
}
