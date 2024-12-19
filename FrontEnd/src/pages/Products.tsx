import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
interface Product {
  name: string;
  description: string;
  price: number;
  stock: number;
}

const queryClient = new QueryClient();

const Products: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["webshop"],
    queryFn: () =>
      fetch("http://localhost:3000/products").then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mt-5">
        <h2>Products</h2>
        <div className="row">
          {data?.map((product: Product, index: number) => (
            <div className="col-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Products;
