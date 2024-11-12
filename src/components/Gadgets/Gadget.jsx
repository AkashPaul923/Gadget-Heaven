import { useLoaderData, useParams } from "react-router-dom";
import GadgetCard from "../GadgetCard/GadgetCard";
import { useEffect, useState } from "react";


const Gadget = () => {
    const {category} = useParams()
    const data = useLoaderData()
    const [visible, setVisible] = useState(6)
    const [gadgets , setGadgets] = useState([])

    const showMoreCards = () => {
        setVisible(prev => prev + 6); // Show 6 more cards
      };

    useEffect(() =>{
        if(category){
            const filteredGadget = [...data].filter(gadget => gadget.category === category)
            setGadgets(filteredGadget)
        }
        else{
            setGadgets(data)
        }
    },[data, category])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                gadgets.slice(0, visible).map(gadget => <GadgetCard key={gadget.product_id} gadget={gadget}></GadgetCard>)
            }
            {visible < gadgets.length && (
                <button onClick={showMoreCards}>Show More</button>
            )}
        </div>
    );
};

export default Gadget;