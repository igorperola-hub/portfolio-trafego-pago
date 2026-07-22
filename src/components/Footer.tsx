import {
  NAME,
  TAGLINE,
  WHATSAPP_LINK,
  INSTAGRAM_LINK,
  INSTAGRAM_HANDLE,
  LINKEDIN_LINK,
} from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <p className="font-semibold">{NAME}</p>
          <p className="text-xs font-medium tracking-widest text-accent">
            {TAGLINE.toUpperCase()}
          </p>
          <p className="mt-3 text-sm text-muted">
            Gestor de tráfego pago e analista de mídia paga e performance.
          </p>
        </div>

        <div>
          <p className="font-semibold">Serviços</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href="#servicos">Instagram & Facebook Ads</a>
            </li>
            <li>
              <a href="#servicos">Google Ads</a>
            </li>
            <li>
              <a href="#servicos">Criativos de Ads</a>
            </li>
            <li>
              <a href="#servicos">Consultoria em Tráfego</a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-xs text-muted">
        <p>
          © {year} {NAME} · {TAGLINE}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
