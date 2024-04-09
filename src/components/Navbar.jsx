import React from 'react';
import { NavLink } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='flex justify-between px-12 py-3 bg-transparent fixed w-[100%] z-20'>
            <NavLink to={'/'}>
                <img src="./images/logo.png" alt="" className='h-8 w-50' />
            </NavLink>

            <ul className='flex gap-5 font-semibold text-white'>
                <li>
                    <NavLink exact to={'/'} activeClassName='text-[#30d8c8]'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/browser_topics'} activeClassName='text-[#30d8c8]'>Browser Topics</NavLink>
                </li>
                <li>
                    <NavLink to={'/how_it_works'} activeClassName='text-[#30d8c8]'>How It Works</NavLink>
                </li>
                <li>
                    <NavLink to={'/faqs'} activeClassName='text-[#30d8c8]'>Faqs</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} activeClassName='text-[#30d8c8]'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={'/account'}>
                        <span className='flex justify-center items-center gap-1'> Pages <span className='text-lg'><IoIosArrowDown /></span></span>
                        <div className='hidden'>
                            <ul>
                                <li>Hello</li>
                                <li>World</li>
                            </ul>
                        </div>
                    </NavLink>
                </li>
            </ul>

            <button className='bg-white text-black rounded-full h-8 w-8 flex justify-center items-center text-xl'>
                <VscAccount />
            </button>
        </nav>
    );
};

export default Navbar;
