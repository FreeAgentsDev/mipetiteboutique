import Image from "next/image";
import Link from "next/link";

import { CartBar, CartProvider, WhatsAppFab } from "@/components/cart";
import { Wordmark } from "@/components/brand-mark";
import { SITE, orderHref } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Colección" },
  { href: "/#accesorios", label: "Accesorios" },
  { href: "/#lame", label: "L’âme" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/qr", label: "QR" },
];

const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Colección" },
  { href: "/#lame", label: "L’âme" },
  { href: "/#nosotros", label: "Nosotros" },
  {
    href: orderHref(
      "Hola ♡ Vi una pieza en MiPetiteBoutique y me gustaría conocer más información.",
    ),
    label: "Contacto",
    external: true,
  },
  { href: SITE.instagram, label: "Instagram", external: true },
];

export function Header() {
  return (
    <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="shrink-0" aria-label="MiPetiteBoutique">
        <Wordmark />
      </Link>
      <nav className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-[11px] font-medium tracking-wide text-mute uppercase">
        {LINKS.map((l) => (
          <Link key={l.label} href={l.href} className="hover:text-ink">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 pt-8 text-center text-xs text-mute">
      <p className="font-serif text-lg italic text-ink">{SITE.name}</p>
      <p className="mt-2 font-light leading-relaxed">
        {SITE.tagline} ♡
      </p>
      <p className="mt-4">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:text-ink"
        >
          {SITE.instagramHandle}
        </a>
      </p>
      <p className="mt-1">
        {SITE.city}, {SITE.region}
      </p>
      <p className="mt-3">
        <a
          href={SITE.tiktok}
          target="_blank"
          rel="noreferrer"
          className="hover:text-ink"
        >
          TikTok
        </a>
      </p>
      <nav className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-1">
        {FOOTER_LINKS.map((l) =>
          l.external ? (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              {l.label}
            </a>
          ) : (
            <Link key={l.label} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ),
        )}
      </nav>
      <a
        href="https://freeagentsdev.com"
        className="mx-auto mt-6 flex w-fit items-center gap-1.5 text-[11px] text-mute/70 hover:text-ink"
      >
        <span>Hecho con</span>
        <Image
          src="/fa-logo.png"
          alt=""
          width={16}
          height={16}
          className="size-4 rounded-full object-cover"
        />
        <span className="font-medium tracking-wide">FreeAgents</span>
      </a>
    </footer>
  );
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="mx-auto min-h-dvh max-w-lg px-5 py-8 pb-28 md:max-w-3xl">
        <Header />
        {children}
        <Footer />
      </div>
      <CartBar />
      <WhatsAppFab />
    </CartProvider>
  );
}
