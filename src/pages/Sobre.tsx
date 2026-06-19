import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const fundamentos = [
  "Honestidade radical sobre o próprio estado",
  "Separação entre vontade e identidade",
  "Protocolo antes de decisão",
  "Perímetro como proteção, não prisão",
  "Recaída não cancela progresso",
  "Família precisa de estratégia própria",
  "Sobriedade não é abstinência — é construção",
];

const Sobre = () => {
  return (
    <Layout>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0d]">
          <img
            src="/luis-vanzer.png"
            alt="Luis Vanzer — criador de O Guardião Sóbrio"
            className="w-full h-full object-cover object-top opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Sobre</span>
            </div>
            <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-[-0.02em] text-foreground mb-6">
              Isso não veio<br />
              <em className="text-primary not-italic">de um manual.</em>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              Luis Vanzer. Criador de O Guardião Sóbrio.
              Não é terapeuta. Não é coach. Não é religioso.
              Está no processo — e fala a partir daí.
            </p>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ────────────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">A história</span>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  A sobriedade não chegou como revelação. Chegou como necessidade.
                </p>
                <p>
                  Anos funcionando como pessoa que bebia.
                  Trabalho, família, aparências mantidas.
                  Até que o custo ficou visível demais para ignorar.
                </p>
                <p>
                  Não fui para a AA. Não fui para a igreja.
                  Fui para dentro — com estrutura, com honestidade, sem performance.
                  Documentei o processo.
                </p>
                <p>
                  O que está aqui é o que funcionou.
                  Sem promessa de que vai funcionar para todo mundo.
                  Sem omissão do que é difícil.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary" />
                <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">O que não sou</span>
              </div>
              <div className="space-y-0">
                {[
                  "Não sou terapeuta nem médico",
                  "Não prometo cura ou resultados garantidos",
                  "Não tenho vínculo com nenhuma religião ou método",
                  "Não sou coach motivacional",
                  "Não julgo quem recai",
                  "Não me coloco como quem já resolveu tudo",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 py-4 border-b border-border">
                    <span className="text-primary font-mono text-xs mt-0.5 flex-shrink-0">—</span>
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CITAÇÃO ─────────────────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="font-display text-[clamp(2rem,5vw,3.5rem)] text-foreground/90 leading-[1.1] tracking-[-0.01em]">
            &ldquo;Isso não veio de um manual.
            Veio de dentro, com estrutura, com honestidade
            e sem performance.&rdquo;
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono text-primary/60 tracking-[0.2em] uppercase">
              Luis Vanzer
            </span>
          </div>
        </div>
      </section>

      {/* ── FUNDAMENTOS ─────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-14">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Os fundamentos</span>
          </div>
          <div className="max-w-2xl">
            <h2 className="font-display text-foreground mb-10">
              Os princípios que guiam o método.
            </h2>
            <div className="space-y-0">
              {fundamentos.map((f, i) => (
                <div key={f} className="flex items-start gap-6 py-5 border-b border-border group">
                  <span className="font-mono text-xs text-primary/50 mt-1 w-6 flex-shrink-0 group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-foreground text-sm leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER + CTA ─────────────────────────────── */}
      <section className="py-24 section-alt">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">Importante</span>
          </div>
          <p className="text-muted-foreground/70 text-sm leading-relaxed border-l-2 border-border pl-4 mb-12">
            Este conteúdo não substitui acompanhamento profissional de psiquiatras,
            psicólogos, médicos ou grupos de apoio especializados.
            Em caso de emergência médica, ligue 192 (SAMU) ou procure a UPA mais próxima.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/protocolos" className="tactical-button flex items-center justify-center gap-2">
              Ver Protocolos <ArrowRight size={14} />
            </Link>
            <Link to="/comece-aqui" className="tactical-button-outline flex items-center justify-center gap-2">
              Começar Estrutura
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Sobre;
