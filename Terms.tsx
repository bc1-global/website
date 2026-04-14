import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight, AlertCircle, Scale } from 'lucide-react';
import { Footer } from './components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Termos de Uso</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
            Contrato de Serviço
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Termos de <br />
            <span className="text-bc1-lime">Uso e Serviço</span>
          </h1>
          
          <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl mb-12 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-bc1-lime shrink-0 mt-1" />
            <p className="text-sm text-bc1-textMuted leading-relaxed">
              Ao utilizar a plataforma BC1, você concorda com os termos aqui descritos. Recomendamos a leitura atenta deste documento para entender seus direitos e responsabilidades.
            </p>
          </div>

          <div className="space-y-12 text-bc1-textMuted leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-bc1-lime" />
                1. Aceitação dos Termos
              </h2>
              <p>
                Este documento constitui um contrato vinculativo entre você e a Brp2pcripto LTDA. O uso continuado da plataforma implica na aceitação total e irrestrita destes termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-bc1-lime" />
                2. Responsabilidade pela Autocustódia
              </h2>
              <p>
                A BC1 é uma plataforma de autocustódia. Isso significa que você é o único responsável pela segurança de suas chaves privadas e frases de recuperação. A perda desses dados resultará na perda permanente do acesso aos seus ativos, sem possibilidade de recuperação pela BC1.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-bc1-lime" />
                3. Uso Permitido
              </h2>
              <p>
                Você concorda em utilizar a plataforma apenas para fins lícitos e de acordo com todas as leis e regulamentações aplicáveis. Qualquer uso fraudulento ou ilegal resultará na suspensão imediata da conta e comunicação às autoridades competentes.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-bc1-border text-xs text-bc1-textMuted">
            Última atualização: 11 de Abril de 2026
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
