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
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
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

  getCartTotal(): number {
    let total = 0;
    this.cartService.getCartTotal().subscribe(value => {
      total = value;
    });
    return total;
  }
}
