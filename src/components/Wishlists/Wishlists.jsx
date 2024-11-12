import { useContext } from "react";
import { DataContext } from "../Root/Root";
import Wishlist from "../Wishlist/Wishlist";


const Wishlists = () => {

    const {carts, setCarts,wishlist,setWishlist} = useContext( DataContext )

    
    return (
        <div className="min-h-96">
            <p className="text-2xl font-bold">WishList</p>
            <div>
                {
                    wishlist.map((wish,idx) => <Wishlist key={idx} wish={wish}></Wishlist>)
                }
            </div>

        </div>
    );
};

export default Wishlists;