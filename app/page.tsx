import Image from "next/image";

import { BagCard } from "@/components/catalog";
import { BrandMark } from "@/components/brand-mark";
import { Shell } from "@/components/shell";
import { LOOKBOOK, SITE } from "@/lib/site";

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
        Bolsos de macramé en varios colores. Los accesorios cambian con cada
        feria: si viste uno, escríbele a Isa. Envíos a toda Colombia.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href="/catalogo"
          className="inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Ver bolsos
        </a>
        <a
          href={SITE.instagramDm}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink/20 text-sm font-medium tracking-wide"
        >
          Accesorios por Instagram
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-center text-[11px] font-medium tracking-[0.22em] text-mute uppercase">
          El bolso
        </h2>
        <p className="mt-2 text-center text-xs text-mute">
          Un modelo, varios colores. Isa confirma cuál hay.
        </p>
        <div className="mt-5">
          <BagCard />
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-ink/10 px-5 py-6 text-center">
        <h2 className="text-[11px] font-medium tracking-[0.22em] text-mute uppercase">
          Accesorios
        </h2>
        <p className="mt-3 text-sm font-light leading-relaxed text-ink/80">
          Collares, aretes y piezas de feria no se catalogan: muchos se piden
          una vez y no vuelven. Si te gustó uno en el stand o en Instagram,
          escríbele.
        </p>
        <a
          href={SITE.instagramDm}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-medium tracking-wide text-cream"
        >
          Preguntar por una pieza
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
