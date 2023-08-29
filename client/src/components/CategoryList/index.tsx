import { useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

import style from './style.module.css';

import { Button } from 'components';
import { Category, ChosenCategory, MasterCategory } from 'types';

type Props = {
  categories?: MasterCategory[];
  setSearchParams: SetURLSearchParams;
	chosenCategory?: ChosenCategory;
	loading?: boolean;
}

function CategoryList(props: Props) {
  const {categories, setSearchParams, chosenCategory, loading} = props

	const [expanded, setExpanded] = useState<{[key: number]: boolean}>({});

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
  
	const renderCategories = () => (
		<div className={style.listContainer}>
			<h1>
				Categories
			</h1>
			{categories!.map((cat) => (
				<div key={cat.id}>
					<div className={style.listItem}>
						<div className={`${style.listItemBtn} ${isActive(cat, true) && style.active}`} onClick={() => {
              setSearchParams({
                mastercategoryid: `${cat.id}`,
                category: `${cat.name}`
              })
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
                  setSearchParams({
                    categoryid: `${subCat.id}`,
                    category: `${subCat.name}`
                  })
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
		</div>
	);

	if(loading) {
		return (
			<p>
				LOADING
			</p>
		)
	}

	if(categories == null) {
		return (
			<p>
				ERROR
			</p>
		)
	}

	return renderCategories();
}

export default CategoryList;
