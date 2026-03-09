import React from 'react';
import { Hero } from './components/Hero';
import { Quotes } from './components/Quotes';
import { Product } from './components/Product';
import { Merchants } from './components/Merchants';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen font-sans selection:bg-bc1-lime selection:text-black bg-bc1-dark">
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-bc1-dark/50 border-b border-bc1-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-white">bc1</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-bc1-textMuted">
            <a href="#" className="hover:text-white transition-colors">Pessoal</a>
            <a href="#" className="hover:text-white transition-colors">Cotações</a>
            <a href="#" className="hover:text-white transition-colors">Empresarial</a>
          </div>
          <button className="text-sm font-semibold bg-bc1-card border border-bc1-border text-white px-5 py-2 rounded-full hover:bg-bc1-cardHover transition-colors">
            Suporte
          </button>
        </div>
      </nav>

      <Hero />
      <Quotes />
      <Product />
      <Merchants />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;