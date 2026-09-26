import { useCallback, useState } from 'react';

import type { Product } from '@/api';
import { useCart } from '@/cart/useCart';
import QuantityStepper from '@/components/product/QuantityStepper';
import Button from '@/components/ui/Button';
import Skeleton from '@/components/ui/Skeleton';
import Toast from '@/components/ui/Toast';
import noImage from '@/assets/noimage.png';
import style from './style.module.css';

export function ProductView({ product }: { product: Product }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const closeToast = useCallback(() => setToastOpen(false), []);
  const specs = product.specs.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);

  const addToQuote = () => {
    add(product.id, quantity);
    setAdded(true);
    setToastOpen(true);
  };

  return (
    <div className={style.layout}>
      <div className={style.image}>
        <img src={product.image || noImage} alt={product.name} />
      </div>
      <div>
        <h1 className={style.name}>{product.name}</h1>
        <div className={style.field}>
          <div className={style.label}>Brand</div>
          <div className={style.value}>{product.brand}</div>
        </div>
        <div className={style.field}>
          <div className={style.label}>Specifications</div>
          <div className={style.specs}>
            {specs.map((line, i) => <span key={i}>{line}</span>)}
          </div>
        </div>
        <div className={style.buy}>
          <div className={style.label}>Quantity</div>
          <QuantityStepper value={quantity} onChange={setQuantity} />
          <div className={style.actions}>
            {added ? (
              <div className={style.after}>
                <Button size="lg" block to="/shop">Continue Shopping</Button>
                <Button size="lg" block variant="outline" to="/checkout">Go to Checkout</Button>
              </div>
            ) : (
              <Button size="lg" block onClick={addToQuote}>Add to Quote</Button>
            )}
          </div>
        </div>
      </div>
      <Toast message="Product added!" open={toastOpen} onClose={closeToast} />
    </div>
  );
}

/** The product layout at real size, shown while the product loads. */
export function ProductViewSkeleton() {
  return (
    <div className={style.layout} aria-busy="true" aria-label="Loading product">
      <div className={style.image}><Skeleton width="100%" height="100%" radius={10} /></div>
      <div>
        <Skeleton width="75%" height={30} className={style.skeletonTitle} />
        <div className={style.field}>
          <div className={style.label}>Brand</div>
          <Skeleton width="30%" height={16} />
        </div>
        <div className={style.field}>
          <div className={style.label}>Specifications</div>
          <Skeleton height={92} radius={12} />
        </div>
        <div className={style.buy}>
          <div className={style.label}>Quantity</div>
          <Skeleton width={150} height={46} radius={12} />
          <div className={style.actions}><Skeleton height={50} radius={10} /></div>
        </div>
      </div>
    </div>
  );
}
