/**
 * Site constants and content for CLNL website
 * All website content is centralized here for easy updates
 */

import type { CompanyInfo, ServiceDetail, Industry, Differentiator } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Complete Logistics Network Limited',
  tagline: 'Your Trusted Partner for Agro Exports, Freight Management, Customs Clearing, Logistics & Facilities Management',
  description: 'Complete Logistics Network Limited (CLNL) is a leading multi-service logistics provider in Nigeria, offering comprehensive solutions across agro exports, freight management, customs clearing, logistics & warehousing, and facilities management. With our experienced team and technology-driven approach, we deliver end-to-end logistics excellence.',
  mission: 'To provide seamless, reliable, and innovative logistics solutions that empower businesses to thrive in local and global markets.',
  vision: 'To be the most trusted and efficient logistics partner in Africa, setting industry standards for service excellence and customer satisfaction.',
  values: [
    'Integrity',
    'Efficiency',
    'Customer Commitment',
    'Innovation',
    'Excellence',
  ],
  contact: {
    address: 'No. 156, Kudirat Abiola Way / No. 2 Adewunmi Estate, Oregun Ikeja, Lagos, Nigeria',
    phone: ['+234-8164096255', '+234-8033054354'],
    email: ['info@completelogisticsnetwork.com', 'ezeudenze@yahoo.com', 'dnng2006@gmail.com'],
    website: 'www.completelogisticsnetwork.com',
  },
};

export const services: ServiceDetail[] = [
  {
    id: 'agro-export',
    name: 'Agro Exports',
    slug: 'agro-exports',
    description: 'Comprehensive agricultural export services connecting Nigerian farmers and processors to global markets. We handle the entire export chain from sourcing to final delivery.',
    offerings: [
      'Product sourcing and procurement',
      'Quality control and inspection',
      'Export documentation and certification',
      'Packaging and labeling',
      'Fumigation and phytosanitary services',
      'Shipment coordination and logistics',
    ],
    products: [
      'Cocoa beans',
      'Sesame seeds',
      'Cashew nuts',
      'Ginger',
      'Hibiscus',
      'Spices & grains',
    ],
    keywords: [
      'agro export Nigeria',
      'agricultural exports Lagos',
      'cocoa export',
      'sesame export',
      'cashew export',
      'Nigerian agricultural products',
    ],
    icon: 'FaSeedling',
  },
  {
    id: 'freight',
    name: 'Freight Management',
    slug: 'freight-management',
    description: 'Global freight forwarding services with comprehensive air, sea, and land transport solutions. Our extensive partner network ensures your cargo reaches any destination efficiently.',
    offerings: [
      'Air freight services',
      'Sea freight (FCL & LCL)',
      'Land transport and haulage',
      'Cargo consolidation',
      'Door-to-door shipment',
      'Real-time tracking',
    ],
    keywords: [
      'freight forwarding Nigeria',
      'shipping company Lagos',
      'air freight Nigeria',
      'sea freight Lagos',
      'cargo services Nigeria',
      'international shipping',
    ],
    icon: 'FaShippingFast',
  },
  {
    id: 'customs',
    name: 'Customs Clearing',
    slug: 'customs-clearing',
    description: 'Expert customs brokerage services ensuring swift, legal, and delay-free clearance of your imports and exports. We navigate complex regulations so you don\'t have to.',
    offerings: [
      'Import and export clearance',
      'HS code classification',
      'Regulatory compliance (NAFDAC, SON, Quarantine)',
      'Duty assessment and payment',
      'Terminal operations',
      'Documentation processing',
    ],
    keywords: [
      'customs clearing agent Lagos',
      'clearing and forwarding Nigeria',
      'customs broker Nigeria',
      'import clearance Lagos',
      'export clearance Nigeria',
      'NAFDAC clearance',
    ],
    icon: 'FaFileInvoice',
  },
  {
    id: 'logistics',
    name: 'Logistics & Warehousing',
    slug: 'logistics-warehousing',
    description: 'Integrated logistics and warehousing solutions with secure storage facilities and efficient distribution networks across Nigeria.',
    offerings: [
      'Nationwide haulage and distribution',
      'Inventory management',
      'Order fulfillment',
      'Standard and temperature-controlled storage',
      '24/7 security with CCTV monitoring',
      'Access control systems',
      'Standard racking and material handling',
      'Skilled warehouse operators',
    ],
    keywords: [
      'logistics company Nigeria',
      'warehousing Lagos',
      'storage facilities Nigeria',
      'distribution services Lagos',
      'supply chain Nigeria',
      'inventory management',
    ],
    icon: 'FaWarehouse',
  },
  {
    id: 'facilities',
    name: 'Facilities Management',
    slug: 'facilities-management',
    description: 'Comprehensive facilities management services ensuring your buildings and infrastructure operate at peak efficiency with minimal downtime.',
    offerings: [
      'Preventive and corrective maintenance',
      'Cleaning and janitorial services',
      'Building management systems',
      'Landscaping and grounds maintenance',
      'Waste management',
      'Technical support (HVAC, electrical, plumbing)',
    ],
    keywords: [
      'facility management company Nigeria',
      'building maintenance Lagos',
      'facilities management Nigeria',
      'property maintenance Lagos',
      'HVAC maintenance Nigeria',
      'integrated facility management',
    ],
    icon: 'FaTools',
  },
];

