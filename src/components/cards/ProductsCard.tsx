/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

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
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow-lg" data-aos="zoom-in">
      <Link href={`/products/${product._id}`}>
      
       {/* <div className="relative w-full h-64">
       <Image
            src={product.img}
            alt="product"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />

       </div> */}

       <img src={product.img} alt="img not found" className=" lg:h-[250px] mx-auto" />


        

        <h3 className="text-xl font-bold">{product.name}</h3>
        <p>{product.description}</p>
        <div className="flex justify-between">
          <p className="mt-4">
            <span className="text-orange-600 font-bold">
              Price:${product.price}
            </span>
          </p>
          <Link href={`/products/${product._id}`} className="mt-4 text-3xl">
            <span className="text-orange-600 font-bold">
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
