import { Layout } from "@/components/Layout";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { Book, Users, Crown, ArrowRight, Check, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type Status = "disponivel" | "em-breve" | "lista-espera";

const statusMeta: Record<Status, { label: string; color: string }> = {
  disponivel: { label: "Disponível agora", color: "text-primary border-primary/40 bg-primary/10" },
  "em-breve": { label: "Em breve", color: "text-muted-foreground border-border bg-secondary" },
  "lista-espera": { label: "Vagas limitadas", color: "text-foreground border-foreground/30 bg-foreground/5" },
};

type Produto = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Book;
  features: string[];
  status: Status;
  cta: string;
  ctaHref: string;
  ctaExternal?: boolean;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  forWho: string;
};

const produtos: Produto[] = [
  {
    id: "ebook",
    num: "01",
    title: "Manual dos 90 Dias",
    subtitle: "E-book — Protocolo do Escudo",
    description:
      "O guia completo para os primeiros 90 dias de sobriedade. Protocolos diários, checklists e guias para situações de crise — para ser usado, não só lido.",
    icon: Book,
    features: [
      "Protocolo dia a dia para 90 dias",
      "Checklists imprimíveis de bolso",
      "Guia de situações de crise",
      "Relatórios semanais de frente",
    ],
    status: "em-breve",
    cta: "Quero ser avisado",
    ctaHref: "#newsletter",
    forWho: "Para quem está nos primeiros 90 dias e precisa de estrutura diária.",
  },
  {
    id: "comunidade",
    num: "02",
    title: 'Comunidade "A Base"',
    subtitle: "Suporte entre pares",
    description:
      "Um espaço sem gurus e sem religião. Pessoas reais navegando o mesmo processo, com moderação ativa e canais por situação.",
    icon: Users,
    features: [
      "Canais por situação (recuperação, família, crise)",
      "Suporte entre pares — sem julgamento",
      "Check-ins semanais ao vivo",
      "Moderação ativa, sem gurus",
    ],
    status: "em-breve",
    cta: "Entrar na lista de espera",
    ctaHref: "#newsletter",
    forWho: "Para quem precisa de suporte real sem julgamento.",
  },
  {
    id: "mentoria",
    num: "03",
    title: "Mentoria 1:1",
    subtitle: "Acompanhamento individual",
    description:
      "Sessões individuais com Luis Vanzer. Plano tático personalizado para a sua situação específica. Vagas abertas por trimestre — número limitado.",
    icon: Crown,
    features: [
      "Sessões individuais por vídeo",
      "Plano tático personalizado",
      "Suporte por mensagem entre sessões",
      "Vagas limitadas por trimestre",
    ],
    status: "lista-espera",
    cta: "Pedir acesso",
    ctaHref: "/contato",
    ctaSecondary: "Ver detalhes",
    ctaSecondaryHref: "/sobre",
    forWho: "Para quem quer atenção individual e um plano feito para o seu caso.",
  },
];

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
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Não são cursos de motivação. São instrumentos práticos para atravessar
              os momentos específicos que o vício cria.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRODUTOS GRID ────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">

          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O funil</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {produtos.map((p) => {
              const meta = statusMeta[p.status];
              return (
                <div key={p.id} className="tactical-card flex flex-col p-7">

                  {/* header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <span className="font-mono text-xs text-muted-foreground/50 block mb-1">{p.num}</span>
                      <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border font-mono ${meta.color}`}>
                        <Clock size={10} />
                        {meta.label}
                      </div>
                    </div>
                    <p.icon size={20} className="text-primary/40 mt-1" />
                  </div>

                  {/* content */}
                  <div className="section-divider mb-6" />
                  <h3 className="font-display text-2xl text-foreground mb-1 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-primary/60 mb-4">{p.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* features */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check size={13} className="text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* for who */}
                  <p className="text-xs text-muted-foreground/60 border-l border-border pl-3 mb-6 leading-relaxed">
                    {p.forWho}
                  </p>

                  {/* ctas */}
                  <div className="flex flex-col gap-2 mt-auto">
                    {p.ctaHref === "#newsletter" ? (
                      <button
                        onClick={() => {
                          document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
                        }}
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
                        className="tactical-button-outline flex items-center justify-center gap-2"
                      >
                        {p.ctaSecondary} <ExternalLink size={12} />
                      </Link>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FUNIL EXPLICADO ──────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Como funciona</span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-6">
            Cada produto serve um momento diferente
          </h2>
          <div className="space-y-6">
            {[
              { fase: "Fase 1", texto: "Manual dos 90 Dias: estrutura e protocolo para atravessar os primeiros meses sem improvisar." },
              { fase: "Fase 2", texto: "Comunidade A Base: suporte contínuo sem julgamento para o dia a dia da sobriedade." },
              { fase: "Fase 3", texto: "Mentoria 1:1: para quem precisa de um plano específico e acompanhamento direto com Luis Vanzer." },
            ].map((item) => (
              <div key={item.fase} className="flex gap-6 items-start">
                <span className="font-mono text-xs text-primary/60 mt-1 w-14 flex-shrink-0">{item.fase}</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.texto}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/50 border-l border-border pl-3 mt-10 leading-relaxed">
            Quando os produtos forem lançados, os preços e condições serão divulgados primeiro
            para quem está na lista do Protocolo Semanal.
          </p>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────── */}
      <section id="newsletter" className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Seja avisado primeiro</span>
          </div>
          <h2 className="font-display text-3xl text-foreground mb-4">
            Entre na lista antes do lançamento.
          </h2>
          <p className="text-muted-foreground mb-8">
            Quando o produto abrir, os primeiros convites vão para a lista.
            Sem fila falsa. Sem urgência artificial.
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
