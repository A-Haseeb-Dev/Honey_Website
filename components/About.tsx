
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal with a slight scale and rotation
      gsap.from(".about-image-main", {
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 90%",
          end: "bottom 20%",
          scrub: 0.5,
        },
        scale: 1.15,
        rotate: -1,
        ease: "none",
      });

      // Text stagger reveal
      gsap.from(".about-text-content > *", {
        scrollTrigger: {
          trigger: ".about-text-content",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Floating animation for the badge
      gsap.to(badgeRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      
      // Horizontal slide for info cards
      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: ".info-cards-container",
          start: "top 90%",
          toggleActions: "play none none none"
        },
        x: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative about-image-container">
            <div className="rounded-3xl shadow-2xl overflow-hidden relative z-10 bg-[#FFF8E1]">
              <img
                src="https://images.unsplash.com/photo-1558583082-409143c794ca?q=80&w=1200&auto=format&fit=crop"
                alt="Honey production"
                className="about-image-main w-full h-full object-cover"
              />
            </div>
            <div 
              ref={badgeRef}
              className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#FFC107] rounded-2xl z-20 border-8 border-white shadow-2xl flex flex-col items-center justify-center p-4 text-center transform rotate-3"
            >
               <span className="text-3xl font-bold text-[#8B4513]">25+</span>
               <span className="text-[10px] font-bold text-[#8B4513] uppercase tracking-wider leading-tight">Years of Pure Production</span>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 about-text-content">
            <div className="space-y-4">
              <div className="h-1.5 w-16 bg-[#FFC107] rounded-full mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] leading-tight">
                Crafted by Nature, <br />Preserved by Tradition
              </h2>
              <p className="text-lg text-[#333333]/80 leading-relaxed">
                At Honey, we believe in minimal interference. Our bees roam freely in certified organic wildlands, collecting nectar from a diverse range of flora.
              </p>
              <p className="text-[#333333]/70 leading-relaxed">
                We use cold-extraction methods to ensure that every jar retains the natural enzymes, antioxidants, and delicate aromatic compounds that make raw honey a superfood. No heat, no filters, just pure golden goodness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 info-cards-container">
              <div className="info-card p-6 bg-[#FFF8E1] rounded-3xl border border-[#FFC107]/20 shadow-sm transition-shadow hover:shadow-md">
                <div className="w-10 h-10 bg-[#FFC107] rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-bold text-[#8B4513] text-lg">Lab Tested</h3>
                <p className="text-sm text-gray-500">Every batch verified for purity and origin.</p>
              </div>
              <div className="info-card p-6 bg-[#FFF8E1] rounded-3xl border border-[#FFC107]/20 shadow-sm transition-shadow hover:shadow-md">
                <div className="w-10 h-10 bg-[#4CAF50] rounded-xl flex items-center justify-center text-white mb-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                </div>
                <h3 className="font-bold text-[#8B4513] text-lg">Eco-Sourced</h3>
                <p className="text-sm text-gray-500">Supporting ethical beekeeping and biodiversity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
