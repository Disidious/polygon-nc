import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import style from './style.module.css';

import { Button, Spinner } from 'components';
import { Category, ChosenCategory, MasterCategory } from 'types';

type Props = {
  categories?: MasterCategory[];
	chosenCategory?: ChosenCategory;
	containerStyle?: string;
	loading?: boolean;
}

function CategoryList(props: Props) {
  const { categories = [], chosenCategory, containerStyle, loading } = props

	const [searchParams, setSearchParams] = useSearchParams();
	const [expanded, setExpanded] = useState<{[id: number]: boolean}>({});

	useEffect(() => {
		const newExpanded:{[id: number]: boolean} = []
		if(categories != null) {
			for(let cat of categories) {
				for(let subCat of cat.categories) {
					if(isActive(subCat, false)) {
						newExpanded[cat.id] = true;
						break;
					}
				}
				if(newExpanded[cat.id]) {
					setExpanded(newExpanded)
					break
				}
			}
		}
	}, [categories])

	const setCatExpanded = (id: number) => {
		const newExpanded = {...expanded}
		newExpanded[id] = !newExpanded[id]
		setExpanded(newExpanded)
	}

	const isActive = (category: MasterCategory | Category, isMaster: boolean) => {
		return (
			chosenCategory != null && 
			chosenCategory.isMaster === isMaster &&
			chosenCategory.id === category.id
		)
	}

	const setCategoryAll = () => {
		searchParams.delete("mastercategoryid")
		searchParams.delete("categoryid")
		searchParams.delete("category")
		searchParams.delete("page")
		setSearchParams(searchParams)
	}

	const setCategory = (id: number, name: string, isMaster = false) => {
		searchParams.delete("mastercategoryid")
		searchParams.delete("categoryid")
		searchParams.delete("category")
		searchParams.delete("page")

		searchParams.set("category", name)
		if(isMaster) {
			searchParams.set("mastercategoryid", `${id}`)
		} else {
			searchParams.set("categoryid", `${id}`)
		}

		setSearchParams(searchParams)
	}
  
	const renderCategories = () => (
		<>
			<div className={style.listItem}>
				<div className={style.listItemBtn} onClick={setCategoryAll}>
					<h2>
						All
					</h2>
				</div>
			</div>
			{categories!.map((cat) => (
				<div key={cat.id}>
					<div className={style.listItem}>
						<div className={`${style.listItemBtn} ${isActive(cat, true) && style.active}`} onClick={() => {
              setCategory(cat.id, cat.name, true)
            }}>
							<h2>
								{cat.name}
							</h2>
						</div>
						<Button
							text={expanded[cat.id] ? "▲" : "▼"}
							btnClass={style.listItemExpand}
							onClick={() => setCatExpanded(cat.id)}
							secondary
						/>
					</div>
					<div className={`${style.listSubItemsContainer} ${!expanded[cat.id] && style.hidden}`}>
						{cat.categories.map((subCat) => (
								<div className={`${style.listItemBtn} ${isActive(subCat, false) && style.active}`} key={subCat.id} onClick={() => {
                  setCategory(subCat.id, subCat.name)
                }}>
									<div className={style.listItem}>
										<h2>
											{subCat.name}
										</h2>
									</div>
								</div>
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
