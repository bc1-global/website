import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ChevronRight,
  Clock,
  Shield,
  MessageCircle,
  Instagram,
  Twitter
} from 'lucide-react';
import { Footer } from './components/Footer';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Suporte</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Info */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit">
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <h3 className="text-xs font-bold uppercase tracking-widest text-bc1-lime mb-6">Disponibilidade</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-bc1-border">
                    <Clock className="w-5 h-5 text-bc1-lime" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-bc1-textMuted uppercase mb-1">Horário</p>
                    <p className="text-sm font-medium">24/7 Atendimento Digital</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-8 bg-bc1-lime/5 rounded-3xl border border-bc1-lime/20">
              <h4 className="text-sm font-bold text-bc1-lime mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Segurança Primeiro
              </h4>
              <p className="text-xs text-bc1-textMuted leading-relaxed">
                Nunca solicitaremos sua senha ou chaves privadas por e-mail ou chat.
              </p>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
                  Central de Ajuda
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                  Como podemos <br />
                  <span className="text-bc1-lime">ajudar você?</span>
                </h1>
                <p className="text-xl text-bc1-textMuted leading-relaxed max-w-2xl">
                  Escolha um dos canais abaixo para falar com nossa equipe. Estamos prontos para garantir que sua experiência com a Bc1 seja impecável.
                </p>
              </div>

              <div className="grid md:grid-cols-1 gap-6">
                {/* Email Contact */}
                <a
                  href="mailto:suporte@bc1.global"
                  className="group bg-bc1-card border border-bc1-border p-8 rounded-[2.5rem] hover:border-bc1-lime/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-bc1-lime/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-bc1-lime" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">E-mail Oficial</h3>
                  <p className="text-bc1-textMuted text-sm mb-4">Para suporte técnico, dúvidas sobre a plataforma ou parcerias.</p>
                  <span className="text-bc1-lime font-bold group-hover:underline">suporte@bc1.global</span>
                </a>
              </div>

              {/* FAQ Quick Links - Institutional FAQ */}
              <div className="mt-24">
                <h3 className="text-2xl font-bold mb-8">Dúvidas Frequentes</h3>
                <div className="grid gap-4">
                  {[
                    { q: 'A Bc1 é um banco?', a: 'Não. Somos uma plataforma de tecnologia e software que licencia uma interface para blockchain.' },
                    { q: 'A Bc1 guarda o meu dinheiro?', a: 'Não. Seus ativos ficam na blockchain, sob sua própria custódia e controle exclusivo.' },
                    { q: 'A Bc1 tem acesso às minhas chaves?', a: 'Jamais. As chaves são geradas e mantidas localmente no seu dispositivo.' },
                    { q: 'Qual a diferença para um banco?', a: 'Em um banco, você entrega seu dinheiro para eles. Na Bc1, você usa nossa tecnologia para cuidar do seu próprio dinheiro.' },
                    { q: 'A Bc1 executa transações por mim?', a: 'Não. A plataforma apenas transmite os comandos que você autoriza pessoalmente.' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-bc1-card border border-bc1-border rounded-2xl">
                      <h4 className="font-bold text-white mb-2">{item.q}</h4>
                      <p className="text-sm text-bc1-textMuted leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
