
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto sm:text-center lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >

                                <rect
                                    fill="url(#5dc90b42-5ed4-45a6-8e63-2d78ca9d3d95)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">Hello {user?.displayName} <br /> Welcome to Dashboard page </span>
                        </span>{' '} <br />
                        <span className="text-cyan-500">
                            {new Date().toLocaleString().split(",")[0]}
                        </span>
                    </h2>

                </div>
                <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                        src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2VsY29tZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""
                    />
                </div>

            </div>
        </div>
    );
};

export default Dashboard;