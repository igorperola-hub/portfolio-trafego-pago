import Image from "next/image";
import { NAME, STATS, WHATSAPP_LINK } from "@/lib/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pt-16 pb-20">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {["Meta Ads", "Google Ads", "Performance"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Transformo tráfego pago em{" "}
            <span className="text-accent">clientes reais e mensuráveis.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            Sou {NAME}, gestor de tráfego pago e analista de performance.
            Ajudo negócios locais e digitais a crescerem de forma previsível
            com estratégia, dados e otimização contínua.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-90"
            >
              Quero uma análise gratuita
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent"
            >
              Ver serviços ↓
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-accent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -left-8 -top-16 z-10 h-28 w-28 animate-float overflow-hidden rounded-full border-4 border-accent bg-surface shadow-xl shadow-black/40 sm:h-32 sm:w-32">
            <Image
              src="/images/igor_hero.jpg"
              alt={NAME}
              fill
              sizes="128px"
              className="object-cover"
              priority
            />
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 shadow-2xl shadow-black/40">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs text-muted">Performance</span>
              <span className="rounded-full bg-accent/10 px-2 py-1 text-xs font-semibold text-accent">
                Novo lead!
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-surface-2 p-4">
                <p className="text-xs text-muted">Meta Ads</p>
                <p className="mt-1 text-xl font-bold text-accent">ROAS 4.2×</p>
                <p className="text-xs text-muted">retorno sobre ad spend</p>
              </div>

              <div className="rounded-2xl bg-surface-2 p-4">
                <p className="text-xs text-muted">Google Ads</p>
                <p className="mt-1 text-xl font-bold">↑ 24% conversões</p>
              </div>

              <div className="rounded-2xl bg-surface-2 p-4">
                <p className="text-xs text-muted">Leads no período</p>
                <p className="mt-1 text-xl font-bold">
                  +32 leads <span className="text-accent">↑ 22%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
