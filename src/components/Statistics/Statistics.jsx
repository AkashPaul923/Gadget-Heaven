
import Banner from "../Banner/Banner";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const Statistics = () => {
    
  
  return (
    <HelmetProvider>
      <Helmet>
        <title>Statistics || Gadget Heaven</title>
      </Helmet>
      <div>
        <Banner
          title={"Statistics"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Banner>
        <div className="min-h-[600px]">
            
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Statistics;
