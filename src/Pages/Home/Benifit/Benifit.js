import React from 'react';

const Benifit = () => {
    return (
        <section className="p-6 my-6 text-gray-800">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-900 ">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-gray-100">
                        <img src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/icon-4_180x.png?v=1613723084" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-semibold leading-none  mb-2">FREE SHIPPING</p>
                        <p className="capitalize">Order over $100</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-900 ">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-gray-100">
                        <img src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/icon-3_180x.png?v=1613723084" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-semibold leading-none  mb-2">SECURE PAYMENT</p>
                        <p className="capitalize">100% Secure Payment</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-900">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-gray-100">
                        <img src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/icon-2_180x.png?v=1613723084" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-semibold leading-none  mb-2">
                            BEST PRICE</p>
                        <p className="capitalize">Guaranteed Price</p>
                    </div>
                </div>
                <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 text-gray-900 ">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 text-gray-100">
                        <img src="https://cdn.shopify.com/s/files/1/0359/5979/9852/files/icon-1_180x.png?v=1613723084" alt="" />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-xl font-semibold leading-none mb-2">FREE RETURNS</p>
                        <p className="capitalize">Within 30 Days returns</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benifit;