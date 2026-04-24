import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Ban, AlertTriangle, ChevronRight, Gavel, Skull, Ghost, Wallet, Landmark, Info, Search, FileWarning } from 'lucide-react';
import { Footer } from './components/Footer';

const ProhibitedActivities: React.FC = () => {
  const prohibitedCategories = [
    {
      title: 'Drogas e Substâncias Ilegais',
      items: [
        'Narcóticos e substâncias controladas',
        'Parapetrechos para drogas',
        'Substâncias que imitam drogas ilegais',
        'Farmácias on-line não licenciadas',
        'Esteroides anabolizantes e peptídeos'
      ],
      icon: Skull,
      color: 'text-red-500'
    },
    {
      title: 'Armas e Munições',
      items: [
        'Armas de fogo e peças de armas',
        'Munições e explosivos',
        'Armas brancas proibidas por lei',
        'Equipamentos militares restritos',
        'Tecnologia de defesa de uso duplo'
      ],
      icon: Ban,
      color: 'text-red-500'
    },
    {
      title: 'Conteúdo Adulto',
      items: [
        'Pornografia e materiais sexualmente explícitos',
        'Serviços de acompanhantes e prostituição',
        'Plataformas de live cam adultas',
        'Conteúdo de exploração sexual',
        'Marketing adulto não solicitado'
      ],
      icon: Ghost,
      color: 'text-red-500'
    },
    {
      title: 'Bens Falsificados e Pirataria',
      items: [
        'Réplicas de bens de luxo',
        'Software pirata e chaves de ativação',
        'Streaming ilegal de conteúdo',
        'Documentos falsos ou alterados',
        'Quebra de propriedade intelectual'
      ],
      icon: Gavel,
      color: 'text-red-500'
    },
    {
      title: 'Atividades Financeiras Ilegais',
      items: [
        'Lavagem de dinheiro e financiamento ao terrorismo',
        'Serviços de mixagem de criptomoedas',
        'MSBs (Money Service Businesses) não licenciados',
        'Esquemas de pirâmide e marketing multinível (MLM)',
        'Evasão de sanções internacionais'
      ],
      icon: Wallet,
      color: 'text-red-500'
    },
    {
      title: 'Outras Atividades Proibidas',
      items: [
        'Tráfico humano e exploração laboral',
        'Venda de seguidores e "likes" em redes sociais',
        'Serviços de hacking e acesso não autorizado',
        'Jogos de azar não licenciados ou proibidos',
        'Esquemas de "fique rico rápido"'
      ],
      icon: FileWarning,
      color: 'text-red-500'
    }
  ];

  const highRiskCategories = [
    {
      title: 'Jogos de Azar Licenciados',
      description: 'Cassinos on-line, apostas esportivas e loterias licenciadas exigem aprovação especial e EDD.',
      icon: Landmark
    },
    {
      title: 'Metais e Pedras Preciosas',
      description: 'Negociação de ouro, diamantes e outros bens de alto valor requer verificação de origem.',
      icon: Info
    },
    {
      title: 'Entidades Sem Fins Lucrativos',
      description: 'Certas ONGs e instituições de caridade podem ser classificadas como alto risco devido ao fluxo de fundos.',
      icon: Search
    },
    {
      title: 'Organizações Políticas e PEPs',
      description: 'Pessoas Politicamente Expostas e partidos políticos estão sujeitos a monitoramento aprimorado.',
      icon: ShieldAlert
    }
  ];

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Atividades Proibidas</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Atividades <span className="text-red-500">Proibidas</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-12 max-w-3xl">
            Para manter a integridade de nossa plataforma e cumprir com as regulamentações globais de conformidade, a Bc1 restringe estritamente o uso de seus serviços para determinadas categorias de negócios e atividades.
          </p>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Ban className="w-6 h-6 text-red-500" />
              Categorias de Negócios Proibidas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prohibitedCategories.map((category, i) => (
                <div key={i} className="bg-bc1-card border border-bc1-border p-6 rounded-2xl hover:border-red-500/30 transition-all">
                  <div className={`flex items-center gap-3 mb-4 font-bold ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                    <h3 className="text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="text-sm text-bc1-textMuted flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-red-500/50 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              Categorias de Alto Risco (Requerem EDD)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highRiskCategories.map((category, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-sm text-bc1-textMuted leading-relaxed">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-3xl mb-12">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" />
              Consequências de Violação
            </h2>
            <p className="text-sm text-bc1-textMuted leading-relaxed mb-4">
              A tentativa de usar os serviços da Bc1 para qualquer uma das atividades proibidas listadas acima resultará em ação imediata, que pode incluir:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Suspensão ou cancelamento imediato da conta',
                'Bloqueio de transações e congelamento de fundos',
                'Rejeição permanente de novos registros',
                'Relatório obrigatório às autoridades policiais e reguladoras',
                'Multas administrativas adicionais'
              ].map((item, i) => (
                <li key={i} className="text-sm text-white/80 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
            <h2 className="text-xl font-bold text-white mb-4">Relatando Violações</h2>
            <p className="text-sm text-bc1-textMuted leading-relaxed mb-6">
              Se você identificar que nossos serviços estão sendo usados para fins ilegais ou atividades proibidas, ou se tiver dúvidas sobre se seu negócio é elegível para usar a Bc1, entre em contato imediatamente com nossa equipe de conformidade.
            </p>
            <a
              href="mailto:compliance@bc1.global"
              className="inline-flex items-center gap-2 text-bc1-lime font-bold hover:underline"
            >
              compliance@bc1.global
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ProhibitedActivities;
