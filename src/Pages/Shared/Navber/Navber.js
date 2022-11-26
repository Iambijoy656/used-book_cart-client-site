import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import ReactTooltip from 'react-tooltip';

const Navber = () => {

    const menuItems = <>
        <li>
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/categories"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

            >
                Categories
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/gallery"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

            >
                Gallery
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/blog"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/signup"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : 'black'
                })}
                className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

            >
                Signup
            </NavLink>
        </li>


        {/* {
            user?.email ?
                <>
                    <li>
                        <NavLink
                            to="/review"
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

                        >
                            My Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addservice"
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

                        >
                            Add Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            onClick={handleLogOut}
                            to="/"

                            className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

                        >
                            Sign Out
                        </NavLink>
                    </li>

                    <li>
                        <Link to="/profile">
                            <img
                                className="w-10 rounded-full"
                                data-tip={user.displayName}
                                src={user?.photoURL}
                                alt=""
                            />
                        </Link>
                        <ReactTooltip />
                    </li>

                </>
                :
                <>

                    <li>
                        <NavLink
                            to="/login"
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

                        >
                            SingIn
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/signup"
                            style={({ isActive }) => ({
                                color: isActive ? 'red' : 'black'
                            })}
                            className="font-medium tracking-wide transition-colors duration-200 bg-rose-50 "

                        >
                            Signup
                        </NavLink>
                    </li>
                </>
        } */}




    </>

    return (
        <div className="navbar bg-rose-50  flex justify-between ">
            <div className="navbar-start">
                <div className="dropdown text-black">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow text-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl w-60 h-16">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex  text-black ">
                <ul className="menu menu-horizontal p-0 text-black">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navber;