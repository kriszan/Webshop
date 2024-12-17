// src/components/ProductCard.tsx
import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  isLoggedIn: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  isLoggedIn,
}) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      {isLoggedIn && <button onClick={onAddToCart}>Add to Cart</button>}
    </div>
  );
};

export default ProductCard;
