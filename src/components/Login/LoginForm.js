import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import useUser from '../../hooks/useUser'

function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { isLoginLoading, hasLoginError, isLogged, login } = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
        }
    }, [isLogged, navigate]) //El use effect deberia de cambiar cada vez que cambia el isLogged

    const submitHandler = e => {
        e.preventDefault();
        console.log("loginform")
        login({ email, password })
    }


    return (
        <div className='login-form'>
            <h2>Login</h2>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading &&
                <form onSubmit={submitHandler}>
                    <div className="form-inner">
                        {/*(error != "") ? (<div className='error'>{}</div>) : ""*/}
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                value={name} /> {/*Para que se actualize al cambiarlo */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password} />
                        </div>
                        <button className='btn' type="submit">Login</button>
                    </div>
                </form>
            }
            {
                hasLoginError && <strong>Credentials are invalid</strong>
            }

        </div>
    )
}

export default LoginForm






