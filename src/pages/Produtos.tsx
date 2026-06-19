import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { AlertTriangle, ArrowRight, Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";

type Status = "disponivel" | "em-breve" | "lista-espera";

const statusMeta: Record<Status, { label: string; color: string }> = {
  disponivel:    { label: "Disponível",    color: "text-primary border-primary/40 bg-primary/10" },
  "em-breve":    { label: "Em breve",      color: "text-muted-foreground border-border bg-secondary" },
  "lista-espera":{ label: "Lista de espera", color: "text-foreground border-foreground/30 bg-foreground/5" },
};

type Produto = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  forWho: string;
  status: Status;
  cta: string;
  ctaHref: string;
};

const entrada: Produto[] = [
  {
    id: "escudo-72h",
    num: "01",
    title: "Protocolo Escudo 72h",
    subtitle: "Produto de entrada — Crise imediata",
    price: "R$ 47",
    description:
      "O protocolo para as primeiras 72 horas. Guia hora a hora para atravessar a crise sem improvisar. Para usar no momento em que a fissura chega.",
    features: [
      "Guia hora a hora — 72 horas completas",
      "Protocolo de fissura aguda (pico 20–40 min)",
      "Checklist de perímetro de segurança",
      "Guia de scripts para situações sociais",
      "Plano de emergência para recaída",
    ],
    forWho: "Para quem está em crise ativa ou quer estar pronto quando a crise chegar.",
    status: "disponivel",
    cta: "Garantir acesso",
    ctaHref: "/protocolos/escudo-72h",
  },
  {
    id: "mapa-13",
    num: "02",
    title: "Mapa dos 13 Fundamentos",
    subtitle: "Produto de entrada — Compreensão",
    price: "R$ 47",
    description:
      "Os 13 princípios que sustentam a sobriedade adulta real. Sem motivação, sem teatro. Cada fundamento com protocolo de aplicação prático.",
    features: [
      "13 fundamentos com protocolo de aplicação",
      "Diagnóstico pessoal por fundamento",
      "Exercícios de âncora por situação",
      "Guia de leitura de 7 dias",
    ],
    forWho: "Para quem quer entender o mecanismo antes de agir.",
    status: "disponivel",
    cta: "Garantir acesso",
    ctaHref: "#newsletter",
  },
];

const programas: Produto[] = [
  {
    id: "correcao-14",
    num: "03",
    title: "Plano Correção de Rota 14 Dias",
    subtitle: "Programa — Reorientação rápida",
    price: "R$ 97",
    description:
      "Para quem recaiu, saiu da estrutura ou está precisando recomeçar. Catorze dias de protocolo diário para voltar ao eixo sem drama.",
    features: [
      "Protocolo diário — 14 dias estruturados",
      "Diagnóstico de onde a estrutura quebrou",
      "Plano de reconstrução de perímetro",
      "Checklist de revisão semanal",
    ],
    forWho: "Para quem recaiu ou perdeu a estrutura e precisa recomeçar de forma organizada.",
    status: "em-breve",
    cta: "Entrar na lista",
    ctaHref: "#newsletter",
  },
  {
    id: "guardiao-30",
    num: "04",
    title: "Programa O Guardião 30 Dias",
    subtitle: "Programa — Construção de base",
    price: "R$ 197",
    description:
      "Trinta dias de estrutura completa. Protocolos diários, revisões semanais, guias de situação. A base para quem quer construir, não só sobreviver.",
    features: [
      "30 dias de protocolo diário detalhado",
      "Revisões semanais com ajuste de rota",
      "Biblioteca de situações de risco",
      "Acesso por 6 meses",
    ],
    forWho: "Para quem quer estrutura completa nos primeiros 30 dias sem improviso.",
    status: "em-breve",
    cta: "Entrar na lista",
    ctaHref: "#newsletter",
  },
];

const continuidade: Produto[] = [
  {
    id: "comunidade",
    num: "05",
    title: "Comunidade O Escudo",
    subtitle: "Suporte contínuo — Mensal",
    price: "R$ 39,90",
    period: "/mês",
    description:
      "O lugar para quem precisa de suporte real no dia a dia. Sem gurus, sem religião. Pessoas que estão no processo — com moderação ativa e canais por situação.",
    features: [
      "Canais por situação (crise, família, trabalho)",
      "Check-ins semanais ao vivo",
      "Suporte entre pares — sem julgamento",
      "Moderação ativa, sem performance",
    ],
    forWho: "Para quem precisa de suporte contínuo além dos protocolos.",
    status: "em-breve",
    cta: "Entrar na lista",
    ctaHref: "#newsletter",
  },
  {
    id: "mentoria",
    num: "06",
    title: "Mentoria 1:1",
    subtitle: "Acompanhamento individual — Mensal",
    price: "R$ 997",
    period: "/mês",
    description:
      "Sessões individuais com Luis Vanzer. Plano tático feito para a sua situação específica. Número de vagas limitado por trimestre.",
    features: [
      "Sessões individuais por vídeo",
      "Plano tático personalizado",
      "Suporte por mensagem entre sessões",
      "Vagas abertas por trimestre",
    ],
    forWho: "Para quem precisa de atenção individual e um plano feito para o seu caso.",
    status: "lista-espera",
    cta: "Pedir vaga",
    ctaHref: "/sobre",
  },
];

