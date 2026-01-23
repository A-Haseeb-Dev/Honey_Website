
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const CTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-inner-box", {
        scrollTrigger: {
          trigger: ".cta-inner-box",
          start: "top 95%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      });

      gsap.to(patternRef.current, {
        scrollTrigger: {
          trigger: ".cta-inner-box",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        rotate: 10,
        ease: "none"
      });

      gsap.from(".cta-content > *", {
        scrollTrigger: {
          trigger: ".cta-inner-box",
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-inner-box relative bg-[#FFC107] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden p-8 sm:p-12 md:p-24 lg:p-32 text-center shadow-2xl border-4 md:border-8 border-white">
          <div className="absolute inset-0 opacity-10 md:opacity-20 pointer-events-none">
             <svg 
               ref={patternRef}
               className="w-full h-[120%] absolute -top-[10%] left-0" 
               viewBox="0 0 100 100" 
               preserveAspectRatio="none"
             >
                <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#honey-grid-large)" />
                <defs>
                   <pattern id="honey-grid-large" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 5 8 L 0 0" fill="none" stroke="#8B4513" strokeWidth="1" />
                   </pattern>
                </defs>
             </svg>
          </div>
          
          <div className="cta-content relative z-10 space-y-6 md:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#8B4513] tracking-tight leading-tight">
              Sweeten Your Life, <br className="hidden sm:block" />Naturally.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#8B4513]/80 max-w-3xl mx-auto font-medium">
              Join our newsletter and get <span className="text-[#8B4513] font-bold underline decoration-wavy decoration-white">15% off</span> your first order.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-6">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full sm:w-80 md:w-96 px-6 py-4 md:py-5 rounded-xl md:rounded-2xl border-none outline-none shadow-xl focus:ring-4 focus:ring-[#8B4513]/30 text-base md:text-lg transition-all"
              />
              <button className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-5 bg-[#8B4513] text-[#FFC107] text-base md:text-lg font-bold rounded-xl md:rounded-2xl shadow-xl hover:bg-black active:scale-95 transition-all">
                Join & Save
              </button>
            </div>
            
            <p className="text-[#8B4513]/60 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-6">
              Join 15,000+ Honey Lovers
            </p>
          </div>
          
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 md:w-96 h-64 md:h-96 bg-white/20 rounded-full blur-3xl -z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
