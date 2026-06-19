export const MarqueeStrip = () => {
  const text = "A fissura não pede licença · O protocolo também não · 72 horas · Estrutura, não motivação · Sobriedade não é abstinência — é construção · ";
  const repeated = text.repeat(4);
  return (
    <div
      className="overflow-hidden border-y border-border py-3 bg-[#0d0d0d]"
      aria-hidden="true"
    >
      <div
        style={{ display: 'flex', width: 'max-content' }}
        className="animate-[gs-marquee_30s_linear_infinite] motion-reduce:animate-none"
      >
        <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground/40 uppercase whitespace-nowrap">
          {repeated}
        </span>
        <span className="font-mono text-xs tracking-[0.15em] text-muted-foreground/40 uppercase whitespace-nowrap" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </div>
  );
};
