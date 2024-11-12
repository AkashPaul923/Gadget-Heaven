import { useContext, useRef } from "react";
import { DataContext } from "../Root/Root";
import Cart from "../Cart/Cart";
import paymentImg from "../../assets/Group.png"
import { useNavigate } from "react-router-dom";


const Carts = () => {
    const {carts, handlePurchaseBtn,handleSortBtn,setWishlist,totalPrice, setTotalPrice} = useContext( DataContext )
    const purchaseAmount = useRef(totalPrice)
    // console.log(purchaseAmount);
    const navigate = useNavigate()
    const handleModalClick = () => {
        navigate('/')
    }

    return (
        <div className="min-h-96">
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Cart</p>
                <div className="flex items-center">
                    <span className="text-2xl font-bold">Total Cost: ${totalPrice.toFixed(2)}</span>
                    <button onClick={handleSortBtn} className="btn mx-6 bg-white text-[#9538e2] border-2 border-[#9538e2]">Sort by price</button>
                    <button onClick={handlePurchaseBtn} disabled={carts.length > 0 ? false : true } className="btn hover:bg-violet-800 bg-[#9538e2] text-white ">Purchase</button>
                </div>
            </div>
            <div>
                {
                    carts.map((cart,idx) => <Cart key={idx} cart={cart}></Cart>)
                }
            </div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=> document.getElementById('my_modal_5').showModal() }>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex justify-center items-center flex-col">
                    <img src={paymentImg} alt="" />
                    <h3 className="font-bold text-lg mt-2">Payment Successfully</h3>
                    <p className="py-2">Thanks for purchasing.</p>
                    <p className="py-2">Total Cost: ${purchaseAmount.current}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleModalClick} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Carts;