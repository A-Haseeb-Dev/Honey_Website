
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-image-main", {
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 0.5,
        },
        scale: 1.1,
        rotate: -1,
        ease: "none",
      });

      gsap.from(".about-text-content > *", {
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: ".info-cards-container",
          start: "top 90%",
          toggleActions: "play none none none"
        },
        x: 20,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-1/2 relative about-image-container order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="rounded-[2.5rem] shadow-2xl overflow-hidden relative z-10 bg-[#FFF8E1]">
              <img
                src="https://images.unsplash.com/photo-1558583082-409143c794ca?q=80&w=1200&auto=format&fit=crop"
                alt="Honey production"
                className="about-image-main w-full aspect-[4/3] lg:aspect-auto object-cover"
              />
            </div>
            <div 
              ref={badgeRef}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-32 h-32 md:w-40 md:h-40 bg-[#FFC107] rounded-3xl z-20 border-4 md:border-8 border-white shadow-2xl flex flex-col items-center justify-center p-3 md:p-4 text-center transform rotate-3"
            >
               <span className="text-2xl md:text-3xl font-bold text-[#8B4513]">25+</span>
               <span className="text-[9px] md:text-[10px] font-bold text-[#8B4513] uppercase tracking-wider leading-tight">Years of Heritage</span>
            </div>
            <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-[#FFC107]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 about-text-content order-1 lg:order-2">
            <div className="space-y-4">
              <div className="h-1.5 w-12 md:w-16 bg-[#FFC107] rounded-full mb-4 md:mb-6"></div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#8B4513] leading-tight font-serif">
                Crafted by Nature, <br />Preserved by Us
              </h2>
              <p className="text-base md:text-lg text-[#333333]/80 leading-relaxed">
                At Honey, we believe in minimal interference. Our bees roam freely in certified organic wildlands, collecting nectar from a diverse range of seasonal flora.
              </p>
              <p className="text-sm md:text-base text-[#333333]/70 leading-relaxed">
                We use cold-extraction methods to ensure that every jar retains the natural enzymes, antioxidants, and delicate aromatic compounds that make raw honey a legendary superfood.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 info-cards-container">
              <div className="info-card p-5 md:p-6 bg-[#FFF8E1] rounded-2xl border border-[#FFC107]/20 shadow-sm">
                <div className="w-10 h-10 bg-[#FFC107] rounded-xl flex items-center justify-center text-white mb-4 shadow-inner">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-bold text-[#8B4513] text-base md:text-lg">Lab Tested</h3>
                <p className="text-xs md:text-sm text-gray-500">Every batch verified for therapeutic purity.</p>
              </div>
              <div className="info-card p-5 md:p-6 bg-[#FFF8E1] rounded-2xl border border-[#FFC107]/20 shadow-sm">
                <div className="w-10 h-10 bg-[#4CAF50] rounded-xl flex items-center justify-center text-white mb-4 shadow-inner">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                </div>
                <h3 className="font-bold text-[#8B4513] text-base md:text-lg">Eco-Sourced</h3>
                <p className="text-xs md:text-sm text-gray-500">Supporting ethical beekeeping globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
