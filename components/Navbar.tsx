
import React, { useState } from 'react';
import { ICONS } from '../constants';
import { useCart } from '../CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Recipes', href: '#recipes' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#FFC107]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <ICONS.Honey className="text-[#FFC107] w-8 h-8" />
            <span className="text-2xl font-bold tracking-tighter text-[#8B4513] font-serif">Honey</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#333333] hover:text-[#FFC107] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-[#333333] hover:text-[#FFC107]" aria-label="Cart">
              <ICONS.Cart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-[#FFC107] text-[#8B4513] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <ICONS.Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#FFC107]/20 py-4 px-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#333333] hover:text-[#FFC107]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
