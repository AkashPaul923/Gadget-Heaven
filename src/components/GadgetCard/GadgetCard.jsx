import { Link } from "react-router-dom";


const GadgetCard = ({gadget}) => {

    const {product_image,product_title,price,category,product_id} = gadget
    return (
        <div className="rounded-2xl p-5 space-y-4 border-2 bg-base-200">
            <img className="w-full rounded-2xl" src={product_image} alt="" />
            <p className="text-2xl font-semibold">{product_title}</p>
            <p className="text-xl font-medium">Price: ${price}</p>
            <Link to={`/product_detail/${product_id}`} className="btn border-2 border-violet-500 hover:bg-violet-600 hover:text-white bg-white text-[#9538e2] rounded-[32px]">View Detail</Link>
        </div>
    );
};

export default GadgetCard;