import { Link } from 'react-router';

import type { Product } from '@/api';
import { productHref } from '@/components/shop/shopUrl';
import Skeleton from '@/components/ui/Skeleton';
import noImage from '@/assets/noimage.png';
import { cx } from '@/utils/cx';
import style from './style.module.css';

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={style.grid}>
      {products.map((product) => (
        <Link key={product.id} to={productHref(product)} className={style.card}>
          <div className={style.image}>
            <img src={product.image || noImage} alt={product.name} loading="lazy" />
          </div>
          <div className={style.name}>{product.name}</div>
        </Link>
      ))}
    </div>
  );
}

/** Same boxes as the real grid, shown while products load. */
export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className={style.grid} aria-busy="true" aria-label="Loading products">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={cx(style.card, style.placeholder)}>
          <div className={style.image}><Skeleton width="100%" height="100%" radius={10} /></div>
          <div className={cx(style.name, style.placeholderName)}>
            <Skeleton height={12} />
            <Skeleton width="60%" height={12} />
          </div>
        </div>
      ))}
    </div>
  );
}
