import { Catalog } from "@/components/catalog";
import { Shell } from "@/components/shell";
import { SITE } from "@/lib/site";

export default function CatalogoPage() {
  return (
    <Shell>
      <p className="text-center text-[11px] font-medium tracking-[0.32em] text-mute uppercase">
        Bolsos
      </p>
      <h1 className="mt-2 text-center font-serif text-4xl italic">
        Macramé
      </h1>
      <p className="mt-4 text-center text-sm font-light leading-relaxed text-mute">
        Cinco bolsos, cada uno con su foto. Elige y pide por Instagram. Los
        accesorios no van aquí: cambian con cada evento.
      </p>
      <div className="mt-8">
        <Catalog />
      </div>
      <p className="mt-8 text-center text-xs leading-relaxed text-mute">
        ¿Un accesorio que viste en feria? Escríbele en{" "}
        <a href={SITE.instagram} className="text-ink underline">
          {SITE.instagramHandle}
        </a>
        .
      </p>
    </Shell>
  );
}
