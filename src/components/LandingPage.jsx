import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineSaveAlt } from "react-icons/md";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className=' bg-[#30d8c8] h-[100vh] rounded-b-[100px]'>
            <div className='h-2/4 bg-[#5ca5ac] flex items-center justify-center flex-col'>
                <h1 className='text-6xl text-white'>Discover.Learn.Enjoy</h1>
                <p className='my-5 text-[#266b7f] font-bold'>platform for creatives around the world</p>
                <div className="flex w-72 md:w-2/4 mx-10 bg-white rounded-full px-2">
                    <input className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none" type="search" name="search" placeholder="Search..." />
                    <button type="submit" className="m-2 bg-[#30d8c8] px-4 py-2 text-white rounded-3xl">
                        Search
                    </button>
                </div>
            </div>
            <div className='h-2/4 relative w-[60vw] mx-auto'>
                <div className='bg-white p-4 rounded-md absolute top-[-50px] left-0 w-72'>
                    <div className='flex justify-between'>
                        <h1 className=''>Web Design</h1>
                        <span className='p-1 rounded-md bg-sky-500'>14</span>
                    </div>
                    <p>Lorem ipsum dolor sit, amet <br />consectetur adipisicing elit.</p>

                    <img src="./images/webdesign.webp" alt="" />
                </div>
                <div className='bg-white p-4 rounded-md absolute top-[-50px] right-0 w-96 bg-[url(./images/bgimage.webp)] bg-[cover] bg-no-repeat overflow-hidden  h-[332.59px]'>

                    <div className='flex justify-between'>
                        <h1 className=''>Finance</h1>
                        <span className='p-1 rounded-md bg-indigo-500'>25</span>
                    </div>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae explicabo quos consectetur quibusdam error, incidunt atque fuga omnis a. Nam facilis rem odit officiis.</p>


                    <button className='text-white bg-[#30d8c8] px-3 py-1 rounded-full mt-5'>Learn More</button>

                    <div className='absolute bottom-4'>
                        <div className='flex justify-between gap-44'>
                            <div className='flex gap-3'>
                                <Link className='text-gray-600 text-sm'>Share: </Link>
                                <Link className='bg-[#30d8c8] flex justify-center items-center p-1 rounded-full text-white'><IoLogoTwitter /></Link>
                                <Link className='bg-[#30d8c8] flex justify-center items-center p-1 rounded-full text-white'><FaFacebookF /></Link>
                                <Link className='bg-[#30d8c8] flex justify-center items-center p-1 rounded-full text-white'><FaInstagram /></Link>
                            </div>
                            <Link className='text-2xl text-white'>
                                <MdOutlineSaveAlt />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default LandingPage