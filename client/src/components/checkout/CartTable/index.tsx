import type { Product } from '@/api';
import Icon from '@/components/ui/Icon';
import Skeleton from '@/components/ui/Skeleton';
import noImage from '@/assets/noimage.png';
import { cx } from '@/utils/cx';
import style from './style.module.css';

export type CartRow = {
  product: Product;
  quantity: number;
};

type Props = {
  rows: CartRow[];
  onRemove: (productId: number) => void;
};

export function CartTable({ rows, onRemove }: Props) {
  return (
    <div className={style.card}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th className={style.quantity}>Quantity</th>
            <th className={style.remove}><span className={style.hidden}>Remove</span></th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td>
                <span className={style.item}>
                  <span className={style.thumb}><img src={product.image || noImage} alt="" /></span>
                  <b>{product.name}</b>
                </span>
              </td>
              <td className={style.quantity}>{quantity}</td>
              <td className={style.remove}>
                <button type="button" className={style.delete} onClick={() => onRemove(product.id)} aria-label={`Remove ${product.name}`}>
                  <Icon name="delete" size={23} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CartTableSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className={style.card} aria-busy="true" aria-label="Loading your cart">
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th className={style.quantity}>Quantity</th>
            <th className={style.remove} />
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }, (_, i) => (
            <tr key={i}>
              <td>
                <span className={style.item}>
                  <span className={cx(style.thumb, style.thumbPlaceholder)}><Skeleton width="100%" height="100%" radius={9} /></span>
                  <Skeleton width="60%" height={16} />
                </span>
              </td>
              <td className={style.quantity}><Skeleton width={24} height={16} className={style.center} /></td>
              <td className={style.remove}><Skeleton width={24} height={24} radius={6} className={style.end} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
