import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";

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
                element: <Categories></Categories>
            },

        ]
    }
])