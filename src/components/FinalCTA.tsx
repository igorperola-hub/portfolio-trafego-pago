import { WHATSAPP_LINK } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-surface p-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pronto para crescer com{" "}
          <span className="text-accent">estratégia e dados reais?</span>
        </h2>
        <p className="mt-4 text-muted">
          Agende uma análise gratuita e descubra oportunidades reais para o
          seu negócio decolar com tráfego pago.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-90"
        >
          Agendar análise gratuita →
        </a>
        <p className="mt-3 text-xs text-muted">
          Sem compromisso · Resposta rápida · Via WhatsApp
        </p>
      </div>
    </section>
  );
}
