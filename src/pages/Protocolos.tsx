import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AlertTriangle, ArrowRight, Clock, Lock } from "lucide-react";

type ProtoStatus = "ativo" | "preview" | "em-desenvolvimento";

type Protocolo = {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  audience: string;
  summary: string;
  duration?: string;
  status: ProtoStatus;
  href?: string;
};

const principal: Protocolo[] = [
  {
    id: "escudo-72h",
    num: "P-01",
    title: "Protocolo Escudo 72h",
    subtitle: "Protocolo de crise imediata",
    audience: "Em recuperação · Vontade hoje",
    summary:
      "O protocolo central do método. Guia hora a hora para atravessar as primeiras 72 horas em crise — fissura ativa, abstinência, situação de risco. Sem improvisar.",
    duration: "72 horas",
    status: "ativo",
    href: "/protocolos/escudo-72h",
  },
];

const complementares: Protocolo[] = [
  {
    id: "perimetro-24h",
    num: "P-02",
    title: "Protocolo Perímetro 24h",
    subtitle: "Prevenção e planejamento diário",
    audience: "Em recuperação",
    summary:
      "O protocolo de rotina. Check matinal, perímetro de segurança, mapeamento de gatilhos e protocolo de encerramento do dia. Para transformar estrutura em hábito.",
    duration: "24h / recorrente",
    status: "ativo",
    href: "/protocolos/perimetro-24h",
  },
  {
    id: "primeiros-30",
    num: "P-03",
    title: "Primeiros 30 Dias",
    subtitle: "Programa de construção de base",
    audience: "Em recuperação",
    summary:
      "Trinta dias com protocolo diário. Revisões semanais de rota. Para quem quer estrutura completa no período mais crítico — sem improvisar o dia seguinte.",
    duration: "30 dias",
    status: "preview",
  },
  {
    id: "seguranca-respeito",
    num: "P-04",
    title: "Protocolo Segurança e Respeito",
    subtitle: "Para familiares e cônjuges",
    audience: "Familiar",
    summary:
      "Como proteger quem cuida sem virar o guardião do outro. Separação de papéis, perímetro para a família, scripts para situações de crise. Sem culpa, sem script de resgate.",
    duration: "Referência permanente",
    status: "preview",
  },
  {
    id: "bunker-noturno",
    num: "P-05",
    title: "Protocolo Bunker Noturno",
    subtitle: "Gerenciamento do risco noturno",
    audience: "Em recuperação",
    summary:
      "Noite é o momento de maior vulnerabilidade. Este protocolo mapeia os gatilhos noturnos específicos e cria uma estrutura de encerramento para proteger o sono.",
    duration: "Noturno / recorrente",
    status: "preview",
  },
];

const emDesenvolvimento: Protocolo[] = [
  {
    id: "reentrada-social",
    num: "P-06",
    title: "Reentrada Social 7 Dias",
    subtitle: "Volta ao ambiente social",
    audience: "Em recuperação",
    summary: "Como voltar a eventos, reuniões e situações sociais com álcool sem improvisar a resposta.",
    status: "em-desenvolvimento",
  },
  {
    id: "recaida-1a-hora",
    num: "P-07",
    title: "Protocolo Recaída — 1ª Hora",
    subtitle: "Gestão imediata pós-recaída",
    audience: "Em recuperação",
    summary: "O que fazer na primeira hora depois de uma recaída. Sem drama, sem colapso. Só estrutura.",
    status: "em-desenvolvimento",
  },
  {
    id: "familia-estendida",
    num: "P-08",
    title: "Protocolo Família Estendida",
    subtitle: "Gestão de família ampla",
    audience: "Familiar",
    summary: "Como lidar com festas de família, comentários de parentes e dinâmicas de grupo que sabotam a estrutura.",
    status: "em-desenvolvimento",
  },
  {
    id: "insight-habito",
    num: "P-09",
    title: "Protocolo Insight → Hábito",
    subtitle: "Consolidação de aprendizado",
    audience: "Em recuperação",
    summary: "Como transformar um insight em protocolo permanente. Metodologia para fixar o que funciona.",
    status: "em-desenvolvimento",
  },
  {
    id: "conjuge",
    num: "P-10",
    title: "Protocolo Cônjuge",
    subtitle: "Para parceiros próximos",
    audience: "Familiar",
    summary: "Específico para cônjuges. Como apoiar sem controlar, proteger sem salvar, e manter o próprio equilíbrio.",
    status: "em-desenvolvimento",
  },
  {
    id: "familiares-distancia",
    num: "P-11",
    title: "Protocolo Familiares à Distância",
    subtitle: "Apoio remoto",
    audience: "Familiar",
    summary: "Para familiares que apoiam de outra cidade ou país. O que fazer, o que não fazer, como manter contato sem vigilância.",
    status: "em-desenvolvimento",
  },
];

