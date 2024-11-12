import { NavLink, useLocation } from "react-router-dom";
import bannerImg from "../../assets/banner.jpg"
import { useEffect, useState } from "react";

const Banner = ({title, subtitle, btn1,btn2,btn1Link,btn2Link}) => {
    const [activeBanner, setActiveBanner] = useState(false);
    const location = useLocation()
    // console.log(location.pathname);
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/categories/Laptop" || location.pathname === "/categories/Smartphone" || location.pathname === "/categories/Smartwatch" || location.pathname === "/categories/charger" || location.pathname === "/categories/powerbank" || location.pathname === "/categories/headphone") {
            setActiveBanner(true);
        }
        else{
            setActiveBanner(false)
        }
    });


    return (
        <div>
            <div className={`bg-[#9538e2] pt-10 relative ${activeBanner? "pb-[350px]  rounded-b-3xl" : "pb-10"}`}>
                <div className="text-center max-w-5xl mx-auto space-y-7 text-white">
                    <h3 className="text-xl md:text-3xl lg:text-5xl font-bold">{title}</h3>
                    <p>{subtitle}</p>
                    <div className="flex gap-4 justify-center">
                    <NavLink to={btn1Link}className={`btn bg-white text-[#9538e2] rounded-[32px] text-xl font-bold ${btn1? "" : "hidden" } `} >{btn1}</NavLink>
                    <NavLink to={btn2Link} className={`btn bg-white text-[#9538e2] rounded-[32px] text-xl font-bold ${btn2 ? "" : "hidden"}`}>{btn2}</NavLink>

                       
                            
                    </div>
                </div>
                <div className="relative max-w-6xl mx-auto">
                <div className={`absolute inset-y-7  h-min rounded-3xl p-6 border-2 bg-[#ffffff33] ${activeBanner? "" : "hidden"}` }>
                    <img className="rounded-3xl" src={bannerImg} alt="" />
                </div>
                </div>
                
            </div>
            <div className={`${activeBanner? "h-[150px] md:h-[300px] lg:h-[400px]" : "hidden"}`}></div>
        </div>
    );
};

export default Banner;