
import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card group bg-white rounded-[2rem] overflow-hidden shadow-md border border-[#FFC107]/10 flex flex-col h-full hover:shadow-2xl transition-all duration-300 transform">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF8E1]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#8B4513] font-bold px-4 py-2 rounded-2xl text-sm shadow-sm z-10">
          ${product.price}
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#FFC107] text-[#8B4513] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-tighter">
            {product.type}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#8B4513] line-clamp-1 font-serif">{product.name}</h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 py-2">
          {product.benefits.slice(0, 3).map((benefit) => (
            <span 
              key={benefit} 
              className="text-[9px] uppercase font-bold tracking-widest px-2 py-1 bg-[#4CAF50]/5 text-[#4CAF50] rounded-lg border border-[#4CAF50]/10"
            >
              {benefit}
            </span>
          ))}
        </div>

        <div className="pt-4 mt-auto">
          <button
            onClick={() => onAddToCart(product, 1)}
            className="w-full py-4 bg-[#FFC107] text-[#8B4513] font-bold rounded-2xl transition-all hover:bg-[#8B4513] hover:text-[#FFC107] active:scale-95 shadow-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
