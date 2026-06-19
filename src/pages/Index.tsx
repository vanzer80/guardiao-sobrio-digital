import { type RefObject } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ShieldIcon } from "@/components/ShieldIcon";
import { NewsletterCapture } from "@/components/NewsletterCapture";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { getRecentPosts } from "@/data/blogPosts";
import { useReveal } from "@/hooks/useReveal";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

const pathCards = [
  {
    id: "parando",
    label: "01",
    title: "Estou parando agora",
    description: "Primeiras 72h. Vontade intensa, abstinência física. Existe um protocolo para cada hora desse período.",
    href: "/trilhas/recuperacao",
    icon: Shield,
  },
  {
    id: "vontade",
    label: "02",
    title: "A fissura chegou agora",
    description: "Não é fraqueza. É uma onda com duração previsível. O protocolo existe exatamente para esse momento.",
    href: "/trilhas/vontade-hoje",
    icon: Zap,
  },
  {
    id: "familia",
    label: "03",
    title: "Protejo alguém em casa",
    description: "Família precisa de estratégia própria. Não de culpa, não de espera. De estrutura.",
    href: "/trilhas/familiar",
    icon: Lock,
  },
];

const pillars = [
  {
    num: "01",
    word: "Espelho",
    description: "Ver o que está acontecendo de verdade, sem filtro. O diagnóstico honesto é o único ponto de partida válido.",
  },
  {
    num: "02",
    word: "Tática",
    description: "Protocolo antes de decisão. Quando o momento crítico chega, você não improvisa — executa.",
  },
  {
    num: "03",
    word: "Escudo",
    description: "Construir um perímetro que aguente a pressão. Ambiental, relacional, emocional.",
  },
];

