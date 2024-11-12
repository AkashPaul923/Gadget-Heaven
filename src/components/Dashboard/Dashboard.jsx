// import { Outlet } from "react-router-dom";
// import Banner from "../Banner/Banner";
import { useState } from "react";
import Carts from "../Carts/Carts";
import Wishlists from "../Wishlists/Wishlists";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Dashboard = () => {
    const [showCart , setShowCart] = useState(true)
    const handleCartBtn = () =>{
        setShowCart(true)
    }
    const handleWishListBtn = () =>{
        setShowCart(false)
    }
  return (
    <HelmetProvider>
        <Helmet>
                <title>Dashboard || Gadget Heaven</title>
        </Helmet>
    <div>
        <div className="bg-[#9538e2] pt-10 pb-10">
            <div className="text-center max-w-5xl mx-auto space-y-7 text-white">
                <h3 className="text-xl md:text-3xl lg:text-5xl font-bold">Dashboard</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-4 justify-center">
                    <button onClick={handleCartBtn} className={`btn btn-lg text-xl font-bold rounded-[32px] px-12 ${showCart?"btn-active hover:btn-secondary bg-white text-[#9538e2]":" bg-[#9538e2] text-white border-2 border-white"}`}>Cart</button>
                    <button onClick={handleWishListBtn} className={`btn btn-lg hover:btn-secondary text-xl font-bold rounded-[32px] px-8${showCart?" bg-[#9538e2] text-white border-2 border-white":"btn-active bg-white text-[#9538e2]"}`}>Wishlist</button>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto my-12">
            {
                showCart? <Carts></Carts> : <Wishlists></Wishlists>
            }
        </div>
    </div>
    </HelmetProvider>
  );
};

export default Dashboard;
