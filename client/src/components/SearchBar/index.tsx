import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import style from './style.module.css';


function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    const text = searchParams.get("search")
    setSearchText(text ? text : "")
  }, [])

  const setSearchParam = (event: any) => {
    searchParams.delete("page")
    if(searchText) {
      searchParams.set("search", searchText)
    } else {
      searchParams.delete("search")
    }
    setSearchParams(searchParams)
    event.preventDefault();
  } 

	return (
    <form className={style.container} onSubmit={setSearchParam}>
      <div className={style.searchBarContainer}>
        <input 
          className={style.searchBar} 
          type="text" 
          placeholder='Search...' 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        />
        <button type="submit">
          <i className={`${style.searchIcon} material-icons`}>search</i>
        </button>
      </div>
    </form>
	);
}

export default SearchBar;
