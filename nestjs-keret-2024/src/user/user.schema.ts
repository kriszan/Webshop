import { Cart } from "src/cart/cart.model";
export interface User {
  id: number;
  email: string;
  password: string;
  name?: string | null;  // Optional field, may be null
  createdAt: Date;  // Date when the user was created
  updatedAt: Date;  // Date when the user was last updated
  carts: Cart[];  // Relation with the Cart model
}
