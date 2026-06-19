import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight, Shield, Zap, Compass } from "lucide-react";

const opcoes = [
  {
    label: "01",
    icon: Zap,
    title: "Estou em crise agora",
    description: "Fissura ativa. Abstinência. Não consigo parar de pensar nisso. Preciso de protocolo imediato.",
    cta: "Protocolo Escudo Agora",
    href: "/protocolos/escudo-72h",
  },
  {
    label: "02",
    icon: Shield,
    title: "Quero me preparar antes",
    description: "Estou bem agora, mas sei que o momento difícil vai chegar. Quero estar pronto quando vier.",
    cta: "Ver Todos os Protocolos",
    href: "/protocolos",
  },
  {
    label: "03",
    icon: Compass,
    title: "Não sei por onde começar",
    description: "Nunca tentei de forma estruturada. Preciso de um ponto de partida claro, sem julgamento.",
    cta: "Iniciar Estrutura do Zero",
    href: "/trilhas/recuperacao",
  },
];

const ComeceAqui = () => {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">
                Ponto de entrada
              </span>
            </div>
            <h1 className="font-display text-foreground leading-tight mb-6">
              Escolha onde{" "}
              <em className="text-primary not-italic">você está agora.</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Sem diagnóstico. Sem formulário longo.
              Só o passo que você consegue dar hoje.
            </p>
          </div>
        </div>
      </section>

      {/* ── OPÇÕES ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl">
            {opcoes.map((op) => (
              <div key={op.label} className="tactical-card flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-xs text-primary/60">{op.label}</span>
                    <op.icon size={18} className="text-primary/40" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground mb-3 leading-tight">
                    {op.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    {op.description}
                  </p>
                </div>
                <Link
                  to={op.href}
                  className="tactical-button flex items-center justify-center gap-2"
                >
                  {op.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────── */}
      <section className="py-12 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-xs text-muted-foreground/50 border-l-2 border-border pl-3 leading-relaxed">
            Este conteúdo não substitui psiquiatras, psicólogos ou médicos.
            Em emergência médica, ligue 192 (SAMU).
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default ComeceAqui;
