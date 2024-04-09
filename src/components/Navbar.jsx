import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className='flex justify-between px-12 py-3 bg-transparent fixed w-[100%] z-20'>
                <h1><Link to={'/'}>Logo</Link></h1>

                <ul className='flex gap-5'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Browser Topics</Link>
                    </li>
                    <li>
                        <Link to={'/'}>How It Works</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Faqs</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Contact</Link>
                    </li>
                    <li>
                        <Link to={'/'}>Pages --
                            <div className='hidden'>
                                <ul>
                                    <li>Hello</li>
                                    <li>World</li>
                                </ul>
                            </div>
                        </Link>
                    </li>
                </ul>

                <button>
                    00
                </button>
            </nav>
    )
}

export default Navbar