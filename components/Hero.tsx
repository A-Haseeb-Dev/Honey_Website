
import React, { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../CartContext';
import { Product } from '../types';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const { addToCart } = useCart();
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingHoneyRef = useRef<HTMLDivElement>(null);
  
  const categories = useMemo(() => {
    const types = MOCK_PRODUCTS.map(p => p.type);
    return Array.from(new Set(types));
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => p.type === selectedCategory);
  }, [selectedCategory]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    productId: '',
    quantity: 1,
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-reveal", { visibility: "visible" });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 }
      });

      tl.from(".hero-text-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
      })
      .from(".hero-form-box", {
        y: 40,
        opacity: 0,
      }, "-=0.6");

      gsap.to(floatingHoneyRef.current, {
        y: 20,
        x: 10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setFormData(prev => ({ ...prev, productId: filteredProducts[0].id }));
    }
  }, [filteredProducts, selectedCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = MOCK_PRODUCTS.find(p => p.id === formData.productId);
    if (product) {
      addToCart(product, Number(formData.quantity));
      alert(`Success! ${formData.quantity}x ${product.name} added to your order.`);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-[#FFC107]/30 bg-white/70 focus:bg-white focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm text-[#333333] shadow-sm appearance-none";

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#FFF8E1] py-12 md:py-20">
      <div className="absolute top-20 right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FFC107]/10 rounded-full blur-[100px] md:blur-[120px] -z-10" />
      
      <div 
        ref={floatingHoneyRef}
        className="absolute top-1/4 left-1/4 opacity-20 hidden lg:block -z-0"
      >
        <svg width="80" height="100" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 120 50 120C77.6142 120 100 77.6142 100 50C100 22.3858 77.6142 0 50 0Z" fill="#FFC107"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8 hero-reveal" style={{ visibility: 'hidden' }}>
            <div className="hero-text-item inline-flex items-center space-x-2 px-4 py-2 bg-[#FFC107]/15 text-[#8B4513] rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
              <span>100% Pure & Organic</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="hero-text-item text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#8B4513] leading-[1.1] tracking-tight font-serif">
                Golden Purity, <br />
                <span className="text-[#FFC107]">Direct to Your Door</span>
              </h1>
              <p className="hero-text-item text-base md:text-xl text-[#333333]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Sourced responsibly from wild meadows and untouched forests. Experience honey as nature intended: raw, unfiltered, and bursting with health benefits.
              </p>
            </div>

            <div className="hero-text-item flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="#products" className="px-8 md:px-10 py-4 md:py-5 bg-[#FFC107] text-[#8B4513] font-extrabold rounded-2xl shadow-xl hover:bg-[#FFB300] hover:scale-105 transition-all active:scale-95 text-base md:text-lg text-center">
                Shop Now
              </a>
              <a href="#about" className="px-8 md:px-10 py-4 md:py-5 bg-white/50 backdrop-blur-sm text-[#8B4513] font-bold rounded-2xl border-2 border-[#FFC107]/20 hover:bg-white hover:border-[#FFC107]/50 transition-all text-base md:text-lg text-center">
                Our Story
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 hero-form-box hero-reveal" style={{ visibility: 'hidden' }}>
            <div className="relative bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/50">
              <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-[#FFC107]/10 pb-5 md:pb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#8B4513] font-serif">Quick Order</h2>
                <span className="text-[10px] font-black text-[#FFC107] bg-[#FFC107]/10 px-3 py-1.5 rounded-lg tracking-widest uppercase">
                  {MOCK_PRODUCTS.length} Varieties
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClasses}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Honey Category</label>
                    <div className="relative">
                      <select
                        className={inputClasses}
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFC107]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Specific Variety</label>
                    <div className="relative">
                      <select
                        className={inputClasses}
                        value={formData.productId}
                        onChange={e => setFormData({ ...formData, productId: e.target.value })}
                      >
                        {filteredProducts.map(p => (
                          <option key={p.id} value={p.id}>{p.name} - ${p.price}</option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#FFC107]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Quantity (Jars)</label>
                  <input
                    type="number"
                    min="1"
                    className={inputClasses}
                    value={formData.quantity}
                    onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Delivery Address</label>
                  <textarea
                    required
                    placeholder="Where should we ship your gold?"
                    className={`${inputClasses} resize-none h-20 md:h-24`}
                    value={formData.address}
                    onChange={e => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 md:py-5 bg-[#FFC107] text-[#8B4513] font-black rounded-2xl shadow-xl hover:bg-[#FFB300] hover:-translate-y-1 active:translate-y-0 transition-all text-base md:text-lg uppercase tracking-widest mt-2"
                >
                  Order Pure Honey
                </button>
              </form>

              <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                <span className="flex items-center"><svg className="w-3 h-3 mr-1.5 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Secure Checkout</span>
                <span className="flex items-center"><svg className="w-3 h-3 mr-1.5 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> World Shipping</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
