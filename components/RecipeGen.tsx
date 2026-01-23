
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const RecipeGen: React.FC = () => {
  const [ingredient, setIngredient] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<any>(null);

  const generateRecipe = async () => {
    if (!ingredient.trim()) return;
    setLoading(true);
    setRecipe(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a healthy recipe using honey and ${ingredient}.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recipeName: { type: Type.STRING },
              ingredients: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              instructions: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["recipeName", "ingredients", "instructions"]
          }
        }
      });

      const jsonStr = response.text?.trim();
      if (jsonStr) {
        const data = JSON.parse(jsonStr);
        setRecipe(data);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      console.error("Recipe generation error:", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-[#FFF8E1] border-y border-[#FFC107]/20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4 md:mb-6">AI Honey Recipe Kitchen</h2>
        <p className="text-base md:text-lg text-[#333333]/70 mb-8 md:mb-12 max-w-2xl mx-auto">
          Have an ingredient in your fridge? Tell us, and our AI will create a healthy honey-based recipe just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Ingredient (e.g. Oat, Salmon)"
            className="flex-grow px-5 py-4 rounded-xl border-2 border-[#FFC107]/20 focus:border-[#FFC107] outline-none text-base bg-white transition-all shadow-sm"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && generateRecipe()}
          />
          <button
            onClick={generateRecipe}
            disabled={loading || !ingredient.trim()}
            className="px-8 py-4 bg-[#FFC107] text-[#8B4513] font-bold rounded-xl hover:bg-[#FFB300] active:scale-95 transition-all disabled:opacity-50 shadow-md whitespace-nowrap"
          >
            {loading ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-5 w-5 text-[#8B4513]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Cooking...</span>
              </span>
            ) : 'Generate Recipe'}
          </button>
        </div>

        {recipe && (
          <div className="bg-white p-6 md:p-10 rounded-[2rem] shadow-2xl text-left animate-in fade-in slide-in-from-bottom-6 duration-700 max-w-3xl mx-auto border border-[#FFC107]/10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#8B4513] mb-6 border-b border-gray-100 pb-5 leading-tight">{recipe.recipeName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-[#FFC107] uppercase text-[10px] tracking-widest mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] mr-2"></span>
                  Ingredients
                </h4>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ing: string, i: number) => (
                    <li key={i} className="flex items-start space-x-3 text-gray-700 text-sm md:text-base">
                      <span className="text-[#FFC107] mt-1.5 flex-shrink-0">•</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#FFC107] uppercase text-[10px] tracking-widest mb-4 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC107] mr-2"></span>
                  Instructions
                </h4>
                <ol className="space-y-5">
                  {recipe.instructions.map((step: string, i: number) => (
                    <li key={i} className="flex space-x-4">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFC107]/20 text-[#8B4513] text-xs font-bold flex items-center justify-center border border-[#FFC107]/30">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeGen;
