import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { AlertTriangle, ArrowRight, CheckCircle, Shield } from "lucide-react";

type ContextBlock = {
  heading: string;
  body: string;
};

type Trilha = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  urgency?: string;
  whereYouAre: string;
  description: string;
  immediateAction?: string;
  checklist?: string[];
  phrases?: string[];
  contextBlocks: ContextBlock[];
  protocolHref: string;
  protocolLabel: string;
  nextStep: string;
  nextStepHref: string;
  newsletterTag: string;
};

const trilhas: Trilha[] = [
  {
    id: "recuperacao",
    num: "01",
    title: "Estou em recuperação",
    subtitle: "Estrutura para quem está no processo",
    whereYouAre:
      "Você parou — ou está tentando parar — e quer estrutura real para não improvisar o próximo momento difícil.",
    description:
      "Sobriedade não é força de vontade. É sistema. Esta trilha entrega a estrutura básica para atravessar os primeiros dias, semanas e meses sem depender de pico motivacional.",
    immediateAction:
      "Antes de qualquer coisa: leia o Protocolo Escudo 72h. Não porque você está em crise agora — mas para saber o que fazer quando a crise chegar.",
    contextBlocks: [
      {
        heading: "Por que protocolo antes de motivação",
        body: "Motivação varia. Protocolo não. O momento de crise é o pior momento para decidir o que fazer. Por isso você decide antes — e segue quando chegar.",
      },
      {
        heading: "O que esperar dos primeiros 30 dias",
        body: "Os primeiros 30 dias são os de maior risco de recaída. Não por falta de vontade — por falta de estrutura. O objetivo não é nunca ter vontade de beber. É ter o que fazer quando tiver.",
      },
      {
        heading: "Recaída não cancela o progresso",
        body: "Recaída faz parte do processo para a maioria das pessoas. O que determina o resultado não é se você recaiu — é o que você faz na primeira hora depois.",
      },
    ],
    protocolHref: "/protocolos/escudo-72h",
    protocolLabel: "Iniciar Protocolo Escudo 72h",
    nextStep: "Ver todos os Protocolos",
    nextStepHref: "/protocolos",
    newsletterTag: "trilha-recuperacao",
  },
  {
    id: "vontade-hoje",
    num: "02",
    title: "Tive vontade hoje",
    subtitle: "Protocolo para fissura ativa agora",
    urgency:
      "A fissura tem duração previsível. O pico passa em 20 a 40 minutos. O que determina se você atravessa não é força — é o que você faz nesses minutos.",
    whereYouAre:
      "A vontade chegou. Pode ser fissura forte, gatilho ativado ou momento de vulnerabilidade. Você precisa de estrutura agora — não de motivação.",
    description:
      "Este não é o momento de ler. É o momento de agir. Siga o protocolo abaixo.",
    immediateAction: "Acesse o Protocolo Escudo 72h agora. Ele foi feito para este momento.",
    checklist: [
      "Saia do ambiente onde o gatilho está — agora",
      "Beba água. Lentamente.",
      "Coloque um timer de 20 minutos",
      "Durante os 20 minutos: siga o protocolo — não decida nada",
      "Depois dos 20 minutos: registre o que aconteceu",
    ],
    contextBlocks: [
      {
        heading: "Por que 20 minutos",
        body: "A fissura aguda tem um ciclo biológico. O pico de intensidade dura entre 20 e 40 minutos na maioria dos casos. Após o pico, a intensidade cai significativamente. Seu trabalho é atravessar o pico — não resolver o problema.",
      },
      {
        heading: "O que não fazer agora",
        body: "Não tente racionalizar. Não ligue para alguém para 'desabafar' se isso significar ficar no gatilho. Não decida que 'dessa vez vai ser diferente'. Siga o protocolo.",
      },
    ],
    protocolHref: "/protocolos/escudo-72h",
    protocolLabel: "Protocolo Escudo — Agora",
    nextStep: "Ver Estrutura Completa",
    nextStepHref: "/trilhas/recuperacao",
    newsletterTag: "trilha-vontade-hoje",
  },
  {
    id: "familiar",
    num: "03",
    title: "Sou familiar de alguém em recuperação",
    subtitle: "Estrutura para quem cuida sem se perder",
    whereYouAre:
      "Você acompanha alguém em recuperação — cônjuge, filho, irmão, pai. E quer ajudar, mas não sabe como sem se machucar no processo ou sabotar o processo do outro.",
    description:
      "Familiar de alguém em recuperação precisa de estrutura própria. Não para 'salvar' o outro — mas para não se destruir enquanto acompanha.",
    checklist: [
      "Você não pode fazer a sobriedade pelo outro — só apoiar a estrutura",
      "Controle e vigilância geralmente sabotam o processo",
      "Você precisa de perímetro próprio — independente do estado do outro",
      "Culpa não ajuda ninguém — estrutura ajuda",
      "Saber o que fazer em crise do outro é tão importante quanto saber o que não fazer",
    ],
    phrases: [
      '"Vou te vigiar para você não beber"',
      '"Se você me amar, vai parar"',
      '"Você prometeu que dessa vez seria diferente"',
      '"Estou te contando tudo que você perdeu"',
    ],
    contextBlocks: [
      {
        heading: "O que familiares geralmente fazem errado — sem saber",
        body: "Controle, chantagem emocional e resgate são instintivos. E quase sempre pioram o processo. Não por maldade — por falta de estrutura de como ajudar de verdade.",
      },
      {
        heading: "Seu perímetro importa",
        body: "Você precisa definir o que é aceitável para você — independente do estado do outro. Não como punição. Como proteção. Sem perímetro próprio, você se dissolve no processo do outro.",
      },
      {
        heading: "O que fazer quando o outro está em crise",
        body: "Saber o protocolo não é papel de familiar. Facilitar o acesso ao protocolo, sim. Há uma diferença enorme entre as duas posições — e ela protege você e o processo.",
      },
    ],
    protocolHref: "/protocolos",
    protocolLabel: "Ver Protocolo para Familiares",
    nextStep: "Ver todos os Protocolos",
    nextStepHref: "/protocolos",
    newsletterTag: "trilha-familiar",
  },
];

