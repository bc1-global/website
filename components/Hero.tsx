import React from 'react';
import { Button } from './Button';
import { ChevronRight, ArrowDownUp, Smartphone, Wifi } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-bc1-cream via-[#FFF3E0] to-[#FFE0B2]/30">
      
      {/* Abstract Geometric Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-bc1-caramelLight/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-bc1-orange/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 h-full pt-16 lg:pt-0">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center items-start z-20">
          <div className="inline-block px-3 py-1 bg-bc1-orange/10 border border-bc1-orange/20 w-fit">
            <span className="text-xs font-bold tracking-widest text-bc1-caramelDark uppercase">
              GLOBAL BANK
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-bc1-black leading-[1.05]">
            Seu novo banco <br/>
            <span className="text-bc1-orange">global.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-lg">
            Construído 100% sobre blockchain, com custo menor, segurança máxima e liberdade total para movimentar seu dinheiro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto">
              CRIAR CONTA
            </Button>
            <Button variant="outline" className="flex items-center justify-center gap-2 w-full sm:w-auto">
              BAIXAR O APP
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>

        {/* Robust Animation Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative z-10 lg:pt-20">
          <div className="relative">
             {/* Phone Mockup Frame - Reduced scale and added transition */}
             <div className="relative w-72 h-[500px] border-[1px] border-gray-900 bg-white shadow-2xl flex flex-col p-0 transition-transform hover:-translate-y-2 duration-500 overflow-hidden rounded-[2px] scale-[0.85] sm:scale-95 origin-center lg:origin-top-right">
                
                {/* Mockup Status Bar - Transparent */}
                <div className="w-full h-7 bg-transparent flex justify-between items-center px-4 z-20 shrink-0">
                   <span className="text-[9px] font-bold text-gray-400">09:41</span>
                   <div className="flex gap-1">
                     <div className="w-2.5 h-2.5 bg-gray-200 rounded-sm"></div>
                     <div className="w-2.5 h-2.5 bg-black rounded-sm"></div>
                   </div>
                </div>
                
                {/* Animation Stage */}
                <div className="flex-grow relative bg-[#FAFAFA] overflow-hidden flex flex-col items-center pt-4 perspective-container">
                   
                   {/* 1. PIX INPUT STAGE */}
                   <div className="absolute top-4 flex flex-col items-center z-10 animate-flow-in-out">
                     <div className="w-8 h-8 bg-[#32BCAD] rotate-45 flex items-center justify-center shadow-lg mb-1">
                       <span className="text-white font-bold -rotate-45 text-[8px]">PIX</span>
                     </div>
                     <span className="text-[8px] font-bold text-gray-400 tracking-wider">BRL</span>
                   </div>

                   {/* Connection Line Top */}
                   <div className="absolute top-14 w-[1px] h-10 bg-gradient-to-b from-[#32BCAD] to-bc1-orange opacity-50"></div>

                   {/* 2. CONVERSION CORE */}
                   <div className="absolute top-24 z-20">
                      <div className="relative w-14 h-14 flex items-center justify-center">
                         <div className="absolute inset-0 border-2 border-dashed border-bc1-orange rounded-full animate-spin-slow"></div>
                         <div className="w-9 h-9 bg-white border border-gray-200 shadow-md rounded-full flex items-center justify-center z-10">
                            <ArrowDownUp size={14} className="text-bc1-orange animate-pulse" />
                         </div>
                      </div>
                   </div>

                   {/* 3. TOKENS EJECTING (USDT / USDC) */}
                   <div className="absolute top-40 w-full flex justify-center items-center h-12">
                       {/* Left Coin: USDT */}
                       <div className="absolute flex flex-col items-center animate-eject-left opacity-0">
                          <div className="w-7 h-7 rounded-full bg-[#26A17B] flex items-center justify-center shadow-lg text-white font-bold text-[7px] border-2 border-white">
                             USDT
                          </div>
                       </div>
                       
                       {/* Right Coin: USDC */}
                       <div className="absolute flex flex-col items-center animate-eject-right opacity-0">
                          <div className="w-7 h-7 rounded-full bg-[#2775CA] flex items-center justify-center shadow-lg text-white font-bold text-[7px] border-2 border-white">
                             USDC
                          </div>
                       </div>
                   </div>

                   {/* Connection Lines Bottom */}
                   <div className="absolute top-44 w-20 h-20 flex justify-center">
                       <div className="w-[1px] h-full bg-gradient-to-b from-bc1-orange to-black opacity-30 transform -skew-x-12 origin-top"></div>
                       <div className="w-[1px] h-full bg-gradient-to-b from-bc1-orange to-black opacity-30 transform skew-x-12 origin-top"></div>
                   </div>

                   {/* 4. THE GLOBAL CARD */}
                   <div className="absolute top-60 z-30 animate-float-card w-40 h-24 preserve-3d">
                      <div className="w-full h-full bg-[#1a1a1a] rounded-xl shadow-2xl relative border border-white/10 flex flex-col justify-between overflow-hidden animate-card-pulse p-3">
                         
                         {/* Card Background Pattern - Wavy Lines */}
                         <div className="absolute inset-0 opacity-40">
                            <svg width="100%" height="100%" viewBox="0 0 160 96" preserveAspectRatio="none">
                               <defs>
                                  <linearGradient id="cardLineGrad" x1="0" y1="0" x2="1" y2="1">
                                     <stop offset="0%" stopColor="#D4E157" />
                                     <stop offset="100%" stopColor="#AFB42B" stopOpacity="0" />
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

                         {/* Card Top Row */}
                         <div className="relative z-10 flex justify-between items-start">
                            {/* Logo */}
                            <div className="flex items-center gap-1.5">
                               <div className="w-3.5 h-3.5 rounded-full border border-white flex items-center justify-center">
                                  {/* Simplified Owl/Bird Icon Shape */}
                                  <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
                                  </svg>
                               </div>
                               <span className="text-white font-sans text-[9px] font-medium tracking-wide">Pay</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                               {/* Chip */}
                               <div className="w-5 h-4 bg-gradient-to-b from-gray-200 to-gray-400 rounded-[2px] border border-gray-500/50 flex items-center justify-center relative overflow-hidden">
                                  <div className="absolute w-full h-[1px] bg-gray-500/30 top-1/2"></div>
                                  <div className="absolute h-full w-[1px] bg-gray-500/30 left-1/2"></div>
                                  <div className="w-2.5 h-1.5 border border-gray-600/20 rounded-[1px]"></div>
                               </div>
                               {/* Contactless */}
                               <Wifi size={12} className="text-white rotate-90 opacity-90" strokeWidth={2.5} />
                            </div>
                         </div>

                         {/* Card Bottom Row */}
                         <div className="relative z-10 flex justify-end items-end">
                            <span className="text-white font-bold italic text-lg leading-none tracking-tight">VISA</span>
                         </div>
                         
                      </div>
                   </div>

                   {/* 5. GLOBAL SPENDING OUTPUTS (The flags emerging) */}
                   <div className="absolute top-[340px] w-full h-32 pointer-events-none z-40">
                       {/* USA */}
                       <div className="absolute left-1/2 top-0 animate-spend-1">
                           <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full shadow-md border border-gray-100">
                               <span className="text-sm">🇺🇸</span>
                               <span className="text-[8px] font-bold text-gray-800">USD</span>
                           </div>
                       </div>
                       {/* EU */}
                       <div className="absolute left-1/2 top-0 animate-spend-2">
                           <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full shadow-md border border-gray-100">
                               <span className="text-sm">🇪🇺</span>
                               <span className="text-[8px] font-bold text-gray-800">EUR</span>
                           </div>
                       </div>
                       {/* ARG */}
                       <div className="absolute left-1/2 top-0 animate-spend-3">
                           <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full shadow-md border border-gray-100">
                               <span className="text-sm">🇦🇷</span>
                               <span className="text-[8px] font-bold text-gray-800">ARG</span>
                           </div>
                       </div>
                       {/* BRL */}
                       <div className="absolute left-1/2 top-0 animate-spend-4">
                           <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full shadow-md border border-gray-100">
                               <span className="text-sm">🇧🇷</span>
                               <span className="text-[8px] font-bold text-gray-800">BRL</span>
                           </div>
                       </div>
                   </div>

                   {/* Floor Reflection/Shadow */}
                   <div className="absolute top-[400px] w-32 h-3 bg-black/20 blur-lg rounded-full animate-shadow-pulse"></div>

                </div>

                {/* Mockup Action Button */}
                <div className="w-full py-4 bg-bc1-black text-white text-center text-[10px] font-bold uppercase tracking-wider mt-auto hover:bg-bc1-orange transition-colors cursor-pointer border-t border-gray-800 shrink-0">
                  Usar Cartão Global
                </div>
             </div>
             
             {/* Decorative Square behind */}
             <div className="absolute top-12 -right-12 -z-10 w-64 h-[450px] border border-bc1-orange/30 bg-transparent hidden lg:block"></div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-container {
          perspective: 800px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        /* TIMING VARIABLES (Total Cycle ~6s) */
        
        /* 1. PIX IN (0s - 1.5s) */
        @keyframes flow-in-out {
          0% { transform: translateY(-40px) scale(0.8); opacity: 0; }
          10% { transform: translateY(0) scale(1); opacity: 1; }
          25% { transform: translateY(20px) scale(0.9); opacity: 0; }
          100% { transform: translateY(20px) scale(0.9); opacity: 0; }
        }
        .animate-flow-in-out {
          animation: flow-in-out 6s ease-in-out infinite;
        }

        /* 2. Process Spin */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* 3. Tokens Eject to Card (1.5s - 3s) */
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
        .animate-eject-left {
          animation: eject-left 6s ease-in-out infinite;
        }
        .animate-eject-right {
          animation: eject-right 6s ease-in-out infinite;
        }

        /* 4. Card Float & Receive Pulse */
        @keyframes float-card {
          0%, 100% { transform: translateY(0) rotateX(10deg); }
          50% { transform: translateY(-4px) rotateX(15deg); }
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }

        @keyframes card-pulse {
          0%, 45% { box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.1); }
          55% { box-shadow: 0 15px 50px -10px rgba(247, 147, 26, 0.6); border-color: rgba(247, 147, 26, 1); }
          100% { box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.5); border-color: rgba(255, 255, 255, 0.1); }
        }
        .animate-card-pulse {
          animation: card-pulse 6s ease-in-out infinite;
        }

        /* 5. GLOBAL SPENDING BURST */
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
        @keyframes spend-3 {
          0%, 60% { opacity: 0; transform: translate(-50%, -10px) scale(0.5); }
          70% { opacity: 1; transform: translate(-110%, 60px) scale(1); }
          85% { opacity: 0; transform: translate(-130%, 80px) scale(1.1); }
          100% { opacity: 0; }
        }
        @keyframes spend-4 {
          0%, 62% { opacity: 0; transform: translate(-50%, -10px) scale(0.5); }
          72% { opacity: 1; transform: translate(10%, 60px) scale(1); }
          87% { opacity: 0; transform: translate(30%, 80px) scale(1.1); }
          100% { opacity: 0; }
        }

        .animate-spend-1 { animation: spend-1 6s ease-out infinite; }
        .animate-spend-2 { animation: spend-2 6s ease-out infinite; }
        .animate-spend-3 { animation: spend-3 6s ease-out infinite; }
        .animate-spend-4 { animation: spend-4 6s ease-out infinite; }

        @keyframes shadow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(0.8); opacity: 0.1; }
        }
        .animate-shadow-pulse {
          animation: shadow-pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};