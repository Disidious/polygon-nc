import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import style from './style.module.css';

import { Button, Navigatable, Spinner } from 'components';
import { Category, ChosenCategory, MasterCategory } from 'types';

type Props = {
  categories?: MasterCategory[];
	chosenCategory?: ChosenCategory;
	containerStyle?: string;
	loading?: boolean;
}

function CategoryList(props: Props) {
  const { categories = [], chosenCategory, containerStyle, loading } = props

	const [searchParams] = useSearchParams();
	const [collaped, setCollapsed] = useState<{[id: number]: boolean}>({});

	const setCatExpanded = (id: number) => {
		const newExpanded = {...collaped}
		newExpanded[id] = !newExpanded[id]
		setCollapsed(newExpanded)
	}

	const isActive = (category: MasterCategory | Category, isMaster: boolean) => {
		return (
			chosenCategory != null && 
			chosenCategory.isMaster === isMaster &&
			chosenCategory.id === category.id
		)
	}

	const generateCategoryAllURL = () => {
		searchParams.delete("mastercategoryid")
		searchParams.delete("categoryid")
		searchParams.delete("category")
		searchParams.delete("page")
		
		return `${window.location.pathname}?${searchParams.toString()}`
	}

	const generateCategoryURL = (id: number, name: string, isMaster = false) => {
		searchParams.delete("mastercategoryid")
		searchParams.delete("categoryid")
		searchParams.delete("category")
		searchParams.delete("page")

		if(isMaster) {
			searchParams.set("mastercategoryid", `${id}`)
		} else {
			searchParams.set("categoryid", `${id}`)
		}
		searchParams.set("category", name)

		return `${window.location.pathname}?${searchParams.toString()}`
	}
  
	const renderCategories = () => (
		<>
			<div className={style.listItem}>
				<Navigatable className={style.listItemBtn} goto={generateCategoryAllURL()}>
					<h2>
						All
					</h2>
				</Navigatable>
			</div>
			{categories!.map((cat) => (
				<div key={cat.id}>
					<div className={style.listItem}>
						<Navigatable className={`${style.listItemBtn} ${isActive(cat, true) && style.active}`} goto={generateCategoryURL(cat.id, cat.name, true)}>
							<h2>
								{cat.name}
							</h2>
						</Navigatable>
						<Button
							text={collaped[cat.id] ? "▼" : "▲"}
							btnClass={style.listItemExpand}
							onClick={() => setCatExpanded(cat.id)}
							secondary
						/>
					</div>
					<div className={`${style.listSubItemsContainer}${collaped[cat.id] && style.hidden ? " " + style.hidden : ""}`}>
						{cat.categories.map((subCat) => (
								<Navigatable 
								className={`${style.listItemBtn}${isActive(subCat, false) ? " "  + style.active : ""}`} 
								key={subCat.id} 
								goto={generateCategoryURL(subCat.id, subCat.name)}>
									<div className={style.listItem}>
										<h2>
											{subCat.name}
										</h2>
									</div>
								</Navigatable>
						))}
					</div>
				</div>
			))}
		</>
	);

	if(categories == null) {
		return (
			<p>
				ERROR
			</p>
		)
	}

	return (
		<div className={`${style.container} ${containerStyle ? containerStyle : ""}`}>
			<div className={style.listContainer}>
				<h1>
					Categories
				</h1>
				{
					loading ? 
					<Spinner size='med'/> : 
					renderCategories()
				}
			</div>
		</div>
	);
}

export default CategoryList;
