import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

export default function hero() {
  return (
    <div className='flex justify-center items-center px-10 '>
        <div className='max-w-[1440px] flex gap-6 justify-center'>
            <div className='border-r-2 border-neutral-200 p-10 hidden md:block'>
             <ul className='space-y-4'>
                {[
                    "Women's Fashion",
                    "Men's Fashion",
                    "Electronics",
                    "Home & Lifestyle",
                    "Medicine",
                    "Sports & Outdoor",
                    "Baby's & Toys",
                    "Groceries & Pets",
                    "Health & Beauty",


                ].map ((item,index) => (
                    <li 
                    key={index}
                    className='flex justify-between items-center text-slate-800 leading-loose hover:underline cursor-pointer hover:text-blue-500 transition-all duration-150'>
                     <span>{item}</span>
                     {index < 2 && ( 
                        <MdArrowForwardIos className='text-lg ml-2' />
                     )}
                    </li>
                ))}
                </ul>         
            </div>
            {/*right side */}
 <div className='flex items-center bg-black rounded-lg p-6 px-10'>
    <div className='text-white flex flex-col jusitfy-center space-y-5 sm:w-[180px] md:w-[300px] lg:w-[400px]'>
      <div className='flex items-center gap-2'>
      <FaApple className='sm:text-2xl md:text-4xl ' />
      <span className='sm:text-sm md:text-base font-semibold'>
        {""}
        iPhone 14 Series
        </span>
        </div>
        {/*heading section */}
        <h1 className='sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug'>Up To 70% Off Voucher</h1>
        <Link
        href={"#products"}
        className='underline underline-offset-4 hover:font-semibold flex items-center gap-2 '>
          Shop Now!
          <FaArrowRight />
        </Link>

    </div>
     {/*Image */}
     <div>
      <img className='ml-auto top-4'
       src="https://tse2.mm.bing.net/th?id=OIP.zH8CTZW24l-EdCI00VdecQAAAA&pid=Api&P=0&h=220" alt="iphone" />
     </div>

 </div>
        </div>
    </div>
  )
}




