import React from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

export default function Home() {

    const { user } = useAuthContext()
    const { documents: books } = useCollection('books', ["uid", "==", user.uid])

    return (
        <div className='App'>
            {books && <BookList books={books} key={books[0].id}></BookList>}
            <BookForm></BookForm>
        </div>
    )
}
