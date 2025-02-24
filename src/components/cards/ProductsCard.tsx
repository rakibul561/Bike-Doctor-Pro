import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <div className="p-4 border rounded-lg shadow-lg">
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
      className="mt-4"><span className="text-orange-600 font-bold">Buy Now</span></Link>
     </div>
     </Link>
    </div>



   
  );
};

export default ProductsCard;
