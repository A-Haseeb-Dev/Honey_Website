
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ICONS } from '../../constants';

const Preloader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    if (progress === 100) {
      const tl = gsap.timeline();
      tl.to('.preloader-content', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power2.in',
      })
      .to('.preloader-bg', {
        height: 0,
        duration: 0.8,
        ease: 'expo.inOut',
        stagger: 0.1,
        onComplete: () => {
          document.body.style.overflow = 'auto';
        }
      });
    }

    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="preloader-bg absolute inset-0 bg-[#8B4513] z-10" />
      <div className="preloader-bg absolute inset-0 bg-[#FFC107] z-20" />
      
      <div className="preloader-content relative z-30 flex flex-col items-center justify-center h-full text-[#8B4513]">
        <div className="relative mb-8">
          <ICONS.Honey className="w-16 h-16 animate-bounce" />
          <div className="absolute -inset-4 border-2 border-[#8B4513]/20 rounded-full animate-ping" />
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl font-serif font-bold mb-2 tracking-tighter">Honey Pure</h2>
          <p className="text-xs font-black uppercase tracking-[0.5em] opacity-60">Liquid Gold is Loading</p>
        </div>

        <div className="mt-12 w-48 h-1 bg-[#8B4513]/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#8B4513] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="mt-4 font-mono text-sm font-bold">{progress}%</span>
      </div>
    </div>
  );
};

export default Preloader;
