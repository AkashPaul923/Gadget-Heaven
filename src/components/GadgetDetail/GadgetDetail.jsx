import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { DataContext } from "../Root/Root";
import { Helmet, HelmetProvider } from 'react-helmet-async';


const GadgetDetail = () => {
    const {product_id} = useParams()
    const data = useLoaderData()
    
    const gadget = data.find( d => d.product_id === product_id )
    // console.log(gadget);
    const{product_title, product_image, rating, price, description, Specification,availability} = gadget

    const {carts, setCarts,wishlist,setWishlist,totalPrice, setTotalPrice,handleAddWishlistBtn,handleAddCartBtn } = useContext( DataContext )

    
    // console.log(carts);
    // console.log(wishlist);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Gadget Detail || Gadget Heaven</title>
            </Helmet>
        
        <div>
            <Banner title={"Product Detail"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Banner>
            <div className="relative">
                <div className="bg-[#9538e2] h-[200px]"></div>
                <div className="p-8 rounded-3xl max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 bg-base-200 z-10 absolute inset-0 mx-auto h-min">
                    <div>
                        <img className="rounded-3xl" src={product_image} alt="" />

                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-semibold">{product_title}</h1>
                        <p className="text-xl font-semibold">Price: ${price}</p>
                        {
                            availability? <p className="inline-block text-green-900 bg-green-100 px-3 py-1 rounded-3xl border-green-900 border-2">in Stock</p> : <p className="inline-block text-red-900 bg-red-100 px-3 py-1 rounded-3xl border-red-900 border-2">out of Stock</p>
                        }
                        <p className="text-lg">{description}</p>
                        <div>
                            <p className="text-lg font-bold">Specification:</p>
                            <ul>
                                {
                                    Specification.map((s,i) => <li className="ml-3" key={i}>{i+1}. {s}</li>)
                                }
                            </ul>
                        </div>
                        <p className="text-lg font-bold">Rating:</p>
                        <div className="flex items-center gap-5">
                            <div class="rating">
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked="checked" />
                                <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                            </div>
                            <p className="py-2 px-4 rounded-lg bg-white">{rating}</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={()=>handleAddCartBtn(gadget)} className="btn btn-lg  hover:bg-violet-800 bg-[#9538e2] text-white rounded-3xl">Add to Cart <BsCart3 /></button>
                            <button onClick={()=>handleAddWishlistBtn(gadget)} disabled={wishlist.find(wl =>wl.product_id === product_id ) ? true : false} className="btn btn-lg btn-circle text-xl font-extrabold ml-3 bg-white border-2"><CiHeart /></button>
                        </div>
                    </div>
                </div>
                <div className=" h-[800px]"></div>
            </div>
        </div>
        </HelmetProvider>
    );
};

export default GadgetDetail;