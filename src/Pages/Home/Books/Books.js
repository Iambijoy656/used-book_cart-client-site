import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BooksCart from './BooksCart';
import PurchaseModal from './PurchaseModal';

const Books = () => {
    const [book, setBook] = useState(null)


    const books = useLoaderData();


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    books?.map(book => <BooksCart
                        key={book._id}
                        book={book}
                        setBook={setBook}
                    >

                    </BooksCart>)
                }
            </div>
            <div className="flex justify-center items-center my-24 text-gray-700 ">
                <Link to='/categories'>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 bg-sky-600 text-white hover:bg-sky-700 hover:text-white">Show All Books</button>
                </Link>

            </div>
            {
                book &&
                <PurchaseModal
                    book={book}
                    setBook={setBook}
                ></PurchaseModal>
            }
        </div>
    );
};

export default Books;