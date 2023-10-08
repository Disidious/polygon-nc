import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import style from './style.module.css';

import { ApiHandler } from 'api_handler';

import { Button, Spinner } from 'components';
import { Product } from 'types';
import { CartContext } from 'contexts';

import noImg from 'assets/noimage.png'


function ProductDetails() {
	const { appendProduct } = useContext(CartContext);

  	const [product, setProduct] = useState<Product>();
	const [quantity, setQuantity] = useState(1);
	const [productLoading, setProductLoading] = useState(true);
	const [added, setAdded] = useState(false);

	const [searchParams, _] = useSearchParams();

	useEffect(() => {
    	setProductLoading(true);
		(async () => {
			const productId = searchParams.get("productid")
			if(productId != null && +productId) {
				const productRes = await ApiHandler.getProduct(productId)
				setProduct(productRes.json)
			}
			
			setProductLoading(false)
		})()
	}, [])

	const incrementQuantity = () => {
		setQuantity(quantity + 1)
	}

	const decrementQuantity = () => {
		setQuantity(quantity - 1)
	}
	
	const addToQuote = () => {
		appendProduct(product!.id, quantity);
		setAdded(true);
		toast.success("Product added!")
	}

	if(productLoading) {
		return <Spinner size='lrg'/>
	}

	if(product == null) {
		return
	}
	
	return (
		<div className={style.container}>
			<div className={style.productContainer}>
				<div className={style.productImg} style={{
					backgroundImage: `url(${product.image ? product.image : noImg})`
				}}/>
				<div className={style.productContent}>
					<div>
						<h1>
							{product.name}
						</h1>
						<h2>Brand:</h2>
						<p>
							{product.brand}
						</p>
						<h2>Specifications:</h2>
						<p>
							{product.specs.split("\r\n").map((text, idx) => (
										<span key={idx}>
											{text} 
											<br/>
										</span>
									)
								)
							}
						</p>
					</div>
					<div>
						<h2>
							Quantity:
						</h2>
						<div className={style.quantityBtnsContainer}>
							<Button
								text='-'
								onClick={decrementQuantity}
								btnClass={style.quantityBtn}
								disabled={quantity === 1}
								secondary
							/>
							<Button
								text={`${quantity}`}
								btnClass={`${style.quantityBtn} ${style.disablePointer}`}
								secondary
							/>
							<Button
								text='+'
								onClick={incrementQuantity}
								btnClass={style.quantityBtn}
								secondary
							/>
						</div>
						{
							added
							?
							<div className={style.navButtonsContainer}>
								<Button
								primary
								text='Continue Shopping'
								btnClass={style.navButton}
								goto='/shop'
								/>
								<Button
								secondary
								text='Go to Checkout'
								btnClass={style.navButton}
								goto='/checkout'
								/>
							</div>
							:
							<Button
								text={'Add to Quote'}
								btnClass={style.addBtn}
								disabled={quantity === 0}
								primary
								onClick={addToQuote}
							/>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetails;
