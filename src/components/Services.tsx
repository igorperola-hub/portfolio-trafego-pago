import { SERVICES, WHO_FOR } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-accent">
          SERVIÇOS
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Especializados para <span className="text-accent">impulsionar</span>{" "}
          seu negócio
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Gestão completa nas plataformas que mais convertem, com estratégia e
          dados reais.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-border bg-surface p-6 transition hover:border-accent"
            >
              <span className="text-xs font-semibold tracking-widest text-accent">
                {service.tag.toUpperCase()}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold">
            Para quem são os meus serviços
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_FOR.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
              >
                <span className="text-accent">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
