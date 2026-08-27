import Image from "next/image";
import Link from "next/link";

import { CartBar, CartProvider } from "@/components/cart";
import { Wordmark } from "@/components/brand-mark";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Bolsos" },
  { href: "/#lookbook", label: "Lookbook" },
  { href: "/qr", label: "QR" },
];

export function Header() {
  return (
    <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
      <Link href="/" className="leading-tight" aria-label="Mi Petite Boutique">
        <Wordmark className="block text-[1.65rem] text-ink" />
        <span className="text-[10px] font-light tracking-[0.22em] text-mute uppercase">
          By Isa Quintero
        </span>
      </Link>
      <nav className="flex flex-wrap gap-3 text-xs font-medium tracking-wide text-mute uppercase">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-ink">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-ink/10 pt-6 text-center text-xs text-mute">
      <p className="tracking-[0.18em] uppercase">{SITE.city}</p>
      <p className="mt-2">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="hover:text-ink"
        >
          {SITE.instagramHandle}
        </a>
        {" · "}
        <a
          href={SITE.tiktok}
          target="_blank"
          rel="noreferrer"
          className="hover:text-ink"
        >
          TikTok
        </a>
      </p>
      <a
        href="https://freeagentsdev.com"
        className="mx-auto mt-4 flex w-fit items-center gap-1.5 text-[11px] text-mute/70 hover:text-ink"
      >
        <span>Boceto hecho con</span>
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
      <div className="mx-auto min-h-dvh max-w-lg px-5 py-8 pb-28">
        <Header />
        {children}
        <Footer />
      </div>
      <CartBar />
    </CartProvider>
  );
}
