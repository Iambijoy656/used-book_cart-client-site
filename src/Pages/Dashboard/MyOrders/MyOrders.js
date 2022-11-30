import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext);


    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://books-cart-server.vercel.app/orders?email=${user?.email}`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>;
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

                            orders &&
                            orders?.map((order, i) =>
                                <tr>
                                    <th>{i + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.book}</td>
                                    <td>${order.price}</td>
                                    <td>
                                        {
                                            order.price && !order.paid &&
                                            <Link to={`/dashboard/payment/${order._id}`}>
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