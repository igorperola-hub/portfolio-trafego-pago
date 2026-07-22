import Image from "next/image";
import { CLIENTS } from "@/lib/content";

function ClientCard({ client }: { client: (typeof CLIENTS)[number] }) {
  return (
    <div className="flex w-40 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-surface p-4 text-center">
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
  );
}

export default function ClientsPortfolio() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold tracking-widest text-accent">
          PORTFÓLIO
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Alguns Clientes já atendidos
        </h2>
      </div>

      <div className="mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <ClientCard key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
