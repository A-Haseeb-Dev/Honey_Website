
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Benefits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const benefitsList = [
    {
      title: 'Natural Immunity',
      desc: 'Packed with phytonutrients and polyphenols that strengthen your body\'s natural defenses against seasonal threats.',
      icon: '🛡️'
    },
    {
      title: 'Digestive Health',
      desc: 'Living enzymes and prebiotics support a flourishing gut microbiome, aiding digestion and nutrient absorption.',
      icon: '✨'
    },
    {
      title: 'Energy Boost',
      desc: 'An ideal natural fuel for athletes and busy professionals, providing sustained energy without the sugar crash.',
      icon: '⚡'
    },
    {
      title: 'Skin Vitality',
      desc: 'Potent anti-inflammatory properties soothe the skin, while natural humectants lock in moisture for a radiant glow.',
      icon: '🌸'
    },
    {
      title: 'Sleep Support',
      desc: 'A spoonful before bed facilitates a small rise in insulin, helping tryptophan enter the brain to promote restful sleep.',
      icon: '🌙'
    },
    {
      title: 'Cough Relief',
      desc: 'Clinically proven to be as effective as common cough suppressants, forming a protective film over the throat.',
      icon: '🍯'
    }
  ];

  const comparison = [
    { feature: 'Temperature', raw: 'Never heated above 118°F', processed: 'Flash-heated to 160°F+' },
    { feature: 'Filtration', raw: 'Coarsely strained (keeps pollen)', processed: 'Micro-filtered (removes pollen)' },
    { feature: 'Enzymes', raw: '100% Intact & Active', processed: 'Destroyed by high heat' },
    { feature: 'Additives', raw: 'Zero additives or syrups', processed: 'Often diluted with corn syrup' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-item", {
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 95%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(".benefit-item", { clearProps: "transform,opacity,scale" });
        }
      });

      gsap.from(".benefits-heading > *", {
        scrollTrigger: {
          trigger: ".benefits-heading",
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(".benefits-image-inner", {
        scrollTrigger: {
          trigger: ".benefits-image-box",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -50,
        ease: "none"
      });

      gsap.from(".historical-reveal", {
        scrollTrigger: {
          trigger: ".historical-context",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(".historical-reveal", { clearProps: "all" });
        }
      });

      gsap.from(".comparison-section", {
        scrollTrigger: {
          trigger: ".comparison-section",
          start: "top 90%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => {
          ScrollTrigger.refresh();
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="py-16 md:py-24 bg-[#8B4513] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-[#FFC107]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4 md:space-y-6 benefits-heading">
              <div className="inline-block px-3 py-1 bg-[#FFC107]/20 rounded-lg text-[#FFC107] text-[10px] font-bold uppercase tracking-widest">
                Natures Superfood
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                Why Honey? <br />
                <span className="text-[#FFC107]">The Ultimate Superfood</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
                For thousands of years, honey has been revered not just as a sweetener, but as a potent medicine. Our raw honey preserves the life-giving properties that processed supermarket honey destroys.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 benefits-grid">
              {benefitsList.map((b) => (
                <div key={b.title} className="benefit-item group p-6 md:p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-[#FFC107]/10 hover:border-[#FFC107]/30 transition-all duration-300">
                  <div className="text-3xl md:text-4xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">{b.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#FFC107]">{b.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32 benefits-image-box mt-12 lg:mt-0">
             <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1200&auto=format&fit=crop" 
                  alt="Healthy life" 
                  className="benefits-image-inner w-full h-full object-cover scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 md:right-12">
                   <p className="text-xl md:text-2xl font-serif italic text-white leading-tight">
                     "Let your food be your medicine and your medicine be your food."
                   </p>
                   <p className="mt-3 md:mt-4 text-[#FFC107] font-bold uppercase text-[10px] tracking-widest">— Hippocrates</p>
                </div>
             </div>
          </div>
        </div>

        <div className="historical-context mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border-t border-white/10 pt-12 md:pt-16">
          <div className="order-2 md:order-1 space-y-6 md:space-y-8">
            <div className="historical-reveal h-1 w-20 bg-[#FFC107]"></div>
            <h3 className="historical-reveal text-2xl md:text-4xl font-bold font-serif text-[#FFC107]">Ancient Wisdom, Modern Proof</h3>
            <div className="historical-reveal space-y-4 md:space-y-6 text-base md:text-lg text-white/80 leading-relaxed">
              <p>
                Since the dawn of civilization, honey has been more than a pantry staple; it was the "Liquid Gold" of ancient pharmacopoeias. From the clay tablets of Sumeria to the papyri of Ancient Egypt, honey was prescribed for over 500 different remedies. Egyptians valued it so highly for its antibacterial and preservative qualities that it was used in wound dressings.
              </p>
              <p>
                Unlike modern refined sweeteners, raw honey is a complex biological miracle. Refined white sugar and corn syrup are "empty calories"—designed for a rapid glycemic spike that leaves your metabolism depleted. Raw honey possesses a lower glycemic index, providing a stable, slow-release energy source.
              </p>
              <p>
                Modern science is only now beginning to quantify what our ancestors knew instinctively. Researchers have identified unique antimicrobial peptides like <span className="italic">Defensin-1</span> and an array of oligosaccharides that act as powerful prebiotics, selectively nourishing the beneficial microbes in your microbiome.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 historical-reveal">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#FFC107]/20 rounded-[2rem] md:rounded-[3rem] blur-xl group-hover:bg-[#FFC107]/30 transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1558583055-d74621c828d1?q=80&w=1200&auto=format&fit=crop" 
                alt="Honey comb detail" 
                className="relative z-10 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/10 w-full object-cover aspect-video md:aspect-auto"
              />
            </div>
          </div>
        </div>

        <div className="comparison-section bg-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#FFC107]">The Raw Difference</h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Most honey on supermarket shelves is "honey-flavored syrup" that has been pasteurized and ultra-filtered.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center space-x-3 text-xs md:text-sm font-medium">
                  <span className="text-[#FFC107]">✓</span>
                  <span>Retains all natural pollen</span>
                </li>
                <li className="flex items-center space-x-3 text-xs md:text-sm font-medium">
                  <span className="text-[#FFC107]">✓</span>
                  <span>Rich in beneficial antioxidants</span>
                </li>
                <li className="flex items-center space-x-3 text-xs md:text-sm font-medium">
                  <span className="text-[#FFC107]">✓</span>
                  <span>Active floral enzymes preserved</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-2 overflow-x-auto no-scrollbar -mx-6 md:mx-0 px-6 md:px-0">
              <table className="w-full text-left min-w-[500px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 font-bold text-white/50 uppercase text-[10px] tracking-widest">Property</th>
                    <th className="py-4 font-bold text-[#FFC107] uppercase text-[10px] tracking-widest">Our Raw Honey</th>
                    <th className="py-4 font-bold text-white/50 uppercase text-[10px] tracking-widest">Supermarket Honey</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparison.map((row) => (
                    <tr key={row.feature} className="group hover:bg-white/5 transition-colors">
                      <td className="py-5 md:py-6 font-bold text-white text-sm">{row.feature}</td>
                      <td className="py-5 md:py-6 text-[#FFC107] font-semibold text-sm">{row.raw}</td>
                      <td className="py-5 md:py-6 text-white/40 text-sm">{row.processed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
