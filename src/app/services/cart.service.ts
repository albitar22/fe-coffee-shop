import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class CartService {
  cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    let item = this.cartItems.find(item => item.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    console.log(this.cartItems)
  }

  removeFromCart(productId: number) {
    let index = this.cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): Product[] {
    console.log(this.cartItems);
    return this.cartItems;
  }

  getCartTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
  }
}