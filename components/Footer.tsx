
import React from 'react';
import { ICONS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#FFC107]/20 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <ICONS.Honey className="text-[#FFC107] w-8 h-8" />
              <span className="text-2xl font-bold tracking-tighter text-[#8B4513] font-serif">Honey</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Premium raw organic honey delivered worldwide. Supporting beekeepers and protecting pollinators since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#FFF8E1] rounded-full text-[#8B4513] hover:bg-[#FFC107] transition-colors"><ICONS.Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-[#FFF8E1] rounded-full text-[#8B4513] hover:bg-[#FFC107] transition-colors"><ICONS.WhatsApp className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-[#FFF8E1] rounded-full text-[#8B4513] hover:bg-[#FFC107] transition-colors"><ICONS.LinkedIn className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#8B4513] mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#about" className="hover:text-[#FFC107]">Our Story</a></li>
              <li><a href="#products" className="hover:text-[#FFC107]">Shop Honey</a></li>
              <li><a href="#benefits" className="hover:text-[#FFC107]">Health Benefits</a></li>
              <li><a href="#recipes" className="hover:text-[#FFC107]">Honey Recipes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#8B4513] mb-6">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#FFC107]">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-[#FFC107]">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#8B4513] mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start space-x-3">
                <span className="text-[#FFC107]">📍</span>
                <span>123 Pollen Path, Meadow Valley, MV 45678</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#FFC107]">✉️</span>
                <span>hello@honey-pure.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#FFC107]">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>&copy; 2024 Honey Pure Co. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#FFC107]">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFC107]">Terms of Service</a>
            <a href="#" className="hover:text-[#FFC107]">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
