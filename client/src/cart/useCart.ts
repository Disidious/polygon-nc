import { useContext } from 'react';

import { CartContext, type CartContextValue } from './CartProvider';

export function useCart(): CartContextValue {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart must be used inside <CartProvider>.');
  return cart;
}
