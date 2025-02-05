import { useEffect, useState } from "react";
import Cards from "./Cards";
import { addAllData } from "../Utils/Utils";

const Wish = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
    const pera = addAllData();
    setData(pera);
    },[])
    return (
        <div>
            <h1 className="text-[30px] font-extrabold ml-4">Wishlist</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             {data.map(card => (
                <Cards key={card.id} cards={card} />
            ))}
             </div>
        </div>
    );
};

export default Wish;