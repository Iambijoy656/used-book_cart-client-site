import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { BounceLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div className="flex justify-center my-10">
                <BounceLoader color="skyblue" size={60}></BounceLoader>
            </div>
        );
    }


    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;