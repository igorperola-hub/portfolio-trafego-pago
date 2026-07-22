export default function CreativesPortfolio() {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-accent">
          PORTFÓLIO DE CRIATIVOS
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          A alma dos anúncios
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Criativos estratégicos com pesquisa prévia de mercado, focados na
          dor e no benefício do cliente, elaborados para atrair leads
          qualificados.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="flex aspect-[9/16] items-center justify-center rounded-xl border border-dashed border-border bg-surface text-xs text-muted"
            >
              Criativo {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
          <p className="text-3xl font-bold text-accent">75%</p>
          <p className="mt-1 text-sm text-muted">
            do impacto dos anúncios está relacionado à qualidade dos
            criativos
          </p>
          <p className="mt-1 text-xs text-muted/70">
            Fonte: Think with Google (2019)
          </p>
        </div>
      </div>
    </section>
  );
}
