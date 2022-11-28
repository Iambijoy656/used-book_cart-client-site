import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);


    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            <div className="h-48 rounded-t bg-gray-700"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 ">
                <div className="w-full h-6 rounded bg-gray-700"></div>
                <div className="w-full h-6 rounded bg-gray-700"></div>
                <div className="w-3/4 h-6 rounded bg-gray-700"></div>
            </div>
        </div>
    }


    return (
        <div>
            <h2 className='text-3xl mb-5'>My Orders {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Book</th>
                            <th>Price</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.book}</td>
                                    <td>${order.price}</td>
                                    <td>
                                        {
                                            <Link to={`/ dashboard / payment / ${order._id}`}>
                                                <button
                                                    className="btn btn-sm btn-warning"
                                                >
                                                    Pay
                                                </button>
                                            </Link>
                                        }
                                        {

                                            order.price && order.paid && <span className='text-green-500 font-semibold'>Paid</span>

                                        }

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;