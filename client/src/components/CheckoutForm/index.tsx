import { useContext, useEffect, useState } from 'react';

import style from './style.module.css';

import { Button } from 'components';

import { CartContext } from 'contexts';
import { QuoteRequest } from 'types';
import { ApiHandler } from 'api_handler';

type Props = {
    onDone?: () => void;
}

function CheckoutForm(props: Props) {
    const { onDone } = props;
    const { cartProducts, emptyProducts } = useContext(CartContext);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState();
    const [request, setRequest] = useState<QuoteRequest>({
        company_name: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        requested_products: []
    })

    useEffect(() => {
        const newRequest = {...request}
        newRequest.requested_products = cartProducts
        setRequest(newRequest)
    }, [cartProducts])

    const changeField = (field: string, value: string) => {
        const newRequest: any = {...request}
        newRequest[field] = value
        setRequest(newRequest)
    }

    const submit = (event: any) => {
        setLoading(true);
        event.preventDefault();
        (async () => {
            const response = await ApiHandler.postQuoteRequest(request)
            if(response.status !== 'success') {
                setErrors(response.json)
            } else {
                setErrors(undefined)
                emptyProducts()
                onDone && onDone()
            }
            setLoading(false)
        })()
    }

	return (
		<div className={style.container} onSubmit={submit}>
			<form className={style.form}>
                <div className={style.formFields}>
                    <div className={style.field}>
                        <h4>Company Name *</h4>
                        <input type="text" required onChange={(e) => changeField("company_name", e.target.value) }/>
                    </div>

                    <div className={style.field}>
                        <h4>First Name *</h4>
                        <input type="text" required onChange={(e) => changeField("first_name", e.target.value) }/>
                    </div>

                    <div className={style.field}>
                        <h4>Last Name *</h4>
                        <input type="text" required onChange={(e) => changeField("last_name", e.target.value) }/>
                    </div>

                    <div className={style.field}>
                        <h4>Email *</h4>
                        <input type="email" required onChange={(e) => changeField("email", e.target.value) }/>
                    </div>

                    <div className={style.field}>
                        <h4>Phone *</h4>
                        <input type="number" required onChange={(e) => changeField("phone", e.target.value) }/>
                    </div>

                    <div className={style.field}>
                        <h4>Address *</h4>
                        <input type="text" required onChange={(e) => changeField("address", e.target.value) }/>
                    </div>

                    <div className={`${style.field} ${style.messageField}`}>
                        <h4>Notes</h4>
                        <textarea onChange={(e) => changeField("message", e.target.value)}></textarea>
                    </div>
                </div>
                {
                    errors &&
                    <div className={style.errorsContainer}>
                        {Object.keys(errors).map((key) => (
                            <h4>{errors[key]}</h4>
                        ))}
                    </div>
                }
                <button type="submit">
                    <Button
                    text='Request Quote'
                    loading={loading}
                    primary
                    />
                </button>
			</form>
		</div>
	);
}

export default CheckoutForm;
