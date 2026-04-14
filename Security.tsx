import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, ChevronRight, AlertCircle } from 'lucide-react';
import { Footer } from './components/Footer';

const Security: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Segurança</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
            Soberania Digital
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Modelo <br />
            <span className="text-bc1-lime">Não-Custodial</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-12">
            A BC1 opera sob um modelo estritamente de autocustódia. Isso significa que você mantém o controle exclusivo sobre seus ativos e suas chaves privadas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-bc1-card border border-bc1-border p-10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-bc1-lime/5 rounded-full blur-3xl group-hover:bg-bc1-lime/10 transition-colors" />
              <Lock className="w-10 h-10 text-bc1-lime mb-8" />
              <h3 className="text-xl font-bold mb-4">Você no Controle</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">
                Nós não detemos, não gerenciamos e não temos acesso aos seus ativos. A plataforma fornece as ferramentas, mas a execução final é sua.
              </p>
            </div>
            <div className="bg-bc1-card border border-bc1-border p-10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-bc1-lime/5 rounded-full blur-3xl group-hover:bg-bc1-lime/10 transition-colors" />
              <Shield className="w-10 h-10 text-bc1-lime mb-8" />
              <h3 className="text-xl font-bold mb-4">Sem Intermediários</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">
                Seus ativos nunca passam por contas da BC1. As transações são executadas diretamente na blockchain através da nossa interface.
              </p>
            </div>
          </div>

          <div className="bg-bc1-lime/5 border border-bc1-lime/20 p-8 rounded-3xl flex items-start gap-4 mb-16">
            <AlertCircle className="w-6 h-6 text-bc1-lime shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-bc1-lime mb-2">Dica de Segurança</h4>
              <p className="text-sm text-bc1-textMuted leading-relaxed">
                Ative sempre a Autenticação de Dois Fatores (2FA) e nunca compartilhe sua frase de recuperação com ninguém, nem mesmo com o suporte da BC1.
              </p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-bc1-textMuted leading-relaxed">
            <h3 className="text-white">Monitoramento 24/7</h3>
            <p>
              Nossos sistemas são monitorados continuamente para detectar e prevenir qualquer atividade suspeita. Realizamos auditorias de segurança periódicas com empresas líderes do setor para garantir que nossa infraestrutura permaneça impenetrável.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
