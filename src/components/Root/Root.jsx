import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DataContext = createContext([])

const Root = () => {
    const [carts , setCarts] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleAddCartBtn = (gadget) =>{
        // console.log(gadget);
        if(carts.find(ct => ct.product_id === gadget.product_id)){
            // console.log("exist");
            return toast.error("Item already exist in Cart")
        }
        const newCarts = [...carts, gadget]
        setCarts(newCarts)
        setTotalPrice(totalPrice + gadget.price )
        toast.success("Item added in Cart")
    }
    const handleAddWishlistBtn = (gadget) =>{
        // console.log(gadget);
        // console.log(wishlist);
        if(wishlist.find(wl => wl.product_id === gadget.product_id)){
            // console.log("exist");
            return toast.error("Item already exist in wish list")
        }
        const newWishlist = [...wishlist, gadget]
        setWishlist(newWishlist)
        toast.success("Item added in wish list")
    }
    const handleCartDeleteBtn = (product_id,price) =>{
        // console.log("delete btn clicked",product_id , price);
        const selectedCarts = [...carts]
        const filteredCarts = selectedCarts.filter(cart => cart.product_id !== product_id)
        setCarts(filteredCarts)
        setTotalPrice(totalPrice-price)
        toast.warn("Item deleted from Cart")
    }
    const handleWishlistDeleteBtn = (product_id) =>{
        // console.log("delete btn clicked",product_id , price);
        const selectedWishlist = [...wishlist]
        const filteredWishlist = selectedWishlist.filter(wish => wish.product_id !== product_id)
        setWishlist(filteredWishlist)
        toast.warn("Item deleted from wish list")
    }
    const  handlePurchaseBtn = () => {
        // console.log("purchase btn clicked");
        document.getElementById('my_modal_5').showModal()
            setCarts([])
            setTotalPrice(0)
    }

    

    const handleSortBtn = () => {
        // console.log("sort btn clicked");
        // Sorting the pets by price in descending order
        // console.log(carts);
            const sortedCarts = [...carts]
            sortedCarts.sort((a, b) => {
            if (a.price === null) return 1;  // If price is null, place it at the end
            if (b.price === null) return -1; // If price is null, place it at the end
            return b.price - a.price;        // Sort in descending order
            });
        // console.log(sortedCarts);
        setCarts(sortedCarts)
        
        
    }


    return (
        <div>
            <DataContext.Provider value={{carts, setCarts,wishlist,setWishlist,totalPrice, setTotalPrice,handleAddCartBtn, handleAddWishlistBtn, handleCartDeleteBtn, handleWishlistDeleteBtn, handlePurchaseBtn, handleSortBtn}}>
                <NavBar></NavBar>
                <Outlet></Outlet>
                <Footer></Footer>
            </DataContext.Provider>
            <ToastContainer />
        </div>
    );
};

export default Root;