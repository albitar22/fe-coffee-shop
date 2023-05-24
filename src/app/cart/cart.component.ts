import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 15 },
    { name: 'Product 3', price: 20 }
  ];

  calculateTotal(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }
}
