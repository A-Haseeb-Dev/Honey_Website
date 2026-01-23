
import React, { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react';
import { MOCK_PRODUCTS } from '../../constants';
import { useCart } from '../../CartContext';
import { Product } from '../../types';
import Button from '../Shared/Button';
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
      // Prevent FOUC by setting visibility before starting the timeline
      gsap.set(".hero-reveal", { visibility: "visible" });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 1.4 }
      });

      // Staggered reveal for text elements
      tl.from(".hero-text-item", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        clearProps: "all"
      })
      // Slide up the form box with a slight delay relative to the text
      .from(".hero-form-box", {
        y: 60,
        opacity: 0,
        duration: 1.6,
        clearProps: "all"
      }, "-=1.0");

      // Continuous gentle hover animation for decorative element
      gsap.to(floatingHoneyRef.current, {
        y: 20,
        x: 10,
        rotation: 5,
        duration: 4,
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

  const inputClasses = "w-full px-4 py-2.5 md:py-3 rounded-xl border border-[#FFC107]/30 bg-white/70 focus:bg-white focus:ring-2 focus:ring-[#FFC107] focus:border-transparent outline-none transition-all placeholder:text-gray-400 text-sm text-[#333333] shadow-sm appearance-none";

  return (
    <div ref={containerRef} className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-[#FFF8E1] py-8 md:py-16 lg:py-20">
      {/* Premium Background Blobs */}
      <div className="absolute top-10 right-[-10%] md:right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-[#FFC107]/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[200px] h-[200px] bg-[#FFC107]/5 rounded-full blur-[60px] md:hidden -z-10" />
      
      <div 
        ref={floatingHoneyRef}
        className="absolute top-1/4 left-1/4 opacity-10 hidden xl:block -z-0"
      >
        <svg width="80" height="100" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 120 50 120C77.6142 120 100 77.6142 100 50C100 22.3858 77.6142 0 50 0Z" fill="#FFC107"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          
          {/* Main Content Area */}
          <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6 md:space-y-8 hero-reveal" style={{ visibility: 'hidden' }}>
            <div className="hero-text-item inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#FFC107]/15 text-[#8B4513] rounded-full text-[9px] md:text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FFC107] animate-pulse" />
              <span>100% Pure & Organic</span>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              <h1 className="hero-text-item text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#8B4513] leading-[1.1] tracking-tight font-serif">
                Golden Purity, <br />
                <span className="text-[#FFC107]">Direct to You</span>
              </h1>
              <p className="hero-text-item text-sm sm:text-base md:text-xl text-[#333333]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Experience honey as nature intended: raw, unfiltered, and cold-extracted to preserve every vital enzyme and aromatic note.
              </p>
            </div>

            <div className="hero-text-item flex flex-col xs:flex-row gap-3 md:gap-4 pt-4 justify-center lg:justify-start">
              <Button href="#products" variant="primary" size="lg" className="w-full xs:w-auto text-sm md:text-base">Shop Collection</Button>
              <Button href="#about" variant="outline" size="lg" className="w-full xs:w-auto text-sm md:text-base">Our Story</Button>
            </div>
          </div>

          {/* Rapid Order Form */}
          <div className="w-full lg:w-2/5 hero-form-box hero-reveal" style={{ visibility: 'hidden' }}>
            <div className="relative bg-white/95 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-[2rem] shadow-2xl border border-white/50">
              <div className="flex justify-between items-center mb-5 md:mb-8 border-b border-[#FFC107]/10 pb-4 md:pb-6">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#8B4513] font-serif">Quick Order</h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">Fresh harvest available</p>
                </div>
                <span className="hidden sm:inline-block text-[9px] font-black text-[#FFC107] bg-[#FFC107]/10 px-2.5 py-1 rounded-lg tracking-widest uppercase">
                  {MOCK_PRODUCTS.length} Varieties
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 md:space-y-5">
                <div className="space-y-1">
                  <label className="block text-[9px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClasses}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4">
                  <div className="space-y-1">
                    <label className="block text-[9px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Category</label>
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
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[9px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Variety</label>
                    <div className="relative">
                      <select
                        className={inputClasses}
                        value={formData.productId}
                        onChange={e => setFormData({ ...formData, productId: e.target.value })}
                      >
                        {filteredProducts.map(p => (
                          <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 md:gap-4">
                  <div className="sm:col-span-1 space-y-1">
                    <label className="block text-[9px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      className={inputClasses}
                      value={formData.quantity}
                      onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-1">
                    <label className="block text-[9px] font-black text-[#8B4513]/60 uppercase tracking-widest ml-1">Shipping Info</label>
                    <input
                      required
                      placeholder="Delivery city"
                      className={inputClasses}
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full mt-2 uppercase tracking-widest font-black text-xs md:text-sm">
                  Complete Order
                </Button>
              </form>

              <div className="mt-5 md:mt-8 flex flex-wrap items-center justify-center gap-3 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                <span className="flex items-center"><svg className="w-3 h-3 mr-1 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Secure Pay</span>
                <span className="flex items-center"><svg className="w-3 h-3 mr-1 text-[#4CAF50]" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg> Express Delivery</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
