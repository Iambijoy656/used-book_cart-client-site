import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";


const ReportedProduct = () => {
    const {
        data: reportedProducts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["reportedItems"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/getReported`);
            const data = await res.json();
            return data;
        },
    });


    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h3 className="font-bold text-3xl mb-8">Reported Products {reportedProducts?.length}</h3>
            <table className="table table-zebra w-full mx-3 myTable">
                <thead>
                    <tr>
                        <th>Sl:</th>
                        <th>Image</th>
                        <th>name</th>
                        <th>Seller</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reportedProducts.map((product, ind) => (
                        <tr key={product._id}>
                            <td>{ind + 1}</td>
                            <td>
                                <img className="w-8" src={product.img} alt="" />
                            </td>
                            <td>
                                <span>{product.book_title}</span>
                            </td>
                            <td>{product.sellerEmail}</td>

                            <td>
                                <button
                                    className="btn btn-sm btn-warning"
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

export default ReportedProduct;
