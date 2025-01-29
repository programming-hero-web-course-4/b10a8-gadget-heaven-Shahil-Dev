import { createBrowserRouter } from "react-router-dom";
import '../App.css'
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import LogIn from "../Pages/LogIn";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/Statistics ",
          element:<Statistics></Statistics>
        },
        {
          path:"/Dashboard ",
          element:<Dashboard></Dashboard>,
        },
        {
           path:"/LogIn ",
           element:<LogIn></LogIn>
        }
      ]
    },
  ]);
export default router

