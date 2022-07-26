import { Link } from "react-router-dom";
import './HeaderMenu.css'

const Menu = () => {
    return (
      <Link to="/">
        <div className='menu-wrapper'>
          <button className='menu-btn button'>
            <svg className='menu-icon' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22">
              <path stroke="#fff" strokeLinecap="round" strokeWidth="1.5" d="M12.8 13.25H20m-7.2 3.15H20m-7.2 3.15H20M3 20h5.2a1 1 0 001-1v-5.2a1 1 0 00-1-1H3a1 1 0 00-1 1V19a1 1 0 001 1zM13.8 9.65H19a1 1 0 001-1V3a1 1 0 00-1-1h-5.2a1 1 0 00-1 1v5.65a1 1 0 001 1zM3 9.65h5.2a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v5.65a1 1 0 001 1z">
              </path>
            </svg>
          </button>
        </div>
      </Link>
    )
}

export default Menu