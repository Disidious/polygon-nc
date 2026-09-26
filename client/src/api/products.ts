import { request } from './client';
import type { CategoryHighlight, MasterCategory, Product, ProductFilters, ProductsPage } from './types';

export const getCategories = (signal?: AbortSignal) =>
  request<MasterCategory[]>('/products/categories/', { signal });

export const getCategoryHighlights = (signal?: AbortSignal) =>
  request<CategoryHighlight[]>('/products/categories/display/', { signal });

export const getProducts = (filters: ProductFilters, signal?: AbortSignal) =>
  request<ProductsPage>('/products/', {
    signal,
    query: {
      page: filters.page,
      search: filters.search,
      categoryid: filters.categoryId,
      mastercategoryid: filters.masterCategoryId,
    },
  });

export const getProduct = (id: number, signal?: AbortSignal) =>
  request<Product>(`/products/${id}/`, { signal });

/** Only returns products that still exist and are visible; missing ids are simply left out. */
export const getCheckoutProducts = (ids: number[], signal?: AbortSignal) =>
  request<Product[]>('/products/checkout/', { signal, query: { productids: ids.join(',') } });
