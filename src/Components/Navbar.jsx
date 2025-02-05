import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose  } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
// import Banner from "./Banner";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="md:m-5 ">
            <div className="md:rounded-t-[20px] md:h-[100px] max-w-6xl mx-auto bg-[#9538E2] shadow-sm">
                <div className="fixed right-0 top-6 left-0 md:rounded-2xl navbar max-w-6xl mx-auto flex justify-between items-center z-50 backdrop-blur-2xl pt-5 px-4">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div onClick={() => setOpen(!open)} tabIndex={0} role="button" className={`btn btn-ghost  lg:hidden`}>
                                {
                                    open === true ? <IoClose className="h-5 w-5" /> : <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 ${open ? 'hidden' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                }

                            </div>
                            <ul
                                tabIndex={0}
                                className={`menu-sm dropdown-content ${open ? 'hidden' : ''}  bg-amber-600  mt-3  p-2 rounded-[5px]`}>
                                   <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/">Home </NavLink></li>
                                <li>
                    <NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/Statistics ">Statistics </NavLink>
                                </li>
<li><NavLink className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/Dashboard">Dashboard</NavLink></li>
                    <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/LogIn">LogIn</NavLink></li>
                            </ul>
                        </div>
                        <Link to="../" className="btn btn-ghost text-2xl">Gadget Heaven
                        </Link>
                    </div>
                    <div className="navbar-center hidden gap-5 lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/">Home </NavLink></li>
                                <li>
         <NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/Statistics">Statistics </NavLink>
                                </li>
           <li><NavLink className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/Dashboard">Dashboard</NavLink></li>
                    <li><NavLink  className={({isActive})=>`text-black font-extrabold ${isActive ? "text-white" : "text-[#000000]"}`} to="/LogIn">LogIn</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 md:mr-0 mr-2 md:gap-5">
                        <Link to=""><button className="cursor-pointer rounded-full bg-white p-3"><LuShoppingCart  className=" w-5 h-5"/></button></Link>
                        <Link to=""><button className="cursor-pointer rounded-full bg-white p-3"><FaRegHeart className="h-5 w-5" /></button></Link>
                    </div>
                 </div>
                 <br /> <br /><br />
                 {/* <Banner></Banner> */}
            </div>
        </div>
    );
};

export default Navbar;