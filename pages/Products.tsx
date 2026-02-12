import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

const PRODUCTS_DATA: Product[] = [
  {
    id: '1',
    name: 'The Daily Tumbler',
    category: 'tumbler',
    price: 25,
    image: 'https://picsum.photos/400/500?random=10',
    description: 'Double-walled vacuum insulation. Keeps hot for 12h, cold for 24h.',
    colors: ['Black', 'Cream', 'Clay']
  },
  {
    id: '2',
    name: 'Essential Cotton Tee',
    category: 'shirt',
    price: 30,
    image: 'https://picsum.photos/400/500?random=11',
    description: '100% organic cotton. Heavyweight with a relaxed, boxy fit.',
    colors: ['White', 'Charcoal', 'Sage']
  },
  {
    id: '3',
    name: 'Studio Mug',
    category: 'mug',
    price: 18,
    image: 'https://picsum.photos/400/500?random=12',
    description: 'Hand-finished ceramic mug. Perfect for your morning brew.',
    colors: ['Speckled White', 'Terracotta']
  },
  {
    id: '4',
    name: 'Travel Commuter',
    category: 'tumbler',
    price: 28,
    image: 'https://picsum.photos/400/500?random=13',
    description: 'Fits in all cup holders. Leak-proof lid included.',
    colors: ['Navy', 'Steel']
  },
  {
    id: '5',
    name: 'Minimalist Hoodie',
    category: 'shirt',
    price: 55,
    image: 'https://picsum.photos/400/500?random=14',
    description: 'Ultra-soft fleece lining. Clean design with no exterior branding.',
    colors: ['Black', 'Heather Grey']
  },
  {
    id: '6',
    name: 'Artisan Espresso Set',
    category: 'mug',
    price: 24,
    image: 'https://picsum.photos/400/500?random=15',
    description: 'Set of two espresso cups. Matte finish exterior.',
    colors: ['Charcoal', 'Clay']
  },
  {
    id: '7',
    name: 'Oversized Longsleeve',
    category: 'shirt',
    price: 35,
    image: 'https://picsum.photos/400/500?random=16',
    description: 'Perfect for layering. Soft touch cotton blend.',
    colors: ['White', 'Olive']
  },
    {
    id: '8',
    name: 'Hydration Bottle',
    category: 'tumbler',
    price: 32,
    image: 'https://picsum.photos/400/500?random=17',
    description: '32oz capacity for all day hydration.',
    colors: ['Sand', 'Forest']
  }
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'tumbler' | 'shirt' | 'mug'>('all');

  const filteredProducts = useMemo(() => {
    if (filter === 'all') return PRODUCTS_DATA;
    return PRODUCTS_DATA.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-900">Shop All</h1>
            <p className="text-gray-500 mt-2">Curated essentials for your lifestyle.</p>
          </div>
          
          {/* Filters */}
          <div className="flex space-x-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            {(['all', 'tumbler', 'shirt', 'mug'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                  filter === cat
                    ? 'bg-brand-900 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
           <div className="text-center py-20">
             <p className="text-gray-500">No products found in this category.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Products;