import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Globe, 
  UserCheck, 
  HelpCircle, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Phone, 
  Eye, 
  FileText, 
  Server, 
  Database, 
  AlertCircle, 
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { Footer } from './components/Footer';

const Privacy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('quem-somos');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Política de Privacidade | BC1 - Autocustódia e Liberdade Digital";
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'quem-somos';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id') || 'quem-somos';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'quem-somos', title: '1. Quem Somos', icon: <Globe className="w-4 h-4" /> },
    { id: 'dados-coletados', title: '2. Dados Coletados', icon: <Database className="w-4 h-4" /> },
    { id: 'como-usamos', title: '3. Como Usamos', icon: <Lock className="w-4 h-4" /> },
    { id: 'base-legal', title: '4. Base Legal', icon: <FileText className="w-4 h-4" /> },
    { id: 'compartilhamento', title: '5. Compartilhamento', icon: <ExternalLink className="w-4 h-4" /> },
    { id: 'parceiros', title: '6. Parceiros', icon: <ExternalLink className="w-4 h-4" /> },
    { id: 'blockchain', title: '7. Blockchain', icon: <Database className="w-4 h-4" /> },
    { id: 'cookies', title: '8. Cookies', icon: <Eye className="w-4 h-4" /> },
    { id: 'rastreamento', title: '9. Rastreamento', icon: <Eye className="w-4 h-4" /> },
    { id: 'armazenamento', title: '10. Armazenamento', icon: <Database className="w-4 h-4" /> },
    { id: 'seguranca', title: '11. Segurança', icon: <Shield className="w-4 h-4" /> },
    { id: 'transferencia', title: '12. Transferência Internacional', icon: <Globe className="w-4 h-4" /> },
    { id: 'direitos', title: '13. Direitos do Usuário', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'exclusao', title: '14. Exclusão de Conta', icon: <X className="w-4 h-4" /> },
    { id: 'menores', title: '15. Menores de Idade', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'alteracoes', title: '16. Alterações', icon: <FileText className="w-4 h-4" /> },
    { id: 'contato', title: '17. Contato', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      {/* Mobile Sidebar Toggle (Floating) */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-[70] w-14 h-14 bg-bc1-lime text-black rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-95"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[65] lg:hidden bg-bc1-darker pt-24 px-6 overflow-y-auto"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-bc1-textMuted mb-6">Navegação da Política</p>
            <div className="space-y-1 pb-20">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === section.id 
                      ? 'bg-bc1-lime/10 text-bc1-lime border border-bc1-lime/20' 
                      : 'text-bc1-textMuted hover:bg-white/5'
                  }`}
                >
                  {section.icon}
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        {/* Breadcrumbs - Picnic Style */}
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="hover:text-bc1-lime cursor-pointer transition-colors">Central de Ajuda</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Política de Privacidade</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Desktop Sidebar Navigation - Refined Picnic Style */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-[calc(100vh-160px)] overflow-y-auto pr-4 scrollbar-hide border-r border-bc1-border/50">
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-bc1-textMuted mb-4">Nesta seção</h3>
              <div className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`block py-2 text-sm transition-all ${
                      activeSection === section.id 
                        ? 'text-bc1-lime font-bold' 
                        : 'text-bc1-textMuted hover:text-white'
                    }`}
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="pt-8 border-t border-bc1-border/50">
              <h3 className="text-xs font-bold uppercase tracking-widest text-bc1-textMuted mb-4">Artigos Relacionados</h3>
              <ul className="space-y-3">
                {['Termos de Uso', 'Segurança da Conta', 'Como funciona o KYC'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-bc1-textMuted hover:text-bc1-lime transition-colors flex items-center gap-2">
                      <FileText className="w-3 h-3" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-16">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
                  Privacidade e Transparência
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
                  Política de <br />
                  <span className="text-bc1-lime">Privacidade</span>
                </h1>
                <p className="text-xl text-bc1-textMuted leading-relaxed max-w-2xl mb-8">
                  A BC1 respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais. Esta Política explica como coletamos, usamos e protegemos suas informações.
                </p>
                <div className="flex items-center gap-4 text-sm text-bc1-textMuted font-medium">
                  <span>Versão 2.1</span>
                  <span className="w-1 h-1 rounded-full bg-bc1-border" />
                  <span>Atualizado em 11 de Abril de 2026</span>
                </div>
              </div>

              {/* Picnic-style Summary Table */}
              <div className="mb-24 overflow-hidden rounded-[2rem] border border-bc1-border bg-bc1-card">
                <div className="p-8 border-b border-bc1-border bg-white/5">
                  <h2 className="text-xl font-bold text-white">Resumo da Política</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-bc1-border">
                  <div className="p-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-bc1-lime mb-3">O que coletamos</p>
                    <p className="text-sm text-bc1-textMuted leading-relaxed">Dados de cadastro, uso do app, informações do dispositivo e transações blockchain.</p>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-bc1-lime mb-3">Por que coletamos</p>
                    <p className="text-sm text-bc1-textMuted leading-relaxed">Para operar o app, processar transações, prevenir fraudes e cumprir obrigações legais.</p>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-bc1-lime mb-3">Com quem compartilhamos</p>
                    <p className="text-sm text-bc1-textMuted leading-relaxed">Parceiros de tecnologia, financeiros e autoridades (apenas o necessário).</p>
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-bc1-lime mb-3">Seus Direitos</p>
                    <p className="text-sm text-bc1-textMuted leading-relaxed">Acessar, corrigir, excluir dados e revogar consentimento a qualquer momento.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-24">
                {/* 1. Quem Somos */}
                <section id="quem-somos" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">1. Quem Somos</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Somos a plataforma BC1, operada pela Brp2pcripto LTDA, focada em sua liberdade financeira.</p>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none text-bc1-textMuted leading-relaxed">
                    <p>
                      A BC1 é uma plataforma baseada em blockchain, com foco em autocustódia e uso prático de ativos virtuais no dia a dia.
                    </p>
                    <div className="bg-bc1-card p-6 rounded-2xl border border-bc1-border space-y-2">
                      <p className="text-sm"><strong className="text-white">Responsável pela operação:</strong> Brp2pcripto LTDA</p>
                      <p className="text-sm"><strong className="text-white">E-mail:</strong> contato@bc1.global</p>
                      <p className="text-sm"><strong className="text-white">Site:</strong> www.bc1.global</p>
                    </div>
                  </div>
                </section>

                {/* 2. Quais dados podemos coletar */}
                <section id="dados-coletados" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">2. Quais dados podemos coletar</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Coletamos dados que você nos dá (nome, e-mail), dados do seu celular e informações das suas transações.</p>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">2.1 Dados fornecidos por você</h3>
                      <p className="text-bc1-textMuted mb-4">Nome completo, e-mail, telefone, data de nascimento, documentos de identificação, selfie (KYC) e informações de suporte.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">2.2 Dados de uso e dispositivo</h3>
                      <p className="text-bc1-textMuted mb-4">Identificadores do dispositivo, IP, sistema operacional, modelo, idioma, versão do app e logs de navegação/falhas.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">2.3 Dados financeiros e transacionais</h3>
                      <p className="text-bc1-textMuted mb-4">Transações no app, endereços de carteira blockchain, histórico financeiro e status de operações.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">2.4 Dados de parceiros</h3>
                      <p className="text-bc1-textMuted mb-4">Status de cadastro em parceiros, confirmações de pagamento e dados operacionais de serviços integrados.</p>
                    </div>
                  </div>
                </section>

                {/* 3. Como usamos seus dados */}
                <section id="como-usamos" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">3. Como usamos seus dados</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Usamos seus dados para fazer o app funcionar, processar seus pagamentos, te dar suporte e manter tudo seguro.</p>
                  </div>
                  <ul className="grid gap-4 md:grid-cols-2">
                    {[
                      'Administrar sua conta e autenticação',
                      'Processar operações e transações',
                      'Prestar suporte e atendimento',
                      'Melhorar desempenho e estabilidade',
                      'Prevenir fraudes e atividades ilícitas',
                      'Cumprir obrigações legais e regulatórias',
                      'Integrar serviços de parceiros'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 p-4 bg-bc1-card rounded-xl border border-bc1-border">
                        <div className="w-1.5 h-1.5 rounded-full bg-bc1-lime shrink-0" />
                        <span className="text-sm text-bc1-textMuted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* 4. Base legal */}
                <section id="base-legal" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">4. Base legal para tratamento</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Tratamos seus dados porque precisamos cumprir o contrato com você, seguir leis ou por legítimo interesse.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed mb-6">
                    O tratamento ocorre com base na execução de contrato, cumprimento de obrigação legal, legítimo interesse, proteção ao crédito e consentimento.
                  </p>
                </section>

                {/* 5. Compartilhamento */}
                <section id="compartilhamento" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">5. Compartilhamento de dados</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Só compartilhamos o necessário com parceiros técnicos, financeiros ou se a justiça exigir. Não vendemos seus dados.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Compartilhamos dados estritamente necessários com prestadores de tecnologia, parceiros financeiros, fornecedores de compliance e autoridades públicas quando exigido por lei.
                  </p>
                </section>

                {/* 6. Parceiros */}
                <section id="parceiros" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">6. Parceiros e serviços de terceiros</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Integramos serviços de parceiros (como KYC e pagamentos). Eles têm suas próprias regras de privacidade.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Integramos soluções para autenticação, verificação de identidade, processamento de pagamentos e suporte. Estes terceiros podem tratar dados conforme suas próprias políticas.
                  </p>
                </section>

                {/* 7. Blockchain */}
                <section id="blockchain" className="scroll-mt-32 border-l-4 border-bc1-lime pl-8 py-2">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">7. Blockchain e Transparência Pública</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Transações em blockchain são públicas por natureza. Endereços de carteira e hashes de transação são visíveis para qualquer pessoa na rede.</p>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none text-bc1-textMuted leading-relaxed space-y-4">
                    <p>
                      Ao utilizar a BC1, você interage com redes blockchain públicas. Devido à natureza descentralizada e imutável dessas redes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Visibilidade:</strong> Endereços de carteira e detalhes de transações são registrados permanentemente e podem ser visualizados via exploradores de blocos.</li>
                      <li><strong className="text-white">Imutabilidade:</strong> Uma vez confirmada, uma transação não pode ser alterada ou excluída pela BC1 ou por qualquer outra entidade.</li>
                      <li><strong className="text-white">Autocustódia:</strong> Você é o único responsável pela segurança de suas chaves privadas. A BC1 não tem acesso aos seus ativos.</li>
                    </ul>
                  </div>
                  <div className="mt-8 p-6 bg-bc1-lime/5 rounded-2xl border border-bc1-lime/20 text-bc1-lime text-sm font-medium flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Lembre-se: o que acontece na blockchain, fica na blockchain. A BC1 não possui controle sobre os dados registrados diretamente na rede.</p>
                  </div>
                </section>

                {/* 8. Cookies */}
                <section id="cookies" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">8. Cookies e identificadores</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Usamos pequenos arquivos (cookies) para manter você logado e entender o uso do app.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Usamos cookies, SDKs e identificadores para autenticação, segurança, analytics e diagnóstico de performance.
                  </p>
                </section>

                {/* 9. Rastreamento */}
                <section id="rastreamento" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">9. Rastreamento e publicidade</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Não rastreamos você em outros sites para te mostrar propagandas.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    A BC1 não realiza rastreamento de usuários entre apps e sites de terceiros para publicidade personalizada.
                  </p>
                </section>

                {/* 10. Armazenamento */}
                <section id="armazenamento" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">10. Armazenamento e retenção</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Guardamos seus dados pelo tempo que a lei manda ou enquanto você for nosso cliente.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Seus dados são mantidos pelo tempo necessário para cumprir as finalidades descritas, obrigações legais, regulatórias e prevenção à fraude.
                  </p>
                </section>

                {/* 11. Segurança */}
                <section id="seguranca" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">11. Segurança da Informação</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Usamos criptografia de ponta, autenticação de dois fatores e monitoramento constante para manter seus dados seguros.</p>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none text-bc1-textMuted leading-relaxed space-y-4">
                    <p>
                      A segurança é o pilar central da BC1. Implementamos medidas técnicas e organizacionais rigorosas:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-white">Criptografia:</strong> Todos os dados sensíveis são criptografados em repouso e em trânsito (TLS/SSL).</li>
                      <li><strong className="text-white">Autenticação:</strong> Suporte a Biometria e Autenticação de Dois Fatores (2FA) para acesso ao aplicativo.</li>
                      <li><strong className="text-white">Segregação de Dados:</strong> Armazenamento isolado de dados de identificação (KYC) e dados operacionais.</li>
                      <li><strong className="text-white">Auditorias:</strong> Realizamos revisões periódicas de segurança e testes de vulnerabilidade.</li>
                    </ul>
                  </div>
                </section>

                {/* 12. Transferência Internacional */}
                <section id="transferencia" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">12. Transferência internacional</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Seus dados podem ser guardados em servidores seguros fora do Brasil (nuvem).</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Dados podem ser processados em servidores fora do Brasil (nuvem), sempre observando medidas de proteção adequadas à legislação.
                  </p>
                </section>

                {/* 13. Direitos */}
                <section id="direitos" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">13. Direitos do usuário</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Você manda nos seus dados. Pode ver, corrigir ou pedir para apagar o que a lei permitir.</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {[
                      'Acesso e confirmação de tratamento',
                      'Correção de dados inexatos',
                      'Eliminação ou anonimização',
                      'Portabilidade de dados',
                      'Revogação de consentimento',
                      'Oposição ao tratamento'
                    ].map((direito, i) => (
                      <div key={i} className="flex items-center gap-3 p-5 bg-bc1-card rounded-2xl border border-bc1-border">
                        <div className="w-6 h-6 rounded-full bg-bc1-lime/10 flex items-center justify-center text-bc1-lime shrink-0">
                          <UserCheck className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-semibold text-white">{direito}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 14. Exclusão */}
                <section id="exclusao" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">14. Exclusão de conta e dados</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Você pode apagar sua conta no app. Algumas informações ficam guardadas por obrigação legal.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Você pode solicitar a exclusão da conta diretamente no app (Configurações {'>'} Conta) ou via e-mail. Alguns dados podem ser mantidos por obrigação legal.
                  </p>
                </section>

                {/* 15. Menores */}
                <section id="menores" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">15. Crianças e adolescentes</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Nosso app é para maiores de 18 anos.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    O aplicativo não é destinado a menores de 18 anos sem a supervisão adequada.
                  </p>
                </section>

                {/* 16. Alterações */}
                <section id="alteracoes" className="scroll-mt-32">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-2">16. Atualizações desta Política</h2>
                    <p className="text-bc1-lime font-medium text-sm">Resumo: Se mudarmos as regras, avisaremos você.</p>
                  </div>
                  <p className="text-bc1-textMuted text-lg leading-relaxed">
                    Esta política pode ser atualizada. A versão mais recente estará sempre disponível no app e no site oficial.
                  </p>
                </section>

                {/* 17. Contato - Picnic Style "Still need help?" */}
                <section id="contato" className="scroll-mt-32">
                  <div className="border-t border-bc1-border pt-16 mt-16">
                    <div className="text-center mb-12">
                      <p className="text-sm text-bc1-textMuted mb-4">Este artigo foi útil?</p>
                      <div className="flex justify-center gap-4">
                        <button className="px-6 py-2 rounded-full border border-bc1-border hover:border-bc1-lime hover:text-bc1-lime transition-all text-sm font-medium">Sim</button>
                        <button className="px-6 py-2 rounded-full border border-bc1-border hover:border-bc1-lime hover:text-bc1-lime transition-all text-sm font-medium">Não</button>
                      </div>
                      <p className="text-xs text-bc1-textMuted mt-6">25 de 30 pessoas acharam isso útil</p>
                    </div>

                    <div className="bg-bc1-card border border-bc1-border p-10 md:p-12 rounded-3xl relative overflow-hidden">
                      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-2">Ainda precisa de ajuda?</h2>
                          <p className="text-bc1-textMuted text-sm">Nossa equipe de suporte está pronta para te auxiliar com qualquer dúvida.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                          <a href="mailto:contato@bc1.global" className="flex items-center justify-center gap-2 px-6 py-3 bg-bc1-lime text-black rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                            <Mail className="w-4 h-4" />
                            Enviar E-mail
                          </a>
                          <a href="https://www.bc1.global" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-bc1-border text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-colors">
                            <Globe className="w-4 h-4" />
                            Visitar Site
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
