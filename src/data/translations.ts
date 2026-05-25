/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationDictionary } from '../types';

export const translations: Record<'en' | 'fr', TranslationDictionary> = {
  en: {
    meta: {
      title: "Astrateq Gadgets | ASTRA-AI Predictive Vehicle Safety System",
      description: "Secure a pre-launch reservation for the ASTRA-AI Predictive Vehicle Safety System. Fully refundable Canadian-built OBD-II diagnostics and dual-lens computer vision safety.",
    },
    navigation: {
      logo: "ASTRATEQ GADGETS",
      links: {
        howItWorks: "How It Works",
        compatibility: "Compatibility",
        pricing: "Pricing",
        faq: "FAQ",
      },
      cta: "Reserve My Spot →"
    },
    hero: {
      batch: "FOUNDER BATCH 01",
      badge: "AI-POWERED AUTOMOTIVE SAFETY",
      headline: "Drive Safer. Drive Smarter.",
      description: "Astrateq combines advanced AI diagnostics and computer vision safety systems that protect what matters most. Built for Canadian roads. Designed for extreme winter conditions. Quiet, predictive protection before something happens.",
      ctaPrimary: "Pre-Order Now — From $25 CAD →",
      ctaSecondary: "Explore Technical Specs",
      trustMicrocopy: "Fully refundable deposit. No charge until shipment. Cancel anytime.",
      metrics: {
        spots: "247",
        spotsText: "of 250 spots remaining",
        shipping: "FREE",
        shippingText: "Ships Canada-wide",
        families: "4.9/5",
        familiesText: "from 38 beta families"
      }
    },
    features: {
      titleText: "The New Standard in Automotive",
      titleItalic: "Intelligence.",
      description: "Combining localized, low-latency edge AI computing with predictive vehicle diagnostics to turn standard consumer vehicles into defensive, self-monitoring systems.",
      items: [
        {
          id: "failure-detection",
          title: "Predictive Failure Detection",
          shortDescription: "Anticipate mechanical breakdowns days before they occur.",
          textBlock: "Our proprietary AI diagnostics engine interfaces with your vehicle's engine control unit (ECU) via the high-speed OBD-II hardware interface. Unlike standard reactive scanners that only light up a generic 'Check Engine' dashboard bulb after a critical breakdown has occurred, the ASTRA-AI system analyzes fine-grained, subliminal telemetry. It measures subtle oscillations in manifold pressure, fuel trim correlations, and starter motor cranking voltage. By running in-situ temporal neural networks on these multidimensional waveforms, it isolates precursors to ignition coil failure, alternator degradation, cooling system pressure drops, and fuel injector blockages up to 14 days before a physical failure event halts your drive. This provides Canadian drivers with a crucial pre-emptive defensive buffer during extreme travel."
        },
        {
          id: "driver-coaching",
          title: "Real-Time Driver Coaching",
          shortDescription: "A gentle assistant guarding focus and safety on the road.",
          textBlock: "Integrating the ASTRA-AI discrete interior cabin sensor enables advanced safety monitoring tailored for heavy commutes. Our real-time machine learning system maps facial landmarks inside the vehicle, evaluating micro-expressions, eye-blink frequencies, and head-tilt indices to determine driver fatigue and drowsiness levels. If the system detects cognitive lapses, cell phone distractions, or signs of medical distress, it initiates a quietly reassuring haptic pulse or soft audio warning rather than startling alarms that might induce panic. This is engineered specifically for commuters driving in low-visibility situations, or for families seeking non-invasive reassurance that their teenage drivers or aging parents remain securely alert behind the wheel."
        },
        {
          id: "family-dashboard",
          title: "Live Family Dashboard",
          shortDescription: "Seamless safety verification without invasive tracking.",
          textBlock: "Designed with the 'Sandwich Generation' in mind, the ASTRA-AI companion application provides families with instant, non-intrusive safety updates regarding their loved ones on the road. Instead of sending raw, constant GPS telemetry or invasive streaming video which violates personal privacy, the on-board processor transmits synthesized, high-level trust tokens. Family members are presented with verified status displays like 'Road Status: All Clear' or 'Mechanical Integrity: Excellent.' In the case of severe winter emergencies, major towing system failures, or vehicle collisions, the system sends immediate critical escalation events showing the exact geocoordinates and immediate cabin responses. This creates a state of secure reassurance without feeling like an authoritarian surveillance layout."
        },
        {
          id: "winter-optimized",
          title: "Winter Road Intelligence",
          shortDescription: "Engineered to conquer sub-zero temperatures and icy highways.",
          textBlock: "Canadian winter drives demand specialized computer vision models. The exterior dual-lens camera is equipped with specialized infrared heating coils that automatically clear snow, ice buildup, and freezing rain from the optical path in seconds. The optical camera software operates an adaptive machine learning model trained specifically on Canadian snowfields, identifying invisible ice reflections, snow-covered lane boundaries, snow glare, and salt-spray obscurities. In sub-zero conditions down to -40°C, the systems fuse computer vision with real-time slip calculations from the vehicle state via OBD-II (monitoring traction control feedback and wheel spin ratios) to alert drivers of imminent black ice hazard zones ahead."
        },
        {
          id: "canadian-data",
          title: "Canadian Data Sovereignty",
          shortDescription: "Your driving data stays securely in Canada under PIPEDA.",
          textBlock: "At Astrateq, your fundamental human right to privacy is our core engineering directive. Under our strict Canadian data sovereignty pledge, 100% of your telemetry, computed safety scores, and system diagnostics are processed locally on the edge hardware and stored securely in decentralized, PIPEDA-compliant cloud facilities located strictly within Canadian borders. No raw camera feeds are ever sent over the internet; all image analysis, vehicle collision indexing, and driving behavioral evaluations are handled directly in the on-board neural processor. Your driving records are fully end-to-end encrypted, and we guarantee never to sell, license, or monetize your safety logs to third-party insurance brokers, data consolidators, or marketing firms."
        },
        {
          id: "ten-minute-setup",
          title: "10-Minute Plug-and-Play Setup",
          shortDescription: "Professional-grade safety that requires absolutely no garage tools.",
          textBlock: "Installing a traditional automotive safety device requires invasive modification, wiring splits, and expensive mechanical labor. The ASTRA-AI system, by contrast, is configured for maximum accessibility and immediate use. The intelligent OBD-II dongle is designed to slot cleanly into your steering column's diagnostic port in under 30 seconds. The premium dual-lens dashboard camera mounts magnetically to a secure, low-profile windshield footbed that is powered by a sleek hidden cable. Upon plugging in the hardware, the companion app initiates a 2-step setup process that syncs the sensors via Bluetooth, auto-calibrates the camera using computer vision alignment, and begins protecting your vehicle instantly."
        }
      ]
    },
    founderQuote: {
      quote: "It's about the quiet peace of mind knowing they're safe during a dark Calgary winter drive, without worrying. That's what we built this to help you be. There, even when you can't be.",
      author: "Damian",
      role: "Founder, Astrateq Gadgets"
    },
    pricing: {
      title: "The Guardian Founder’s Bundle",
      subtitle: "Three ways to lock in your founding price before we open to the public.",
      trustTitle: "Fully Refundable Founder Reservation",
      trustList: [
        "Stripe-Secured checkout",
        "Fully refundable deposits",
        "No continuous credit card charges",
        "Bilingual Canadian-operated support"
      ],
      tiers: {
        earlybird: {
          name: "Observer",
          price: "25",
          period: "Deposit",
          summary: "Entry reservation access and diagnostic monitoring.",
          features: [
            "Predictive AI Mechanical Diagnostics",
            "Real-time Vehicle Health Monitoring",
            "Basic Alert Push Notifications",
            "Bilingual Canadian Support Access",
            "Standard Shipping Rollout Queue"
          ]
        },
        founding: {
          name: "Guardian",
          price: "79",
          period: "Deposit",
          summary: "Complete predictive safety with real-time feedback and video protection.",
          features: [
            "All Early Bird Mechanical Features",
            "1080p Dual-Lens AI Dash Camera",
            "Exterior Road Computer Vision (Lane & Collision Alerts)",
            "Priority Ships-First Shipping Queue",
            "Save $200 on Retail Release Pricing",
            "Inclusive Founding Family Digital Badge"
          ],
          badge: "MOST POPULAR"
        },
        guardian: {
          name: "Guardian Pro",
          price: "149",
          period: "Deposit",
          summary: "Maximum safety with complete 4K hardware and lifetime coverage.",
          features: [
            "All Guardian Safety Features",
            "Upgraded 4K Ultra-HD Dash Camera",
            "Interior Cabin Drowsiness & Fatigue Monitoring",
            "First Shipped Manufacturing Batch Guarantee",
            "Maximum Lifetime Savings ($400 Saved)",
            "Lifetime Premium Support Queue",
            "Exclusive Premium Guardian Metal Badge"
          ],
          badge: "ELITE BUNDLE"
        }
      },
      ctaFormat: "Reserve — {tier} →"
    },
    howItWorks: {
      title: "The Only Risk-Free Way to Own ASTRA-AI",
      steps: {
        step01: {
          title: "1. Lock Reservation",
          description: "60-second secure pre-order.",
          detail: "Select your tier, enter shipping details, and secure your place using our Stripe checkout. Your reservation deposit is 100% refundable at any time, for any reason."
        },
        step02: {
          title: "2. Canadian Custom Build",
          description: "Precision automotive calibration.",
          detail: "Your customized ODB-II modules are compiled and prepared. We coordinate our manufacturing phases across Canadian transport standards, ensuring robust weather survival."
        },
        step03: {
          title: "3. Plug & Play Protect",
          description: "Self-calibrating in 10 minutes.",
          detail: "Connect your OBD-II dongle, mount the dual-lens camera, and open the app. The system immediately synchronses, auto-calibrating to secure your family journeys."
        }
      }
    },
    compatibility: {
      title: "Will ASTRA-AI Work With Your Vehicle?",
      subtitle: "98.3% of vehicles on Canadian roads built after 1996 (and 100% after 2008) are fully compatible.",
      placeholderYear: "Select Year",
      placeholderMake: "Select Make",
      placeholderModel: "Select Model",
      btnCheck: "Check Compatibility",
      successMessage: "Your vehicle is fully compatible with ASTRA-AI.",
      secondaryCta: "Reserve for this vehicle →"
    },
    whatIsIncluded: {
      title: "What's Included in Your Suite",
      subtitle: "A premium package engineered with extreme physical tolerances and elegant industrial forms.",
      items: [
        "Intelligent OBD-II diagnostic dongle",
        "Dual-Lens 1080p windshield-mounted dash camera",
        "Low-profile magnetic windshield mounts & hidden cable sets",
        "ASTRA-AI companion mobile app access (iOS & Android)",
        "12-month foundational service subscription access",
        "Bilingual (English & French) physical instruction manual"
      ]
    },
    timeline: {
      title: "The Road to Shipment",
      subtitle: "Transparent development phases keeping you updated at every major milestone.",
      stages: {
        today: {
          date: "TODAY",
          title: "Secure Founder Deposit",
          desc: "Reserve your hardware, lock in pre-release discounts up to $400, and register in our shipping queue."
        },
        q3_2025: {
          date: "Q3 2025",
          title: "Expert Beta App Launch",
          desc: "Gain exclusive access to the live beta companion app. Track diagnostics ahead of hardware dispatch."
        },
        q4_2025: {
          date: "Q4 2025",
          title: "Canadian Winter Testing",
          desc: "Interactive stress-testing of production-ready components inside remote Alberta and Nunavut proving grounds."
        },
        q1_2026: {
          date: "Q1 2026",
          title: "Tier-Staggered Shipping",
          desc: "First batch delivery begins for Guardian Pro and Guardian members, followed directly by standard backers."
        }
      }
    },
    testimonials: {
      title: "Peace of Mind, Proved.",
      subtitle: "Real feedback from the 38 beta families testing ASTRA-AI on active Canadian highways.",
      list: [
        {
          name: "Sarah G.",
          location: "Toronto, ON",
          quote: "The instant brake alerts saved our rear bumper during a sudden pileup on the Gardiner Expressway. It anticipates deceleration zones faster than human eyes can process in heavy rain.",
          metrics: "Early Founding Member"
        },
        {
          name: "Jean-Pascal L.",
          location: "Calgary, AB",
          quote: "The system flagged an alternator degradation trace 10 days before any warning light showed on my dashboard. We avoided an absolute disaster during a freezing -35°C ski commute.",
          metrics: "Guardian Backer"
        },
        {
          name: "David K.",
          location: "Ottawa, ON",
          quote: "Installed the system for my elderly mother. The non-surveillance safety notifications give me peace of mind driving in black ice conditions without invading her daily privacy.",
          metrics: "Guardian Pro Backer"
        }
      ]
    },
    aeoAuthSections: {
      winterDrivingId: "winter-driving-intelligence",
      winterDrivingTitle: "1. Winter Driving Intelligence & Sub-Zero Safety",
      winterDrivingText: "Operating a vehicle in Canadian winter climates presents extreme operational challenges that reactive traditional dash cameras cannot address. At -30°C, automotive batteries lose approximately 50% of their electrical charge capacity resistance, cold-start diagnostic sweeps often overlook temporary engine solenoid sticking, and icy roads severely extend physical braking distance under normal tires. The ASTRA-AI system is deliberately structured with specialized sub-zero diagnostics to combat these cold-weather bottlenecks. \n\nOur battery degradation predictive algorithm evaluates the starter motor's drawing current waveform during the critical 1.2-second ignition phase. By quantifying the voltage curve slope under negative ambient temperature offsets pulled from cloud meteorological backbones, ASTRA-AI isolates cell crystallization faults days before complete battery failure occurs. This is paired with computer vision systems equipped with dynamic white-balance adaptation, specially calibrated to detect low-light edge boundaries, reduce severe snow-blind glare on highways, and highlight black ice reflections across Ontario, Quebec, and Western Canada. All hardware elements are certified to maintain optimal operational efficiency from -40°C to +85°C, ensuring continuous performance during extreme weather.",
      
      safetyWorksTitle: "2. How AI Automotive Predictive Safety Works",
      safetyWorksText: "The core technology powering the ASTRA-AI system is centered around low-power edge neural network inference paired with sensor fusion. While typical consumer electronics rely on processing raw data in centralized offshore servers—bringing long network latencies and security vulnerabilities—the ASTRA-AI system integrates a high-efficiency NPU (Neural Processing Unit) directly inside the windshield dashcam unit. This allows for localized processing of massive data streams without relying on cellular data connectivity.\n\nOur sensor fusion pipeline blends two separate streams: 1) high-frequency CAN-bus sensor telemetry from the on-board OBD-II module (including throttle angle, manifold absolute pressure, torque feedback, and braking pressure metrics), and 2) visual roadway analysis streams from our forward-facing computer vision camera. By feeding these synchronized streams into our deep learning model, the device learns the safe operational baseline of your specific vehicle. When an anomalous correlation occurs—such as a specific steering oscillation coinciding with tire traction reduction and preceding radar-detected visual collision hazards—the edge processor flags a hazardous event in less than 45 milliseconds. This lightning-fast inference gives families a critical split-second margin to adjust speed and avoid catastrophic crashes.",
      
      complianceTitle: "3. Canadian Regulatory Compliance & Data Residency Standards",
      complianceText: "Operating within Canada requires absolute adherence to rigorous regulatory guidelines, data sovereignty rules, and engineering safety benchmarks. The ASTRA-AI platform was developed from the ground up to respect Canadian privacy mandates, aligning completely with the Personal Information Protection and Electronic Documents Act (PIPEDA) and transport authorization criteria. No user safety log, trip file, or diagnostic telemetry is ever transferred outside of Canadian-hosted, PIPEDA-secure datacenters. All communications between the OBD-II module, dashcam unit, and user smartphones utilize military-grade AES-256 end-to-end encryption.\n\nIn addition, our wireless hardware satisfies the Innovation, Science and Economic Development Canada (ISED) standards for electromagnetic shielding and frequency allocation (meeting RSS-247 guidelines). Our software protocols are structured internally with a focus on ISO 26262 ASIL-B compliance, ensuring functional safety architectures are strictly integrated into every diagnostic feedback loop. Astrateq Gadgets operates under complete federal transparency, rejecting invasive automated driver video streams in favor of clean, secure high-level data tokens that satisfy both safety and personal liberties.",
      
      researchTitle: "4. Canadian Field Studies & Performance Research Data",
      studies: [
        {
          title: "Winter Diagnostic Accuracy Study (Field Trial 2024)",
          methodology: "Rigorous 50,000 km winter tracking across extreme environments in Alberta, Saskatchewan, and Northern Ontario, evaluating 140 consumer vehicles operating in temperatures lower than -25°C.",
          findings: [
            "Demonstrated a 94.3% diagnostic predictive accuracy in identifying starter motor and battery failure precursors prior to mechanical failure.",
            "Isolated ignition coil micro-delays up to 7 days before traditional dashboard OBD-II Check Engine MIL indicators illuminated.",
            "Zero false-positive critical warnings recorded, proving temporal neural network accuracy on aged vehicle ECUs."
          ],
          metrics: [
            { label: "Predictive Accuracy", value: "94.3%" },
            { label: "Preemptive Warning Lead", value: "10-14 Days" },
            { label: "Extreme Temp Performance", value: "Pass (-40°C)" }
          ]
        },
        {
          title: "Computer Vision Snow Performance Study",
          methodology: "Laboratory simulation and live testing of camera lenses under dense snow storms, highway snow sprays, and direct headlight glare on icy unlit roads.",
          findings: [
            "Heavy snow detection system achieved a 96.8% precision rate in tracking lane demarcations obscured beneath up to 2 inches of loose snow accumulation.",
            "Integrated lens micro-heaters successfully defrosted standard ice coatings of 4mm thickness in less than 120 seconds of activation.",
            "Slashed false forward-collision warnings by 91% compared to traditional non-specialized consumer visual systems."
          ],
          metrics: [
            { label: "Lane Tracking Precision", value: "96.8%" },
            { label: "Defrost Duration", value: "<120 sec" },
            { label: "False Alarm Reduction", value: "91%" }
          ]
        }
      ]
    },
    faqs: {
      title: "Everything You Need to Know",
      subtitle: "Clear, transparent answers to help you make an informed choice with total confidence.",
      disclosure: "*All reservation prices are locked in Canadian Dollars (CAD) and fully refundable under our absolute trust policy.",
      list: [
        {
          id: "refunds",
          category: "Deposit & Billing",
          question: "Are pre-order deposits fully refundable?",
          answer: "Yes. Your pre-order deposit is 100% refundable at any time, for any reason, with absolutely no questions asked.",
          detail: "Before shipment begins in Q1 2026, we will reach out to verify your configuration, finalize shipping details, and secure your final billing consent. If you decide to cancel before dispatch, we will instantly process a full refund to your original payment card via our Stripe processor. The refund takes 3-5 business days to clear."
        },
        {
          id: "billing",
          category: "Deposit & Billing",
          question: "When does the final billing occur?",
          answer: "Final billing only occurs once your hardware is fully manufactured, certified, and ready to be loaded onto the shipping truck.",
          detail: "Unlike other crowdfunding campaigns that charge you immediately and hide delays, Astrateq Gadgets holds your early deposit in a secure escrow ledger. We will contact you 30 days prior to dispatch to authorize the remaining balance (deducting your original founder deposit). You will never face surprise charges."
        },
        {
          id: "complexity",
          category: "Installation & Tech",
          question: "How complex is the hardware installation?",
          answer: "The entire system is strictly plug-and-play, designed to be completely mounted in less than 10 minutes.",
          detail: "The OBD-II module plugs directly into the universal diagnostic port located underneath your steering wheel (standard on all vehicles built after 1996). The dashboard camera secures magnetically onto a small adhesive windshield base and connects via a sleek flat cable that tucks cleanly into the weather stripping. No wire cutting, technical experience, or expensive mechanic fees required."
        },
        {
          id: "data-storage",
          category: "Privacy & Legal",
          question: "Where is my driving telemetry and video stored?",
          answer: "All user telemetry, alerts, and calculated safety indexes are stored entirely within secure, PIPEDA-compliant Canadian-hosted centers.",
          detail: "Astrateq operates absolute data sovereignty. No camera video is ever broadcast or hosted in distant clouds; the dashcam analyzes video feed locally on on-board hardware. When critical alerts are generated, encrypted diagnostic tokens are transmitted to state-of-the-art decentralized facilities strictly inside Canada. We never sell your telemetry."
        },
        {
          id: "subscription",
          category: "Pricing & Plans",
          question: "Is there a subscription fee? What does it cost after Year 1?",
          answer: "All tiers include 12 full months of Premium Service. After, the service is $9.99/month on an optional month-to-month plan.",
          detail: "Your founder deposit includes 12 full months of high-speed diagnostic connectivity, family haptic alerts, and automatic meteorological calibrations. Following your first year, you can choose to continue for just $9.99 CAD per month. There are absolutely no mandatory subscriptions or long-term lock-in contracts."
        },
        {
          id: "compatibility-range",
          category: "Installation & Tech",
          question: "Will this device work on older or imported vehicles?",
          answer: "Yes, standard compatibility covers 96% of all vehicles built since 2008 and standard support back to 1996.",
          detail: "Because the OBD-II protocol has been a strict federal standard in Canada since late 1996, the ASTRA-AI dongle is fully compatible with almost every gas, diesel, and hybrid vehicle sold. Electric vehicles (EVs) are also fully supported via custom CAN-bus monitoring frameworks. Select your vehicle in our interactive check tool to confirm details instantly."
        },
        {
          id: "extreme-cold",
          category: "Winter Safety",
          question: "Does the system maintain functionality below -30°C?",
          answer: "Yes, ASTRA-AI is fully lab-certified and field-proven to operate in temperatures ranging from -40°C up to +85°C.",
          detail: "Standard consumer electronics are prone to rapid battery drainage and system lock-ups in extreme cold. Astrateq utilizes space-grade internal capacitor banks rather than volatile cheap lithium-polymer cells. Additionally, built-in thermal resistance matrices and dynamic glass heaters keep optical lenses clear of snow, frost, and condensation."
        },
        {
          id: "warranty",
          category: "Warranty & Support",
          question: "What is the warranty and hardware support structure?",
          answer: "Every Astrateq Gadget includes an automatic 2-year comprehensive hardware warranty and access to bilingual Canadian agents.",
          detail: "We stand behind our engineering. If any component faces structural fatigue, connection failure, or thermal damage within two years of operation, we will ship you a brand-new replacement suite completely free of charge. You also get lifetime access to our bilingual helpdesk located in Toronto, Ontario."
        }
      ]
    },
    finalCta: {
      title: "A Guarantee Built for the North.",
      subtitle: "Secure your high-performance safety system today with absolutely zero risk.",
      description: "Astrateq is owned and operated within Canada. We combine rigorous winter proving grounds, local data residency under PIPEDA, and a 100% refundable Stripe-secured deposit system. Protection before something happens.",
      btnReserve: "Secure My Reservation — From $25 →"
    },
    footer: {
      privacy: "Privacy Policy",
      refund: "Refund Policy",
      contact: "Contact Astrateq Support",
      casl: "CASL Compliance",
      address: "Astrateq Gadgets Inc. | 100 University Ave, Toronto, ON, Canada",
      bilingualNote: "Version française disponible sur demande.",
      allRightsReserved: "© 2026 Astrateq Gadgets Inc. All rights reserved. ASTRA-AI is a registered trademark of Astrateq Gadgets.",
      subLegalText: "Disclaimer: ASTRA-AI functions as a predictive driver-assistance system and vehicle health monitor. It does not replace active driver attention, alert driving skills, or regular vehicle maintenance. Tested in Calgary, Ottawa, and Toronto winter conditions."
    }
  },
  fr: {
    meta: {
      title: "Gadgets Astrateq | Système de sécurité prédictive pour véhicules de l'ASTRA-AI",
      description: "Sécurisez une réservation de pré-lancement pour le système de sécurité prédictive pour véhicules ASTRA-AI. Diagnostics OBD-II et vision par ordinateur de fabrication canadienne entièrement remboursables.",
    },
    navigation: {
      logo: "GADGETS ASTRATEQ",
      links: {
        howItWorks: "Fonctionnement",
        compatibility: "Compatibilité",
        pricing: "Tarification",
        faq: "FAQ",
      },
      cta: "Réserver mon Spot →"
    },
    hero: {
      batch: "LOT DE FONDATEUR 01",
      badge: "SÉCURITÉ AUTOMOBILE ALIMENTÉE PAR L'IA",
      headline: "Conduire plus sûr. Conduire plus intelligent.",
      description: "Astrateq combine des diagnostics avancés par processeurs d'IA et des systèmes de sécurité par vision par ordinateur qui protègent ce qui compte le plus. Conçu pour les routes canadiennes et les hivers extrêmes. Une protection discrète et préventive avant que l'imprévu ne survienne.",
      ctaPrimary: "Pré-Commander — Dès 25 $ CAD →",
      ctaSecondary: "Voir les spécifications techniques",
      trustMicrocopy: "Dépôt entièrement remboursable. Aucun paiement requis avant l'expédition. Annulation à tout moment.",
      metrics: {
        spots: "247",
        spotsText: "sur 250 places restantes",
        shipping: "GRATUIT",
        shippingText: "Livré partout au Canada",
        families: "4,9/5",
        familiesText: "par 38 familles bêta"
      }
    },
    features: {
      titleText: "La nouvelle norme d'intelligence",
      titleItalic: "Automobile.",
      description: "Combinaison d'une informatique d'IA en périphérie locale à faible latence et de diagnostics de véhicules prédictifs pour convertir vos voitures en systèmes défensifs intelligents.",
      items: [
        {
          id: "failure-detection",
          title: "Détection prédictive des pannes",
          shortDescription: "Anticipez les pannes mécaniques des jours avant qu'elles ne surviennent.",
          textBlock: "Notre moteur de diagnostic d'IA breveté s'interface avec le calculateur (ECU) de votre véhicule via la connexion matérielle OBD-II à haute vitesse. Contrairement aux scanners classiques réactifs qui n'allument le tableau de bord qu'une fois la panne survenue, le système ASTRA-AI analyse la télémétrie fine et subliminale. Il mesure les fluctuations de pression dans les collecteurs, la compensation de carburant et la tension au démarrage. En exécutant des modèles neuronaux temporels sur ces signaux complexes, il isole les signes de défaillance des bobines d'allumage, de l'alternateur, ou les pertes de pression du liquide de refroidissement jusqu'à 14 jours avant l'incident. Cela offre une marge de sécurité essentielle contre le froid extrême."
        },
        {
          id: "driver-coaching",
          title: "Accompagnement du conducteur en temps réel",
          shortDescription: "Un assistant discret pour préserver la vigilance et l'attention sur la route.",
          textBlock: "L'intégration du capteur d'habitacle discret d'ASTRA-AI permet une surveillance avancée de la sécurité adaptée aux trajets difficiles. Notre système d'apprentissage automatique en temps réel cartographie les points de repère du visage, évaluant les micro-expressions, le clignement des paupières et l'inclinaison de la tête pour déterminer la fatigue du conducteur. Si le système détecte des moments d'inattention, l'usage du téléphone ou des signes de malaise, il émet des impulsions haptiques ou des alertes sonores douces au lieu d'alarmes stridentes provoquant la panique. Cette fonctionnalité est spécialement étudiée pour assurer la sécurité des jeunes conducteurs et des parents âgés."
        },
        {
          id: "family-dashboard",
          title: "Tableau de bord familial en direct",
          shortDescription: "Vérifiez la sécurité de vos proches sans intrusion dans leur vie privée.",
          textBlock: "Pensé pour la génération qui prend soin à la fois de ses enfants et de ses parents âgés, l'application associée d'ASTRA-AI offre aux familles des mises à jour rapides et respectueuses de la vie privée. Au lieu de transmettre des données GPS agressives ou de diffuser de la vidéo en continu, le processeur embarqué transmet des signaux synthétiques sécurisés. Les proches voient des statuts rassurants tels que « Statut de la route : Tout est en ordre » ou « État mécanique : Excellent ». En cas d'accident ou de panne grave, des alertes instantanées indiquant les coordonnées géographiques précises et les relevés de bord sont partagées pour faciliter l'assistance."
        },
        {
          id: "winter-optimized",
          title: "Intelligence routière hivernale",
          shortDescription: "Conçu pour affronter les températures sous zéro et les routes glacées.",
          textBlock: "Les conditions hivernales canadiennes exigent une intelligence visuelle de haut niveau. Notre caméra extérieure est dotée de résistances chauffantes infrarouges intégrées éliminant la neige, la glace et le givre en quelques secondes. L'algorithme de traitement d'images est spécifiquement entraîné sur les paysages enneigés canadiens pour reconnaître les plaques de glace, les limites de voie enneigées et neutraliser l'éblouissement. Sous -30°C, le système fusionne ces données visuelles avec les indices d'adhérence du véhicule via l'OBD-II afin d'anticiper les dérapages sur le verglas."
        },
        {
          id: "canadian-data",
          title: "Souveraineté des données canadiennes",
          shortDescription: "Vos données de conduite restent sécurisées au Canada selon la LPRPDE.",
          textBlock: "Chez Astrateq, le respect de votre vie privée est inscrit dans notre charte de développement. 100% de vos données de télémétrie, de diagnostic et de conduite sont traitées localement par nos modules en périphérie et stockées de manière chiffrée dans des serveurs sécurisés situés exclusivement en territoire canadien, conformément à la LPRPDE. Aucun flux vidéo brut n'est partagé sur internet. Nous garantissons de ne jamais vendre ou licencier vos journaux de conduite à des courtiers d'assurance ou des tiers."
        },
        {
          id: "ten-minute-setup",
          title: "Installation Plug-and-Play en 10 minutes",
          shortDescription: "Un système de sécurité professionnel ne nécessitant aucun outil mécanique.",
          textBlock: "L'installation d'un système de sécurité traditionnel requiert souvent des modifications complexes et des frais de main-d'œuvre. ASTRA-AI a été conçu pour un usage simple et instantané. Le module intelligent OBD-II s'insère dans la prise de diagnostic sous votre volant en moins de 30 secondes. La caméra se fixe magnétiquement sur un support de pare-brise discret connecté par un fil d'alimentation plat. Une fois branchés, l'application se synchronise via Bluetooth et calibre les caméras de manière autonome pour démarrer la protection."
        }
      ]
    },
    founderQuote: {
      quote: "L'important est d'offrir une tranquillité d'esprit tranquille, de savoir que nos proches sont en sécurité pendant une conduite de nuit glaciale à Calgary, sans stress. C’est pour cela que nous existons. Être là, quand vous ne pouvez pas l’être.",
      author: "Damian",
      role: "Fondateur, Gadgets Astrateq"
    },
    pricing: {
      title: "La suite des fondateurs du Guardian",
      subtitle: "Trois façons de bloquer vos prix de membre fondateur avant l'ouverture de l'accès public.",
      trustTitle: "Réservations de fondation entièrement remboursables",
      trustList: [
        "Paiements sécurisés via Stripe",
        "Dépôts 100% remboursables à tout moment",
        "Aucun abonnement forcé ou prélèvement surprise",
        "Support basé au Canada et offert en français"
      ],
      tiers: {
        earlybird: {
          name: "Observateur",
          price: "25",
          period: "Dépôt",
          summary: "Accès de réservation entrée de gamme et surveillance diagnostique.",
          features: [
            "Diagnostics mécaniques prédictifs IA",
            "Indicateurs d'état de santé en direct",
            "Notifications push d'alertes basiques",
            "Support technique canadien bilingue",
            "File d'attente d'expédition standard"
          ]
        },
        founding: {
          name: "Guardian",
          price: "79",
          period: "Dépôt",
          summary: "Toute la sécurité prédictive avec retours en temps réel et protection vidéo.",
          features: [
            "Toutes les fonctions mécaniques de l'Observateur",
            "Caméra de tableau de bord d'ASTRATEQ 1080p",
            "Vision routière extérieure intelligente (Ligne & Collisions)",
            "Accès prioritaire dans la file de livraison",
            "Économie de 200 $ sur le prix de vente public prévu",
            "Insigne numérique officiel de Famille Fondatrice"
          ],
          badge: "LE PLUS POPULAIRE"
        },
        guardian: {
          name: "Guardian Pro",
          price: "149",
          period: "Dépôt",
          summary: "Sécurité extrême avec caméras 4K professionnelles et assistance à vie.",
          features: [
            "Toutes les fonctions du Guardian standard",
            "Caméra haute définition 4K Ultra-HD",
            "Détection de fatigue et vigilence de cabine en temps réel",
            "Garantie du premier lot de fabrication expédié",
            "Économie maximale à long terme de 400 $",
            "Gestion prioritaire et support à vie",
            "Insigne physique en métal premium de Guardian"
          ],
          badge: "FORFAIT ÉLITE"
        }
      },
      ctaFormat: "Réserver — {tier} →"
    },
    howItWorks: {
      title: "Le seul moyen sans risque d'acquérir ASTRA-AI",
      steps: {
        step01: {
          title: "1. Réserver votre place",
          description: "Commande sécurisée en 60 secondes.",
          detail: "Choisissez votre niveau, inscrivez vos coordonnées et validez l'accès via Stripe. Votre dépôt reste entièrement remboursable à 100% à tout moment."
        },
        step02: {
          title: "2. Assemblage Canadien",
          description: "Précision technique et tests de froid.",
          detail: "Vos modules OBD-II personnalisés sont programmés et vérifiés suivant les normes de sécurité de Transports Canada pour faire face à des climats rudes."
        },
        step03: {
          title: "3. Installez & Profitez",
          description: "Calibrage autonome en 10 minutes.",
          detail: "Positionnez le dongle OBD-II et la caméra. L'application mobile prend immédiatement le relais et configure les paramètres de sécurité routière."
        }
      }
    },
    compatibility: {
      title: "Votre véhicule est-il compatible ?",
      subtitle: "Plus de 96% des véhicules circulant sur les routes canadiennes construits après 2008 sont entièrement compatibles.",
      placeholderYear: "Sélectionner l'année",
      placeholderMake: "Sélectionner la marque",
      placeholderModel: "Sélectionner le modèle",
      btnCheck: "Vérifier la compatibilité",
      successMessage: "Votre véhicule est entièrement compatible avec le système ASTRA-AI.",
      secondaryCta: "Réserver pour ce véhicule →"
    },
    whatIsIncluded: {
      title: "Contenu de votre suite de sécurité",
      subtitle: "Un ensemble d'équipements haut de gamme soumis à des tests physiques rigoureux.",
      items: [
        "Dongle de diagnostic intelligent OBD-II",
        "Caméra de tableau de bord Double-Objectif 1080p",
        "Supports magnétiques de pare-brise de profil bas et câblages plats",
        "Accès à l'application mobile ASTRA-AI (iOS et Android)",
        "Abonnement de service Premium inclus pendant 12 mois",
        "Guide d'installation physique bilingue (français & anglais)"
      ]
    },
    timeline: {
      title: "Calendrier de livraison",
      subtitle: "Des jalons transparents pour vous tenir informé à chaque étape de la fabrication.",
      stages: {
        today: {
          date: "AUJOURD'HUI",
          title: "Sécurisation du dépôt de fondateur",
          desc: "Réservez votre équipement, sécurisez une remise exclusive jusqu'à 400 $ et prenez place dans la file d'expédition."
        },
        q3_2025: {
          date: "T3 2025",
          title: "Lancement de l'application Bêta",
          desc: "Accédez en priorité à l'application mobile de diagnostic pour analyser l'état de santé de votre véhicule avant l'expédition."
        },
        q4_2025: {
          date: "T4 2025",
          title: "Essais rigoureux d'hiver canadien",
          desc: "Phase finale d'essais grandeur nature de résistance des caméras et de l'électronique dans les parcs de l'Alberta et du Nunavut."
        },
        q1_2026: {
          date: "T1 2026",
          title: "Livraisons échelonnées",
          desc: "Expédition des colis aux membres Guardian Pro et Guardian en premier, suivis directement par les commandes de base."
        }
      }
    },
    testimonials: {
      title: "Une tranquillité d'esprit éprouvée.",
      subtitle: "Retours d'expérience exclusifs de nos 38 familles canadiennes partenaires de test.",
      list: [
        {
          name: "Sarah G.",
          location: "Toronto, ON",
          quote: "L'anticipation visuelle des freinages brusques a évité un impact arrière majeur sur l'autoroute Gardiner. Le système réagit plus vite que l'œil humain sous une pluie battante.",
          metrics: "Membre fondateur Observateur"
        },
        {
          name: "Jean-Pascal L.",
          location: "Calgary, AB",
          quote: "L'IA a identifié des anomalies de l'alternateur 10 jours avant que le voyant ne s'allume. On a évité de tomber en panne par -35°C au fond de la vallée.",
          metrics: "Membre Guardian"
        },
        {
          name: "David K.",
          location: "Ottawa, ON",
          quote: "J'ai configuré le Guardian pour ma mère âgée. Les indicateurs simplifiés de sécurité me permettent de savoir qu'elle roule sans danger sur le verglas sans intrusion dans sa vie.",
          metrics: "Membre Guardian Pro"
        }
      ]
    },
    aeoAuthSections: {
      winterDrivingId: "winter-driving-intelligence-fr",
      winterDrivingTitle: "1. Intelligence de conduite hivernale et sécurité sous-zéro",
      winterDrivingText: "La conduite en hiver au Canada comporte d'immenses défis physiques que les caméras de tableau de bord réactives ne peuvent résoudre. À -30 °C, les batteries perdent la moitié de leur charge effective, les diagnostics au démarrage négligent les variations de fluides du moteur, et les distances de freinage doublent sur les routes verglacées du territoire. Le système ASTRA-AI intègre des diagnostics à basse température spécialement optimisés pour contrer ces menaces hivernales.\n\nNotre modèle d'apprentissage évalue l'onde de courant du démarreur lors des premières secondes du contact. En adaptant la courbe de charge globale aux variations thermiques collectées auprès des infrastructures météo locales, ASTRA-AI prévient l'usure de la batterie de manière anticipée. À cela s'ajoute une vision optique dotée d'algorithmes anti-reflet de neige pour repérer les limites cachées des voies et les risques de verglas à travers l'Ontario, le Québec et l'Ouest canadien. Tous nos composants sont testés pour affronter des plages extrêmes de -40°C à +85°C sans aucune condensation.",
      
      safetyWorksTitle: "2. Fonctionnement de l'IA prédictive automobile",
      safetyWorksText: "L'architecture technique d'ASTRA-AI repose sur un processeur neuronal (NPU) de pointe intégré directement à bord du boîtier physique principal. Contrairement à d'autres qui stockent les images de route sur des bases informatiques distantes situées à l'étranger—ce qui augmente les temps de latence et les risques cybernétiques—les analyses visuelles et mécaniques d'ASTRA-AI sont traitées instantanément en périphérie locale.\n\nNotre pipeline assure la fusion des flux synchronisés : les informations OBD-II du véhicule (vitesse des roues, couple moteur, feedback ABS) s'allient à la modélisation de route en temps réel. Lorsque les oscillations d'accélération indiquent un début de dérapage simultanément à l'apparition d'un obstacle repéré par vision optique, le processeur envoie des commandes haptiques correctives en moins de 45 millisecondes. Ce calcul local ultra-rapide garantit une fluidité de conduite inégalée et sauve des instants précieux pour éviter des collisions.",
      
      complianceTitle: "3. Conformité aux normes canadiennes et hébergement local des données",
      complianceText: "Le droit à la vie privée constitue un pilier de la conception de nos produits. Astrateq Gadgets garantit une conformité absolue avec la Loi sur la protection des renseignements personnels et les documents électroniques (LPRPDE). Aucun contenu vidéo brut, aucune trace d'habitacle et aucune métrique de vitesse n'est partagée en clair à des assureurs ou des banques de marketing de données tierces. Toutes nos communications sont chiffrées de bout en bout en AES-256.\n\nDe plus, nos récepteurs sans fil sont validés aux normes d'Innovation, Sciences et Développement économique Canada (ISDE) sous les directives réglementaires RSS-247. Notre ingénierie de sécurité respecte scrupuleusement la norme ISO 26262 ASIL-B pour vous assurer un appareil performant, sécuritaire, stable et respectueux des libertés individuelles de vos passagers.",
      
      researchTitle: "4. Données de recherche et essais physiques menés au Canada",
      studies: [
        {
          title: "Rapport d'essais diagnostiques hivernaux (Campagne 2024)",
          methodology: "Suivi rigoureux de plus de 50 000 km d'essais en Alberta, en Saskatchewan et dans le nord de l'Ontario, sur un panel de 140 véhicules de particuliers par des températures inférieures à -25 °C.",
          findings: [
            "Taux d'exactitude prédictive de 94,3% dans l'identification des pannes de alternateur et de perte de pression du liquide de refroidissement.",
            "Prédiction de décharges de bobine d'allumage jusqu'à 7 jours avant le déclenchement des voyants d'alarme classiques 'Check Engine'.",
            "Zéro alarme erronée ou fausse notification signalée sur l'ensemble de la période d'essais."
          ],
          metrics: [
            { label: "Précision Prédictive", value: "94,3%" },
            { label: "Délai de Prévention", value: "10-14 jours" },
            { label: "Températures Limites", value: "Validé (-40°C)" }
          ]
        },
        {
          title: "Étude d'analyse optique de vision par temps de tempête",
          methodology: "Simulation en laboratoire et conduite réelle sous de fortes chutes de neige, projections de sel d'autoroute et reflets lumineux intenses.",
          findings: [
            "Maintien de la trajectoire et lecture des lignes de démarcation cachées sous la neige avec une précision de 96,8%.",
            "Élimination totale d'une couche de givre accumulée de 4mm en moins de 120 secondes grâce aux miro-résistances chauffantes intégrées.",
            "Réduction de 91% des alarmes de freinage erronées induites par les rideaux de flocons par rapport aux caméras standards."
          ],
          metrics: [
            { label: "Lecture des Voies", value: "96,8%" },
            { label: "Dégivrage Pare-brise", value: "<120 sec" },
            { label: "Baisse Fausses Alertes", value: "91%" }
          ]
        }
      ]
    },
    faqs: {
      title: "Tout ce que vous devez savoir",
      subtitle: "Des réponses transparentes et de confiance pour effectuer votre choix en toute quiétude.",
      disclosure: "*Tous les montants indiqués sont fixés en Dollars Canadiens (CAD) et couverts par notre garantie de remboursement de confiance.",
      list: [
        {
          id: "refunds",
          category: "Dépôts & Paiement",
          question: "Les dépôts de pré-commande sont-ils réellement remboursables ?",
          answer: "Oui. Votre dépôt de réservation est 100% remboursable à tout moment, sans justification et par simple demande.",
          detail: "Avant le lancement des expéditions au T1 2026, nous vous contacterons pour confirmer les détails de livraison et valider votre choix final. Si vous changez d'avis avant l'envoi, nous relâcherons instantanément le dépôt vers votre moyen de paiement d'origine via Stripe. Les délais bancaires de retour sont de 3 à 5 jours ouvrés."
        },
        {
          id: "billing",
          category: "Dépôts & Paiement",
          question: "Quand s'effectue le paiement du reste de la commande ?",
          answer: "Le paiement final n'est prélevé qu'au moment où votre colis est entièrement fabriqué, certifié et prêt pour l'envoi postal.",
          detail: "Contrairement à d'autres projets de préfinancement, Gadgets Astrateq maintient vos fonds dans un compte sécurisé. Nous vous transmettrons un avis de confirmation 30 jours avant la livraison, déduisant directement votre somme déjà déposée de fondateur. Il n'y aura aucune facturation surprise."
        },
        {
          id: "complexity",
          category: "Installation & Tech",
          question: "L'installation demande-t-elle des compétences mécaniques ?",
          answer: "Pas du tout. Le système est entièrement Plug & Play et s'installe en moins de 10 minutes.",
          detail: "Le module de diagnostic se branche sur le port OBD-II qui est un standard universel placé sous votre colonne de direction (sur tous les modèles produits après 1996). La caméra de tableau de bord se fixe de manière stable et s'alimente via un câble plat qui se glisse discrètement le long des garnitures."
        },
        {
          id: "data-storage",
          category: "Vie Privée & Sécurité",
          question: "Où sont hébergées mes vidéos et métriques de trajet ?",
          answer: "L'ensemble des données est stocké de manière exclusive dans des infrastructures basées au Canada approuvées LPRPDE.",
          detail: "Nous honorons la souveraineté complète des données canadiennes. Les vidéos routières ne transitent jamais sur le cloud de manière sauvage : notre caméra analyse l’ensemble en local grâce à son processeur embarqué. Seuls les indicateurs de sécurité chiffrés sont enregistrés. Nous vendrons jamais vos données de télémétrie."
        },
        {
          id: "subscription",
          category: "Abonnement & Service",
          question: "Y a-t-il des frais d'abonnement après la première année ?",
          answer: "Tous nos forfaits incluent 12 mois complets de service Premium. Après la 1ère année, l'accès optionnel est de 9,99 $/mois.",
          detail: "Votre dépôt inclut un accès sans restriction de connectivité, haptiques et mises à jour de sécurité pendant un an. À l'échéance, vous gardez le contrôle total : vous pouvez continuer l'accès Premium pour seulement 9,99 $ CAD par mois, sans aucun engagement de durée."
        },
        {
          id: "compatibility-range",
          category: "Installation & Tech",
          question: "L'appareil fonctionne-t-il sur les modèles de voitures plus anciens ?",
          answer: "Oui, la prise en charge couvre l'ensemble des véhicules produits depuis 2008, et recule jusqu'à 1996.",
          detail: "Le protocole OBD-II étant une exigence réglementaire canadienne stricte depuis 1996, notre suite s'adapte à presque toutes les voitures thermiques, hybrides, diesel ou GPL. Les modèles électriques (VE) sont également pleinement exploitables grâce à notre décodage du bus CAN. Utilisez notre vérificateur d'année ci-dessous pour confirmer votre modèle."
        },
        {
          id: "extreme-cold",
          category: "Sécurité Hivernale",
          question: "Le système résiste-t-il à des froids extrêmes ?",
          answer: "Oui, la suite ASTRA-AI est certifiée en laboratoire pour fonctionner sous des températures oscillant de -40°C à +85°C.",
          detail: "Les appareils photo et batteries classiques chutent rapidement en performance sous l'effet du gel intense. Gadgets Astrateq n'utilise pas de cellules polymères inflammables bon marché, mais des accumulateurs de condensateurs thermiquement stables de grade spatial. Notre vitre intègre également un système chauffant pour chasser le givre et l'humidité."
        },
        {
          id: "warranty",
          category: "Garantie & Support",
          question: "De quelle garantie et de quel type d'assistance puis-je bénéficier ?",
          answer: "Toutes nos suites s'accompagnent d'une garantie matérielle de 2 ans et d'un support bilingue canadien à vie.",
          detail: "Nous sommes fiers de la robustesse de notre matériel. En cas d'anomalie de connexion ou d'impact thermique dans les deux années qui suivent votre achat, nous remplaçons vos composants défaillants à nos frais. De plus, notre centre d'appel bilingue basé à Toronto répond à toutes vos questions."
        }
      ]
    },
    finalCta: {
      title: "Une garantie conçue pour le Grand Nord.",
      subtitle: "Prenez possession de votre suite de protection prédictive sans aucun risque.",
      description: "Gadgets Astrateq est détenu et exploité localement au Canada. Nous réunissons des processus de vérification de climat rigoureux, un respect scrupuleux de la LPRPDE et des transactions sécurisées. Agissez avant que l'obstacle ne surgisse.",
      btnReserve: "Sécuriser ma réservation — Dès 25 $ →"
    },
    footer: {
      privacy: "Politique de confidentialité",
      refund: "Politique de remboursement",
      contact: "Aide & Support Astrateq",
      casl: "Conformité à la LCAP",
      address: "Gadgets Astrateq Inc. | 100 University Ave, Toronto, ON, Canada",
      bilingualNote: "Version française disponible sur demande.",
      allRightsReserved: "© 2026 Gadgets Astrateq Inc. Tous droits réservés. ASTRA-AI est une marque déposée de Gadgets Astrateq.",
      subLegalText: "Note légale de non-responsabilité : le système ASTRA-AI agit à titre de dispositif d'aide à la conduite et d'indicateur mécanique. Il ne peut en aucun cas remplacer la vigilance active, la concentration continue du conducteur, ou les révisions d'entretien obligatoires de sécurité de votre véhicule. Testé en hivers rudes à Calgary, Ottawa et Toronto."
    }
  }
};
