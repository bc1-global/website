import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, ArrowDownRight, ChevronRight, Search } from 'lucide-react';
import { Footer } from './components/Footer';

const QuotesPage: React.FC = () => {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price: 'R$ 342.150,00', change: '+2.4%', up: true },
    { name: 'Ethereum', symbol: 'ETH', price: 'R$ 18.420,00', change: '+1.8%', up: true },
    { name: 'Solana', symbol: 'SOL', price: 'R$ 842,00', change: '-0.5%', up: false },
    { name: 'USDT', symbol: 'USDT', price: 'R$ 5,12', change: '+0.1%', up: true },
    { name: 'Cardano', symbol: 'ADA', price: 'R$ 2,45', change: '-1.2%', up: false },
  ];

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Cotações</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
                Mercado em Tempo Real
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Acompanhe o <br />
                <span className="text-bc1-lime">Mercado</span>
              </h1>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-bc1-textMuted" />
              <input 
                type="text" 
                placeholder="Buscar ativo..."
                className="w-full bg-bc1-card border border-bc1-border rounded-2xl pl-12 pr-6 py-4 text-sm text-white focus:border-bc1-lime focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="bg-bc1-card border border-bc1-border rounded-[2.5rem] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-bc1-border bg-white/5">
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-bc1-textMuted">Ativo</th>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-bc1-textMuted">Preço</th>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-bc1-textMuted text-right">Variação (24h)</th>
                    <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-bc1-textMuted text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bc1-border">
                  {coins.map((coin, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-white/5 border border-bc1-border flex items-center justify-center font-bold text-xs">
                            {coin.symbol}
                          </div>
                          <div>
                            <p className="font-bold text-white">{coin.name}</p>
                            <p className="text-xs text-bc1-textMuted uppercase">{coin.symbol}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-medium text-white">{coin.price}</td>
                      <td className="px-8 py-6 text-right">
                        <span className={`inline-flex items-center gap-1 font-bold ${coin.up ? 'text-bc1-lime' : 'text-red-400'}`}>
                          {coin.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          {coin.change}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="px-4 py-2 rounded-full bg-bc1-lime/10 text-bc1-lime text-xs font-bold border border-bc1-lime/20 hover:bg-bc1-lime hover:text-black transition-all">
                          Negociar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 p-8 bg-bc1-card border border-bc1-border rounded-3xl flex items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <TrendingUp className="w-6 h-6 text-bc1-lime" />
              <p className="text-sm text-bc1-textMuted">As cotações são atualizadas a cada 60 segundos.</p>
            </div>
            <button className="text-sm font-bold text-bc1-lime hover:underline">Ver todos os ativos</button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default QuotesPage;
