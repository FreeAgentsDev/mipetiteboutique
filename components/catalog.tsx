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
        <p className="text-[10px] font-medium tracking-[0.18em] text-gold uppercase">
          L’âme
        </p>
        <h3 className="mt-1 font-serif text-2xl leading-tight italic">
          {bag.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{bag.blurb}</p>
        {bag.colorChoice ? (
          <p className="mt-2 text-[11px] leading-relaxed text-mute">
            Disponible en otros colores según los materiales. Escríbenos por
            WhatsApp para confirmar ♡
          </p>
        ) : null}
        <p className="mt-3 text-[11px] text-mute">Te confirmamos el valor ♡</p>
        <button
          type="button"
          onClick={() =>
            add({
              id: bag.id,
              name: bag.name,
              category: "L’âme",
            })
          }
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Lo quiero ♡
        </button>
      </div>
    </article>
  );
}

export function Catalog({ limit }: { limit?: number }) {
  const items = limit ? BAGS.slice(0, limit) : BAGS;
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((bag, index) => (
        <BagCard key={bag.id} bag={bag} priority={index === 0} />
      ))}
    </div>
  );
}
