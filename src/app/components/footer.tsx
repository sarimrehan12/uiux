import React from 'react'
import { FaArrowAltCircleRight,FaFacebook , FaInstagram , FaTwitter } from "react-icons/fa";

export default function footer() {
  return (
    <div className='bg-black text-white pt-10 px-20 font-poppins  '>
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-10 '>
          <div>
            <h2 className='font-medium text-xl '>Exclusive</h2>
            <p className='mt-4 text-zinc-200 font-light '>Subscribe</p>
            <p className='mt-2 text-zinc-200 font-light '>Get 10% off your first order </p>
            <div className='mt-4 relative border border-white rounded'>
              <input type="email" 
              placeholder='Enter your email'
              className='bg-black text-white p-2 flex-grow outline-none row w-full'/>
              <button type='submit'
              className='absolute top-1/2 right-2 transdform-translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-slate-800   '>
               <FaArrowAltCircleRight />

              </button>

            </div>
          </div>
{/*support section*/}
<div>
  <h2 className='font-medium text-xl '>Support </h2>
  <p className='mt-4 text-zinc-200 font-light'>111 Bijoy sarani, Dhaka Dh 1515 bagladesh </p>
  <p className='mt-4 text-zinc-200 font-light'>Exclusive@gmail.com</p>
  <p className='mt-3 text-zinc-200 font-light'>Exclusive@gmail.com</p>
</div>
{/*Accont section*/}
<div>
  <h2 className='font-medium text-xl'>Account</h2>
  <ul>
    <li>My Account</li>
    <li>Login/Register</li>
    <li> Cart</li>
    <li>Wishlist</li>
    <li>Shop</li>
  </ul>
</div>
{/*Quik section*/}
<div>
  <h2 className='font-medium text-xl'>Account</h2>
  <ul>
    <li>My Account</li>
    <li>Login/Register</li>
    <li> Cart</li>
    <li>Wishlist</li>
    <li>Shop</li>
  </ul>
</div>
{/*Download*/}
<div>
  <h2 className='font-medium  text-3xl'> Download</h2>
  <p className='mt-4 text-zinc-200 font-light'>Save $3 With App New User Only</p>
  <div className='mt-4 flex items-center gap-2'>
<div className='w-[100px] h-[100px]'>
  <img src="/images/code.webp" alt="abs" className='w-full h-full object-contain'/>
</div>
{/*Section*/}
<div >
  <img src="/images/play.jpeg" alt="abc" className='w-36 h-12 object-contain'/>
<img src="/images/apple.jpeg" alt="abc" className='w-36 h-12 object-contain' />
</div>
{/*Section*/} 
<div>
  <a href="#" className='hover:text-grey-400'>
  <FaFacebook  size={24}/>
  </a>
   <a href="#" className='hover:text-grey-400'>
   <FaInstagram size={24} />
   </a>
    <a href="#" className='hover:text-grey-400'><FaTwitter size={24} /></a>
    <a href="#" className='hover:text-grey-400'>
    <FaFacebook  size={24} />
    </a>
</div>
 </div>
</div>
{/*End*/}
        </div>

      </div>

    </div>
  )
}
