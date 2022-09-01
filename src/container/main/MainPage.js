import React from 'react'
import {banners} from '../../constants'

import Banners from './components/Banners'
import Products from './components/Products'

import './MainPage.css'

const MainPage = () => {
  return (
    <div className='container'>
      <div className='container-wrapper'>
        <Banners banners={banners} />
        <Products />
      </div>
    </div>
  );
}

export default MainPage;
