import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdPermIdentity } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
export default function navbar() {
    return (
        <header className='bg-white shadow-sm mx-auto flex flex-col '>
            <div className='bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full '>
                <div className='text-center flex-1'>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
                    <a href="#" className='underline hover:text-slate-300'>
                        {""}
                        Shop Now{""}
                    </a>


                </div>
                <div className='flex items-center gap-{2px} '>
                    <div className='text-white text-sm font-normal leading-{21px}'>
                        English
                    </div>
                    <RiArrowDropDownLine className='text-white text-3xl' />
                    <div className='text-white text-sm font-normal leading-{21px}'>
                        USD
                    </div>
                    <RiArrowDropDownLine className='text-white text-3xl' />
                    <div className='text-white text-sm font-normal leading-{21px}'>
                        Login
                    </div>
                    <MdPermIdentity className='text-white text-2xl' />
                    <div className='text-white text-sm font-normal leading-{21px}'>
                        WishList
                    </div>

                </div>


            </div>
            {/*Main navigation*/}
            <div className='flex justify-between items-center px-8 py-4'> 
            <h1 className='text-2xl font-bold text-black px-12'>Exclusive</h1>


            <nav className="hidden  md:flex flex items-center space-x-8  ">
                <a href="#" className='text-slate-600 hover:text-black underline' >Home</a>
                <a href="#" className='text-slate-600 hover:text-black' >About</a>
                <a href="#" className='text-slate-600 hover:text-black' >Contact</a>
                <a href="#" className='text-slate-600 hover:text-black' >Sign up</a>
              </nav>
              
            {/*search icon*/}
<div className='flex items-center space-x-8'>
    <div className='hidden lg:flex items-center bg-slate-400 rounded-md px-3 py-2 '>
        <input type="text" 
        placeholder='Search!'
        className='bg-slate-100 outline-none text-sm'/>
        <CiSearch />

    </div>
    </div>
</div>


        </header>
    )
}







