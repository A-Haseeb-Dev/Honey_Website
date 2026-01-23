
import React, { useLayoutEffect, useRef } from 'react';
import { MOCK_PRODUCTS } from '../../constants';
import { useCart } from '../../CartContext';
import ProductCard from '../Shared/ProductCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Products: React.FC = () => {
  const { addToCart } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create a specific animation for the cards
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 92%", // Trigger slightly later for better visibility
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all" // Completely clear props after animation to let CSS take over
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="products" className="bg-[#FFF8E1]/50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513]">Our Golden Collection</h2>
          <p className="text-lg text-[#333333]/70 max-w-2xl mx-auto">
            Choose from our range of premium mono-floral and multi-floral honeys, each with its own unique flavor profile and medicinal properties.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 product-grid"
        >
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
