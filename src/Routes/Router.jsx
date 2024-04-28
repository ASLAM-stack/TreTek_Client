import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import AddTouristSpot from "../Pages/AddTouristSpot";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:'/register',
          element:<SignUp></SignUp>
        },
        {
          path:'/addtouristspot',
          element:<AddTouristSpot></AddTouristSpot>
        },
        {
          path:'/updatespot',
          element:<UpdateTouristSpot></UpdateTouristSpot>
        }
      ]
    },
  ]);
  export default router;