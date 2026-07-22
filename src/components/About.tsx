import { NAME, WHATSAPP_LINK, INSTAGRAM_LINK, LINKEDIN_LINK } from "@/lib/content";

export default function About() {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold tracking-widest text-accent">
            QUEM SOU EU
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            O especialista por trás dos resultados
          </h2>

          <p className="mt-6 text-muted">
            Sou {NAME}, gestor de tráfego pago e analista de performance e
            mídia paga, dedicado a impulsionar o sucesso de negócios locais e
            digitais. Ajudo você a transformar cliques em clientes.
          </p>

          <p className="mt-4 text-muted">
            [Espaço reservado para trajetória profissional: experiências
            anteriores, empresas, nichos atendidos e resultados relevantes.]
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Negócios Locais", "Infoprodutos", "Perpétuo", "Lançamento"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-90"
            >
              Falar no WhatsApp
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent"
            >
              Instagram
            </a>
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-sm lg:order-2">
          <div className="flex aspect-[4/5] items-center justify-center rounded-3xl border border-border bg-surface text-sm text-muted">
            [Sua foto aqui]
          </div>
        </div>
      </div>
    </section>
  );
}
