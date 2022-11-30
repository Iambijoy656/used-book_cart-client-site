import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const order = useLoaderData();
    const { book, email, phone, price } = order
    return (
        <>
            <div className="my-5 ml-5">
                <h2 className="text-3xl text-ora">
                    Payment for{" "}
                    Book <span className='text-orange-500'>{book}</span>
                </h2>
                <p className="text-xl my-5 text-orange-600">
                    Please pay <strong>${price}</strong>
                </p>
                <div className="w-96 my-12">
                    {/* <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements> */}
                </div>
            </div>
        </>
    );
};

export default Payment;