export default function Certification() {
  return (
    <section className="bg-surface px-6 py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-border bg-surface-2 p-10 text-center md:flex-row md:text-left">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-background text-3xl">
          🏆
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-accent">
            CERTIFICAÇÕES
          </p>
          <h3 className="mt-2 text-2xl font-bold">
            Certificação <span className="text-accent">[Nome do curso]</span>
          </h3>
          <p className="mt-2 text-sm text-muted">
            [Espaço reservado para descrever formações e certificações reais
            em tráfego pago, mídia paga e performance.]
          </p>
        </div>
      </div>
    </section>
  );
}
