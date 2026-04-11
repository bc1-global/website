import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, TrendingDown, ArrowDownUp } from 'lucide-react';

interface CryptoData {
  [key: string]: {
    brl: number;
    brl_24h_change: number;
  };
}

export const Quotes: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('1000');
  const [isBrlToCrypto, setIsBrlToCrypto] = useState<boolean>(true);
  const [usdcRate, setUsdcRate] = useState<number>(5.05);
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,usd-coin,solana,binancecoin&vs_currencies=brl&include_24hr_change=true');
      const data = await response.json();
      setCryptoData(data);
      if (data['usd-coin']?.brl) {
        setUsdcRate(data['usd-coin'].brl);
      } else if (data['tether']?.brl) {
        setUsdcRate(data['tether'].brl);
      }
    } catch (error) {
      console.error("Failed to fetch crypto data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
    const interval = setInterval(fetchQuotes, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9.]/g, '');
    setInputValue(val);
  };

  const handleSwap = () => {
    setIsBrlToCrypto(!isBrlToCrypto);
    if (inputValue && usdcRate) {
      if (isBrlToCrypto) {
        setInputValue((parseFloat(inputValue) / usdcRate).toFixed(2));
      } else {
        setInputValue((parseFloat(inputValue) * usdcRate).toFixed(2));
      }
    }
  };

  const outputValue = inputValue && usdcRate 
    ? (isBrlToCrypto 
        ? (parseFloat(inputValue) / usdcRate).toFixed(2) 
        : (parseFloat(inputValue) * usdcRate).toFixed(2))
    : '0.00';

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };

  const formatChange = (change: number) => {
    return `${change > 0 ? '+' : ''}${change.toFixed(2)}%`;
  };

  const defaultQuotes = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/btc.svg' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/eth.svg' },
    { id: 'tether', name: 'Tether', symbol: 'USDT', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdt.svg' },
    { id: 'usd-coin', name: 'USDC', symbol: 'USDC', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdc.svg' },
    { id: 'solana', name: 'Solana', symbol: 'SOL', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/sol.svg' },
    { id: 'binancecoin', name: 'BNB', symbol: 'BNB', logo: 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/bnb.svg' },
  ];

  return (
    <section className="py-20 px-6 relative border-y border-bc1-border bg-bc1-darker/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Cotações globais</h2>
            <p className="text-bc1-textMuted">Acompanhe as principais criptomoedas em tempo real.</p>
          </div>
          <button onClick={fetchQuotes} className="text-bc1-lime text-sm font-medium flex items-center gap-2 hover:underline">
            Atualizar agora <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quotes Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {defaultQuotes.map((quote) => {
              const data = cryptoData?.[quote.id];
              const value = data ? formatCurrency(data.brl) : 'Carregando...';
              const change = data ? data.brl_24h_change : 0;
              const isUp = change >= 0;

              return (
                <div key={quote.symbol} className="glass-card rounded-2xl p-6 hover:bg-bc1-cardHover transition-colors flex flex-col justify-between">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <img src={quote.logo} alt={quote.name} className="w-8 h-8" />
                      <div>
                        <p className="text-bc1-textMuted text-sm">{quote.name}</p>
                        <p className="text-white font-bold text-lg">{quote.symbol}</p>
                      </div>
                    </div>
                    {!loading && data && (
                      <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isUp ? 'bg-bc1-lime/10 text-bc1-lime' : 'bg-red-500/10 text-red-400'}`}>
                        {isUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                        {formatChange(change)}
                      </div>
                    )}
                  </div>
                  <p className="text-2xl font-semibold text-white">{value}</p>
                </div>
              );
            })}
          </div>

          {/* Converter Widget */}
          <div className="glass-card rounded-3xl p-6 border border-bc1-lime/20 relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-32 h-32 bg-bc1-lime/10 blur-3xl rounded-full"></div>
            
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="text-white font-semibold text-lg">Conversão Rápida</h3>
              <span className="text-[10px] text-bc1-textMuted uppercase tracking-wider font-medium bg-bc1-card px-2 py-1 rounded-md">Tempo Real</span>
            </div>

            <div className="space-y-2 relative z-10">
              {/* Top Input */}
              <div className="bg-bc1-darker rounded-2xl p-4 border border-bc1-border focus-within:border-bc1-lime/50 transition-colors">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-bc1-textMuted">Você envia</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    {isBrlToCrypto ? (
                      <>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/32px-Flag_of_Brazil.svg.png" alt="BRL" className="w-4 h-4 rounded-full object-cover" />
                        BRL
                      </>
                    ) : (
                      <>
                        <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdc.svg" alt="USDC/USDT" className="w-4 h-4" />
                        USDC/USDT
                      </>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-white font-medium">{isBrlToCrypto ? 'R$' : '$'}</span>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}
                    className="bg-transparent text-3xl font-semibold text-white w-full outline-none"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center -my-3 relative z-20">
                <button onClick={handleSwap} className="w-10 h-10 rounded-full bg-bc1-card border border-bc1-border flex items-center justify-center text-bc1-lime shadow-lg backdrop-blur-md hover:bg-bc1-darker transition-colors cursor-pointer">
                  <ArrowDownUp size={18} />
                </button>
              </div>

              {/* Bottom Output */}
              <div className="bg-bc1-darker rounded-2xl p-4 border border-bc1-border">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-bc1-textMuted">Você recebe (aprox.)</span>
                  <span className="text-white font-medium flex items-center gap-2">
                    {!isBrlToCrypto ? (
                      <>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/32px-Flag_of_Brazil.svg.png" alt="BRL" className="w-4 h-4 rounded-full object-cover" />
                        BRL
                      </>
                    ) : (
                      <>
                        <img src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/svg/color/usdc.svg" alt="USDC/USDT" className="w-4 h-4" />
                        USDC/USDT
                      </>
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl text-white font-medium">{!isBrlToCrypto ? 'R$' : '$'}</span>
                  <input 
                    type="text" 
                    value={outputValue}
                    readOnly
                    className="bg-transparent text-3xl font-semibold text-white w-full outline-none opacity-90"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center text-xs text-bc1-textMuted relative z-10">
              <span>1 USDC = {formatCurrency(usdcRate)}</span>
              <button onClick={fetchQuotes} className="text-bc1-lime font-medium hover:underline">Atualizar</button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full mt-6 relative z-10">
              <a href="https://apps.apple.com/app/bc1/id6761305119" target="_blank" rel="noopener" className="flex-1 flex items-center justify-center gap-2 bg-[#F8F9FA] text-[#1A1A1A] px-3 py-2 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-all border border-gray-100">
                <svg viewBox="0 0 384 512" className="w-5 h-5 text-black" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-medium leading-none mb-1 text-gray-600">Baixar na</span>
                  <span className="text-sm font-bold leading-none tracking-tight">App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=global.bc1.app" target="_blank" rel="noopener" className="flex-1 flex items-center justify-center gap-2 bg-[#F8F9FA] text-[#1A1A1A] px-3 py-2 rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] hover:scale-105 transition-all border border-gray-100">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" className="w-4 h-4" />
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-medium leading-none mb-1 text-gray-600">Disponível no</span>
                  <span className="text-sm font-bold leading-none tracking-tight">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
