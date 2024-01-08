import { useState } from 'react'
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogin = () => {

    const [error, setError] = useState(null)

    const { dispatch } = useAuthContext()

    const signin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res => {
                // console.log('login ok', res)
                dispatch({ type: 'LOGIN', payload: res.user })
            }))
            .catch(err => {
                setError(err.message)
            })
    }

    return { error, signin }
}