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
import AllTouristSpot from "../Pages/AllTouristSpot";
import MyList from "../Pages/MyList";
import PrivateRouter from "../Protected/PrivateRouter";
import Details from "../Component/Details";

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
          element:<PrivateRouter>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRouter>
        },
        {
          path:'/updatespot/:id',
          element:<UpdateTouristSpot></UpdateTouristSpot>,
          loader:({params}) => fetch(`http://localhost:5000/spot/${params.id}`)

        },
        {
          path:'/alltouristspots',
          element:<AllTouristSpot></AllTouristSpot>
        },
        {
          path:'/myList',
          element:<PrivateRouter>
            <MyList></MyList>
          </PrivateRouter>
        },
        {
          path:'/details/:id',
          element:<PrivateRouter>
            <Details></Details>
          </PrivateRouter>,
          loader:({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
        }
      ]
    },
  ]);
  export default router;