const Index = () => {
  const recentPosts = getRecentPosts(3);
  const cardsRef    = useReveal(0.1);
  const quoteRef    = useReveal(0.2);
  const pillarsRef  = useReveal(0.1);
  const momentosRef = useReveal(0.1);

  return (
    <Layout>

      {/* HERO */}
      <section className="hero-gradient relative overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O Guardião Sóbrio</span>
            </div>
            <h1
              className="font-display text-foreground mb-6"
              style={{ fontSize: 'clamp(3.5rem,9vw,7.5rem)', lineHeight: '0.95', letterSpacing: '-0.02em' }}
            >
              Você não precisa ser forte.{" "}
              <em className="text-primary not-italic">Precisa de estrutura.</em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
              O Guardião Sóbrio é um protocolo operacional. Não é motivação. Não é terapia.
              É o que você faz quando a fissura bate às 2 da manhã e não tem ninguém para ligar.
            </p>
            <p className="text-xs text-muted-foreground/50 max-w-md mb-10 border-l-2 border-border pl-3">
              Este conteúdo não substitui psiquiatras, psicólogos ou médicos. Em emergência médica, ligue 192 (SAMU).
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/comece-aqui" className="tactical-button flex items-center justify-center gap-2">
                Iniciar Protocolo <ArrowRight size={16} />
              </Link>
              <Link to="/protocolos" className="tactical-button-outline flex items-center justify-center gap-2">
                Ver os Protocolos
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none select-none hidden lg:block">
          <ShieldIcon size="xl" showLetters={false} />
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* ÂNCORAS TÁTICAS */}
      <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <p className="text-sm text-muted-foreground font-mono tracking-wide">
              <span className="text-primary font-semibold block text-base mb-1">A fissura não pede licença.</span>
              O protocolo também não.
            </p>
            <p className="text-sm text-muted-foreground font-mono tracking-wide">
              <span className="text-primary font-semibold block text-base mb-1">72 horas.</span>
              Esse é o período mais difícil. Temos um mapa para cada hora.
            </p>
            <p className="text-sm text-muted-foreground font-mono tracking-wide">
              <span className="text-primary font-semibold block text-base mb-1">Guardiões não prometem cura.</span>
              Entregam estrutura.
            </p>
          </div>
        </div>
      </section>

      {/* ÀS 2 DA MANHÃ */}
      <section className="py-24 bg-[#0a0a0a] border-y border-border/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-primary/50 uppercase mb-6">Às 2 da manhã</p>
          <p
            className="font-display text-foreground/80 leading-[1.2] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}
          >
            A fissura não escolhe horário. Não escolhe dia. Não escolhe se você está pronto.
          </p>
          <p className="text-muted-foreground text-base mt-6 max-w-xl mx-auto">O protocolo tampouco.</p>
        </div>
      </section>

      {/* QUAL É SUA SITUAÇÃO */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Ponto de entrada</span>
            </div>
            <h2 className="font-display text-foreground">Onde você está agora?</h2>
            <p className="text-muted-foreground mt-3 max-w-xl">Sem diagnóstico. Sem formulário. Escolha o que descreve o seu momento.</p>
          </div>
          <div ref={cardsRef as RefObject<HTMLDivElement>} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pathCards.map((card, i) => (
              <Link
                key={card.id}
                to={card.href}
                className={`tactical-card group block gs-reveal gs-reveal-delay-${i + 1}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-primary/60">{card.label}</span>
                  <card.icon size={18} className="text-primary/40 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3 leading-tight">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{card.description}</p>
                <div className="flex items-center gap-1 text-xs text-primary font-medium uppercase tracking-widest">
                  Entrar na trilha <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRÊS PILARES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O método</span>
          </div>
          <div ref={pillarsRef as RefObject<HTMLDivElement>} className="mb-16">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.word}
                className={`flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16 py-8 border-t border-border gs-reveal gs-reveal-delay-${i + 1}`}
              >
                <span className="font-mono text-xs text-muted-foreground/50 md:w-8 flex-shrink-0">{pillar.num}</span>
                <h3
                  className="font-display text-foreground md:w-64 flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem,8vw,6rem)', lineHeight: '0.95', letterSpacing: '-0.02em' }}
                >
                  {pillar.word}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{pillar.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/protocolos" className="tactical-button flex items-center justify-center gap-2">
              Ver todos os Protocolos <ArrowRight size={14} />
            </Link>
            <Link to="/produtos" className="tactical-button-outline flex items-center justify-center gap-2">
              Conhecer os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section ref={quoteRef as RefObject<HTMLElement>} className="py-32 overflow-hidden gs-reveal">
        <div className="container mx-auto px-4">
          <div className="section-divider mb-16" />
          <p
            className="font-display text-foreground tracking-[-0.015em] max-w-5xl"
            style={{ fontSize: 'clamp(2.5rem,7vw,5.5rem)', lineHeight: '1.0' }}
          >
            <em className="text-primary not-italic">72 horas.</em>{" "}
            É o que separa a fissura do protocolo. Não força de vontade — estrutura.
          </p>
          <div className="section-divider mt-16" />
        </div>
      </section>

      {/* ÂNCORA HUMANA */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Quem fala</span>
            </div>
            <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-snug mb-8 tactical-border">
              &ldquo;Isso não veio de um manual. Veio de dentro, com estrutura, com honestidade e sem performance.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 border border-primary/20 flex items-center justify-center bg-primary/5">
                <ShieldIcon size="sm" showLetters={false} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Luis Vanzer</p>
                <p className="text-xs text-muted-foreground">
                  Criador de O Guardião Sóbrio. Não é terapeuta, não é coach, não é religioso.
                  Está no processo — e fala a partir daí.
                </p>
              </div>
            </div>
            <Link to="/sobre" className="text-xs text-primary uppercase tracking-widest hover:underline flex items-center gap-1">
              Sobre o método <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* MAPA DE MOMENTOS CRÍTICOS */}
      <section ref={momentosRef as RefObject<HTMLElement>} className="py-24 gs-reveal">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Momentos críticos</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
            {[
              { hora: "00:00", title: "A fissura chega", desc: "Não escolhe hora. Não pede permissão. O pico dura 20–40 minutos." },
              { hora: "72h",   title: "O período mais difícil", desc: "As primeiras 72 horas são as de maior risco de recaída. Hora a hora." },
              { hora: "30d",   title: "A base se forma", desc: "Após 30 dias com estrutura, o protocolo vira hábito. Não depende de motivação." },
            ].map((item) => (
              <div key={item.hora} className="p-8 border-b md:border-b-0 md:border-r border-border last:border-0">
                <span className="font-mono text-[2.5rem] leading-none text-primary/20 block mb-4 font-bold">{item.hora}</span>
                <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÚLTIMOS ARTIGOS */}
      {recentPosts.length > 0 && (
        <section className="py-24 section-alt">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Despachos do campo</span>
                </div>
                <h2 className="font-display text-foreground">Texto direto. Sem promessas vazias.</h2>
              </div>
              <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary hover:underline uppercase tracking-widest text-xs">
                Ver todos <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`} className="tactical-card group block">
                  <div className="section-divider mb-5" />
                  <span className="text-xs font-mono text-muted-foreground/50 mb-3 block">{post.category ?? "Estratégia"}</span>
                  <h3 className="font-display text-lg text-foreground mb-3 leading-snug group-hover:text-primary/90 transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-6">{post.summary}</p>
                  <div className="flex items-center gap-1 text-xs text-primary uppercase tracking-widest">
                    Ler despacho <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Protocolo semanal</span>
          </div>
          <h2 className="font-display text-foreground mb-4">Um protocolo por semana. Direto na sua caixa.</h2>
          <p className="text-muted-foreground mb-8">
            Sem spam. Sem teatro.<br />
            Uma missão tática por semana para quem está construindo sobriedade no mundo real.
          </p>
          <NewsletterCapture
            ctaLabel="Quero a Estrutura"
            trust="Sem cobrança. Você sai quando quiser."
            successMessage="Você está dentro. Primeiro protocolo chega em até 7 dias."
            tag="newsletter-home"
          />
        </div>
      </section>

    </Layout>
  );
};

export default Index;
