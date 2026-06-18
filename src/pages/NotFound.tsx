import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-primary" />
              <span className="text-xs font-mono tracking-[0.2em] text-primary uppercase">404</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Essa página não existe.
            </h1>
            <p className="text-muted-foreground mb-10 text-lg">
              Mas você ainda está aqui. Isso conta.
            </p>
            <Link to="/" className="tactical-button flex items-center gap-2 w-fit">
              Voltar para o início <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
