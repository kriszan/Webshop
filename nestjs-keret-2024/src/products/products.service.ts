import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 200, description: 'Description 2' },
    // Add more mock products as needed
  ];

  findAll() {
    return this.products;
  }

  // Additional methods for sorting, searching, etc.
}
