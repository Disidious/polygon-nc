import { useSearchParams } from "react-router-dom";

import style from './style.module.css';

import { Button } from 'components';

type Props = {
  totalPages?: number;
  currentPage?: number;
}

function PageNumbers(props: Props) {
  const { totalPages = 0, currentPage = 0 } = props
  
  const [searchParams] = useSearchParams();
	
  const isCurrPage = (page: number) => {
    return page === currentPage
  }

  const generatePageURL = (page: number) => {
    searchParams.set("page", `${page}`)
    return `${window.location.pathname}?${searchParams.toString()}`
  }

  if(totalPages == null || currentPage == null) {
    return
  }

	return (
			<div className={style.numbersContainer}>
        <Button
          text='❮'
          btnClass={style.numberBtn}
          secondary
          goto={generatePageURL(currentPage - 1)}
          disabled={currentPage <= 1}
        />
        {[...Array(totalPages)].map((_, i) => (
            <Button
              text={`${i+1}`}
              btnClass={`${style.numberBtn}${isCurrPage(i+1) ? " " + style.activeNumberBtn : ""}`}
              secondary={!isCurrPage(i+1)}
              primary={isCurrPage(i+1)}
              goto={generatePageURL(i+1)}
              key={i}
            />
          ))}
        <Button
          text='❯'
          btnClass={style.numberBtn}
          secondary
          goto={generatePageURL(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
			</div>
	);
}

export default PageNumbers;
