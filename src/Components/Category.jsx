/* eslint-disable react/prop-types */
import {  NavLink } from "react-router-dom";

const Category = ({ categories }) => {
    return (
        <div>
            <div className="max-w-xl mx-auto block shadow-2xl rounded-[15px] p-5">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `bg-[#09080F0D] hover:text-white hover:bg-[#9538E2] rounded-[20px] btn mt-5 w-full border-[#e5e5e5] 
                        ${isActive ? 'bg-[#9538E2] text-white' : 'text-black'}`
                    }
                >
                    All Gadget
                </NavLink>
                {
                    categories.map(({ id, category }) => (
                        <NavLink
                            to={`/category/${category}`}
                            key={id}
                            className={({ isActive }) =>
                                `bg-[#09080F0D] hover:text-white hover:bg-[#9538E2] rounded-[20px] btn mt-5 w-full border-[#e5e5e5] 
                                ${isActive ? 'bg-[#9538E2] text-white' : 'text-black'}`
                            }
                        >
                            {category}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Category;
