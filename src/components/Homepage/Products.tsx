import React from "react";
import { products } from "../lib/product";
import ProductsCard from "../cards/ProductsCard";

// Define product type
interface Product {
  _id: string;
  name: string;
  price: string;
  description: string;
  img: string;
}

const Products: React.FC = () => {
  // Flattening the products array
  const flattenedProducts: Product[] = products.flat();

  return (
    <div>
      <div className="text-center container mx-auto">
        <h3 className="text-2xl font-bold text-orange-600">Our Products</h3>
        <h2 className="text-5xl">Our Products Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {flattenedProducts.map((product: Product) => (
            <ProductsCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
