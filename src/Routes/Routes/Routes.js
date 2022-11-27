import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Category from "../../Pages/Categories/Category";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>

    }
])