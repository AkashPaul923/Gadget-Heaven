import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({category}) => {
    return (
    <NavLink to={`categories/${category}`} className={({isActive}) =>`btn hover:text-white hover:bg-violet-800 ${isActive ? " bg-[#9538e2] text-white " : ""} `}>{category}</NavLink>
        
    );
};

export default Categories;