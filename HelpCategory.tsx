import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Smartphone,
  Wallet,
  Shield,
  CreditCard,
  ArrowLeft,
  Search
} from 'lucide-react';
import { HELP_DATA } from './helpData';
import { Footer } from './components/Footer';

const HelpCategory: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = HELP_DATA.find(c => c.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-bc1-dark text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Categoria não encontrada</h1>
        <Link to="/help-center" className="text-bc1-lime font-bold hover:underline">Voltar para a Central de Ajuda</Link>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-8 h-8 text-bc1-lime" />;
      case 'Wallet': return <Wallet className="w-8 h-8 text-bc1-lime" />;
      case 'Shield': return <Shield className="w-8 h-8 text-bc1-lime" />;
      case 'CreditCard': return <CreditCard className="w-8 h-8 text-bc1-lime" />;
      default: return <Smartphone className="w-8 h-8 text-bc1-lime" />;
    }
  };

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-bc1-lime transition-colors">Início</Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <Link to="/help-center" className="hover:text-bc1-lime transition-colors">Central de Ajuda</Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <span className="text-white font-medium">{category.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Header Info */}
          <div className="flex-1 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="w-16 h-16 bg-bc1-lime/10 rounded-2xl flex items-center justify-center mb-8 border border-bc1-lime/20">
                {getIcon(category.icon)}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                {category.title}
              </h1>
              <p className="text-xl text-bc1-textMuted leading-relaxed">
                {category.description}
              </p>

              <div className="mt-12 p-8 glass-card rounded-[2rem]">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-bc1-lime mb-6">Guia Rápido</h3>
                <p className="text-sm text-bc1-textMuted leading-relaxed">
                  Encontre abaixo os artigos fundamentais sobre <span className="text-white font-medium">{category.title.toLowerCase()}</span>. Esta seção é revisada regularmente pela nossa equipe.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Articles List */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4"
            >
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-bc1-textMuted mb-4 ml-4">Artigos disponíveis ({category.articles.length})</h2>
              {category.articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/help-center/article/${article.id}`}
                  className="block p-8 glass-card rounded-[2rem] hover:border-bc1-lime/30 group transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-bc1-lime transition-colors">{article.title}</h3>
                    <ChevronRight className="w-5 h-5 text-bc1-textMuted group-hover:text-bc1-lime transition-all translate-x-0 group-hover:translate-x-2" />
                  </div>
                </Link>
              ))}
            </motion.div>

            {/* Quick Search Widget */}
            <div className="mt-12 relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-bc1-textMuted" />
              <input
                type="text"
                placeholder="Busca rápida nesta categoria..."
                className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-16 py-6 text-white text-sm focus:border-bc1-lime focus:outline-none transition-colors"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCategory;
