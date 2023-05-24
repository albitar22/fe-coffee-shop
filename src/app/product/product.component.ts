import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any; // Placeholder for product data

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the product ID from the route parameter
    const productId = this.route.snapshot.paramMap.get('id');

    // Fetch product data from your backend or a service using the ID
    this.product = {
      id: productId,
      name: 'Product 1',
      description: 'This is a sample product',
      price: 10.99
    };
  }

  addToCart(product: any) {
    // Implement your logic to add the product to the cart
    console.log('Adding product to cart:', product);
  }
}
