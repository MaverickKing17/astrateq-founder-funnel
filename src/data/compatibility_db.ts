/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VehicleMake {
  name: string;
  models: string[];
}

export const YEARS = Array.from({ length: 2024 - 2008 + 1 }, (_, i) => (2008 + i).toString()).reverse();

export const VEHICLE_MAKES: VehicleMake[] = [
  {
    name: "Toyota",
    models: ["RAV4", "Corolla", "Camry", "Highlander", "Tacoma", "Tundra", "Sienna", "Prius"]
  },
  {
    name: "Honda",
    models: ["Civic", "CR-V", "Accord", "Pilot", "Odyssey", "HR-V", "Ridgeline", "Fit"]
  },
  {
    name: "Ford",
    models: ["F-150", "Escape", "Explorer", "Edge", "Focus", "Fusion", "Ranger", "Mustang Mach-E"]
  },
  {
    name: "Chevrolet",
    models: ["Silverado", "Equinox", "Cruze", "Tahoe", "Suburban", "Bolt EV", "Colorado", "Malibu"]
  },
  {
    name: "Hyundai",
    models: ["Elantra", "Tucson", "Santa Fe", "Kona", "Ioniq 5", "Sonata", "Venue", "Palisade"]
  },
  {
    name: "Subaru",
    models: ["Outback", "Forester", "Crosstrek", "Impreza", "Legacy", "Ascent", "WRX"]
  },
  {
    name: "RAM",
    models: ["1500", "2500", "3500", "Promaster"]
  },
  {
    name: "Tesla",
    models: ["Model Y", "Model 3", "Model S", "Model X"]
  },
  {
    name: "Mazda",
    models: ["CX-5", "Mazda3", "CX-30", "CX-9", "MX-5 Miata"]
  },
  {
    name: "Nissan",
    models: ["Rogue", "Sentra", "Qashqai", "Pathfinder", "Leaf", "Murano"]
  },
  {
    name: "GMC",
    models: ["Sierra", "Terrain", "Acadia", "Yukon"]
  },
  {
    name: "Jeep",
    models: ["Grand Cherokee", "Wrangler", "Cherokee", "Compass"]
  }
];
