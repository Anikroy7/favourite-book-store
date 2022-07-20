import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const nav = <>
        <Link to="/" className="nav-link mr-4 font-semibold ">
            Home
        </Link>
        <Link to="/show-books" className="nav-link mr-4 font-semibold ">
            Show Books
        </Link>
        <Link to="/add-book" className="nav-link ms-4 font-semibold ">
            Add Book
        </Link></>
    return (
        <div class="navbar h-20 bg-red-300">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {nav}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-2xl font-bold ">Book Store</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {nav}
                </ul>
            </div>
            <div class="navbar-end">
                <a href="/Login" className='mr-4 font-semibold'>Login</a>
            </div>
        </div>
    );
};

export default Navbar;