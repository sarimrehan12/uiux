import React from 'react'
import Navbar from '@/app/components/navbar';
import Hero from '@/app/components/hero';
import Flash from '@/app/components/flash';
import Fproduct from '@/app/components/fproduct';
import Category from '@/app/components/category';
import Music from '@/app/components/music';
import Explore from '@/app/components/explore';
import Eproducts from '@/app/components/eproducts';
import Feature from '@/app/components/feature';
import Selling from '@/app/components/selling';
import Delivery from '@/app/components/delivery';
import Footer from '@/app/components/footer'



export default function page () {
  return (
   <div> 
    <Navbar/>
    <Hero/>
    <Flash/>
    <Fproduct/>
    <Category/>
    <Music/>
    <Explore/>
    <Eproducts/>
    <Feature/>
    <Selling/>
    <Delivery/>
    <Footer/>
   
   
   
   
   </div>
  )
}
