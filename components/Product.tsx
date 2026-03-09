import React from 'react';
import { ArrowRight, Smartphone, Shield, Zap } from 'lucide-react';

export const Product: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-bc1-dark relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Acesso global simplificado, <br/>
            <span className="text-bc1-textMuted">seu dinheiro, seu controle.</span>
          </h2>
          <p className="text-lg text-bc1-textMuted">
            Acesso rápido ao que importa. Uma interface desenhada para simplificar sua rotina digital, sem complicações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-[32px] p-8 flex flex-col items-start hover:bg-bc1-cardHover transition-colors duration-300">
            <div className="w-12 h-12 rounded-2xl bg-bc1-lime/10 flex items-center justify-center mb-6">
              <Zap className="text-bc1-lime" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Rapidez</h3>
            <p className="text-bc1-textMuted leading-relaxed">
              Movimentações instantâneas com poucos toques. Sua experiência digital sem atritos.
            </p>
          </div>

          <div className="glass-card rounded-[32px] p-8 flex flex-col items-start hover:bg-bc1-cardHover transition-colors duration-300">
            <div className="w-12 h-12 rounded-2xl bg-bc1-purple/10 flex items-center justify-center mb-6">
              <Smartphone className="text-bc1-purple" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Simplicidade</h3>
            <p className="text-bc1-textMuted leading-relaxed">
              Design focado no essencial. Tudo o que você precisa, exatamente onde deveria estar.
            </p>
          </div>

          <div className="glass-card rounded-[32px] p-8 flex flex-col items-start hover:bg-bc1-cardHover transition-colors duration-300">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Shield className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Controle</h3>
            <p className="text-bc1-textMuted leading-relaxed">
              Gestão clara e transparente do seu saldo e pagamentos, com total segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
