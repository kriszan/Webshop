// src/types/index.ts

// User type
export interface User {
  id: number;
  email: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}

// Product type
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}

// Cart item type (used in Cart context)
export interface CartItem {
  product: Product;
  quantity: number;
}

// Request payload for adding/removing items in the cart
export interface AddToCartPayload {
  productId: number;
  userId: number;
}

// Cart response type (for Cart context)
export interface Cart {
  id: number;
  productId: number;
  userId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: Product;
  user: User;
}
