import { Link } from "react-router-dom";

import './HeaderAccount.css';


function HeaderAccount() {
    return (
        <Link to="/own-account">
            <div className='own-account-button button'>Особистий кабінет</div>
        </Link>
    )
}

export default HeaderAccount;