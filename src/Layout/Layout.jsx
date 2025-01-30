import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div>
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


/** <li><NavLink  className={({isActive})=>` font-extrabold ${isActive ? "text-[#9538E2]" : "text-black"}`} to="/">Home</NavLink></li>
                                <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-[#9538E2]" : "text-black"}`} to="/Statistics">Statistics</NavLink></li>
                                <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-[#9538E2]" : "text-black"}`} to="/Dashboard">Dashboard</NavLink></li>
                                <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-[#9538E2]" : "text-black"}`} to="/LogIn">LogIn</NavLink></li>*/

                                /**
                                 * <li><Link className="text-white" to="/">Home </Link></li>
                                <li>
                    <Link className="text-white" to="/Statistics ">Statistics </Link>
                                </li>
                   <li><Link className="text-white" to="/Dashboard ">Dashboard</Link></li>
                    <li><Link className="text-white" to="/LogIn ">LogIn</Link></li>
                                 */