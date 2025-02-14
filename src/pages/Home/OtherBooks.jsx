import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';
import { BaseUrl } from '../../Constant/ApiDoamin';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`${BaseUrl}all-books`).then(res => res.json()).then(data => setBooks(data.slice(5, 12)))
    }, [])

    return (
        <div className='mt-24'>
            <BookCards books={books} headline={"Other Books"} />
        </div>
    )
}

export default OtherBooks