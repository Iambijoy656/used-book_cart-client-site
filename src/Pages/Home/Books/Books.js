import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCart from './BooksCart';

const Books = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {
                books?.map(book => <BooksCart
                    key={book._id}
                    book={book}
                >

                </BooksCart>)
            }
        </div>
    );
};

export default Books;