import { Outlet, useLoaderData } from "react-router-dom";
import Category from "../Components/Category";
import Banner from "../Components/Banner";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className="max-w-6xl mx-auto">
            <Banner></Banner>
            <h1 className="text-center text-[40px] font-extrabold">Explore Cutting-Edge Gadgets</h1>
            <br />
            <div className="md:flex block gap-5">
                 <Category categories={categories}></Category>
               <div className="max-w-4xl mx-auto">
                     <Outlet></Outlet>
                    
               </div>

            </div>
        </div>
    );
};

export default Home;