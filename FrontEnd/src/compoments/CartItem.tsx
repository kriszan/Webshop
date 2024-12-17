// src/components/CartItem.tsx
import React from 'react';
import { Product } from '../types/index';

interface CartItemProps {
  item: { product: Product; quantity: number };
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <div>
      <h3>{item.product.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default CartItem;
