import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Smartphone, Layout, ChevronRight } from 'lucide-react';
import { Footer } from './components/Footer';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Experiência</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
            Interface & UX
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Simplicidade em <br />
            <span className="text-bc1-lime">Cada Detalhe</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-12">
            Nossa plataforma traduz operações complexas de blockchain e smart contracts em uma experiência de uso simples, elegante e extremamente rápida.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-bc1-lime flex items-center justify-center shadow-lg shadow-bc1-lime/20">
                <Smartphone className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold">Como a BC1 funciona</h3>
              <p className="text-bc1-textMuted leading-relaxed">
                Atuamos como um tradutor tecnológico. Através do nosso licenciamento de software, você acessa uma interface que executa comandos diretamente na rede, permitindo o uso de ativos digitais com a mesma facilidade de um aplicativo moderno.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-bc1-border flex items-center justify-center">
                <Zap className="w-7 h-7 text-bc1-lime" />
              </div>
              <h3 className="text-2xl font-bold">Menor Fricção</h3>
              <p className="text-bc1-textMuted leading-relaxed">
                Reduzimos drasticamente a barreira de entrada para o uso de tecnologias descentralizadas, integrando parceiros globais em uma única camada de experiência.
              </p>
            </div>
          </div>

          <div className="bg-bc1-card border border-bc1-border p-12 rounded-[3rem] relative overflow-hidden mb-24">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Layout className="w-48 h-48 text-bc1-lime" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Diferenciais da BC1</h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  { title: 'Autocustódia', desc: 'Controle total e soberano dos seus ativos.' },
                  { title: 'Alcance Global', desc: 'Conectividade com infraestrutura digital em qualquer lugar.' },
                  { title: 'Foco em Dólar Digital', desc: 'Otimizado para estabilidade e alcance global.' },
                  { title: 'Design Minimalista', desc: 'Interface elegante focada na performance.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="text-white font-bold flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-bc1-lime" />
                      {item.title}
                    </h4>
                    <p className="text-sm text-bc1-textMuted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
