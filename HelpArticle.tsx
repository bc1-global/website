import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowLeft,
  Share2,
  ThumbsUp,
  ThumbsDown,
  Clock
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { HELP_DATA } from './helpData';
import { Footer } from './components/Footer';

const HelpArticle: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const category = HELP_DATA.find(c => c.articles.some(a => a.id === articleId));
  const article = category?.articles.find(a => a.id === articleId);

  if (!article || !category) {
    return (
      <div className="min-h-screen bg-bc1-dark text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Artigo não encontrado</h1>
        <Link to="/help-center" className="text-bc1-lime font-bold hover:underline">Voltar para a Central de Ajuda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-bc1-lime transition-colors">Início</Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <Link to="/help-center" className="hover:text-bc1-lime transition-colors">Central de Ajuda</Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <Link to={`/help-center/category/${category.id}`} className="hover:text-bc1-lime transition-colors">{category.title}</Link>
          <ChevronRight className="w-3 h-3 flex-shrink-0" />
          <span className="text-white font-medium truncate max-w-[200px]">{article.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Main Article Content */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-[2.5rem] p-8 md:p-16"
            >
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-bc1-textMuted uppercase tracking-widest mb-10">
                <span className="px-2 py-1 bg-bc1-lime/10 text-bc1-lime rounded border border-bc1-lime/20">Artigo Oficial</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 3 min de leitura</span>
              </div>

              <div className="markdown-body">
                <ReactMarkdown>{article.content}</ReactMarkdown>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div>
                  <p className="text-sm font-bold text-white mb-6">Este artigo foi útil?</p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-bc1-lime/10 hover:border-bc1-lime/30 transition-all group">
                      <ThumbsUp className="w-4 h-4 group-hover:text-bc1-lime" />
                      <span className="text-sm font-medium">Sim</span>
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                      <ThumbsDown className="w-4 h-4 group-hover:text-red-400" />
                      <span className="text-sm font-medium">Não</span>
                    </button>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-bc1-textMuted hover:text-white transition-colors group">
                  <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Compartilhar artigo</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div className="glass-card p-8 rounded-[2rem]">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-bc1-lime mb-8">Nesta Categoria</h3>
                <div className="flex flex-col gap-5">
                  {category.articles.map((a) => (
                    <Link
                      key={a.id}
                      to={`/help-center/article/${a.id}`}
                      className={`block text-sm leading-snug transition-all ${a.id === article.id ? 'text-bc1-lime font-bold translate-x-1' : 'text-bc1-textMuted hover:text-white hover:translate-x-1'}`}
                    >
                      {a.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-bc1-lime/5 border border-bc1-lime/20 rounded-[2rem] relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="font-bold text-bc1-lime mb-3">Suporte dedicado</h4>
                  <p className="text-xs text-bc1-textMuted leading-relaxed mb-6">
                    Se o artigo não resolveu sua dúvida, fale diretamente com nossa equipe técnica.
                  </p>
                  <Link to="/support" className="inline-block text-sm font-bold text-white hover:text-bc1-lime transition-colors">
                    Contatar suporte →
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-bc1-lime/10 blur-2xl -mr-10 -mt-10 group-hover:bg-bc1-lime/20 transition-colors"></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpArticle;
