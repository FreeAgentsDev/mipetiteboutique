import type { Metadata } from "next";

import { Catalog } from "@/components/catalog";
import { Shell } from "@/components/shell";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "L’âme | MiPetiteBoutique",
  description:
    "Descubre L’âme, la línea de bolsos tejidos a mano de MiPetiteBoutique. Piezas artesanales para complementar tu estilo, desde Manizales.",
};

export default function CatalogoPage() {
  return (
    <Shell>
      <p className="text-center text-[11px] font-medium tracking-[0.32em] text-gold uppercase">
        Colección
      </p>
      <h1 className="mt-2 text-center font-serif text-4xl italic">L’âme ♡</h1>
      <p className="mt-2 text-center text-sm italic text-mute">
        Hecho a mano, pensado para ti.
      </p>
      <p className="mt-4 text-center text-sm font-light leading-relaxed text-mute">
        Bolsos tejidos a mano, cada uno con su foto. Elige el que te enamore y
        escríbenos. L’âme es una línea de MiPetiteBoutique.
      </p>
      <div className="mt-8">
        <Catalog />
      </div>
      <p className="mt-8 text-center text-xs leading-relaxed text-mute">
        ¿Un accesorio que viste? Escríbenos en{" "}
        <a href={SITE.instagram} className="text-ink underline">
          {SITE.instagramHandle}
        </a>
        .
      </p>
    </Shell>
  );
}
