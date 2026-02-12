import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-brand-50 overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/1920/1080?grayscale"
            alt="Minimalist Desk Setup"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-brand-800 uppercase bg-brand-100 rounded-full">
              New Collection 2024
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
              Elevate Your <br/> <span className="text-brand-600">Everyday</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discover our curated range of minimal merch. Premium tumblers, organic cotton tees, and artisan mugs designed for the modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand-800 rounded-full hover:bg-brand-900 transition-all duration-200 shadow-lg hover:shadow-xl">
                Shop Collection
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-brand-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-200">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Lumina?</h2>
            <p className="text-gray-500">We believe in quality over quantity. Every item is crafted to last and designed to inspire.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Premium Materials", desc: "Sourced from the finest sustainable suppliers.", icon: "✨" },
              { title: "Minimalist Design", desc: "Clean lines and earthy tones that fit anywhere.", icon: "🎨" },
              { title: "Eco-Friendly", desc: "100% recyclable packaging and carbon neutral shipping.", icon: "🌱" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-50 transition-colors duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Category Teaser */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
               <img src="https://picsum.photos/600/800" alt="Model wearing tee" className="rounded-lg shadow-2xl opacity-90" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Essential Tee</h2>
              <p className="text-brand-200 mb-8 text-lg leading-relaxed">
                Made from 100% organic heavy-weight cotton. Pre-shrunk, garment-dyed, and cut for a relaxed, boxy fit that looks good on everyone.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3"><Star size={18} className="text-yellow-400" fill="currentColor"/> <span>Boxy, relaxed fit</span></li>
                 <li className="flex items-center gap-3"><Star size={18} className="text-yellow-400" fill="currentColor"/> <span>Heavyweight 240gsm cotton</span></li>
                 <li className="flex items-center gap-3"><Star size={18} className="text-yellow-400" fill="currentColor"/> <span>Garment dyed for softness</span></li>
              </ul>
              <Link to="/products" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-4 transition-all">
                Shop Apparel <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;