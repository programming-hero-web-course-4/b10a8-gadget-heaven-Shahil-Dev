import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";
import { useEffect, useState } from "react";

const GadgetCard = () => {
    const data = useLoaderData() ; 
    const { category } = useParams();
    console.log("Category:", category);

    const [gadget, setGadget] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = data.filter(gadget => gadget.category === category);
            setGadget(filteredByCategory);
        } else {
            setGadget(data.slice(0, 6));
        }
    }, [category, data]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {gadget.map(card => (
                <Cards key={card.id} cards={card} />
            ))}

          
            {gadget.length === 6 ? (
                <button onClick={() => setGadget(data)} className="btn btn-active btn-primary bg-[#9538E2] text-white">
                    View All
                </button>
            ) : (
                <button onClick={() => setGadget(data.slice(0, 6))} className="btn btn-active btn-primary bg-[#9538E2] text-white">
                    Show Less
                </button>
            )}
        </div>
    );
};

export default GadgetCard;
