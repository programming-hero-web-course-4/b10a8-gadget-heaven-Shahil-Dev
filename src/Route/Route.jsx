import { createBrowserRouter } from "react-router-dom";
import '../App.css'
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import LogIn from "../Pages/LogIn";
import GadgetCard from "../Components/GadgetCard";
import Device from "../Components/Device";
import Wish from "../Components/Wish";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader:()=> fetch("../Category.json"),
          children:[
            {
             path:"/",
             element:<GadgetCard></GadgetCard>,
             loader:()=> fetch("../Product.json"),
            },
            {
             path:"/category/:category",
             element:<GadgetCard></GadgetCard>,
             loader:()=> fetch("../Product.json"),
            }
          ]
        },
        {
          path:"/Statistics",
          element:<Statistics></Statistics>
        },
        {
          path:"/Dashboard",
          element:<Dashboard></Dashboard>,
          children:[
           {
              path:"/Dashboard/wishlist",
              element:<Wish></Wish>
            }
          ]
        },
        {
           path:"/LogIn",
           element:<LogIn></LogIn>
        },
        {
           path:"/cards/:product_id",
           element:<Device></Device>,
           loader:()=> fetch("../Product.json"),

        },
        
      ]
    },
  ]);
export default router

