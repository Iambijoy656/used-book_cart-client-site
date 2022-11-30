import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useRole from '../hooks/UseRole';
import Loading from '../Pages/Loading/Loading';

import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [userRole, userRoleLoading] = useRole(user?.email);

    if (userRoleLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <Navber></Navber>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-gray-100 mr-10 text-base-content">















                        {userRole === "buyer" && (
                            <>

                                <li>
                                    <NavLink
                                        end
                                        to={"/dashboard/myorders"}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >
                                        My Orders
                                    </NavLink>
                                </li>
                            </>
                        )}



                        {userRole === "seller" && (
                            <>
                                <li>
                                    <NavLink
                                        end
                                        to={"/dashboard/myproducts"}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >
                                        My Product
                                    </NavLink>
                                </li>

                                <li className="bg-transparent">
                                    <NavLink
                                        end
                                        to="/dashboard/addproduct"
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >
                                        Add A Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        end
                                        to={"/dashboard/myorders"}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >
                                        My Orders
                                    </NavLink>
                                </li>
                            </>
                        )}


                        {userRole === "admin" && (
                            <>

                                <li>
                                    <NavLink
                                        end
                                        to={"/dashboard/reportedproduct"}
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >
                                        Reported product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allbuyers"
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >All Buyers</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allsellers"
                                        style={({ isActive }) => ({
                                            color: isActive ? 'blue' : 'black'
                                        })}
                                        className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                                    >All Sellers</NavLink>
                                </li>
                            </>
                        )}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;