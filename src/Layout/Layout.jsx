import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import  { Toaster } from 'react-hot-toast';
const Layout = () => {
    return (
        <div>
            <Toaster />
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-232px)] max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Layout;

