import { useState } from "react";
import { Loader2, ShieldCheck } from "lucide-react";

interface NewsletterCaptureProps {
  variant?: "inline" | "popup";
  headline?: string;
  description?: string;
  bullets?: string[];
  ctaLabel?: string;
  successMessage?: string;
  tag?: string;
  trust?: string;
  compact?: boolean;
}

export const NewsletterCapture = ({
  headline,
  description,
  bullets,
  ctaLabel = "Solicitar Acesso",
  successMessage = "// Acesso registrado. Protocolo enviado em até 7 dias.",
  tag,
  trust,
  compact = false,
}: NewsletterCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    void tag;
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <div className={compact ? "" : "space-y-5"}>
      {headline && !compact && (
        <h3 className="font-display text-2xl md:text-3xl text-foreground">{headline}</h3>
      )}
      {description && !compact && (
        <p className="text-muted-foreground">{description}</p>
      )}
      {bullets && bullets.length > 0 && !compact && (
        <ul className="space-y-2 text-sm text-muted-foreground">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="border border-primary/20 bg-[#0a0a0a] p-8">
        {status === "success" ? (
          <p className="font-mono text-sm text-primary leading-relaxed">
            {successMessage}
          </p>
        ) : (
          <>
            <p className="text-xs font-mono tracking-[0.2em] text-primary/50 uppercase mb-3">
              Solicitar acesso — protocolo semanal
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">Seu e-mail</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="bg-transparent border-b border-primary/30 border-t-0 border-l-0 border-r-0 rounded-none font-mono text-sm py-3 focus:border-primary focus:outline-none text-foreground placeholder:text-muted-foreground/30 w-full"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="tactical-button flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : ctaLabel}
              </button>
            </form>
            {status === "error" && (
              <p className="font-mono text-xs text-destructive/70 mt-3">
                // Erro ao registrar. Tente novamente.
              </p>
            )}
            {trust && (
              <p className="text-xs text-muted-foreground/50 mt-4 font-mono">{trust}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
