import { useParams } from "react-router-dom";
import {productsSternenko as productsData} from '../constants'
import './ProductPage.css'

const ProductPage = () => {
    const { id }  = useParams();
    let element = productsData[id]

    return (
        <div className="product-page-wrapper">
            <ProductPageItem key={element.title} info={element} />
        </div>
    )
    
}

const ProductPageItem = ({ info }) => {
    return (
        <div className='product-page-item'>
            <div className='product-page-item-img-wrapper'>
                <div className='product-page-item-price-block'>
                    {info.price} {info.currency === 'UA' ? '₴' : info.currency}
                </div>
                <div className="product-page-item-to-cart button">В корзину</div>
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