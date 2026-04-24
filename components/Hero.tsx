import React from 'react';
import { ArrowDownUp, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreButtons } from './StoreButtons';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden bg-bc1-dark">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start space-y-8 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-bc1-border bg-bc1-card text-xs font-medium text-bc1-textMuted">
            <span className="w-2 h-2 rounded-full bg-bc1-lime"></span>
            Suas finanças na blockchain
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            A evolução do dinheiro <br className="hidden md:block" />
            <span className="text-bc1-lime">já começou.</span>
          </h1>

          <div className="max-w-xl space-y-6">
            <p className="text-xl md:text-2xl text-white font-medium leading-snug">
              A Bc1 une a liberdade da blockchain com a praticidade do seu dia a dia.
            </p>
            <p className="text-lg text-bc1-textMuted leading-relaxed">
              Pague boletos, envie dólares instantaneamente e controle sua vida financeira global em uma plataforma <span className="text-white font-semibold">não-custodial</span> — onde o poder está sempre nas suas mãos.
            </p>
          </div>

          <StoreButtons className="pt-4" />
        </div>

        {/* Animated Mockup Area */}
        <div className="w-full flex justify-center lg:justify-end items-center relative z-10 pb-20 lg:pb-0">
          <div className="relative transform scale-[0.75] sm:scale-90 transition-transform duration-500">
             {/* Phone Mockup Frame */}
             <div className="relative w-[300px] h-[600px] border-[8px] border-bc1-darker bg-bc1-darker shadow-2xl shadow-bc1-lime/10 flex flex-col p-0 overflow-hidden rounded-[48px]">

                {/* Mockup Status Bar */}
                <div className="w-full h-7 bg-transparent flex justify-between items-center px-5 z-20 shrink-0 mt-2">
                   <span className="text-[11px] font-bold text-transparent">00:00</span>
                   <div className="flex gap-1.5">
                     <div className="w-3 h-3 bg-white rounded-sm"></div>
                     <div className="w-3 h-3 bg-white rounded-sm"></div>
                   </div>
                </div>

                {/* Animation Stage */}
                <div className="flex-grow relative bg-gradient-to-b from-[#152319] to-bc1-darker overflow-hidden flex flex-col items-center pt-8 perspective-container">

                   <div className="absolute top-8 flex flex-col items-center z-10 animate-flow-in-out">
                     <div className="w-10 h-10 bg-bc1-lime rotate-45 flex items-center justify-center shadow-lg mb-2">
                       <span className="text-black font-bold -rotate-45 text-[10px]">PIX</span>
                     </div>
                     <span className="text-[10px] font-bold text-bc1-textMuted tracking-wider">BRL</span>
                   </div>

                   <div className="absolute top-20 w-[1px] h-16 bg-gradient-to-b from-bc1-lime to-bc1-purple opacity-50"></div>

                   <div className="absolute top-36 z-20">
                      <div className="relative w-16 h-16 flex items-center justify-center">
                         <div className="absolute inset-0 border-2 border-dashed border-bc1-lime rounded-full animate-spin-slow"></div>
                         <div className="w-11 h-11 bg-bc1-card border border-bc1-border shadow-md rounded-full flex items-center justify-center z-10">
                            <ArrowDownUp size={16} className="text-bc1-lime animate-pulse" />
                         </div>
                      </div>
                   </div>

                   <div className="absolute top-56 w-full flex justify-center items-center h-16">
                       <div className="absolute flex flex-col items-center animate-eject-left opacity-0">
                          <div className="w-9 h-9 rounded-full bg-[#2775CA] flex items-center justify-center shadow-lg text-white font-bold text-[9px] border-2 border-bc1-border">
                             USDC
                          </div>
                       </div>

                       <div className="absolute flex flex-col items-center animate-eject-right opacity-0">
                          <div className="w-9 h-9 rounded-full bg-bc1-purple flex items-center justify-center shadow-lg text-black font-bold text-[9px] border-2 border-bc1-border">
                             BRLA
                          </div>
                       </div>
                   </div>

                   <div className="absolute top-80 z-30 animate-float-card w-48 h-32 preserve-3d">
                      <div className="w-full h-full bg-bc1-darker rounded-xl shadow-2xl relative border border-bc1-border flex flex-col justify-between overflow-hidden animate-card-pulse p-4">
                         <div className="absolute inset-0 opacity-40">
                            <svg width="100%" height="100%" viewBox="0 0 160 96" preserveAspectRatio="none">
                               <defs>
                                  <linearGradient id="cardLineGrad" x1="0" y1="0" x2="1" y2="1">
                                     <stop offset="0%" stopColor="#D4FF59" />
                                     <stop offset="100%" stopColor="#C8A2FF" stopOpacity="0" />
                                  </linearGradient>
                               </defs>
                               {Array.from({length: 12}).map((_, i) => (
                                  <path
                                    key={i}
                                    d={`M-10 ${10 + i * 7} Q 60 ${40 + i * 5}, 170 ${i * 4}`}
                                    stroke="url(#cardLineGrad)"
                                    strokeWidth="0.75"
                                    fill="none"
                                  />
                               ))}
                            </svg>
                         </div>

                         <div className="relative z-10 flex justify-between items-start">
                            <div className="flex items-center gap-2">
                               <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                                  </svg>
                               </div>
                               <span className="text-white font-sans text-[11px] font-medium tracking-wide">Pay</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                               <Wifi size={14} className="text-white rotate-90 opacity-90" strokeWidth={2.5} />
                            </div>
                         </div>

                         <div className="relative z-10 flex justify-end items-end">
                            <span className="text-white font-bold italic text-xl leading-none tracking-tight">VISA</span>
                         </div>
                      </div>
                   </div>

                   <div className="absolute top-[460px] w-full h-32 pointer-events-none z-40">
                       <div className="absolute left-1/2 top-0 animate-spend-1">
                           <div className="flex items-center gap-2 bg-bc1-card px-3 py-1 rounded-full shadow-md border border-bc1-border backdrop-blur-md">
                               <span className="text-base">🇺🇸</span>
                               <span className="text-[10px] font-bold text-white">USD</span>
                           </div>
                       </div>
                       <div className="absolute left-1/2 top-0 animate-spend-2">
                           <div className="flex items-center gap-2 bg-bc1-card px-3 py-1 rounded-full shadow-md border border-bc1-border backdrop-blur-md">
                               <span className="text-base">🇪🇺</span>
                               <span className="text-[10px] font-bold text-white">EUR</span>
                           </div>
                       </div>
                   </div>

                   <div className="absolute top-[540px] w-40 h-4 bg-bc1-lime/20 blur-xl rounded-full animate-shadow-pulse"></div>
                </div>

                <Link to="/support" className="w-full py-5 bg-bc1-lime text-black text-center text-[12px] font-bold uppercase tracking-wider mt-auto hover:bg-[#c4f042] transition-colors cursor-pointer shrink-0">
                  Usar Cartão Global
                </Link>
             </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-container { perspective: 800px; }
        .preserve-3d { transform-style: preserve-3d; }

        @keyframes flow-in-out {
          0% { transform: translateY(-40px) scale(0.8); opacity: 0; }
          10% { transform: translateY(0) scale(1); opacity: 1; }
          25% { transform: translateY(20px) scale(0.9); opacity: 0; }
          100% { transform: translateY(20px) scale(0.9); opacity: 0; }
        }
        .animate-flow-in-out { animation: flow-in-out 6s ease-in-out infinite; }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @keyframes eject-left {
          0%, 25% { transform: translate(0, -20px) scale(0.5); opacity: 0; }
          35% { opacity: 1; transform: translate(0, 0) scale(1); }
          45% { transform: translate(-25px, 50px) rotate(-10deg) scale(0.8); opacity: 1; }
          55% { transform: translate(-10px, 80px) scale(0.5); opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes eject-right {
          0%, 30% { transform: translate(0, -20px) scale(0.5); opacity: 0; }
          40% { opacity: 1; transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, 50px) rotate(10deg) scale(0.8); opacity: 1; }
          60% { transform: translate(10px, 80px) scale(0.5); opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-eject-left { animation: eject-left 6s ease-in-out infinite; }
        .animate-eject-right { animation: eject-right 6s ease-in-out infinite; }
        @keyframes float-card { 0%, 100% { transform: translateY(0) rotateX(10deg); } 50% { transform: translateY(-4px) rotateX(15deg); } }
        .animate-float-card { animation: float-card 6s ease-in-out infinite; }
        @keyframes card-pulse {
          0%, 45% { box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.1); }
          55% { box-shadow: 0 15px 50px -10px rgba(212, 255, 89, 0.4); border-color: rgba(212, 255, 89, 0.8); }
          100% { box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.1); }
        }
        .animate-card-pulse { animation: card-pulse 6s ease-in-out infinite; }
        @keyframes spend-1 {
          0%, 55% { opacity: 0; transform: translate(-50%, -10px) scale(0.5); }
          65% { opacity: 1; transform: translate(-130%, 30px) scale(1); }
          80% { opacity: 0; transform: translate(-150%, 50px) scale(1.1); }
          100% { opacity: 0; }
        }
        @keyframes spend-2 {
          0%, 58% { opacity: 0; transform: translate(-50%, -10px) scale(0.5); }
          68% { opacity: 1; transform: translate(30%, 30px) scale(1); }
          83% { opacity: 0; transform: translate(50%, 50px) scale(1.1); }
          100% { opacity: 0; }
        }
        .animate-spend-1 { animation: spend-1 6s ease-out infinite; }
        .animate-spend-2 { animation: spend-2 6s ease-out infinite; }
        @keyframes shadow-pulse { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(0.8); opacity: 0.1; } }
        .animate-shadow-pulse { animation: shadow-pulse 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};
