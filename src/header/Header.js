import HeaderAccount from './components/up/account/HeaderAccount'

import MenuButtom from './components/bottom/menu/HeaderMenu'
import HeaderLogo from './components/bottom/logo/HeaderLogo'
import HeaderSearch from './components/bottom/search/HeaderSearch'
import HeaderContact from './components/bottom/contact/HeaderContact'
import HeaderCart from './components/bottom/cart/HeaderCart'

import './Header.css';

function Header() {
  return (
    <div className="header">

      <div className='top-header'>
        <div className='top-header-container'>
          <HeaderAccount />
        </div>
      </div>

      <div className='bottom-header'>
        <div className='bottom-header-container'>
          <MenuButtom />
          <HeaderLogo />
          <HeaderSearch />
          <HeaderContact />
          <HeaderCart />
        </div>
      </div>

    </div>
  );
}

export default Header;
