import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle2, ChevronRight, AlertTriangle, ShieldAlert, CreditCard, Clock } from 'lucide-react';
import { Footer } from './components/Footer';

const SupportedCountries: React.FC = () => {
  const riskClassifications = [
    {
      title: 'Suportado',
      description: 'A Bc1 fornece serviços nestas jurisdições sob procedimentos padrão de monitoramento e controle de conformidade.',
      icon: CheckCircle2,
      color: 'text-bc1-lime'
    },
    {
      title: 'Alto Risco (EDD Necessário)',
      description: 'A Bc1 pode fornecer serviços nestas jurisdições, sujeitos a Due Diligence Aprimorada (EDD), verificação adicional e aprovação explícita do Oficial de Conformidade. Aplicam-se limites e monitoramento mais rigorosos.',
      icon: AlertTriangle,
      color: 'text-yellow-500'
    },
    {
      title: 'Proibido',
      description: 'A Bc1 não aceitará usuários ou fornecerá serviços para estas jurisdições. Qualquer atividade detectada ou roteada através destes países pode resultar no cancelamento imediato, bloqueio ou congelamento da conta.',
      icon: ShieldAlert,
      color: 'text-red-500'
    }
  ];

  const countries = [
    { name: 'Argentina', rail: 'ACH/Local', currency: 'ARS', risk: 'Suportado' },
    { name: 'Brasil', rail: 'PIX/Local', currency: 'BRL', risk: 'Suportado' },
    { name: 'Chile', rail: 'Local', currency: 'CLP', risk: 'Suportado' },
    { name: 'Colômbia', rail: 'Local', currency: 'COP', risk: 'Suportado' },
    { name: 'Costa Rica', rail: 'Local', currency: 'CRC', risk: 'Suportado' },
    { name: 'El Salvador', rail: 'Local', currency: 'USD', risk: 'Suportado' },
    { name: 'Estados Unidos', rail: 'ACH/Wire', currency: 'USD', risk: 'Suportado' },
    { name: 'Guatemala', rail: 'Local', currency: 'GTQ', risk: 'Suportado' },
    { name: 'Honduras', rail: 'Local', currency: 'HNL', risk: 'Suportado' },
    { name: 'México', rail: 'SPEI', currency: 'MXN', risk: 'Suportado' },
    { name: 'Panamá', rail: 'Local', currency: 'USD', risk: 'Suportado' },
    { name: 'Peru', rail: 'Local', currency: 'PEN', risk: 'Suportado' },
    { name: 'República Dominicana', rail: 'Local', currency: 'DOP', risk: 'Suportado' },
    { name: 'Uruguai', rail: 'Local', currency: 'UYU', risk: 'Suportado' },
    // High Risk
    { name: 'Albânia', rail: 'SWIFT', currency: 'ALL', risk: 'Alto Risco' },
    { name: 'Barbados', rail: 'SWIFT', currency: 'BBD', risk: 'Alto Risco' },
    { name: 'Bulgária', rail: 'Local/SWIFT', currency: 'BGN', risk: 'Alto Risco' },
    { name: 'Burkina Faso', rail: 'SWIFT', currency: 'XOF', risk: 'Alto Risco' },
    { name: 'Camarões', rail: 'SWIFT', currency: 'XAF', risk: 'Alto Risco' },
    { name: 'Croácia', rail: 'Local/SWIFT', currency: 'EUR', risk: 'Alto Risco' },
    { name: 'Egito', rail: 'SWIFT', currency: 'EGP', risk: 'Alto Risco' },
    { name: 'Emirados Árabes Unidos', rail: 'SWIFT', currency: 'AED', risk: 'Alto Risco' },
    { name: 'Filipinas', rail: 'SWIFT', currency: 'PHP', risk: 'Alto Risco' },
    { name: 'Gibraltar', rail: 'SWIFT', currency: 'GIP', risk: 'Alto Risco' },
    { name: 'Haiti', rail: 'SWIFT', currency: 'HTG', risk: 'Alto Risco' },
    { name: 'Ilhas Cayman', rail: 'SWIFT', currency: 'KYD', risk: 'Alto Risco' },
    { name: 'Jamaica', rail: 'SWIFT', currency: 'JMD', risk: 'Alto Risco' },
    { name: 'Jordânia', rail: 'SWIFT', currency: 'JOD', risk: 'Alto Risco' },
    { name: 'Quênia', rail: 'SWIFT', currency: 'KES', risk: 'Alto Risco' },
    { name: 'Mali', rail: 'SWIFT', currency: 'XOF', risk: 'Alto Risco' },
    { name: 'Mônaco', rail: 'Local/SWIFT', currency: 'EUR', risk: 'Alto Risco' },
    { name: 'Moçambique', rail: 'SWIFT', currency: 'MZN', risk: 'Alto Risco' },
    { name: 'Namíbia', rail: 'SWIFT', currency: 'NAD', risk: 'Alto Risco' },
    { name: 'Nigéria', rail: 'SWIFT', currency: 'NGN', risk: 'Alto Risco' },
    { name: 'Senegal', rail: 'SWIFT', currency: 'XOF', risk: 'Alto Risco' },
    { name: 'África do Sul', rail: 'SWIFT', currency: 'ZAR', risk: 'Alto Risco' },
    { name: 'Tanzânia', rail: 'SWIFT', currency: 'TZS', risk: 'Alto Risco' },
    { name: 'Turquia', rail: 'SWIFT', currency: 'TRY', risk: 'Alto Risco' },
    { name: 'Uganda', rail: 'SWIFT', currency: 'UGX', risk: 'Alto Risco' },
    { name: 'Vietnã', rail: 'SWIFT', currency: 'VND', risk: 'Alto Risco' },
  ];

  const prohibitedCountries = [
    'Afeganistão', 'Bielorrússia', 'Birmânia (Myanmar)', 'República Centro-Africana', 'Congo (Rep. Dem.)',
    'Crimeia, Donetsk, Luhansk', 'Cuba', 'Eritreia', 'Etiópia', 'Guiné-Bissau', 'Irã', 'Iraque', 'Líbano',
    'Líbia', 'Coreia do Norte', 'Rússia', 'Somália', 'Sudão do Sul', 'Sudão', 'Síria', 'Venezuela', 'Iêmen', 'Zimbábue'
  ];

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Países Suportados</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Países <span className="text-bc1-lime">Suportados</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-12 max-w-3xl">
            Revise os países e redes de pagamento suportados pela Bc1. Nossas classificações de risco são baseadas em nosso apetite de risco, requisitos de bancos parceiros e regimes de sanções aplicáveis, incluindo OFAC, UE, ONU e GAFI.
          </p>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Globe className="w-6 h-6 text-bc1-lime" />
              Classificações de Risco
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {riskClassifications.map((item, i) => (
                <div key={i} className="bg-bc1-card border border-bc1-border p-6 rounded-2xl">
                  <div className={`flex items-center gap-2 mb-4 font-bold ${item.color}`}>
                    <item.icon className="w-5 h-5 font-bold" />
                    {item.title}
                  </div>
                  <p className="text-sm text-bc1-textMuted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-bc1-lime" />
              Classificação por País e Redes
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-bc1-card rounded-2xl overflow-hidden border border-bc1-border">
                <thead>
                  <tr className="bg-white/5 border-b border-bc1-border">
                    <th className="px-6 py-4 font-bold text-sm">País</th>
                    <th className="px-6 py-4 font-bold text-sm">Rede Principal</th>
                    <th className="px-6 py-4 font-bold text-sm">Moeda</th>
                    <th className="px-6 py-4 font-bold text-sm text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bc1-border">
                  {countries.map((country, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">{country.name}</td>
                      <td className="px-6 py-4 text-sm text-bc1-textMuted">{country.rail}</td>
                      <td className="px-6 py-4 text-sm text-bc1-textMuted">{country.currency}</td>
                      <td className="px-6 py-4 text-sm text-right">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          country.risk === 'Suportado'
                            ? 'bg-bc1-lime/10 text-bc1-lime'
                            : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {country.risk}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              Jurisdições Proibidas
            </h2>
            <div className="bg-bc1-card border border-bc1-border p-8 rounded-3xl">
              <p className="text-bc1-textMuted mb-8 text-sm leading-relaxed">
                A Bc1 revisa estas listas pelo menos trimestralmente e as atualiza sempre que ocorrem mudanças regulatórias ou de sanções, para que você sempre tenha as informações mais atuais.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {prohibitedCountries.map((country, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-bc1-textLow opacity-60">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bc1-lime/5 border border-bc1-lime/20 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-bc1-lime" />
                <h3 className="text-lg font-bold text-white">Métodos de Pagamento Suportados</h3>
              </div>
              <p className="text-sm text-bc1-textMuted leading-relaxed">
                Suportamos transferências bancárias nos países listados acima. Para cada jurisdição, utilizamos redes de pagamento locais (como PIX no Brasil, SPEI no México ou ACH nos EUA) para garantir os tempos de processamento mais rápidos e a maior confiabilidade.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-bc1-lime" />
                <h3 className="text-lg font-bold text-white">Tempos de Processamento e SLA</h3>
              </div>
              <p className="text-sm text-bc1-textMuted leading-relaxed">
                A maioria das transferências domésticas é processada em minutos (PIX/SPEI) ou em até 1 dia útil (ACH). Liquidações SWIFT internacionais normalmente são concluídas em 1 a 3 dias úteis.
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportedCountries;
