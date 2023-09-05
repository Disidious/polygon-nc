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