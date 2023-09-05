import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import style from './style.module.css';

import { ApiHandler } from 'api_handler';
import { CategoryList, PageNumbers, PageTitle, ProductList, SearchBar } from 'components';
import { ChosenCategory, MasterCategory, ProductsPagePayload } from 'types';


function Shop() {
	const [categories, setCategories] = useState<MasterCategory[]>();
	const [productsPayload, setProductsPayload] = useState<ProductsPagePayload>();
	const [chosenCategory, setChosenCategory] = useState<ChosenCategory>();

	const [categoriesLoading, setCategoriesLoading] = useState(true);
	const [productsLoading, setProductsLoading] = useState(true);

	const [searchParams, _] = useSearchParams();

	useEffect(() => {
		(async () => {
			const categoriesRes = await ApiHandler.getCategories()
			setCategories(categoriesRes.json)
			setCategoriesLoading(false)
		})()
	}, [])

	useEffect(() => {
		setProductsLoading(true)
		setChosenCategory(constructChosenCategory());
		
		(async () => {
			await fetchProducts()
			setProductsLoading(false)
		})()
	}, [searchParams])

	const fetchProducts = async () => {
		const productsRes = await ApiHandler.getProducts(searchParams)
		setProductsPayload(productsRes.json)
	} 

	const constructChosenCategory = (): ChosenCategory | undefined => {
		const id = searchParams.get("categoryid") || searchParams.get("mastercategoryid")
		if(id == null || !+id) {
			return undefined
		}

		const isMaster = !searchParams.has("categoryid")

		return {
			id: +id,
			isMaster
		}
	}

	
	return (
		<div className={style.container}>
			<PageTitle
				text='Shop'
			/>
			<div className={style.shopContainer}>
				<div className={style.shopSubContainer}>
					<CategoryList
						categories={categories}
						chosenCategory={chosenCategory}
						containerStyle={style.categoryList}
						loading={categoriesLoading}
					/>
					<div className={style.productListContainer}>
						<SearchBar/>
						<ProductList
							products={productsPayload?.results}
							loading={productsLoading}
							containerStyle={style.productList}
						/>
						<div className={style.divider}/>
						<PageNumbers
							totalPages={productsPayload?.total_pages}
							currentPage={productsPayload?.page}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Shop;
