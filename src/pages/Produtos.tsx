import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { ArrowRight, Check, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

type Status = "disponivel" | "em-breve" | "lista-espera";

const statusMeta: Record<Status, { label: string; color: string }> = {
  disponivel: {
    label: "Disponível agora",
    color: "text-primary border-primary/40 bg-primary/10",
  },
  "em-breve": {
    label: "Em breve",
    color: "text-muted-foreground border-border bg-secondary",
  },
  "lista-espera": {
    label: "Vagas limitadas",
    color: "text-foreground border-foreground/30 bg-foreground/5",
  },
};

type Produto = {
  id: string;
  num: string;
  tier: string;
  title: string;
  subtitle: string;
  forWho: string;
  description: string;
  features: string[];
  status: Status;
  price?: string;
  priceNote?: string;
  cta: string;
  ctaHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
};

const produtos: Produto[] = [
  {
    id: "escudo-72h",
    num: "01",
    tier: "Entrada",
    title: "Protocolo do Escudo — 72h",
    subtitle: "Para quem está em crise aguda ou logo após uma recaída",
    forWho:
      "Quem está parando de beber agora ou recomeçando depois de uma recaída.",
    description:
      "As primeiras 72 horas sem álcool são o campo minado. Este protocolo entrega o roteiro hora a hora, as missões diárias e o bunker noturno para atravessar a fase mais intensa sem improvisar.",
    features: [
      "Roteiro hora a hora para os 3 dias mais difíceis",
      "Missões diárias com início, meio e fim",
      "Bunker noturno — protocolo de fechamento do dia",
      "Checklists para aplicar agora, sem aquecimento",
    ],
    status: "disponivel",
    price: "R$ 47",
    priceNote: "Acesso vitalício",
    cta: "Garantir acesso",
    ctaHref: "/contato",
  },
  {
    id: "13-fundamentos",
    num: "02",
    tier: "Entrada",
    title: "Mapa dos 13 Fundamentos",
    subtitle: "Para quem quer entender o método antes de qualquer compromisso maior",
    forWho:
      "Quem está no início da jornada e precisa construir a base teórica e prática do método.",
    description:
      "Os 13 fundamentos do método O Guardião Sóbrio em formato workbook. Não é manual de autoajuda — é o mapa para identificar seus padrões, nomear seus gatilhos e construir uma identidade sóbria real.",
    features: [
      "Os 13 fundamentos do método explicados com clareza",
      "Workbook com exercícios práticos por fundamento",
      "Perguntas de reflexão para cada etapa",
      "Formato para ler e aplicar, não só guardar",
    ],
    status: "disponivel",
    price: "R$ 47",
    priceNote: "Acesso vitalício",
    cta: "Garantir acesso",
    ctaHref: "/contato",
  },
  {
    id: "plano-14-dias",
    num: "03",
    tier: "Intermediário",
    title: "Plano de Correção — 14 Dias",
    subtitle: "Para quem parou, recaiu ou perdeu o ritmo",
    forWho:
      "Quem precisa recomeçar rápido, com estrutura, sem esperar o \"momento certo\".",
    description:
      "Um sprint de 14 dias para retomar com velocidade. Checklist diário, protocolos de correção e acompanhamento do método para quem perdeu o ritmo e não quer esperar o próximo \"primeiro do mês\" para recomeçar.",
    features: [
      "Sprint estruturado para os 14 dias de retomada",
      "Checklist diário com foco em consistência",
      "Protocolo de correção para cada tipo de recaída",
      "Acompanhamento do método nos dois pilares críticos",
    ],
    status: "em-breve",
    price: "R$ 97",
    cta: "Entrar na lista",
    ctaHref: "#newsletter",
  },
  {
    id: "programa-30-dias",
    num: "04",
    tier: "Programa",
    title: "Programa O Guardião — 30 Dias",
    subtitle: "Programa completo: os 3 pilares integrados",
    forWho:
      "Quem quer atravessar os primeiros 30 dias com estrutura — e familiares que querem apoiar sem sufocar.",
    description:
      "O programa completo do método. Espelho, Tática e Escudo integrados numa jornada de 30 dias com protocolos diários, mapa de fundamentos, módulo para familiares e suporte de conteúdo.",
    features: [
      "Os 3 pilares integrados numa jornada de 30 dias",
      "Protocolos diários com tarefas executáveis",
      "Módulo específico para familiares e cônjuges",
      "Mapa de fundamentos e diário de gatilhos inclusos",
    ],
    status: "em-breve",
    price: "R$ 197",
    cta: "Entrar na lista",
    ctaHref: "#newsletter",
  },
  {
    id: "comunidade",
    num: "05",
    tier: "Assinatura",
    title: "Comunidade O Escudo",
    subtitle: "Suporte mútuo entre pares, sem julgamento e sem guru",
    forWho:
      "Quem está em processo e quer pertencer a uma rede de apoio real — para quem bebe e para quem protege a casa.",
    description:
      "Um espaço fechado para quem está no processo. Suporte entre pares, canais por situação, check-ins semanais com o método. Moderação ativa. Sem religião, sem guru, sem performance de dor.",
    features: [
      "Canais por situação (recuperação, família, crise)",
      "Check-ins semanais com o método",
      "Suporte entre pares com moderação ativa",
      "Acesso ao arquivo de protocolos e recursos",
    ],
    status: "em-breve",
    price: "R$ 39,90/mês",
    priceNote: "ou R$ 299/ano",
    cta: "Entrar na lista de espera",
    ctaHref: "#newsletter",
  },
  {
    id: "mentoria",
    num: "06",
    tier: "Premium",
    title: "Mentoria Individual",
    subtitle: "Acompanhamento direto com Luis Vanzer",
    forWho:
      "Quem já conhece o método e quer um plano feito para o seu caso, com atenção individual.",
    description:
      "Sessões individuais com Luis Vanzer. Plano tático personalizado para a sua situação específica — não um programa genérico. Vagas abertas por trimestre, número controlado.",
    features: [
      "Sessões individuais por vídeo",
      "Plano tático feito para a sua situação",
      "Suporte por mensagem entre sessões",
      "Vagas limitadas por trimestre",
    ],
    status: "lista-espera",
    price: "R$ 997/mês",
    cta: "Pedir vaga",
    ctaHref: "/contato",
    ctaSecondary: "Saber mais sobre o processo",
    ctaSecondaryHref: "/sobre",
  },
];

const ProdutoCard = ({ p }: { p: Produto }) => {
  const meta = statusMeta[p.status];

  return (
    <div className="tactical-card flex flex-col p-7">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-muted-foreground/40">
            {p.num} · {p.tier}
          </span>
          <div
            className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-mono w-fit ${meta.color}`}
          >
            <Clock size={10} />
            {meta.label}
          </div>
        </div>
        {p.price && (
          <div className="text-right">
            <span className="font-display text-xl text-primary">{p.price}</span>
            {p.priceNote && (
              <p className="text-[11px] text-muted-foreground/50 mt-0.5">{p.priceNote}</p>
            )}
          </div>
        )}
      </div>

      <div className="section-divider mb-5" />

      {/* Content */}
      <h3 className="font-display text-2xl text-foreground mb-1 leading-tight">
        {p.title}
      </h3>
      <p className="text-xs font-mono text-primary/60 mb-4 leading-relaxed">
        {p.subtitle}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
        {p.description}
      </p>

      {/* Features */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* For who */}
      <p className="text-xs text-muted-foreground/60 border-l border-border pl-3 mb-6 leading-relaxed">
        <strong className="text-foreground/70">Para quem:</strong> {p.forWho}
      </p>

      {/* CTAs */}
      <div className="flex flex-col gap-2 mt-auto">
        {p.ctaHref === "#newsletter" ? (
          <button
            onClick={() =>
              document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })
            }
            className="tactical-button flex items-center justify-center gap-2"
          >
            {p.cta} <ArrowRight size={14} />
          </button>
        ) : (
          <Link
            to={p.ctaHref}
            className="tactical-button flex items-center justify-center gap-2"
          >
            {p.cta} <ArrowRight size={14} />
          </Link>
        )}
        {p.ctaSecondary && p.ctaSecondaryHref && (
          <Link
            to={p.ctaSecondaryHref}
            className="tactical-button-outline flex items-center justify-center gap-2 text-sm"
          >
            {p.ctaSecondary}
          </Link>
        )}
      </div>
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
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Produtos
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Ferramentas para quem{" "}
              <em className="text-primary not-italic">está no processo</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-4">
              Não são cursos de motivação. São instrumentos práticos para os momentos
              específicos que o vício cria — da crise aguda até a construção de longo prazo.
            </p>
            <p className="text-xs text-muted-foreground/50 border-l-2 border-border pl-3 max-w-md leading-relaxed">
              Nenhum produto promete cura. Todos entregam estrutura.
              Não substituem psiquiatra, psicólogo ou grupos de apoio.
            </p>
          </div>
        </div>
      </section>

      {/* ── FUNIL VISUAL ─────────────────────────────────── */}
      <section className="py-10 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-center text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
            {[
              { label: "Entrada", sub: "R$ 47", active: true },
              { label: "Intermediário", sub: "R$ 97", active: false },
              { label: "Programa", sub: "R$ 197", active: false },
              { label: "Assinatura", sub: "R$ 39,90/mês", active: false },
              { label: "Premium", sub: "R$ 997/mês", active: false },
            ].map((tier, i) => (
              <div key={tier.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <span className={tier.active ? "text-primary" : "text-foreground/50"}>
                    {tier.label}
                  </span>
                  <span className={`text-[10px] ${tier.active ? "text-primary/70" : "text-muted-foreground/40"}`}>
                    {tier.sub}
                  </span>
                </div>
                {i < 4 && (
                  <div className="hidden sm:block h-px w-6 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUTOS — Entrada ────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-primary border border-primary/40 rounded-full px-3 py-1">
              Produtos de entrada — R$ 47 cada
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
            {produtos
              .filter((p) => ["escudo-72h", "13-fundamentos"].includes(p.id))
              .map((p) => (
                <ProdutoCard key={p.id} p={p} />
              ))}
          </div>

          {/* Programas */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
              Programas — em breve
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
            {produtos
              .filter((p) => ["plano-14-dias", "programa-30-dias"].includes(p.id))
              .map((p) => (
                <ProdutoCard key={p.id} p={p} />
              ))}
          </div>

          {/* Premium */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1">
              Comunidade &amp; Mentoria
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {produtos
              .filter((p) => ["comunidade", "mentoria"].includes(p.id))
              .map((p) => (
                <ProdutoCard key={p.id} p={p} />
              ))}
          </div>
        </div>
      </section>

      {/* ── PARA FAMILIARES ──────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
              Para familiares
            </span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Familiar de quem bebe tem trilha própria.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Você não está nesta jornada como coadjuvante. Precisa de estrutura, limites
            e suporte específico para o seu papel — sem se destruir no processo.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/trilhas/familiar"
              className="tactical-button flex items-center justify-center gap-2"
            >
              Acessar trilha de familiar
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/protocolos/perimetro-24h"
              className="tactical-button-outline flex items-center justify-center gap-2"
            >
              Protocolo Perímetro — 24h
            </Link>
          </div>
        </div>
      </section>

      {/* ── AVISO ────────────────────────────────────────── */}
      <section className="py-8 section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="alert-box flex items-start gap-3">
            <AlertTriangle size={18} className="text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Aviso:</strong> Todos os produtos são
              material educativo e de apoio prático.{" "}
              <strong>
                Não são diagnóstico, prescrição ou tratamento médico.
              </strong>{" "}
              Não substituem psiquiatra, psicólogo ou grupos de apoio. Em crise, ligue
              188 (CVV) ou 192 (SAMU).
            </p>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section id="newsletter" className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
              Seja avisado primeiro
            </span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Quando abrir, você fica sabendo antes.
          </h2>
          <p className="text-muted-foreground mb-8">
            Sem fila falsa. Sem urgência artificial. Os produtos em breve chegam primeiro
            para quem está na lista do Protocolo Semanal.
          </p>
          <NewsletterCapture
            ctaLabel="Garantir meu lugar na lista"
            trust="Sem cobrança agora. Sem spam. Você sai quando quiser."
            successMessage="Você está na lista. Quando abrir, você fica sabendo antes de todo mundo."
            tag="produtos-lista"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
