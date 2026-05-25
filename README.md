# Astrateq Gadgets — ASTRA-AI Pre-Launch Validation Funnel
> Elite, conversion-focused landing page optimized for "Light Editorial" validation of the ASTRA-AI Predictive Vehicle Safety System.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Framework: React 18](https://img.shields.io/badge/Framework-React%2018-blue?logo=react)](https://react.dev/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-61dafb?logo=tailwindcss)](https://tailwindcss.com/)
[![Compliance: PIPEDA / CASL](https://img.shields.io/badge/Compliance-PIPEDA%20%2F%20CASL-success)](#privacy--compliance)

---

## 🎯 Project Purpose & Mission
This repository contains the front-end architecture for the official **Founder Batch 01** market validation campaign engineered for **Astrateq Gadgets**. 

The primary business objective is smoke testing and transactional validation. It captures fully refundable credit card micro-deposits via Stripe to prove real purchasing intent for the **ASTRA-AI Predictive Vehicle Safety System**—a plug-and-play connected car ecosystem featuring a Smart OBD-II Diagnostic Dongle and a Dual-Lens AI Windshield Camera. The product is engineered to reduce background driving anxieties for the Canadian "Sandwich Generation" (adults ages 35–55 caring for elderly parents).

---

## 🎨 Visual Identity & UX Architecture
Following a rigorous audit, this application implicitly enforces an elite **"Light Editorial Tech"** visual framework. It discards dark-mode layouts to match the affluent, high-trust consumer tone of Apple, Tesla, or Samsung product releases.

* **Color Baseline:** Pure White (`#FFFFFF`) background, ultra-light surface cards (`#F8F9FA`), and high-contrast Rich Charcoal (`#1A1A2E`) text.
* **Brand Accents:** High-visibility, crisp responsive Cyan (`#00D4FF`) reserved for active markers, live scarcity indicators, and primary navigation CTAs.
* **Typography:** Elegant Editorial Serif (**DM Serif Display**) with tight letter-spacing (`-0.02em`) for core headers; high-legibility Sans-Serif (**DM Sans**) with a structural line-height (`1.6`) for reading blocks.
* **Grid Discipline:** Strict 8-point spacing system. Fluid 1-column stack on mobile viewports scaling up cleanly to an uncompromised 12-column grid layout with spacious horizontal padding (`120px`) on desktop views.

---

## ⚙️ Core Technical Stack
* **Runtime Framework:** React 18+ (Vite Bundler Lifecycle)
* **Styling Engine:** Tailwind CSS v3+ (Inline utility design classes only; no custom `.css` files allowed)
* **Micro-Interactions:** Framer Motion (Orchestrating custom scroll-triggered page fades, staggered grid entrance transitions, and spring animations)
* **Icons Layer:** Lucide React (SVG-native rendering, ensuring WCAG AA color contrast ratios)
* **Transactional Engine:** Stripe.js Redirect Integration (`loadStripe` architecture via `@stripe/stripe-js`)

---

## 🗺️ Functional Page Sections (Mandated Order)
The front-end layout executes exactly 13 strict components built in unbending programmatic sequence:

1. **Sticky Frosted Glass Navbar:** Interactive navigation component utilizing `backdrop-blur-md bg-white/80` on scroll. Includes the corporate logo left, core anchors center, and an absolute responsive desktop/mobile checkout button.
2. **Split Hero Section:** Features the core copy framework ("Quiet protection for the drivers you love most.") alongside real-time inline social proof icons. Includes a dedicated geographic visual placeholder frame for Canadian winter roads.
3. **Emotional Trust Strip:** High-contrast charcoal full-width break containing deep narrative founder quotes.
4. **The Guardian Founder's Bundle (Pricing Matrix):** Responsive, highly asymmetric 3-column pricing framework. The middle card ($85 CAD) leverages a `scale-105` transformation matrix on desktop with a featured accent badge to highlight conversion.
5. **Horizontal Conversion Timeline:** 3-step programmatic map breaking down the frictionless reservation process into clear time metrics.
6. **Vehicle Compatibility Checker Tool:** Fully working stateful client-side tool featuring three interactive dropdown selectors (Year, Make, Model) generating custom dynamic success and waitlist notifications.
7. **3x2 Feature Intelligence Grid:** Elegant utility block addressing winter driving traction, data privacy, and early mechanical fault alerts.
8. **Client Testimonials Block:** Star-rated, bordered validation tiles explicitly anchored around realistic local user reviews across Canadian regions (ON, AB).
9. **Hardware Inventory Inventory Frame:** A 2-column component explicitly itemizing all physical assets arriving inside the retail packaging container.
10. **Path to Ownership Horizon Map:** Staggered chronological timeline listing the manufacturing and target shipping windows cleanly.
11. **Stateful FAQ Accordions:** Collapsible, accessible answers resolving top consumer friction vectors (refund loops, data handling, app usage fees).
12. **The Final Northern Guarantee Block:** Strategic, high-trust split checkout interface with absolute radio button data connections.
13. **Compliance Layout Footer:** Legal and localized compliance links (CASL, PIPEDA data residency notes) and language accessibility declarations.

---

## 🔒 Variables & Local Deployment Setup

To launch this architecture or push it cleanly to production infrastructure targets like Vercel, you must establish the following environment keys in your target host panel or root file structure:

```bash
# Stripe Public Sandbox/Live Access Keys
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_yourPublicKeyHere

# Product Line Price Identifiers (Stripe Dashboard Native IDs)
VITE_STRIPE_PRICE_EARLYBIRD=price_earlybird_25CAD
VITE_STRIPE_PRICE_FOUNDING=price_founding_85CAD
VITE_STRIPE_PRICE_GUARDIAN=price_guardian_150CAD
