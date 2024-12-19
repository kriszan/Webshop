// src/products/products.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Product } from '@prisma/client'; // Import Product type

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // Fetch all products
  async getProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  // Add a product to the cart (example)
  async addToCart(productId: number, userId: number) {
    // Implement adding to cart logic
  }

  // Delete product
  async deleteProduct(productId: number): Promise<void> {
    await this.prisma.product.delete({ where: { id: productId } });
  }
}
