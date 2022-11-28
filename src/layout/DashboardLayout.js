import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';

const DashboardLayout = () => {
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

                        <li>
                            <NavLink
                                to="/dashboard/myorders"
                                style={({ isActive }) => ({
                                    color: isActive ? 'blue' : 'black'
                                })}
                                className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                            >My Orders</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/"
                                style={({ isActive }) => ({
                                    color: isActive ? 'blue' : 'black'
                                })}
                                className="font-medium tracking-wide transition-colors duration-200 bg-gray-100 "
                            >Sidebar Item 2</NavLink>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;