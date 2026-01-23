
import React from 'react';
import { Product, Testimonial } from './types';

export const COLORS = {
  primary: '#FFC107', // Warm golden yellow
  bg: '#FFF8E1',      // Natural beige
  accent: '#8B4513',  // Deep honey brown
  green: '#4CAF50',   // Forest green
  dark: '#333333',    // Dark gray
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Raw Wildflower Honey',
    description: 'Direct from the meadows of Provence, unfiltered and rich in local pollen.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=800&auto=format&fit=crop',
    benefits: ['Immunity Boost', 'Local Pollen', 'Antioxidant Rich'],
    type: 'Wildflower'
  },
  {
    id: 'p2',
    name: 'Manuka Gold MGO 400+',
    description: 'Exceptional therapeutic grade Manuka honey from New Zealand native forests.',
    price: 65.00,
    image: 'https://images.unsplash.com/photo-1558583082-409143c794ca?q=80&w=800&auto=format&fit=crop',
    benefits: ['Wound Healing', 'Digestive Health', 'High Antibacterial'],
    type: 'Manuka'
  },
  {
    id: 'p3',
    name: 'Acacia Crystal Clear',
    description: 'Mild, sweet, and slow to crystallize. Perfect for sweetening tea and delicate desserts.',
    price: 19.50,
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fba?q=80&w=800&auto=format&fit=crop',
    benefits: ['Low Glycemic', 'Vitamin Rich', 'Gentle Sweetness'],
    type: 'Acacia'
  },
  {
    id: 'p4',
    name: 'Dark Buckwheat',
    description: 'Robust, full-bodied honey with a distinct earthy flavor. High in mineral content.',
    price: 22.00,
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop',
    benefits: ['High Iron', 'Cough Relief', 'Mineral Dense'],
    type: 'Buckwheat'
  },
  {
    id: 'p5',
    name: 'Fragrant Lavender',
    description: 'Infused with the delicate floral notes of Spanish lavender fields.',
    price: 28.50,
    image: 'https://images.unsplash.com/photo-1581451048554-080c6c8e3ca3?q=80&w=800&auto=format&fit=crop',
    benefits: ['Calming', 'Floral Aroma', 'Relaxation'],
    type: 'Lavender'
  },
  {
    id: 'p6',
    name: 'Organic Eucalyptus',
    description: 'Refreshing and slightly herbal honey from Australian eucalyptus blossoms.',
    price: 26.00,
    image: 'https://images.unsplash.com/photo-1563736113591-11978503c917?q=80&w=800&auto=format&fit=crop',
    benefits: ['Respiratory Support', 'Anti-inflammatory', 'Herbal'],
    type: 'Eucalyptus'
  },
  {
    id: 'p7',
    name: 'Orange Blossom',
    description: 'A light, citrusy honey from the sun-drenched orange groves of Florida.',
    price: 21.99,
    image: 'https://images.unsplash.com/photo-1563736113591-11978503c917?q=80&w=800&auto=format&fit=crop',
    benefits: ['Citrus Notes', 'Rich in Zinc', 'Energy'],
    type: 'Orange Blossom'
  },
  {
    id: 'p8',
    name: 'Rare White Sage',
    description: 'A premium, ultra-light honey harvested from the sage fields of California.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=800&auto=format&fit=crop',
    benefits: ['Clean Taste', 'Rare Harvest', 'Vitamin C'],
    type: 'Sage'
  },
  {
    id: 'p9',
    name: 'Premium Sourwood',
    description: 'Award-winning honey with a spicy, buttery finish from the Appalachian mountains.',
    price: 35.00,
    image: 'https://images.unsplash.com/photo-1471943311424-646960669fba?q=80&w=800&auto=format&fit=crop',
    benefits: ['Award Winning', 'Spicy Notes', 'Gourmet'],
    type: 'Sourwood'
  },
  {
    id: 'p10',
    name: 'Southern Tupelo',
    description: 'The legendary "Gold of the Swamps". High fructose content means it never crystallizes.',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1558583082-409143c794ca?q=80&w=800&auto=format&fit=crop',
    benefits: ['Rare', 'Non-Crystallizing', 'Liquid Gold'],
    type: 'Tupelo'
  },
  {
    id: 'p11',
    name: 'Black Forest Honeydew',
    description: 'A dark, rich honey produced by bees from the sap of evergreen trees.',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop',
    benefits: ['Antiseptic', 'Strong Flavor', 'Tree Honey'],
    type: 'Forest'
  }
];

export const MOCK_REVIEWS: Testimonial[] = [
  {
    id: 'r1',
    name: 'Sarah Jenkins',
    role: 'Wellness Blogger',
    content: "The quality of this wildflower honey is unmatched. You can taste the purity in every spoonful. My morning tea is never complete without it!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 'r2',
    name: 'David Chen',
    role: 'Fitness Enthusiast',
    content: "I use the Manuka honey for post-workout recovery. Excellent service and fast international shipping. Highly recommend to all health-conscious buyers.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: 'r3',
    name: 'Emily Watson',
    role: 'Parent',
    content: "Safe, natural, and my kids love it. I feel good knowing exactly where this honey comes from. The transparency of the brand is refreshing.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=emily'
  }
];

export const ICONS = {
  Cart: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  ),
  Honey: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v10"/><path d="M18.4 6.9a9 9 0 1 1-12.8 0"/>
    </svg>
  ),
  Menu: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  WhatsApp: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.408.001 12.045a11.811 11.811 0 001.591 5.976L0 24l6.146-1.612a11.771 11.771 0 005.904 1.599h.005c6.632 0 12.042-5.41 12.046-12.047a11.85 11.85 0 00-3.391-8.526"/>
    </svg>
  ),
  Instagram: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  LinkedIn: (props: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
};
