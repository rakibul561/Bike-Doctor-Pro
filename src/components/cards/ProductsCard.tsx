
 'use client'
import Image from "next/image";
import Link from "next/link";

import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

// Define the Product type
interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  img: string;
}

// Define props type for ProductsCard
interface ProductsCardProps {
  product: Product;
}  



const ProductsCard: React.FC<ProductsCardProps> = ({ product }) => {


  useEffect(()=>{
    Aos.init();
   },[])
  
  return ( 
    <div className="p-4 border rounded-lg shadow-lg" data-aos="zoom-in">
      <Link 
       href={`/products/${product._id}`}
      > 
      <div className="w-full h-48 md:h-64 lg:h-72 relative">
        <Image 
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            src={product.img} 
            alt="product"
        />
    </div>
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p>{product.description}</p>
     <div className="flex justify-between">
     <p className="mt-4"><span className="text-orange-600 font-bold">Price:${product.price}</span></p>
     <Link 
      href={`/products/${product._id}`}
      className="mt-4 text-3xl"><span className="text-orange-600 font-bold">
         <FaArrowRightLong/>
        </span></Link>
     </div>
     </Link>
    </div>



   
  );
};

export default ProductsCard;
