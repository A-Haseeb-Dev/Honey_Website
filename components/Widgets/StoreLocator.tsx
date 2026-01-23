
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Button from '../Shared/Button';

const StoreLocator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string>('');
  const [links, setLinks] = useState<any[]>([]);

  const findStores = async () => {
    setLoading(true);
    setResults('');
    setLinks([]);

    try {
      let lat = 37.7749; // Default fallback
      let lng = -122.4194;

      if (navigator.geolocation) {
        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Where can I buy authentic raw organic honey near me? List specific reputable local honey shops or farmers markets.",
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: {
                latitude: lat,
                longitude: lng
              }
            }
          }
        },
      });

      setResults(response.text || "I found some great places nearby where you can get the best raw honey.");
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      setLinks(chunks.filter((c: any) => c.maps).map((c: any) => c.maps));
    } catch (error) {
      console.error("Locator error:", error);
      setResults("I couldn't access your location or the search failed. Here are some general tips: look for local apiaries or health food stores in your area.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-white border-b border-[#FFC107]/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block px-3 py-1 bg-[#FFC107]/10 text-[#8B4513] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
          Local Sourcing
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6 font-serif">Find Pure Honey Nearby</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Want to support your local beekeepers? Use our AI locator to find authentic, raw honey sources in your immediate neighborhood.
        </p>

        <Button 
          onClick={findStores} 
          disabled={loading}
          variant="primary"
          className="mb-12"
        >
          {loading ? 'Locating Gold...' : 'Locate Stores Near Me'}
        </Button>

        {results && (
          <div className="bg-[#FFF8E1] rounded-[2.5rem] p-8 md:p-12 text-left shadow-xl border border-[#FFC107]/20 animate-in fade-in slide-in-from-bottom-4">
            <div className="prose prose-honey max-w-none mb-8">
              <p className="text-[#8B4513] leading-relaxed text-lg whitespace-pre-wrap">{results}</p>
            </div>
            
            {links.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-black text-[#8B4513]/40 text-xs uppercase tracking-[0.2em]">Verified Map Locations</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.uri} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white rounded-2xl border border-[#FFC107]/20 hover:border-[#FFC107] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FFC107]/10 flex items-center justify-center mr-4 group-hover:bg-[#FFC107] transition-colors">
                        <span className="text-xl">📍</span>
                      </div>
                      <span className="font-bold text-[#8B4513] truncate">{link.title || 'View on Maps'}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreLocator;
