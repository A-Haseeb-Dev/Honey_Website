
import React, { useState, useEffect, useRef } from 'react';
import { ICONS } from '../../constants';
import { useCart } from '../../CartContext';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Store Locator', href: '#locator' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  // GSAP animation for mobile overlay
  useEffect(() => {
    const overlay = menuOverlayRef.current;
    if (!overlay) return;

    if (isMenuOpen) {
      gsap.to(overlay, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power3.out',
      });
      gsap.fromTo(
        '.mobile-nav-item',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power4.out', delay: 0.2 }
      );
    } else {
      gsap.to(overlay, {
        opacity: 0,
        visibility: 'hidden',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-[#FFC107]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <div className="flex items-center space-x-2 relative z-[110]">
              <div className="p-1.5 bg-[#FFC107]/10 rounded-xl">
                <ICONS.Honey className="text-[#FFC107] w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-[#8B4513] font-serif">Honey</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-[#333333] hover:text-[#FFC107] transition-all relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3 md:space-x-5 relative z-[110]">
              <button 
                className="relative p-2.5 text-[#333333] hover:text-[#FFC107] bg-[#FFF8E1] rounded-full transition-all group" 
                aria-label="Cart"
              >
                <ICONS.Cart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#FFC107] text-[#8B4513] text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm scale-110">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Advanced Hamburger Menu Button */}
              <button
                className="lg:hidden flex flex-col items-center justify-center w-11 h-11 bg-[#8B4513] rounded-full group focus:outline-none transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-4">
                  <span className={`absolute block w-5 h-0.5 bg-[#FFC107] transition-all duration-300 ease-out transform ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-[#FFC107] transition-all duration-200 ease-out top-2 ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-[#FFC107] transition-all duration-300 ease-out transform ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Professional Full-Screen Mobile Overlay */}
      <div 
        ref={menuOverlayRef}
        className="fixed inset-0 z-[90] invisible opacity-0 bg-white/98 backdrop-blur-3xl lg:hidden flex flex-col"
      >
        <div className="flex-grow flex flex-col justify-center items-center px-8 text-center pt-24">
          <div className="space-y-4 md:space-y-6 w-full max-w-sm">
            <span className="mobile-nav-item block text-[10px] font-black text-[#FFC107] uppercase tracking-[0.4em] mb-4">Discover Honey</span>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="mobile-nav-item block text-3xl md:text-4xl font-bold text-[#8B4513] font-serif hover:text-[#FFC107] transition-colors py-2 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Overlay Footer */}
        <div className="p-10 border-t border-[#FFC107]/10 bg-[#FFF8E1]/30">
          <div className="mobile-nav-item flex flex-col items-center space-y-6">
            <p className="text-[#8B4513]/60 text-[10px] font-bold uppercase tracking-widest">Connect With Us</p>
            <div className="flex space-x-8">
              <a href="#" className="p-3 bg-white rounded-2xl text-[#8B4513] shadow-sm hover:bg-[#FFC107] transition-colors"><ICONS.Instagram className="w-6 h-6" /></a>
              <a href="#" className="p-3 bg-white rounded-2xl text-[#8B4513] shadow-sm hover:bg-[#FFC107] transition-colors"><ICONS.WhatsApp className="w-6 h-6" /></a>
              <a href="#" className="p-3 bg-white rounded-2xl text-[#8B4513] shadow-sm hover:bg-[#FFC107] transition-colors"><ICONS.LinkedIn className="w-6 h-6" /></a>
            </div>
            <p className="text-[10px] text-gray-400 font-medium">© 2024 HONEY PURE CO.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
