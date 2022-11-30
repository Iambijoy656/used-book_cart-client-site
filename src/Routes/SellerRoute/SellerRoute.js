import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useRole from "../../hooks/UseRole";
import Loading from "../../Pages/Loading/Loading";



const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const [userRole, roleLoading] = useRole(user?.email);

    if (loading || roleLoading) {
        return <Loading></Loading>;
    }
    console.log(userRole);

    if (user && userRole === "seller") {
        return children;
    }
    return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default SellerRoute;
