import { Catalog } from "@/components/catalog";
import { Shell } from "@/components/shell";
import { SITE } from "@/lib/site";

export default function CatalogoPage() {
  return (
    <Shell>
      <p className="text-center text-[11px] font-medium tracking-[0.32em] text-mute uppercase">
        Accesorios
      </p>
      <h1 className="mt-2 text-center font-serif text-4xl italic">Catálogo</h1>
      <p className="mt-4 text-center text-sm font-light leading-relaxed text-mute">
        Agrega lo que te guste y pide por Instagram. Isa arma el pedido a
        mano; el precio se confirma en el chat.
      </p>
      <div className="mt-8">
        <Catalog />
      </div>
      <p className="mt-8 text-center text-xs text-mute">
        También puedes escribirle directo en{" "}
        <a href={SITE.instagram} className="text-ink underline">
          {SITE.instagramHandle}
        </a>
        .
      </p>
    </Shell>
  );
}
