"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold tracking-widest text-accent">
          DÚVIDAS FREQUENTES
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Perguntas Frequentes
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="text-xl text-accent">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-muted">{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
