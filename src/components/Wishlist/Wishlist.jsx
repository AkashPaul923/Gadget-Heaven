import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { DataContext } from "../Root/Root";

const Wishlist = ({wish}) => {
    const{product_title, product_image, product_id, price, description, Specification,availability} = wish
    const {handleWishlistDeleteBtn , handleAddCartBtn} = useContext( DataContext )
    return (
        <div className="flex justify-between my-4 p-6 rounded-xl bg-base-200">
            <div className="flex gap-4">
                <div className=""><img className="w-36 rounded-xl" src={product_image} alt="" /></div>
                <div>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className="text-lg">{description}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                    <button onClick={()=>handleAddCartBtn(wish)} className="btn btn-sm hover:bg-violet-800 bg-[#9538e2] text-white">Add to cart</button>
                </div>
            </div>
            <button onClick={() => handleWishlistDeleteBtn(product_id)} className="btn btn-circle text-4xl text-red-600"><TiDeleteOutline /></button>
        </div>
    );
};

export default Wishlist;