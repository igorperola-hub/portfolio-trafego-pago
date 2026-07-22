"use client";

import { useState } from "react";
import { NAME, NAV_LINKS, TAGLINE, WHATSAPP_LINK } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="font-semibold tracking-tight">{NAME}</span>
          <span className="text-xs font-medium tracking-widest text-accent">
            {TAGLINE.toUpperCase()}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground transition hover:brightness-90"
          >
            Fale comigo
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          aria-label="Abrir menu"
        >
          <span className="text-accent">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-center text-sm font-semibold text-accent-foreground"
          >
            Fale comigo
          </a>
        </div>
      )}
    </header>
  );
}
