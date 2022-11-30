import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";


const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);

    const {
        data: products = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["myBookings"],
        queryFn: async () => {
            const res = await fetch(
                ` https://books-cart-server.vercel.app/my-products?email=${user?.email}`
            );

            const data = await res.json();
            return data;
        },
    });
    if (isLoading || loading) {
        return <Loading></Loading>;
    }

    // const handelAdvertised = (id) => {
    //     fetch(` https://sel-nft.vercel.app/makeAdvertised/${id}`, {
    //         method: "PUT",
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.modifiedCount > 0) {
    //                 toast.success("Product Advertised Successfull");
    //                 refetch();
    //             }
    //         });
    // };

    const handelDelete = (id) => {
        fetch(` https://books-cart-server.vercel.app/delete-product?id=${id}`, {
            method: "DELETE",

        })

            .then((res) => res.json())
            .then((data) => {

                if (data.deletedCount > 0) {
                    toast.info("Product Deleted");
                    refetch();

                }

            })
            .catch(err => {
                refetch()
            })

    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5 ml-3">
                Products Length:{products.length}
            </h2>
            <div className="">
                <table className="table myTable table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Sl:</th>
                            <th>Image</th>
                            <th className="hidden lg:block">name</th>
                            <th>price</th>
                            <th>Availaibility</th>
                            <th>Action</th>
                            <th>Advertised</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products &&
                            products?.map((product, i) => (
                                <tr key={product._id}>
                                    <td>{i + 1}</td>
                                    <td>
                                        <img className="w-8" src={product.img} alt="" />
                                    </td>
                                    <td>
                                        <span>{product.book_title}</span>
                                    </td>
                                    <td>${product.resale_price}</td>
                                    <td>
                                        {product.available ? (
                                            <button className="btn btn-sm btn-success">
                                                Available
                                            </button>
                                        ) : (
                                            <button className="btn btn-sm btn-warning">Sold</button>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handelDelete(product._id)}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                    {!product.advertised && product.available && (
                                        <td>
                                            {
                                                <button
                                                    // onClick={() => handelAdvertised(product._id)}
                                                    className="btn btn-sm btn-success"
                                                >
                                                    Advertise
                                                </button>
                                            }
                                        </td>
                                    )}
                                    {/* {product.advertised && product.available && (
                                        <td>
                                            <button className="btn btn-sm btn-warning">
                                                Add running
                                            </button>
                                        </td>
                                    )} */}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;
