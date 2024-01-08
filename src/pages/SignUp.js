import React, { useState } from 'react'
import { useSignUp } from '../hooks/useSignUp'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { error, signUp } = useSignUp()

    const handleSubmit = (e) => {
        e.preventDefault()

        signUp(email, password)

        console.log(email, password)
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email Address:</span>
                    <input required type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <span>Password:</span>
                    <input required type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <button>Sign Up</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}
