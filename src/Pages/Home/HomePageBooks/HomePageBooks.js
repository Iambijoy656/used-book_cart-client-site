import React, { useEffect, useState } from 'react';

const HomePageBooks = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(http://localhost:5000/categories')
    }, [])

    return (
        <div>
            <h2 className='text-4xl my-6 text-center font-semibold'>Books</h2>



            <div className='my-2'>

                <div className="container grid grid-cols-2 gap-6 mx-auto sm:grid-cols-4 xl:grid-cols-4 text-center">
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-white bg-sky-700 hover:text-white">All</button>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">Poetry</button>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">History</button>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">Business</button>
                </div>

            </div>
        </div>


    );
};

export default HomePageBooks;