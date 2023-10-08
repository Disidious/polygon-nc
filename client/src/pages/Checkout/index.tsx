import { useContext, useEffect, useState } from 'react';

import style from './style.module.css';

import { Button, CheckoutForm, PageTitle, Spinner } from 'components';

import { CartContext } from 'contexts';
import { Product } from 'types';
import { ApiHandler } from 'api_handler';

import noImg from 'assets/noimage.png'

function Checkout() {
	const { cartProducts, removeProduct } = useContext(CartContext);

	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState<Product[]>([]);
	const [done, setDone] = useState(false);

	useEffect(() => {
		setLoading(true);
		(async () => {
			if(cartProducts.length > 0) {
				const response = await ApiHandler.getCheckoutProducts(cartProducts)
				setProducts(response.json)
			}
			setLoading(false)
		})()
	}, [cartProducts])

	const getProduct = (productId: number) => {
		return products.find((prod) => prod.id === productId)
	}
	const onCheckout = () => {
		setDone(true);
		window.scrollTo(0, 0);
	}

	const showSpinner = loading || (products.length === 0 && cartProducts.length !== 0)
	const cartEmpty = cartProducts.length === 0
	
	const renderCheckout = () => (
		<>
			<div className={style.checkoutContainer}>
				<div className={style.checkoutContent}>
					{
						done
						?
						<div className={style.infoContainer}>
							<i className={`material-icons`}>check_circle</i>
							<h1>
								Request sent!
							</h1>
							<h2>
								We will reach out to you as soon as possible
							</h2>
						</div>
						:
						cartEmpty
						?
						<div className={style.infoContainer}>
							<i className={`material-icons`}>remove_shopping_cart</i>
							<h1>
								Your shopping cart is empty!
							</h1>
							<Button
								secondary
								text='Shop'
								goto='/shop'
							/>
						</div>
						:
						<>
							<table className={style.productsTable}>
								<tbody>
									<tr>
										<th>Name</th>
										<th>Quantity</th>
									</tr>
									{cartProducts?.map((cartProd, idx) => {
										const product = getProduct(cartProd.product)

										return (
											<tr key={idx}>
												<td>
													<img src={product!.image ? product!.image : noImg} />
													{product!.name}
												</td>
												<td>{cartProd.quantity}</td>
												<td>
													<i className={`${style.deleteIcon} material-icons`} onClick={() => removeProduct(idx)}>
														delete_forever
													</i>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>

							<CheckoutForm 
							onDone={onCheckout}
							/>
						</>
					}
				</div>
			</div>
		</>
	)

	return (
		<div className={style.container}>
			<PageTitle text='Checkout'/>
			{
				showSpinner
				?
				<Spinner size='lrg'/>
				:
				renderCheckout()
			}
			
		</div>
	);
}

export default Checkout;
