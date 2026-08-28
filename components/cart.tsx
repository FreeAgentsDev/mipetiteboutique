"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { BAGS, SITE, orderHref } from "@/lib/site";

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

const STORAGE_KEY = "petite-cart-v4";
const CartContext = createContext<CartContextValue | null>(null);

function buildOrder(lines: CartLine[]) {
  const body = lines
    .map((line) => `• ${line.qty}× ${line.name}`)
    .join("\n");
  const wantsColor = lines.some(
    (line) => BAGS.find((bag) => bag.id === line.id)?.colorChoice,
  );
  const colorNote = wantsColor
    ? "\n\nMe gustaría confirmar los colores disponibles."
    : "";
  return `Hola ♡ Vi una pieza en MiPetiteBoutique y me gustaría conocer más información.\n\n${body}${colorNote}`;
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
  const { count, lines, setQty, clear, orderUrl } = useCart();
  if (count === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
      <div className="pointer-events-auto mx-auto max-w-lg overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-[0_-8px_40px_rgba(61,52,46,0.18)] md:max-w-3xl">
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
            Pedir por WhatsApp ♡
          </a>
          <button
            type="button"
            onClick={clear}
            className="h-11 rounded-full px-3 text-xs tracking-wide text-mute uppercase"
          >
            Vaciar
          </button>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppFab() {
  const { count } = useCart();
  if (!SITE.whatsapp || count > 0) return null;

  return (
    <a
      href={orderHref(
        "Hola ♡ Vi una pieza en MiPetiteBoutique y me gustaría conocer más información.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-30 inline-flex size-12 items-center justify-center rounded-full bg-ink text-cream shadow-[0_8px_24px_rgba(61,52,46,0.2)]"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-6 fill-current"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
