import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private cart: { productId: number; quantity: number }[] = [];

  addToCart(productId: number, quantity: number) {
    const existingItem = this.cart.find((item) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ productId, quantity });
    }
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter((item) => item.productId !== productId);
  }

  clearCart() {
    this.cart = [];
  }
}
