import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const AllSellers = () => {
    const [deleteLoader, setDeleteLoader] = useState(false);
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;

        }
    })



    const handelDelete = (id) => {
        setDeleteLoader(true);
        fetch(` http://localhost:5000/buyers/delete-buyers?id=${id}`, {
            method: "DELETE",

        })
            .then((res) => res.json())
            .then((data) => {

                if (data.deletedCount > 0) {
                    toast.info("buyer Deleted");
                    refetch();
                    setDeleteLoader(false);
                }

            })
            .catch(err => {
                refetch()
            })


    };


    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <h2 className='text-3xl mb-5 text-center'>All Sellers{sellers?.length}</h2>
            <table className="mx-auto table  myTable w-full p-4 overflow-x-scroll">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {sellers.map((buyer, i) => (
                        <tr key={buyer._id}>
                            <td>{i + 1}</td>
                            <td>
                                <span>{buyer.name}</span>
                            </td>
                            <td>{buyer.email}</td>

                            <td>
                                <button
                                    onClick={() => handelDelete(buyer._id)}
                                    className="btn btn-sm btn-error"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
};


export default AllSellers;