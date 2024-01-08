import { useState } from 'react'
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../hooks/useAuthContext'

export const useSignUp = () => {

    const [error, setError] = useState(null)

    const { dispatch } = useAuthContext()

    const signUp = (email, password) => {
        setError(null)

        createUserWithEmailAndPassword(auth, email, password)
            .then((res => {
                // console.log('User add success', res.user)
                dispatch({ type: 'LOGIN', payload: res.user })
            }))
            .catch((err) => {
                setError(err.message)
            })
    }

    return { error, signUp }
}