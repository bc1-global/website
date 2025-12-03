import React, { useState, useEffect } from 'react';

export const Converter: React.FC = () => {
  const [brlAmount, setBrlAmount] = useState<string>('5000');
  const [usdtAmount, setUsdtAmount] = useState<string>('');
  
  // Mock exchange rate (1 USDT = 5.35 BRL approx for simulation)
  const RATE = 5.3567;

  useEffect(() => {
    const value = parseFloat(brlAmount.replace(/\./g, '').replace(',', '.'));
    if (!isNaN(value) && value > 0) {
      setUsdtAmount((value / RATE).toFixed(2));
    } else {
      setUsdtAmount('0.00');
    }
  }, [brlAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Simple numeric only filter
    const val = e.target.value.replace(/[^0-9]/g, '');
    setBrlAmount(val);
  };

  const formatBRL = (val: string) => {
    if (!val) return '0,00';
    const num = parseFloat(val);
    return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(num / 100);
  };

  return (
    <section className="py-20 bg-bc1-caramelLight/30 border-y border-bc1-caramelLight/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-bc1-black">Veja quanto você recebe usando o bc1.</h3>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Decorative bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bc1-orange to-bc1-brown"></div>

          <div className="flex-1 w-full">
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Você Envia (R$)
            </label>
            <div className="relative">
              <input 
                type="text" 
                value={formatBRL(brlAmount)}
                onChange={handleInputChange}
                className="w-full text-4xl md:text-5xl font-bold text-bc1-black bg-transparent border-b-2 border-gray-200 focus:border-bc1-orange outline-none py-2 transition-colors placeholder-gray-300 rounded-none"
                placeholder="0,00"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center text-bc1-orange">
             {/* Arrow Icon */}
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
               <line x1="5" y1="12" x2="19" y2="12"></line>
               <polyline points="12 5 19 12 12 19"></polyline>
             </svg>
          </div>

          <div className="flex-1 w-full text-right md:text-left">
            <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">
              Você Recebe (USDT)
            </label>
            <div className="text-4xl md:text-5xl font-bold text-bc1-orange py-2 border-b-2 border-transparent">
              {usdtAmount}
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Cotação estimada: 1 USDT = R$ {RATE.toFixed(4).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};