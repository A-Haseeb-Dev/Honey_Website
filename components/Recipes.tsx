
import React from 'react';

const Recipes: React.FC = () => {
  const recipes = [
    {
      title: 'Honey & Lemon Morning Elixir',
      time: '5 mins',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Roasted Honey Glazed Carrots',
      time: '30 mins',
      image: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Manuka Honey Face Mask',
      time: '2 mins',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#8B4513] mb-4">Inspiring Usage</h2>
        <p className="text-lg text-gray-600 mb-16">More than just a spread. Explore the versatile world of honey.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((r, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <img src={r.image} alt={r.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-left">
                <span className="text-xs font-bold text-[#FFC107] uppercase mb-2">{r.time} Preparation</span>
                <h3 className="text-xl font-bold text-white group-hover:text-[#FFC107] transition-colors">{r.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
