import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#2D1F1A] text-white/60 py-16 overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10vw] font-bold text-white/5 pointer-events-none select-none tracking-tighter whitespace-nowrap">
        bc1.global
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-4xl font-bold text-white tracking-tight mb-8">
          bc1
        </div>
        
        <div className="flex gap-8 mb-12 text-sm font-medium tracking-wide">
          <a href="#" className="hover:text-bc1-orange transition-colors">Termos</a>
          <a href="#" className="hover:text-bc1-orange transition-colors">Privacidade</a>
          <a href="#" className="hover:text-bc1-orange transition-colors">Transparência</a>
          <a href="#" className="hover:text-bc1-orange transition-colors">Suporte</a>
        </div>

        <div className="text-center text-xs opacity-40 max-w-md leading-relaxed">
          &copy; {new Date().getFullYear()} bc1 Global. Todos os direitos reservados. 
          O bc1 é uma plataforma de tecnologia financeira operada em blockchain. 
          Ativos digitais estão sujeitos a volatilidade de mercado.
        </div>
      </div>
    </footer>
  );
};