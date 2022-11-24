import React, { useEffect, useState } from 'react';

const HomePageBooks = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className='text-4xl my-6 text-center font-semibold'>Books Categories</h2>



            <div className='my-2'>

                <div className="container grid grid-cols-2 gap-6 mx-auto sm:grid-cols-4 xl:grid-cols-4 text-center">

                    {
                        categories?.map(category => <button
                            key={category._id}
                            type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">{category.category_name}</button>)
                    }

                </div>

            </div>
        </div>


    );
};

export default HomePageBooks;