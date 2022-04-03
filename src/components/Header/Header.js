import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='w-full text-xl text-center font-semibold pt-6 pb-4 mb-12 uppercase'>
            <Link to ="/" className='mr-10 nav-link'> Home </Link>
            <Link to ="/reviews" className='mr-10 nav-link'> Reviews </Link>
            <Link to ="/dashboard" className='mr-10 nav-link'> Dashboard </Link>
            <Link to ="/blogs" className='mr-10 nav-link'> Blogs </Link>
            <Link to ="/about" className='mr-10 nav-link'> About </Link>
        </div>
    );
};

export default Header;