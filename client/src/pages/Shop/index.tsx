import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import style from './style.module.css';

import { CategoryList, PageNumbers, PageTitle, ProductList, SearchBar } from 'components';
import { ChosenCategory, MasterCategory, ProductsPagePayload } from 'types';

import { ApiHandler } from 'handlers/api_handler';

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
		window.scrollTo(0, 0);
		
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
						<div className={style.noteContainer}>
							<p>
								Can't find what you're looking for?&nbsp;
								<Link to="/contactus">
									Contact us
								</Link>
								&nbsp;and we'll get it for you!
							</p>
						</div>
						<ProductList
							products={productsPayload?.results}
							loading={productsLoading}
							containerStyle={style.productList}
						/>
						<div>
							<div className={style.divider}/>
							<PageNumbers
								totalPages={productsPayload?.total_pages}
								currentPage={productsPayload?.page}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Shop;
