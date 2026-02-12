import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-brand-900 font-bold text-lg">
                L
              </div>
              <span className="font-semibold text-xl tracking-tight text-white">Lumina</span>
            </div>
            <p className="text-sm text-brand-300 leading-relaxed">
              Timeless merchandise designed for everyday living. Sustainable, minimal, and crafted with care.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-brand-300">
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Stay Connected</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-300 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
            <p className="text-xs text-brand-400">© 2024 Lumina Merch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;