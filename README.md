# Astrateq Gadgets — ASTRA-AI Core Safety System

An elegant, high-performance, single-page presentation and secure reservation web application built for the **ASTRA-AI** predictive automotive diagnostics and collision avoidance system. Optimized specifically for Canadian road conditions and vehicle standards.

---

## 🍁 Operational Philosophy & Features

ASTRA-AI integrates real-time OBD-II vehicle telemetry analysis and advanced stereoscopic computer vision to proactively diagnose issues before they scale into hazardous winter emergencies. 

### Key Modules:
*   **Predictive Diagnostics**: Direct integration with standard OBD-II transponders to monitor starting resistance, battery levels, thermal registers, and mechanical tolerance logs.
*   **Stereoscopic AI Vision**: Lane tracing, curve calibration, and pre-collision warn latency reduction by 35% in dense snow-pack and sub-zero blizzards.
*   **100% Data Sovereignty**: All machine learning computations, diagnostic parameters, and telemetry streams are compiled and analyzed locally to preserve complete driver privacy.
*   **Canadian Climate Resiliency**: Formulated and validated to function in severe climates between -40°C and +85°C.

---

## 🛠 Tech Stack

*   **Runtime & Framework**: [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Styling & Design**: [Tailwind CSS v4](https://tailwindcss.com/) with custom font pairings (Playfair Serif paired with Inter and JetBrains Mono)
*   **Interactive Controls & Motion**: Fully animated with [Motion for React](https://motion.dev/)
*   **Iconography**: Lightweight vector representations via [Lucide React](https://lucide.dev/)

---

## 📂 Project Architecture

The codebase is engineered strictly with clean separation of concerns:

```text
├── src/
│   ├── assets/              # Premium hardware renders and product mockups
│   │   └── images/
│   ├── components/          # Highly polished UI components
│   │   ├── Navigation.tsx   # Dual-language responsive header and CTA router
│   │   ├── Hero.tsx         # Founder Batch 01 display block featuring operational signals
│   │   ├── FeatureGrid.tsx  # Dynamic specifications catalog with touch-scroll sliders
│   │   ├── FAQ.tsx          # Frequently asked questions collapsible deck
│   │   ├── Pricing.tsx      # Three-tier secure Stripe preorder card desk
│   │   ├── Testimonials.tsx # Early Alpha testing telemetry & logs
│   │   └── FinalCTA.tsx     # Clean bottom reservation portal
│   ├── data/                # Static lookup registries
│   │   ├── translations.ts  # English and French language dictionaries
│   │   └── compatibility_db.ts
│   ├── types.ts             # Strict TypeScript definitions
│   ├── App.tsx              # Application layout coordinator
│   ├── main.tsx             # DOM mounting entry point
│   └── index.css            # Tailwinds import and font face registries
├── package.json             # Depenency definitions & compilation scripts
├── tsconfig.json            # Compiler configurations
└── vite.config.ts           # Bundler rules and asset proxy setups
```

---

## 🚀 Setting Up Locally

Ensure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

### 1. Clone & Download Dependencies

```bash
git clone <your-repository-url>
cd astrateq-gadgets
npm install
```

### 2. Live Development Run

Launch the lightning-fast Vite development proxy locally:

```bash
npm run dev
```

The application will bind to standard ports and print the hot-reloading development URL (typically `http://localhost:3000`).

### 3. Build & Production Optimization

Compile a static build ready for seamless production hosting on CDNs or static services:

```bash
npm run build
```

This generates a optimized output structure inside the `/dist` directory.

---

## 📄 License

This software is distributed under the Apache-2.0 License. See the boilerplate headers within primary files for license reference parameters.

---

*Crafted for Canadian Safety, Astrateq Gadgets Team.*
