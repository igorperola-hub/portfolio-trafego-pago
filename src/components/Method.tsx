import { METHOD_STEPS, WHATSAPP_LINK } from "@/lib/content";

export default function Method() {
  return (
    <section id="metodo" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-accent">
          COMO FUNCIONA
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          O Método <span className="text-accent">ADC</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Três etapas integradas que transformam investimento em anúncios em
          clientes reais e mensuráveis.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {METHOD_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-surface-2 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-sm font-semibold text-accent">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
              <p className="mt-4 text-xs text-accent/80">{step.tags}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-90"
          >
            Quero aplicar o Método no meu negócio
          </a>
        </div>
      </div>
    </section>
  );
}
