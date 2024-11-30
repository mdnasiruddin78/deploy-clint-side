import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='space-x-5 text-center text-2xl font-bold'>
            <NavLink to="/">home</NavLink>
            <NavLink to="/addcoffee">addcoffee</NavLink>
            <NavLink to="/signin">signin</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    );
};

export default Navbar;