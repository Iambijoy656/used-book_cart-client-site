import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCart from '../Home/Books/BooksCart';

const Category = () => {
    const categoryBooks = useLoaderData();
    console.log(categoryBooks)

    // const category = window.location.pathname.split('/')[2]
    // console.log(category);


    return (
        <div>
            <h2 className='text-3xl text-center font-semibold my-5 text-gray-500'> There are {categoryBooks.length} Books in this category</h2>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    categoryBooks.map(book => <BooksCart
                        key={book._id}
                        book={book}


                    >

                    </BooksCart>)
                }
            </div>


        </div>
    );
};

export default Category;