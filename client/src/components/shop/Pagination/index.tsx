import { Link, useSearchParams } from 'react-router';

import { shopHref } from '@/components/shop/shopUrl';
import Icon from '@/components/ui/Icon';
import { cx } from '@/utils/cx';
import style from './style.module.css';

type Props = {
  page: number;
  totalPages: number;
};

function Pagination({ page, totalPages }: Props) {
  const [params] = useSearchParams();
  if (totalPages <= 1) return null;
  const href = (target: number) => shopHref(params, { page: String(target) });

  return (
    <nav className={style.pager} aria-label="Pages">
      {page > 1 ? (
        <Link className={style.page} to={href(page - 1)} aria-label="Previous page"><Icon name="chevronLeft" /></Link>
      ) : (
        <span className={cx(style.page, style.off)} aria-hidden="true"><Icon name="chevronLeft" /></span>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) =>
        n === page ? (
          <span key={n} className={cx(style.page, style.on)} aria-current="page">{n}</span>
        ) : (
          <Link key={n} className={style.page} to={href(n)} aria-label={`Page ${n}`}>{n}</Link>
        ),
      )}
      {page < totalPages ? (
        <Link className={style.page} to={href(page + 1)} aria-label="Next page"><Icon name="chevronRight" /></Link>
      ) : (
        <span className={cx(style.page, style.off)} aria-hidden="true"><Icon name="chevronRight" /></span>
      )}
    </nav>
  );
}

export default Pagination;
