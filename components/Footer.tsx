import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bc1-darker text-bc1-textMuted py-16 px-6 border-t border-bc1-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="text-3xl font-bold text-white mb-6 tracking-tight">bc1</div>
          <p className="text-sm leading-relaxed max-w-sm">
            Sua experiência digital, mais simples e global. Gestão moderna de saldo e pagamentos em uma interface elegante.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Plataforma</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-bc1-lime transition-colors">Sobre</a></li>
            <li><a href="#" className="hover:text-bc1-lime transition-colors">Experiência</a></li>
            <li><a href="#" className="hover:text-bc1-lime transition-colors">Segurança</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-bc1-lime transition-colors">Termos de Uso</a></li>
            <li><a href="/privacy-policy" className="hover:text-bc1-lime transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-bc1-lime transition-colors">Suporte</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-bc1-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} bc1 Global. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};