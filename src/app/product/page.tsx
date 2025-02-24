'use client'
import ProductsCard from "@/components/cards/ProductsCard";

import React, { useEffect, useState } from "react";


interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  img: string;
} 



const ShowAllProducts: React.FC = () => {


  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('http://localhost:3000/products/api/get-all');
        const data = await res.json();

        console.log("API Response:", data); // ডাটা চেক করার জন্য লগ
        
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Unexpected API response format:", data);
        }

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getProducts();
  }, []);

  
     
   

  // Flattening the products array
  const flattenedProducts: Product[] = products.flat();

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl text-center my-6">All Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {flattenedProducts.map((product: Product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShowAllProducts;