const ProdutoCard = ({ p }: { p: Produto }) => {
  const meta = statusMeta[p.status];

  const CtaButton = () => {
    if (p.ctaHref === "#newsletter") {
      return (
        <button
          onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
          className="tactical-button w-full flex items-center justify-center gap-2"
        >
          {p.cta} <ArrowRight size={14} />
        </button>
      );
    }
    return (
      <Link to={p.ctaHref} className="tactical-button w-full flex items-center justify-center gap-2">
        {p.cta} <ArrowRight size={14} />
      </Link>
    );
  };

  return (
    <div className="tactical-card relative overflow-hidden flex flex-col p-7">
      <span className="font-mono text-[3.5rem] leading-none text-primary/10 absolute top-4 right-5 pointer-events-none select-none font-bold">
        {p.num}
      </span>
      {/* header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="font-mono text-xs text-muted-foreground/50 block mb-2">{p.num}</span>
          <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 border font-mono ${meta.color}`}>
            <Clock size={9} />
            {meta.label}
          </div>
        </div>
        <div className="text-right">
          <span className="font-display text-2xl text-primary">{p.price}</span>
          {p.period && <span className="text-xs text-muted-foreground font-mono">{p.period}</span>}
        </div>
      </div>

      <div className="section-divider mb-5" />

      {/* content */}
      <h3 className="font-display text-2xl text-foreground mb-1 leading-tight">{p.title}</h3>
      <p className="text-xs font-mono text-primary/60 mb-4 tracking-wide">{p.subtitle}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>

      {/* features */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check size={12} className="text-primary mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* for who */}
      <p className="text-xs text-muted-foreground/60 border-l border-border pl-3 mb-6 leading-relaxed italic">
        {p.forWho}
      </p>

      <CtaButton />
    </div>
  );
};

const Produtos = () => {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Produtos</span>
            </div>
            <h1 className="font-display text-foreground leading-tight mb-6">
              Ferramentas para quem{" "}
              <em className="text-primary not-italic">está no processo.</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Não são cursos de motivação. São instrumentos práticos para atravessar
              os momentos específicos que o vício cria.
            </p>
          </div>
        </div>
      </section>

      {/* ── FUNIL TIMELINE ───────────────────────────────── */}
      <section className="py-10 section-alt border-b border-border">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto pb-2">
            <div className="flex items-start gap-0 min-w-[640px]">
              {[
                {
                  fase: '01',
                  label: 'Entrada',
                  sub: 'R$ 47',
                  desc: 'Protocolo imediato. Baixo custo, alto impacto.',
                },
                {
                  fase: '02',
                  label: 'Programas',
                  sub: 'R$ 97–197',
                  desc: 'Estrutura de 14 a 30 dias.',
                },
                {
                  fase: '03',
                  label: 'Continuidade',
                  sub: 'R$ 39,90–997/mês',
                  desc: 'Suporte e acompanhamento.',
                },
              ].map((item, i) => (
                <div key={item.fase} className="flex items-start flex-1">
                  <div className="flex-1 px-6 first:pl-0">
                    <span className="font-mono text-xs text-primary/50 block mb-2">{item.fase}</span>
                    <h4 className="font-display text-xl text-foreground mb-1">{item.label}</h4>
                    <p className="font-mono text-xs text-primary/70 mb-2">{item.sub}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="flex flex-col items-center pt-5 flex-shrink-0">
                      <div className="h-px w-8 bg-primary/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTRADA ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Entrada</span>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-11">
            O primeiro passo. Baixo custo, alto impacto imediato.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {entrada.map((p) => <ProdutoCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── PROGRAMAS ────────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Programas</span>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-11">
            Estrutura de médio prazo. Para quem quer construir, não só atravessar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {programas.map((p) => <ProdutoCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── CONTINUIDADE ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Continuidade</span>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-11">
            Suporte e acompanhamento além dos protocolos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {continuidade.map((p) => <ProdutoCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── FAMILIARES ───────────────────────────────────── */}
      <section className="py-16 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Para familiares</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Familiar de alguém em recuperação? O conteúdo para você está em outro lugar.
            Sem culpa, sem script de resgate — com estrutura para proteger quem cuida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/trilhas/familiar" className="tactical-button-outline flex items-center justify-center gap-2">
              Trilha para Familiares <ArrowRight size={14} />
            </Link>
            <Link to="/protocolos" className="tactical-button-outline flex items-center justify-center gap-2">
              Ver Protocolos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────── */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="alert-box flex items-start gap-3">
            <AlertTriangle size={16} className="text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Nenhum produto substitui acompanhamento profissional.
              Em emergência médica, ligue 192 (SAMU) ou procure a UPA mais próxima.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section id="newsletter" className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Lista de lançamento</span>
          </div>
          <h2 className="font-display text-foreground mb-4">
            Acesso antes de todo mundo.
          </h2>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Quando um produto abrir, os primeiros convites vão para a lista.
            Sem fila falsa. Sem urgência artificial.
          </p>
          <NewsletterCapture
            ctaLabel="Garantir meu lugar"
            trust="Sem cobrança agora. Sem spam. Sai quando quiser."
            successMessage="Você está na lista. Quando abrir, você fica sabendo primeiro."
            tag="produtos-lista"
          />
        </div>
      </section>

    </Layout>
  );
};

export default Produtos;
