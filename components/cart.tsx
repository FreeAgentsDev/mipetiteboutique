"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { orderHref } from "@/lib/site";

export type CartLine = {
  id: string;
  name: string;
  category: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  add: (line: Omit<CartLine, "qty">) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  orderUrl: string;
  orderText: string;
};

const STORAGE_KEY = "petite-cart-v2";
const CartContext = createContext<CartContextValue | null>(null);

function buildOrder(lines: CartLine[]) {
  const body = lines
    .map((line) => `• ${line.qty}× ${line.name}`)
    .join("\n");
  return `Hola Isa, vi los bolsos de Mi Petite Boutique y quiero pedir:\n\n${body}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setLines(parsed.filter((l) => l.qty > 0));
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const add = useCallback((line: Omit<CartLine, "qty">) => {
    setLines((prev) => {
      const found = prev.find((item) => item.id === line.id);
      if (found) {
        return prev.map((item) =>
          item.id === line.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...line, qty: 1 }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((item) => item.id !== id);
      return prev.map((item) => (item.id === id ? { ...item, qty } : item));
    });
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const orderText = useMemo(() => buildOrder(lines), [lines]);
  const orderUrl = useMemo(() => orderHref(orderText), [orderText]);
  const count = useMemo(
    () => lines.reduce((sum, line) => sum + line.qty, 0),
    [lines],
  );

  const value = useMemo(
    () => ({ lines, count, add, setQty, clear, orderUrl, orderText }),
    [lines, count, add, setQty, clear, orderUrl, orderText],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart fuera de CartProvider");
  return ctx;
}

export function CartBar() {
  const { count, lines, setQty, clear, orderUrl, orderText } = useCart();
  if (count === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="pointer-events-auto mx-auto max-w-lg overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-[0_-8px_40px_rgba(61,52,46,0.18)]">
        <div className="max-h-40 overflow-auto px-4 py-3">
          {lines.map((line) => (
            <div
              key={line.id}
              className="flex items-center justify-between gap-3 py-1 text-sm"
            >
              <span>
                {line.qty}× {line.name}
              </span>
              <button
                type="button"
                onClick={() => setQty(line.id, line.qty - 1)}
                className="text-xs tracking-wide text-mute uppercase"
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2 border-t border-ink/10 px-4 py-3">
          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-cream"
          >
            Pedir por Instagram
          </a>
          <button
            type="button"
            onClick={clear}
            className="h-11 rounded-full px-3 text-xs tracking-wide text-mute uppercase"
          >
            Vaciar
          </button>
        </div>
        <p className="px-4 pb-3 text-[11px] leading-relaxed text-mute">
          Instagram no trae el texto. Copia el pedido y pégalo en el DM:
          <span className="mt-1 block whitespace-pre-wrap text-ink/80">
            {orderText}
          </span>
        </p>
      </div>
    </div>
  );
}
