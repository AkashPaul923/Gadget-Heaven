import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { DataContext } from "../Root/Root";

const Cart = ({cart}) => {
    const{product_title, product_image, product_id, price, description, Specification,availability} = cart
    const{handleCartDeleteBtn} = useContext( DataContext )
    return (
        <div className="flex justify-between my-4 p-6 rounded-xl bg-base-200">
            <div className="flex gap-4">
                <div className=""><img className="w-36 rounded-xl" src={product_image} alt="" /></div>
                <div>
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className="text-lg">{description}</p>
                    <p className="text-xl font-semibold">Price: ${price}</p>
                </div>
            </div>
            <button onClick={() => handleCartDeleteBtn(product_id,price)} className="btn btn-circle text-4xl text-red-600"><TiDeleteOutline /></button>
        </div>
    );
};

export default Cart;