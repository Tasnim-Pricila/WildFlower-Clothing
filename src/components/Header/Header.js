import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='w-full text-xl text-center font-semibold pt-12 pb-4 mb-12 uppercase'>
            <NavLink to ="/" className={({isActive}) => (isActive ? "mr-10 active-link" : 
            "mr-10 nav-link")}>
                 Home 
            </NavLink>
            <NavLink to ="/reviews" className={({isActive}) => (isActive ? "mr-10 active-link" : "mr-10 nav-link")}>
                 Reviews
            </NavLink>
            <NavLink to ="/dashboard" className={({isActive}) => (isActive ? "mr-10 active-link" : "mr-10 nav-link")}>
                 Dashboard
            </NavLink>
            <NavLink to ="/blogs" className={({isActive}) => (isActive ? "mr-10 active-link" : "mr-10 nav-link")}> 
                Blogs 
            </NavLink>
            <NavLink to ="/about" className={({isActive}) => (isActive ? "mr-10 active-link" :  "mr-10 nav-link")}>
                 About 
            </NavLink>
        </div>
    );
};

export default Header;