import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCart from '../Home/Books/BooksCart';
import PurchaseModal from '../Home/Books/PurchaseModal';

const Category = () => {
    const [book, setBook] = useState([])
    const categoryBooks = useLoaderData();
    console.log(categoryBooks)

    // const category = window.location.pathname.split('/')[2]
    // console.log(category);


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold my-5 text-gray-500'> There are {categoryBooks.length} Books in this category</h2>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto'>
                {
                    categoryBooks.map(book => <BooksCart
                        key={book._id}
                        book={book}
                        setBook={setBook}


                    >

                    </BooksCart>)
                }
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

export default Category;