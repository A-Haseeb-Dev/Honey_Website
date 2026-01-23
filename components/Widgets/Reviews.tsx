
import React from 'react';
import { MOCK_REVIEWS } from '../../constants';

const Reviews: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#8B4513] mb-4">What Our Community Says</h2>
          <div className="flex justify-center space-x-1 mb-4">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-6 h-6 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <p className="text-gray-500">Trusted by 10,000+ happy customers worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_REVIEWS.map((review) => (
            <div key={review.id} className="p-8 bg-[#FFF8E1]/50 rounded-3xl border border-[#FFC107]/10 relative">
              <svg className="absolute top-6 right-6 w-12 h-12 text-[#FFC107]/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C15.3562 14 14.017 12.6608 14.017 11V7C14.017 5.89543 14.9124 5 16.017 5H20.017C21.1216 5 22.017 5.89543 22.017 7V11C22.017 12.6608 20.6778 14 19.017 14V16C20.6778 16 22.017 17.3392 22.017 19V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V14H6.017C4.35615 14 3.017 12.6608 3.017 11V7C3.017 5.89543 3.91243 5 5.017 5H9.017C10.1216 5 11.017 5.89543 11.017 7V11C11.017 12.6608 9.67785 14 8.017 14V16C9.67785 16 11.017 17.3392 11.017 19V21H3.017Z"/></svg>
              <p className="text-gray-700 leading-relaxed mb-8 relative z-10 italic">"{review.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-[#FFC107]" />
                <div>
                  <h4 className="font-bold text-[#8B4513]">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
