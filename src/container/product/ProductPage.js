import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { backendLink } from '../../constants'
import './ProductPage.css'

const ProductPage = () => {
    const { id }  = useParams();
    const [productData, setProduct] = useState(() => false)
    const jwtToken = localStorage.getItem('jwtToken') ?? '';

    const getProductInfo = async () => {
        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + jwtToken, 
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
    
        const response = await fetch(backendLink + '/products/' + id, requestOptions)
    
        if (response.ok) {
            const data = await response.json()
                  data.currency = data.currency.label
            
            // if products const is empty
            if (!productData) {
                setProduct(data)
            }
        } else {
            alert('Some error with getting products')
        }
    }

    useEffect(() => {
        getProductInfo()
    })

    return (
        <div className="product-page-wrapper">
            <ProductPageItem key={productData.title} info={productData} />
        </div>
    )
    
}

const ProductPageItem = ({ info }) => {
    let [clickAmount, setClickAmount] = useState(0)

    const addProductToCart = async () => {
        const jwtToken = localStorage.getItem('jwtToken') ?? '';
        const productId = info.id
        
        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Authorization': 'Bearer ' + jwtToken, 
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ productId: productId })
        };
    
        const response = await fetch(backendLink + '/cart/', requestOptions)

        if (response.ok) {
            await response.json()
            setClickAmount(++clickAmount)
        } else {
            alert('Some error with adding to cart')
        }
    }

    const AddedInfoNotice = () => {
        if (clickAmount > 0) {
            return 'Додано🤙 ' + (clickAmount === 1 ? '' : `${clickAmount}x`)
        } 
        return ''
    }

    return (
        <div className='product-page-item'>
            <div className='product-page-item-img-wrapper'>
                <div className='product-page-item-price-block'>
                    {info.price} {info.currency === 'UA' ? '₴' : info.currency}
                </div>
                <div className="product-page-item-to-cart-wrapper">
                    <div className="product-page-item-to-cart button" onClick={addProductToCart}>В корзину</div>
                    <div className="product-page-item-to-cart-success-notice">{AddedInfoNotice()}</div>
                </div>
                <img className='product-page-item-img' src={info.img_src} alt={info.title} />
            </div>
            <div className='product-page-item-info'>
                <h2>{info.title}</h2>
                <p>{info.description}</p>
            </div>
        </div>
    )
}

export default ProductPage