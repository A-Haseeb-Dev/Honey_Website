
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  benefits: string[];
  type: 'Wildflower' | 'Manuka' | 'Clover' | 'Acacia' | 'Buckwheat' | 'Lavender' | 'Eucalyptus' | 'Orange Blossom' | 'Sage' | 'Sourwood' | 'Tupelo' | 'Forest';
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Recipe {
  title: string;
  ingredients: string[];
  instructions: string[];
  image?: string;
}
