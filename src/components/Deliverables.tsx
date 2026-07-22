import { DELIVERABLES } from "@/lib/content";

export default function Deliverables() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          O que eu <span className="text-accent">entrego?</span>
        </h2>

        <div className="mt-12 divide-y divide-border border-t border-border">
          {DELIVERABLES.map((item) => (
            <div key={item.number} className="flex gap-6 py-8">
              <span className="text-2xl font-bold text-accent">
                {item.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
