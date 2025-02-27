"use client";
import React, { useEffect, useState } from "react";
import ProductsCard from "../cards/ProductsCard";
import Link from "next/link";

// Define product type
interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  img: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products/api/get-all");
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

  return (
    <div>
      <div className="text-center max-w-7xl mx-auto mb-10 mt-20">
        <h3 className="text-2xl font-bold text-orange-600">Our Products</h3>
        <h2 className="text-5xl">Our Products Area</h2>
        <p >
          Discover a wide variety of high-quality products that cater to all
          your needs. <br /> From the latest trends to trusted essentials, we
          offer products designed to <br /> provide value, durability, and
          satisfaction. Explore our collection and find exactly what you're
          looking for.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/product">
            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary">
              Show All Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
