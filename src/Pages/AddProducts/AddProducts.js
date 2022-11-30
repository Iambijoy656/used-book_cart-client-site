import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AddProducts = () => {
    const [addProductLoading, setAddProductLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();

            return data;
        },
    });

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    const handelAddProduct = (data) => {
        setAddProductLoading(true);
        const formData = new FormData();
        const profilePicture = data.img[0];
        formData.append("image", profilePicture);
        fetch(url, {
            method: "POST",
            body: formData,
        })

            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const product = {
                        book_title: data.name,
                        img: imgData.data.url,
                        resale_price: data.sellingPrice,
                        Original_price: data.originalPrice,
                        category: data.category,
                        location: data.location,
                        use: data.used,
                        sellerName: user?.displayName ? user?.displayName : "Mr.Example",
                        sellerEmail: user?.email,
                        reported: false,
                        available: true,
                        advertised: false,
                        postTime: new Date().getTime(),
                        contactNumber: data.contactNumber,

                    };

                    fetch(`http://localhost:5000/add-products`, {
                        method: "POST",
                        headers: {
                            authorization: `bearar ${localStorage.getItem("accessToken")}`,
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.acknowledged) {
                                toast.success("Product Added");
                                navigate("/dashboard/myproducts");
                                setAddProductLoading(false);
                            }
                        });
                }
            });
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(handelAddProduct)}
                className=" text-black bg-opacity-50 p-4 rounded border border-slate-500 border-opacity-20 "
            >
                <h2 className="text-center py-3 text-2xl font-bold text-gray-800">
                    Add Book
                </h2>

                <div>
                    {/* product name and image */}
                    <div className="grid md:grid-cols-2 gap-x-2 my-3">
                        <div>
                            <p className=" text-black mb-2">Book Name</p>
                            {errors.name && (
                                <p className="text-sm text-error">{errors.name?.message}</p>
                            )}
                            <input
                                className="p-3 rounded w-full text-black  border border-slate-500 border-opacity-20"
                                type="text"
                                {...register("name", {
                                    required: "Name is Required",
                                })}
                                placeholder="Book Name"
                            />
                        </div>

                        <div>
                            <p className=" text-black mb-2">
                                Upload Book Picture
                            </p>
                            {errors.img && (
                                <p className="text-sm text-error">{errors.img?.message}</p>
                            )}
                            <input
                                className="p-3 rounded w-full text-slate-900  border border-slate-500 border-opacity-20"
                                type="file"
                                {...register("img", {
                                    required: "Hello Sir, product picture is Required",
                                })}
                                placeholder="Your location"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-2 my-3">
                        <div>
                            <input
                                className="p-3 rounded w-full text-slate-900  border border-slate-500 border-opacity-20"
                                type="number"
                                {...register("originalPrice", {
                                    required: "Hello Sir, originalPrice is Reuired",
                                })}
                                placeholder="Product Original Price"
                            />
                        </div>
                        <div>
                            <input
                                className="p-3 rounded w-full text-slate-900  border border-slate-500 border-opacity-20"
                                type="number"
                                {...register("sellingPrice", {
                                    required: "Hello Sir, sellingPrice is Required",
                                })}
                                placeholder="Product selling Price"
                            />
                        </div>
                    </div>
                    {/* product category and location */}
                    <div className="grid md:grid-cols-2 gap-x-2 my-3">
                        <div>
                            <p className=" text-black mb-1">Add Your Location</p>
                            {errors.location && (
                                <p className="text-sm text-error">
                                    {errors.location?.message}
                                </p>
                            )}
                            <input
                                className="p-3 rounded w-full text-slate-800  border border-slate-500 border-opacity-20"
                                type="location"
                                {...register("location", {
                                    required: "Hello Sir, location is Required",
                                })}
                                placeholder="Your location"
                            />
                        </div>

                        <div>
                            <p className=" text-black mb-1">
                                select product category
                            </p>
                            <select
                                {...register("category")}
                                className="p-3 rounded w-full text-slate-900  border border-slate-500 border-opacity-20"
                            >
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat.category_name}>
                                        {cat.category_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-2 my-3">
                        <div>
                            {errors.used && (
                                <p className="text-sm text-error">
                                    {errors.used?.message}
                                </p>
                            )}
                            <input
                                className="p-3 rounded w-full text-slate-900 border border-slate-500 border-opacity-20"
                                type="use"
                                {...register("used", {
                                    required: "Hello Sir, timeOfUsed is Reuired",
                                })}
                                placeholder="Your timeOfUsed"
                            />
                        </div>
                        <div>
                            {errors.contactNumber && (
                                <p className="text-sm text-error">
                                    {errors.contactNumber?.message}
                                </p>
                            )}
                            <input
                                className="p-3 rounded w-full text-slate-900 border border-slate-500 border-opacity-20"
                                type="number"
                                {...register("contactNumber", {
                                    required: " contactNumber is Reuired",
                                })}
                                placeholder="Your contactNumber"
                            />
                        </div>

                    </div>





                    <div className="flex items-center justify-center ">
                        <button type="submit" className="h-12 px-6 mt-8 text-sm font-semibold rounded bg-sky-700 text-white">Add Book</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
