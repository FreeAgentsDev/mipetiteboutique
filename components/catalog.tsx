"use client";

import Image from "next/image";

import { useCart } from "@/components/cart";
import { BAGS, type Bag } from "@/lib/site";

function BagCard({ bag, priority }: { bag: Bag; priority?: boolean }) {
  const { add } = useCart();

  return (
    <article className="overflow-hidden rounded-3xl bg-paper shadow-[0_8px_24px_rgba(61,52,46,0.06)]">
      <div className="relative aspect-3/4">
        <Image
          src={bag.image}
          alt={bag.name}
          fill
          sizes="(max-width: 512px) 100vw, 480px"
          className="object-cover"
          priority={priority}
        />
      </div>
      <div className="px-5 py-5">
        <p className="text-[10px] font-medium tracking-[0.18em] text-mute uppercase">
          Bolsos
        </p>
        <h3 className="mt-1 font-serif text-2xl leading-tight">{bag.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{bag.blurb}</p>
        <p className="mt-3 text-[11px] text-gold">Precio al confirmar</p>
        <button
          type="button"
          onClick={() =>
            add({
              id: bag.id,
              name: bag.name,
              category: "Bolsos",
            })
          }
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Agregar
        </button>
      </div>
    </article>
  );
}

export function Catalog() {
  return (
    <div className="flex flex-col gap-6">
      {BAGS.map((bag) => (
        <BagCard key={bag.id} bag={bag} priority={bag.id === BAGS[0].id} />
      ))}
    </div>
  );
}
