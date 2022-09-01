import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import LoginPage from '../../container/login/LoginPage'
import { backendLink } from '../../constants'
import './AccountPage.css'

function AccountPage () {
    const navigate = useNavigate();

    const [authStatus, setStatus] = useState(true)
    const [profileData, setProfileData] = useState({})

    useEffect(() => {
        (async () => {
            const jwtToken = localStorage.getItem('jwtToken');

            const requestOptions = {
                method: 'GET',
                headers: { 
                    'Authorization': 'Bearer ' + jwtToken, 
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            };

            const response = await fetch(backendLink + '/profile', requestOptions)
            setStatus(response.ok)

            if (response.ok) {
                const data = await response.json()
                setProfileData(data)
            } else {
                localStorage.removeItem(('jwtToken'));
                navigate('/login')
            }
        })()
    // https://stackoverflow.com/questions/58579426/in-useeffect-whats-the-difference-between-providing-no-dependency-array-and-an
    }, [navigate])

    if (authStatus) {
        return (
            <div className='account-wrapper'>
                <img alt='#' className='account-avatar-img' src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                <div className='account-info-wrapper'>
                    <div className='account-name-title'><b>Ім'я:</b> {profileData.name}</div>
                    <div className='account-email-title'><b>Email:</b> {profileData.email}</div>
                    <div className='account-age-title'><b>Вік:</b> {profileData.age}</div>
                </div>
                <button className='account-logout-btn'>Logout</button>
            </div>
        )
    } else {
        return <LoginPage />
    }
}

export default AccountPage