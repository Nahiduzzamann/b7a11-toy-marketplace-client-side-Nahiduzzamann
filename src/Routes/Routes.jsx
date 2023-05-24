import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute";
import BlogPage from "../pages/BlogPage/BlogPage";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ToyModal from "../pages/AllToys/ToyModal";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFoundPage></NotFoundPage>,
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
            path: '/signup',
            element: <SignUp></SignUp>
        }, 
        {
            path: '/blogs',
            element: <BlogPage></BlogPage>
        }, 
        {
            path: '/allToys',
            element: <AllToys></AllToys>
        }, 
        {
            path: '/addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },  
        {
            path: '/mytoys',
            element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }, 
        {
            path: '/SingleToyDetails/:id',
            element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-car.vercel.app/SingleToyDetails/${params.id}`)
        }, 
      ]
    },
  ]);


  export default router;