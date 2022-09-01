import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import { backendLink } from '../../../constants'
import './Products.css'

const Products = () => {
    const jwtToken = localStorage.getItem('jwtToken') ?? '';
    const [productsData, setProducts] = useState(() => [])

    const getProducts = async () => {
        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + jwtToken, 
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        
        const response = await fetch(backendLink + '/products', requestOptions)
    
        if (response.ok) {
            const data = await response.json()
                data.map((product) =>  product.currency = product.currency.label )

            // if products const is empty
            // if this check is missing, then will start endless rereander component, 
            // cause useEffect havent dependencies array
            // if useEffect will have some dependencies -> can possible remove this checker
            if (!productsData.length) {
                setProducts(data)
            }
        } else {
            alert('Some error with getting products')
        }
    }

    useEffect(() => {
        getProducts()
    })

    return (
        <div className='products-blocks-container'>
          {
            productsData.map((element) => {
                return <ProductItem key={element.title} info={element} />
            })
          }
        </div>
    )
}

const ProductItem = ({ info }) => {
    return (
        <Link to={'/product/' + info.id} style={{ textDecoration: 'none' }}>
            <div className='product-item button'>
                <div className='product-item-img-wrapper'>
                    <div className='product-item-price-block'>
                        {info.price} {info.currency === 'UA' ? '₴' : info.currency}
                    </div>
                    <img className='product-item-img' src={info.img_src} alt={info.title} />
                </div>
                <div className='product-item-info'>
                    <h2>{info.title}</h2>
                    <p>{info.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default Products