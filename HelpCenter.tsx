import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  BookOpen,
  Shield,
  Smartphone,
  CreditCard,
  Wallet,
  ChevronRight,
  LifeBuoy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from './components/Footer';
import { HELP_DATA } from './helpData';

const HelpCenter: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-bc1-lime" />;
      case 'Wallet': return <Wallet className="w-6 h-6 text-bc1-lime" />;
      case 'Shield': return <Shield className="w-6 h-6 text-bc1-lime" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-bc1-lime" />;
      default: return <Smartphone className="w-6 h-6 text-bc1-lime" />;
    }
  };

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        {/* Header Section */}
        <section className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
              Autoatendimento
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Central de <span className="text-bc1-lime">Ajuda</span>
            </h1>
            <p className="text-xl text-bc1-textMuted leading-relaxed max-w-2xl mx-auto mb-12">
              Encontre respostas para as principais dúvidas e aprenda a aproveitar ao máximo a tecnologia da Bc1 Global.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-bc1-textMuted" />
              <input
                type="text"
                placeholder="Busque por artigos, tutoriais ou palavras-chave..."
                className="w-full bg-bc1-card border border-bc1-border rounded-2xl px-14 py-5 text-white placeholder:text-bc1-textMuted focus:border-bc1-lime focus:outline-none transition-colors"
              />
            </div>
          </motion.div>
        </section>

        {/* Categories Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-32">
          {HELP_DATA.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-bc1-card border border-bc1-border p-8 rounded-[2rem] hover:border-bc1-lime/30 transition-all group"
            >
              <div className="w-12 h-12 bg-bc1-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(cat.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
              <p className="text-bc1-textMuted mb-8 text-sm leading-relaxed">{cat.description}</p>

              <ul className="space-y-4">
                {cat.articles.slice(0, 3).map((article) => (
                  <li key={article.id}>
                    <Link to={`/help-center/article/${article.id}`} className="flex items-center justify-between group/link hover:text-white transition-colors">
                      <span className="text-bc1-textMuted group-hover/link:text-bc1-lime transition-colors">{article.title}</span>
                      <ChevronRight className="w-4 h-4 text-bc1-textMuted group-hover/link:text-bc1-lime transition-colors" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to={`/help-center/category/${cat.id}`} className="inline-flex items-center gap-2 text-bc1-lime font-bold text-sm mt-4 hover:underline">
                    Ver todos os artigos
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Popular Articles */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-6 h-6 text-bc1-lime" />
            <h2 className="text-3xl font-bold">Artigos Sugeridos</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {HELP_DATA.flatMap(c => c.articles).slice(0, 4).map((article, i) => (
              <Link
                key={article.id}
                to={`/help-center/article/${article.id}`}
                className="p-6 bg-bc1-dark border border-bc1-border rounded-2xl hover:bg-bc1-card transition-colors flex items-center justify-between group"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium group-hover:text-bc1-lime transition-colors">{article.title}</span>
                  <span className="text-xs text-bc1-textMuted mt-1">bc1 Global Help</span>
                </div>
                <ChevronRight className="w-4 h-4 text-bc1-textMuted opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* Still need help? */}
        <section className="bg-bc1-lime/5 border border-bc1-lime/20 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-bc1-lime rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-bc1-lime/20">
              <LifeBuoy className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ainda precisa de ajuda?</h2>
            <p className="text-bc1-textMuted mb-8 max-w-xl mx-auto">
              Se você não encontrou o que procurava em nossa central de ajuda, nossa equipe está pronta para te atender.
            </p>
            <a
              href="/support"
              className="inline-flex items-center gap-3 bg-bc1-lime text-black font-bold px-10 py-4 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-bc1-lime/10"
            >
              Falar com o Suporte
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-bc1-lime/10 blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-bc1-lime/10 blur-[100px] -ml-32 -mb-32"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