// Frases a evitar — só para familiar
const FrasesEvitar = ({ phrases }: { phrases: string[] }) => (
  <div className="mt-8">
    <p className="text-xs font-mono tracking-widest text-muted-foreground/50 uppercase mb-4">
      Frases que sabotam — evite:
    </p>
    <div className="space-y-2">
      {phrases.map((p) => (
        <div key={p} className="flex items-start gap-3 text-sm text-muted-foreground/60 line-through decoration-destructive/40">
          <span className="text-destructive/40 mt-0.5 font-mono">✗</span>
          {p}
        </div>
      ))}
    </div>
  </div>
);

const TrilhaPage = ({ trilha }: { trilha: Trilha }) => (
  <Layout>

    {/* ── URGÊNCIA (só "vontade-hoje") ─────────────────── */}
    {trilha.urgency && (
      <div className="urgency-band py-5">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-start gap-3">
            <Shield size={16} className="text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground leading-relaxed">
              {trilha.urgency}
            </p>
          </div>
        </div>
      </div>
    )}

    {/* ── HERO ─────────────────────────────────────────── */}
    <section className="hero-gradient py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
              Trilha {trilha.num}
            </span>
          </div>
          <h1 className="font-display text-foreground leading-tight mb-6">
            {trilha.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            {trilha.whereYouAre}
          </p>
        </div>
      </div>
    </section>

    {/* ── DESCRIÇÃO ────────────────────────────────────── */}
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4 max-w-2xl">
        <p className="text-foreground text-base leading-relaxed mb-10">
          {trilha.description}
        </p>

        {/* Ação imediata */}
        {trilha.immediateAction && (
          <div className="action-box mb-10">
            <p className="text-xs font-mono text-primary/70 tracking-widest uppercase mb-2">
              Ação imediata
            </p>
            <p className="text-sm text-foreground leading-relaxed">{trilha.immediateAction}</p>
          </div>
        )}

        {/* Checklist */}
        {trilha.checklist && (
          <div className="space-y-3 mb-10">
            <p className="text-xs font-mono tracking-widest text-muted-foreground/50 uppercase mb-4">
              {trilha.id === "vontade-hoje" ? "O que fazer agora" : "O que você precisa saber"}
            </p>
            {trilha.checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Frases a evitar (familiar) */}
        {trilha.phrases && <FrasesEvitar phrases={trilha.phrases} />}

        {/* CTA protocolo */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link to={trilha.protocolHref} className="tactical-button flex items-center justify-center gap-2">
            {trilha.protocolLabel} <ArrowRight size={14} />
          </Link>
          <Link to={trilha.nextStepHref} className="tactical-button-outline flex items-center justify-center gap-2">
            {trilha.nextStep}
          </Link>
        </div>
      </div>
    </section>

    {/* ── CONTEXTO ─────────────────────────────────────── */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-10">
          {trilha.contextBlocks.map((block) => (
            <div key={block.heading} className="tactical-border">
              <h3 className="font-display text-xl text-foreground mb-3">{block.heading}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── DISCLAIMER ───────────────────────────────────── */}
    <section className="py-10 section-alt">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="alert-box flex items-start gap-3">
          <AlertTriangle size={15} className="text-destructive mt-0.5 flex-shrink-0" />
          <p className="text-xs text-muted-foreground/70 leading-relaxed">
            Este conteúdo é suporte — não substitui psiquiatras, psicólogos ou médicos.
            Em emergência médica, ligue 192 (SAMU) ou procure a UPA mais próxima.
          </p>
        </div>
      </div>
    </section>

    {/* ── NEWSLETTER ───────────────────────────────────── */}
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-primary" />
          <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Protocolo Semanal</span>
        </div>
        <h2 className="font-display text-foreground mb-4">
          Estrutura que chega toda semana.
        </h2>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          Protocolo prático, situação real, sem motivacional. Direto no seu e-mail.
        </p>
        <NewsletterCapture
          ctaLabel="Quero a Estrutura"
          trust="Sem spam. Sem newsletter de autoajuda. Sai quando quiser."
          successMessage="Você está dentro. O próximo protocolo chega em até 7 dias."
          tag={trilha.newsletterTag}
        />
      </div>
    </section>

  </Layout>
);

// ── Página hub das trilhas ──────────────────────────────
const TrilhasHub = () => (
  <Layout>
    <section className="hero-gradient py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Trilhas</span>
          </div>
          <h1 className="font-display text-foreground leading-tight mb-6">
            Escolha de onde{" "}
            <em className="text-primary not-italic">você está falando.</em>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada trilha tem uma perspectiva diferente. Escolha a que corresponde à sua situação agora.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl">
          {trilhas.map((t) => (
            <div key={t.id} className="tactical-card flex flex-col">
              <span className="font-mono text-xs text-primary/50 mb-4">{t.num}</span>
              <h2 className="font-display text-2xl text-foreground mb-3 leading-tight">{t.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{t.whereYouAre}</p>
              <Link
                to={`/trilhas/${t.id}`}
                className="tactical-button flex items-center justify-center gap-2"
              >
                Entrar nesta trilha <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

// ── Router de entrada ──────────────────────────────────
const Trilhas = () => {
  const { trilhaId } = useParams<{ trilhaId?: string }>();

  if (!trilhaId) return <TrilhasHub />;

  const trilha = trilhas.find((t) => t.id === trilhaId);

  if (!trilha) {
    return (
      <Layout>
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <p className="font-mono text-xs text-muted-foreground/50 mb-6 tracking-widest uppercase">404</p>
            <h1 className="font-display text-4xl text-foreground mb-6">
              Trilha não encontrada.
            </h1>
            <p className="text-muted-foreground mb-10">Escolha uma das trilhas disponíveis:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {trilhas.map((t) => (
                <Link key={t.id} to={`/trilhas/${t.id}`} className="tactical-button-outline">
                  {t.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return <TrilhaPage trilha={trilha} />;
};

export default Trilhas;
