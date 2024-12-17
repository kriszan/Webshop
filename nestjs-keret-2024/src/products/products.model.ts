import { Cart } from 'src/cart/cart.model';
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date; // Date when the product was created
  updatedAt: Date; // Date when the product was last updated
  carts: Cart[]; // Relation with the Cart model
}
