import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-bc1-cream via-[#FFF3E0] to-[#FFE0B2]/30">
      
      {/* Abstract Geometric Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-bc1-caramelLight/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-bc1-orange/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-20">
        
        {/* Text Content */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          <div className="inline-block px-3 py-1 bg-bc1-orange/10 border border-bc1-orange/20 w-fit">
            <span className="text-xs font-bold tracking-widest text-bc1-caramelDark uppercase">
              BETA PÚBLICO
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-bc1-black leading-[1.1]">
            Seu novo banco <br/>
            <span className="text-bc1-orange">global.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
            Construído 100% sobre blockchain, com custo menor, segurança máxima e liberdade total para movimentar seu dinheiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button variant="primary">
              CRIAR CONTA
            </Button>
            <Button variant="outline" className="flex items-center justify-center gap-2">
              BAIXAR O APP
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Abstract Visual / Minimalist Mockup */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div className="relative w-72 h-[500px] border border-bc1-black bg-white shadow-2xl flex flex-col p-6 transition-transform hover:-translate-y-2 duration-500">
             {/* Mockup Screen Header */}
             <div className="flex justify-between items-center mb-8">
                <div className="w-8 h-8 bg-bc1-black"></div>
                <div className="w-4 h-4 border border-bc1-black"></div>
             </div>
             
             {/* Mockup Balance */}
             <div className="space-y-2 mb-12">
                <div className="text-sm text-gray-500 uppercase tracking-widest">Saldo Total</div>
                <div className="text-4xl font-light text-bc1-black">
                  US$ 12,450<span className="text-bc1-orange">.00</span>
                </div>
             </div>

             {/* Mockup Graph (Abstract) */}
             <div className="flex-grow flex items-end gap-1 mb-8">
                {[40, 60, 45, 70, 85, 65, 90].map((h, i) => (
                  <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-bc1-orange/20 hover:bg-bc1-orange transition-colors"></div>
                ))}
             </div>

             {/* Mockup Action */}
             <div className="w-full py-4 bg-bc1-black text-white text-center text-xs font-bold uppercase tracking-wider">
               Transferir
             </div>
          </div>
          
          {/* Decorative Square behind */}
          <div className="absolute top-20 right-10 -z-10 w-72 h-[500px] border border-bc1-orange/30 bg-transparent"></div>
        </div>
      </div>
    </section>
  );
};