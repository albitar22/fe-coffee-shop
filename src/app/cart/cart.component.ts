import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId);
  }

  getCartTotal(): number {
    return this.cartService.getCartTotal();
  }
}
