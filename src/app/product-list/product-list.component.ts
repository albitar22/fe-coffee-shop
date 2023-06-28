import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/Product/product.service';
import { Product } from '../models/product';
import { CartService } from '../services/Cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categoryId!: string;
  categoryName!: string;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('categoryId') || '';
      this.categoryName = this.getCategoryName(this.categoryId);
      this.fetchProducts();
    });
  }

  fetchProducts() {
    this.productService.getProductsByCategory(this.categoryId).subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: any) => {
        console.log('Error retrieving product list:', error);
      }
    );
  }

  getCategoryName(categoryId: string): string {
    return 'Category Name';
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
