import React, { useState, useEffect } from 'react';
import { ArrowDownUp, ChevronDown, ArrowRightLeft } from 'lucide-react';

type CryptoType = 'USDT' | 'USDC';
type Direction = 'BRL_TO_CRYPTO' | 'CRYPTO_TO_BRL';

export const Converter: React.FC = () => {
  const [amount, setAmount] = useState<string>('5.000,00');
  const [cryptoType, setCryptoType] = useState<CryptoType>('USDT');
  const [direction, setDirection] = useState<Direction>('BRL_TO_CRYPTO');
  const [convertedAmount, setConvertedAmount] = useState<string>('0,00');

  // Simulation Rate
  const RATE = 5.36; 
  
  const PRESETS = [1, 5000, 10000, 50000];

  useEffect(() => {
    // Robust BR format parsing: remove dots (thousands), swap comma to dot (decimal)
    // Note: This logic assumes the user is typing in BR format (e.g. 1.000,00) or simple format
    const normalized = amount.replace(/\./g, '').replace(',', '.');
    const val = parseFloat(normalized);
    
    if (isNaN(val) || val === 0) {
      setConvertedAmount('0,00');
      return;
    }

    let result = 0;
    if (direction === 'BRL_TO_CRYPTO') {
      result = val / RATE;
    } else {
      result = val * RATE;
    }

    setConvertedAmount(
      new Intl.NumberFormat('pt-BR', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      }).format(result)
    );
  }, [amount, direction, RATE]);

  const handleSwap = () => {
    setDirection(prev => prev === 'BRL_TO_CRYPTO' ? 'CRYPTO_TO_BRL' : 'BRL_TO_CRYPTO');
  };
  
  const handlePreset = (usdValue: number) => {
    let newAmount = '';
    if (direction === 'BRL_TO_CRYPTO') {
       // Calculate BRL equivalent for the desired USD amount
       newAmount = (usdValue * RATE).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
       // Use the USD amount directly
       newAmount = usdValue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    setAmount(newAmount);
  };

  const renderCurrencySelector = (type: 'fiat' | 'crypto') => {
    if (type === 'fiat') {
      return (
        <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg border border-gray-200 select-none cursor-default">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center relative shadow-sm border border-black/10">
             <span className="text-sm">🇧🇷</span>
          </div>
          <span className="font-bold text-bc1-black">BRL</span>
        </div>
      );
    }
    
    return (
      <button 
        className="flex items-center gap-2 px-3 py-2 bg-bc1-black text-white rounded-lg border border-bc1-black hover:bg-bc1-orange hover:border-bc1-orange transition-all min-w-[120px] justify-between group"
        onClick={() => setCryptoType(cryptoType === 'USDT' ? 'USDC' : 'USDT')}
      >
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold border border-white/20 ${cryptoType === 'USDT' ? 'bg-[#26A17B]' : 'bg-[#2775CA]'}`}>
              {cryptoType === 'USDT' ? 'T' : 'C'}
          </div>
          <span className="font-bold">{cryptoType}</span>
        </div>
        <ChevronDown size={14} className="text-white/50 group-hover:text-white transition-colors" />
      </button>
    );
  };

  const inputCurrency = direction === 'BRL_TO_CRYPTO' ? 'fiat' : 'crypto';
  const outputCurrency = direction === 'BRL_TO_CRYPTO' ? 'crypto' : 'fiat';

  return (
    <section className="py-24 bg-bc1-caramelLight/30 border-y border-bc1-caramelLight/50" id="converter">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-bc1-orange/10 border border-bc1-orange/20 rounded-full mb-4">
              <span className="text-xs font-bold tracking-widest text-bc1-caramelDark uppercase">
                Simulador em tempo real
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-bc1-black mb-6 leading-[1.1]">
              De Reais para <br className="hidden lg:block"/>
              <span className="text-bc1-orange">Dólar Digital</span> e vice-versa.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Escolha entre USDT ou USDC. Conversão instantânea com as melhores taxas do mercado e liquidez garantida.
            </p>
            
            <div className="hidden lg:flex flex-col gap-4">
               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-bc1-caramelLight">
                  <div className="w-10 h-10 rounded-full bg-bc1-black text-white flex items-center justify-center">
                    <ArrowRightLeft size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-bc1-black">Flexibilidade total</h4>
                    <p className="text-sm text-gray-600">Mova seu dinheiro entre Brasil e o mundo em segundos.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Converter Card */}
          <div className="lg:w-1/2 w-full max-w-[440px]">
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">
               {/* Decorative Gradient Blob */}
               <div className="absolute -top-20 -right-20 w-40 h-40 bg-bc1-orange/10 rounded-full blur-3xl pointer-events-none"></div>

               <div className="flex justify-between items-end mb-6 relative z-10">
                 <h3 className="font-bold text-xl text-bc1-black">Converter</h3>
                 <div className="text-right">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Cotação Aproximada</div>
                    <div className="text-sm font-mono font-medium text-bc1-orange">
                      1 {cryptoType} = R$ {RATE.toFixed(2).replace('.', ',')}
                    </div>
                 </div>
               </div>
               
               {/* Quick Presets */}
               <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                 {PRESETS.map((val) => (
                    <button
                      key={val}
                      onClick={() => handlePreset(val)}
                      className="flex-1 px-3 py-2 text-[10px] font-bold uppercase tracking-wider bg-gray-50 border border-gray-100 text-gray-500 rounded-lg hover:bg-bc1-black hover:text-white hover:border-bc1-black transition-all whitespace-nowrap"
                    >
                      US$ {val === 1 ? '1' : val.toLocaleString('pt-BR')}
                    </button>
                 ))}
               </div>

               <div className="space-y-2 relative z-10">
                 
                 {/* INPUT FIELD */}
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:border-bc1-black/20 focus-within:border-bc1-orange transition-colors group">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-2 group-focus-within:text-bc1-orange transition-colors">
                      {direction === 'BRL_TO_CRYPTO' ? 'Você paga' : 'Você vende'}
                    </label>
                    <div className="flex justify-between items-center gap-4">
                      <input 
                        type="text" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full bg-transparent text-3xl font-bold text-bc1-black outline-none placeholder-gray-300"
                        placeholder="0,00"
                      />
                      {renderCurrencySelector(inputCurrency)}
                    </div>
                 </div>

                 {/* SWAP BUTTON */}
                 <div className="relative h-6 flex items-center justify-center z-20">
                    <div className="absolute inset-0 flex items-center">
                       <div className="w-full h-[1px] bg-gray-100"></div>
                    </div>
                    <button 
                      onClick={handleSwap}
                      className="w-10 h-10 bg-white border border-gray-200 shadow-sm rounded-xl flex items-center justify-center text-bc1-black hover:text-bc1-orange hover:border-bc1-orange hover:rotate-180 transition-all duration-300"
                      title="Inverter direção"
                    >
                      <ArrowDownUp size={18} strokeWidth={2.5} />
                    </button>
                 </div>

                 {/* OUTPUT FIELD */}
                 <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-2">
                      {direction === 'BRL_TO_CRYPTO' ? 'Você recebe' : 'Você recebe'}
                    </label>
                    <div className="flex justify-between items-center gap-4">
                      <div className="text-3xl font-bold text-bc1-black/60 truncate">
                        {convertedAmount}
                      </div>
                      {renderCurrencySelector(outputCurrency)}
                    </div>
                 </div>

               </div>

               {/* Action Button */}
               <div className="mt-8 relative z-10">
                 <button className="w-full py-4 bg-bc1-black text-white font-bold rounded-xl hover:bg-bc1-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                   <span>{direction === 'BRL_TO_CRYPTO' ? 'Comprar Digital Dollar' : 'Resgatar em Reais'}</span>
                   <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                 </button>
                 <p className="text-center text-[10px] text-gray-400 mt-3">
                   Taxas de rede podem ser aplicadas. A cotação final é fixada no momento da transação.
                 </p>
               </div>
               
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
