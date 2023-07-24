

import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import UserProfile from "../Layout/UserProfile";
import Addmission from "../Pages/AddmissionPages/Addmission";
import AddmissionForm from "../Pages/AddmissionPages/AddmissionForm";
import TotalCollage from "../Pages/CollagePages/TotalCollage/TotalCollage";
import CollageDetails from "../Pages/HomePages/CollageCard/CollageDetails";
import Home from "../Pages/HomePages/Home/Home";
import Login from "../Pages/LoginPages/Login/Login";
import Register from "../Pages/LoginPages/Register/Register";
import MyCollage from "../Pages/MyCollage/MyCollage";
import ErrorPage from "../Components/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/user-profile',
                element: <UserProfile></UserProfile>
            },

            {
                path: '/total-collages',
                element: <TotalCollage></TotalCollage>
            },
            {
                path: `/collage-details/:id`,
                element: <CollageDetails></CollageDetails>,
                loader: ({ params }) => fetch(`https://edtech-university-application-server.vercel.app/all-collages/${params.id}`)
            },
            {
                path: '/addmission',
                element: <Addmission></Addmission>
            },
            {
                path: '/addmission-form/:id',
                element: <AddmissionForm></AddmissionForm>,
                loader: ({ params }) => fetch(`https://edtech-university-application-server.vercel.app/all-collages/${params.id}`)
                // TODO:
            },
            {
                path: '/my-collage',
                element: <MyCollage></MyCollage>
            }
        ]
    },
]);

export default router