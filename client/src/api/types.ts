export type Category = {
  id: number;
  name: string;
};

export type MasterCategory = {
  id: number;
  name: string;
  categories: Category[];
};

/** A category with one product image, used by the home page slideshow. */
export type CategoryHighlight = {
  id: number;
  name: string;
  image: string;
};

export type Product = {
  id: number;
  brand: string;
  name: string;
  image: string | null;
  specs: string;
  category: number;
};

export type ProductsPage = {
  page: number;
  count: number;
  total_pages: number;
  results: Product[];
};

export type ProductFilters = {
  page?: number;
  search?: string;
  categoryId?: number;
  masterCategoryId?: number;
};

/** One product and quantity in a quote request (also the shape the cart stores). */
export type QuoteLine = {
  product: number;
  quantity: number;
};

export type QuoteRequest = {
  company_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  requested_products: QuoteLine[];
};
