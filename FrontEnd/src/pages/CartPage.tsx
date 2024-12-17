// src/pages/CartPage.tsx
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../compoments/CartItem";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              onRemove={() => removeFromCart(item.product.id)}
            />
          ))
        )}
      </div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