export const industries: Industry[] = [
  {
    id: 'agriculture',
    name: 'Agriculture',
    icon: 'FaTractor',
    description: 'Supporting farmers and agro-processors with export logistics and supply chain solutions',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: 'FaIndustry',
    description: 'Streamlining raw material imports and finished goods distribution for manufacturers',
  },
  {
    id: 'fmcg',
    name: 'FMCG',
    icon: 'FaShoppingCart',
    description: 'Fast-moving consumer goods logistics with efficient warehousing and distribution',
  },
  {
    id: 'import-export',
    name: 'Import/Export Trade',
    icon: 'FaGlobeAfrica',
    description: 'Comprehensive customs and freight services for international traders',
  },
  {
    id: 'construction',
    name: 'Construction',
    icon: 'FaHardHat',
    description: 'Heavy equipment logistics and facilities management for construction projects',
  },
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    icon: 'FaOilCan',
    description: 'Specialized logistics and facilities management for energy sector operations',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: 'FaStore',
    description: 'Inventory management and distribution solutions for retail businesses',
  },
  {
    id: 'technology',
    name: 'Technology & Electronics',
    icon: 'FaLaptop',
    description: 'Secure handling and customs clearance for technology imports',
  },
  {
    id: 'sme-corporate',
    name: 'SMEs & Large Corporations',
    icon: 'FaBuilding',
    description: 'Scalable logistics solutions for businesses of all sizes',
  },
];

export const differentiators: Differentiator[] = [
  {
    id: 'end-to-end',
    title: 'End-to-End Service Delivery',
    description: 'From sourcing to final delivery, we manage every aspect of your logistics needs under one roof, eliminating the hassle of coordinating multiple vendors.',
    icon: 'FaRoute',
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance Expertise',
    description: 'Our team stays current with all Nigerian and international trade regulations, ensuring your shipments meet NAFDAC, SON, and customs requirements.',
    icon: 'FaCheckCircle',
  },
  {
    id: 'pricing',
    title: 'Competitive Pricing',
    description: 'Leveraging our extensive network and operational efficiency, we deliver premium logistics services at competitive rates that protect your bottom line.',
    icon: 'FaMoneyBillWave',
  },
  {
    id: 'experience',
    title: 'Experienced Professionals',
    description: 'Our team brings decades of combined experience in logistics, customs, and supply chain management to solve your most complex challenges.',
    icon: 'FaUserTie',
  },
  {
    id: 'reach',
    title: 'National & Global Reach',
    description: 'With partners across Nigeria and around the world, we connect you to any market, ensuring your goods move seamlessly across borders.',
    icon: 'FaGlobe',
  },
  {
    id: 'technology',
    title: 'Technology-Driven Systems',
    description: 'Real-time tracking, automated inventory management, and digital documentation streamline operations and give you complete visibility.',
    icon: 'FaLaptopCode',
  },
];
