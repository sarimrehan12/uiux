import React from 'react'
import Image from "next/image";

export default function feature() {
  return (
    <div className='w-full flex justify-center items-center pt-7'>
        <div className='w-[80%]'>
            <div className='w-full'>
                <h3 className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1 '> Feature </h3>
                <h1 className='text-slate-800 font-bold sm:text-xl md:text-3xl lg:text-3xl pt-4'>New Arrival</h1>

            </div>
            {/*container*/}
            <div className='flex sm:flex-col md:flex-row gap-x-8 gap-y-5 text-white pt-4'>
                <div className='bg-black sm:w-full md:w-[50%] relative '>
                    <div className='absolute left-4 bottom-3 text-white '>
                        <h1 className='sm:text-lg font-bold md:text-xl '>Playstation</h1>
                        <p className='relative bottom-0 text-xs py-1 '>Black And White Version Of PS5 Coming Out on Sale
                        </p>
                        <button className='text-md font-sans underline underline-offset-8 hover:font-bold '>Show Now

                        </button>

                    </div>
                      {/*Image*/}
                      <Image 
                      src={"/images/ps5.jpeg"} alt='playstation' width={500} height={500}
                      className='w-full h-full object-cover'/>

                </div>
                 {/*right container*/}
                <div className='flex flex-col gap-y-5 '>
                    <div className='bg-black relative h-full '>
                        <div className='absolute left-4 bottom-3'>
                            <h1 className='sm:text-lg font:bold md:text-xl '>Women's Collection</h1>
                            <p className='relative bottom-0 text-xs py-1 '>
                                Featured Women Collection That Gives You Another Vibe  
                            </p>
                            <button className='text-md font-sans underline underline-offset-8 hover:font-bold '>Show Now

</button>

                            

                        

                        </div>
                        {/*Image*/}
                      <Image 
                      src={"/images/women.jpg"} alt='123' width={900} height={300}
                      className='w-full h-full object-cover'/>
                      </div>
                      
            </div>
            




        </div>
    </div>
    </div>

  )
}
