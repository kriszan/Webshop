import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      <div className="row">
        {cart.length === 0 ? (
          <div className="col-12">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          cart.map((product, index) => (
            <div className="col-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;
