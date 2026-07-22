import { NAME } from "@/lib/content";

export default function NameMarquee() {
  const line = Array(6).fill(NAME.toUpperCase()).join("  •  ");

  return (
    <section className="overflow-hidden border-y border-border bg-surface py-10">
      <div className="flex w-max animate-marquee-slow gap-0 whitespace-nowrap">
        {[line, line].map((text, i) => (
          <span
            key={i}
            className="px-4 text-4xl font-extrabold tracking-tight text-border sm:text-6xl"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
}
