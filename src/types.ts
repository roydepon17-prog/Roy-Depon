export type ProductCategory = 'all' | 'single-origin' | 'tablea' | 'limited';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  price: number;
  weight: string;
  badge: string;
  badgeColor?: string;
  image: string;
  description: string;
  tastingNotes: string[];
  cacaoPercentage: string;
  variety: string;
  fermentation: string;
  conchingTime: string;
  pairings: string[];
  inStock: boolean;
  batchNumber: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProcessStep {
  step: string;
  title: string;
  icon: string;
  description: string;
  parameter: string;
  parameterLabel: string;
  details: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface WholesaleInquiry {
  fullName: string;
  email: string;
  establishment: string;
  allocationTier: string;
  targetDate: string;
  notes: string;
}
