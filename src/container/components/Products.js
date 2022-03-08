import { Link } from "react-router-dom";
import { useState } from 'react'
import './Products.css'

const Products = ({ products }) => {
    let [productsData] = useState(() => products)

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