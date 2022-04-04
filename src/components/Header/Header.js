import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className={`w-full text-xl font-semibold pt-8 pb-4 mb-12 uppercase text-center md:block flex flex-col gap-2 bg-amber-200 md:bg-transparent`}>
                <NavLink to ="/" className={({isActive}) => (isActive ? "md:mr-10 active-link" : "md:mr-10 nav-link")}>
                    Home 
                </NavLink>
                <NavLink to ="/reviews" className={({isActive}) => (isActive ? "md:mr-10 active-link" : "md:mr-10 nav-link")}>
                    Reviews
                </NavLink>
                <NavLink to ="/dashboard" className={({isActive}) => (isActive ? "md:mr-10 active-link" : "md:mr-10 nav-link")}>
                    Dashboard
                </NavLink>
                <NavLink to ="/blogs" className={({isActive}) => (isActive ? "md:mr-10 active-link" : "md:mr-10 nav-link")}> 
                    Blogs 
                </NavLink>
                <NavLink to ="/about" className={({isActive}) => (isActive ? "md:mr-10 active-link" :  "md:mr-10 nav-link")}>
                    About 
                </NavLink>     
            </div>
        </>
        
    );
};

export default Header;