import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose  } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import Banner from "./Banner";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="m-5 ">
            <div className="md:rounded-[20px] rounded-[10px] md:h-[400px] bg-[#9538E2] shadow-sm">
                <div className="flex max-w-6xl pt-5 mx-auto">
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
                                className={`menu-sm dropdown-content ${open ? 'hidden' : ''}  bg-white  mt-3  p-2 rounded-[5px]`}>
                                <li><Link to="/">Home </Link></li>
                                <li>
                                    <Link to="/Statistics ">Statistics </Link>
                                </li>
                                <li><Link to="/Dashboard ">Dashboard</Link></li>
                                <li><Link to="/LogIn ">LogIn</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">Gadget Heaven
                        </a>
                    </div>
                    <div className="navbar-center hidden gap-5 lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li><Link className="text-white" to="/">Home </Link></li>
                                <li>
                    <Link className="text-white" to="/Statistics ">Statistics </Link>
                                </li>
                   <li><Link className="text-white" to="/Dashboard ">Dashboard</Link></li>
                    <li><Link className="text-white" to="/LogIn ">LogIn</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2 md:mr-0 mr-2 md:gap-5">
                        <Link to=""><button className="cursor-pointer rounded-full bg-white p-3"><LuShoppingCart  className=" w-5 h-5"/></button></Link>
                        <Link to=""><button className="cursor-pointer rounded-full bg-white p-3"><FaRegHeart className="h-5 w-5" /></button></Link>
                    </div>
                 </div>
                 <Banner></Banner>
            </div>
        </div>
    );
};

export default Navbar;