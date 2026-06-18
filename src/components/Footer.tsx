import { Link } from "react-router-dom";
import { ShieldIcon } from "./ShieldIcon";
import { Shield } from "lucide-react";

const navLinks = [
  { label: "Comece Aqui", href: "/comece-aqui" },
  { label: "Protocolos", href: "/protocolos" },
  { label: "Blog", href: "/blog" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">

      {/* ── BANNER EMERGÊNCIA ───────────────────────────── */}
      <div className="border-b border-primary/20 bg-primary/5">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-primary flex-shrink-0" />
              <span className="text-xs text-foreground font-mono">
                Em crise agora?
              </span>
            </div>
            <Link
              to="/protocolos/escudo-72h"
              className="text-xs text-primary font-medium hover:underline font-mono"
            >
              Acesse o Protocolo Escudo-72h →
            </Link>
            <span className="hidden sm:block text-muted-foreground/40 text-xs">|</span>
            <span className="text-xs text-muted-foreground/60 font-mono">
              Emergência médica: 192 (SAMU)
            </span>
          </div>
        </div>
      </div>

      {/* ── CORPO DO FOOTER ────────────────────────────── */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <ShieldIcon size="sm" />
              <span className="font-display text-xl tracking-wider text-foreground">
                O Guardião Sóbrio
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed mb-4">
              Sobriedade adulta real. Estratégia prática para atravessar a vontade
              de beber, proteger a casa e construir sobriedade sem teatro.
            </p>
            <p className="text-xs text-muted-foreground/50 leading-relaxed max-w-xs">
              Este conteúdo não substitui psiquiatras, psicólogos ou médicos.
            </p>
          </div>

          {/* navegação */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.15em] text-primary uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* método */}
          <div>
            <h4 className="font-mono text-xs tracking-[0.15em] text-primary uppercase mb-5">
              O Método
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Espelho", href: "/sobre" },
                { label: "Tática", href: "/protocolos" },
                { label: "Escudo", href: "/protocolos/escudo-72h" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── RODAPÉ ────────────────────────────────── */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50 font-mono">
            &copy; {new Date().getFullYear()} Luis Vanzer — O Guardião Sóbrio
          </p>
          <p className="text-xs text-muted-foreground/40 font-mono">
            Sobriedade não é abstinência. É construção.
          </p>
        </div>
      </div>

    </footer>
  );
};
