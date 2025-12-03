import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Converter } from './components/Converter';
import { Comparison } from './components/Comparison';
import { Security } from './components/Security';
import { Steps } from './components/Steps';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen font-sans selection:bg-bc1-orange selection:text-white">
      <nav className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-bc1-black">bc1</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-bc1-black/70">
          <a href="#" className="hover:text-bc1-orange transition-colors">Sobre</a>
          <a href="#" className="hover:text-bc1-orange transition-colors">Segurança</a>
          <a href="#" className="hover:text-bc1-orange transition-colors">Taxas</a>
        </div>
        <button className="text-sm font-bold border-b border-bc1-black pb-1 hover:text-bc1-orange hover:border-bc1-orange transition-colors">
          ENTRAR
        </button>
      </nav>

      <Hero />
      <About />
      <Converter />
      <Comparison />
      <Security />
      <Steps />
      <Footer />
    </main>
  );
};

export default App;