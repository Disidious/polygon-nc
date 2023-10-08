export type Category = {
	id: number;
	name: string;
}

export type MasterCategory = {
	id: number;
	name: string;
	categories: Category[];
}

export type ChosenCategory = {
	id: number;
	isMaster?: boolean;
}

export type Product = {
	id: number;
	brand: string;
	name: string;
	image?: string;
	specs: string;
	category: number;
}

export type ProductsPagePayload = {
	page: number;
	count: number;
	total_pages: number;
	results: Product[];
}

export type QuoteProduct = {
	product: number;
	quantity: number;
}

export type QuoteRequest = {
	company_name: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	address: string;
	message?: string;
	requested_products: QuoteProduct[];
}

export type CartContextType = { 
  cartProducts: QuoteProduct[]; 
  appendProduct: (id: number, quantity: number) => void; 
  removeProduct: (id: number) => void; 
  emptyProducts: () => void;
}

export type CategoryDisplay = {
	id: number;
	name: string;
	image: string;
}