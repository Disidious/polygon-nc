import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import style from './style.module.css';
import { Navigatable } from "components";

type Props = {
    name: string;
    img: string;
    id: number;
}

function ShopCategoryCard(props: Props) {
    const { name, img, id: categoryId } = props;

	return (
        <div className={style.container}>
            <Navigatable goto={`/shop?categoryid=${categoryId}&category=${name}`}>
                <div className={style.cardContent}>
                    <img alt={name} src={img} />
                    <h2>{name}</h2>
                </div>
            </Navigatable>
        </div>
	);
}

export default ShopCategoryCard;
