import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

import style from './style.module.css';

type Props = {
    name: string;
    img: string;
    id: number;
}

function ShopCategoryCard(props: Props) {
    const { name, img, id: categoryId } = props;
    const navigate = useNavigate(); 
  
    const goToShop = () => {
        let path = `/shop?categoryid=${categoryId}&category=${name}`; 
        navigate(path);
    }

	return (
        <div className={style.container}>
            <div className={style.cardContent} onClick={goToShop}>
                <img src={img} />
                <h2>{name}</h2>
            </div>
        </div>
	);
}

export default ShopCategoryCard;
