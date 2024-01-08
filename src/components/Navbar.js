import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {

    const { logout } = useLogout()

    return (
        <nav>
            <h1>AOS Book Case</h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/sign-in'>Sign In</Link></li>
                <li><Link to='/sign-up'>Sign Up</Link></li>
                <li><Link onClick={logout}>Log Out</Link></li>
            </ul>
        </nav>
    )
}
