import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { backendLink } from '../../constants'
import './LoginPage.css'

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async () => {
        if (!email || !password) {
            alert('Email or password field empty')
            return
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: email, password: password})
        };

        const response = await fetch(backendLink + '/auth/login', requestOptions)

        if (response.ok) {
            const data = await response.json()
            const jwtToken = data.access_token

            localStorage.setItem('jwtToken', jwtToken);
            navigate('/account')
        } else {
            alert('Email or password incorrect')
        }
    }

    const onInputForEmail = ({ target }) => { setEmail(target.value) }
    const onInputForPass = ({ target }) => { setPassword(target.value) }

    return (
        <div className='account-wrapper'>
            <div className='login-wrapper'>
                <div className='login-title'>
                    <h1>Логін</h1>
                </div>

                <div className='login-form-wrapper'>
                    <div className='login-form'>
                        <div className='login-form-item'>
                            <span>Email</span>
                            <br></br>
                            <input className="login-form-input" placeholder="example@gmail.com" onInput={onInputForEmail} />
                        </div>

                        <div className='login-form-item'>
                            <span>Пароль</span>
                            <br></br>
                            <input className="login-form-input" placeholder="password" onInput={onInputForPass} type='password' />
                        </div>

                        <button className='login-send-btn button' onClick={loginUser}>
                            Увійти
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage