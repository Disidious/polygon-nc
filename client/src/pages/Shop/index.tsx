import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import style from './style.module.css';

import { ApiHandler } from 'api_handler';
import { CategoryList } from 'components';
import { ChosenCategory, MasterCategory, Product } from 'types';


function Shop() {
	const [categories, setCategories] = useState<MasterCategory[]>();
	const [products, setProducts] = useState<Product[]>();
	const [chosenCategory, setChosenCategory] = useState<ChosenCategory>();

	const [categoriesLoading, setCategoriesLoading] = useState(true);
	const [productsLoading, setProductsLoading] = useState(true);

	const [searchParams, setSearchParams] = useSearchParams();

	const fetchProducts = async () => {
		const productsRes = await ApiHandler.getProducts(searchParams)
		setProducts(productsRes)
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

	useEffect(() => {
		(async () => {
			const categoriesRes = await ApiHandler.getCategories()
			setCategories(categoriesRes)
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
	
	return (
		<div className={style.container}>
			<CategoryList
				categories={categories}
				setSearchParams={setSearchParams}
				loading={categoriesLoading}
				chosenCategory={chosenCategory}
			/>
		</div>
	);
}

export default Shop;
