import React from 'react';
import { Store, RefreshCw, TrendingUp, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Merchants: React.FC = () => {
  const floatingLogos = [
    { src: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/btc.svg', alt: 'Bitcoin', size: 'w-10 h-10', position: 'top-[15%] left-[5%]', delay: '0s', duration: '5s' },
    { src: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdt.svg', alt: 'Tether', size: 'w-12 h-12', position: 'bottom-[25%] right-[5%]', delay: '1s', duration: '6s' },
    { src: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdc.svg', alt: 'USDC', size: 'w-14 h-14', position: 'top-[25%] right-[-5%]', delay: '0.5s', duration: '7s' },
    { src: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg', alt: 'Ethereum', size: 'w-8 h-8', position: 'bottom-[15%] left-[-5%]', delay: '2s', duration: '4s' },
  ];

  return (
    <section className="py-32 px-6 bg-bc1-darker relative overflow-hidden flex justify-center min-h-[800px] items-center">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-bc1-lime/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-20 relative z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-bc1-lime" />
            <span>Solução Premium para Negócios</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6">
            Receba em <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Reais</span>,<br />
            guarde em <span className="text-bc1-lime">Cripto</span>.
          </h2>
          
          <p className="text-lg text-bc1-textMuted leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 font-light">
            Eleve o patamar do seu negócio. Aceite pagamentos tradicionais e receba em ativos digitais, ou aceite criptomoedas com liquidação instantânea em Reais. Sem volatilidade, sem complicação.
          </p>
          
          <ul className="space-y-8 mb-12 text-left">
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bc1-lime/20 to-bc1-lime/5 border border-bc1-lime/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                <Store className="w-6 h-6 text-bc1-lime" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Terminais Inteligentes</h4>
                <p className="text-sm text-bc1-textMuted leading-relaxed">Infraestrutura completa com maquininhas físicas de alta performance para o seu estabelecimento.</p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bc1-lime/20 to-bc1-lime/5 border border-bc1-lime/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                <RefreshCw className="w-6 h-6 text-bc1-lime" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Liquidação Instantânea</h4>
                <p className="text-sm text-bc1-textMuted leading-relaxed">Proteção total contra volatilidade com conversão em tempo real no momento da transação.</p>
              </div>
            </li>
            <li className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bc1-lime/20 to-bc1-lime/5 border border-bc1-lime/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                <TrendingUp className="w-6 h-6 text-bc1-lime" />
              </div>
              <div>
                <h4 className="text-white font-medium text-lg mb-1">Taxas Otimizadas</h4>
                <p className="text-sm text-bc1-textMuted leading-relaxed">Maximize suas margens de lucro com as condições mais competitivas do mercado financeiro.</p>
              </div>
            </li>
          </ul>

          <Link to="/support" className="group inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-bc1-lime transition-all duration-300">
            Seja um Parceiro
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Visual Area */}
        <div className="flex-1 relative w-full max-w-xl h-[600px] flex justify-center items-center mt-12 lg:mt-0">
          
          {/* Floating Logos */}
          {floatingLogos.map((logo, index) => (
            <div 
              key={index}
              className={`absolute ${logo.position} animate-float-slow bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl flex items-center justify-center z-30`}
              style={{ 
                animationDelay: logo.delay,
                animationDuration: logo.duration,
              }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.size} object-contain drop-shadow-md`} 
              />
            </div>
          ))}

          {/* Main Image Composition */}
          <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-white/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop" 
              alt="Lojista usando maquininha de cartão" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Overlay UI Elements */}
            <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col gap-4">
              
              {/* Card 1: Venda Aprovada */}
              <div className="bg-black/40 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-bc1-lime animate-pulse"></div>
                    <span className="text-white/70 text-[10px] font-semibold uppercase tracking-widest">Transação Aprovada</span>
                  </div>
                  <span className="text-bc1-lime text-[10px] font-medium uppercase tracking-wider">Agora mesmo</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center p-2.5 backdrop-blur-md">
                      <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdt.svg" alt="USDT" className="w-full h-full object-contain drop-shadow-md" />
                    </div>
                    <div>
                      <p className="text-white font-mono font-medium text-xl tracking-tight">150.00 <span className="text-white/50 text-base">USDT</span></p>
                      <p className="text-white/50 text-xs mt-0.5">Recebido em Cripto</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Conversão */}
              <div className="bg-black/40 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/70 text-[10px] font-semibold uppercase tracking-widest">Liquidação em Reais</span>
                  <span className="text-white/50 text-[10px] font-medium uppercase tracking-wider">Taxa: 0%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bc1-lime/20 border border-bc1-lime/30 flex items-center justify-center text-bc1-lime font-medium text-xl backdrop-blur-md">
                      R$
                    </div>
                    <div>
                      <p className="text-white font-mono font-medium text-xl tracking-tight">750,00</p>
                      <p className="text-white/50 text-xs mt-0.5">Creditado na Conta</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
