import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import type { QuoteLine } from '@/api';

/** A cart line has the same shape the quote request sends: { product: productId, quantity }. */
export type CartLine = QuoteLine;

export type CartContextValue = {
  lines: CartLine[];
  /** Number of different products in the cart (the header badge). */
  count: number;
  /** Adds to the existing line when the product is already in the cart. */
  add: (productId: number, quantity: number) => void;
  remove: (productId: number) => void;
  removeMany: (productIds: number[]) => void;
  clear: () => void;
};

const STORAGE_KEY = 'cart';

export const CartContext = createContext<CartContextValue | null>(null);

/** Combines duplicate products and drops anything that isn't a valid line (older carts could hold both). */
function normalize(lines: unknown): CartLine[] {
  if (!Array.isArray(lines)) return [];
  const byProduct = new Map<number, number>();
  for (const line of lines) {
    const product = Number(line?.product);
    const quantity = Number(line?.quantity);
    if (!Number.isInteger(product) || !Number.isInteger(quantity) || quantity < 1) continue;
    byProduct.set(product, (byProduct.get(product) ?? 0) + quantity);
  }
  return [...byProduct].map(([product, quantity]) => ({ product, quantity }));
}

function loadCart(): CartLine[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? normalize(JSON.parse(stored)) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage can be full or blocked; the cart still works for this visit.
    }
  }, [lines]);

  const add = useCallback((productId: number, quantity: number) => {
    setLines((current) => normalize([...current, { product: productId, quantity }]));
  }, []);
  const remove = useCallback((productId: number) => {
    setLines((current) => current.filter((line) => line.product !== productId));
  }, []);
  const removeMany = useCallback((productIds: number[]) => {
    setLines((current) => current.filter((line) => !productIds.includes(line.product)));
  }, []);
  const clear = useCallback(() => setLines([]), []);

  const value = useMemo(() => ({ lines, count: lines.length, add, remove, removeMany, clear }), [lines, add, remove, removeMany, clear]);

  return <CartContext value={value}>{children}</CartContext>;
}
