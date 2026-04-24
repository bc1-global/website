export interface Article {
  id: string;
  title: string;
  content: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  articles: Article[];
}

export const HELP_DATA: Category[] = [
  {
    id: 'comecando',
    title: 'Começando na Bc1 Global',
    description: 'Tudo o que você precisa saber para dar os primeiros passos na nova economia global.',
    icon: 'Smartphone',
    articles: [
      {
        id: 'como-criar-conta',
        title: 'Como criar minha conta na Bc1 Global?',
        content: `# Como criar minha conta na Bc1 Global?

Criar sua conta na Bc1 Global é simples, rápido e seguro. Siga os passos abaixo:

1. **Baixe o App**: O primeiro passo é baixar nosso aplicativo oficial disponível na App Store ou Google Play.
2. **Inicie o Cadastro**: Ao abrir o app, clique em "Criar minha conta".
3. **E-mail e Dados**: Insira seu e-mail principal. Você receberá um código de verificação para garantir a segurança do acesso.
4. **Verificação de Identidade (KYC)**: Como somos uma interface tecnológica que integra com parceiros financeiros regulados, você precisará enviar uma foto de um documento oficial (RG, CNH ou Passaporte) e uma selfie.
5. **Criação da Carteira**: Durante o processo, sua carteira Bc1 Global será gerada localmente no seu dispositivo. **Atenção**: É neste momento que sua frase de recuperação (Seed Phrase) é gerada. Guarde-a com segurança máxima!

Pronto! Após a validação dos seus documentos, sua conta estará ativa para uso.`
      },
      {
        id: 'verificacao-identidade',
        title: 'Por que preciso verificar minha identidade?',
        content: `# Por que preciso verificar minha identidade?

Na Bc1 Global, levamos a segurança e a conformidade muito a sério. Embora sejamos uma plataforma de autocustódia, nosso ecossistema integra com parceiros que permitem a conversão de moedas tradicionais (como o Real) para ativos digitais (como USDC e USDT).

A verificação de identidade é necessária para:

- **Prevenir fraudes**: Garantir que você é realmente quem diz ser.
- **Conformidade regulatória**: Atender às normas globais de prevenção à lavagem de dinheiro (AML) e financiamento ao terrorismo.
- **Acesso a rampas de entrada/saída**: Nossos parceiros bancários exigem essa validação para processar seus depósitos via Pix.

Seus dados são protegidos por criptografia de ponta e nunca são vendidos para terceiros.`
      }
    ]
  },
  {
    id: 'saldo-depósitos',
    title: 'Depósitos e Saldo',
    description: 'Saiba como adicionar saldo na sua conta e como gerenciar seus ativos digitais.',
    icon: 'Wallet',
    articles: [
      {
        id: 'como-depositar-pix',
        title: 'Como depositar via Pix?',
        content: `# Como depositar via Pix?

Adicionar saldo na Bc1 Global é instantâneo via Pix. Veja como fazer:

1. Na tela inicial do App, clique em **"Adicionar Saldo"**.
2. Escolha o valor em Reais que deseja depositar.
3. A Bc1 Global mostrará a cotação atualizada do dólar digital (USDC/USDT).
4. Clique em **"Continuar"** para gerar a chave Pix ou o QR Code.
5. Abra o app do seu banco tradicional e realize o pagamento.

Assim que o Pix for confirmado, o valor será automaticamente convertido para o ativo digital escolhido e aparecerá no seu saldo em segundos.`
      },
      {
        id: 'tempo-processamento',
        title: 'Qual o tempo de processamento dos depósitos?',
        content: `# Qual o tempo de processamento dos depósitos?

Os depósitos realizados via **Pix** na Bc1 Global são processados em **tempo real**, geralmente levando menos de 30 segundos para serem refletidos em sua carteira digital.

**Observações Importantes:**
- O Pix deve vir de uma conta bancária de **mesma titularidade** (mesmo CPF) que a sua conta Bc1 Global.
- Depósitos de contas de terceiros podem levar até 5 dias úteis para serem estornados e não serão creditados em sua conta.`
      }
    ]
  },
  {
    id: 'seguranca-tecnologia',
    title: 'Segurança e Tecnologia',
    description: 'Entenda como protegemos seus ativos e o que significa autocustódia.',
    icon: 'Shield',
    articles: [
      {
        id: 'o-que-e-autocustodia',
        title: 'O que é autocustódia?',
        content: `# O que é autocustódia?

A autocustódia é o pilar central da Bc1 Global. Diferente de um banco ou uma corretora (Exchange), onde eles detêm seu dinheiro e você tem um "I.O.U." (uma promessa de pagamento), na autocustódia **você** é o único dono do seu dinheiro.

- **Sua Chave, Seu Dinheiro**: A Bc1 Global não tem acesso aos seus fundos.
- **Independência**: Você pode movimentar seus ativos sem pedir permissão a ninguém.
- **Responsabilidade**: Como ninguém além de você tem as chaves, você é responsável por guardá-las com segurança.

Usamos a infraestrutura da blockchain para garantir que suas transações sejam imutáveis e transparentes.`
      },
      {
        id: 'frase-recuperacao',
        title: 'A importância da Frase de Recuperação',
        content: `# A importância da Frase de Recuperação

Sua frase de recuperação (ou *seed phrase*) é a chave mestra da sua conta. Ela é composta por 12 ou 24 palavras geradas aleatoriamente no seu dispositivo.

**Regras de Ouro:**
1. **Nunca compartilhe**: Quem tiver essa frase tem acesso total ao seu dinheiro. Nenhum funcionário da Bc1 Global jamais pedirá essa frase.
2. **Guarde offline**: Não salve em fotos, e-mails ou nuvens. Escreva em um papel e guarde em um local físico seguro.
3. **Backup**: Se você perder o celular e não tiver a frase, o saldo será perdido para sempre. A Bc1 Global **não pode** recuperar sua frase ou sua conta para você.`
      }
    ]
  },
  {
    id: 'cartao-pessoal',
    title: 'Cartão Bc1 Global',
    description: 'Use seu saldo ao redor do mundo com o cartão físico ou virtual.',
    icon: 'CreditCard',
    articles: [
      {
        id: 'como-solicitar-cartao',
        title: 'Como solicitar meu cartão?',
        content: `# Como solicitar meu cartão Bc1 Global?

Você pode ter um cartão internacional para usar seu saldo em milhões de estabelecimentos.

1. No menu inferior do App, acesse a aba **"Cartão"**.
2. Se desejar usar imediatamente, escolha **"Ativar Cartão Virtual"**. Ele ficará disponível para compras online em poucos minutos.
3. Se desejar o cartão físico, clique em **"Solicitar Cartão Físico"**.
4. Confirme seu endereço de entrega.
5. O prazo de entrega varia de 7 a 15 dias úteis, dependendo da sua região.

O cartão Bc1 Global funciona na modalidade crédito, mas debita automaticamente o seu saldo em dólar digital (USDC/USDT).`
      }
    ]
  }
];
