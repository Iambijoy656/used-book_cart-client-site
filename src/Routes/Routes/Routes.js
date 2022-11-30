import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Categories from "../../Pages/Categories/Categories";
import Category from "../../Pages/Categories/Category";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedProduct from "../../Pages/Dashboard/ReportedProduct/ReportedProduct";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import Blog from "../../Pages/Blog/Blog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/getLimitBooks')

            },
            {
                path: '/categories',
                element: <Categories></Categories>,
                loader: () => fetch('http://localhost:5000/allBooks')
            },
            {
                path: '/category/:name',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)



            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/reportedproduct',
                element: <ReportedProduct></ReportedProduct>
            },
            {
                path: "/dashboard/payment/:id",
                element: (

                    <Payment></Payment>

                ),
                loader: ({ params }) =>
                    fetch(
                        `http://localhost:5000/orders/${params.id}`
                    ),
            },

        ]


    }
])