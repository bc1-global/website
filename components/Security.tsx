import React from 'react';
import { Check } from 'lucide-react';

export const Security: React.FC = () => {
  const points = [
    "Operação 100% blockchain",
    "Zero custódia obrigatória: você no controle",
    "Sem intermediários desnecessários",
    "Auditoria pública",
    "Privacidade sem promessas exageradas",
    "Processamento global"
  ];

  return (
    <section className="py-24 bg-bc1-black text-white relative overflow-hidden">
      {/* Background gradients for aesthetics */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-bc1-brown/20 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-5xl font-bold mb-6 tracking-tight text-white">
            Segurança <br/>
            <span className="text-bc1-orange">acima de tudo.</span>
          </h2>
          <p className="text-gray-400 max-w-sm text-lg">
            A arquitetura descentralizada garante que seus ativos permaneçam seus. Imutável, transparente e seguro.
          </p>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 gap-6 pl-0 md:pl-12">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-6 h-6 flex items-center justify-center border border-bc1-orange text-bc1-orange group-hover:bg-bc1-orange group-hover:text-black transition-all duration-300">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-lg font-light tracking-wide text-gray-200 group-hover:text-white transition-colors">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};