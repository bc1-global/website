import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Scale, CheckCircle2, XCircle, ChevronRight, Info } from 'lucide-react';
import { Footer } from './components/Footer';

const Transparency: React.FC = () => {
  return (
    <div className="min-h-screen bg-bc1-dark text-white font-sans selection:bg-bc1-lime selection:text-black">
      <main className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="flex items-center gap-2 text-sm text-bc1-textMuted mb-12">
          <a href="/" className="hover:text-bc1-lime transition-colors">Início</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">Transparência</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-bc1-lime/10 text-bc1-lime text-[10px] font-bold uppercase tracking-wider mb-6 border border-bc1-lime/20">
            Compliance Institucional
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
            Compromisso com a <br />
            <span className="text-bc1-lime">Transparência</span>
          </h1>
          <p className="text-xl text-bc1-textMuted leading-relaxed mb-16">
            Para nós, transparência não é apenas um valor, é a base da nossa arquitetura tecnológica. Entenda exatamente o papel da BC1 e como seus ativos são tratados.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-bc1-card border border-bc1-border p-10 rounded-[2.5rem] border-t-4 border-t-bc1-lime">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-bc1-lime" />
                <h3 className="text-xl font-bold">O que a BC1 é</h3>
              </div>
              <ul className="space-y-4 text-sm text-bc1-textMuted">
                <li>• Um provedor de tecnologia e software.</li>
                <li>• Uma interface de licenciamento para blockchain.</li>
                <li>• Uma camada de experiência para autocustódia.</li>
                <li>• Uma ferramenta de acesso a parceiros globais.</li>
              </ul>
            </div>
            <div className="bg-bc1-card border border-bc1-border p-10 rounded-[2.5rem] border-t-4 border-t-red-500/50">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold">O que a BC1 não é</h3>
              </div>
              <ul className="space-y-4 text-sm text-bc1-textMuted">
                <li>• Não somos um banco ou instituição financeira.</li>
                <li>• Não somos uma exchange ou corretora.</li>
                <li>• Não somos custodiantes de ativos.</li>
                <li>• Não somos executores de ordens discricionárias.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-16">
            <section className="bg-bc1-card border border-bc1-border p-10 rounded-[2.5rem]">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-bc1-lime" />
                Tratamento de Ativos
              </h2>
              <p className="text-bc1-textMuted leading-relaxed mb-6">
                A BC1 não recebe, não mantém e não movimenta ativos de usuários em contas próprias. Todos os ativos permanecem sob autocustódia do usuário diretamente na blockchain. Nosso software apenas fornece a interface para que você interaja com seus próprios ativos.
              </p>
              <div className="p-6 bg-bc1-lime/5 rounded-2xl border border-bc1-lime/20 flex items-start gap-4">
                <Info className="w-5 h-5 text-bc1-lime shrink-0 mt-0.5" />
                <p className="text-xs text-bc1-textMuted leading-relaxed">
                  Juridicamente, fornecemos o acesso a uma ferramenta tecnológica para uso autônomo. O usuário é o único responsável pela guarda de suas chaves e autorização de transações.
                </p>
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Papel do Software</h3>
                <p className="text-sm text-bc1-textMuted leading-relaxed">
                  Fornecer a interface gráfica, as ferramentas de comunicação com a rede blockchain e a integração técnica com parceiros de serviço.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Papel do Usuário</h3>
                <p className="text-sm text-bc1-textMuted leading-relaxed">
                  Manter a segurança física e digital de suas chaves privadas e frases de recuperação, além de revisar e autorizar cada transação.
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Transparency;
