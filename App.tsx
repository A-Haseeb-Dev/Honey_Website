
import React, { useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Widgets/Hero';
import About from './components/Widgets/About';
import Products from './components/Widgets/Products';
import Benefits from './components/Widgets/Benefits';
import StoreLocator from './components/Widgets/StoreLocator';
import Recipes from './components/Widgets/Recipes';
import Reviews from './components/Widgets/Reviews';
import CTA from './components/Widgets/CTA';
import Footer from './components/Layout/Footer';
import FloatingSocial from './components/Layout/FloatingSocial';
import RecipeGen from './components/Widgets/RecipeGen';
import { CartProvider } from './CartContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins immediately
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="products"><Products /></section>
          <section id="benefits"><Benefits /></section>
          <section id="locator"><StoreLocator /></section>
          <section id="recipes"><Recipes /></section>
          <section id="recipe-gen"><RecipeGen /></section>
          <section id="reviews"><Reviews /></section>
          <section id="contact"><CTA /></section>
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </CartProvider>
  );
};

export default App;
