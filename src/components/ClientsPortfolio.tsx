import { CLIENTS } from "@/lib/content";

export default function ClientsPortfolio() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-accent">
          PORTFÓLIO
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Clientes já atendidos
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {CLIENTS.map((client) => (
            <div
              key={client}
              className="flex aspect-square items-center justify-center rounded-xl border border-border bg-surface px-2 text-center text-xs text-muted"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
