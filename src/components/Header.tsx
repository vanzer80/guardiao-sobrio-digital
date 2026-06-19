import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ShieldIcon } from "./ShieldIcon";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Comece Aqui", href: "/comece-aqui" },
  { label: "Protocolos", href: "/protocolos" },
  { label: "Trilhas", href: "/trilhas" },
  { label: "Produtos", href: "/produtos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <ShieldIcon size="sm" className="transition-transform group-hover:scale-105" />
            <span className="font-display text-xl md:text-2xl text-foreground" style={{ letterSpacing: '0.04em' }}>
              O Guardião Sóbrio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-xs font-medium tracking-[0.12em] uppercase transition-colors",
                  location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/app"
              className="tactical-button text-xs py-2.5 px-5"
            >
              Entrar no Bunker
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="container mx-auto px-4 py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium py-3 border-b border-border/50 tracking-wide transition-colors",
                  location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/app"
              onClick={() => setIsOpen(false)}
              className="tactical-button text-center mt-4"
            >
              Entrar no Bunker
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
