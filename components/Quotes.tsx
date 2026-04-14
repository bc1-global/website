import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, TrendingDown, ArrowDownUp, RefreshCw } from 'lucide-react';

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

  const [isQuoting, setIsQuoting] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);
    setIsQuoting(true);
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,usd-coin,solana,binancecoin&vs_currencies=brl&include_24hr_change=true');
      const data = await response.json();
      setCryptoData(data);
      // Simulate Criptopix rate (usually spot + ~1-2% spread/fee)
      if (data['usd-coin']?.brl) {
        setUsdcRate(data['usd-coin'].brl * 1.015);
      } else if (data['tether']?.brl) {
        setUsdcRate(data['tether'].brl * 1.015);
      }
    } catch (error) {
      console.error("Failed to fetch crypto data", error);
    } finally {
      setLoading(false);
      setTimeout(() => setIsQuoting(false), 800);
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
          <div className="bg-[#1a261d] rounded-3xl p-8 border border-bc1-lime/10 relative overflow-hidden h-fit shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-bc1-lime/5 blur-[100px] rounded-full"></div>
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="text-white font-bold text-xl">Conversão Rápida</h3>
              <span className="text-[10px] text-bc1-lime/70 uppercase tracking-widest font-bold bg-bc1-lime/10 px-3 py-1 rounded-lg border border-bc1-lime/20">Tempo Real</span>
            </div>

            <div className="space-y-4 relative z-10">
              {/* Top Input */}
              <div className="bg-[#121c15] rounded-2xl p-6 border border-white/5 focus-within:border-bc1-lime/30 transition-all group">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-bc1-textMuted font-medium">Você envia</span>
                  <span className="text-white font-bold flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
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
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-white font-bold opacity-50">{isBrlToCrypto ? 'R$' : '$'}</span>
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}
                    className="bg-transparent text-4xl font-bold text-white w-full outline-none placeholder:text-white/20"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Swap Icon */}
              <div className="flex justify-center -my-6 relative z-20">
                <button onClick={handleSwap} className="w-12 h-12 rounded-full bg-[#1a261d] border border-bc1-lime/20 flex items-center justify-center text-bc1-lime shadow-xl hover:scale-110 transition-transform cursor-pointer group">
                  <ArrowDownUp size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                </button>
              </div>

              {/* Bottom Output */}
              <div className="bg-[#121c15] rounded-2xl p-6 border border-white/5">
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-bc1-textMuted font-medium">Você recebe (aprox.)</span>
                  <span className="text-white font-bold flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
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
                <div className="flex items-center gap-3">
                  <span className="text-3xl text-white font-bold opacity-50">{!isBrlToCrypto ? 'R$' : '$'}</span>
                  <input 
                    type="text" 
                    value={outputValue}
                    readOnly
                    className="bg-transparent text-4xl font-bold text-white w-full outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 relative z-10">
              <button 
                onClick={fetchQuotes}
                disabled={isQuoting}
                className={`w-full py-5 bg-bc1-lime text-black font-bold rounded-2xl shadow-lg shadow-bc1-lime/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isQuoting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isQuoting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Cotando...
                  </>
                ) : (
                  <>
                    Cotar Agora
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
              
              <div className="flex justify-between items-center text-[11px] text-bc1-textMuted px-2">
                <span>1 USDC = {formatCurrency(usdcRate)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
