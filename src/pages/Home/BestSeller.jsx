import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import { BaseUrl } from '../../Constant/ApiDoamin';

const BestSeller = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${BaseUrl}all-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
    }, [])

    return (
        <>
            <BookCards books={books} headline={"Best Seller Books"} />
        </>
    )
}

export default BestSeller