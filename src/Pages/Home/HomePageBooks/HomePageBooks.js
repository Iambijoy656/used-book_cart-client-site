import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const HomePageBooks = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
        setLoading(false)
    }, [])


    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className='text-4xl my-6 text-center font-semibold'>Books Categories</h2>



            <div className='my-2'>

                <div className="container grid grid-cols-2 gap-6 mx-auto sm:grid-cols-4 xl:grid-cols-4 text-center">

                    {
                        categories?.map(category => <Link to={`/category/${category.category_name}`}>
                            <button
                                key={category._id}
                                type="button" className="px-8 xl:w-80 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">{category.category_name}</button>
                        </Link>)
                    }

                </div>

            </div>
        </div>


    );
};

export default HomePageBooks;