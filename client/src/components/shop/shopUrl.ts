import type { ProductFilters } from '@/api';

/** Builds a /shop link from the current query, applying changes (null removes a key). Never mutates `current`. */
export function shopHref(current: URLSearchParams, changes: Record<string, string | null>): string {
  const next = new URLSearchParams(current);
  for (const [key, value] of Object.entries(changes)) {
    if (value === null) next.delete(key);
    else next.set(key, value);
  }
  const query = next.toString();
  return query ? `/shop?${query}` : '/shop';
}

const positiveInt = (value: string | null) => {
  const n = Number(value);
  return value && Number.isInteger(n) && n > 0 ? n : undefined;
};

/** Reads the Shop filters from the URL (same parameters as the original site). */
export function filtersFromParams(params: URLSearchParams): ProductFilters {
  const categoryId = positiveInt(params.get('categoryid'));
  return {
    page: positiveInt(params.get('page')),
    search: params.get('search')?.trim() || undefined,
    categoryId,
    masterCategoryId: categoryId ? undefined : positiveInt(params.get('mastercategoryid')),
  };
}

export const productHref = (product: { id: number; name: string }) =>
  `/product?${new URLSearchParams({ productid: String(product.id), product: product.name })}`;
