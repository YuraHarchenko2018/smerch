// import Clock from './common/Clock'
// import TemperatureCalculator from './common/TemperatureCalculator'
// import LoginControl from './common/LoginControl'
// import {NumberList, numbers} from './common/NumberList'
// import {NameForm, EssayForm, FlavorForm} from './common/Forms'
import React from 'react'
import './Container.css'
import Banners from './components/Banners'
import Products from './components/Products'
import {banners, productsItpedia, productsSternenko} from './constants'

const Container = () => {
  return (
    <div className='container'>

        {/* <Clock />
        <LoginControl />
        <NumberList numbers={numbers} />
        <NameForm />
        <EssayForm />
        <FlavorForm /> 
        <TemperatureCalculator /> */}

      <div className='container-wrapper'>
        <Banners banners={banners} />
        <Products products={productsSternenko} />
      </div>
    </div>
  );
}

export default Container;