const statusConfig = {
  ativo:              { label: "Ativo",              color: "text-primary border-primary/40 bg-primary/10" },
  preview:            { label: "Preview",            color: "text-muted-foreground border-border bg-secondary" },
  "em-desenvolvimento": { label: "Em breve",         color: "text-muted-foreground/60 border-border/50 bg-background" },
};

const ProtoCard = ({ p, compact = false }: { p: Protocolo; compact?: boolean }) => {
  const cfg = statusConfig[p.status];
  return (
    <div className={`tactical-card ${compact ? "p-5" : "p-7"} flex flex-col`}>
      <span className={`absolute top-4 right-4 font-mono leading-none text-primary/20 pointer-events-none select-none ${compact ? "text-[3rem]" : "text-[5rem]"}`}>
        {p.num}
      </span>
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-muted-foreground/40">{p.num}</span>
        <div className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 border font-mono ${cfg.color}`}>
          {p.status === "ativo" ? <ArrowRight size={9} /> : <Clock size={9} />}
          {cfg.label}
        </div>
      </div>

      <h3 className={`font-display text-foreground leading-tight mb-1 ${compact ? "text-xl" : "text-2xl"}`}>
        {p.title}
      </h3>
      <p className="text-xs font-mono text-primary/50 mb-3 tracking-wide">{p.subtitle}</p>

      {p.duration && (
        <p className="text-xs font-mono text-muted-foreground/40 mb-3">
          <Clock size={10} className="inline mr-1" />{p.duration}
        </p>
      )}

      <p className={`text-muted-foreground leading-relaxed flex-1 mb-4 ${compact ? "text-xs" : "text-sm"}`}>
        {p.summary}
      </p>

      <p className="text-xs text-muted-foreground/40 font-mono mb-4 border-l border-border pl-2">
        {p.audience}
      </p>

      {p.status === "ativo" && p.href ? (
        <Link to={p.href} className="tactical-button flex items-center justify-center gap-2">
          Iniciar Protocolo <ArrowRight size={14} />
        </Link>
      ) : p.status === "preview" ? (
        <div className="flex items-center gap-2 text-xs text-muted-foreground/50 font-mono pt-2 border-t border-border">
          <Lock size={12} />
          Em breve — entre na lista para acesso antecipado
        </div>
      ) : (
        <div className="flex items-center gap-2 text-xs text-muted-foreground/30 font-mono pt-2 border-t border-border">
          <Clock size={12} />
          Em desenvolvimento
        </div>
      )}
    </div>
  );
};

const Protocolos = () => {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero-gradient py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Protocolos</span>
            </div>
            <h1 className="font-display text-foreground leading-tight mb-6">
              A fissura não pede licença.{" "}
              <em className="text-primary not-italic">O protocolo também não.</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              Cada protocolo existe para um momento específico.
              Não são conteúdos de inspiração — são estruturas para usar quando o momento chegar.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRINCIPAL ────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Protocolo Principal</span>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-11">
            O núcleo do método. O primeiro a usar em qualquer crise.
          </p>
          <div className="max-w-2xl">
            {principal.map((p) => <ProtoCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── COMPLEMENTARES ───────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Protocolos Complementares</span>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-11">
            Situações específicas. Cada um cobre um momento diferente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {complementares.map((p) => <ProtoCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── EM DESENVOLVIMENTO ───────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Em Desenvolvimento</span>
          </div>
          <p className="text-muted-foreground text-sm mb-10 ml-11">
            Os próximos a ser lançados. Entre na lista para acesso assim que abrirem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emDesenvolvimento.map((p) => <ProtoCard key={p.id} p={p} compact />)}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────── */}
      <section className="py-12 section-alt">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="alert-box flex items-start gap-3">
            <AlertTriangle size={15} className="text-destructive mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Protocolos são estrutura de suporte — não substituem psiquiatras, psicólogos ou médicos.
              Em emergência médica, ligue 192 (SAMU) ou procure a UPA mais próxima.
            </p>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Protocolos;
