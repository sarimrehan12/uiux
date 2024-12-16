import Image from 'next/image';
import { FaRegEye , FaRegStar, FaStar  } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
const products =[
    {
        title: "The North Coat",
        price:"$260",
        oldPrice: "$360",
        image:"/images/coat.jpg",
        rating:"5",
        reviews:"65",
    },
    {
        title: "GGucci Duffle Bag",
        price:"$960",
        oldPrice: "$1160",
        image:"/images/bag.jpeg",
        rating:"5",
        reviews:"65",
    },
    {
        title: "RGB Liquid CPU Cooler",
        price:"$160",
        oldPrice: "$170",
        image:"/images/speaker.jpeg",
        rating:"4",
        reviews:"65",
    },
    {
        title: "Small Bookshelf",
        price:"$360",
        oldPrice: null,
        image:"/images/shelf.jpeg",
        rating:"4",
        reviews:"65",
    },
] ;
const ProductBox = ({product} : {product : any}) =>(
    <div >
        <div className="group shadow-md bg-neutral-100 w-[220px] h-[180px] flex justify-center items-center relative cursor-pointer ">
            <Image src={product.image} width={150} height={100} alt={product.title}/>
            <div className='absolute top-2 right-2 flex flex-col items-center '>
            <CiHeart  className='text-2xl text-black rounded-full p-1 bg-white'/>
            <FaRegEye className='bg-white' />

                                
            </div>
            <button className='w-full absolute bottom-0 bg-black text-white px-4 py-2 roundded-sm opacity-0 hover:opacity-100 transition-opacity duration-300  '>
                Add To Cart

            </button>

            
        </div>
        <h1 className='font-bold font-sans pt-2'>{product.title}</h1>
        <div className='flex items-center space-x-2'>
            <span className='text-red-500 font-bold'>{product.price}</span>
            {product.oldPrice && (
                <span className='text-grey-400 font-bold line-through'>{ product.oldPrice}</span>
            )}

        </div>
        <div className='flex items-center space-x-1 text-yellow-400 text-md pt-1'>
            {[...Array (5)].map ((_, index) =>
            index < product.rating? (
                <FaStar key={index}
                />
            ):( <FaRegStar key={index}/>)
            )  }
<span className='text-grey-400 text:sm ml-1'>{product.reviews}</span>
        </div>
    </div>
    
);
const Products = () =>{
    return (
        <main>
            <div className='w-full flex justify-center mt-10 mb-1'>
                <div className='w-[80%]'>
                    <div className='flex flex-col'>
                        <h3 className='text-red-500 font-bold border-1-8 border-red-400 pl-3 ml-1 '>This month</h3>
                        <div className='flex justify-between '>
                            <h1 className='text-slate-800 font-bold sm:text -md md:text-3xl pt-4'>Best Selling Products</h1>
                            <a href="#products"
                            className='bg-red-500 hover:bg-red-600 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-10 mt-3 pt-2'>
                            View All
                            </a>

                        </div>

                    </div>
                    <div className='flex flex-wrap justify-beetween mt-5 gap-y-5 '>
                        {products.map ((product: any, index: any) =>(
                            <ProductBox key= {index} product={product}/>
                        ))}

                    </div>

                </div>

            </div>
        </main>
    )
}
export default Products










