import style from './style.module.css';

import { Spinner, Navigatable } from 'components';
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
          <Navigatable className={style.listContent} goto={`/product?productid=${product.id}&product=${product.name}`}>
            <img className={style.listItemImage} alt={product.name} src={product.image ? product.image : noImg} />
            <h1>
              {product.name}
            </h1>
          </Navigatable>
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
