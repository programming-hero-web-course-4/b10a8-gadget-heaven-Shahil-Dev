import { useLoaderData, useParams } from "react-router-dom";

const Device = () => {
    const allData = useLoaderData()
    const {product_id} = useParams()
    const { product_title} = allData
    return (
        <div>
         {product_id} {product_title}
        </div>
    );
};

export default Device;