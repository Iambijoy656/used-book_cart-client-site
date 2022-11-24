import React from 'react';

const Categories = () => {
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
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">Fantacy</button>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">Poetry</button>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">History</button>
                    <button type="button" className="px-8 py-3 font-semibold border border-gray-500 text-gray-900 hover:bg-sky-700 hover:text-white">Business</button>
                </div>

            </div>


        </div>


    );
};

export default Categories;