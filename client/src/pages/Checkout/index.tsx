import { useEffect, useRef, useState } from 'react';

import { getCheckoutProducts } from '@/api';
import { useCart } from '@/cart/useCart';
import { CartTable, CartTableSkeleton, type CartRow } from '@/components/checkout/CartTable';
import QuoteForm from '@/components/checkout/QuoteForm';
import Icon from '@/components/ui/Icon';
import PageHead from '@/components/ui/PageHead';
import StatusMessage from '@/components/ui/StatusMessage';
import { useApi } from '@/hooks/useApi';
import style from './style.module.css';

function Checkout() {
  const { lines, remove, removeMany, clear } = useCart();
  const [sent, setSent] = useState(false);
  const [removedMissing, setRemovedMissing] = useState(false);

  // The products are loaded once for the cart as it was when the page opened; removing a line just hides it.
  const initialIds = useRef(lines.map((line) => line.product));
  const products = useApi(
    (signal) => (initialIds.current.length ? getCheckoutProducts(initialIds.current, signal) : Promise.resolve([])),
    [],
  );
  const loaded = products.status === 'success' ? products.data : null;

  // The API leaves out products that were deleted or hidden: take them out of the cart and say so.
  useEffect(() => {
    if (!loaded) return;
    const found = new Set(loaded.map((product) => product.id));
    const missing = initialIds.current.filter((id) => !found.has(id));
    if (missing.length) {
      removeMany(missing);
      setRemovedMissing(true);
    }
  }, [loaded, removeMany]);

  const onSent = () => {
    clear();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let content;
  if (sent) {
    content = (
      <div className={style.card}>
        <StatusMessage size="lg" icon="check" title="Request sent!" text="We will reach out to you as soon as possible" />
      </div>
    );
  } else if (lines.length === 0) {
    content = (
      <div className={style.card}>
        <StatusMessage size="lg" icon="removeCart" title="Your shopping cart is empty!" action={{ label: 'Shop', to: '/shop' }} />
      </div>
    );
  } else if (products.status === 'error') {
    content = (
      <div className={style.card}>
        <StatusMessage size="lg" icon="error" title="Couldn't load your cart." action={{ label: 'Try again', onClick: products.reload }} />
      </div>
    );
  } else {
    const byId = new Map((loaded ?? []).map((product) => [product.id, product]));
    const rows: CartRow[] = lines.flatMap((line) => {
      const product = byId.get(line.product);
      return product ? [{ product, quantity: line.quantity }] : [];
    });
    content = (
      <>
        {products.status === 'loading' ? <CartTableSkeleton rows={Math.min(lines.length, 5)} /> : <CartTable rows={rows} onRemove={remove} />}
        <QuoteForm lines={lines} onSent={onSent} />
      </>
    );
  }

  return (
    <>
      <PageHead title="Checkout" />
      <div className={style.page}>
        {removedMissing && !sent && (
          <div className={style.notice} role="status">
            <Icon name="info" size={20} />
            Some products are no longer available and were removed from your cart.
          </div>
        )}
        {content}
      </div>
    </>
  );
}

export default Checkout;
