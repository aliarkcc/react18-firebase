import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { error, signin } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()

        signin(email, password)
    }

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email Address:</span>
                    <input required type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <span>Password:</span>
                    <input required type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <button>Log In</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
