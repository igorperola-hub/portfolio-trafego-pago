import Image from "next/image";
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
              key={client.name}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface p-4 text-center"
            >
              {client.image ? (
                <div className="relative h-16 w-16 overflow-hidden rounded-full bg-surface-2">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-2 text-sm font-semibold text-accent">
                  {client.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <span className="text-xs text-muted">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
