import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: Product;

  constructor(private cartService: CartService) {
    this.product = {} as Product;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
