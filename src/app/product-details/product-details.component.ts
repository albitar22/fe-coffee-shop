import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any; 

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('categoryName');
    this.product = {
      id: productId,
      name: 'Product 1',
      description: 'This is a sample product',
      price: 10.99
    };
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
