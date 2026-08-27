"use client";

import Image from "next/image";

import { useCart } from "@/components/cart";
import { PRODUCTS, type Product } from "@/lib/site";

export function Catalog({ products = PRODUCTS }: { products?: Product[] }) {
  const { add } = useCart();

  return (
    <ul className="grid grid-cols-2 gap-3">
      {products.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden rounded-2xl bg-paper shadow-[0_8px_24px_rgba(61,52,46,0.06)]"
        >
          <div className="relative aspect-3/4">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 512px) 50vw, 240px"
              className="object-cover"
            />
          </div>
          <div className="px-3 py-3">
            <p className="text-[10px] font-medium tracking-[0.18em] text-mute uppercase">
              {item.category}
            </p>
            <h3 className="mt-1 font-serif text-lg leading-tight">{item.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-mute">{item.blurb}</p>
            <p className="mt-2 text-[11px] text-gold">Consultar</p>
            <button
              type="button"
              onClick={() =>
                add({
                  id: item.id,
                  name: item.name,
                  category: item.category,
                })
              }
              className="mt-3 inline-flex h-9 w-full items-center justify-center rounded-full border border-ink/15 text-xs font-medium tracking-wide"
            >
              Agregar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
