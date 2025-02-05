/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ cards }) => {
    console.log(cards);

    const { product_title,product_id, price, product_image} = cards;
    return (
        <div className=" mt-5">
            <>
                <div className="card transition hover:scale-105 overflow-hidden border-[2px] border-gray-200 -xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={product_image}
                            className="rounded-xl  w-[180px] h-[180px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p><samp className="font-bold"> Price:</samp>{price}</p>
                        <div className="card-actions">
                           
                            <Link to={`/cards/${product_id}`}><button className="btn btn-outline rounded-[30px] md:border-[#9538E2] md:hover:text-white btn-secondary  md:hover:bg-[#9538E2]"> View Details 
                            </button> </Link>
                        </div>
                    </div>
                     </div>
            </>
        </div>
    );
};

export default Cards;