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
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
    this.calculateCartTotal();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe(() => {

    }, error => {

    });
  }

  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId).subscribe(() => {

    }, error => {

    });
  }

  calculateCartTotal(): void {
    this.cartService.getCartTotal().subscribe((value: number) => {
      this.cartTotal = value;
    });
  }
}
