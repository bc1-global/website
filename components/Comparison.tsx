import React from 'react';

export const Comparison: React.FC = () => {
  const cards = [
    {
      title: 'bc1',
      value: 'R$ 26.800,00',
      note: 'Você paga menos.',
      cost: 'Custo por US$1,00 = R$5,36',
      bg: 'bg-bc1-orange',
      text: 'text-white',
      border: 'border-transparent',
      opacity: 'opacity-100',
      tag: null
    },
    {
      title: 'Banco N',
      value: 'R$ 28.115,75',
      note: 'Receba 5% menos ao converter.',
      cost: 'Custo por US$1,00 = R$5,6231',
      bg: 'bg-[#FBC02D]', // Strong Yellow
      text: 'text-bc1-black',
      border: 'border-transparent',
      opacity: 'opacity-100',
      tag: '5% MENOS'
    },
    {
      title: 'Banco C',
      value: 'R$ 28.658,07',
      note: 'Receba 7% menos.',
      cost: 'Custo por US$1,00 = R$5,7316',
      bg: 'bg-bc1-brown',
      text: 'text-white',
      border: 'border-transparent',
      opacity: 'opacity-95',
      tag: '7% MENOS'
    },
    {
      title: 'Banco W',
      value: 'R$ 29.461,50',
      note: 'Receba 10% menos.',
      cost: 'Custo por US$1,00 = R$5,8923',
      bg: 'bg-bc1-brownDeep',
      text: 'text-white/80',
      border: 'border-transparent',
      opacity: 'opacity-100',
      tag: '10% MENOS'
    }
  ];

  return (
    <section className="py-24 bg-bc1-cream">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-bc1-black">Comparativo</h2>
          <p className="text-gray-600 mt-2">Simulação de custo para compra de US$ 5.000,00.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 flex flex-col justify-between min-h-[320px] ${card.bg} ${card.text} ${card.border} ${card.opacity} shadow-lg transition-transform hover:-translate-y-1 duration-300`}
            >
              {card.tag && (
                 <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                   {card.tag}
                 </div>
              )}
              
              <div>
                <h3 className={`text-xl font-bold mb-6 opacity-80`}>{card.title}</h3>
                <div className="text-3xl font-bold tracking-tight mb-2 leading-none">
                  {card.value}
                </div>
                <div className={`text-sm font-medium mt-4 pb-4 border-b ${card.text === 'text-white' ? 'border-white/20' : 'border-black/10'}`}>
                  {card.note}
                </div>
              </div>

              <div className="mt-6">
                <p className={`text-xs ${card.text === 'text-white' ? 'text-white/60' : 'text-black/50'} font-mono`}>
                  {card.cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};