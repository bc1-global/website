import React from 'react';
import { ShieldCheck, Globe, Zap, Lock, MousePointerClick } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    { icon: <Zap size={20} />, text: "Blockchain nativo" },
    { icon: <ShieldCheck size={20} />, text: "Zero custódia obrigatória" },
    { icon: <Globe size={20} />, text: "Operação global" },
    { icon: <Lock size={20} />, text: "Conversão instantânea" },
    { icon: <MousePointerClick size={20} />, text: "Controle total" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/2">
             <h2 className="text-4xl font-bold mb-6 text-bc1-black leading-tight">
               O bc1 é um banco digital global operado exclusivamente sobre blockchain.
             </h2>
             <p className="text-xl text-gray-600 leading-relaxed">
               Sem custódia obrigatória, sem intermediários, sem fronteiras. 
               A experiência é simples, rápida e totalmente adaptada ao mundo moderno.
             </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 hover:border-bc1-orange/50 transition-colors group">
                  <div className="text-bc1-black group-hover:text-bc1-orange transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-medium text-lg text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};