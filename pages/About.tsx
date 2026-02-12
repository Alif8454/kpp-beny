import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full bg-white pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="prose prose-lg mx-auto text-gray-500">
          <p className="mb-8">
            Lumina was born from a simple idea: merchandise shouldn't just be a logo slapped on a cheap product. It should be something you actually want to use, wear, and keep.
          </p>
          <p className="mb-12">
            Founded in 2024, we set out to bridge the gap between "swag" and genuine lifestyle goods. We focus on earthy tones, minimalist aesthetics, and functional design. Whether it's the tumbler you take to the office every day or the mug that holds your Sunday morning coffee, we want Lumina to be part of your daily ritual.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-16">
            <img src="https://picsum.photos/400/500?random=1" alt="Studio" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
            <img src="https://picsum.photos/400/500?random=2" alt="Design Process" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainability First</h3>
          <p className="mb-8">
            We are committed to reducing our footprint. Our shirts are made from 100% organic cotton, growing without harmful pesticides. Our tumblers are designed to replace single-use plastics, and our shipping materials are fully biodegradable.
          </p>
          
          <div className="bg-brand-50 p-8 rounded-2xl mt-12 text-center">
            <h3 className="text-xl font-bold text-brand-900 mb-2">Join the Movement</h3>
            <p className="text-brand-700 mb-6">Experience the difference of mindful merchandise.</p>
            <div className="text-4xl font-bold text-brand-800">10k+</div>
            <div className="text-sm text-brand-600 uppercase tracking-wide">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;