import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdHeadsetMic } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";

export default function delivery() {
  return (
    <div className='w-full sm:h-[300px] flex justify-center items-center'>
      <div className='sm:w-full lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-cols lg:flex-rows lg:justify-evenly gap-y-4' >
        {/*box1*/}
        <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-grey-800 boreder-8 '>
          <TbTruckDelivery className='text-3xl text-slate-400 pt-2'/>


          </div>
          <div>
            <h1 className='font-bold text-center'>FREE AND FAST DELIVERY</h1>
            <p className='text-sm'>free delivery on all orders above $140 </p>

          </div>

        </div>
          {/*box2*/}
          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-grey-800 boreder-8 '>
          <MdHeadsetMic className='text-3xl text-slate-400 pt-2' />


          </div>
          <div>
            <h1 className='font-bold text-center'>24/7 CUSTOMER SERVICE</h1>
            <p className='text-sm'>Friendly 24/7 customer support </p>

          </div>

        </div>
          {/*box2*/}
          <div className='w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3'>
          <div className='w-[50px] h-[50px] rounded-full bg-black flex justify-center invalid:items-center border-grey-800 boreder-8 '>
          <IoShieldCheckmark className='text-3xl text-slate-400 pt-2' />


          </div>
          <div>
            <h1 className='font-bold text-center'>MONEY BACK GUARUNTEE</h1>
            <p className='text-sm'>We return money within 30 days</p>

          </div>

        </div>

      </div>
    </div>
  )
}
