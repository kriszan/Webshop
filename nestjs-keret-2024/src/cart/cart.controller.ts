import { Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Post(':productId')
  addToCart(@Param('productId') productId: number) {
    this.cartService.addToCart(productId, 1); // Default quantity of 1
    return { message: 'Product added to cart' };
  }

  @Delete(':productId')
  removeFromCart(@Param('productId') productId: number) {
    this.cartService.removeFromCart(productId);
    return { message: 'Product removed from cart' };
  }

  @Delete('clear')
  clearCart() {
    this.cartService.clearCart();
    return { message: 'Cart cleared' };
  }
}
