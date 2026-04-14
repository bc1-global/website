import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Footer } from './components/Footer';

const Business: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Empresarial</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
            Soluções Corporativas
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Sua Empresa na <br />
            <span className="text-bc1-lime">Nova Economia</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-12">
            A BC1 oferece uma infraestrutura completa para que sua empresa possa aceitar, gerir e transacionar ativos digitais com total conformidade e segurança.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <CreditCard className="w-8 h-8 text-bc1-lime mb-6" />
              <h3 className="text-lg font-bold mb-3">Pagamentos</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">Aceite criptoativos e receba em sua moeda local instantaneamente.</p>
            </div>
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <BarChart3 className="w-8 h-8 text-bc1-lime mb-6" />
              <h3 className="text-lg font-bold mb-3">Gestão</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">Dashboard completo para controle de fluxo de caixa e relatórios.</p>
            </div>
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <Briefcase className="w-8 h-8 text-bc1-lime mb-6" />
              <h3 className="text-lg font-bold mb-3">Compliance</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">Ferramentas de KYC e KYB integradas para total conformidade legal.</p>
            </div>
          </div>

          <div className="bg-bc1-card border border-bc1-border p-12 rounded-[3rem] mb-24">
            <h3 className="text-2xl font-bold mb-8">Por que escolher a BC1 Business?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Taxas competitivas e transparentes',
                'Suporte prioritário 24/7',
                'Integração via API robusta',
                'Segurança de nível bancário',
                'Liquidação em D+0',
                'Multi-contas para equipes'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bc1-lime shrink-0" />
                  <span className="text-bc1-textMuted">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button className="px-12 py-5 bg-bc1-lime text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-bc1-lime/20">
              Falar com um Especialista
            </button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Business;
