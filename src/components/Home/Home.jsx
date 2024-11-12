
import Banner from "../Banner/Banner";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Categories/Categories";

import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    const categories = useLoaderData()

    return (
        <HelmetProvider>
            <Helmet>
                <title>Home || Gadget Heaven</title>
            </Helmet>
        <div className="max-w-screen-2xl mx-auto">
            
            {/* <DynamicTitle title={""}></DynamicTitle> */}
            <Banner title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"} btn1={"Shop Now"} btn1Link={"/dashboard"}></Banner>



            

            <p className="text-center text-xl md:text-2xl lg:text-4xl font-bold mb-7">Explore Cutting-Edge Gadgets</p>
            <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-6  lg:gap-4">
                <div className="my-8 lg:my-0 grid grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-1 auto-rows-min" >
                    <NavLink to="/"  className={({isActive}) =>`btn hover:bg-violet-800 hover:text-white ${isActive ? "bg-[#9538e2] text-white" : ""}`}>All Gadgets</NavLink>
                    {
                        categories.map(category => <Categories key={category.id} category={category.category} ></Categories>)
                    }
                    <NavLink to="/categories/charger"  className={({isActive}) =>`btn hover:bg-violet-800 hover:text-white ${isActive ? "bg-[#9538e2] text-white" : ""}`}>Charger</NavLink>
                    <NavLink to="/categories/headphone"  className={({isActive}) =>`btn hover:bg-violet-800 hover:text-white ${isActive ? "bg-[#9538e2] text-white" : ""}`}>Headphone</NavLink>
                    <NavLink to="/categories/powerbank"  className={({isActive}) =>`btn hover:bg-violet-800 hover:text-white ${isActive ? "bg-[#9538e2] text-white" : ""}`}>Power Bank</NavLink>
                </div>
                
                <div className=" col-span-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Home;