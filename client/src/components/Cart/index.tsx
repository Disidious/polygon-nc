import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from 'contexts';

import style from './style.module.css';

function Cart() {
  const { cartProducts } = useContext(CartContext);
  const navigate = useNavigate(); 
  
  const goToCheckout = () => {
    let path = '/checkout'; 
    navigate(path);
  }

	return (
    <div className={`${style.container} ${cartProducts.length !== 0 ? style.notEmptyCart : ""}`} onClick={goToCheckout}>
      {
        cartProducts.length !== 0 &&
        <div className={style.badge}>
          <p>
            {cartProducts.length}
          </p>
        </div>
      }
      <i className={`${style.cartIcon} material-icons`}>shopping_cart</i>
    </div>
	);
}

export default Cart;
