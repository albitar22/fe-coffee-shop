import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: Product[] =[ ];

  constructor(private cartService: CartService) {
 
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe(() => {

    }, error => {

    });
  }
}
