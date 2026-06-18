import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { BlogCard } from "@/components/BlogCard";
import { ShieldIcon } from "@/components/ShieldIcon";
import { blogPosts } from "@/data/blogPosts";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Flame,
  Heart,
  Droplets,
  Wind,
  Footprints,
  CheckCircle,
  MapPin,
  Zap,
  Shield as ShieldLucide,
  Compass,
  AlertTriangle,
} from "lucide-react";

type Step = { icon: typeof Droplets; text: string; detail: string };

type Trilha = {
  id: string;
  title: string;
  subtitle: string;
  urgency?: string;
  whereYouAre: string;
  description: string;
  icon: typeof RefreshCw;
  protocol: { title: string; href: string; reason: string };
  articles: string[];
  immediateAction?: { title: string; steps: Step[] };
  checklist?: string[];
  phrases?: string[];
  contextBlocks?: { label: string; text: string }[];
  nextStep: { title: string; description: string; href: string; cta: string };
};

const trilhasData: Record<string, Trilha> = {
  recuperacao: {
    id: "recuperacao",
    title: "Estou em Recuperação",
    subtitle: "Construindo sobriedade dia após dia",
    whereYouAre:
      "Você não está mais na crise aguda. Está construindo a estrutura — o trabalho silencioso que ninguém aplaude e que sustenta tudo. É aqui que a maioria afrouxa. Não você.",
    description:
      "A recuperação não é um momento — é um caminho. Cada dia é uma vitória. Cada semana é uma fortaleza. Aqui estão os recursos para construir consistência quando a motivação evapora.",
    icon: RefreshCw,
    protocol: {
      title: "Protocolo Escudo — 72h",
      href: "/protocolos/escudo-72h",
      reason:
        "Use como base. Reaplique a estrutura sempre que sentir que a casa está afrouxando ou após qualquer evento de risco.",
    },
    articles: ["1", "3", "5", "9", "10", "12"],
    checklist: [
      "Perímetro da casa fechado — sem álcool visível",
      "Água disponível em pelo menos 3 pontos da casa",
      "Rotina de bunker noturno definida e escrita",
      "Uma pessoa de confiança avisada do processo",
      "Protocolo 3-3-3 memorizado para crise",
      "Relatório diário feito, mesmo que curto",
    ],
    contextBlocks: [
      {
        label: "O que esperar",
        text:
          "Semanas 2 a 4 são traiçoeiras. O corpo estabiliza, mas a mente cria espaço para a negação. Continue o protocolo mesmo quando parecer desnecessário.",
      },
      {
        label: "Quando a motivação sumir",
        text:
          "Motivação é consequência — não combustível. Aja pelo protocolo, não pela vontade. A identidade sóbria se constrói na repetição, não na intensidade.",
      },
    ],
    nextStep: {
      title: "Receber 1 protocolo prático por semana",
      description:
        "Consistência se constrói com lembrete. Entre no Protocolo Semanal e receba 1 missão prática por semana para quem está construindo no mundo real.",
      href: "/produtos",
      cta: "Entrar no Protocolo Semanal",
    },
  },

  "vontade-hoje": {
    id: "vontade-hoje",
    title: "Hoje Bateu Vontade de Beber",
    subtitle: "Ação imediata — os próximos 20 minutos",
    urgency:
      "A fissura tem duração previsível. O pico passa em 20 a 40 minutos se você não alimentar o ciclo. Você não precisa vencer pela vontade — precisa atravessar pela ação.",
    whereYouAre:
      "A vontade está aqui, agora. Não é hora de pensar — é hora de executar. Os 3 passos abaixo são para os próximos minutos, não para depois.",
    description:
      "A fissura não dura para sempre. Em geral, o pico passa em 20 a 40 minutos se você não alimentar o ciclo. O objetivo não é vencer pela força de vontade — é atravessar pela ação.",
    icon: Flame,
    protocol: {
      title: "Protocolo Escudo — 72h",
      href: "/protocolos/escudo-72h",
      reason:
        "Quando os 3 passos forem executados, abra o Protocolo Escudo para ancorar as próximas horas com estrutura.",
    },
    articles: ["1", "6", "8", "10", "11"],
    immediateAction: {
      title: "3 ações para os próximos 3 minutos",
      steps: [
        {
          icon: Droplets,
          text: "3 copos d'água. Agora.",
          detail:
            "Não dois. Três. A hidratação altera a química imediata e cria uma pausa de 2 minutos no ciclo da fissura.",
        },
        {
          icon: Wind,
          text: "Respiração ou frio.",
          detail:
            "10 respirações profundas: 4s dentro, 4s segura, 6s fora. Ou água fria no rosto por 30 segundos. Escolha um.",
        },
        {
          icon: Footprints,
          text: "Mude de ambiente.",
          detail:
            "Levante e vá para outro cômodo — ou saia pela porta. Movimento físico quebra o ciclo de fissura mais rápido que qualquer pensamento.",
        },
      ],
    },
    contextBlocks: [
      {
        label: "Por que funciona",
        text:
          "A fissura é uma resposta condicionada ao ambiente e ao estado emocional. Mudar o ambiente físico — mesmo que por 5 minutos — interrompe o circuito antes de ele atingir o pico.",
      },
      {
        label: "Se a vontade não passar",
        text:
          "Ligue para alguém. Qualquer pessoa. Falar em voz alta interrompe o diálogo interno que alimenta a fissura. Não precisa falar sobre beber — precisa sair da sua cabeça.",
      },
    ],
    nextStep: {
      title: "Atravessou? Estabilize as próximas 72h",
      description:
        "Vontade isolada vira recaída quando vira rotina. Entre no Protocolo Escudo e ancore as próximas 72 horas com estrutura.",
      href: "/protocolos/escudo-72h",
      cta: "Ir para o Protocolo Escudo — 72h",
    },
  },

  familiar: {
    id: "familiar",
    title: "Sou Familiar — Proteger a Casa",
    subtitle: "Limites sem guerra. Estrutura sem abandono.",
    whereYouAre:
      "Você não é o terapeuta. Não é sua função curar. Sua função é proteger — a si, aos dependentes e à sua sanidade. Isso não é abandono. É sobrevivência com estratégia.",
    description:
      "Familiares carregam um peso invisível. Esta trilha existe para você não desabar enquanto a outra pessoa decide o caminho dela. Você tem o direito de ter estrutura própria.",
    icon: Heart,
    protocol: {
      title: "Protocolo Perímetro — 24h",
      href: "/protocolos/perimetro-24h",
      reason:
        "Use nas próximas 24 horas para organizar o perímetro emocional e prático da casa. Não é sobre controlar — é sobre proteger.",
    },
    articles: ["2", "4", "7"],
    phrases: [
      "Não discuto assim. Amanhã conversamos.",
      "Vou me recolher agora.",
      "Não minto por você.",
      "Estou aqui, mas não nessas condições.",
      "Isso é um limite meu, não um ultimato.",
      "Você decide o seu caminho. Eu protejo o meu.",
    ],
    contextBlocks: [
      {
        label: "O que você pode controlar",
        text:
          "Você não pode forçar a sobriedade de ninguém. Pode controlar: o que você tolera em casa, como você comunica seus limites, se você busca apoio para si mesmo e quando você precisa se afastar.",
      },
      {
        label: "Sobre culpa",
        text:
          "Proteger a si mesmo não é egoísmo. Quem se destrói tentando salvar outra pessoa não está ajudando — está criando duas vítimas. Sua estrutura é parte do sistema de proteção.",
      },
    ],
    nextStep: {
      title: "Orientação semanal para familiares",
      description:
        "Proteger a casa exige reposição constante. Entre no Protocolo Semanal — há trilha específica para familiares, com 1 protocolo prático por semana.",
      href: "/produtos",
      cta: "Entrar no Protocolo Semanal",
    },
  },
};

