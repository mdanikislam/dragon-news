import { BrowserRouter, createBrowserRouter, Navigate } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import CategoriesNews from "../pages/CategoriesNews";

const router =createBrowserRouter([
    {
        path:'/', 
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                element: <CategoriesNews></CategoriesNews>,
                loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<h1>News Layout</h1>
    },
    {
        path:'auth',
        element: <h1>Auth</h1>
    },
    {
        path:'*',
        element: <h1>Error</h1>
    }
])
export default router;