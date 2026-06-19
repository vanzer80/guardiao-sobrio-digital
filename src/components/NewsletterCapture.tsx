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
  successMessage = "Acesso registrado. Protocolo enviado em até 7 dias.",
  tag,
  trust,
  compact = false,
}: NewsletterCaptureProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await new Promise<void>((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
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

      {status === "success" ? (
        <div className="font-mono text-sm text-primary p-4 border border-primary/20 bg-[#0a0a0a]">
          // {successMessage}
        </div>
      ) : status === "error" ? (
        <div className="font-mono text-sm text-destructive/70 p-4 border border-destructive/20 bg-[#0a0a0a]">
          // Erro ao registrar. Tente novamente.
        </div>
      ) : (
        <div className="border border-primary/20 bg-[#0a0a0a] p-8">
          <p className="text-xs font-mono tracking-[0.2em] text-primary/50 uppercase mb-3">
            Solicitar acesso — protocolo semanal
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
              className="tactical-button w-full flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <><Loader2 size={14} className="animate-spin" /> <span className="font-mono text-xs">aguardando...</span></>
              ) : (
                ctaLabel
              )}
            </button>
          </form>
          {trust && (
            <p className="text-xs text-muted-foreground/50 font-mono mt-4">{trust}</p>
          )}
        </div>
      )}
    </div>
  );
};
