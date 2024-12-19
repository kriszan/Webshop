import { User, Product } from "@prisma/client";

export interface Cart {
  id: number;
  userId: number; // User who added the product to the cart
  productId: number; // The product in the cart
  quantity: number; // The quantity of the product in the cart
  createdAt: Date; // Date when the cart entry was created
  updatedAt: Date; // Date when the cart entry was last updated
  user: User; // Relation to the User model
  product: Product; // Relation to the Product model
}
