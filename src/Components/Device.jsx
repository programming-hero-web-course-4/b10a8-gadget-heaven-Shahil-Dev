import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Shift from "./Shift";
import { GiShoppingCart } from "react-icons/gi";
import ReactStars from "react-rating-stars-component";
import { IoHeartOutline } from "react-icons/io5";
import {  addCard, addFavorite } from "../Utils/Utils";
const Device = () => {
    const allData = useLoaderData();
    const { product_id } = useParams();
    const [news, setNews] = useState(null);
    const firstExample = {
        size: 30,
        value: 2.5,
        edit: false
    };
    useEffect(() => {
        if (allData?.length) {
            const simpleData = allData.find(news => news.product_id == product_id);
            setNews(simpleData || {});
        }
    }, [allData, product_id]);

    if (!news) return <p>Loading...</p>;

    const { specification, product_title, product_image, category, price, description, availability, rating } = news;
    console.log(news);
         const handleFavorite = (news) => {
            addFavorite(news);
            // addAllData(news);
         }
         const handleCard = (news) => {
            addCard(news);}
            
    return (
      <div>
        <div className="bg-[#9538E2] text-center md:h-[200px] pt-10 md:pt-0  md:mt-[-20px] md:rounded-b-[20px]"><h1 className="font-bold text-white text-[30px]">Product Details</h1>
          <p className="text-white">Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
          <br />
        </div>
       
        <div className="md:mt-[-50px] justify-center flex ">
           
           <div className="md:flex bg-base-100 w-[800px] md:p-10 rounded-[20px] shadow-sm">
               <div>
                   <figure className=" md:h-[300px]  bg-base-200">
                       <img src={product_image} className="h-full" alt={product_title} />
                   </figure>
               </div>
               <div>
                   <div className="card-body">
                       <h2 className="card-title">{product_title}</h2>
                       <p>{description}</p>
                       <p>{price}$</p>
                       <p>{category}</p>
                       {/* <p>{availability}</p> */}
                       {
                           availability ? <div className="border-2 w-20 h-7 p-0.5 bg-[#309C081A] rounded-2xl text-center border-green-600">In Stock</div> : <p>not availability</p>
                       }
                       <p>
                           <ReactStars {...firstExample} />
                       </p>
                       <p>Rating: {rating}</p>


                       {/* Ensure Specification exists before mapping */}
                       {specification.map((sec, index) => (
                           <Shift key={index} sec={sec} />
                       ))}

                       <div className="card-actions flex ">
                           <button onClick={()=>handleCard(news)} className="btn btn-outline rounded-[30px] md:border-[#9538E2] md:hover:text-white btn-secondary  md:hover:bg-[#9538E2]"> Add To Card <GiShoppingCart className="h-6 w-6" />
                           </button>
                           <div className="tooltip tooltip-bottom" data-tip="add to favorite">
                               <button onClick={()=>handleFavorite(news)}  className="btn btn-outline  md:border-[#9538E2] md:hover:text-white btn-secondary  md:hover:bg-[#9538E2] rounded-full"><IoHeartOutline className="w-6 h-6" /></button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
      </div>
    );
};

export default Device;


