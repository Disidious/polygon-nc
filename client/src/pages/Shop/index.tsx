import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router';

import { getProducts, isNotFound, type ProductsPage } from '@/api';
import CategoryList from '@/components/shop/CategoryList';
import Pagination from '@/components/shop/Pagination';
import { ProductGrid, ProductGridSkeleton } from '@/components/shop/ProductGrid';
import SearchBar from '@/components/shop/SearchBar';
import { filtersFromParams } from '@/components/shop/shopUrl';
import PageHead from '@/components/ui/PageHead';
import StatusMessage from '@/components/ui/StatusMessage';
import { useApi } from '@/hooks/useApi';
import style from './style.module.css';

const EMPTY_PAGE: ProductsPage = { page: 1, count: 0, total_pages: 0, results: [] };

function Shop() {
  const [params] = useSearchParams();
  const query = params.toString();
  const filters = filtersFromParams(params);

  // A page past the last one comes back as 404: that simply means "no products".
  const products = useApi(
    (signal) => getProducts(filters, signal).catch((error: unknown) => {
      if (isNotFound(error)) return EMPTY_PAGE;
      throw error;
    }),
    [query],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  return (
    <>
      <PageHead title="Shop" />
      <div className={style.layout}>
        <CategoryList />
        <div>
          <SearchBar />
          <p className={style.note}>
            Can't find what you're looking for? <Link to="/contactus">Contact us</Link> and we'll get it for you!
          </p>

          {products.status === 'loading' && <ProductGridSkeleton />}
          {products.status === 'error' && (
            <StatusMessage icon="error" title="Couldn't load products." action={{ label: 'Try again', onClick: products.reload }} className={style.message} />
          )}
          {products.status === 'success' &&
            (products.data.results.length === 0 ? (
              <StatusMessage icon="search" title="No products found." className={style.message} />
            ) : (
              <>
                <ProductGrid products={products.data.results} />
                <Pagination page={products.data.page} totalPages={products.data.total_pages} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
