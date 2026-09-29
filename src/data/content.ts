import { ProcessStep, FaqItem } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Sun-Dappled Canopy Harvest',
    icon: 'agriculture',
    description: 'Hand-harvesting only fully ripe heirloom Criollo and Trinitario pods. Pods are cracked open the same morning to retain delicate natural yeasts.',
    parameter: 'Peak Mornings (6:00 - 10:30 AM)',
    parameterLabel: 'Harvest Window',
    details: 'Pod selection requires testing skin firmness and vibrant coloration (golden yellow and rich crimson). Seeds are extracted within 3 hours using clean wooden mallets to prevent mechanical bruising of the cotyledon.'
  },
  {
    step: '02',
    title: 'Aerated Wooden Fermentation',
    icon: 'thermostat',
    description: 'Wet beans rest in tiered mahogany sweatboxes for 5 to 7 days, naturally converting pulp sugars into complex fruit, wine, and molasses aromas.',
    parameter: '5-7 Days Monitored (48°C Peak)',
    parameterLabel: 'Duration & Temp',
    details: 'Aerobic turns happen every 24 hours to redistribute indigenous yeast strains and acetic acid bacteria. Sweet pulp drips through slotted mahogany slats, concentrating the aromatic esters.'
  },
  {
    step: '03',
    title: 'Micro-Batch Roasting & Conching',
    icon: 'timelapse',
    description: 'Low-temperature gentle drum roasting followed by up to 72 hours of granite stone-wheel conching to yield silky texture and round mouthfeel.',
    parameter: '72 Hours Stone-Ground',
    parameterLabel: 'Conching Cycle',
    details: 'Gentle convective convection roasts preserve bright stone fruit notes while vaporizing bitter volatile acids. Massive natural granite melangeurs refine bean particles down to 18 microns.'
  },
  {
    step: '04',
    title: 'Artisan Tempering & Wrapping',
    icon: 'verified_user',
    description: 'Hand-poured into artisan molds with a crisp snap and mirror sheen, each bar is packaged in protective gold foil in Maayon, Capiz.',
    parameter: 'Sealed Single Origin',
    parameterLabel: 'Quality Standard',
    details: 'Precise multi-stage crystallization (Form V beta crystals) creates our trademark clean snap and melting point of 34°C. Foil-sealed hermetically against tropical humidity.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'shipping-melting',
    question: 'How is chocolate dispatched nationwide without melting?',
    answer: "All provincial orders (Metro Manila, Cebu, Davao, and Luzon) are packaged within insulated thermal wrappers with chilled gel packs and dispatched via air-express priority courier. We ship Monday through Wednesday to avoid weekend warehouse transit halts."
  },
  {
    id: 'storage-temp',
    question: "What is the recommended storage temperature for O'Guia bars?",
    answer: "To preserve the delicate crystalline cocoa butter structure, store your bars between 18°C and 20°C in a dry, odorless setting. If refrigerating in tropical warmth, keep tightly sealed in airtight wrapping and let rest at room temperature for 15 minutes before tasting."
  },
  {
    id: 'keto-zero-sugar',
    question: 'Is the Keto Dark Chocolate truly zero-sugar and diabetic-friendly?',
    answer: 'Yes. Our Keto bar contains 0g refined cane sugar, relying exclusively on premium non-GMO erythritol and high natural fiber content from Maayon cacao nibs, ensuring an ultra-low glycemic response with zero insulin surge.'
  },
  {
    id: 'tablea-champorado',
    question: "How do I prepare the pure O'Guia Tablea for Rolled Oats Champorado?",
    answer: 'Boil 2 cups of fresh water with 2-3 rounds of O\'Guia Tablea until fully dissolved and aromatic. Whisk vigorously, stir in 1 cup of whole rolled oats, and simmer for 8 minutes. Finish with coconut nectar or muscovado, drizzled with evaporada or almond milk.'
  },
  {
    id: 'lead-times-corporate',
    question: 'What are lead times for bespoke corporate gifting and weddings?',
    answer: 'Custom branded sleeve bands, bespoke bonbon flights, and harvest gift crates require 2 to 3 weeks advance allocation depending on micro-batch cellar availability and batch conching timelines.'
  }
];

export const ESTATE_TERROIR_DATA = {
  name: "DAD's Farm Estate Cellar & Roastery",
  location: "Barangay Manluran, Maayon, Capiz 5811, Philippines",
  coordinates: "11.3850° N, 122.7800° E",
  elevation: "142 meters above sea level",
  climate: "Type III Tropical (Dry Nov-Apr, Wet May-Oct)",
  soilType: "Alluvial volcanic clay loam with organic leaf-mold mantle",
  canopyCompanions: ["Wild Cavendish Bananas", "Marang", "Tall Native Coconuts", "Narra Hardwood", "Wild Guava"],
  averageTemperature: "28°C",
  annualRainfall: "2,150 mm",
  farmersGuildMembers: 34
};
