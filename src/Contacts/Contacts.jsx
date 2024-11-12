import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Branch from '../components/Branch/Branch';
import Banner from '../components/Banner/Banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
    const branches = useLoaderData()
    // console.log(branches);
    return (
        <HelmetProvider>
            <Helmet>
                <title>Contact || Gadget Heaven</title>
            </Helmet>
        <div>
            <Banner title={"Contact"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Banner>
            <p className="text-4xl font-bold mb-5 mt-10 text-center">Our Branches</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto '>
                
                {
                    branches.map( branch => <Branch key={branch.id} branch={branch} ></Branch>)
                }
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Contact;