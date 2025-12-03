import React from 'react';

export const Steps: React.FC = () => {
  const steps = [
    { num: '01', title: 'Crie sua conta', desc: 'Processo rápido, sem burocracia.' },
    { num: '02', title: 'Envie PIX', desc: 'Use seus reais para carregar.' },
    { num: '03', title: 'Receba USDT', desc: 'Conversão automática e instantânea.' },
    { num: '04', title: 'Use onde quiser', desc: 'Globalmente aceito.' },
    { num: '05', title: 'Liberdade total', desc: 'Saque, transfira ou mova livremente.' },
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-bc1-black">Como funciona</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Connector Line (except last) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-gray-200 -z-10 group-hover:bg-bc1-orange/50 transition-colors delay-100"></div>
              )}
              
              <div className="w-12 h-12 bg-white border border-bc1-black text-bc1-black font-bold flex items-center justify-center mb-6 group-hover:bg-bc1-black group-hover:text-bc1-orange transition-all duration-300 z-10">
                {step.num}
              </div>
              <h3 className="text-lg font-bold mb-2 text-bc1-black">{step.title}</h3>
              <p className="text-sm text-gray-500 max-w-[150px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};