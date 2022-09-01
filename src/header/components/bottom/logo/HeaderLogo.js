import { backendLink } from '../../../../constants'
import './HeaderLogo.css'

const HeaderLogo = () => {

    const getData = async () => {
        const jwtToken = localStorage.getItem('jwtToken');

        const requestOptions = {
            method: 'GET',
            headers: { 
                'Authorization': 'Bearer ' + jwtToken, 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        };

        let response = await fetch(backendLink, requestOptions)
        const data = await response.json()

        alert(data.text)
    }

    return (
        <div className='header-logo-wrapper'>
            <div className='header-logo-container'  onClick={getData}>
            <img 
                src="https://smerch.com.ua/image/cache/catalog/001-logo/logo_clear-140x40.png" 
                alt="SMerch" 
                className="img-responsive" />
            </div>
        </div>
    )
}

export default HeaderLogo