import { useEffect, useState, useReducer } from 'react';
import { backendLink } from '../../constants'
import './CartPage.css'

function CartPage () {
    const [cartData, setCartData] = useState(() => false)
    const [summation, setSummation] = useState(0)
    const [reloadState, dispatchReload] = useReducer((state) => state + 1, 0);

    useEffect(() => {
        const getCartData = async () => {
            const jwtToken = localStorage.getItem('jwtToken') ?? '';
            
            const requestOptions = {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + jwtToken, 
                    'Content-Type': 'application/x-www-form-urlencoded'
                })
            };
        
            const response = await fetch(backendLink + '/cart', requestOptions)
        
            if (response.ok) {
                let localSummation = 0
                const data = await response.json()
                    data.map((element) => {
                        localSummation += element.amount * element.product.price
                        element.product.currency = element.product.currency.labelChar
                        element.product.amount = element.amount
                        return element
                    } )

                setCartData(data)
                setSummation(localSummation)
            } else {
                alert('Some error with getting products')
            }
        }
        getCartData()
    }, [reloadState])

    if (cartData) {
        return (
            <div className='cart'>
                <div className='cart-wrapper'>
                    <h1 className='cart-title'>Обрані товари</h1>
                    <div className='cart-products-wrapper'>
                        {
                            cartData.map(element => {
                                return <ProductCartItem key={element.product.title} product={element.product} rerenderParent={dispatchReload} />
                            })
                        }
                    </div>
                    <div>Загальна сумма: {summation.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</div>
                    <div className='cart-approve-order-btn-wrapper'>
                        <button className='cart-approve-order-btn'>Підтвердити замовлення</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Korzina</div>
        )
    }
}

const ProductCartItem = ({ product, rerenderParent }) => {
    const jwtToken = localStorage.getItem('jwtToken') ?? '';

    const removeBtnFunc = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: new Headers({
                'Authorization': 'Bearer ' + jwtToken, 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ productId: product.id })
        };
    
        const response = await fetch(backendLink + '/cart', requestOptions)
        
        if (response.ok) {
            const data = await response.json()
            if (data) {
                rerenderParent()
            }
        } else {
            alert('Some error with deleting from cart')
        }
    }

    return (
        <div className='product-cart-item'>
            <button className='product-cart-close-button' onClick={removeBtnFunc}></button>
            <div className='product-cart-item-img-wrapper'>
                <img className='product-cart-item-img' src={product.img_src} alt={product.title} />
                <div className='product-cart-item-price-amount-wrapper'>
                    <div className='product-cart-item-price-block'>
                        {product.price} {product.currency}
                    </div>
                    <div className='product-cart-item-amount-block'>
                        Кол-во: {product.amount}
                    </div>
                </div>
            </div>
            <div className='product-page-item-info'>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

export default CartPage