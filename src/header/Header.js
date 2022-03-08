import './Header.css';
import '../common/Common.css'
// import Toggle from './common/Toggle'
// import CustomToggle from './common/CustomToggle'
import { Link } from "react-router-dom";
import MenuButtom from './components/MenuButtom'
import HeaderLogo from './components/HeaderLogo'
import HeaderSearch from './components/HeaderSearch'
import HeaderContact from './components/HeaderContact'

function Header() {
  return (
    <div className="header">

      <div className='top-header'>
        <div className='top-header-container'>
          {/* 
            <CustomToggle />
            <Toggle />
          */}
          <Link to="/own-account">
            <div className='own-account-button button'>Особистий кабінет</div>
          </Link>
        </div>
      </div>

      <div className='bottom-header'>
        <div className='bottom-header-container'>
          <Link to="/">
            <MenuButtom />
          </Link>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderContact />
          <div className='header-cart-moc'></div>
        </div>
      </div>

    </div>
  );
}

export default Header;
