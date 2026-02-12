import React from 'react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="aspect-[4/5] overflow-hidden bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-900 hover:text-white text-gray-900">
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
           <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
           <span className="text-sm font-semibold text-gray-900">${product.price}</span>
        </div>
        <p className="text-sm text-gray-500 mb-3 flex-grow">{product.description}</p>
        <div className="flex items-center gap-2">
           {product.colors.map((color, idx) => (
             <div
                key={idx}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color.toLowerCase().includes('black') ? '#000' : color.toLowerCase().includes('white') ? '#fff' : color.toLowerCase().includes('cream') ? '#f5f5dc' : color.toLowerCase().includes('clay') ? '#a18072' : color.toLowerCase().includes('navy') ? '#000080' : '#888' }}
                title={color}
             />
           ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;