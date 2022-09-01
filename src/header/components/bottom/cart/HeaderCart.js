import { Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import './HeaderCart.css'


const HeaderCart = () => {
    return (
      <div className='header-cart-wrapper'>
        <Link to="/cart">
          <div className='header-cart-container button'>Корзина</div>
        </Link>
      </div>
    )
  }

export default HeaderCart