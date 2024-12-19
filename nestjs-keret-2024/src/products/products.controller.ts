import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async findAll(@Query('search') search: string, @Query('sort') sort: string) {
    let products = await this.productsService.getProducts();

    // Handle sorting, searching, and pagination here
    if (search) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sort === 'price') {
      products.sort((a, b) => a.price - b.price);
    }

    return products;
  }
}
