import style from './style.module.css';

import { Spinner } from 'components';
import { Product } from 'types';

import noImg from 'assets/noimage.png'

type Props = {
  products?: Product[];
	loading?: boolean;
  containerStyle?: string;
}

function ProductList(props: Props) {
  const { products = [], loading, containerStyle } = props

  const renderItems = () => (
    <div className={`${style.listContainer} ${containerStyle ? containerStyle : ""}`}>
      {products!.map((product) => (
        <div className={style.listItem} key={product.id}>
          <div className={style.listContent}>
            <div className={style.listItemImage} style={{
              backgroundImage: `url(${product.image ? product.image : noImg})`
            }}/>
            <h1>
              {product.brand} {product.name}
            </h1>
          </div>
        </div>
      ))}
    </div>
  )

	if(loading) {
		return (
			<Spinner size='lrg'/>
		)
	}

	return renderItems();
}

export default ProductList;