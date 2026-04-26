import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { Quotes } from './components/Quotes';
import { Product } from './components/Product';
import { Merchants } from './components/Merchants';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import Privacy from './Privacy';
import Support from './Support';
import About from './About';
import Experience from './Experience';
import Security from './Security';
import Terms from './Terms';
import QuotesPage from './QuotesPage';
import Business from './Business';
import Transparency from './Transparency';
import SupportedCountries from './SupportedCountries';
import ProhibitedActivities from './ProhibitedActivities';
import HelpCenter from './HelpCenter';
import HelpCategory from './HelpCategory';
import HelpArticle from './HelpArticle';
import { Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Logo } from './components/Logo';

const Home: React.FC = () => (
  <>
    <Hero />
    <Quotes />
    <Product />
    <Merchants />
    <CTA />
    <Footer />
  </>
);

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen font-sans selection:bg-bc1-lime selection:text-black bg-bc1-dark">
      <ScrollToTop />
      <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-bc1-dark/50 border-b border-bc1-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <Logo size="md" className="group-hover:scale-105 transition-transform duration-300" />
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-bc1-textMuted">
            <Link to="/" className="hover:text-white transition-colors">Pessoal</Link>
            <Link to="/quotes" className="hover:text-white transition-colors">Cotações</Link>
            <Link to="/business" className="hover:text-white transition-colors">Empresarial</Link>
            <Link to="/transparency" className="hover:text-white transition-colors">Transparência</Link>
          </div>
          <Link to="/support" className="text-sm font-semibold bg-bc1-card border border-bc1-border text-white px-5 py-2 rounded-full hover:bg-bc1-cardHover transition-colors">
            Suporte
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/security" element={<Security />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/business" element={<Business />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/supported-countries" element={<SupportedCountries />} />
        <Route path="/prohibited-activities" element={<ProhibitedActivities />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/help-center/category/:categoryId" element={<HelpCategory />} />
        <Route path="/help-center/article/:articleId" element={<HelpArticle />} />
      </Routes>
    </main>
  );
};

export default App;
