import React from "react";

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return null // <GuestGreeting />;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLoggedIn: false}
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true})
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false})
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn
        let button;

        if (isLoggedIn) {
            button = <button onClick={this.handleLogoutClick}>Logout</button>
        } else {
            button = <button onClick={this.handleLoginClick}>Login</button>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <p>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</p>
                {/* {button} */}
                {isLoggedIn
                    ? <button onClick={this.handleLogoutClick}>Logout</button>
                    : <button onClick={this.handleLoginClick}>Login</button>
                }
            </div>
        )
    }
}

export default LoginControl