const Trilhas = () => {
  const { trilhaId } = useParams<{ trilhaId: string }>();
  const trilha = trilhasData[trilhaId ?? ""];

  if (!trilha) {
    return (
      <Layout>
        <div className="py-16 md:py-24 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Trilha não encontrada</h1>
          <p className="text-muted-foreground mb-6">Escolha uma das trilhas disponíveis.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/trilhas/recuperacao" className="tactical-button-outline">Estou em Recuperação</Link>
            <Link to="/trilhas/vontade-hoje" className="tactical-button-outline">A Fissura Chegou Agora</Link>
            <Link to="/trilhas/familiar" className="tactical-button-outline">Sou Familiar</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const Icon = trilha.icon;
  const filteredPosts = blogPosts.filter((post) => trilha.articles.includes(post.id));

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Voltar para o início
            </Link>

            {/* ── HEADER ─────────────────────────────────── */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={28} className="text-primary" />
                </div>
                <div>
                  <h1 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
                    {trilha.title}
                  </h1>
                  <p className="text-primary text-sm mt-1">{trilha.subtitle}</p>
                </div>
              </div>

              {trilha.urgency && (
                <div className="tactical-card border-primary/30 bg-primary/5 mb-6">
                  <p className="text-sm text-foreground leading-relaxed">{trilha.urgency}</p>
                </div>
              )}

              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                {trilha.description}
              </p>
            </header>

            {/* ── 4 PASSOS ───────────────────────────────── */}
            <div className="space-y-5 mb-16">

              {/* 01 — Onde você está */}
              <div className="tactical-card">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-2">
                      01 · Onde você está
                    </p>
                    <p className="text-foreground leading-relaxed">{trilha.whereYouAre}</p>
                  </div>
                </div>
              </div>

              {/* 02 — O que fazer agora */}
              <div className="tactical-card">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      02 · O que fazer agora
                    </p>
                    <p className="font-display text-lg text-foreground">
                      {trilha.immediateAction?.title ?? "Ações imediatas"}
                    </p>
                  </div>
                </div>

                {trilha.immediateAction ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {trilha.immediateAction.steps.map((step, index) => (
                      <div key={index} className="bg-secondary/40 rounded p-4">
                        <step.icon size={26} className="text-primary mb-3" />
                        <h3 className="font-display text-base text-foreground mb-1 leading-snug">
                          {step.text}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : trilha.checklist ? (
                  <ul className="space-y-2.5">
                    {trilha.checklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : trilha.phrases ? (
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Frases prontas para usar quando a pressão aparecer:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {trilha.phrases.map((phrase) => (
                        <div
                          key={phrase}
                          className="bg-secondary/40 border border-border rounded p-3"
                        >
                          <p className="text-foreground text-sm">"{phrase}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {/* Contexto adicional */}
              {trilha.contextBlocks && trilha.contextBlocks.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trilha.contextBlocks.map((block) => (
                    <div key={block.label} className="tactical-card">
                      <p className="text-[11px] uppercase tracking-widest text-primary mb-2">
                        {block.label}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* 03 — Protocolo recomendado */}
              <Link to={trilha.protocol.href} className="tactical-card group block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldLucide size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      03 · Protocolo recomendado
                    </p>
                    <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {trilha.protocol.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {trilha.protocol.reason}
                    </p>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-primary group-hover:translate-x-1 transition-transform mt-2 flex-shrink-0"
                  />
                </div>
              </Link>

              {/* 04 — Próximo passo */}
              <Link to={trilha.nextStep.href} className="tactical-card group block">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-widest text-primary mb-1">
                      04 · Próximo passo
                    </p>
                    <p className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                      {trilha.nextStep.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {trilha.nextStep.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-3 group-hover:gap-3 transition-all">
                      {trilha.nextStep.cta}
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>

            </div>

            {/* ── AVISO ──────────────────────────────────── */}
            <div className="alert-box flex items-start gap-3 mb-16">
              <AlertTriangle size={18} className="text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Aviso:</strong> Esta trilha é orientação
                prática baseada em experiência e método.{" "}
                <strong>Não substitui psiquiatra, psicólogo ou grupos de apoio.</strong>{" "}
                Em abstinência intensa (tremores, confusão, alucinações), ligue 192 (SAMU).
              </p>
            </div>

            {/* ── ARTIGOS RELACIONADOS ───────────────────── */}
            {filteredPosts.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-6 bg-primary" />
                  <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                    Artigos relacionados
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* ── NEWSLETTER ─────────────────────────────── */}
            <div className="section-alt rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-6 bg-primary" />
                <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                  Protocolo semanal
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                Um protocolo por semana.
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Sem spam. Sem teatro. Uma missão tática por semana — direto no e-mail,
                para quem está construindo sobriedade no mundo real.
              </p>
              <NewsletterCapture
                ctaLabel="Receber o Protocolo"
                trust="Sem cobrança. Você sai quando quiser."
                successMessage="Você está dentro. Primeiro protocolo chega em até 7 dias."
                tag={`trilha-${trilha.id}`}
              />
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trilhas;
