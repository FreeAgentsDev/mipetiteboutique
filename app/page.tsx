import { Catalog } from "@/components/catalog";
import { BrandMark } from "@/components/brand-mark";
import { Shell } from "@/components/shell";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <Shell>
      <div className="text-center">
        <BrandMark size="lg" />
        <p className="mt-3 text-[11px] font-medium tracking-[0.28em] text-mute uppercase">
          {SITE.city}
        </p>
      </div>
      <p className="mt-6 text-center text-sm font-light leading-relaxed text-ink/80">
        Bolsos de macramé, cada uno con su foto. Los accesorios cambian con
        cada feria: si viste uno, escríbele a Isa. Envíos a toda Colombia.
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

      <section id="lookbook" className="mt-12">
        <h2 className="text-center text-[11px] font-medium tracking-[0.22em] text-mute uppercase">
          Los bolsos
        </h2>
        <p className="mt-2 text-center text-xs text-mute">
          Fotos de Isa. Confirma cuál hay antes de pedir.
        </p>
        <div className="mt-5">
          <Catalog />
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
    </Shell>
  );
}
