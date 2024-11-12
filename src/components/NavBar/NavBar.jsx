import { NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Root/Root";

const NavBar = () => {
    const {carts, wishlist} = useContext( DataContext )
    const [active, setActive] = useState(false);
    const location = useLocation()
    // console.log(location.pathname);
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/categories/Laptop" || location.pathname === "/categories/Smartphone" || location.pathname === "/categories/Smartwatch") {
          setActive(true);
        }
        else{
            setActive(false)
        }
    });
    // console.log(a     
    


    const links = <>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                  </>
  return (
<div className={`max-w-screen-2xl mx-auto py-3 mt-8 rounded-t-2xl ${active ? "bg-[#9538e2] text-white" : "bg-white"}`}>
    <div className={`navbar max-w-7xl mx-auto `}>
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {
                        links
                    }
                </ul>
            </div>
            <h1 className="text-xl font-bold">Gadget Heaven</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {
                    links
                }
            </ul>
        </div>
        <div className="navbar-end">
            <btn className="btn btn-circle text-xl font-bold relative"><BsCart3 /><div className="rounded-full bg-white text-black p-2 text-xs absolute -top-5 -right-3">{carts.length}</div></btn>
            <btn className="btn btn-circle text-xl font-bold ml-2 relative"><CiHeart /><div className="rounded-full bg-white text-black p-2 text-xs absolute -top-5 -right-3">{wishlist.length}</div></btn>
        </div>
    </div>
</div>
  );
};

export default NavBar;

