import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BooksCart from '../Home/Books/BooksCart';
import PurchaseModal from '../Home/Books/PurchaseModal';

const Categories = () => {
    const [book, setBook] = useState([])

    const allBooks = useLoaderData();


    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])






    return (
        <div>
            <div className="hero h-56 min-w-screen " style={{ backgroundImage: `url("https://healthmagazine.ae/wp-content/uploads/2017/05/effective-study-habits.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-semibold text-white">Categories</h1>
                    </div>
                </div>
            </div>


            <div className='my-20'>

                <div className="container grid grid-cols-2 gap-6 mx-auto sm:grid-cols-4 xl:grid-cols-4 text-center">
                    {
                        categories?.map(category =>
                            <Link to={`/category/${category.category_name}`}>
                                <button
                                    key={category._id}
                                    type="button" className="px-8 xl:w-80 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">{category.category_name}</button>
                            </Link>)
                    }

                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
                {
                    allBooks?.map(book => <BooksCart
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

export default Categories;