import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Target, ChevronRight } from 'lucide-react';
import { Footer } from './components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Sobre</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
            Posicionamento Institucional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Redefinindo a <br />
            <span className="text-bc1-lime">Soberania Digital</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-12">
            A BC1 é uma plataforma de tecnologia financeira baseada em blockchain, desenvolvida para ser a camada de inteligência e interface entre o usuário e a infraestrutura digital global.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <Globe className="w-8 h-8 text-bc1-lime mb-6" />
              <h3 className="text-lg font-bold mb-3">Infraestrutura</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">Interface de acesso simplificado à infraestrutura digital global.</p>
            </div>
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <Users className="w-8 h-8 text-bc1-lime mb-6" />
              <h3 className="text-lg font-bold mb-3">Autonomia</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">Plataforma não-custodial onde o usuário mantém o controle absoluto.</p>
            </div>
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <Target className="w-8 h-8 text-bc1-lime mb-6" />
              <h3 className="text-lg font-bold mb-3">Software</h3>
              <p className="text-sm text-bc1-textMuted leading-relaxed">Licenciamento de tecnologia para interação direta com a blockchain.</p>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none text-bc1-textMuted leading-relaxed space-y-8">
            <section>
              <h2 className="text-white text-2xl font-bold">O que é a BC1</h2>
              <p>
                Somos um provedor de tecnologia e software que licencia uma interface intuitiva para que pessoas e empresas possam interagir diretamente com redes descentralizadas e parceiros integrados. A BC1 não é um banco, exchange, corretora ou custodiante. Somos a camada tecnológica que traduz a complexidade da blockchain em utilidade real.
              </p>
            </section>

            <section>
              <h2 className="text-white text-2xl font-bold">Relação Jurídica e Papel da Plataforma</h2>
              <p>
                A relação entre a BC1 e seus usuários é estritamente de licenciamento de uso de software. Não atuamos como intermediários financeiros clássicos, não recebemos, não mantemos e não movimentamos ativos de usuários em contas próprias. Nosso papel é fornecer a ferramenta tecnológica para que você exerça sua própria autonomia financeira.
              </p>
            </section>

            <section className="bg-bc1-card p-8 rounded-[2.5rem] border border-bc1-border">
              <h2 className="text-white text-2xl font-bold mb-4">Posicionamento Estratégico</h2>
              <ul className="list-none p-0 space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-bc1-lime" />
                  <span>Uma plataforma de tecnologia financeira em blockchain de alto nível.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-bc1-lime" />
                  <span>Uma interface de acesso simplificado à infraestrutura digital global.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-bc1-lime" />
                  <span>Uma camada de experiência sofisticada sobre protocolos e parceiros.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-bc1-lime" />
                  <span>Uma alternativa moderna à dependência exclusiva de bancos tradicionais.</span>
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
