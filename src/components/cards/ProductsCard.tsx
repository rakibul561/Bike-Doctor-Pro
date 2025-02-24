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
      <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p>{product.description}</p>
      <span className="text-orange-600 font-bold">${product.price}</span>
    </div>
  );
};

export default ProductsCard;
