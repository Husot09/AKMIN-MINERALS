import {
  Beaker,
  Factory,
  FlaskConical,
  Gem,
  Globe2,
  Leaf,
  Microscope,
  Mountain,
  Pickaxe,
  Recycle,
  Settings2,
  ShieldCheck,
  Sparkles,
  Waves
} from "lucide-react";

export const site = {
  name: "Akmin Industrial Minerals",
  tagline: "Delivering unique solutions that are socially, environmentally, and economically sustainable.",
  description:
    "Turkish feldspar and quartz expertise for ceramic manufacturers, industrial buyers, technical teams and international partners.",
  url: "https://www.akmin.info",
  email: "akmin@akminmaden.com",
  phone: "+90 (256) 711 07 21",
  fax: "+90 (256) 711 07 25",
  address: "Adnan Menderes Bulvari 161/2 Sevketiye Mah. Cine/AYDIN 09500, Turkiye"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Materials", href: "/materials" },
  { label: "Ceramic Solutions", href: "/ceramic-solutions" },
  { label: "R&D", href: "/rd-innovation" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" }
];

export const capabilities = [
  {
    title: "Raw Material Supply",
    text: "Feldspar and quartz sourcing for ceramic producers and industrial clients that need dependable mineral inputs.",
    icon: Mountain
  },
  {
    title: "Ceramic Recipe Support",
    text: "Technical support for body, glaze and tile formulations where mineral selection affects performance and consistency.",
    icon: FlaskConical
  },
  {
    title: "Processing & Enrichment",
    text: "Experience with feldspar enrichment, flotation techniques and mine-site investment decisions.",
    icon: Settings2
  },
  {
    title: "R&D and New Applications",
    text: "Applied research using feldspar and quartz to explore better recipes, new uses and more efficient processing routes.",
    icon: Microscope
  }
];

export const whyAkmin = [
  "Part of the Turkish feldspar ecosystem since the early 1980s.",
  "One of Turkey's largest feldspar producers and exporters from 2001 to 2006.",
  "Focused on ceramic-sector requirements, mineral behavior and formulation logic.",
  "Built around practical solutions that balance technical, environmental and economic value."
];

export const industries = [
  "Ceramics",
  "Glass",
  "Sanitaryware",
  "Tiles",
  "Glazes",
  "Industrial applications"
];

export const materials = [
  {
    slug: "feldspar",
    name: "Feldspar",
    icon: Gem,
    overview:
      "Feldspar is a core industrial mineral for ceramic bodies and glazes, valued for its fluxing behavior and contribution to firing performance.",
    uses: ["Ceramic bodies", "Tiles", "Sanitaryware", "Glazes", "Glass and related industrial uses"],
    applications:
      "In ceramics, feldspar helps support vitrification, body strength, surface quality and firing efficiency when selected and balanced correctly.",
    properties: ["Fluxing behavior", "Alumina and alkali contribution", "Particle size sensitivity", "Chemistry consistency"],
    support:
      "Akmin helps clients evaluate feldspar options, improve recipe fit, consider enrichment routes and align raw material selection with production goals."
  },
  {
    slug: "quartz",
    name: "Quartz",
    icon: Sparkles,
    overview:
      "Quartz provides silica value across ceramic and industrial formulations, where purity, sizing and controlled behavior are essential.",
    uses: ["Ceramic bodies", "Glazes", "Glass-related applications", "Foundational silica input", "Specialized industrial formulations"],
    applications:
      "In ceramic systems, quartz can influence shrinkage, thermal behavior, dimensional control and the balance of the overall formulation.",
    properties: ["High silica content", "Thermal stability", "Particle size control", "Formulation compatibility"],
    support:
      "Akmin supports quartz selection, application testing and development work that connects mineral characteristics with client performance targets."
  }
];

export const ceramicSolutions = [
  {
    title: "Body Formulation Support",
    text: "Reviewing raw material balance, firing behavior and performance priorities for ceramic bodies.",
    icon: Factory
  },
  {
    title: "Glaze and Tile Applications",
    text: "Supporting feldspar and quartz choices for tile, surface and glaze systems.",
    icon: Sparkles
  },
  {
    title: "Raw Material Selection",
    text: "Helping technical teams compare mineral inputs against chemistry, sizing and process needs.",
    icon: Pickaxe
  },
  {
    title: "Performance Optimization",
    text: "Improving formulations through practical testing, mineral behavior insight and production-aware recommendations.",
    icon: ShieldCheck
  },
  {
    title: "Technical Consultation",
    text: "Clear discussion with buyers, plant managers and R&D teams about mineral options and constraints.",
    icon: Globe2
  },
  {
    title: "Testing and Development",
    text: "Applied development support for ceramic recipes, enrichment paths and new material applications.",
    icon: Beaker
  }
];

export const sustainabilityPillars = [
  {
    title: "Responsible Resource Value",
    text: "Supporting long-term mineral value through thoughtful selection, process awareness and practical use of available resources.",
    icon: Mountain
  },
  {
    title: "Efficient Processing",
    text: "Exploring enrichment and processing choices that can improve material performance while reducing avoidable waste.",
    icon: Recycle
  },
  {
    title: "Technical Optimization",
    text: "Helping clients use feldspar and quartz more effectively inside ceramic systems, reducing trial-and-error and improving consistency.",
    icon: Settings2
  },
  {
    title: "Social and Economic Balance",
    text: "Approaching mineral solutions with attention to commercial durability, industrial usefulness and responsible operating choices.",
    icon: Leaf
  }
];

export const innovationFocus = [
  "Researching new industrial applications for feldspar and quartz.",
  "Improving enrichment and flotation methods for specific mineral requirements.",
  "Exploring sustainable processing pathways and better raw material utilization.",
  "Partnering with manufacturers to connect laboratory learning with production realities."
];

export const comparisonRows = [
  ["Primary role", "Fluxing mineral for ceramic bodies and glazes", "Silica source for ceramic and industrial formulations"],
  ["Ceramic value", "Supports vitrification, strength and firing response", "Supports dimensional behavior and silica balance"],
  ["Client questions", "Chemistry, alkali profile, enrichment route, firing behavior", "Purity, sizing, thermal behavior, recipe compatibility"],
  ["Akmin support", "Selection, processing insight, formulation fit", "Selection, testing, development and application guidance"]
];

export const pageIntro = {
  about: {
    eyebrow: "About Akmin",
    title: "A Turkish industrial minerals company with deep feldspar experience.",
    text:
      "Akmin brings decades of practical knowledge in feldspar, quartz, ceramic raw materials and mineral processing to clients who need more than a commodity supplier."
  },
  materials: {
    eyebrow: "Materials",
    title: "Feldspar and quartz for demanding industrial formulations.",
    text:
      "Akmin works with materials that sit at the center of ceramic performance, helping clients connect mineral properties with production and recipe requirements."
  },
  ceramic: {
    eyebrow: "Ceramic Solutions",
    title: "Technical support for stronger ceramic formulations.",
    text:
      "Akmin helps manufacturers evaluate raw materials, improve ceramic recipes and develop formulations around practical production needs."
  },
  innovation: {
    eyebrow: "R&D and Innovation",
    title: "Applied mineral research for better processes and new applications.",
    text:
      "Our work looks beyond supply, exploring how feldspar and quartz can be processed, formulated and applied with greater technical value."
  },
  sustainability: {
    eyebrow: "Sustainability",
    title: "Sustainable mineral solutions grounded in practical responsibility.",
    text:
      "Akmin focuses on socially, environmentally and economically sustainable decisions without overstating claims or separating responsibility from technical performance."
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a technical conversation with Akmin.",
    text:
      "Tell us about your material requirements, ceramic formulation challenge or R&D question. We will direct the conversation to the right technical focus."
  }
};

export const subtlePatternIcon = Waves;
