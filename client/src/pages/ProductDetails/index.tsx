import { useSearchParams } from 'react-router';

import { getProduct, isNotFound } from '@/api';
import { ProductView, ProductViewSkeleton } from '@/components/product/ProductView';
import StatusMessage from '@/components/ui/StatusMessage';
import { useApi } from '@/hooks/useApi';
import { usePageMetadata } from '@/hooks/usePageMetadata';
import style from './style.module.css';

function NotFound() {
  return <StatusMessage icon="search" title="Product not found." action={{ label: 'Go to Shop', to: '/shop' }} className={style.message} />;
}

/** /product?productid=ID (the Flask server reads the same URL to fill in link previews). */
function ProductDetails() {
  const [params] = useSearchParams();
  const raw = params.get('productid');
  const id = raw && /^\d+$/.test(raw) ? Number(raw) : null;
  if (id === null) return <NotFound />;
  // A new id starts a fresh page (quantity, "added" state).
  return <ProductLoader key={id} id={id} />;
}

function ProductLoader({ id }: { id: number }) {
  const product = useApi((signal) => getProduct(id, signal), [id]);
  const data = product.status === 'success' ? product.data : undefined;

  usePageMetadata(data && {
    title: `${data.name} - Polygon Network Company`,
    description: `Brand:\n${data.brand}\nSpecs:\n${data.specs}`,
    image: data.image ?? undefined,
  });

  if (product.status === 'loading') return <ProductViewSkeleton />;
  if (product.status === 'error') {
    return isNotFound(product.error) ? (
      <NotFound />
    ) : (
      <StatusMessage icon="error" title="Couldn't load this product." action={{ label: 'Try again', onClick: product.reload }} className={style.message} />
    );
  }
  return <ProductView product={product.data} />;
}

export default ProductDetails;
