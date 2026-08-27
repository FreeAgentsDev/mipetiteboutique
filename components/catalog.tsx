"use client";

import Image from "next/image";
import { useState } from "react";

import { useCart } from "@/components/cart";
import { BAG } from "@/lib/site";

export function BagCard() {
  const { add } = useCart();
  const [colorId, setColorId] = useState(BAG.colors[0].id);
  const color = BAG.colors.find((item) => item.id === colorId) ?? BAG.colors[0];

  return (
    <article className="overflow-hidden rounded-3xl bg-paper shadow-[0_8px_24px_rgba(61,52,46,0.06)]">
      <div className="relative aspect-3/4">
        <Image
          src={BAG.image}
          alt={BAG.name}
          fill
          sizes="(max-width: 512px) 100vw, 480px"
          className="object-cover"
          priority
        />
      </div>
      <div className="px-5 py-5">
        <p className="text-[10px] font-medium tracking-[0.18em] text-mute uppercase">
          Bolsos
        </p>
        <h3 className="mt-1 font-serif text-2xl leading-tight">{BAG.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-mute">{BAG.blurb}</p>
        <p className="mt-4 text-[11px] font-medium tracking-[0.16em] text-mute uppercase">
          Color · {color.name}
        </p>
        <div className="mt-3 flex gap-2">
          {BAG.colors.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setColorId(item.id)}
              aria-label={item.name}
              aria-pressed={item.id === color.id}
              className={`size-9 rounded-full border ${
                item.id === color.id
                  ? "border-ink ring-2 ring-ink/30"
                  : "border-ink/15"
              }`}
              style={{ background: item.swatch }}
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-gold">
          Precio al confirmar · misma foto, varios colores
        </p>
        <button
          type="button"
          onClick={() =>
            add({
              id: `${BAG.id}-${color.id}`,
              name: `${BAG.name} · ${color.name}`,
              category: "Bolsos",
            })
          }
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
        >
          Agregar {color.name.toLowerCase()}
        </button>
      </div>
    </article>
  );
}
