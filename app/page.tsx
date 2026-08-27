import Image from "next/image";

import { BrandMark } from "@/components/brand-mark";
import { Catalog } from "@/components/catalog";
import { Shell } from "@/components/shell";
import { LOOKBOOK, PRODUCTS, SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <Shell>
      <div className="text-center">
        <BrandMark size="lg" />
        <p className="mt-4 font-serif text-3xl italic text-ink">{SITE.name}</p>
        <p className="mt-1 text-[11px] font-medium tracking-[0.28em] text-mute uppercase">
          By Isa Quintero · {SITE.city}
        </p>
      </div>
      <p className="mt-6 text-center text-sm font-light leading-relaxed text-ink/80">
        Accesorios que elevan tu estilo. Perfectos para regalar — o
        regalarte. Envíos a toda Colombia. Elige en el catálogo y pide por
        Instagram.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href="/catalogo"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Ver catálogo
        </a>
        <a
          href={SITE.instagramDm}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink/20 text-sm font-medium tracking-wide"
        >
          Pedir por Instagram
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-center text-[11px] font-medium tracking-[0.22em] text-mute uppercase">
          Piezas que se ven ahora
        </h2>
        <p className="mt-2 text-center text-xs text-mute">
          Boceto con fotos de {SITE.instagramHandle}. Precios, cuando Isa los
          confirme.
        </p>
        <div className="mt-5">
          <Catalog products={PRODUCTS.slice(0, 4)} />
        </div>
        <a
          href="/catalogo"
          className="mt-4 block text-center text-xs font-medium tracking-[0.16em] text-mute uppercase hover:text-ink"
        >
          Ver todo
        </a>
      </section>

      <section id="lookbook" className="mt-14">
        <h2 className="text-center text-[11px] font-medium tracking-[0.22em] text-mute uppercase">
          Lookbook
        </h2>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {LOOKBOOK.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-3/4 overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 512px) 50vw, 240px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
