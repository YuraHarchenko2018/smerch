import { Link } from "react-router-dom";
import { useState } from 'react'

import './HeaderAccount.css';

function HeaderAccount() {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken'));

    setInterval(() => {
        setJwtToken(localStorage.getItem('jwtToken'))
    }, 1000)

    return (
        <Link to={jwtToken ? "/account" : "/login"}>
            <div className='own-account-button button'>Особистий кабінет</div>
        </Link>
    )
}

export default HeaderAccount;