import { BrowserRouter, createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router =createBrowserRouter([
    {
        path:'/', 
        element:<HomeLayout></HomeLayout>
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