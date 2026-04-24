import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bc1-darker text-bc1-textMuted py-16 px-6 border-t border-bc1-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-6 group">
            <Logo size="lg" className="group-hover:scale-105 transition-transform duration-300" />
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            Sua experiência digital, mais simples e global. Gestão moderna de saldo e pagamentos em uma interface elegante.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Plataforma</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-bc1-lime transition-colors">Sobre</Link></li>
            <li><Link to="/experience" className="hover:text-bc1-lime transition-colors">Experiência</Link></li>
            <li><Link to="/help-center" className="hover:text-bc1-lime transition-colors">Central de Ajuda</Link></li>
            <li><Link to="/security" className="hover:text-bc1-lime transition-colors">Segurança</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/terms" className="hover:text-bc1-lime transition-colors">Termos de Uso</Link></li>
            <li><Link to="/privacy" className="hover:text-bc1-lime transition-colors">Privacidade</Link></li>
            <li><Link to="/transparency" className="hover:text-bc1-lime transition-colors">Transparência</Link></li>
            <li><Link to="/supported-countries" className="hover:text-bc1-lime transition-colors">Países Suportados</Link></li>
            <li><Link to="/prohibited-activities" className="hover:text-bc1-lime transition-colors">Atividades Proibidas</Link></li>
            <li><Link to="/support" className="hover:text-bc1-lime transition-colors">Suporte</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-bc1-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {new Date().getFullYear()} Bc1 Global. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};
