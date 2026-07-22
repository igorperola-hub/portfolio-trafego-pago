import { PLATFORMS } from "@/lib/content";

export default function PlatformsMarquee() {
  const items = [...PLATFORMS, ...PLATFORMS, ...PLATFORMS, ...PLATFORMS];

  return (
    <section className="border-y border-border bg-surface py-8">
      <p className="mb-4 text-center text-xs font-semibold tracking-widest text-muted">
        PLATAFORMAS ONDE ANUNCIO PARA O SEU NEGÓCIO
      </p>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="text-lg font-semibold text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
