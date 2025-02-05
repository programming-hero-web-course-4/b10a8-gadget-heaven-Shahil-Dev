import { NavLink } from "react-router-dom";


const Dashboard = () => {
  
    return (
        <div>
            <div className="bg-[#9538E2] md:rounded-b-[20px]">
                <div className="text-center text-white p-10 pt-[30px] md:mt-[-20px]">
                    <h1 className="text-[32px] font-bold">Dashboard</h1>
                    <p>
                        Explore the latest gadgets that will take your experience to <br />
                        the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className="flex justify-center gap-5">
                    <div>
                        <NavLink
                            to="/Dashboard/wishlist" 
                            className={({ isActive }) =>
                                `bg-[#09080F0D] hover:text-black hover:bg-[#ffffff] rounded-[20px] btn mt-5 w-full border-[#e5e5e5] 
                                ${isActive ? 'bg-[#ffffff] text-black' : 'text-black'}`
                            }
                        >
                            Wishlist
                        </NavLink>
                    </div>
                </div>
                <br />
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {view.filter(card => card).map((card, index) => (
                    <Cards key={index} card={card} />
                ))}
            </div> */}

        </div>
    );
};

export default Dashboard;
